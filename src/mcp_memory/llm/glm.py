import httpx
import logging
from typing import Optional, List, Dict, Any
import json
import time
from mcp_memory.llm.base import BaseLLMClient, LLMResponse

logger = logging.getLogger("mcp-memory.llm.glm")


class GLMClient(BaseLLMClient):
    """
    智谱 AI (GLM) 客户端
    支持 glm-5 系列模型，包括深度思考模式
    """

    def __init__(
        self,
        api_key: Optional[str] = None,
        base_url: str = "https://open.bigmodel.cn/api/paas/v4",
        priority: int = 50
    ):
        super().__init__(name="glm", priority=priority)
        self.api_key = api_key
        self.base_url = base_url
        self.default_model = "glm-5"
        self.reasoner_model = "glm-5-reasoner"
        self._session: Optional[httpx.AsyncClient] = None

    async def _get_session(self) -> httpx.AsyncClient:
        if self._session is None or self._session.is_closed:
            self._session = httpx.AsyncClient(
                timeout=120.0,
                headers={
                    "Authorization": f"Bearer {self.api_key}" if self.api_key else "",
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
            resp = await session.get(
                f"{self.base_url}/models",
                headers={"Authorization": f"Bearer {self.api_key}"}
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

    def _build_payload(
        self,
        messages: List[Dict[str, str]],
        model: str,
        temperature: float = 0.3,
        max_tokens: Optional[int] = None,
        enable_thinking: bool = False,
        **kwargs
    ) -> Dict[str, Any]:
        """
        构建请求体
        参考官网: https://open.bigmodel.cn/dev/api#glm-5
        """
        payload: Dict[str, Any] = {
            "model": model,
            "messages": messages,
            "temperature": temperature
        }

        # 支持最大 65536 tokens (glm-5)
        if max_tokens:
            payload["max_tokens"] = max_tokens

        # 支持流式输出
        if kwargs.get("stream"):
            payload["stream"] = True

        # 支持深度思考模式 (thinking)
        # 参考官网示例: thinking={"type": "enabled"}
        if enable_thinking or kwargs.get("thinking"):
            thinking_config = kwargs.get("thinking")
            if isinstance(thinking_config, dict):
                payload["thinking"] = thinking_config
            else:
                payload["thinking"] = {"type": "enabled"}

        # 支持其他参数
        if "top_p" in kwargs:
            payload["top_p"] = kwargs["top_p"]
        if "presence_penalty" in kwargs:
            payload["presence_penalty"] = kwargs["presence_penalty"]
        if "frequency_penalty" in kwargs:
            payload["frequency_penalty"] = kwargs["frequency_penalty"]

        return payload

    async def chat_completion(
        self,
        messages: List[Dict[str, str]],
        model: Optional[str] = None,
        temperature: float = 0.3,
        max_tokens: Optional[int] = None,
        enable_thinking: bool = False,
        **kwargs
    ) -> Optional[str]:
        """
        调用 GLM 生成回复

        Args:
            messages: 对话消息列表
            model: 模型名称，默认 glm-5
            temperature: 温度参数 (0-1)
            max_tokens: 最大输出 tokens (glm-5 支持最大 65536)
            enable_thinking: 是否启用深度思考模式
            **kwargs: 其他参数 (thinking, top_p, etc.)
        """
        if not self.api_key:
            self.set_unavailable("No API key configured")
            return None

        url = f"{self.base_url}/chat/completions"
        model = model or self.default_model

        payload = self._build_payload(
            messages=messages,
            model=model,
            temperature=temperature,
            max_tokens=max_tokens,
            enable_thinking=enable_thinking,
            **kwargs
        )

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

        except httpx.HTTPStatusError as e:
            self.record_request(success=False)
            error_msg = f"HTTP {e.response.status_code}: {e.response.text[:200]}"
            self.set_unavailable(error_msg)
            logger.warning("[GLM] API Error: %s", error_msg)
            return None
        except Exception as e:
            self.record_request(success=False)
            error_msg = str(e)
            self.set_unavailable(error_msg)
            logger.warning("[GLM] Request Error: %s", error_msg)
            return None

    async def chat_completion_with_full_response(
        self,
        messages: List[Dict[str, str]],
        model: Optional[str] = None,
        temperature: float = 0.3,
        max_tokens: Optional[int] = None,
        enable_thinking: bool = False,
        **kwargs
    ) -> Optional[LLMResponse]:
        """
        获取完整响应包含元数据

        返回包含 thinking 内容（如果启用深度思考模式）
        """
        if not self.api_key:
            return None

        url = f"{self.base_url}/chat/completions"
        model = model or self.default_model

        payload = self._build_payload(
            messages=messages,
            model=model,
            temperature=temperature,
            max_tokens=max_tokens,
            enable_thinking=enable_thinking,
            **kwargs
        )

        start_time = time.perf_counter()
        try:
            session = await self._get_session()
            response = await session.post(url, json=payload)
            response.raise_for_status()
            data = response.json()

            latency_ms = int((time.perf_counter() - start_time) * 1000)

            # 获取回复内容
            message = data["choices"][0]["message"]
            content = message.get("content", "")

            # 如果启用了 thinking 模式，获取思考内容
            thinking_content = message.get("thinking", "")

            usage = data.get("usage", {})
            tokens_used = usage.get("total_tokens", 0)

            self.record_request(success=True, tokens_used=tokens_used)
            self.set_available()

            # 如果有 thinking 内容，合并到 content 中
            full_content = content
            if thinking_content:
                full_content = f"[思考过程]\n{thinking_content}\n\n[回复]\n{content}"

            return LLMResponse(
                content=full_content,
                model=model,
                provider="glm",
                tokens_used=tokens_used,
                latency_ms=latency_ms,
                raw_response=data
            )

        except Exception as e:
            self.record_request(success=False)
            self.set_unavailable(str(e))
            logger.warning("[GLM] Full Response Error: %s", e)
            return None

    async def summarize_memories(self, memories: List[str]) -> Optional[str]:
        """总结记忆"""
        if not memories:
            return None

        memory_text = "\n".join([f"- {m}" for m in memories])
        from mcp_memory.core.config import settings
        prompt = f"""
请分析以下记忆片段，并提取出核心的"知识点"或"技能"。
忽略琐碎的对话细节，只保留可复用的经验、配置、规则或偏好。
如果内容杂乱，请尝试分类整理。
请使用{settings.MCP_MEMORY_LANGUAGE}回复。

记忆片段：
{memory_text}

总结与技能提取：
"""
        messages = [{"role": "user", "content": prompt}]
        return await self.chat_completion(messages)

    async def classify_memory(self, content: str) -> Optional[str]:
        """分类记忆"""
        prompt = f"""
请将以下记忆内容分类为以下类别之一：
- Coding (编程知识、代码片段)
- Config (环境配置、安装命令)
- Personal (用户偏好、习惯)
- Knowledge (通用百科知识)
- Other (其他)

只返回类别名称，不要包含其他文字。

内容：
{content}
"""
        messages = [{"role": "user", "content": prompt}]
        result = await self.chat_completion(messages)
        return result.strip() if result else None

    async def extract_entities(self, content: str) -> List[str]:
        """提取实体"""
        prompt = f"""
请从以下内容中提取关键实体 (Entities)。
关注：文件名、配置项、变量名、错误码、技术栈名称、项目名称。
忽略：通用词汇、动词、形容词。

内容：
{content}

请返回一个 JSON 列表，例如：["config.py", "GLM_API_KEY", "FastAPI"]
只返回 JSON，不要 Markdown 格式。
"""
        result = await self.chat_completion(
            messages=[{"role": "user", "content": prompt}],
            temperature=0.1
        )

        try:
            if result:
                cleaned = result.replace("```json", "").replace("```", "").strip()
                return json.loads(cleaned)
        except:
            logger.warning("[GLM] Entity extraction failed to parse JSON: %s", result[:100])

        return []

    async def close(self):
        """关闭会话"""
        if self._session and not self._session.is_closed:
            await self._session.aclose()
