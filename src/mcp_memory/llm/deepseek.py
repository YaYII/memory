import httpx
from typing import Optional, List, Dict
from mcp_memory.core.config import settings
import json

class DeepSeekClient:
    def __init__(self):
        self.api_key = settings.DEEPSEEK_API_KEY
        self.base_url = settings.DEEPSEEK_BASE_URL
        self.headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }

    async def chat_completion(self, messages: List[Dict[str, str]], model: str = "deepseek-chat") -> Optional[str]:
        """
        调用 DeepSeek API 进行对话
        """
        if not self.api_key:
            print("Warning: DEEPSEEK_API_KEY is not set. Skipping LLM call.")
            return None

        url = f"{self.base_url}/chat/completions"
        payload = {
            "model": model,
            "messages": messages,
            "temperature": 0.3 # 保持较低的随机性以获得更稳定的总结
        }

        try:
            async with httpx.AsyncClient(timeout=60.0) as client:
                response = await client.post(url, headers=self.headers, json=payload)
                response.raise_for_status()
                data = response.json()
                return data["choices"][0]["message"]["content"]
        except Exception as e:
            print(f"Error calling DeepSeek API: {e}")
            return None

    async def summarize_memories(self, memories: List[str]) -> Optional[str]:
        """
        总结一组记忆
        """
        if not memories:
            return None
            
        memory_text = "\n".join([f"- {m}" for m in memories])
        prompt = f"""
请分析以下记忆片段，并提取出核心的“知识点”或“技能”。
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
        """
        对单条记忆进行分类
        返回类别名称，如：Coding, Config, Personal, Unknown
        """
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
