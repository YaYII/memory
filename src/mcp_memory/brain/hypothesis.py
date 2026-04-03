"""假设生成器 — 基于内容的推理"""

from typing import List


class HypothesisGenerator:
    def generate(self, context: str) -> List[str]:
        if not context:
            return []
        hypotheses = []
        ctx_lower = context.lower()

        if any(kw in ctx_lower for kw in ["slow", "慢", "timeout", "超时"]):
            hypotheses.append("假设: 性能瓶颈可能源于资源竞争或查询效率低下")

        if any(kw in ctx_lower for kw in ["error", "bug", "错误", "fail"]):
            hypotheses.append("假设: 该问题可能是配置变更或环境差异导致的")

        if any(kw in ctx_lower for kw in ["new", "新增", "feature", "功能"]):
            hypotheses.append("假设: 新功能可能与现有模块存在交互边界问题")

        if not hypotheses:
            hypotheses.append(f"假设: '{context[:50]}...' 可能影响系统的数据流或状态一致性")

        return hypotheses[:3]

    def test(self, hypothesis: str) -> bool:
        return hypothesis is not None and len(hypothesis) > 5
