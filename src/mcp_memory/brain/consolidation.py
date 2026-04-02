"""记忆巩固系统 — 委托给真实 MemoryStore"""

import logging
from datetime import datetime
from typing import Dict, List, Any, Optional

logger = logging.getLogger("mcp-memory.brain.consolidation")


class MemoryConsolidation:
    def __init__(self, memory_store=None):
        self.memory_store = memory_store
        self._next_id = 1

    def set_memory_store(self, store):
        self.memory_store = store

    def create_memory(self, content: str, context: Dict[str, Any]) -> str:
        if not self.memory_store:
            mem_id = f"mem_{self._next_id}"
            self._next_id += 1
            return mem_id

        try:
            from mcp_memory.models.data_models import MemoryItem
            memory = MemoryItem(
                content=content,
                user_id=context.get("user_id", "default"),
                scope=context.get("scope", "project"),
                project_id=context.get("project_id"),
                title=content[:50] + ("..." if len(content) > 50 else ""),
                timestamp=datetime.now()
            )
            return self.memory_store.save(memory)
        except Exception as e:
            logger.warning("[MemoryConsolidation] create_memory failed: %s", e)
            mem_id = f"mem_{self._next_id}"
            self._next_id += 1
            return mem_id

    def retrieve_memories(self, query: str) -> List[Dict[str, Any]]:
        if not self.memory_store:
            return []
        try:
            results, _ = self.memory_store.read_memory(
                user_id="default",
                query=query,
                limit=5,
                reinforce=False
            )
            return results[:5]
        except Exception as e:
            logger.warning("[MemoryConsolidation] retrieve failed: %s", e)
            return []

    def assess_memory_state(self, store=None) -> Dict[str, Any]:
        target_store = store or self.memory_store
        if not target_store:
            return {"total_memories": 0, "health": "unknown", "last_updated": datetime.now().isoformat()}
        try:
            stats = target_store.get_tiered_stats() or {}
            total = stats.get("total_count", 0)
            storage_ratio = stats.get("storage_count", 0) / max(total, 1)
            thinking_ratio = stats.get("thinking_count", 0) / max(total, 1)
            skill_ratio = stats.get("skill_count", 0) / max(total, 1)

            balance_score = 1.0 - max(0, abs(storage_ratio - 0.4) + abs(thinking_ratio - 0.35) + abs(skill_ratio - 0.25))

            if total == 0:
                health = "empty"
            elif balance_score > 0.85:
                health = "healthy"
            elif balance_score > 0.7:
                health = "moderate"
            else:
                health = "imbalanced"

            return {
                "total_memories": total,
                "breakdown": stats,
                "balance_score": round(balance_score, 3),
                "health": health,
                "last_updated": datetime.now().isoformat()
            }
        except Exception as e:
            logger.warning("[MemoryConsolidation] assess_memory_state failed: %s", e)
            return {"total_memories": 0, "health": "error", "error": str(e)}
