"""好奇心系统 — 基于知识缺口识别"""

from datetime import datetime
from typing import List, Dict, Any


class CuriositySystem:
    def __init__(self):
        self.curiosity_score = 0.5
        self.questions: List[Dict[str, Any]] = []
        self._max_questions = 50

    def generate_questions(self, content: str) -> List[str]:
        if not content or len(content) < 10:
            return []

        questions = []
        content_stripped = content.strip()[:100]

        if any(kw in content.lower() for kw in ["error", "failed", "异常", "错误"]):
            questions.append(f"为什么出现以下问题? '{content_stripped}'")

        if any(kw in content.lower() for kw in ["config", "配置", "设置", "env"]):
            questions.append(f"该配置的完整上下文和依赖是什么? '{content_stripped}'")

        if len(content) > 50 and "?" not in content and "？" not in content:
            questions.append(f"关于 '{content_stripped}' 有哪些可深入探索的方向?")

        if not questions:
            questions.append(f"'{content_stripped}' 与已有知识有哪些关联?")

        self.curiosity_score = min(1.0, self.curiosity_score + 0.02)
        return questions[:3]

    def add_questions(self, questions: List[str]):
        now = datetime.now().isoformat()
        for q in questions:
            self.questions.append({"question": q, "created_at": now})
        if len(self.questions) > self._max_questions:
            self.questions = self.questions[-self._max_questions:]

    def get_top_questions(self, limit: int = 3) -> List[str]:
        return [q["question"] for q in self.questions[-limit:]]
