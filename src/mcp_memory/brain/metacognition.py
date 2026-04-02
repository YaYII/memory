"""元认知系统 — 基于数据的自我分析"""

import logging
import math
from datetime import datetime
from typing import Dict, List, Any

logger = logging.getLogger("mcp-memory.brain.metacognition")


class MetacognitionSystem:
    def __init__(self):
        self.current_state: Dict[str, Any] = {"focus_level": 0.7}

    def assess_self(self, store=None) -> Dict[str, Any]:
        confidence_base = 0.6
        if store:
            try:
                stats = store.get_tiered_stats() or {}
                total = stats.get("total_count", 0)
                if total > 0:
                    confidence_base = min(0.9, 0.6 + math.log10(total) * 0.08)
            except Exception:
                pass
        return {
            "confidence": round(confidence_base, 3),
            "focus": self.current_state.get("focus_level", 0.7),
            "assessed_at": datetime.now().isoformat()
        }

    def detect_biases(self, store=None) -> List[str]:
        biases = []
        if not store:
            return biases
        try:
            stats = store.get_tiered_stats() or {}
            total = stats.get("total_count", 0)
            if total < 1:
                return []

            storage_pct = stats.get("storage_count", 0) / total
            skill_pct = stats.get("skill_count", 0) / total

            if storage_pct > 0.75:
                biases.append("storage_heavy: 存储型记忆占比过高，缺乏提炼和升华")
            if skill_pct < 0.05 and total > 20:
                biases.append("skill_deficit: 技能型记忆不足，建议主动提炼可复用知识")
            if total > 100:
                biases.append("volume_warning: 记忆量较大，建议定期反思清理")
        except Exception as e:
            logger.debug("[Metacognition] detect_biases error: %s", e)

        return biases

    def generate_recommendations(self, memory_state: Dict, biases: List[str]) -> List[str]:
        recommendations = []
        health = memory_state.get("health", "unknown")

        if health == "empty":
            recommendations.append("开始积累记忆以激活认知能力")
        elif health == "imbalanced":
            recommendations.append("执行反思操作以平衡三层记忆结构")
            recommendations.append("将重要的存储型记忆提炼为技能型记忆")

        for bias in biases:
            if "skill_deficit" in bias:
                recommendations.append("增加技能记忆写入，关注可复用的模式和规则")
            elif "storage_heavy" in bias:
                recommendations.append("触发深度反思，将原始记录转化为结构化知识")
            elif "volume_warning" in bias:
                recommendations.append("考虑合并重复或过时的记忆条目")

        if not recommendations:
            recommendations.append("系统运行正常，继续保持学习和反思习惯")

        return recommendations[:5]

    def get_status(self) -> Dict[str, Any]:
        return self.current_state.copy()
