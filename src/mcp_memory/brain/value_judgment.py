"""
价值判断层
实现记忆价值评估系统
让AI能够动态判断记忆的重要性和价值
"""

from typing import List, Dict, Any, Optional
from datetime import datetime, timedelta
from dataclasses import dataclass
import re
import math


@dataclass
class ValueScore:
    """价值评分"""
    total_score: float
    novelty: float
    utility: float
    emotional: float
    frequency: float
    coherence: float
    details: Dict[str, Any]


class ValueSystem:
    """
    价值观系统
    多维度评估记忆价值
    """

    def __init__(self):
        # 价值维度权重
        self.importance_weights = {
            "novelty": 0.30,        # 新颖性 - 30%
            "utility": 0.25,         # 实用性 - 25%
            "emotional": 0.20,       # 情感强度 - 20%
            "frequency": 0.15,       # 使用频率 - 15%
            "coherence": 0.10        # 一致性 - 10%
        }

        # 价值评估历史
        self.evaluation_history: List[Dict[str, Any]] = []

        # 价值阈值
        self.value_thresholds = {
            "high": 0.75,      # 高价值
            "medium": 0.50,    # 中等价值
            "low": 0.25        # 低价值
        }

        # 价值统计
        self.value_statistics = {
            "total_evaluated": 0,
            "high_value_count": 0,
            "medium_value_count": 0,
            "low_value_count": 0,
            "average_value": 0.0
        }

    def evaluate_memory(self, memory_content: str, memory_metadata: Dict[str, Any] = None) -> ValueScore:
        """
        综合评估记忆价值

        Args:
            memory_content: 记忆内容
            memory_metadata: 记忆元数据

        Returns:
            价值评分
        """
        if memory_metadata is None:
            memory_metadata = {}

        # 计算各个维度
        novelty = self._evaluate_novelty(memory_content, memory_metadata)
        utility = self._evaluate_utility(memory_content, memory_metadata)
        emotional = self._evaluate_emotional(memory_content, memory_metadata)
        frequency = self._evaluate_frequency(memory_metadata)
        coherence = self._evaluate_coherence(memory_content, memory_metadata)

        # 加权总分
        total_score = (
            self.importance_weights["novelty"] * novelty +
            self.importance_weights["utility"] * utility +
            self.importance_weights["emotional"] * emotional +
            self.importance_weights["frequency"] * frequency +
            self.importance_weights["coherence"] * coherence
        )

        score = ValueScore(
            total_score=total_score,
            novelty=novelty,
            utility=utility,
            emotional=emotional,
            frequency=frequency,
            coherence=coherence,
            details={
                "weights": self.importance_weights,
                "thresholds": self.value_thresholds,
                "value_category": self._categorize_value(total_score)
            }
        )

        # 记录评估历史
        self.evaluation_history.append({
            "timestamp": datetime.now().isoformat(),
            "content_snippet": memory_content[:100],
            "total_score": total_score,
            "breakdown": {
                "novelty": novelty,
                "utility": utility,
                "emotional": emotional,
                "frequency": frequency,
                "coherence": coherence
            }
        })

        # 更新统计
        self._update_statistics(total_score)

        return score

    def _evaluate_novelty(self, content: str, metadata: Dict[str, Any]) -> float:
        """评估新颖性"""
        novelty_score = 0.5

        # 检查元数据中的新颖性标记
        if metadata.get("is_new", False):
            novelty_score += 0.3

        # 内容长度指示信息量
        content_length = len(content)
        if content_length > 500:
            novelty_score += 0.1
        elif content_length < 100:
            novelty_score -= 0.1

        # 检查是否包含技术性内容
        technical_markers = ["```", "code", "function", "class", "algorithm", "architecture"]
        if any(marker in content.lower() for marker in technical_markers):
            novelty_score += 0.15

        # 检查是否为新的知识领域
        if not self.evaluation_history:
            novelty_score += 0.2  # 第一个记忆相对新颖

        return min(1.0, max(0.0, novelty_score))

    def _evaluate_utility(self, content: str, metadata: Dict[str, Any]) -> float:
        """评估实用性"""
        utility_score = 0.5

        # 检查内容类型
        content_type = metadata.get("content_type", "").lower()
        if content_type in ["code", "config", "workflow", "skill"]:
            utility_score += 0.3
        elif content_type in ["note", "summary"]:
            utility_score += 0.15

        # 检查是否包含可操作的信息
        action_keywords = [
            "如何", "how to", "方法", "method", "步骤", "steps",
            "最佳实践", "best practice", "解决方案", "solution",
            "实现", "implement", "部署", "deploy", "配置", "configure"
        ]
        content_lower = content.lower()
        action_count = sum(1 for kw in action_keywords if kw in content_lower)

        if action_count >= 2:
            utility_score += 0.2
        elif action_count == 1:
            utility_score += 0.1

        # 检查是否包含示例或代码
        if "```" in content or "example" in content_lower:
            utility_score += 0.15

        # 检查是否被标记为重要
        if metadata.get("importance", 0) > 1.0:
            utility_score += 0.2

        return min(1.0, max(0.0, utility_score))

    def _evaluate_emotional(self, content: str, metadata: Dict[str, Any]) -> float:
        """评估情感强度"""
        # 情感词汇列表
        emotional_words = {
            "positive": [
                "great", "excellent", "amazing", "wonderful", "perfect",
                "成功", "优秀", "完美", "喜欢", "棒", "好", "优秀",
                "love", "happy", "excited", "satisfied", "proud"
            ],
            "negative": [
                "bad", "terrible", "awful", "horrible", "worst",
                "失败", "糟糕", "讨厌", "痛苦", "坏", "差",
                "hate", "angry", "frustrated", "worried", "disappointed"
            ],
            "urgency": [
                "urgent", "critical", "immediately", "now", "asap",
                "紧急", "立即", "马上", "重要", "关键", "critical"
            ]
        }

        content_lower = content.lower()

        # 统计情感词数量
        positive_count = sum(1 for word in emotional_words["positive"] if word in content_lower)
        negative_count = sum(1 for word in emotional_words["negative"] if word in content_lower)
        urgency_count = sum(1 for word in emotional_words["urgency"] if word in content_lower)

        # 基于情感词数量计算强度
        total_emotional = positive_count + negative_count + urgency_count

        if total_emotional == 0:
            return 0.1
        elif total_emotional == 1:
            return 0.3
        elif total_emotional == 2:
            return 0.5
        elif total_emotional == 3:
            return 0.7
        else:
            return 0.9

    def _evaluate_frequency(self, metadata: Dict[str, Any]) -> float:
        """评估使用频率"""
        if not metadata:
            return 0.3

        # 基于访问次数
        access_count = metadata.get("access_count", 0)

        # 基于最后访问时间
        last_accessed_str = metadata.get("last_accessed")
        if last_accessed_str:
            try:
                last_accessed = datetime.fromisoformat(last_accessed_str)
                days_since_access = (datetime.now() - last_accessed).days

                # 最近访问过，频率较高
                if days_since_access < 1:
                    return 1.0
                elif days_since_access < 7:
                    return 0.8
                elif days_since_access < 30:
                    return 0.6
                elif days_since_access < 90:
                    return 0.4
                else:
                    return 0.2
            except:
                pass

        # 基于访问次数
        if access_count == 0:
            return 0.2
        elif access_count < 5:
            return 0.4
        elif access_count < 10:
            return 0.6
        elif access_count < 20:
            return 0.8
        else:
            return 1.0

    def _evaluate_coherence(self, content: str, metadata: Dict[str, Any]) -> float:
        """评估与现有知识的一致性"""
        # 简化实现：基于内容的结构和逻辑性

        coherence_score = 0.5

        # 检查内容的完整性
        if len(content) > 200 and len(content) < 2000:
            coherence_score += 0.2

        # 检查是否有逻辑连接词
        logical_connectors = [
            "因此", "所以", "因为", "但是", "然而", "此外",
            "therefore", "so", "because", "but", "however", "additionally",
            "首先", "其次", "最后", "first", "second", "finally"
        ]
        content_lower = content.lower()
        connector_count = sum(1 for conn in logical_connectors if conn in content_lower)

        if connector_count >= 2:
            coherence_score += 0.2

        # 检查是否有关键词
        if metadata.get("keywords"):
            coherence_score += 0.1

        return min(1.0, max(0.0, coherence_score))

    def _categorize_value(self, score: float) -> str:
        """分类价值等级"""
        if score >= self.value_thresholds["high"]:
            return "high"
        elif score >= self.value_thresholds["medium"]:
            return "medium"
        elif score >= self.value_thresholds["low"]:
            return "low"
        else:
            return "very_low"

    def _update_statistics(self, score: float):
        """更新价值统计"""
        self.value_statistics["total_evaluated"] += 1

        category = self._categorize_value(score)
        if category == "high":
            self.value_statistics["high_value_count"] += 1
        elif category == "medium":
            self.value_statistics["medium_value_count"] += 1
        elif category in ["low", "very_low"]:
            self.value_statistics["low_value_count"] += 1

        # 更新平均值
        total = self.value_statistics["total_evaluated"]
        current_avg = self.value_statistics["average_value"]
        self.value_statistics["average_value"] = (current_avg * (total - 1) + score) / total

    def should_keep_memory(self, score: ValueScore) -> bool:
        """判断是否应该保留记忆"""
        return score.total_score >= self.value_thresholds["low"]

    def should_forget_memory(self, memory_age_days: int, score: ValueScore) -> bool:
        """
        判断是否应该遗忘记忆

        Args:
            memory_age_days: 记忆年龄（天）
            score: 记忆价值评分

        Returns:
            是否应该遗忘
        """
        # 高价值记忆不易遗忘
        if score.total_score >= self.value_thresholds["high"]:
            # 高价值记忆至少保留365天
            return memory_age_days > 365

        # 中等价值记忆根据年龄决定
        if score.total_score >= self.value_thresholds["medium"]:
            return memory_age_days > 180

        # 低价值记忆可以更快遗忘
        if score.total_score >= self.value_thresholds["low"]:
            return memory_age_days > 90

        # 极低价值记忆快速遗忘
        return memory_age_days > 30

    def update_value_over_time(self, memory_id: str, days_passed: int, current_score: ValueScore) -> ValueScore:
        """
        更新记忆价值随时间变化

        Args:
            memory_id: 记忆ID
            days_passed: 经过的天数
            current_score: 当前价值评分

        Returns:
            更新后的价值评分
        """
        # 时间衰减因子
        decay_factor = math.exp(-days_passed / 365)  # 一年衰减到0.37

        # 频率衰减较慢
        new_frequency = current_score.frequency * math.exp(-days_passed / 730)

        # 新颖性快速衰减
        new_novelty = current_score.novelty * math.exp(-days_passed / 180)

        # 实用性和情感衰减适中
        new_utility = current_score.utility * decay_factor
        new_emotional = current_score.emotional * decay_factor

        # 一致性基本不变
        new_coherence = current_score.coherence

        # 重新计算总分
        new_total_score = (
            self.importance_weights["novelty"] * new_novelty +
            self.importance_weights["utility"] * new_utility +
            self.importance_weights["emotional"] * new_emotional +
            self.importance_weights["frequency"] * new_frequency +
            self.importance_weights["coherence"] * new_coherence
        )

        updated_score = ValueScore(
            total_score=new_total_score,
            novelty=new_novelty,
            utility=new_utility,
            emotional=new_emotional,
            frequency=new_frequency,
            coherence=new_coherence,
            details={
                "weights": self.importance_weights,
                "decay_factor": decay_factor,
                "days_passed": days_passed,
                "value_category": self._categorize_value(new_total_score)
            }
        )

        return updated_score

    def adjust_weights(self, new_weights: Dict[str, float]):
        """
        调整价值维度权重

        Args:
            new_weights: 新的权重字典
        """
        for dimension, weight in new_weights.items():
            if dimension in self.importance_weights:
                old_weight = self.importance_weights[dimension]
                self.importance_weights[dimension] = max(0.0, min(1.0, weight))
                print(f"[ValueSystem] 权重调整: {dimension} {old_weight:.2f} -> {weight:.2f}")

    def get_statistics(self) -> Dict[str, Any]:
        """获取价值统计信息"""
        return {
            **self.value_statistics,
            "thresholds": self.value_thresholds,
            "weights": self.importance_weights,
            "recent_evaluations": len(self.evaluation_history)
        }

    def find_high_value_memories(self, limit: int = 10) -> List[Dict[str, Any]]:
        """查找高价值记忆"""
        high_value_memories = [
            eval for eval in self.evaluation_history
            if eval["total_score"] >= self.value_thresholds["high"]
        ]

        # 按分数排序
        sorted_memories = sorted(
            high_value_memories,
            key=lambda x: x["total_score"],
            reverse=True
        )

        return sorted_memories[:limit]


class ExperienceEvaluator:
    """
    经验评估器
    评估学习经验的价值并更新价值观
    """

    def __init__(self, value_system: ValueSystem):
        self.value_system = value_system
        self.experience_history: List[Dict[str, Any]] = []

    def evaluate_experience(self, experience: Dict[str, Any]) -> Dict[str, Any]:
        """
        评估学习经验

        Args:
            experience: 经验数据

        Returns:
            评估结果
        """
        evaluation = {
            "experience_id": experience.get("id", "unknown"),
            "timestamp": datetime.now().isoformat(),
            "value_updates": {},
            "learning_gain": 0.0,
            "recommendations": []
        }

        # 评估对各个价值观的影响
        if "outcome" in experience:
            outcome = experience["outcome"]
            if outcome == "success":
                evaluation["value_updates"] = {
                    "accuracy": 0.05,
                    "confidence": 0.03,
                    "learning": 0.08
                }
                evaluation["learning_gain"] = 0.8
                evaluation["recommendations"].append("强化当前学习策略")
            elif outcome == "failure":
                evaluation["value_updates"] = {
                    "accuracy": -0.03,
                    "confidence": -0.05,
                    "learning": 0.1  # 失败也是学习
                }
                evaluation["learning_gain"] = 0.3
                evaluation["recommendations"].append("分析失败原因，调整策略")

        # 记录历史
        self.experience_history.append(evaluation)

        return evaluation

    def get_learning_trends(self) -> Dict[str, Any]:
        """获取学习趋势"""
        if not self.experience_history:
            return {"message": "暂无学习经验"}

        recent_experiences = self.experience_history[-50:]

        # 计算平均学习增益
        avg_gain = sum(exp["learning_gain"] for exp in recent_experiences) / len(recent_experiences)

        # 统计成功/失败比例
        success_count = sum(1 for exp in recent_experiences if exp.get("outcome") == "success")
        failure_count = sum(1 for exp in recent_experiences if exp.get("outcome") == "failure")

        return {
            "total_experiences": len(self.experience_history),
            "recent_experiences": len(recent_experiences),
            "average_learning_gain": avg_gain,
            "success_rate": success_count / (success_count + failure_count) if (success_count + failure_count) > 0 else 0,
            "total_success": success_count,
            "total_failure": failure_count
        }
