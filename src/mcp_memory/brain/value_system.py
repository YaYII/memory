"""价值评估系统 — 多维度真实计算"""

import hashlib
from typing import Dict, Any


class ValueSystem:
    def __init__(self):
        self.values = {"importance": 0.5, "relevance": 0.5, "novelty": 0.5}
        self._seen_content_hashes: set = set()

    def assess_value(self, content: str, context: Dict[str, Any]) -> Dict[str, Any]:
        if not content:
            return {"total_score": 0.0, "components": self.values.copy()}

        content_hash = hashlib.md5(content.encode()).hexdigest()
        is_duplicate = content_hash in self._seen_content_hashes

        importance = self._calc_importance(content, context)
        relevance = self._calc_relevance(content, context)
        novelty = 0.1 if is_duplicate else self._calc_novelty(content)

        self.values = {
            "importance": round(importance, 3),
            "relevance": round(relevance, 3),
            "novelty": round(novelty, 3)
        }
        self._seen_content_hashes.add(content_hash)

        total = (
            importance * 0.40 +
            relevance * 0.35 +
            novelty * 0.25
        )

        return {
            "total_score": round(min(1.0, total), 3),
            "components": self.values.copy(),
            "is_duplicate": is_duplicate
        }

    def _calc_importance(self, content: str, context: Dict[str, Any]) -> float:
        score = 0.5
        critical_words = ["error", "fix", "重要", "关键", "必须", "critical", "security"]
        score += sum(0.08 for w in critical_words if w in content.lower())
        if context.get("scope") == "global":
            score += 0.15
        if len(content) > 500:
            score += 0.1
        return min(1.0, score)

    def _calc_relevance(self, content: str, context: Dict[str, Any]) -> float:
        score = 0.5
        project_id = context.get("project_id", "")
        if project_id and project_id in content:
            score += 0.2
        user_id = context.get("user_id", "")
        if user_id and user_id in content:
            score += 0.1
        tech_stack = ["python", "javascript", "docker", "api", "database"]
        matches = sum(1 for t in tech_stack if t in content.lower())
        score += min(0.2, matches * 0.05)
        return min(1.0, score)

    def _calc_novelty(self, content: str) -> float:
        base = 0.5
        recent_indicator = any(
            w in content.lower()
            for w in ["new", "新", "更新了", "updated", "changed"]
        )
        if recent_indicator:
            base += 0.3
        code_block = "```" in content or any(c in content for c in ["{", "def ", "function"])
        if code_block:
            base += 0.1
        return min(1.0, base)

    def get_status(self) -> Dict[str, Any]:
        return {
            **self.values,
            "unique_contents_seen": len(self._seen_content_hashes)
        }
