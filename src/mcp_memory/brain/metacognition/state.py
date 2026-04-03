"""记忆状态报告模块"""

from typing import Dict, List, Any
from dataclasses import dataclass


@dataclass
class MemoryStateReport:
    """记忆状态报告"""
    total_memories: int
    recent_memories: int
    consolidated_memories: int
    forgotten_memories: int
    memory_usage_percentage: float
