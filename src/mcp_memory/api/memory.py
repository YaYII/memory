"""
核心记忆 API 路由

POST /memory/write   — 写入记忆
POST /memory/read    — 读取/检索记忆
POST /memory/delete  — 删除记忆
POST /memory/reflect — 触发深度反思
"""

import logging
from typing import List, Optional
from fastapi import APIRouter, BackgroundTasks, Request, HTTPException

from mcp_memory.core.config import settings
from mcp_memory.models.data_models import (
    ReadMemoryRequest,
    WriteMemoryRequest,
    DeleteMemoryRequest,
)
from mcp_memory.server_state import get_state

logger = logging.getLogger("mcp-memory.api.memory")
router = APIRouter(prefix="/memory", tags=["Memory"])


@router.post("/write")
async def write_memory(
    req: WriteMemoryRequest,
    request: Request,
    background_tasks: BackgroundTasks,
):
    """
    写入记忆。

    流程：
    1. 智能体预处理（分类意图）
    2. 同步写入 ChromaDB
    3. 后台触发认知增强（LLM 提取关键词/标题）
    """
    state = get_state(request)
    request_id = getattr(request.state, "request_id", "")

    # 智能体预处理
    processed = state.agent_processor.process_before_write(
        content=req.content,
        memory_type="storage",
        scope=req.scope,
        tags=[],
    )
    suggested_type = processed["metadata"].get("suggested_type", "storage")

    logger.info(
        "Writing memory: user=%s scope=%s type=%s",
        req.user_id, req.scope, suggested_type,
        extra={"request_id": request_id, "user_id": req.user_id},
    )

    memory_id = state.memory_manager.write_memory(
        req.user_id,
        req.content,
        project_id=req.project_id,
        scope=req.scope,
        title=req.title,
        keywords=req.keywords or None,
        tags=req.tags or None,
    )

    logger.info(
        "Memory written: id=%s",
        memory_id[:8],
        extra={"request_id": request_id, "memory_id": memory_id},
    )

    # 后台任务（不阻塞响应）
    background_tasks.add_task(
        state.cognitive_processor.process_memory_event,
        memory_id=memory_id,
        content=req.content,
        user_id=req.user_id,
    )
    background_tasks.add_task(
        state.memory_manager.enhance_memory_background,
        memory_id=memory_id,
        content=req.content,
        user_id=req.user_id,
    )

    return {
        "id": memory_id,
        "agent_processed": True,
        "suggested_type": suggested_type,
        "intent_analysis": processed["metadata"].get("intent_analysis", {}),
        "capabilities_applied": state.agent_processor.get_capabilities(),
    }


@router.post("/read")
async def read_memory(req: ReadMemoryRequest, request: Request):
    """
    检索记忆。

    检索策略：Vector + BM25 + Graph 2-hop 混合召回。
    若配置 DEEPSEEK_API_KEY，额外做 LLM 综合摘要（带 30s 超时）。
    """
    import asyncio

    state = get_state(request)
    request_id = getattr(request.state, "request_id", "")

    logger.info(
        "Reading memory: user=%s query=%r limit=%d",
        req.user_id, req.query[:50], req.limit,
        extra={"request_id": request_id, "user_id": req.user_id},
    )

    result, profiles = state.memory_manager.read_memory(
        req.user_id,
        req.query,
        req.project_id,
        req.limit,
        reinforce=True,
    )

    if result:
        result = state.agent_processor.process_after_read(result)

    # LLM 综合（仅当有结果且配置了 DeepSeek）
    if settings.DEEPSEEK_API_KEY and result:
        memories = [item["content"] for item in result]
        if profiles:
            profile_context = "\n".join(f"[用户画像] {p['content']}" for p in profiles)
            memories.insert(0, profile_context)

        try:
            synthesis = await asyncio.wait_for(
                state.cognitive_processor.llm.synthesize_search_results(req.query, memories),
                timeout=30.0,
            )
            if synthesis:
                logger.info(
                    "LLM synthesis complete: %d memories",
                    len(result),
                    extra={"request_id": request_id},
                )
                return [{
                    "content": f"【系统整合回答】\n{synthesis}\n\n(基于 {len(result)} 条相关记忆整合)",
                    "timestamp": result[0]["timestamp"],
                    "id": "synthesis",
                    "agent_processed": True,
                    "profiles_injected": len(profiles),
                    "capabilities_applied": state.agent_processor.get_capabilities(),
                }]
        except asyncio.TimeoutError:
            logger.warning(
                "LLM synthesis timed out (30s), using fallback synthesis",
                extra={"request_id": request_id},
            )
            # 降级策略：使用简单的关键词提取作为 fallback
            fallback_result = _fallback_synthesis(req.query, result, profiles)
            if fallback_result:
                return fallback_result
        except Exception as e:
            logger.warning(
                "LLM synthesis failed: %s, using fallback synthesis",
                e,
                extra={"request_id": request_id},
            )
            # 降级策略
            fallback_result = _fallback_synthesis(req.query, result, profiles)
            if fallback_result:
                return fallback_result

    # 普通返回
    if result:
        for item in result:
            item["agent_processed"] = True
        if profiles:
            result[0]["profile_context"] = [p["content"][:200] for p in profiles]

    return result


def _fallback_synthesis(
    query: str,
    results: List[dict],
    profiles: List[dict]
) -> Optional[List[dict]]:
    """
    LLM 合成失败时的降级策略
    
    策略：
    1. 提取最相关的记忆片段
    2. 按相关性排序
    3. 生成简单的摘要回答
    """
    if not results:
        return None
    
    # 提取前3条最相关的记忆
    top_memories = results[:3]
    
    # 构建简单的摘要
    summary_parts = []
    for i, mem in enumerate(top_memories, 1):
        content = mem.get("content", "")[:200]
        score = mem.get("score", 0)
        summary_parts.append(f"{i}. {content}... (相关度: {score:.2f})")
    
    profile_info = ""
    if profiles:
        profile_info = f"\n\n【用户画像参考】\n" + "\n".join(
            f"- {p['content'][:100]}..." for p in profiles[:2]
        )
    
    fallback_content = f"""【搜索结果摘要】
查询: {query}

找到 {len(results)} 条相关记忆，以下是前3条最相关的内容：

{chr(10).join(summary_parts)}
{profile_info}

---
(注：由于LLM服务暂时不可用，以上为简化摘要)
"""
    
    return [{
        "content": fallback_content,
        "timestamp": results[0].get("timestamp", ""),
        "id": "fallback_synthesis",
        "agent_processed": True,
        "profiles_injected": len(profiles),
        "is_fallback": True,
    }]


@router.post("/delete")
async def delete_memory(req: DeleteMemoryRequest, request: Request):
    """删除记忆（仅所有者可删除）。"""
    state = get_state(request)
    request_id = getattr(request.state, "request_id", "")

    logger.info(
        "Deleting memory: user=%s id=%s",
        req.user_id, req.memory_id[:8],
        extra={"request_id": request_id},
    )

    success = state.memory_manager.delete_memory(req.user_id, req.memory_id)
    if not success:
        raise HTTPException(status_code=404, detail="Memory not found or permission denied")

    return {"status": "deleted", "id": req.memory_id}


@router.post("/reflect")
async def reflect_memory(
    user_id: str,
    request: Request,
    background_tasks: BackgroundTasks,
):
    """触发深度反思（需配置 DEEPSEEK_API_KEY）。"""
    if not settings.DEEPSEEK_API_KEY:
        raise HTTPException(
            status_code=400,
            detail="DeepSeek API key not configured. Set DEEPSEEK_API_KEY in .env",
        )

    state = get_state(request)
    background_tasks.add_task(
        state.cognitive_processor.run_reflection,
        user_id=user_id,
    )

    logger.info("Reflection triggered: user=%s", user_id)

    return {
        "status": "started",
        "message": "Deep reflection running in background",
        "agent_mode": True,
        "capabilities": state.agent_processor.get_capabilities(),
    }
