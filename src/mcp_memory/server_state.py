"""
服务器状态容器

将原来分散在 server.py 中的全局变量封装为类型安全的数据类。
通过 app.state.server 访问，避免全局变量污染。
"""

import asyncio
import logging
from dataclasses import dataclass, field
from typing import Optional, List

logger = logging.getLogger("mcp-memory.state")


@dataclass
class LogEntry:
    time: str
    message: str
    level: str = "info"


@dataclass
class ServerState:
    """所有服务器运行时状态的唯一容器。"""

    # 核心组件（由 lifespan 初始化）
    memory_manager: Optional[object] = None       # MemoryManager
    cognitive_processor: Optional[object] = None  # CognitiveProcessor
    agent_processor: Optional[object] = None      # MemoryAgentProcessor
    ai_brain: Optional[object] = None             # AIBrain
    tiered_evolution: Optional[object] = None     # TieredEvolutionEngine

    # 进化调度状态
    evolution_profile_override: Optional[str] = None

    # 前端日志缓冲（环形缓冲）
    _log_buffer: List[LogEntry] = field(default_factory=list)
    _log_buffer_max: int = 100  # 最多保留 100 条

    def add_log(self, message: str, level: str = "info") -> None:
        """写入前端日志缓冲（线程安全：asyncio单线程模型）。"""
        from datetime import datetime
        entry = LogEntry(
            time=datetime.now().strftime("%H:%M:%S"),
            message=message,
            level=level,
        )
        self._log_buffer.append(entry)
        if len(self._log_buffer) > self._log_buffer_max:
            self._log_buffer.pop(0)

    def get_logs(self, limit: int = 50) -> List[dict]:
        """获取最近的日志条目（倒序）。"""
        entries = list(reversed(self._log_buffer[-limit:]))
        return [{"time": e.time, "message": e.message, "level": e.level} for e in entries]

    @property
    def is_ready(self) -> bool:
        """核心组件是否全部就绪。"""
        return self.memory_manager is not None


def get_state(request) -> "ServerState":
    """
    从 FastAPI Request 获取 ServerState（用于依赖注入）。

    Usage in router:
        from fastapi import Request, Depends
        from mcp_memory.server_state import get_state

        @router.post("/memory/write")
        async def write(req: WriteMemoryRequest, request: Request):
            state = get_state(request)
            ...
    """
    state: ServerState = request.app.state.server
    if not state.is_ready:
        from fastapi import HTTPException
        raise HTTPException(status_code=503, detail="Service not ready")
    return state
