"""
三层记忆进化引擎 (Tiered Evolution Engine) - 工业级重构版

核心逻辑：
1. Episodic (Storage) -> Semantic (Thinking): 
   拉取最近的原始对话片段，通过 LLM 聚合为高阶语义经验。
2. Semantic (Thinking) -> Procedural (Skill): 
   从经验中提取出绝对的、可重复执行的指令或规则（Rules/Skills）。

设计原则：
- 摒弃硬编码：一切认知由 LLM 推理产生。
- 批量处理：减少 API 调用次数，提高吞吐量。
- 状态闭环：标记已进化的节点，防止重复处理。
"""

import asyncio
import logging
import json
import re
from typing import List, Dict, Optional
from datetime import datetime

from mcp_memory.memory.long_term import MemoryStore
from mcp_memory.llm.facade import llm_facade, LLMFacade
from mcp_memory.core.config import settings

logger = logging.getLogger("mcp-memory.memory.tiered_evolution")


class TieredEvolutionEngine:
    def __init__(self, memory_store: MemoryStore):
        self.store = memory_store
        self.llm: LLMFacade = llm_facade
        
        # 进化策略常量
        self.MIN_STORAGE_FOR_THINKING = 5  # 至少5条原始记忆才合成一次总结
        self.THINKING_FETCH_LIMIT = 20
        self.SKILL_FETCH_LIMIT = 10

    async def initialize(self):
        """确保 LLM 适配层已初始化。"""
        await self.llm.initialize()

    async def run_once(self) -> Dict[str, int]:
        """执行一个完整的进化周期。"""
        logger.info("[Evolution] Starting evolution cycle...")
        thinking_count = await self.evolve_storage_to_thinking()
        skill_count = await self.evolve_thinking_to_skill()
        return {
            "new_thinking": thinking_count,
            "new_skills": skill_count
        }

    async def evolve_storage_to_thinking(self) -> int:
        """
        [Episodic -> Semantic]
        获取未被总结的存储记忆，将其蒸馏为高质量的思维摘要。
        """
        memories = await self._get_unprocessed_memories("storage", "thinking_processed", limit=self.THINKING_FETCH_LIMIT)
        if len(memories) < self.MIN_STORAGE_FOR_THINKING:
            return 0
            
        processed_total = 0
        # 按项目空间（Scope/Project）分组，确保进化的上下文相关性
        groups = self._group_memories(memories)
        
        for group_key, group_mems in groups.items():
            # 只有当一个项目的琐碎记忆积累到一定程度才触发进化
            if len(group_mems) < self.MIN_STORAGE_FOR_THINKING:
                continue
                
            batch = group_mems[:self.MIN_STORAGE_FOR_THINKING]
            context_str = "\n".join([f"- [{m.get('timestamp')}] {m.get('content')}" for m in batch])
            
            prompt = f"""
你是一个高级人工智能认知引擎。请分析以下近期的原始工作记忆（Episodic Memory），
将它们蒸馏为一段高质量的“语义经验（Semantic Thinking）”。

【原始记忆流】
{context_str}

【目标】
1. 提炼出这段对话背后的核心意图、关键决策和达成的共识。
2. 忽略琐碎的细节（如打招呼、简单的确认）。
3. 侧重于记录“为什么这么做”以及“未来如何做得更好”。

【输出格式】必须返回 JSON：
{{
  "title": "简短有力的总结标题",
  "content": "深度思考后的语义内容，要求逻辑清晰、信息密度高",
  "key_points": ["核心要点1", "核心要点2", "..."],
  "importance": 1.0到10.0的评分
}}
"""
            try:
                response = await self.llm.chat_completion(
                    messages=[{"role": "user", "content": prompt}],
                    temperature=0.3
                )
                res_data = self._safe_parse_json(response)
                
                if res_data and "content" in res_data:
                    # 写入语义记忆层
                    new_id = self.store.save_thinking_memory(
                        content=res_data["content"],
                        user_id=batch[0].get("user_id", "system"),
                        source_memories=[m["memory_id"] for m in batch],
                        summary_type="auto_distillation",
                        key_points=res_data.get("key_points", []),
                        scope=batch[0].get("scope", "project"),
                        project_id=batch[0].get("project_id", ""),
                        confidence=res_data.get("importance", 5.0) / 10.0
                    )
                    
                    # 批量更新元数据：标记为已处理
                    for m in batch:
                        self.store.update_memory_metadata(
                            m["memory_id"], 
                            {"thinking_processed": True, "evolved_to": new_id}
                        )
                    processed_total += len(batch)
                    logger.info(f"[Evolution] Created Semantic Thinking: {new_id[:8]} from {len(batch)} items")
            except Exception as e:
                logger.error(f"[Evolution] Distillation failed for group {group_key}: {e}")
                
        return processed_total

    async def evolve_thinking_to_skill(self) -> int:
        """
        [Semantic -> Procedural]
        获取思维记忆，深度反思是否存在可固化的“技能/规则”。
        """
        memories = await self._get_unprocessed_memories("thinking", "skill_processed", limit=self.SKILL_FETCH_LIMIT)
        if not memories:
            return 0
            
        skill_total = 0
        for mem in memories:
            prompt = f"""
你是一个具备自我演进能力的 AI 大脑监视器。请审查以下“语义思维”，判断其中是否蕴含了
可以固化为“持久规则（Rules）”或“通用技能（Skills）”的内容。

【语义思维内容】
{mem['content']}

【判断准则】
- 如果包含：编码规范、特定工作流、用户强制偏好、已被验证的最佳实践。
- 如果不包含：单纯的对话记录、临时的任务状态、不具备复用价值的信息。

【输出格式】必须返回 JSON：
{{
  "is_procedural": true 或 false,
  "skill_content": "如果是，请描述该规则/技能的具体执行指令",
  "skill_type": "coding" | "workflow" | "preference" | "knowledge",
  "tags": ["核心关键词"],
  "confidence": 0.0到1.0
}}
"""
            try:
                response = await self.llm.chat_completion(
                    messages=[{"role": "user", "content": prompt}],
                    temperature=0.2
                )
                res_data = self._safe_parse_json(response)
                
                is_extracted = False
                if res_data and res_data.get("is_procedural"):
                    # 写入程序记忆层（技能）
                    skill_id = self.store.save_skill_memory(
                        content=res_data["skill_content"],
                        user_id=mem.get("user_id", "system"),
                        source_thinking=[mem["memory_id"]],
                        skill_type=res_data.get("skill_type", "knowledge"),
                        tags=res_data.get("tags", []),
                        scope="global", # Skill 通常是跨项目的
                        confidence=res_data.get("confidence", 0.9)
                    )
                    is_extracted = True
                    skill_total += 1
                    logger.info(f"[Evolution] Distilled Procedural Skill: {skill_id[:8]} from thinking {mem['memory_id'][:8]}")

                # 标记处理完成，无论是否提取出技能
                self.store.update_memory_metadata(
                    mem["memory_id"], 
                    {"skill_processed": True, "skill_extracted": is_extracted}
                )
            except Exception as e:
                logger.error(f"[Evolution] Skill extraction failed for {mem['memory_id'][:8]}: {e}")
                
        return skill_total

    async def _get_unprocessed_memories(self, memory_type: str, flag: str, limit: int) -> List[Dict]:
        """
        高效获取未处理的记忆。
        使用 ChromaDB 的 where 语法进行初步过滤（如果支持），否则在内存中进行高质量筛选。
        """
        try:
            # 首先获取一定数量的该类型记忆
            # 注意：ChromaDB 的 where 参数对于布尔值的支持在不同版本有差异，
            # 且对于“不存在字段”的查询较弱。此处先拉取，再过滤。
            candidates = self.store.query_by_type(query="", memory_type=memory_type, limit=limit * 5)
            
            unprocessed = []
            for m in candidates:
                # 检查标记是否为 True
                if not m.get(flag, False):
                    unprocessed.append(m)
                if len(unprocessed) >= limit:
                    break
            return unprocessed
        except Exception as e:
            logger.error(f"[Evolution] Fetch failed: {e}")
            return []

    def _group_memories(self, memories: List[Dict]) -> Dict[str, List[Dict]]:
        groups = {}
        for m in memories:
            key = m.get("project_id") or m.get("scope") or "default"
            if key not in groups:
                groups[key] = []
            groups[key].append(m)
        return groups

    def _safe_parse_json(self, response: Optional[str]) -> Optional[Dict]:
        if not response:
            return None
        try:
            # 容错：匹配 JSON 代码块或直接匹配大括号
            match = re.search(r'\{[\s\S]*\}', response)
            if match:
                return json.loads(match.group())
            return json.loads(response)
        except Exception:
            return None
