"""目标模块"""

from typing import Dict, List, Any
from enum import Enum
from dataclasses import dataclass


class GoalType(Enum):
    """目标类型"""
    SHORT_TERM = "short_term"  # 短期目标
    LONG_TERM = "long_term"    # 长期目标
    LEARNING = "learning"      # 学习目标
    PERFORMANCE = "performance"  # 表现目标


@dataclass
class Goal:
    """目标"""
    goal_id: str
    description: str
    goal_type: GoalType
    priority: float
    deadline: float
    progress: float
