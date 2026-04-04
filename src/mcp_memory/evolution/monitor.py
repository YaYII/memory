"""
进化监控 API — 实时查看进化过程

提供 SSE（Server-Sent Events）端点，让前端/CLI 可以实时看到：
- 当前进化阶段
- 正在执行的任务
- AI 的思考过程
- 任务执行结果
- 自我反思内容

类似 Java 控制台日志的实时流式输出。
"""

import asyncio
import json
import logging
import time
from collections import deque
from datetime import datetime
from typing import Any, Deque, Dict, List, Optional

from fastapi import APIRouter, Request
from fastapi.responses import StreamingResponse

logger = logging.getLogger("mcp-memory.evolution.monitor")

router = APIRouter(prefix="/evolution", tags=["evolution"])


# ─── 事件总线 ────────────────────────────────────────────────────────────────

class EvolutionEventBus:
    """进化事件总线

    所有进化操作都通过此总线发布事件，
    订阅者（SSE 客户端）可以实时接收事件。
    """

    def __init__(self, max_history: int = 500):
        self._subscribers: List[asyncio.Queue] = []
        self._history: Deque[Dict[str, Any]] = deque(maxlen=max_history)
        self._current_stage: str = "idle"
        self._current_task: Optional[Dict[str, Any]] = None
        self._cycle_count: int = 0
        self._lock = asyncio.Lock()

    async def publish(self, event_type: str, data: Dict[str, Any]) -> None:
        """发布一个进化事件

        Args:
            event_type: 事件类型
                - stage_start: 阶段开始
                - stage_end: 阶段结束
                - task_start: 任务开始
                - task_end: 任务结束
                - thinking: AI 思考
                - analysis_result: 分析结果
                - reflection_result: 反思结果
                - error: 错误
                - cycle_complete: 周期完成
            data: 事件数据
        """
        event = {
            "type": event_type,
            "timestamp": datetime.now().isoformat(),
            "data": data,
        }

        async with self._lock:
            self._history.append(event)

            # 更新状态
            if event_type == "stage_start":
                self._current_stage = data.get("stage", "")
            elif event_type == "task_start":
                self._current_task = data
            elif event_type == "task_end":
                self._current_task = None
            elif event_type == "cycle_complete":
                self._cycle_count += 1

            # 通知所有订阅者
            for queue in list(self._subscribers):
                try:
                    await queue.put(event)
                except Exception:
                    pass  # 订阅者已关闭，忽略

    async def subscribe(self) -> asyncio.Queue:
        """订阅进化事件

        Returns:
            事件队列，新订阅者会立即收到最近的历史事件
        """
        queue: asyncio.Queue = asyncio.Queue()
        async with self._lock:
            self._subscribers.append(queue)
            # 立即发送历史事件（让新客户端了解当前状态）
            for event in list(self._history)[-20:]:
                await queue.put(event)
        return queue

    async def unsubscribe(self, queue: asyncio.Queue) -> None:
        """取消订阅"""
        async with self._lock:
            if queue in self._subscribers:
                self._subscribers.remove(queue)

    def get_status(self) -> Dict[str, Any]:
        """获取当前进化状态"""
        return {
            "current_stage": self._current_stage,
            "current_task": self._current_task,
            "cycle_count": self._cycle_count,
            "recent_events": list(self._history)[-10:],
        }


# 全局事件总线实例
event_bus = EvolutionEventBus()


# ─── SSE 端点 ────────────────────────────────────────────────────────────────

@router.get("/stream")
async def evolution_stream(request: Request):
    """SSE 端点 — 实时推送进化事件

    客户端连接后，会立即收到最近的历史事件，
    然后持续接收新的进化事件。

    使用方式:
        curl http://localhost:22888/evolution/stream
        # 或在浏览器中打开
    """
    queue = await event_bus.subscribe()

    async def event_generator():
        try:
            while True:
                # 检查客户端是否断开连接
                if await request.is_disconnected():
                    break

                try:
                    # 等待新事件（超时 30s 发送心跳）
                    event = await asyncio.wait_for(queue.get(), timeout=30.0)
                    yield f"data: {json.dumps(event, ensure_ascii=False)}\n\n"
                except asyncio.TimeoutError:
                    # 发送心跳保持连接
                    yield ": heartbeat\n\n"

        except Exception as e:
            logger.debug("SSE 连接关闭: %s", e)
        finally:
            await event_bus.unsubscribe(queue)

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        },
    )


@router.get("/status")
async def evolution_status():
    """获取当前进化状态

    返回:
        - 当前阶段
        - 正在执行的任务
        - 已完成的周期数
        - 最近的事件
    """
    return event_bus.get_status()


@router.get("/history")
async def evolution_history(limit: int = 50):
    """获取进化历史事件

    Args:
        limit: 返回的事件数量

    Returns:
        历史事件列表
    """
    return {
        "events": list(event_bus._history)[-limit:],
        "total": len(event_bus._history),
    }


# ─── 便捷函数 ────────────────────────────────────────────────────────────────

async def emit_stage_start(stage: str, index: int, total: int) -> None:
    """发布阶段开始事件"""
    await event_bus.publish("stage_start", {
        "stage": stage,
        "index": index,
        "total": total,
        "progress": int((index / total) * 100),
    })


async def emit_stage_end(stage: str, duration: float) -> None:
    """发布阶段结束事件"""
    await event_bus.publish("stage_end", {
        "stage": stage,
        "duration": round(duration, 2),
    })


async def emit_task_start(task_id: str, title: str, files: List[str]) -> None:
    """发布任务开始事件"""
    await event_bus.publish("task_start", {
        "task_id": task_id,
        "title": title,
        "files": files,
    })


async def emit_task_end(task_id: str, success: bool, detail: str = "") -> None:
    """发布任务结束事件"""
    await event_bus.publish("task_end", {
        "task_id": task_id,
        "success": success,
        "detail": detail,
    })


async def emit_thinking(thought: str) -> None:
    """发布 AI 思考事件"""
    await event_bus.publish("thinking", {
        "thought": thought,
    })


async def emit_analysis_result(report: Dict[str, Any]) -> None:
    """发布代码分析结果"""
    await event_bus.publish("analysis_result", report)


async def emit_reflection_result(reflection: Dict[str, str]) -> None:
    """发布自我反思结果"""
    await event_bus.publish("reflection_result", reflection)


async def emit_error(message: str, details: str = "") -> None:
    """发布错误事件"""
    await event_bus.publish("error", {
        "message": message,
        "details": details,
    })


async def emit_cycle_complete(summary: Dict[str, Any]) -> None:
    """发布周期完成事件"""
    await event_bus.publish("cycle_complete", summary)
