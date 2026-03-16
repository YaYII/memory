"""
Dashboard API 路由

GET  /dashboard/stats            — 系统统计
GET  /dashboard/logs             — 日志缓冲
GET  /dashboard/events           — SSE 实时日志流
GET  /dashboard/graph            — 知识图谱数据
GET  /dashboard/memory/search    — 记忆搜索
GET  /dashboard/memory/{id}      — 记忆详情
POST /dashboard/memory/update    — 更新记忆
POST /dashboard/rebuild_graph    — 重建图谱
GET  /dashboard/evolution/status — 进化状态
POST /dashboard/evolution/profile — 切换进化策略
GET  /dashboard/llm/interactions  — LLM 交互记录
GET  /dashboard/llm/status        — LLM 状态
"""

import asyncio
import logging
from datetime import datetime, timedelta
from typing import Any, Dict, Optional, Set

import networkx as nx
from fastapi import APIRouter, BackgroundTasks, HTTPException, Request
from sse_starlette.sse import EventSourceResponse

from mcp_memory.core.config import settings
from mcp_memory.models.data_models import UpdateMemoryRequest
from mcp_memory.server_state import get_state

logger = logging.getLogger("mcp-memory.api.dashboard")
router = APIRouter(prefix="/dashboard", tags=["Dashboard"])

# ─── SSE 日志流 ───────────────────────────────────────────────────────────────

_sse_listeners: list[asyncio.Queue] = []


async def broadcast_log(message: str) -> None:
    """广播日志到所有 SSE 监听者。"""
    import json
    ts = datetime.now().strftime("%H:%M:%S")
    data = json.dumps({"time": ts, "message": message}, ensure_ascii=False)
    for q in list(_sse_listeners):
        try:
            q.put_nowait(data)
        except asyncio.QueueFull:
            pass


async def _sse_generator():
    q: asyncio.Queue = asyncio.Queue(maxsize=50)
    _sse_listeners.append(q)
    try:
        while True:
            data = await q.get()
            yield {"data": data}
    except asyncio.CancelledError:
        _sse_listeners.remove(q)


@router.get("/events")
async def events_endpoint():
    """SSE 实时日志流（前端 Dashboard 使用）。"""
    return EventSourceResponse(_sse_generator())


# ─── Stats ────────────────────────────────────────────────────────────────────

@router.get("/stats")
async def get_stats(request: Request):
    state = get_state(request)
    try:
        tiered_stats = state.memory_manager.store.get_tiered_stats()
        providers = settings.providers

        resp: Dict[str, Any] = {
            "memory_count": tiered_stats["total_count"],
            "tiered_breakdown": {
                "storage": tiered_stats["storage_count"],
                "thinking": tiered_stats["thinking_count"],
                "skill": tiered_stats["skill_count"],
            },
            "llm_enabled": settings.has_llm,
            "providers_count": len(providers),
            "preferred_provider": settings.MCP_LLM_PROVIDER,
        }

        if state.ai_brain:
            try:
                brain_status = await asyncio.wait_for(
                    state.ai_brain.get_brain_status(), timeout=5.0
                )
                resp["brain"] = {
                    "is_active": brain_status["is_active"],
                    "total_cycles": brain_status["total_cycles"],
                    "curiosity_level": brain_status["active_cognition"]["curiosity_level"],
                    "evolution_generation": brain_status["self_awareness"]["evolution_generation"],
                    "total_experiences": brain_status["self_awareness"]["total_experiences"],
                    "memory_store_connected": brain_status.get("memory_store_connected", False),
                }
            except asyncio.TimeoutError:
                resp["brain"] = {"error": "timeout"}

        return resp
    except Exception as e:
        logger.exception("Failed to get stats")
        raise HTTPException(status_code=500, detail="Failed to retrieve stats")


# ─── Logs ─────────────────────────────────────────────────────────────────────

@router.get("/logs")
async def get_logs(request: Request, limit: int = 50):
    state = get_state(request)
    return {"logs": state.get_logs(limit=limit)}


# ─── Evolution ────────────────────────────────────────────────────────────────

@router.get("/evolution/status")
async def get_evolution_status(request: Request):
    from mcp_memory.server import resolve_evolution_policy
    state = get_state(request)
    policy = resolve_evolution_policy(state)
    cp_status = state.cognitive_processor.get_status() if state.cognitive_processor else {}
    cp_status.update({
        "enabled": settings.MCP_EVOLUTION_ENABLED,
        "profile": policy["profile"],
        "adaptive": policy["adaptive"],
        "scan_interval_seconds": policy["scan_interval"],
        "reflection_interval_seconds": policy["reflection_interval"],
        "scan_batch_size": policy["batch_size"],
    })
    return cp_status


@router.post("/evolution/profile")
async def set_evolution_profile(profile: str, request: Request):
    if profile not in ("light", "standard", "aggressive"):
        raise HTTPException(status_code=400, detail="profile must be: light | standard | aggressive")
    state = get_state(request)
    state.evolution_profile_override = profile
    logger.info("Evolution profile changed to: %s", profile)
    return {"status": "ok", "profile": profile}


# ─── LLM ──────────────────────────────────────────────────────────────────────

@router.get("/llm/interactions")
async def get_llm_interactions(request: Request, limit: int = 20):
    state = get_state(request)
    if not state.cognitive_processor:
        return {"provider": None, "enabled": False, "items": []}
    return {
        "provider": settings.MCP_LLM_PROVIDER,
        "enabled": settings.has_llm,
        "items": state.cognitive_processor.llm.get_recent_interactions(limit=limit),
    }


@router.get("/llm/status")
async def get_llm_status(request: Request):
    state = get_state(request)
    if not state.cognitive_processor:
        return {"available": False}
    return state.cognitive_processor.llm.get_status()


# ─── Memory Search & Detail ───────────────────────────────────────────────────

@router.get("/memory/search")
async def search_memories(request: Request, query: str = "", limit: int = 20):
    state = get_state(request)
    try:
        items = []
        store = state.memory_manager.store
        if not query.strip():
            all_docs = store.collection.get(limit=limit)
            for i, mid in enumerate(all_docs.get("ids", [])):
                content = (all_docs.get("documents") or [])[i] if i < len(all_docs.get("documents") or []) else ""
                meta = (all_docs.get("metadatas") or [])[i] if i < len(all_docs.get("metadatas") or []) else {}
                first_line = (content or "").splitlines()[0].strip()
                title = (first_line[:28] + "…") if len(first_line) > 28 else (first_line or f"Memory {str(mid)[:8]}")
                items.append({
                    "id": mid, "title": title, "content": content,
                    "timestamp": meta.get("timestamp", ""),
                    "scope": meta.get("scope", "project"),
                    "user_id": meta.get("user_id", ""),
                    "match_type": "all",
                })
        else:
            results, _ = store.search(query, user_id="dashboard", limit=limit, reinforce=False)
            for r in results:
                content = r.get("content", "")
                first_line = content.splitlines()[0].strip() if content else ""
                title = (first_line[:28] + "…") if len(first_line) > 28 else (first_line or f"Memory {r['id'][:8]}")
                meta = r.get("metadata", {})
                items.append({
                    "id": r["id"], "title": title, "content": content,
                    "timestamp": r.get("timestamp", ""),
                    "scope": meta.get("scope", "project"),
                    "user_id": meta.get("user_id", ""),
                    "match_type": "semantic",
                })
        return {"items": items}
    except Exception as e:
        logger.exception("Memory search failed")
        raise HTTPException(status_code=500, detail="Search failed")


@router.get("/memory/{memory_id}")
async def get_memory_detail(memory_id: str, request: Request):
    state = get_state(request)
    try:
        raw = state.memory_manager.store.collection.get(ids=[memory_id])
        if not raw["ids"]:
            raise HTTPException(status_code=404, detail="Memory not found")
        meta = raw["metadatas"][0]
        return {
            "id": memory_id,
            "content": raw["documents"][0],
            "timestamp": meta.get("timestamp", ""),
            "scope": meta.get("scope", "project"),
            "user_id": meta.get("user_id", ""),
            "memory_type": meta.get("memory_type", "storage"),
            "title": meta.get("title", ""),
            "keywords": meta.get("keywords", []),
        }
    except HTTPException:
        raise
    except Exception:
        logger.exception("Get memory detail failed: %s", memory_id)
        raise HTTPException(status_code=500, detail="Failed to retrieve memory")


@router.post("/memory/update")
async def update_memory(req: UpdateMemoryRequest, request: Request, background_tasks: BackgroundTasks):
    state = get_state(request)
    success = state.memory_manager.update_memory(req.user_id, req.memory_id, req.content)
    if not success:
        raise HTTPException(status_code=404, detail="Memory not found or permission denied")
    background_tasks.add_task(
        state.cognitive_processor.process_memory_event,
        memory_id=req.memory_id,
        content=req.content,
        user_id=req.user_id,
    )
    logger.info("Memory updated: %s", req.memory_id[:8])
    return {"status": "ok", "id": req.memory_id}


# ─── Graph ────────────────────────────────────────────────────────────────────

@router.get("/graph")
async def get_graph(request: Request, days: int = 7, max_nodes: int = 1000, memory_only: bool = False):
    state = get_state(request)
    try:
        cutoff = datetime.now() - timedelta(days=days)
        G = state.memory_manager.store.graph
        data = nx.node_link_data(G)

        memory_ids = [str(n.get("id")) for n in data.get("nodes", [])
                      if n.get("type") in ("memory", "storage", "thinking", "skill")]

        memory_payload: Dict[str, dict] = {}
        filtered_ids: Set[str] = set()

        if memory_ids:
            try:
                raw = state.memory_manager.store.collection.get(ids=memory_ids)
                for i, mid in enumerate(raw.get("ids", [])):
                    content = (raw.get("documents") or [])[i] if i < len(raw.get("documents") or []) else ""
                    meta = (raw.get("metadatas") or [])[i] if i < len(raw.get("metadatas") or []) else {}
                    ts_str = meta.get("timestamp", "")
                    try:
                        if ts_str and datetime.fromisoformat(ts_str.replace("Z", "+00:00")).replace(tzinfo=None) < cutoff:
                            continue
                    except (ValueError, TypeError):
                        pass
                    first_line = (content or "").splitlines()[0].strip()
                    short = (first_line[:22] + "…") if len(first_line) > 22 else first_line or f"Memory {str(mid)[:8]}"
                    memory_payload[str(mid)] = {
                        "title": short, "detail": content or "",
                        "timestamp": ts_str, "scope": meta.get("scope", "project"),
                        "user_id": meta.get("user_id", ""), "memory_type": meta.get("memory_type", "storage"),
                    }
                    filtered_ids.add(str(mid))
            except Exception:
                logger.exception("Graph: failed to enrich memory data")

        GROUPS = {
            "storage":  {"label": "存储记忆", "color": "#4A90E2"},
            "thinking": {"label": "思维记忆", "color": "#F5A623"},
            "skill":    {"label": "技能记忆", "color": "#7ED321"},
            "entity":   {"label": "实体",     "color": "#9013FE"},
            "category": {"label": "分类",     "color": "#BD10E0"},
        }

        enriched_nodes = []
        filtered_node_ids: Set[str] = set()
        for node in data.get("nodes", []):
            nid = str(node.get("id", ""))
            ntype = node.get("type", "")
            if memory_only and ntype == "entity":
                continue
            if ntype == "memory" and nid not in filtered_ids:
                continue
            if len(filtered_node_ids) >= max_nodes:
                break
            filtered_node_ids.add(nid)
            group = "entity" if ntype == "entity" else "category" if ntype == "category" else \
                    memory_payload.get(nid, {}).get("memory_type", "storage") if ntype == "memory" else "storage"
            if ntype == "memory" and nid in memory_payload:
                mp = memory_payload[nid]
                node.update({"label": mp["title"], "title": mp["title"], "detail": mp["detail"],
                              "timestamp": mp["timestamp"], "scope": mp["scope"],
                              "user_id": mp["user_id"], "memory_type": mp.get("memory_type", "storage")})
            elif "label" not in node or not node["label"]:
                node["label"] = nid
            node["group"] = group
            node["color"] = GROUPS.get(group, {}).get("color", "#999999")
            enriched_nodes.append(node)

        filtered_links = [
            lnk for lnk in data.get("links", [])
            if str(lnk.get("source", "")) in filtered_node_ids
            and str(lnk.get("target", "")) in filtered_node_ids
        ]
        return {"nodes": enriched_nodes, "links": filtered_links}
    except Exception:
        logger.exception("Graph data error")
        return {"nodes": [], "links": []}


@router.post("/rebuild_graph")
async def rebuild_graph(request: Request, background_tasks: BackgroundTasks):
    state = get_state(request)

    async def _run():
        try:
            all_mem = state.memory_manager.store.collection.get()
            ids, docs, metas = all_mem["ids"], all_mem["documents"], all_mem["metadatas"]
            logger.info("Rebuild graph: scanning %d memories", len(ids))
            for i in range(len(ids)):
                await state.cognitive_processor.process_memory_event(
                    memory_id=ids[i], content=docs[i], user_id=metas[i].get("user_id", "system"),
                    metadata=metas[i],
                )
                if i % 10 == 0:
                    await asyncio.sleep(0.1)
            logger.info("Graph rebuild complete")
        except Exception:
            logger.exception("Graph rebuild failed")

    background_tasks.add_task(_run)
    return {"status": "started", "message": "Graph rebuild running in background"}
