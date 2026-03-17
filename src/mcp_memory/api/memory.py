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
    已简化：直接写入并触发异步增强。
    """
    state = get_state(request)
    
    logger.info(
        "Writing memory: user=%s scope=%s",
        req.user_id, req.scope
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

    # 后台任务：异步增强
    background_tasks.add_task(
        state.memory_manager.enhance_memory_background,
        memory_id=memory_id,
        content=req.content,
        user_id=req.user_id,
    )

    return {
        "id": memory_id,
        "status": "success"
    }


@router.post("/read")
async def read_memory(req: ReadMemoryRequest, request: Request):
    """
    检索记忆。
    优先考虑 Skill (程序) 记忆，并在 LLM 合成中给予最高权重。
    """
    import asyncio
    from mcp_memory.llm.facade import llm_facade

    state = get_state(request)
    
    result, profiles = state.memory_manager.read_memory(
        req.user_id,
        req.query,
        req.project_id,
        req.limit,
        reinforce=True,
    )

    # 如果有 LLM 可用且有搜索结果，进行深度整合
    if llm_facade.is_available() and result:
        # 分组：将 Skill 记忆置顶
        skills = [m["content"] for m in result if m.get("memory_type") == "skill"]
        others = [m["content"] for m in result if m.get("memory_type") != "skill"]
        
        skills_text = "无" if not skills else "\n".join(f"- {s}" for s in skills)
        others_text = "\n".join(f"- {o}" for o in others[:5])
        
        prompt = f"""
你是一个具备精准记忆能力的 AI 助手。请根据提供的记忆片段回答用户的问题。

【核心规则与技能 (PROCEDURAL RULES)】- 必须严格遵守
{skills_text}

【相关背景经验 (EPISODIC/SEMANTIC)】
{others_text}

【用户问题】
{req.query}

【指令】
1. 如果【核心规则与技能】中包含与问题直接相关的指令，必须优先采纳。
2. 结合背景经验，给出一个专业、准确且符合规则的回答。
3. 如果记忆中没有相关信息，请诚实告知。
"""
        try:
            synthesis = await asyncio.wait_for(
                llm_facade.chat_completion([{"role": "user", "content": prompt}]),
                timeout=20.0
            )
            if synthesis:
                return [{
                    "content": synthesis,
                    "timestamp": result[0]["timestamp"],
                    "id": "synthesis",
                    "type": "sythesized_answer"
                }]
        except Exception as e:
            logger.warning(f"Synthesis failed: {e}")

    # 兜底：直接返回原始检索结果
    return result


@router.post("/delete")
async def delete_memory(req: DeleteMemoryRequest, request: Request):
    """删除记忆。"""
    state = get_state(request)
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
    """触发自主进化。"""
    state = get_state(request)
    if not state.tiered_evolution:
        raise HTTPException(status_code=503, detail="Evolution engine not initialized")

    background_tasks.add_task(state.tiered_evolution.run_once)
    return {
        "status": "started",
        "message": "Autonomous evolution cycle triggered"
    }
