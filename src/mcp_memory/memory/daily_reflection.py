"""
每日反思引擎 (Daily Reflection Engine)

核心功能：
1. 跨记忆重复检测：使用向量相似度检测重复记忆
2. 智能合并策略：创建增强版记忆，保留源记忆
3. 语言一致性强制：确保所有记忆符合配置的语言要求

设计原则：
- 非破坏性操作：保留原始记忆，仅创建合并后的增强版
- LLM 驱动：使用 LLM 进行智能合并决策
- 可追溯性：记录合并链路，支持溯源
"""

import logging
import json
import re
from typing import List, Dict, Optional, Tuple
from datetime import datetime

from mcp_memory.memory.long_term import MemoryStore
from mcp_memory.llm.facade import llm_facade, LLMFacade
from mcp_memory.core.config import settings

logger = logging.getLogger("mcp-memory.memory.daily_reflection")


class DailyReflection:
    def __init__(self, memory_store: MemoryStore):
        self.store = memory_store
        self.llm: LLMFacade = llm_facade
        
        self.DUPLICATE_THRESHOLD = 0.8
        self.REFLECTION_BATCH_SIZE = 50
        self.MIN_MERGE_COUNT = 2
        self.MAX_MERGE_COUNT = 10

    async def initialize(self):
        await self.llm.initialize()

    async def run_daily_reflection(self) -> Dict[str, int]:
        """
        执行每日反思流程。
        
        Returns:
            Dict 包含处理统计：duplicates_found, memories_merged, language_fixed
        """
        logger.info("[DailyReflection] Starting daily reflection cycle...")
        
        stats = {
            "duplicates_found": 0,
            "memories_merged": 0,
            "language_fixed": 0
        }
        
        duplicate_groups = await self._detect_duplicates()
        stats["duplicates_found"] = sum(len(g) for g in duplicate_groups)
        
        for group in duplicate_groups:
            if len(group) >= self.MIN_MERGE_COUNT:
                merged_count = await self._merge_memories(group)
                stats["memories_merged"] += merged_count
        
        language_fixes = await self._enforce_language_consistency()
        stats["language_fixed"] = language_fixes
        
        logger.info(f"[DailyReflection] Completed: {stats}")
        return stats

    async def _detect_duplicates(self) -> List[List[Dict]]:
        """
        检测重复记忆组。
        
        使用向量相似度检测，返回重复记忆组的列表。
        每组包含相似度超过阈值的记忆。
        
        Returns:
            List[List[Dict]]: 重复记忆组的列表
        """
        try:
            all_memories = self.store.query_by_type(
                query="",
                memory_type="storage",
                limit=self.REFLECTION_BATCH_SIZE
            )
            
            if not all_memories or len(all_memories) < 2:
                return []
            
            duplicate_groups: List[List[Dict]] = []
            processed_ids: set = set()
            
            for i, mem in enumerate(all_memories):
                if mem["memory_id"] in processed_ids:
                    continue
                
                similar_group = [mem]
                processed_ids.add(mem["memory_id"])
                
                try:
                    results = self.store.collection.query(
                        query_texts=[mem["content"]],
                        n_results=self.MAX_MERGE_COUNT,
                        where={"memory_type": {"$eq": "storage"}}
                    )
                    
                    if results and results["ids"] and results["ids"][0]:
                        for j, other_id in enumerate(results["ids"][0]):
                            if other_id in processed_ids:
                                continue
                            if other_id == mem["memory_id"]:
                                continue
                            
                            distance = results["distances"][0][j] if results.get("distances") else 0
                            similarity = 1.0 - distance
                            
                            if similarity >= self.DUPLICATE_THRESHOLD:
                                other_mem = {
                                    "memory_id": other_id,
                                    "content": results["documents"][0][j],
                                    "similarity": similarity,
                                    "metadata": results["metadatas"][0][j] if results.get("metadatas") else {}
                                }
                                similar_group.append(other_mem)
                                processed_ids.add(other_id)
                
                except Exception as e:
                    logger.warning(f"[DailyReflection] Duplicate detection error for {mem['memory_id'][:8]}: {e}")
                
                if len(similar_group) >= self.MIN_MERGE_COUNT:
                    duplicate_groups.append(similar_group)
            
            logger.info(f"[DailyReflection] Found {len(duplicate_groups)} duplicate groups")
            return duplicate_groups
            
        except Exception as e:
            logger.error(f"[DailyReflection] Duplicate detection failed: {e}")
            return []

    async def _merge_memories(self, memories: List[Dict]) -> int:
        """
        智能合并相似记忆。
        
        创建增强版记忆，保留源记忆但标记为已合并。
        
        Args:
            memories: 相似记忆列表
            
        Returns:
            int: 合并的记忆数量
        """
        if len(memories) < self.MIN_MERGE_COUNT:
            return 0
        
        try:
            contents = [m["content"] for m in memories]
            memory_ids = [m["memory_id"] for m in memories]
            
            prompt = f"""
你是一个高级记忆整合引擎。请分析以下{len(memories)}条相似记忆，将它们合并为一条增强版记忆。

【原始记忆】
{json.dumps(contents, ensure_ascii=False, indent=2)}

【合并原则】
1. 保留所有关键信息，去除冗余内容
2. 按逻辑顺序组织信息
3. 提炼核心要点
4. 使用 {settings.MCP_MEMORY_LANGUAGE} 撰写

【输出格式】必须返回 JSON：
{{
  "merged_content": "合并后的增强版记忆内容",
  "key_points": ["要点1", "要点2", "..."],
  "importance": 1.0到10.0的评分,
  "merge_reason": "简要说明合并原因"
}}
"""
            
            response = await self.llm.chat_completion(
                messages=[{"role": "user", "content": prompt}],
                temperature=0.3
            )
            
            res_data = self._safe_parse_json(response)
            
            if not res_data or "merged_content" not in res_data:
                logger.warning(f"[DailyReflection] Failed to parse merge response")
                return 0
            
            first_memory = memories[0]
            metadata = first_memory.get("metadata", {})
            
            merged_id = self.store.save_thinking_memory(
                content=res_data["merged_content"],
                user_id=metadata.get("user_id", "system"),
                source_memories=memory_ids,
                summary_type="auto_merge",
                key_points=res_data.get("key_points", []),
                scope=metadata.get("scope", "project"),
                project_id=metadata.get("project_id", ""),
                confidence=res_data.get("importance", 5.0) / 10.0
            )
            
            now_iso = datetime.now().isoformat()
            for mem in memories:
                self.store.update_memory_metadata(
                    mem["memory_id"],
                    {
                        "merge_status": "merged_into",
                        "merged_into_id": merged_id,
                        "merged_at": now_iso,
                        "merge_reason": res_data.get("merge_reason", "auto_duplicate_merge")
                    }
                )
            
            self.store.update_memory_metadata(
                merged_id,
                {
                    "is_merged_memory": True,
                    "merged_from": memory_ids,
                    "merged_count": len(memories),
                    "merged_at": now_iso,
                    "merge_reason": res_data.get("merge_reason", "auto_duplicate_merge")
                }
            )
            
            logger.info(f"[DailyReflection] Merged {len(memories)} memories into {merged_id[:8]}")
            return len(memories)
            
        except Exception as e:
            logger.error(f"[DailyReflection] Memory merge failed: {e}")
            return 0

    async def _enforce_language_consistency(self) -> int:
        """
        强制语言一致性。
        
        检查所有记忆的语言，将不符合配置语言的记忆翻译或标记。
        
        Returns:
            int: 修复的记忆数量
        """
        try:
            all_memories = self.store.query_by_type(
                query="",
                memory_type="all",
                limit=self.REFLECTION_BATCH_SIZE
            )
            
            if not all_memories:
                return 0
            
            target_language = settings.MCP_MEMORY_LANGUAGE
            fixed_count = 0
            
            for mem in all_memories:
                content = mem.get("content", "")
                if not content:
                    continue
                
                metadata = mem.get("metadata", {})
                if metadata.get("language_checked"):
                    continue
                
                prompt = f"""
请判断以下文本的主要语言是否为{target_language}。

【文本内容】
{content[:500]}

【输出格式】必须返回 JSON：
{{
  "is_target_language": true 或 false,
  "detected_language": "检测到的语言",
  "needs_translation": true 或 false
}}
"""
                
                try:
                    response = await self.llm.chat_completion(
                        messages=[{"role": "user", "content": prompt}],
                        temperature=0.1
                    )
                    
                    res_data = self._safe_parse_json(response)
                    
                    if res_data and not res_data.get("is_target_language", True):
                        if res_data.get("needs_translation", False):
                            translate_prompt = f"""
请将以下文本翻译为{target_language}，保持原意和格式。

【原文】
{content}

【输出格式】必须返回 JSON：
{{
  "translated_content": "翻译后的内容"
}}
"""
                            translate_response = await self.llm.chat_completion(
                                messages=[{"role": "user", "content": translate_prompt}],
                                temperature=0.3
                            )
                            
                            translate_data = self._safe_parse_json(translate_response)
                            
                            if translate_data and "translated_content" in translate_data:
                                self.store.update_memory_content(
                                    mem["memory_id"],
                                    metadata.get("user_id", "system"),
                                    translate_data["translated_content"]
                                )
                                fixed_count += 1
                    
                    self.store.update_memory_metadata(
                        mem["memory_id"],
                        {
                            "language_checked": True,
                            "detected_language": res_data.get("detected_language", "unknown") if res_data else "unknown"
                        }
                    )
                    
                except Exception as e:
                    logger.warning(f"[DailyReflection] Language check failed for {mem['memory_id'][:8]}: {e}")
                    self.store.update_memory_metadata(
                        mem["memory_id"],
                        {"language_checked": True}
                    )
            
            logger.info(f"[DailyReflection] Language consistency check completed, fixed {fixed_count} memories")
            return fixed_count
            
        except Exception as e:
            logger.error(f"[DailyReflection] Language consistency enforcement failed: {e}")
            return 0

    def _safe_parse_json(self, response: Optional[str]) -> Optional[Dict]:
        """安全解析 JSON 响应"""
        if not response:
            return None
        try:
            match = re.search(r'\{[\s\S]*\}', response)
            if match:
                return json.loads(match.group())
            return json.loads(response)
        except Exception:
            return None
