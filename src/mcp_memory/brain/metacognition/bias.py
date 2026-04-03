"""认知偏见模块"""

from typing import Dict, List, Any
from dataclasses import dataclass


@dataclass
class CognitiveBias:
    """认知偏见"""
    bias_type: str
    description: str
    severity: float
    detected_at: float
