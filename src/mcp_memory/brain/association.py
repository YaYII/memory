"""联想网络 — 基于知识图谱的关联检索"""

import logging
from typing import Dict, List

logger = logging.getLogger("mcp-memory.brain.association")


class AssociationNetwork:
    def __init__(self, memory_store=None):
        self.memory_store = memory_store
        self.associations_cache: Dict[str, List[str]] = {}

    def set_memory_store(self, store):
        self.memory_store = store

    def get_related_associations(self, query: str, limit: int = 5) -> List[str]:
        if not self.memory_store:
            return []
        try:
            entities = self.memory_store._fallback_extract_entities(query)
            related = self.memory_store.get_related_memories_by_graph(entities, limit=limit)
            return [r for r in related if r][:limit]
        except Exception as e:
            logger.debug("[AssociationNetwork] get_related failed: %s", e)
            return []
