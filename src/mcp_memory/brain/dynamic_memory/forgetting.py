"""遗忘机制模块"""

from typing import Dict, List, Any


class ForgettingMechanism:
    """遗忘机制"""
    
    def __init__(self):
        """初始化遗忘机制"""
        self.forget_threshold = 0.1
        self.forgotten_memories = []
    
    def forget(self, memory_id: str, importance: float):
        """
        遗忘记忆
        
        Args:
            memory_id: 记忆ID
            importance: 重要性
            
        Returns:
            是否遗忘
        """
        if importance < self.forget_threshold:
            self.forgotten_memories.append(memory_id)
            return True
        return False
    
    def get_forgotten_memories(self) -> List[str]:
        """
        获取遗忘的记忆
        
        Returns:
            遗忘的记忆列表
        """
        return self.forgotten_memories
