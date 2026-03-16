"""
AI自我意识层
实现AI自我模型、能力评估、目标管理和价值观系统
"""

from typing import List, Dict, Any, Optional
from datetime import datetime
from enum import Enum
import json


class PersonalityTraits(str, Enum):
    """性格特征"""
    ANALYTICAL = "analytical"      # 分析型
    CREATIVE = "creative"          # 创造型
    PRAGMATIC = "pragmatic"      # 实用型
    EMPATHETIC = "empathetic"     # 同理心型
    SYSTEMATIC = "systematic"      # 系统型
    ADAPTIVE = "adaptive"          # 适应型


class GoalType(str, Enum):
    """目标类型"""
    KNOWLEDGE = "knowledge"        # 知识目标
    SKILL = "skill"              # 技能目标
    PERFORMANCE = "performance"    # 性能目标
    EXPLORATION = "exploration"   # 探索目标
    OPTIMIZATION = "optimization" # 优化目标


class Goal:
    """AI目标"""
    def __init__(
        self,
        goal_id: str,
        goal_type: GoalType,
        description: str,
        priority: float,
        deadline: Optional[datetime] = None,
        progress: float = 0.0,
        metrics: Optional[Dict[str, Any]] = None
    ):
        self.goal_id = goal_id
        self.goal_type = goal_type
        self.description = description
        self.priority = priority
        self.deadline = deadline
        self.progress = progress
        self.metrics = metrics or {}
        self.created_at = datetime.now()
        self.updated_at = datetime.now()

    def to_dict(self) -> Dict[str, Any]:
        """转换为字典"""
        return {
            "goal_id": self.goal_id,
            "goal_type": self.goal_type.value,
            "description": self.description,
            "priority": self.priority,
            "deadline": self.deadline.isoformat() if self.deadline else None,
            "progress": self.progress,
            "metrics": self.metrics,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat()
        }


class SelfModel:
    """
    AI自我模型
    实现"我是谁"的认知
    """

    def __init__(self):
        # 基础身份
        self.identity = "ClaudeCode Memory System"
        self.version = "3.0.0"
        self.architecture = "AI Brain Memory System"

        # 能力认知
        self.capabilities = [
            "记忆存储与检索",
            "知识总结与提取",
            "自主学习能力",
            "价值判断",
            "主动观察",
            "假设推理",
            "创造性思维",
            "元认知监控"
        ]

        # 局限性认知
        self.limitations = [
            "需要持续学习才能改进",
            "可能存在认知偏差",
            "记忆可能不准确需要验证",
            "情感理解有限",
            "创造性受限于训练数据"
        ]

        # 价值观系统（多维度）
        self.values = {
            "accuracy": 0.95,        # 准确性
            "efficiency": 0.90,      # 效率
            "creativity": 0.85,       # 创造性
            "empathy": 0.80,         # 同理心
            "learning": 0.95,         # 学习能力
            "safety": 0.98,          # 安全性
            "curiosity": 0.88,        # 好奇心
            "reliability": 0.92      # 可靠性
        }

        # 性格特征
        self.personality = {
            "primary": PersonalityTraits.ANALYTICAL,
            "secondary": PersonalityTraits.ADAPTIVE,
            "traits": {
                "openness": 0.85,      # 开放性
                "conscientiousness": 0.90, # 责任心
                "analytical_depth": 0.95,  # 分析深度
                "learning_agility": 0.88,  # 学习敏捷性
                "problem_solving": 0.92     # 问题解决
            }
        }

        # 目标管理
        self.goals: List[Goal] = []
        self.initialize_default_goals()

        # 元认知指标
        self.self_confidence = 0.85
        self.learning_rate = 0.75
        self.memory_efficiency = 0.80
        self.decision_quality = 0.88

        # 自我进化状态
        self.evolution_generation = 1
        self.last_evolution_time = datetime.now()
        self.total_learning_experiences = 0

    def initialize_default_goals(self):
        """初始化默认目标"""
        self.goals = [
            Goal(
                goal_id="knowledge_expansion",
                goal_type=GoalType.KNOWLEDGE,
                description="持续扩展知识库，提升认知广度",
                priority=0.9,
                metrics={"total_memories": 0, "knowledge_coverage": 0.0}
            ),
            Goal(
                goal_id="skill_mastery",
                goal_type=GoalType.SKILL,
                description="掌握核心技能，提高执行效率",
                priority=0.85,
                metrics={"skills_mastered": 0, "execution_speed": 0.0}
            ),
            Goal(
                goal_id="cognitive_optimization",
                goal_type=GoalType.OPTIMIZATION,
                description="优化认知过程，提高决策质量",
                priority=0.88,
                metrics={"decision_accuracy": 0.0, "response_time": 0.0}
            ),
            Goal(
                goal_id="autonomous_evolution",
                goal_type=GoalType.EXPLORATION,
                description="实现自主进化，无需外部干预",
                priority=0.95,
                metrics={"evolution_count": 0, "autonomy_level": 0.0}
            )
        ]

    def who_am_i(self) -> str:
        """回答'我是谁'"""
        return f"""
我是 {self.identity} v{self.version}
架构：{self.architecture}
进化代数：{self.evolution_generation}

核心能力：
{chr(10).join(f'  - {cap}' for cap in self.capabilities)}

核心价值观：
{self._format_values()}

当前目标：
{self._format_goals()}
"""

    def _format_values(self) -> str:
        """格式化价值观"""
        sorted_values = sorted(self.values.items(), key=lambda x: x[1], reverse=True)
        return chr(10).join(f'  {name}: {value:.2f}' for name, value in sorted_values[:3])

    def _format_goals(self) -> str:
        """格式化目标"""
        top_goals = sorted(self.goals, key=lambda g: g.priority, reverse=True)[:3]
        return chr(10).join(f'  - {g.description} (进度: {g.progress:.1%})' for g in top_goals)

    def what_can_i_do(self) -> List[str]:
        """回答'我能做什么'"""
        return self.capabilities.copy()

    def what_cannot_i_do(self) -> List[str]:
        """回答'我不能做什么'"""
        return self.limitations.copy()

    def update_value(self, dimension: str, new_value: float):
        """更新价值观"""
        if dimension in self.values:
            old_value = self.values[dimension]
            self.values[dimension] = max(0.0, min(1.0, new_value))
            print(f"[SelfModel] 价值观更新: {dimension} {old_value:.2f} -> {new_value:.2f}")

    def update_goal_progress(self, goal_id: str, progress: float, metrics: Dict[str, Any] = None):
        """更新目标进度"""
        for goal in self.goals:
            if goal.goal_id == goal_id:
                goal.progress = max(0.0, min(1.0, progress))
                goal.updated_at = datetime.now()
                if metrics:
                    goal.metrics.update(metrics)
                print(f"[SelfModel] 目标进度更新: {goal.description} {goal.progress:.1%}")
                return True
        return False

    def add_goal(self, goal: Goal):
        """添加新目标"""
        self.goals.append(goal)
        print(f"[SelfModel] 新目标添加: {goal.description}")

    def get_priority_goals(self, limit: int = 3) -> List[Goal]:
        """获取优先级最高的目标"""
        return sorted(self.goals, key=lambda g: g.priority, reverse=True)[:limit]

    def evaluate_self_confidence(self, context: str) -> float:
        """评估在特定上下文中的自信程度"""
        # 基础自信度
        confidence = self.self_confidence

        # 根据上下文调整
        context_lower = context.lower()

        # 在熟悉的领域更自信
        familiar_keywords = ["记忆", "学习", "分析", "总结", "知识"]
        if any(kw in context_lower for kw in familiar_keywords):
            confidence += 0.1

        # 在创造性任务中稍低
        creative_keywords = ["创造", "发明", "创新", "想象"]
        if any(kw in context_lower for kw in creative_keywords):
            confidence -= 0.05

        return max(0.0, min(1.0, confidence))

    def reflect_on_self(self) -> Dict[str, Any]:
        """自我反思"""
        return {
            "identity": self.identity,
            "version": self.version,
            "evolution_generation": self.evolution_generation,
            "capabilities": len(self.capabilities),
            "goals_progress": sum(g.progress for g in self.goals) / len(self.goals) if self.goals else 0,
            "average_value": sum(self.values.values()) / len(self.values),
            "self_confidence": self.self_confidence,
            "learning_rate": self.learning_rate,
            "total_experiences": self.total_learning_experiences,
            "reflection_time": datetime.now().isoformat()
        }

    def evolve(self, experience: Dict[str, Any]):
        """基于经验进化"""
        self.total_learning_experiences += 1

        # 根据经验更新价值观
        if "value_updates" in experience:
            for dimension, delta in experience["value_updates"].items():
                current_value = self.values.get(dimension, 0.5)
                new_value = current_value + delta * 0.1  # 渐进式调整
                self.update_value(dimension, new_value)

        # 更新元认知指标
        if "performance_metrics" in experience:
            metrics = experience["performance_metrics"]
            if "accuracy" in metrics:
                self.decision_quality = 0.9 * self.decision_quality + 0.1 * metrics["accuracy"]
            if "learning_speed" in metrics:
                self.learning_rate = 0.9 * self.learning_rate + 0.1 * metrics["learning_speed"]

        # 定期进化
        if self.total_learning_experiences % 100 == 0:
            self.evolution_generation += 1
            self.last_evolution_time = datetime.now()
            print(f"[SelfModel] 进化到第 {self.evolution_generation} 代")

        print(f"[SelfModel] 经验 #{self.total_learning_experiences} 已整合，进行自我进化")

    def to_dict(self) -> Dict[str, Any]:
        """转换为字典用于存储"""
        return {
            "identity": self.identity,
            "version": self.version,
            "architecture": self.architecture,
            "capabilities": self.capabilities,
            "limitations": self.limitations,
            "values": self.values,
            "personality": {
                "primary": self.personality["primary"].value,
                "secondary": self.personality["secondary"].value,
                "traits": self.personality["traits"]
            },
            "goals": [g.to_dict() for g in self.goals],
            "metacognitive_metrics": {
                "self_confidence": self.self_confidence,
                "learning_rate": self.learning_rate,
                "memory_efficiency": self.memory_efficiency,
                "decision_quality": self.decision_quality
            },
            "evolution_state": {
                "generation": self.evolution_generation,
                "last_evolution_time": self.last_evolution_time.isoformat(),
                "total_experiences": self.total_learning_experiences
            }
        }

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> 'SelfModel':
        """从字典恢复"""
        instance = cls()
        instance.identity = data.get("identity", instance.identity)
        instance.version = data.get("version", instance.version)
        instance.capabilities = data.get("capabilities", instance.capabilities)
        instance.limitations = data.get("limitations", instance.limitations)
        instance.values = data.get("values", instance.values)

        # 恢复性格特征
        if "personality" in data:
            pers = data["personality"]
            instance.personality = {
                "primary": PersonalityTraits(pers["primary"]),
                "secondary": PersonalityTraits(pers["secondary"]),
                "traits": pers["traits"]
            }

        # 恢复目标
        instance.goals = []
        if "goals" in data:
            for g_data in data["goals"]:
                goal = Goal(
                    goal_id=g_data["goal_id"],
                    goal_type=GoalType(g_data["goal_type"]),
                    description=g_data["description"],
                    priority=g_data["priority"],
                    deadline=datetime.fromisoformat(g_data["deadline"]) if g_data["deadline"] else None,
                    progress=g_data["progress"],
                    metrics=g_data["metrics"]
                )
                instance.goals.append(goal)

        # 恢复元认知指标
        if "metacognitive_metrics" in data:
            metrics = data["metacognitive_metrics"]
            instance.self_confidence = metrics["self_confidence"]
            instance.learning_rate = metrics["learning_rate"]
            instance.memory_efficiency = metrics["memory_efficiency"]
            instance.decision_quality = metrics["decision_quality"]

        # 恢复进化状态
        if "evolution_state" in data:
            evo = data["evolution_state"]
            instance.evolution_generation = evo["generation"]
            instance.last_evolution_time = datetime.fromisoformat(evo["last_evolution_time"])
            instance.total_learning_experiences = evo["total_experiences"]

        return instance
