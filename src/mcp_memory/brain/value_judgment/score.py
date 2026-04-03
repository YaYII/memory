"""价值分数模块"""

from typing import Dict, List, Any
from dataclasses import dataclass


@dataclass
class ValueScore:
    """价值分数"""
    total_score: float
    importance_score: float
    relevance_score: float
    novelty_score: float
    utility_score: float
