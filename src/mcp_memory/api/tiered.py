"""
三层记忆 API 路由

POST /tiered/storage/write                   — 写入存储记忆
POST /tiered/thinking/write                  — 写入思维记忆  
POST /tiered/skill/write                     — 写入技能记忆
GET  /tiered/query                           — 按类型查询
GET  /tiered/memory/{id}                     — 记忆详情
GET  /tiered/memory/{id}/trace               — 记忆溯源
POST /tiered/memory/{id}/feedback            — 提交反馈
GET  /tiered/stats                           — 三层统计
GET  /tiered/merged                          — 合并记忆列表
GET  /tiered/memory/{id}/merge-chain         — 合并链
POST /tiered/daily-reflection/trigger        — 触发每日反思
"""

import json
import logging
from typing import Optional

from fastapi import APIRouter, HTTPException, Request

from mcp_memory.models.data_models import (
    MemoryFeedbackRequest,
    SkillMemoryCreate,
    StorageMemoryCreate,
    ThinkingMemoryCreate,
)
from mcp_memory.server_state import get_state

logger = logging.getLogger("mcp-memory.api.tiered")
router = APIRouter(prefix="/tiered", tags=["Tiered Memory"])


# ─── 写入接口 ─────────────────────────────────────────────────────────────────

@router.post("/storage/write")
async def write_storage(req: StorageMemoryCreate, request: Request):
    state = get_state(request)
    try:
        memory_id = state.memory_manager.store.save_storage_memory(
            content=req.content, user_id=req.user_id,
            session_id=req.session_id, topic=req.topic,
            participants=req.participants, scope=req.scope,
            project_id=req.project_id,
        )
        logger.info("Storage memory written: %s", memory_id[:8])
        return {"status": "success", "memory_id": memory_id, "type": "storage"}
    except Exception:
        logger.exception("Failed to write storage memory")
        raise HTTPException(status_code=500, detail="Failed to write storage memory")


@router.post("/thinking/write")
async def write_thinking(req: ThinkingMemoryCreate, request: Request):
    state = get_state(request)
    try:
        memory_id = state.memory_manager.store.save_thinking_memory(
            content=req.content, user_id=req.user_id,
            source_memories=req.source_memories, summary_type=req.summary_type,
            key_points=req.key_points, scope=req.scope, project_id=req.project_id,
        )
        logger.info("Thinking memory written: %s", memory_id[:8])
        return {"status": "success", "memory_id": memory_id, "type": "thinking"}
    except Exception:
        logger.exception("Failed to write thinking memory")
        raise HTTPException(status_code=500, detail="Failed to write thinking memory")


@router.post("/skill/write")
async def write_skill(req: SkillMemoryCreate, request: Request):
    state = get_state(request)
    try:
        memory_id = state.memory_manager.store.save_skill_memory(
            content=req.content, user_id=req.user_id,
            source_thinking=req.source_thinking, skill_type=req.skill_type,
            tags=req.tags, scope=req.scope, project_id=req.project_id,
        )
        logger.info("Skill memory written: %s", memory_id[:8])
        return {"status": "success", "memory_id": memory_id, "type": "skill"}
    except Exception:
        logger.exception("Failed to write skill memory")
        raise HTTPException(status_code=500, detail="Failed to write skill memory")


# ─── 查询接口 ─────────────────────────────────────────────────────────────────

@router.get("/query")
async def query_tiered(
    request: Request,
    query: str = "",
    user_id: Optional[str] = None,
    memory_type: str = "all",
    limit: int = 10,
):
    state = get_state(request)
    try:
        memories = state.memory_manager.store.query_by_type(
            query=query, memory_type=memory_type, user_id=user_id, limit=limit
        )
        return {"memories": memories, "total": len(memories)}
    except Exception:
        logger.exception("Tiered query failed")
        raise HTTPException(status_code=500, detail="Query failed")


@router.get("/memory/{memory_id}")
async def get_memory_detail(
    memory_id: str,
    request: Request,
    include_sources: bool = True,
):
    state = get_state(request)
    try:
        res = state.memory_manager.store.collection.get(ids=[memory_id])
        if not res or not res["ids"]:
            raise HTTPException(status_code=404, detail="Memory not found")
        meta = res["metadatas"][0]
        detail = {
            "memory_id": memory_id,
            "content": res["documents"][0],
            "memory_type": meta.get("memory_type", "storage"),
            "timestamp": meta.get("timestamp"),
            "user_id": meta.get("user_id"),
            "scope": meta.get("scope"),
            "project_id": meta.get("project_id"),
            "confidence": float(meta.get("confidence", 1.0)),
            "verified": meta.get("verified") == "True",
            "title": meta.get("title", ""),
            "keywords": json.loads(meta.get("keywords", "[]")) if isinstance(meta.get("keywords"), str) else meta.get("keywords", []),
        }
        if include_sources:
            detail["sources"] = state.memory_manager.store.get_source_memories(memory_id)
        return detail
    except HTTPException:
        raise
    except Exception:
        logger.exception("Get tiered memory detail failed: %s", memory_id)
        raise HTTPException(status_code=500, detail="Failed to retrieve memory")


@router.get("/memory/{memory_id}/trace")
async def trace_memory(memory_id: str, request: Request, max_depth: int = 3):
    state = get_state(request)
    try:
        chain, visited = [], set()
        current_id = memory_id
        for _ in range(max_depth):
            if current_id in visited:
                break
            visited.add(current_id)
            sources = state.memory_manager.store.get_source_memories(current_id)
            if not sources:
                break
            chain.extend(sources)
            current_id = sources[0]["memory_id"]
        return {"chain": chain, "depth": len(chain)}
    except Exception:
        logger.exception("Trace memory failed: %s", memory_id)
        raise HTTPException(status_code=500, detail="Failed to trace memory")


@router.post("/memory/{memory_id}/feedback")
async def provide_feedback(memory_id: str, req: MemoryFeedbackRequest, request: Request):
    state = get_state(request)
    try:
        res = state.memory_manager.store.collection.get(ids=[memory_id])
        if not res or not res["ids"]:
            raise HTTPException(status_code=404, detail="Memory not found")
        meta = {**res["metadatas"][0]}
        meta["feedback_type"] = req.feedback_type
        meta["feedback_comment"] = req.comment or ""
        if req.suggested_content:
            meta["suggested_content"] = req.suggested_content
        state.memory_manager.store.collection.update(ids=[memory_id], metadatas=[meta])
        logger.info("Feedback recorded for memory: %s type=%s", memory_id[:8], req.feedback_type)
        return {"status": "success", "message": "Feedback recorded"}
    except HTTPException:
        raise
    except Exception:
        logger.exception("Feedback failed: %s", memory_id)
        raise HTTPException(status_code=500, detail="Failed to record feedback")


# ─── 统计 & 合并链 ─────────────────────────────────────────────────────────────

@router.get("/stats")
async def get_tiered_stats(request: Request):
    state = get_state(request)
    try:
        return state.memory_manager.store.get_tiered_stats()
    except Exception:
        logger.exception("Get tiered stats failed")
        raise HTTPException(status_code=500, detail="Failed to get stats")


@router.get("/merged")
async def get_merged_memories(request: Request, limit: int = 20):
    state = get_state(request)
    try:
        store = state.memory_manager.store
        results = store.collection.get(
            where={"is_merged_summary": {"$eq": "True"}},
            limit=limit,
        )
        items = []
        for i, mid in enumerate(results.get("ids", [])):
            meta = (results.get("metadatas") or [])[i] or {}
            items.append({
                "memory_id": mid,
                "content": (results.get("documents") or [])[i] or "",
                "timestamp": meta.get("timestamp", ""),
                "merged_from": json.loads(meta.get("source_memories", "[]"))
                    if isinstance(meta.get("source_memories"), str) else [],
            })
        return {"merged": items, "total": len(items)}
    except Exception:
        logger.exception("Get merged memories failed")
        raise HTTPException(status_code=500, detail="Failed to get merged memories")


@router.get("/memory/{memory_id}/merge-chain")
async def get_merge_chain(memory_id: str, request: Request):
    state = get_state(request)
    try:
        chain = []
        visited = set()
        queue = [memory_id]
        while queue:
            cid = queue.pop(0)
            if cid in visited:
                continue
            visited.add(cid)
            res = state.memory_manager.store.collection.get(ids=[cid])
            if not res or not res["ids"]:
                continue
            meta = res["metadatas"][0]
            chain.append({
                "memory_id": cid,
                "content": res["documents"][0][:200],
                "timestamp": meta.get("timestamp", ""),
                "memory_type": meta.get("memory_type", "storage"),
                "title": meta.get("title", ""),
            })
            src = json.loads(meta.get("source_memories", "[]")) if isinstance(meta.get("source_memories"), str) else []
            queue.extend(src)
        return {"chain": chain, "total": len(chain)}
    except Exception:
        logger.exception("Get merge chain failed: %s", memory_id)
        raise HTTPException(status_code=500, detail="Failed to get merge chain")


@router.post("/daily-reflection/trigger")
async def trigger_daily_reflection(request: Request):
    state = get_state(request)
    try:
        from mcp_memory.memory.daily_reflection import DailyReflection
        dr = DailyReflection(memory_store=state.memory_manager.store)
        import asyncio
        asyncio.create_task(dr.run_daily_reflection())
        logger.info("Daily reflection triggered manually")
        return {"status": "started", "message": "Daily reflection running in background"}
    except Exception:
        logger.exception("Failed to trigger daily reflection")
        raise HTTPException(status_code=500, detail="Failed to trigger reflection")
