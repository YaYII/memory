import logging
from typing import Optional, List, Dict
from mcp_memory.llm.base import BaseLLMClient, LLMResponse
from mcp_memory.llm.glm import GLMClient
from mcp_memory.llm.deepseek import DeepSeekClient
from mcp_memory.llm.token_pool import TokenPoolManager
from mcp_memory.llm.router import LLMRouter
from mcp_memory.core.config import settings

logger = logging.getLogger("mcp-memory.llm.facade")


class LLMFacade:
    """
    LLM 统一入口 - 封装路由器，为系统提供统一的 LLM 调用接口
    自动管理多模型切换和 Token 池
    """

    def __init__(self):
        self.token_pool = TokenPoolManager()
        self.router = LLMRouter(self.token_pool)
        self._initialized = False

    def is_available(self) -> bool:
        if not self._initialized:
            return False
        return len(self.router.get_sorted_providers()) > 0

    async def initialize(self):
        if self._initialized:
            return

        providers = settings.providers
        logger.info("Found %d providers in config", len(providers))

        if not providers:
            logger.warning("No LLM providers configured!")
            return

        preferred_provider = settings.MCP_LLM_PROVIDER

        for provider_config in providers:
            name = provider_config.get("name", "").lower()
            api_key = provider_config.get("api_key", "")
            base_url = provider_config.get("base_url", "")
            priority = provider_config.get("priority", 100)
            enabled = provider_config.get("enabled", True)

            if not api_key:
                logger.warning("No API key for %s, skipping...", name)
                continue

            if name == "glm":
                client = GLMClient(
                    api_key=api_key,
                    base_url=base_url or "https://open.bigmodel.cn/api/paas/v4",
                    priority=priority
                )
                self.router.register_client(client, "glm")
                logger.info("GLM client registered (priority: %d)", priority)

            elif name == "deepseek":
                client = DeepSeekClient(
                    api_key=api_key,
                    base_url=base_url or "https://api.deepseek.com",
                    priority=priority
                )
                self.router.register_client(client, "deepseek")
                logger.info("DeepSeek client registered (priority: %d)", priority)

            elif name == "openai":
                from mcp_memory.llm.openai import OpenAIClient
                client = OpenAIClient(
                    api_key=api_key,
                    base_url=base_url or "https://api.openai.com/v1",
                    priority=priority
                )
                self.router.register_client(client, "openai")
                logger.info("OpenAI client registered (priority: %d)", priority)

            elif name == "anthropic":
                from mcp_memory.llm.anthropic import AnthropicClient
                client = AnthropicClient(
                    api_key=api_key,
                    base_url=base_url or "https://api.anthropic.com/v1",
                    priority=priority
                )
                self.router.register_client(client, "anthropic")
                logger.info("Anthropic client registered (priority: %d)", priority)

        self.router.set_preferred(preferred_provider)

        fallback = "deepseek"
        if preferred_provider == "deepseek":
            fallback = "glm" if "glm" in self.router.clients else "openai"
        self.router.set_fallback(fallback)

        await self.router.health_check_all()
        await self.router.start_health_checker(interval_seconds=60)

        self._initialized = True
        logger.info("Initialization complete. Preferred: %s, Fallback: %s", preferred_provider, fallback)

    async def chat_completion(
        self,
        messages: List[Dict[str, str]],
        model: Optional[str] = None,
        temperature: float = 0.3,
        max_tokens: Optional[int] = None,
        **kwargs
    ) -> Optional[str]:
        response = await self.router.chat_completion(
            messages=messages,
            model=model,
            temperature=temperature,
            max_tokens=max_tokens,
            **kwargs
        )
        return response.content if response else None

    async def chat_completion_with_full_response(
        self,
        messages: List[Dict[str, str]],
        model: Optional[str] = None,
        temperature: float = 0.3,
        max_tokens: Optional[int] = None,
        **kwargs
    ) -> Optional[LLMResponse]:
        return await self.router.chat_completion(
            messages=messages,
            model=model,
            temperature=temperature,
            max_tokens=max_tokens,
            **kwargs
        )

    async def summarize_memories(self, memories: List[str]) -> Optional[str]:
        if not memories:
            return None

        memory_text = "\n".join([f"- {m}" for m in memories])
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
        import json
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
            temperature=0.1
        )

        try:
            if result:
                cleaned = result.replace("```json", "").replace("```", "").strip()
                return json.loads(cleaned)
        except Exception as e:
            logger.debug("Failed to parse entities JSON: %s", e)

        return []

    async def critique_and_refine(self, query: str, memories: List[str], initial_answer: str) -> str:
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
            temperature=0.1
        )

        if result and result.strip() != "PASS":
            return result

        return initial_answer

    async def optimize_memory_storage(self, memories: List[str]) -> Optional[str]:
        if not memories:
            return None

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
        return await self.chat_completion(messages=[{"role": "user", "content": prompt}])

    async def synthesize_search_results(self, query: str, memories: List[str]) -> Optional[str]:
        if not memories:
            return None

        memory_block = "\n".join([f"[{i+1}] {m}" for i, m in enumerate(memories)])

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
        content = await self.chat_completion(
            messages=[{"role": "user", "content": prompt}],
            temperature=0.0,
            max_tokens=500
        )

        if not content:
            return None

        if "NO_CONTEXT" in content:
            return None

        corrected = await self.critique_and_refine(query, memories, content)
        return corrected

    def get_recent_interactions(self, limit: int = 20) -> List[Dict]:
        if "deepseek" in self.router.clients:
            return self.router.clients["deepseek"].get_recent_interactions(limit)
        return []

    def get_status(self) -> Dict:
        return self.router.get_status()

    async def close(self):
        await self.router.close_all()
        logger.info("LLMFacade closed")


llm_facade = LLMFacade()
