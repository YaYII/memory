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

    async def critique_and_refine(self, query: str, memories: List[str], initial_answer: str) -> str:
        """
        [Self-Correction] 批评与修正
        使用 DeepSeek-Reasoner (R1) 进行深度思考，检查初始回答的准确性。
        """
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
如果存在问题，请提供一个**修正后的回答**，必须使用{settings.MCP_MEMORY_LANGUAGE}。
"""
        # 使用 deepseek-reasoner (R1) 模型进行深度思考
        # 注意：DeepSeek R1 的 API 调用方式可能与 Chat 略有不同 (reasoning_content)，但通常兼容 Chat 接口
        # 这里假设 deepseek-reasoner 是有效的模型名
        result = await self.chat_completion(
            messages=[{"role": "user", "content": prompt}],
            model="deepseek-reasoner" 
        )
        
        if result and result.strip() != "PASS":
            print(f"🔧 Critic corrected the answer.\nOriginal: {initial_answer[:50]}...\nCorrected: {result[:50]}...")
            return result
        
        return initial_answer

    async def extract_entities(self, content: str) -> List[str]:
        """
        [Knowledge Graph] 实体提取
        从记忆中提取关键实体（文件名、变量名、技术栈、项目名），用于构建轻量级知识图谱。
        """
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
            model="deepseek-chat", # 实体提取不需要推理模型，Chat 足够
            temperature=0.1
        )
        
        try:
            if result:
                # 清理可能存在的 Markdown 代码块标记
                cleaned = result.replace("```json", "").replace("```", "").strip()
                return json.loads(cleaned)
        except:
            print(f"Entity extraction failed to parse JSON: {result}")
        
        return []

    async def optimize_memory_storage(self, memories: List[str]) -> Optional[str]:
        """
        [Memory GC] 记忆库优化 (深度思考模式)
        分析一批记忆，找出冲突、冗余，并生成优化后的版本。
        """
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
            model="deepseek-reasoner" # 使用 R1 进行深度思考
        )

    async def synthesize_search_results(self, query: str, memories: List[str]) -> Optional[str]:
        """
        基于用户查询，综合多条记忆生成一个简洁但不简单的答案。
        用于 read_memory 时的实时增强，减少 AI 的阅读负担。
        
        Strict Safety Rules:
        1. 必须基于提供的记忆回答，禁止编造 (Hallucination Control)
        2. 如果记忆中没有相关内容，直接返回 "NO_CONTEXT"
        3. 保持极简 (Conciseness)
        """
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
        # 使用 temperature=0.0 以最大程度降低幻觉
        url = f"{self.base_url}/chat/completions"
        payload = {
            "model": "deepseek-chat",
            "messages": [{"role": "user", "content": prompt}],
            "temperature": 0.0, 
            "max_tokens": 500
        }

        try:
            async with httpx.AsyncClient(timeout=10.0) as client:
                response = await client.post(url, headers=self.headers, json=payload)
                response.raise_for_status()
                data = response.json()
                content = data["choices"][0]["message"]["content"].strip()
                
                if "NO_CONTEXT" in content:
                    return None
                
                # [Self-Correction Step]
                # 使用 R1 (DeepSeek Reasoner) 进行深度反思和修正
                corrected_content = await self.critique_and_refine(query, memories, content)
                return corrected_content
                
        except Exception as e:
            print(f"Error calling DeepSeek API for synthesis: {e}")
            return None
