"""联想引擎模块"""

from typing import Dict, List, Any
from enum import Enum
from dataclasses import dataclass


class AssociationType(Enum):
    """联想类型"""
    SEMANTIC = "semantic"  # 语义联想
    TEMPORAL = "temporal"  # 时间联想
    SPATIAL = "spatial"    # 空间联想


@dataclass
class Association:
    """联想"""
    source_memory_id: str
    target_memory_id: str
    association_type: AssociationType
    strength: float


class AssociationEngine:
    """联想引擎"""
    
    def __init__(self):
        """初始化联想引擎"""
        self.associations = []
    
    def create_association(self, source_memory_id: str, target_memory_id: str, 
                          association_type: AssociationType, strength: float):
        """
        创建联想
        
        Args:
            source_memory_id: 源记忆ID
            target_memory_id: 目标记忆ID
            association_type: 联想类型
            strength: 联想强度
        """
        association = Association(
            source_memory_id=source_memory_id,
            target_memory_id=target_memory_id,
            association_type=association_type,
            strength=strength
        )
        self.associations.append(association)
    
    def get_associations(self, memory_id: str) -> List[Association]:
        """
        获取与记忆相关的联想
        
        Args:
            memory_id: 记忆ID
            
        Returns:
            联想列表
        """
        return [a for a in self.associations if a.source_memory_id == memory_id]
