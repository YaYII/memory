import httpx
import logging
from typing import Optional, List, Dict
import json
import time
from datetime import datetime

logger = logging.getLogger("mcp-memory.llm.openai")
from mcp_memory.llm.base import BaseLLMClient, LLMResponse


class OpenAIClient(BaseLLMClient):
    """OpenAI 客户端"""

    def __init__(
        self,
        api_key: Optional[str] = None,
        base_url: str = "https://api.openai.com/v1",
        priority: int = 80
    ):
        super().__init__(name="openai", priority=priority)
        self.api_key = api_key
        self.base_url = base_url
        self.default_model = "gpt-4o-mini"
        self._session: Optional[httpx.AsyncClient] = None

    async def _get_session(self) -> httpx.AsyncClient:
        if self._session is None or self._session.is_closed:
            self._session = httpx.AsyncClient(
                timeout=60.0,
                headers={
                    "Authorization": f"Bearer {self.api_key}",
                    "Content-Type": "application/json"
                }
            )
        return self._session

    async def is_healthy(self) -> bool:
        if not self.api_key:
            self.set_unavailable("No API key configured")
            return False
        try:
            session = await self._get_session()
            url = f"{self.base_url}/models"
            resp = await session.get(url)
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

        url = f"{self.base_url}/chat/completions"
        model = model or self.default_model

        payload: Dict = {
            "model": model,
            "messages": messages,
            "temperature": temperature
        }
        if max_tokens:
            payload["max_tokens"] = max_tokens

        start_time = time.perf_counter()
        try:
            session = await self._get_session()
            response = await session.post(url, json=payload)
            response.raise_for_status()
            data = response.json()

            latency_ms = int((time.perf_counter() - start_time) * 1000)
            content = data["choices"][0]["message"]["content"]
            usage = data.get("usage", {})
            tokens_used = usage.get("total_tokens", 0)

            self.record_request(success=True, tokens_used=tokens_used)
            self.set_available()

            return content

        except Exception as e:
            self.record_request(success=False)
            self.set_unavailable(str(e))
            logger.warning("[OpenAI] Request Error: %s", e)
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

        url = f"{self.base_url}/chat/completions"
        model = model or self.default_model

        payload: Dict = {
            "model": model,
            "messages": messages,
            "temperature": temperature
        }
        if max_tokens:
            payload["max_tokens"] = max_tokens

        start_time = time.perf_counter()
        try:
            session = await self._get_session()
            response = await session.post(url, json=payload)
            response.raise_for_status()
            data = response.json()

            latency_ms = int((time.perf_counter() - start_time) * 1000)
            content = data["choices"][0]["message"]["content"]
            usage = data.get("usage", {})
            tokens_used = usage.get("total_tokens", 0)

            self.record_request(success=True, tokens_used=tokens_used)
            self.set_available()

            return LLMResponse(
                content=content,
                model=model,
                provider="openai",
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
