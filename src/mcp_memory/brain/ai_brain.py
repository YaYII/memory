"""
AI大脑控制器
整合所有认知模块，实现自主的AI记忆系统
"""

from typing import List, Dict, Any, Optional, Tuple
from datetime import datetime
import asyncio
import json

from .self_awareness import SelfModel, Goal, GoalType, PersonalityTraits
from .active_cognition import AttentionSystem, CuriosityEngine, HypothesisGenerator, Hypothesis
from .value_judgment import ValueSystem, ValueScore, ExperienceEvaluator
from .dynamic_memory import ConsolidationSystem, ForgettingMechanism, AssociationEngine
from .metacognition import MetacognitionSystem, CognitivePerformance, MemoryStateReport


class AIBrain:
    """
    AI大脑
    整合所有认知模块，实现自主记忆管理
    """

    def __init__(self):
        # 核心认知模块
        self.self_model = SelfModel()
        self.attention = AttentionSystem()
        self.curiosity = CuriosityEngine()
        self.hypothesis_gen = HypothesisGenerator()
        self.value_system = ValueSystem()
        self.consolidation = ConsolidationSystem()
        self.forgetting = ForgettingMechanism()
        self.associations = AssociationEngine()
        self.metacognition = MetacognitionSystem()
        self.experience_evaluator = ExperienceEvaluator(self.value_system)

        # 大脑状态
        self.is_active = False
        self.last_update = datetime.now()
        self.total_cycles = 0

        # 异步任务
        self._background_tasks = []

        print("[AIBrain] AI大脑已初始化")
        print(f"[AIBrain] {self.self_model.who_am_i()}")

    async def initialize(self):
        """初始化AI大脑"""
        print("[AIBrain] 正在初始化AI大脑...")

        # 初始化所有模块
        # 大多数模块不需要异步初始化
        self.is_active = True
        self.last_update = datetime.now()

        # 启动后台任务
        self._start_background_tasks()

        print("[AIBrain] AI大脑初始化完成")
        print(f"[AIBrain] 核心能力: {', '.join(self.self_model.capabilities[:3])}...")

    def _start_background_tasks(self):
        """启动后台任务"""
        # 创建周期性任务（简化实现）
        print("[AIBrain] 启动后台认知任务...")

        # 实际实现应该使用asyncio.create_task
        # 这里只是示例

    async def process_input(self, content: str, context: Dict[str, Any] = None) -> Dict[str, Any]:
        """
        处理输入信息

        Args:
            content: 输入内容
            context: 上下文信息

        Returns:
            处理结果
        """
        print(f"[AIBrain] 处理输入: {content[:50]}...")

        result = {
            "content": content,
            "processed_at": datetime.now().isoformat(),
            "actions_taken": [],
            "memories_created": [],
            "associations_created": [],
            "value_assessment": None
        }

        # 1. 注意力评估
        should_remember, attention_score = self.attention.should_remember(content, context)
        result["attention_score"] = attention_score.total_score

        if should_remember:
            # 2. 价值评估
            value_score = self.value_system.evaluate_memory(content, context)
            result["value_assessment"] = value_score.to_dict()

            # 3. 创建记忆痕迹
            memory_id = f"mem_{datetime.now().timestamp()}"
            trace = self.consolidation.create_trace(
                memory_id=memory_id,
                importance=value_score.total_score
            )
            result["memories_created"].append(memory_id)
            result["actions_taken"].append("memory_created")

            # 4. 创建联想
            assocs = self.associations.create_associations(memory_id, content, context)
            result["associations_created"] = [assoc.to_dict() for assoc in assocs]
            result["actions_taken"].append("associations_created")

            # 5. 更新认知状态
            performance = CognitivePerformance(
                timestamp=datetime.now(),
                task_type="memory_creation",
                success=True,
                accuracy=value_score.total_score,
                time_taken=0.5
            )
            self.metacognition.record_performance(performance)

            # 6. 更新自我模型
            experience = {
                "id": f"exp_{datetime.now().timestamp()}",
                "outcome": "success",
                "value_updates": {
                    "learning": 0.02 * value_score.total_score,
                    "accuracy": 0.01 * value_score.total_score
                }
            }
            self.self_model.evolve(experience)

        else:
            result["actions_taken"].append("content_filtered")

        # 7. 生成学习问题
        if self.curiosity.curiosity_score > 0.7:
            questions = self.curiosity.generate_questions(content)
            if questions:
                result["questions_generated"] = questions[:3]

        self.last_update = datetime.now()
        self.total_cycles += 1

        print(f"[AIBrain] 处理完成: {', '.join(result['actions_taken'])}")
        return result

    async def retrieve_memory(self, query: str, context: Dict[str, Any] = None) -> Dict[str, Any]:
        """
        检索记忆

        Args:
            query: 查询内容
            context: 上下文信息

        Returns:
            检索结果
        """
        print(f"[AIBrain] 检索记忆: {query}")

        result = {
            "query": query,
            "retrieved_at": datetime.now().isoformat(),
            "memories": [],
            "associations_activated": [],
            "confidence": 0.0
        }

        # 1. 激活联想
        activated = self.associations.activate_associations(query, limit=5)
        result["associations_activated"] = activated

        # 2. 检索记忆（简化实现，实际应该从存储中检索）
        # 这里返回示例结果
        for mem_id in activated[:3]:
            result["memories"].append({
                "memory_id": mem_id,
                "relevance": 0.8 - len(result["memories"]) * 0.1
            })

            # 激活记忆
            self.consolidation.activate_memory(mem_id, activation_amount=0.3)

        # 3. 计算置信度
        if result["memories"]:
            result["confidence"] = sum(m["relevance"] for m in result["memories"]) / len(result["memories"])

            # 记录检索表现
            performance = CognitivePerformance(
                timestamp=datetime.now(),
                task_type="memory_retrieval",
                success=True,
                accuracy=result["confidence"],
                time_taken=0.3
            )
            self.metacognition.record_performance(performance)
        else:
            # 检索失败，增加好奇心
            self.curiosity.increase_curiosity(0.1)

        self.last_update = datetime.now()
        return result

    async def run_self_reflection(self) -> Dict[str, Any]:
        """
        运行自我反思

        Returns:
            反思结果
        """
        print("[AIBrain] 开始自我反思...")

        reflection_result = {
            "reflected_at": datetime.now().isoformat(),
            "self_assessment": {},
            "recommendations": [],
            "actions_to_take": []
        }

        # 1. 自我评估
        self_assessment = self.self_model.reflect_on_self()
        reflection_result["self_assessment"] = self_assessment

        # 2. 记忆状态监控
        memory_report = self.metacognition.monitor_memory_state(
            memory_traces={mid: trace.to_dict() for mid, trace in self.consolidation.memory_traces.items()},
            consolidation_system=self.consolidation,
            value_system=self.value_system
        )
        reflection_result["memory_state"] = memory_report.to_dict()

        # 3. 学习效率评估
        learning_efficiency = self.metacognition.assess_learning_efficiency()
        reflection_result["learning_efficiency"] = learning_efficiency

        # 4. 识别认知偏差
        biases = self.metacognition.identify_cognitive_biases()
        reflection_result["detected_biases"] = [b.value for b in biases]

        # 5. 生成建议
        comprehensive_report = self.metacognition.get_comprehensive_report()
        reflection_result["recommendations"] = comprehensive_report["recommendations"]

        # 6. 优化策略
        strategy_adjustments = self.metacognition.optimize_cognitive_strategy()
        reflection_result["strategy_adjustments"] = strategy_adjustments

        # 7. 记忆维护
        maintenance_actions = await self._perform_memory_maintenance()
        reflection_result["maintenance_actions"] = maintenance_actions

        # 8. 更新目标进度
        priority_goals = self.self_model.get_priority_goals()
        for goal in priority_goals:
            progress = goal.progress + 0.01  # 模拟进展
            self.self_model.update_goal_progress(goal.goal_id, progress)

        print("[AIBrain] 自我反思完成")
        return reflection_result

    async def _perform_memory_maintenance(self) -> List[str]:
        """执行记忆维护"""
        actions = []

        # 1. 衰减记忆
        self.consolidation.decay_memories()
        actions.append("memory_decay")

        # 2. 巩固短期记忆
        self.consolidation.consolidate_short_term()
        actions.append("memory_consolidation")

        # 3. 处理遗忘
        forgotten = self.consolidation.get_forgotten_memories()
        for trace in forgotten:
            # 优雅遗忘（需要实际内容，这里简化）
            self.forgetting.forget_gracefully(trace.memory_id, trace, "已遗忘内容示例")
        actions.append(f"forget_{len(forgotten)}_memories")

        return actions

    async def generate_hypotheses(self, context: str) -> List[Hypothesis]:
        """
        生成假设

        Args:
            context: 上下文

        Returns:
            生成的假设列表
        """
        print("[AIBrain] 生成假设...")

        observations = []  # 可以从记忆中提取观察
        hypotheses = self.hypothesis_gen.generate_hypotheses(context, observations)

        print(f"[AIBrain] 生成了 {len(hypotheses)} 个假设")
        return hypotheses

    async def test_hypothesis(self, hypothesis: Hypothesis) -> bool:
        """
        测试假设

        Args:
            hypothesis: 要测试的假设

        Returns:
            假设是否成立
        """
        print(f"[AIBrain] 测试假设: {hypothesis.description[:50]}...")

        is_valid = self.hypothesis_gen.test_hypothesis(hypothesis)

        # 记录认知表现
        performance = CognitivePerformance(
            timestamp=datetime.now(),
            task_type="hypothesis_testing",
            success=is_valid,
            accuracy=hypothesis.confidence,
            time_taken=1.0
        )
        self.metacognition.record_performance(performance)

        return is_valid

    async def get_brain_status(self) -> Dict[str, Any]:
        """
        获取大脑状态

        Returns:
            大脑状态信息
        """
        status = {
            "is_active": self.is_active,
            "last_update": self.last_update.isoformat(),
            "total_cycles": self.total_cycles,

            # 自我意识
            "self_awareness": {
                "identity": self.self_model.identity,
                "version": self.self_model.version,
                "evolution_generation": self.self_model.evolution_generation,
                "total_experiences": self.self_model.total_learning_experiences
            },

            # 主动认知
            "active_cognition": {
                "curiosity_level": self.curiosity.curiosity_score,
                "attention_threshold": self.attention.attention_threshold,
                "pending_questions": len(self.curiosity.questions),
                "pending_hypotheses": len(self.hypothesis_gen.get_pending_hypotheses())
            },

            # 价值系统
            "value_system": self.value_system.get_statistics(),

            # 动态记忆
            "dynamic_memory": {
                "total_traces": len(self.consolidation.memory_traces),
                "active_memories": len(self.consolidation.get_active_memories()),
                "forgotten_memories": len(self.consolidation.get_forgotten_memories()),
                "total_associations": len(self.associations.associations)
            },

            # 元认知
            "metacognition": {
                "current_state": self.metacognition.current_state,
                "cognitive_strategies": self.metacognition.cognitive_strategies,
                "detected_biases": [b["bias"] for b in self.metacognition.detected_biases[-5:]]
            }
        }

        return status

    async def evolve_brain(self, experiences: List[Dict[str, Any]]):
        """
        进化大脑

        Args:
            experiences: 学习经验列表
        """
        print(f"[AIBrain] 开始进化，基于 {len(experiences)} 个经验")

        for exp in experiences:
            # 评估经验
            evaluation = self.experience_evaluator.evaluate_experience(exp)

            # 更新价值观
            for dimension, delta in evaluation["value_updates"].items():
                if dimension in self.self_model.values:
                    current_value = self.self_model.values[dimension]
                    self.self_model.values[dimension] = max(0.0, min(1.0, current_value + delta))

        # 进化自我模型
        for exp in experiences:
            self.self_model.evolve(exp)

        # 优化认知策略
        self.metacognition.optimize_cognitive_strategy()

        print("[AIBrain] 进化完成")
        print(f"[AIBrain] 当前进化代数: {self.self_model.evolution_generation}")

    def save_brain_state(self, filepath: str):
        """保存大脑状态"""
        state = {
            "self_model": self.self_model.to_dict(),
            "attention_weights": self.attention.attention_weights,
            "attention_threshold": self.attention.attention_threshold,
            "curiosity_score": self.curiosity.curiosity_score,
            "value_weights": self.value_system.importance_weights,
            "value_statistics": self.value_system.value_statistics,
            "metacognition_state": self.metacognition.current_state,
            "cognitive_strategies": self.metacognition.cognitive_strategies,
            "saved_at": datetime.now().isoformat()
        }

        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(state, f, indent=2, ensure_ascii=False)

        print(f"[AIBrain] 大脑状态已保存到: {filepath}")

    def load_brain_state(self, filepath: str):
        """加载大脑状态"""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                state = json.load(f)

            # 恢复自我模型
            self.self_model = SelfModel.from_dict(state.get("self_model", {}))

            # 恢复注意力系统
            self.attention.attention_weights = state.get("attention_weights", self.attention.attention_weights)
            self.attention.attention_threshold = state.get("attention_threshold", self.attention.attention_threshold)

            # 恢复好奇心
            self.curiosity.curiosity_score = state.get("curiosity_score", self.curiosity.curiosity_score)

            # 恢复价值系统
            self.value_system.importance_weights = state.get("value_weights", self.value_system.importance_weights)
            self.value_system.value_statistics = state.get("value_statistics", self.value_system.value_statistics)

            # 恢复元认知
            self.metacognition.current_state = state.get("metacognition_state", self.metacognition.current_state)
            self.metacognition.cognitive_strategies = state.get("cognitive_strategies", self.metacognition.cognitive_strategies)

            print(f"[AIBrain] 大脑状态已从 {filepath} 恢复")
            print(f"[AIBrain] 恢复的进化代数: {self.self_model.evolution_generation}")

        except Exception as e:
            print(f"[AIBrain] 加载大脑状态失败: {e}")

    async def shutdown(self):
        """关闭AI大脑"""
        print("[AIBrain] 正在关闭AI大脑...")

        self.is_active = False

        # 执行最后的自我反思
        final_reflection = await self.run_self_reflection()
        print("[AIBrain] 最终自我反思完成")

        print("[AIBrain] AI大脑已关闭")
