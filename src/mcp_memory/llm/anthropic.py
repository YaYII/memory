import httpx
from typing import Optional, List, Dict
import json
import time
from mcp_memory.llm.base import BaseLLMClient, LLMResponse


class AnthropicClient(BaseLLMClient):
    """Anthropic (Claude) 客户端"""

    def __init__(
        self,
        api_key: Optional[str] = None,
        base_url: str = "https://api.anthropic.com/v1",
        priority: int = 90
    ):
        super().__init__(name="anthropic", priority=priority)
        self.api_key = api_key
        self.base_url = base_url
        self.default_model = "claude-3-haiku-20240307"
        self._session: Optional[httpx.AsyncClient] = None

    async def _get_session(self) -> httpx.AsyncClient:
        if self._session is None or self._session.is_closed:
            self._session = httpx.AsyncClient(
                timeout=60.0,
                headers={
                    "x-api-key": self.api_key or "",
                    "Content-Type": "application/json",
                    "anthropic-version": "2023-06-01"
                }
            )
        return self._session

    async def is_healthy(self) -> bool:
        if not self.api_key:
            self.set_unavailable("No API key configured")
            return False
        try:
            session = await self._get_session()
            url = f"{self.base_url}/messages"
            resp = await session.post(
                url,
                json={
                    "model": self.default_model,
                    "max_tokens": 1,
                    "messages": [{"role": "user", "content": "hi"}]
                }
            )
            if resp.status_code == 200:
                self.set_available()
                return True
            else:
                self.set_unavailable(f"API returned {resp.status_code}")
                return False
        except Exception as e:
            self.set_unavailable(str(e))
            return False

    async def chat_completion(
        self,
        messages: List[Dict[str, str]],
        model: Optional[str] = None,
        temperature: float = 0.3,
        max_tokens: Optional[int] = None,
        **kwargs
    ) -> Optional[str]:
        if not self.api_key:
            self.set_unavailable("No API key configured")
            return None

        url = f"{self.base_url}/messages"
        model = model or self.default_model
        max_tokens = max_tokens or 1024

        anthropic_messages = []
        for msg in messages:
            role = msg.get("role", "user")
            if role == "system":
                continue
            anthropic_messages.append({
                "role": role,
                "content": msg.get("content", "")
            })

        payload: Dict = {
            "model": model,
            "messages": anthropic_messages,
            "max_tokens": max_tokens,
            "temperature": temperature
        }

        start_time = time.perf_counter()
        try:
            session = await self._get_session()
            response = await session.post(url, json=payload)
            response.raise_for_status()
            data = response.json()

            latency_ms = int((time.perf_counter() - start_time) * 1000)
            content = data["content"][0]["text"]
            usage = data.get("usage", {})
            tokens_used = usage.get("input_tokens", 0) + usage.get("output_tokens", 0)

            self.record_request(success=True, tokens_used=tokens_used)
            self.set_available()

            return content

        except Exception as e:
            self.record_request(success=False)
            self.set_unavailable(str(e))
            print(f"[Anthropic] Request Error: {e}")
            return None

    async def chat_completion_with_full_response(
        self,
        messages: List[Dict[str, str]],
        model: Optional[str] = None,
        temperature: float = 0.3,
        max_tokens: Optional[int] = None,
        **kwargs
    ) -> Optional[LLMResponse]:
        if not self.api_key:
            return None

        url = f"{self.base_url}/messages"
        model = model or self.default_model
        max_tokens = max_tokens or 1024

        anthropic_messages = []
        for msg in messages:
            role = msg.get("role", "user")
            if role == "system":
                continue
            anthropic_messages.append({
                "role": role,
                "content": msg.get("content", "")
            })

        payload: Dict = {
            "model": model,
            "messages": anthropic_messages,
            "max_tokens": max_tokens,
            "temperature": temperature
        }

        start_time = time.perf_counter()
        try:
            session = await self._get_session()
            response = await session.post(url, json=payload)
            response.raise_for_status()
            data = response.json()

            latency_ms = int((time.perf_counter() - start_time) * 1000)
            content = data["content"][0]["text"]
            usage = data.get("usage", {})
            tokens_used = usage.get("input_tokens", 0) + usage.get("output_tokens", 0)

            self.record_request(success=True, tokens_used=tokens_used)
            self.set_available()

            return LLMResponse(
                content=content,
                model=model,
                provider="anthropic",
                tokens_used=tokens_used,
                latency_ms=latency_ms,
                raw_response=data
            )

        except Exception as e:
            self.record_request(success=False)
            self.set_unavailable(str(e))
            return None

    async def close(self):
        if self._session and not self._session.is_closed:
            await self._session.aclose()
