"""认知表现模块"""

from typing import Dict, List, Any
from dataclasses import dataclass


@dataclass
class CognitivePerformance:
    """认知表现"""
    memory_retrieval_accuracy: float
    learning_efficiency: float
    problem_solving_speed: float
    attention_focus_duration: float
    metacognitive_awareness: float
