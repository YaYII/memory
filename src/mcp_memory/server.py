"""
MCP Memory HTTP Server — 主入口（精简版）

职责：
1. 创建 FastAPI 应用
2. 注册中间件
3. 挂载路由
4. 提供 resolve_evolution_policy() 供其他模块使用
5. 提供 __main__ 启动入口

业务逻辑已全部迁移至：
- src/mcp_memory/api/memory.py
- src/mcp_memory/api/dashboard.py
- src/mcp_memory/api/tiered.py
- src/mcp_memory/api/health.py
- src/mcp_memory/core/lifespan.py
"""

import os
import logging
from typing import Dict, Optional

from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv

# ── 最先加载 .env（config 模块依赖环境变量）──────────────────────────────────
_env_path = os.path.join(os.path.dirname(__file__), "..", "..", ".env")
if os.path.exists(_env_path):
    load_dotenv(_env_path)

from mcp_memory.core.config import settings
from mcp_memory.core.logging import configure_logging
from mcp_memory.core.lifespan import app_lifespan
from mcp_memory.core.middleware import (
    APIKeyAuthMiddleware,
    RequestIDMiddleware,
    register_exception_handlers,
)
from mcp_memory.api.health import router as health_router
from mcp_memory.api.memory import router as memory_router
from mcp_memory.api.dashboard import router as dashboard_router
from mcp_memory.api.tiered import router as tiered_router

# 配置日志（此处调用是为了兼容直接 python -m 启动的情况）
configure_logging()
logger = logging.getLogger("mcp-memory.server")

# ─── FastAPI 应用 ──────────────────────────────────────────────────────────────

app = FastAPI(
    title="MCP Memory Server",
    description="A biologically-inspired, self-evolving AI memory system via MCP protocol.",
    version="2.1.0",
    lifespan=app_lifespan,  # 使用 lifespan 替代废弃的 @on_event
    docs_url="/docs",
    redoc_url="/redoc",
)

# ─── 中间件（注册顺序 = 执行顺序的逆序，RequestID 最先执行）───────────────────

app.add_middleware(RequestIDMiddleware)

if settings.MCP_MEMORY_API_KEY:
    app.add_middleware(APIKeyAuthMiddleware, api_key=settings.MCP_MEMORY_API_KEY)
    logger.info("API Key authentication enabled")
else:
    logger.warning("API Key authentication DISABLED (MCP_MEMORY_API_KEY not set)")

register_exception_handlers(app)

# ─── 静态文件 ──────────────────────────────────────────────────────────────────

_static_dir = os.path.join(os.path.dirname(__file__), "static")
os.makedirs(_static_dir, exist_ok=True)
app.mount("/static", StaticFiles(directory=_static_dir), name="static")

_vue_dir = os.path.join(os.path.dirname(__file__), "static_vue")
if os.path.exists(_vue_dir):
    app.mount("/vue", StaticFiles(directory=_vue_dir, html=True), name="vue")


@app.get("/", include_in_schema=False)
async def dashboard_index():
    index_path = os.path.join(_static_dir, "index.html")
    if os.path.exists(index_path):
        return FileResponse(index_path)
    return {"message": "MCP Memory Server is running. See /docs for API documentation."}


# ─── 路由挂载 ─────────────────────────────────────────────────────────────────

app.include_router(health_router)
app.include_router(memory_router)
app.include_router(dashboard_router)
app.include_router(tiered_router)


# ─── 进化策略解析（供 lifespan 任务使用）──────────────────────────────────────

def resolve_evolution_policy(state=None) -> Dict:
    """
    解析当前进化调度策略。

    优先使用运行时覆盖（通过 API 动态切换），
    其次读取环境配置，最后回落到内置策略表。
    """
    override = state.evolution_profile_override if state else None
    profile = (override or settings.MCP_EVOLUTION_PROFILE or "standard").lower()
    if profile not in ("light", "standard", "aggressive"):
        profile = "standard"

    policy_table = {
        "light":      {"scan_interval": 900,  "reflection_interval": 3600, "batch_size": 20},
        "standard":   {"scan_interval": 300,  "reflection_interval": 1800, "batch_size": 50},
        "aggressive": {"scan_interval": 120,  "reflection_interval": 900,  "batch_size": 120},
    }
    policy = policy_table[profile].copy()

    if not settings.MCP_EVOLUTION_ADAPTIVE:
        policy.update({
            "scan_interval": settings.MCP_EVOLUTION_SCAN_INTERVAL_SECONDS,
            "reflection_interval": settings.MCP_EVOLUTION_REFLECTION_INTERVAL_SECONDS,
            "batch_size": settings.MCP_EVOLUTION_SCAN_BATCH_SIZE,
            "adaptive": False,
            "profile": profile,
        })
        return policy

    # 自适应策略：根据记忆量动态调整
    memory_count = 0
    if state and state.memory_manager:
        try:
            memory_count = state.memory_manager.store.collection.count()
        except Exception:
            pass

    if memory_count >= 500:
        policy["scan_interval"] = max(policy["scan_interval"], 300)
        policy["reflection_interval"] = max(policy["reflection_interval"], 1800)
        policy["batch_size"] = min(policy["batch_size"], 80)
    elif memory_count <= 100:
        policy["scan_interval"] = min(policy["scan_interval"], 180)
        policy["reflection_interval"] = min(policy["reflection_interval"], 900)

    policy["profile"] = profile
    policy["adaptive"] = True
    policy["memory_count"] = memory_count
    return policy


# ─── 直接运行入口 ─────────────────────────────────────────────────────────────

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "mcp_memory.server:app",
        host=settings.MCP_MEMORY_HOST,
        port=settings.MCP_MEMORY_PORT,
        reload=False,
        log_config=None,       # 使用我们自己的 logging 配置，不让 uvicorn 覆盖
        access_log=False,      # 访问日志由 RequestIDMiddleware 处理
        workers=1,             # ChromaDB PersistentClient 不支持多进程共享
    )
