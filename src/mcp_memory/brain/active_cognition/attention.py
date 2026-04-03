"""注意力系统模块"""

from typing import Dict, List, Any
from dataclasses import dataclass


@dataclass
class AttentionScore:
    """注意力分数"""
    score: float
    components: Dict[str, float]
    timestamp: float


class AttentionSystem:
    """注意力系统"""
    
    def __init__(self):
        """初始化注意力系统"""
        self.attention_weights = {
            "novelty": 0.3,
            "relevance": 0.4,
            "importance": 0.3
        }
        self.attention_threshold = 0.5
        self.attention_history = []
    
    def calculate_attention(self, content: str, context: Dict[str, Any]) -> AttentionScore:
        """
        计算注意力分数
        
        Args:
            content: 内容
            context: 上下文
            
        Returns:
            注意力分数
        """
        # 简化实现
        score = min(1.0, len(content) / 100)
        components = {
            "novelty": 0.5,
            "relevance": 0.5,
            "importance": 0.5
        }
        
        attention_score = AttentionScore(
            score=score,
            components=components,
            timestamp=0.0
        )
        
        self.attention_history.append(attention_score)
        return attention_score
    
    def get_attention_history(self) -> List[AttentionScore]:
        """
        获取注意力历史
        
        Returns:
            注意力历史
        """
        return self.attention_history
    
    def reset(self):
        """
        重置注意力系统
        """
        self.attention_history = []
