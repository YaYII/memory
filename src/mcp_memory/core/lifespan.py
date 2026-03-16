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


async def _evolution_scan_task(state, policy_fn) -> None:
    """周期性记忆认知扫描 (Cognitive scan)。"""
    while True:
        try:
            policy = policy_fn()
            await asyncio.sleep(policy["scan_interval"])
            processed = await state.cognitive_processor.periodic_scan_once(
                batch_size=policy["batch_size"]
            )
            logger.info(
                "Evolution cognitive scan complete: processed=%d profile=%s",
                processed, policy["profile"],
            )
        except asyncio.CancelledError:
            raise
        except Exception as e:
            logger.exception("Evolution cognitive scan failed: %s", e)
            await asyncio.sleep(60)  # 失败后等待 60s 再重试


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


async def _evolution_reflection_task(state, policy_fn) -> None:
    """周期性记忆深度反思。"""
    while True:
        try:
            policy = policy_fn()
            await asyncio.sleep(policy["reflection_interval"])
            await state.cognitive_processor.run_reflection(
                settings.MCP_EVOLUTION_REFLECTION_USER_ID
            )
            logger.info("Evolution reflection complete: profile=%s", policy["profile"])
        except asyncio.CancelledError:
            raise
        except Exception as e:
            logger.exception("Evolution reflection failed: %s", e)
            await asyncio.sleep(120)


async def _memory_purification_task(state) -> None:
    """每 5 分钟执行 AI 大脑记忆维护。"""
    while True:
        try:
            await asyncio.sleep(300)
            if state.ai_brain:
                actions = await state.ai_brain._perform_memory_maintenance()
                logger.info("Memory purification done: %s", ", ".join(actions))
        except asyncio.CancelledError:
            raise
        except Exception as e:
            logger.exception("Memory purification failed: %s", e)


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
    from mcp_memory.memory.cognitive import CognitiveProcessor
    from mcp_memory.memory.agent_processor import MemoryAgentProcessor

    # ── 初始化核心组件 ────────────────────────────────────────────────────────
    try:
        memory_manager = MemoryManager()
        logger.info("MemoryManager initialized")
    except Exception as e:
        logger.critical("FATAL: Failed to initialize MemoryManager: %s", e, exc_info=True)
        # 不调用 sys.exit()，而是让 FastAPI 正常启动并在 /health/ready 返回 503
        # 这样 Kubernetes 可以检测到 not-ready 状态并重启 Pod
        app.state.startup_error = str(e)
        yield
        return

    try:
        cognitive_processor = CognitiveProcessor(memory_manager)
        agent_processor = MemoryAgentProcessor()
        
        from mcp_memory.memory.tiered_evolution import TieredEvolutionEngine
        tiered_evolution = TieredEvolutionEngine(memory_manager.store)
        await tiered_evolution.initialize()
        
        logger.info("CognitiveProcessor, AgentProcessor, and TieredEvolutionEngine initialized")
    except Exception as e:
        logger.error("Failed to initialize processors: %s", e, exc_info=True)
        cognitive_processor = None
        agent_processor = None
        tiered_evolution = None

    # ── 初始化 AI Brain（可选组件，失败不影响核心功能）────────────────────────
    ai_brain = None
    try:
        from mcp_memory.brain.ai_brain import AIBrain
        ai_brain = AIBrain(memory_store=memory_manager.store)
        await ai_brain.initialize()
        logger.info("AI Brain initialized")
    except Exception as e:
        logger.warning("AI Brain initialization failed (non-critical): %s", e)

    # ── 初始化 LLM 服务 ───────────────────────────────────────────────────────
    if cognitive_processor:
        try:
            await cognitive_processor.initialize()
            cognitive_processor.is_running = True
            logger.info("LLM service initialized")
        except Exception as e:
            logger.warning("LLM service initialization failed: %s", e)

    # ── 挂载到 app.state（供路由访问）──────────────────────────────────────────
    from mcp_memory.server_state import ServerState
    state = ServerState(
        memory_manager=memory_manager,
        cognitive_processor=cognitive_processor,
        agent_processor=agent_processor,
        ai_brain=ai_brain,
        tiered_evolution=tiered_evolution,
    )
    app.state.server = state
    app.state.startup_error = None

    # ── 启动后台任务 ───────────────────────────────────────────────────────────
    if cognitive_processor:
        cognitive_processor.set_logger(
            lambda msg: logger.info("[EVOLUTION] %s", msg)
        )

    _spawn(_graph_flush_task(state), "graph-flush")
    _spawn(_memory_purification_task(state), "memory-purification")

    if settings.MCP_EVOLUTION_ENABLED and cognitive_processor:
        from mcp_memory.server import resolve_evolution_policy
        _spawn(_evolution_scan_task(state, resolve_evolution_policy), "evolution-scan")
        _spawn(_evolution_reflection_task(state, resolve_evolution_policy), "evolution-reflection")
        _spawn(_tiered_evolution_task(state), "tiered-evolution")
        logger.info("Evolution scheduler started")

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
