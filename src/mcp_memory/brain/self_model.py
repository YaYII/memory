"""自我模型 — 基于真实学习数据"""

import math
from datetime import datetime
from typing import Dict, Any, Optional


class SelfModel:
    def __init__(self):
        self.values = {"learning": 0.8, "accuracy": 0.7, "creativity": 0.6}
        self.evolution_generation = 1
        self.total_learning_experiences = 0
        self._total_memories_seen = 0
        self._successful_retrievals = 0
        self._last_reflection_time: Optional[datetime] = None

    def add_learning_experience(self, experience: Dict[str, Any]):
        self.total_learning_experiences += 1
        action_type = experience.get("action", "")
        if action_type == "memory_created":
            self.values["learning"] = min(1.0, self.values["learning"] + 0.01)
        elif action_type == "retrieval_success":
            self.values["accuracy"] = min(1.0, self.values["accuracy"] + 0.005)

    def evolve(self):
        self.evolution_generation += 1
        decay_factor = 0.98
        for key in self.values:
            self.values[key] = max(0.3, self.values[key] * decay_factor)

    def assess_learning_efficiency(self) -> float:
        base = 0.5
        exp_bonus = min(0.3, self.total_learning_experiences * 0.001)
        gen_malus = max(0, (self.evolution_generation - 1) * 0.02)
        return round(min(0.95, base + exp_bonus - gen_malus), 3)

    def get_awareness_level(self) -> float:
        base_awareness = sum(self.values.values()) / len(self.values)
        experience_boost = min(0.15, math.log10(max(1, self.total_learning_experiences)) * 0.05)
        return round(min(0.98, base_awareness + experience_boost), 3)

    def update_from_stats(self, stats: dict):
        if stats and isinstance(stats, dict):
            total = stats.get("total_count", 0)
            self._total_memories_seen = total

    def get_state(self) -> Dict:
        return {
            **self.values,
            "evolution_generation": self.evolution_generation,
            "total_learning_experiences": self.total_learning_experiences,
            "_total_memories_seen": self._total_memories_seen
        }

    def set_state(self, state: Dict):
        for key in ["learning", "accuracy", "creativity"]:
            if key in state:
                self.values[key] = state[key]
        self.evolution_generation = state.get("evolution_generation", 1)
        self.total_learning_experiences = state.get("total_learning_experiences", 0)
