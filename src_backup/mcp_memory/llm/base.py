from abc import ABC, abstractmethod
from typing import Optional, List, Dict, Any
import asyncio
import time
from datetime import datetime


class BaseLLMClient(ABC):
    """LLM 客户端抽象基类"""

    def __init__(self, name: str, priority: int = 100):
        self.name = name
        self.priority = priority
        self.is_available = True
        self.last_error: Optional[str] = None
        self.total_requests = 0
        self.failed_requests = 0
        self.total_tokens_used = 0

    @abstractmethod
    async def chat_completion(
        self,
        messages: List[Dict[str, str]],
        model: Optional[str] = None,
        temperature: float = 0.3,
        max_tokens: Optional[int] = None,
        **kwargs
    ) -> Optional[str]:
        """调用 LLM 生成回复"""
        pass

    @abstractmethod
    async def is_healthy(self) -> bool:
        """检查模型是否可用"""
        pass

    def get_usage_stats(self) -> Dict[str, Any]:
        """获取使用统计"""
        success_rate = 0 if self.total_requests == 0 else \
            (self.total_requests - self.failed_requests) / self.total_requests * 100
        return {
            "name": self.name,
            "priority": self.priority,
            "is_available": self.is_available,
            "total_requests": self.total_requests,
            "failed_requests": self.failed_requests,
            "success_rate": round(success_rate, 2),
            "total_tokens_used": self.total_tokens_used,
            "last_error": self.last_error
        }

    def record_request(self, success: bool = True, tokens_used: int = 0):
        """记录请求结果"""
        self.total_requests += 1
        if not success:
            self.failed_requests += 1
        self.total_tokens_used += tokens_used

    def set_unavailable(self, error: str):
        """标记为不可用"""
        self.is_available = False
        self.last_error = error

    def set_available(self):
        """标记为可用"""
        self.is_available = True
        self.last_error = None


class LLMResponse:
    """LLM 响应封装"""

    def __init__(
        self,
        content: str,
        model: str,
        provider: str,
        tokens_used: int = 0,
        latency_ms: int = 0,
        raw_response: Optional[Dict] = None
    ):
        self.content = content
        self.model = model
        self.provider = provider
        self.tokens_used = tokens_used
        self.latency_ms = latency_ms
        self.raw_response = raw_response
        self.timestamp = datetime.now()

    def __str__(self):
        return f"[{self.provider}/{self.model}] {self.content[:50]}..."


class LLMTask:
    """LLM 任务封装"""

    def __init__(
        self,
        messages: List[Dict[str, str]],
        task_type: str = "general",
        model: Optional[str] = None,
        temperature: float = 0.3,
        max_tokens: Optional[int] = None,
        **kwargs
    ):
        self.messages = messages
        self.task_type = task_type
        self.model = model
        self.temperature = temperature
        self.max_tokens = max_tokens
        self.kwargs = kwargs
        self.future: Optional[asyncio.Future] = None
        self.retry_count = 0
        self.created_at = datetime.now()

    @property
    def content_preview(self) -> str:
        if self.messages:
            return self.messages[-1].get("content", "")[:100]
        return ""
