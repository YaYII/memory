"""注意力系统 — 基于内容特征的真实评分"""

from typing import Dict, Any


class AttentionSystem:
    def __init__(self):
        self.attention_threshold = 0.5
        self._high_signal_keywords = [
            "error", "bug", "fix", "important", "critical", "必须",
            "注意", "关键", "配置", "password", "secret", "token"
        ]

    def calculate_attention(self, content: str, context: Dict[str, Any]) -> float:
        if not content:
            return 0.0

        content_lower = content.lower()

        length_score = min(1.0, len(content) / 200)
        keyword_hits = sum(1 for kw in self._high_signal_keywords if kw in content_lower)
        keyword_score = min(1.0, keyword_hits * 0.15)

        has_code_indicators = any(
            indicator in content_lower
            for indicator in ["def ", "function", "const ", "import ", "class ",
                             "{", "=>", "async ", "return ", "export "]
        )
        code_score = 0.25 if has_code_indicators else 0.0

        question_marks = content.count("?") + content.count("？")
        urgency_score = min(0.2, question_marks * 0.05)

        numeric_density = sum(c.isdigit() for c in content) / max(len(content), 1)
        specificity_score = min(0.15, numeric_density * 3)

        final_score = (
            length_score * 0.30 +
            keyword_score * 0.25 +
            code_score * 0.20 +
            urgency_score * 0.15 +
            specificity_score * 0.10
        )

        return round(min(1.0, final_score), 3)
