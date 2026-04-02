"""好奇心引擎模块"""

from typing import List, Dict, Any


class CuriosityEngine:
    """好奇心引擎"""
    
    def __init__(self):
        """初始化好奇心引擎"""
        self.curiosity_score = 0.5
        self.questions = []
        self.exploration_history = []
    
    def generate_questions(self, content: str) -> List[str]:
        """
        生成问题
        
        Args:
            content: 内容
            
        Returns:
            问题列表
        """
        # 简化实现
        return [f"关于 '{content[:20]}...' 的更多信息？"]
    
    def add_question(self, question: str):
        """
        添加问题
        
        Args:
            question: 问题
        """
        self.questions.append(question)
    
    def get_top_questions(self, limit: int = 3) -> List[str]:
        """
        获取 top 问题
        
        Args:
            limit: 限制数量
            
        Returns:
            问题列表
        """
        return self.questions[:limit]
    
    def update_curiosity_score(self, new_information: str):
        """
        更新好奇心分数
        
        Args:
            new_information: 新信息
        """
        # 简化实现
        self.curiosity_score = min(1.0, self.curiosity_score + 0.1)
    
    def get_curiosity_score(self) -> float:
        """
        获取好奇心分数
        
        Returns:
            好奇心分数
        """
        return self.curiosity_score
