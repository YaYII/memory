import asyncio
import time
from typing import Optional, List, Dict, Any, Callable
from datetime import datetime
from mcp_memory.llm.base import BaseLLMClient, LLMResponse
from mcp_memory.llm.token_pool import TokenPoolManager, TokenPoolConfig


class LLMRouter:
    """
    LLM 路由器 - 智能选择最佳可用模型

    优先级策略：
    1. 优先使用配置的 preferred_provider
    2. 按 priority 数值越小越优先
    3. 自动跳过不可用或 Token 耗尽的模型
    4. DeepSeek 作为最终保底
    """

    def __init__(self, token_pool_manager: TokenPoolManager):
        self.token_pool = token_pool_manager
        self.clients: Dict[str, BaseLLMClient] = {}
        self.preferred_provider: Optional[str] = None
        self.fallback_provider: str = "deepseek"
        self.max_retries = 2
        self._health_check_task: Optional[asyncio.Task] = None
        self._running = False

    def register_client(self, client: BaseLLMClient, provider: str):
        """注册 LLM 客户端"""
        self.clients[provider] = client

        pool_config = TokenPoolConfig(
            provider=provider,
            api_key=getattr(client, 'api_key', ''),
            base_url=getattr(client, 'base_url', None),
            priority=client.priority,
            enabled=True,
            monthly_token_limit=1000000,
            daily_token_limit=100000,
            model=getattr(client, 'default_model', 'default')
        )
        self.token_pool.register_pool(pool_config)
        print(f"[LLMRouter] Registered client: {provider} (priority: {client.priority})")

    def set_preferred(self, provider: str):
        """设置首选提供商"""
        self.preferred_provider = provider
        print(f"[LLMRouter] Preferred provider set to: {provider}")

    def set_fallback(self, provider: str):
        """设置保底提供商"""
        self.fallback_provider = provider
        print(f"[LLMRouter] Fallback provider set to: {provider}")

    def get_sorted_providers(self) -> List[str]:
        """获取排序后的可用提供商列表"""
        available = []

        for provider, client in self.clients.items():
            if self.token_pool.is_pool_available(provider):
                priority = self.token_pool.pools.get(provider, TokenPoolConfig(
                    provider=provider, api_key="", priority=100
                )).priority
                available.append((provider, priority))

        available.sort(key=lambda x: x[1])
        return [p[0] for p in available]

    async def _try_client(
        self,
        client: BaseLLMClient,
        messages: List[Dict[str, str]],
        model: Optional[str] = None,
        temperature: float = 0.3,
        max_tokens: Optional[int] = None,
        **kwargs
    ) -> Optional[LLMResponse]:
        """尝试调用单个客户端"""
        try:
            response = await client.chat_completion_with_full_response(
                messages=messages,
                model=model,
                temperature=temperature,
                max_tokens=max_tokens,
                **kwargs
            )

            if response:
                self.token_pool.record_usage(client.name, response.tokens_used)
                return response

        except Exception as e:
            print(f"[LLMRouter] {client.name} failed: {e}")
            client.set_unavailable(str(e))

        return None

    async def chat_completion(
        self,
        messages: List[Dict[str, str]],
        model: Optional[str] = None,
        temperature: float = 0.3,
        max_tokens: Optional[int] = None,
        preferred_provider: Optional[str] = None,
        **kwargs
    ) -> Optional[LLMResponse]:
        """
        智能路由选择最佳模型进行调用

        策略：
        1. 优先尝试 preferred_provider（如果有）
        2. 然后按优先级尝试其他可用模型
        3. 最后尝试 fallback
        4. 所有都失败返回 None
        """
        providers_to_try = []

        if preferred_provider and preferred_provider in self.clients:
            providers_to_try.append(preferred_provider)

        for provider in self.get_sorted_providers():
            if provider not in providers_to_try:
                providers_to_try.append(provider)

        if self.fallback_provider not in providers_to_try and self.fallback_provider in self.clients:
            providers_to_try.append(self.fallback_provider)

        last_error = None
        for provider in providers_to_try:
            client = self.clients.get(provider)
            if not client:
                continue

            print(f"[LLMRouter] Trying provider: {provider}")
            response = await self._try_client(
                client, messages, model, temperature, max_tokens, **kwargs
            )

            if response:
                print(f"[LLMRouter] Success: {provider}")
                return response

            last_error = client.last_error
            print(f"[LLMRouter] {provider} failed, trying next...")

        print(f"[LLMRouter] All providers failed. Last error: {last_error}")
        return None

    async def chat_completion_with_fallback(
        self,
        messages: List[Dict[str, str]],
        model: Optional[str] = None,
        temperature: float = 0.3,
        max_tokens: Optional[int] = None,
        **kwargs
    ) -> Optional[str]:
        """
        简单版本：返回纯文本，自动处理重试和降级
        """
        response = await self.chat_completion(
            messages=messages,
            model=model,
            temperature=temperature,
            max_tokens=max_tokens,
            **kwargs
        )

        return response.content if response else None

    async def health_check_all(self):
        """健康检查所有客户端"""
        print("[LLMRouter] Running health check...")
        for provider, client in self.clients.items():
            try:
                is_healthy = await client.is_healthy()
                if is_healthy:
                    self.token_pool.enable_pool(provider)
                    print(f"[LLMRouter] {provider}: healthy")
                else:
                    if not self.token_pool.is_pool_available(provider):
                        self.token_pool.disable_pool(provider)
                    print(f"[LLMRouter] {provider}: unhealthy - {client.last_error}")
            except Exception as e:
                print(f"[LLMRouter] {provider}: health check error - {e}")
                self.token_pool.disable_pool(provider)

    async def start_health_checker(self, interval_seconds: int = 60):
        """启动定时健康检查"""
        self._running = True

        async def checker():
            while self._running:
                try:
                    await asyncio.sleep(interval_seconds)
                    await self.health_check_all()
                except asyncio.CancelledError:
                    break
                except Exception as e:
                    print(f"[LLMRouter] Health checker error: {e}")

        self._health_check_task = asyncio.create_task(checker())
        print(f"[LLMRouter] Health checker started (interval: {interval_seconds}s)")

    async def stop_health_checker(self):
        """停止健康检查"""
        self._running = False
        if self._health_check_task:
            self._health_check_task.cancel()
            try:
                await self._health_check_task
            except asyncio.CancelledError:
                pass
        print("[LLMRouter] Health checker stopped")

    def get_status(self) -> Dict[str, Any]:
        """获取路由器状态"""
        pool_status = self.token_pool.get_pool_status()
        client_stats = {
            provider: client.get_usage_stats()
            for provider, client in self.clients.items()
        }

        return {
            "preferred_provider": self.preferred_provider,
            "fallback_provider": self.fallback_provider,
            "available_providers": self.get_sorted_providers(),
            "pool_status": pool_status,
            "client_stats": client_stats
        }

    async def close_all(self):
        """关闭所有客户端连接"""
        await self.stop_health_checker()
        for client in self.clients.values():
            if hasattr(client, 'close'):
                await client.close()
        print("[LLMRouter] All clients closed")


class LLMTaskQueue:
    """
    LLM 任务队列 - 支持并发处理多个任务
    """

    def __init__(self, router: LLMRouter, max_concurrent: int = 5):
        self.router = router
        self.max_concurrent = max_concurrent
        self.semaphore = asyncio.Semaphore(max_concurrent)
        self.queue: asyncio.Queue = asyncio.Queue()
        self._running = False
        self._worker_task: Optional[asyncio.Task] = None

    async def _worker(self):
        """队列工作器"""
        while self._running:
            try:
                async with self.semaphore:
                    task = await asyncio.wait_for(self.queue.get(), timeout=1.0)
                    try:
                        result = await self.router.chat_completion(
                            messages=task.messages,
                            model=task.model,
                            temperature=task.temperature,
                            max_tokens=task.max_tokens,
                            **task.kwargs
                        )
                        if task.future and not task.future.done():
                            task.future.set_result(result)
                    except Exception as e:
                        if task.future and not task.future.done():
                            task.future.set_exception(e)
                    finally:
                        self.queue.task_done()
            except asyncio.TimeoutError:
                continue
            except Exception as e:
                print(f"[LLMTaskQueue] Worker error: {e}")

    async def submit(
        self,
        messages: List[Dict[str, str]],
        model: Optional[str] = None,
        temperature: float = 0.3,
        max_tokens: Optional[int] = None,
        **kwargs
    ) -> asyncio.Future:
        """提交任务"""
        from mcp_memory.llm.base import LLMTask

        task = LLMTask(
            messages=messages,
            model=model,
            temperature=temperature,
            max_tokens=max_tokens,
            **kwargs
        )
        task.future = asyncio.Future()

        await self.queue.put(task)
        return task.future

    async def start(self):
        """启动队列"""
        self._running = True
        self._worker_task = asyncio.create_task(self._worker())
        print(f"[LLMTaskQueue] Started (max_concurrent: {self.max_concurrent})")

    async def stop(self):
        """停止队列"""
        self._running = False
        if self._worker_task:
            self._worker_task.cancel()
            try:
                await self._worker_task
            except asyncio.CancelledError:
                pass
        print("[LLMTaskQueue] Stopped")

    def get_queue_size(self) -> int:
        """获取队列大小"""
        return self.queue.qsize()
