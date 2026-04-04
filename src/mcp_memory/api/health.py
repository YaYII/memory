"""
健康检查 API 路由

GET /health        — 浅检查（Kubernetes liveness probe）
GET /health/ready  — 深检查（Kubernetes readiness probe，含依赖状态）
"""

import logging
import os
import time
from datetime import datetime
from typing import Any

from fastapi import APIRouter, Request
from fastapi.responses import JSONResponse

from mcp_memory.core.config import settings

logger = logging.getLogger("mcp-memory.api.health")
router = APIRouter(tags=["Health"])

_START_TIME = time.time()


@router.get("/health", summary="Liveness probe")
async def health_liveness() -> dict[str, Any]:
    """
    浅层健康检查（轻量级）。
    Kubernetes liveness probe 使用此接口，仅确认进程存活。
    """
    return {
        "status": "ok",
        "pid": os.getpid(),
        "uptime_seconds": int(time.time() - _START_TIME),
    }


@router.get("/health/ready", summary="Readiness probe")
async def health_readiness(request: Request):
    """
    深层就绪检查。
    Kubernetes readiness probe 使用此接口。
    检查所有关键依赖是否可用。
    """
    startup_error = getattr(request.app.state, "startup_error", None)
    if startup_error:
        return JSONResponse(
            status_code=503,
            content={
                "status": "not_ready",
                "reason": "startup_failed",
                "error": startup_error,
            },
        )

    checks: dict = {}
    overall_ok = True

    # ── ChromaDB 检查 ────────────────────────────────────────────────────────
    try:
        state = getattr(request.app.state, "server", None)
        if state and state.memory_manager:
            count = state.memory_manager.store.collection.count()
            checks["chromadb"] = {"status": "ok", "memory_count": count}
        else:
            checks["chromadb"] = {"status": "not_initialized"}
            overall_ok = False
    except Exception as e:
        checks["chromadb"] = {"status": "error", "detail": str(e)}
        overall_ok = False

    # ── LLM 服务检查（可选，失败不影响就绪状态）────────────────────────────
    llm_status = "disabled"
    if settings.has_llm:
        try:
            state = getattr(request.app.state, "server", None)
            if state and state.cognitive_processor:
                llm_info = state.cognitive_processor.llm.get_status()
                llm_status = "ok" if llm_info.get("available") else "degraded"
            checks["llm"] = {"status": llm_status, "provider": settings.MCP_LLM_PROVIDER}
        except Exception as e:
            checks["llm"] = {"status": "error", "detail": str(e)}
    else:
        checks["llm"] = {"status": "disabled"}

    status_code = 200 if overall_ok else 503
    return JSONResponse(
        status_code=status_code,
        content={
            "status": "ready" if overall_ok else "not_ready",
            "timestamp": datetime.utcnow().isoformat() + "Z",
            "uptime_seconds": int(time.time() - _START_TIME),
            "checks": checks,
            "version": settings.MCP_MEMORY_PORT,  # 用 port 作 build 指纹的替代
        },
    )
