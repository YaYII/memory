"""人格特质模块"""

from typing import Dict, List, Any
from dataclasses import dataclass


@dataclass
class PersonalityTraits:
    """人格特质"""
    openness: float
    conscientiousness: float
    extraversion: float
    agreeableness: float
    neuroticism: float
