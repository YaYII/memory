"""记忆状态模块"""

from typing import Dict, List, Any
from dataclasses import dataclass


@dataclass
class MemoryState:
    """记忆状态"""
    total_memories: int
    active_memories: int
    consolidated_memories: int
    forgotten_memories: int
    average_importance: float
