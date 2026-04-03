import httpx
import logging
from typing import Optional, List, Dict
import json
import time
from datetime import datetime
from mcp_memory.llm.base import BaseLLMClient, LLMResponse

logger = logging.getLogger("mcp-memory.llm.deepseek")


class DeepSeekClient(BaseLLMClient):
    """DeepSeek 客户端 - 作为保底模型"""

    def __init__(
        self,
        api_key: Optional[str] = None,
        base_url: str = "https://api.deepseek.com",
        priority: int = 100
    ):
        super().__init__(name="deepseek", priority=priority)
        self.api_key = api_key
        self.base_url = base_url
        self.default_model = "deepseek-chat"
        self.reasoner_model = "deepseek-reasoner"
        self._session: Optional[httpx.AsyncClient] = None
        self.interactions: List[Dict] = []

    async def _get_session(self) -> httpx.AsyncClient:
        if self._session is None or self._session.is_closed:
            self._session = httpx.AsyncClient(
                timeout=60.0,
                headers={
                    "Authorization": f"Bearer {self.api_key}" if self.api_key else "",
                    "Content-Type": "application/json"
                }
            )
        return self._session

    def _push_interaction(self, item: Dict):
        self.interactions.append(item)
        if len(self.interactions) > 200:
            self.interactions.pop(0)

    def get_recent_interactions(self, limit: int = 20) -> List[Dict]:
        return list(reversed(self.interactions[-max(1, limit):]))

    async def is_healthy(self) -> bool:
        if not self.api_key:
            self.set_unavailable("No API key configured")
            return False
        try:
            session = await self._get_session()
            url = f"{self.base_url}/chat/completions"
            resp = await session.post(
                url,
                json={"model": self.default_model, "messages": [{"role": "user", "content": "hi"}], "max_tokens": 1},
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

        request_preview = messages[-1].get("content", "")[:240] if messages else ""
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

            self._push_interaction({
                "time": datetime.now().strftime("%H:%M:%S"),
                "model": model,
                "status": "success",
                "latency_ms": latency_ms,
                "request_preview": request_preview,
                "response_preview": content[:240],
                "usage": usage
            })

            return content

        except httpx.HTTPStatusError as e:
            latency_ms = int((time.perf_counter() - start_time) * 1000)
            self.record_request(success=False)
            error_msg = f"HTTP {e.response.status_code}: {e.response.text[:100]}"
            self.set_unavailable(error_msg)

            self._push_interaction({
                "time": datetime.now().strftime("%H:%M:%S"),
                "model": model,
                "status": "error",
                "latency_ms": latency_ms,
                "request_preview": request_preview,
                "response_preview": error_msg,
                "usage": None
            })

            logger.warning("[DeepSeek] API Error: %s", error_msg)
            return None
        except Exception as e:
            latency_ms = int((time.perf_counter() - start_time) * 1000)
            self.record_request(success=False)
            error_msg = str(e)
            self.set_unavailable(error_msg)

            self._push_interaction({
                "time": datetime.now().strftime("%H:%M:%S"),
                "model": model,
                "status": "error",
                "latency_ms": latency_ms,
                "request_preview": request_preview,
                "response_preview": error_msg[:240],
                "usage": None
            })

            logger.warning("[DeepSeek] Request Error: %s", error_msg)
            return None

    async def chat_completion_with_full_response(
        self,
        messages: List[Dict[str, str]],
        model: Optional[str] = None,
        temperature: float = 0.3,
        max_tokens: Optional[int] = None,
        **kwargs
    ) -> Optional[LLMResponse]:
        """获取完整响应包含元数据"""
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

        request_preview = messages[-1].get("content", "")[:240] if messages else ""
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
                provider="deepseek",
                tokens_used=tokens_used,
                latency_ms=latency_ms,
                raw_response=data
            )

        except Exception as e:
            self.record_request(success=False)
            self.set_unavailable(str(e))
            logger.warning("[DeepSeek] Full Response Error: %s", e)
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

    async def critique_and_refine(self, query: str, memories: List[str], initial_answer: str) -> str:
        """批评与修正"""
        memory_block = "\n".join([f"[{i+1}] {m}" for i, m in enumerate(memories)])

        prompt = f"""
你是一个严格的事实核查员 (Critic)。请检查下方的 [初始回答] 是否忠实于 [参考记忆]。

[参考记忆]
{memory_block}

[用户查询]
{query}

[初始回答]
{initial_answer}

[任务]
1. 检查是否存在**幻觉** (Hallucination)：回答了记忆中不存在的信息。
2. 检查是否存在**遗漏** (Omission)：遗漏了记忆中的关键冲突或更新（例如：配置已修改）。
3. 检查**逻辑一致性**。

如果回答完美，请直接返回 "PASS"。
如果存在问题，请提供一个**修正后的回答**，必须使用简体中文。
"""
        result = await self.chat_completion(
            messages=[{"role": "user", "content": prompt}],
            model=self.reasoner_model
        )

        if result and result.strip() != "PASS":
            logger.info("Critic corrected: original=%s... corrected=%s...", initial_answer[:50], result[:50])
            return result

        return initial_answer

    async def extract_entities(self, content: str) -> List[str]:
        """提取实体"""
        prompt = f"""
请从以下内容中提取关键实体 (Entities)。
关注：文件名、配置项、变量名、错误码、技术栈名称、项目名称。
忽略：通用词汇、动词、形容词。

内容：
{content}

请返回一个 JSON 列表，例如：["config.py", "DEEPSEEK_API_KEY", "FastAPI"]
只返回 JSON，不要 Markdown 格式。
"""
        result = await self.chat_completion(
            messages=[{"role": "user", "content": prompt}],
            model=self.default_model,
            temperature=0.1
        )

        try:
            if result:
                cleaned = result.replace("```json", "").replace("```", "").strip()
                return json.loads(cleaned)
        except:
            logger.warning("[DeepSeek] Entity extraction failed to parse JSON: %s", result[:100])

        return []

    async def optimize_memory_storage(self, memories: List[str]) -> Optional[str]:
        """记忆库优化"""
        memory_block = "\n".join([f"[{i+1}] {m}" for i, m in enumerate(memories)])

        prompt = f"""
你是一个专业的记忆整理专家。请对以下记忆片段进行深度分析和重构 (Garbage Collection)。

[记忆片段]
{memory_block}

[任务]
1. **合并重复**：将意思相同的记忆合并。
2. **解决冲突**：如果存在矛盾（如配置变更），保留最新的，丢弃旧的。
3. **提炼精华**：删除无意义的闲聊，保留核心知识、技能和事实。

请输出重构后的记忆列表，每条一行，以 "- " 开头。
"""
        return await self.chat_completion(
            messages=[{"role": "user", "content": prompt}],
            model=self.reasoner_model
        )

    async def synthesize_search_results(self, query: str, memories: List[str]) -> Optional[str]:
        """综合搜索结果"""
        if not memories:
            return None

        memory_block = "\n".join([f"[{i+1}] {m}" for i, m in enumerate(memories)])
        from mcp_memory.core.config import settings

        prompt = f"""
你是一个严格的记忆检索助手。请根据以下[参考记忆]回答用户的[查询]。

[参考记忆]
{memory_block}

[查询]
{query}

[要求]
1. **只使用参考记忆中的信息**。如果参考记忆无法回答查询，请直接返回 "NO_CONTEXT"。
2. **极度简洁**。提取核心事实，不要废话，不要自我介绍。
3. **整合冲突**。如果记忆有冲突，以较新的为准。
4. **语言**。必须使用{settings.MCP_MEMORY_LANGUAGE}。

[回答格式]
- 核心结论...
- 补充细节...
"""
        url = f"{self.base_url}/chat/completions"
        payload = {
            "model": self.default_model,
            "messages": [{"role": "user", "content": prompt}],
            "temperature": 0.0,
            "max_tokens": 500
        }

        try:
            start_time = time.perf_counter()
            session = await self._get_session()
            response = await session.post(url, json=payload)
            response.raise_for_status()
            data = response.json()

            latency_ms = int((time.perf_counter() - start_time) * 1000)
            content = data["choices"][0]["message"]["content"].strip()
            usage = data.get("usage", {})

            self._push_interaction({
                "time": datetime.now().strftime("%H:%M:%S"),
                "model": self.default_model,
                "status": "success",
                "latency_ms": latency_ms,
                "request_preview": prompt[:240],
                "response_preview": content[:240],
                "usage": usage
            })

            if "NO_CONTEXT" in content:
                return None

            corrected_content = await self.critique_and_refine(query, memories, content)
            return corrected_content

        except Exception as e:
            self._push_interaction({
                "time": datetime.now().strftime("%H:%M:%S"),
                "model": self.default_model,
                "status": "error",
                "latency_ms": 0,
                "request_preview": prompt[:240],
                "response_preview": str(e)[:240],
                "usage": None
            })
            logger.warning("[DeepSeek] Synthesize Error: %s", e)
            return None

    async def close(self):
        """关闭会话"""
        if self._session and not self._session.is_closed:
            await self._session.aclose()
