"""
应用生命周期管理

替代 FastAPI 已废弃的 @app.on_event("startup"/"shutdown")。
使用 asynccontextmanager lifespan，支持：
- 启动顺序依赖管理
- 平滑关闭（Graceful Shutdown）
- 任务取消和资源清理
"""

import asyncio
import logging
import signal
from contextlib import asynccontextmanager
from typing import AsyncGenerator

from fastapi import FastAPI

from mcp_memory.core.config import settings
from mcp_memory.core.logging import configure_logging

logger = logging.getLogger("mcp-memory.lifespan")

# ─── 后台任务注册表 ────────────────────────────────────────────────────────────

_background_tasks: list[asyncio.Task] = []


def _spawn(coro, name: str) -> asyncio.Task:
    """创建后台任务并注册到任务列表（用于关闭时清理）。"""
    task = asyncio.create_task(coro, name=name)
    _background_tasks.append(task)
    logger.info("Background task started: %s", name)
    return task


# ─── 后台任务定义 ─────────────────────────────────────────────────────────────

async def _graph_flush_task(state) -> None:
    """每 30 秒将脏图谱刷入磁盘。"""
    while True:
        try:
            await asyncio.sleep(30)
            state.memory_manager.store.flush_graph()
        except asyncio.CancelledError:
            logger.info("Graph flush task cancelled, flushing final state...")
            state.memory_manager.store.flush_graph()  # 关闭前最后一次 flush
            raise
        except Exception as e:
            logger.exception("Graph flush failed: %s", e)


async def _tiered_evolution_task(state) -> None:
    """分层记忆进化任务 (Storage -> Thinking -> Skill)。"""
    while True:
        try:
            await asyncio.sleep(120)  # 每2分钟进化一次
            if state.tiered_evolution:
                thinkings = await state.tiered_evolution.evolve_storage_to_thinking()
                skills = await state.tiered_evolution.evolve_thinking_to_skill()
                if thinkings > 0 or skills > 0:
                    logger.info("Tiered evolution complete: %d to thinking, %d to skill", thinkings, skills)
        except asyncio.CancelledError:
            raise
        except Exception as e:
            logger.exception("Tiered evolution failed: %s", e)
            await asyncio.sleep(60)


async def _health_check_warmup(state) -> None:
    """启动后等待各依赖就绪（ChromaDB 数据加载需要时间）。"""
    try:
        count = state.memory_manager.store.collection.count()
        logger.info("ChromaDB ready: %d memories loaded", count)
    except Exception as e:
        logger.warning("ChromaDB warmup check failed: %s", e)


# ─── 平滑关闭处理 ─────────────────────────────────────────────────────────────

async def _shutdown_all_tasks() -> None:
    """取消所有后台任务，等待它们干净退出。"""
    if not _background_tasks:
        return
    logger.info("Shutting down %d background tasks...", len(_background_tasks))
    for task in _background_tasks:
        task.cancel()
    results = await asyncio.gather(*_background_tasks, return_exceptions=True)
    for task, result in zip(_background_tasks, results):
        if isinstance(result, Exception) and not isinstance(result, asyncio.CancelledError):
            logger.warning("Task %s exited with error: %s", task.get_name(), result)
    _background_tasks.clear()
    logger.info("All background tasks stopped.")


# ─── 主 Lifespan ──────────────────────────────────────────────────────────────

@asynccontextmanager
async def app_lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    """
    FastAPI lifespan context manager。

    yield 之前：启动初始化
    yield 之后：平滑关闭
    """
    # 配置日志（最先执行）
    configure_logging()
    logger.info("MCP Memory Server starting up...")

    # 延迟导入（避免循环导入）
    from mcp_memory.memory.manager import MemoryManager
    from mcp_memory.memory.tiered_evolution import TieredEvolutionEngine

    # ── 初始化核心组件 ────────────────────────────────────────────────────────
    try:
        memory_manager = MemoryManager()
        logger.info("MemoryManager initialized")
    except Exception as e:
        logger.critical("FATAL: Failed to initialize MemoryManager: %s", e, exc_info=True)
        app.state.startup_error = str(e)
        yield
        return

    try:
        tiered_evolution = TieredEvolutionEngine(memory_manager.store)
        await tiered_evolution.initialize()
        logger.info("TieredEvolutionEngine initialized")
    except Exception as e:
        logger.error("Failed to initialize TieredEvolutionEngine: %s", e, exc_info=True)
        tiered_evolution = None

    # ── 挂载到 app.state（供路由访问）──────────────────────────────────────────
    from mcp_memory.server_state import ServerState
    state = ServerState(
        memory_manager=memory_manager,
        tiered_evolution=tiered_evolution,
    )
    app.state.server = state
    app.state.startup_error = None

    # ── 启动后台任务 ───────────────────────────────────────────────────────────
    _spawn(_graph_flush_task(state), "graph-flush")

    if settings.MCP_EVOLUTION_ENABLED:
        _spawn(_tiered_evolution_task(state), "tiered-evolution")
        logger.info("Evolution scheduler (Tiered) started")

    # 预热检查
    await _health_check_warmup(state)

    logger.info(
        "MCP Memory Server ready on %s:%d (project=%s)",
        settings.MCP_MEMORY_HOST,
        settings.MCP_MEMORY_PORT,
        settings.MCP_PROJECT_ID,
    )

    # ── 让出控制权，开始服务请求 ──────────────────────────────────────────────
    yield

    # ── 开始平滑关闭 ──────────────────────────────────────────────────────────
    logger.info("MCP Memory Server shutting down...")
    await _shutdown_all_tasks()
    # 最终写脏图
    try:
        memory_manager.store.flush_graph()
    except Exception:
        pass
    logger.info("Shutdown complete.")
