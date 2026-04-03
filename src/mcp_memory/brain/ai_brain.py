"""AI 大脑控制器 — 薄组装层，协调各认知子系统"""

import json
import logging
import os
from datetime import datetime
from typing import Dict, List, Any

from mcp_memory.brain.self_model import SelfModel
from mcp_memory.brain.attention import AttentionSystem
from mcp_memory.brain.curiosity import CuriositySystem
from mcp_memory.brain.hypothesis import HypothesisGenerator
from mcp_memory.brain.value_system import ValueSystem
from mcp_memory.brain.consolidation import MemoryConsolidation
from mcp_memory.brain.forgetting import ForgettingMechanism
from mcp_memory.brain.association import AssociationNetwork
from mcp_memory.brain.metacognition import MetacognitionSystem

logger = logging.getLogger("mcp-memory.brain")


class AIBrain:
    """AI 大脑控制器 — 所有计算基于 MemoryStore 的真实数据"""

    def __init__(self, memory_store=None):
        self.is_active = True
        self.total_cycles = 0
        self.last_update = datetime.now()
        self._memory_store = memory_store

        self.self_model = SelfModel()
        self.attention = AttentionSystem()
        self.curiosity = CuriositySystem()
        self.hypothesis_gen = HypothesisGenerator()
        self.value_system = ValueSystem()
        self.consolidation = MemoryConsolidation(memory_store)
        self.forgetting = ForgettingMechanism()
        self.associations = AssociationNetwork(memory_store)
        self.metacognition = MetacognitionSystem()

    def set_memory_store(self, store):
        self._memory_store = store
        self.consolidation.set_memory_store(store)
        self.associations.set_memory_store(store)

    async def initialize(self):
        if self._memory_store:
            try:
                stats = self._memory_store.get_tiered_stats()
                self.self_model.update_from_stats(stats)
            except Exception as e:
                logger.warning("[AIBrain] initialize failed: %s", e)

    async def process_input(self, content: str, context: Dict[str, Any]) -> Dict[str, Any]:
        self.total_cycles += 1
        self.last_update = datetime.now()

        attention_score = self.attention.calculate_attention(content, context)
        value_assessment = self.value_system.assess_value(content, context)

        actions_taken = []
        memories_created = []

        if value_assessment['total_score'] > 0.3:
            memory_id = self.consolidation.create_memory(content, context)
            memories_created.append(memory_id)
            actions_taken.append('memory_created')
        else:
            actions_taken.append('content_filtered')

        if attention_score > 0.5:
            questions = self.curiosity.generate_questions(content)
            if questions:
                self.curiosity.add_questions(questions)
                actions_taken.append('questions_generated')

        return {
            "content": content,
            "processed_at": datetime.now().isoformat(),
            "actions_taken": actions_taken,
            "attention_score": round(attention_score, 3),
            "value_assessment": value_assessment,
            "memories_created": memories_created
        }

    async def retrieve_memory(self, query: str) -> Dict[str, Any]:
        if not self._memory_store:
            return {
                "query": query,
                "retrieved_at": datetime.now().isoformat(),
                "memories": [],
                "associations_activated": [],
                "confidence": 0.0,
                "error": "MemoryStore not connected"
            }

        try:
            results, profiles = self._memory_store.read_memory(
                user_id="default",
                query=query,
                limit=10,
                reinforce=True
            )
            associations = self.associations.get_related_associations(query)

            confidence = min(0.95, 0.4 + len(results) * 0.05 + len(associations) * 0.03)
            return {
                "query": query,
                "retrieved_at": datetime.now().isoformat(),
                "memories": results[:10],
                "associations_activated": associations[:5],
                "confidence": round(confidence, 2),
                "result_count": len(results)
            }
        except Exception as e:
            logger.warning("[AIBrain] retrieve_memory failed: %s", e)
            return {
                "query": query,
                "retrieved_at": datetime.now().isoformat(),
                "memories": [],
                "associations_activated": [],
                "confidence": 0.0,
                "error": str(e)
            }

    async def run_self_reflection(self) -> Dict[str, Any]:
        self.total_cycles += 1

        self_assessment = self.metacognition.assess_self(self._memory_store)
        memory_state = self.consolidation.assess_memory_state(self._memory_store)
        learning_efficiency = self.self_model.assess_learning_efficiency()
        detected_biases = self.metacognition.detect_biases(self._memory_store)
        recommendations = self.metacognition.generate_recommendations(memory_state, detected_biases)

        return {
            "reflected_at": datetime.now().isoformat(),
            "self_assessment": self_assessment,
            "memory_state": memory_state,
            "learning_efficiency": learning_efficiency,
            "detected_biases": detected_biases,
            "recommendations": recommendations
        }

    async def generate_hypotheses(self, context: str) -> List[str]:
        return self.hypothesis_gen.generate(context)

    async def test_hypothesis(self, hypothesis: str) -> bool:
        return self.hypothesis_gen.test(hypothesis)

    async def get_brain_status(self) -> Dict[str, Any]:
        memory_connected = self._memory_store is not None
        memory_stats = {}
        if memory_connected:
            try:
                memory_stats = self._memory_store.get_tiered_stats() or {}
            except Exception:
                pass

        return {
            "is_active": self.is_active,
            "last_update": self.last_update.isoformat(),
            "total_cycles": self.total_cycles,
            "self_awareness": self.self_model.get_awareness_level(),
            "active_cognition": True,
            "value_system": self.value_system.get_status(),
            "dynamic_memory": True,
            "metacognition": self.metacognition.get_status(),
            "memory_store_connected": memory_connected,
            **{f"memory_{k}": v for k, v in memory_stats.items()}
        }

    async def evolve_brain(self, experiences: List[Dict[str, Any]]):
        for experience in experiences:
            self.self_model.add_learning_experience(experience)
        self.self_model.evolve()

    def save_brain_state(self, file_path: str):
        state = {
            "self_model": self.self_model.get_state(),
            "curiosity_score": self.curiosity.curiosity_score,
            "metacognition_state": self.metacognition.current_state,
            "attention_threshold": self.attention.attention_threshold,
            "total_cycles": self.total_cycles,
            "saved_at": datetime.now().isoformat()
        }
        os.makedirs(os.path.dirname(file_path) or '.', exist_ok=True)
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(state, f, ensure_ascii=False, indent=2)

    def load_brain_state(self, file_path: str):
        if os.path.exists(file_path):
            with open(file_path, 'r', encoding='utf-8') as f:
                state = json.load(f)
            self.self_model.set_state(state.get("self_model", {}))
            self.curiosity.curiosity_score = state.get("curiosity_score", 0.5)
            self.metacognition.current_state = state.get("metacognition_state", {})
            self.attention.attention_threshold = state.get("attention_threshold", 0.5)
            self.total_cycles = state.get("total_cycles", 0)

    async def shutdown(self):
        self.is_active = False
