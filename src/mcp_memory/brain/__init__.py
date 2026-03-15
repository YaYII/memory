"""
AI大脑模块
整合所有认知组件，实现自主AI记忆系统
"""

from .self_awareness import SelfModel, Goal, GoalType, PersonalityTraits
from .active_cognition import AttentionSystem, CuriosityEngine, HypothesisGenerator, Hypothesis, AttentionScore
from .value_judgment import ValueSystem, ValueScore, ExperienceEvaluator
from .dynamic_memory import (
    ConsolidationSystem, ForgettingMechanism, AssociationEngine,
    MemoryTrace, Association, MemoryState, AssociationType
)
from .metacognition import MetacognitionSystem, CognitivePerformance, MemoryStateReport, CognitiveBias
from .ai_brain import AIBrain

__all__ = [
    # 自我意识层
    "SelfModel",
    "Goal",
    "GoalType",
    "PersonalityTraits",

    # 主动认知层
    "AttentionSystem",
    "CuriosityEngine",
    "HypothesisGenerator",
    "Hypothesis",
    "AttentionScore",

    # 价值判断层
    "ValueSystem",
    "ValueScore",
    "ExperienceEvaluator",

    # 动态记忆层
    "ConsolidationSystem",
    "ForgettingMechanism",
    "AssociationEngine",
    "MemoryTrace",
    "Association",
    "MemoryState",
    "AssociationType",

    # 元认知层
    "MetacognitionSystem",
    "CognitivePerformance",
    "MemoryStateReport",
    "CognitiveBias",

    # AI大脑控制器
    "AIBrain"
]
