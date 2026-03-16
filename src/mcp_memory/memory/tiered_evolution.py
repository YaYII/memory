"""
三层记忆进化引擎 (Tiered Evolution Engine)

负责将记忆进行流水线升级：
1. Storage (短期记忆) -> Thinking (思维沉淀)
2. Thinking (思维沉淀) -> Skill (长期技能/规则)

取代自动总结旧模块，与 ChromaDB unified store 完全集成。
"""

import asyncio
import logging
from typing import List, Dict, Optional
from datetime import datetime

from mcp_memory.memory.long_term import MemoryStore
from mcp_memory.llm.facade import llm_facade, LLMFacade

logger = logging.getLogger("mcp-memory.memory.tiered_evolution")


class TieredEvolutionEngine:
    def __init__(self, memory_store: MemoryStore):
        self.store = memory_store
        self.llm: LLMFacade = llm_facade
        self._running = False
        
        # 进化阈值设置
        self.storage_batch_size = 5
        self.thinking_batch_size = 3
        
    async def initialize(self):
        await self.llm.initialize()
        
    async def evolve_storage_to_thinking(self) -> int:
        """
        阶段 1：将未总结的 Storage 记忆浓缩为 Thinking 记忆
        """
        memories = self._get_unprocessed_memories("storage", "thinking_processed", limit=20)
        if len(memories) < self.storage_batch_size:
            return 0
            
        logger.info(f"[Evolution] Found {len(memories)} unprocessed storage memories. Evolving to thinking...")
        
        # 简单按 scope 分组处理
        processed_count = 0
        groups = self._group_memories(memories)
        
        for group_key, group_mems in groups.items():
            if len(group_mems) < self.storage_batch_size: continue
                
            batch = group_mems[:self.storage_batch_size]
            contents = [f"- {m['content']}" for m in batch]
            combined = "\n".join(contents)
            
            prompt = f"""
请分析以下近期的工作记忆/对话内容，提取出关键的思维过程、决策和上下文结论。
将它们总结成一段连贯的"思维记忆"，侧重于"为什么这么做"和"达成了什么共识"。

【原始记忆】
{combined}

【要求】
1. 使用清晰的语言，直指核心。
2. 提取出3-5个关键要点。
3. 请以 JSON 格式返回，包含 content 和 key_points，例如：
{{"content": "总结内容...", "key_points": ["要点1", "要点2"]}}
"""
            try:
                response = await self.llm.chat_completion(
                    messages=[{"role": "user", "content": prompt}],
                    temperature=0.3
                )
                if response:
                    import json
                    import re
                    match = re.search(r'\{[\s\S]*\}', response)
                    if match:
                        res_json = json.loads(match.group())
                        
                        # 创建 thinking 记忆
                        from mcp_memory.models.data_models import ThinkingMemoryCreate
                        thinking_id = self.store.create_thinking_memory(ThinkingMemoryCreate(
                            content=res_json.get("content", "系统生成思维总结"),
                            user_id=batch[0].get("user_id", "unknown"),
                            source_memories=[m["memory_id"] for m in batch],
                            summary_type="auto_evolution",
                            key_points=res_json.get("key_points", []),
                            scope=group_key
                        ))
                        
                        # 标记源记忆
                        for m in batch:
                            self.store.update_memory_metadata(
                                m["memory_id"], 
                                {"thinking_processed": True, "evolved_to": thinking_id}
                            )
                        logger.info(f"[Evolution] Evolved {len(batch)} storage memories to thinking: {thinking_id[:8]}")
                        processed_count += len(batch)
            except Exception as e:
                logger.error(f"[Evolution] Storage->Thinking failed: {e}")
                
        return processed_count

    async def evolve_thinking_to_skill(self) -> int:
        """
        阶段 2：从 Thinking 记忆中提取可复用的 Skill/Rule
        """
        memories = self._get_unprocessed_memories("thinking", "skill_processed", limit=10)
        if len(memories) == 0:
            return 0
            
        logger.info(f"[Evolution] Found {len(memories)} unprocessed thinking memories. Extracting skills...")
        processed_count = 0
        
        for mem in memories:
            prompt = f"""
请分析以下的"思维记忆"，判断其中是否包含可以提炼为通用"技能(Skill)"、"最佳实践(Best Practice)"或"规则(Rule)"的内容。
如果只是普通的上下文总结，不包含可复用的技能/规则，请返回空。
如果是，请提取出来。

【思维记忆】
{mem['content']}

【要求】
如果包含技能/规则，请以 JSON 格式返回：
{{
    "is_skill": true,
    "content": "具体的技能/规则描述，便于AI未来复用",
    "skill_type": "knowledge", // coding, config, workflow, best_practice 等
    "tags": ["标签1", "标签2"]
}}
如果不包含，请返回：{{"is_skill": false}}
"""
            try:
                response = await self.llm.chat_completion(
                    messages=[{"role": "user", "content": prompt}],
                    temperature=0.2
                )
                if response:
                    import json
                    import re
                    match = re.search(r'\{[\s\S]*\}', response)
                    if match:
                        res_json = json.loads(match.group())
                        if res_json.get("is_skill"):
                            from mcp_memory.models.data_models import SkillMemoryCreate
                            skill_id = self.store.create_skill_memory(SkillMemoryCreate(
                                content=res_json.get("content", ""),
                                user_id=mem.get("user_id", "unknown"),
                                source_thinking=[mem["memory_id"]],
                                skill_type=res_json.get("skill_type", "knowledge"),
                                tags=res_json.get("tags", []),
                                scope="global" # 技能通常是 global 的
                            ))
                            logger.info(f"[Evolution] Extracted skill {skill_id[:8]} from thinking {mem['memory_id'][:8]}")
                            
                # 无论是否提取到技能，都标记为已处理
                self.store.update_memory_metadata(
                    mem["memory_id"], 
                    {"skill_processed": True, "skill_extracted": res_json.get("is_skill", False) if 'res_json' in locals() else False}
                )
                processed_count += 1
            except Exception as e:
                logger.error(f"[Evolution] Thinking->Skill failed: {e}")
                
        return processed_count
        
    def _get_unprocessed_memories(self, memory_type: str, flag: str, limit: int) -> List[dict]:
        """获取没有特定处理标记的特定类型记忆"""
        try:
            # chromaDB query doesn't strictly support "field NOT exists" elegantly without full scan or complex filters
            # So we query by type and filter locally for simplicity in this size
            all_memories = self.store.query_by_type(query="", memory_type=memory_type, limit=limit*5)
            filtered = []
            for mem in all_memories:
                # Need to lookup raw metadata to check the boolean flag
                # query_by_type already unpacks metadata into the dict keys if missing standard fields, 
                # but we should fetch raw metadata if possible, or just check the store.
                raw_meta = self.store.collection.get(ids=[mem["memory_id"]])
                if raw_meta and raw_meta["metadatas"]:
                    if not raw_meta["metadatas"][0].get(flag, False):
                        filtered.append(mem)
                        if len(filtered) >= limit:
                            break
            return filtered
        except Exception as e:
            logger.warning(f"Failed to fetch unprocessed memories: {e}")
            return []

    def _group_memories(self, memories: List[dict]) -> Dict[str, List[dict]]:
        groups = {}
        for m in memories:
            key = m.get("scope", "project")
            if key not in groups:
                groups[key] = []
            groups[key].append(m)
        return groups
