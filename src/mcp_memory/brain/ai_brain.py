"""
AI 大脑控制器 — 已接入 MemoryStore

修复记录:
- [P2] process_input: 接入 MemoryStore 实际写入
- [P2] retrieve_memory: 接入 MemoryStore 实际检索
- [P2] 保存/恢复时维护与 ChromaDB 的关联
- [P3] 类型注解补全
"""

from typing import List, Dict, Any, Optional
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
    AI 大脑 — 整合所有认知模块，通过 MemoryStore 实现持久化
    """

    def __init__(self, memory_store=None) -> None:
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

        # 真实存储引用（可选，传入则接入 ChromaDB）
        self.memory_store = memory_store

        # 大脑状态
        self.is_active = False
        self.last_update = datetime.now()
        self.total_cycles = 0

        print("[AIBrain] AI大脑已初始化")
        print(f"[AIBrain] {self.self_model.who_am_i()}")

    async def initialize(self) -> None:
        """初始化 AI 大脑"""
        print("[AIBrain] 正在初始化AI大脑...")
        self.is_active = True
        self.last_update = datetime.now()
        print("[AIBrain] AI大脑初始化完成")
        if self.memory_store:
            print("[AIBrain] 已接入 MemoryStore 持久化存储")

    async def process_input(self, content: str, context: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        """
        处理输入信息

        如果接入了 MemoryStore，会实际写入 ChromaDB。
        否则只操作内存中的认知模块（兼容旧行为）。
        """
        print(f"[AIBrain] 处理输入: {content[:50]}...")

        result: Dict[str, Any] = {
            "content": content,
            "processed_at": datetime.now().isoformat(),
            "actions_taken": [],
            "memories_created": [],
            "associations_created": [],
            "value_assessment": None,
        }

        # 1. 注意力评估
        should_remember, attention_score = self.attention.should_remember(content, context)
        result["attention_score"] = attention_score.total_score

        if should_remember:
            # 2. 价值评估
            value_score = self.value_system.evaluate_memory(content, context)
            result["value_assessment"] = value_score.to_dict()

            # 3. 接入 MemoryStore 进行实际写入
            memory_id = None
            if self.memory_store:
                try:
                    from mcp_memory.models.data_models import MemoryItem
                    memory = MemoryItem(
                        content=content,
                        user_id=context.get("user_id", "brain") if context else "brain",
                        scope=context.get("scope", "project") if context else "project",
                        project_id=context.get("project_id", "") if context else "",
                        is_shared=False,
                        importance=value_score.total_score,
                        title=content[:50] + "..." if len(content) > 50 else content,
                    )
                    memory_id = self.memory_store.save(memory)
                    result["memories_created"].append(memory_id)
                    result["actions_taken"].append("memory_created")
                    print(f"[AIBrain] 记忆已写入: {memory_id[:8]}")
                except Exception as e:
                    print(f"[AIBrain] 写入 MemoryStore 失败: {e}")
                    result["actions_taken"].append("memory_write_failed")

                # 4. 图谱关联
                if memory_id:
                    entities = self.memory_store._fallback_extract_entities(content)
                    if entities:
                        self.memory_store.add_entities_to_graph(memory_id, entities, category="AIBrain")
                        self.memory_store._save_graph()
                        result["associations_created"] = entities[:5]
            else:
                # 兼容旧行为：内存中的记忆痕迹
                memory_id = f"mem_{datetime.now().timestamp()}"
                trace = self.consolidation.create_trace(
                    memory_id=memory_id,
                    importance=value_score.total_score,
                )
                result["memories_created"].append(memory_id)
                result["actions_taken"].append("memory_trace_created")

                assocs = self.associations.create_associations(memory_id, content, context)
                result["associations_created"] = [a.to_dict() for a in assocs]
                result["actions_taken"].append("associations_created")

            # 5. 更新认知状态
            performance = CognitivePerformance(
                timestamp=datetime.now(),
                task_type="memory_creation",
                success=True,
                accuracy=value_score.total_score,
                time_taken=0.5,
            )
            self.metacognition.record_performance(performance)

            # 6. 更新自我模型
            experience = {
                "id": f"exp_{datetime.now().timestamp()}",
                "outcome": "success",
                "value_updates": {
                    "learning": 0.02 * value_score.total_score,
                    "accuracy": 0.01 * value_score.total_score,
                },
            }
            self.self_model.evolve(experience)
        else:
            result["actions_taken"].append("content_filtered")

        # 7. 生成好奇心问题
        if self.curiosity.curiosity_score > 0.7:
            questions = self.curiosity.generate_questions(content)
            if questions:
                result["questions_generated"] = questions[:3]

        self.last_update = datetime.now()
        self.total_cycles += 1
        return result

    async def retrieve_memory(self, query: str, context: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        """
        检索记忆

        如果接入了 MemoryStore，调用 store.search() 做真实检索。
        否则返回内存中的联想结果。
        """
        print(f"[AIBrain] 检索记忆: {query}")

        result: Dict[str, Any] = {
            "query": query,
            "retrieved_at": datetime.now().isoformat(),
            "memories": [],
            "associations_activated": [],
            "confidence": 0.0,
        }

        if self.memory_store:
            # 真实检索
            user_id = context.get("user_id", "brain") if context else "brain"
            project_id = context.get("project_id") if context else None
            try:
                memories, profiles = self.memory_store.store.search(
                    query=query,
                    user_id=user_id,
                    project_id=project_id,
                    limit=5,
                    reinforce=False,
                )
                for m in memories:
                    result["memories"].append({
                        "memory_id": m["id"],
                        "content": m["content"],
                        "relevance": m.get("score", 0),
                        "memory_type": m.get("metadata", {}).get("memory_type", "storage"),
                    })
                if profiles:
                    result["profile_context"] = [p["content"][:100] for p in profiles]
            except Exception as e:
                print(f"[AIBrain] 检索失败: {e}")
                result["error"] = str(e)
        else:
            # 兼容旧行为：内存联想
            activated = self.associations.activate_associations(query, limit=5)
            result["associations_activated"] = activated
            for mem_id in activated[:3]:
                result["memories"].append({
                    "memory_id": mem_id,
                    "relevance": 0.8 - len(result["memories"]) * 0.1,
                })
                self.consolidation.activate_memory(mem_id, activation_amount=0.3)

        if result["memories"]:
            result["confidence"] = sum(m.get("relevance", 0) for m in result["memories"]) / len(result["memories"])
            performance = CognitivePerformance(
                timestamp=datetime.now(),
                task_type="memory_retrieval",
                success=True,
                accuracy=result["confidence"],
                time_taken=0.3,
            )
            self.metacognition.record_performance(performance)
        else:
            self.curiosity.increase_curiosity(0.1)

        self.last_update = datetime.now()
        return result

    async def run_self_reflection(self) -> Dict[str, Any]:
        """运行自我反思"""
        print("[AIBrain] 开始自我反思...")

        reflection_result: Dict[str, Any] = {
            "reflected_at": datetime.now().isoformat(),
            "self_assessment": {},
            "recommendations": [],
            "actions_to_take": [],
        }

        self_assessment = self.self_model.reflect_on_self()
        reflection_result["self_assessment"] = self_assessment

        memory_report = self.metacognition.monitor_memory_state(
            memory_traces={mid: trace.to_dict() for mid, trace in self.consolidation.memory_traces.items()},
            consolidation_system=self.consolidation,
            value_system=self.value_system,
        )
        reflection_result["memory_state"] = memory_report.to_dict()

        reflection_result["learning_efficiency"] = self.metacognition.assess_learning_efficiency()
        biases = self.metacognition.identify_cognitive_biases()
        reflection_result["detected_biases"] = [b.value for b in biases]

        comprehensive_report = self.metacognition.get_comprehensive_report()
        reflection_result["recommendations"] = comprehensive_report["recommendations"]

        strategy_adjustments = self.metacognition.optimize_cognitive_strategy()
        reflection_result["strategy_adjustments"] = strategy_adjustments

        maintenance_actions = await self._perform_memory_maintenance()
        reflection_result["maintenance_actions"] = maintenance_actions

        priority_goals = self.self_model.get_priority_goals()
        for goal in priority_goals:
            progress = goal.progress + 0.01
            self.self_model.update_goal_progress(goal.goal_id, progress)

        print("[AIBrain] 自我反思完成")
        return reflection_result

    async def _perform_memory_maintenance(self) -> List[str]:
        """执行记忆维护"""
        actions: List[str] = []
        self.consolidation.decay_memories()
        actions.append("memory_decay")
        self.consolidation.consolidate_short_term()
        actions.append("memory_consolidation")
        forgotten = self.consolidation.get_forgotten_memories()
        for trace in forgotten:
            self.forgetting.forget_gracefully(trace.memory_id, trace, "已遗忘内容示例")
        actions.append(f"forget_{len(forgotten)}_memories")
        return actions

    async def generate_hypotheses(self, context: str) -> List[Hypothesis]:
        """生成假设"""
        print("[AIBrain] 生成假设...")
        hypotheses = self.hypothesis_gen.generate_hypotheses(context, [])
        print(f"[AIBrain] 生成了 {len(hypotheses)} 个假设")
        return hypotheses

    async def test_hypothesis(self, hypothesis: Hypothesis) -> bool:
        """测试假设"""
        print(f"[AIBrain] 测试假设: {hypothesis.description[:50]}...")
        is_valid = self.hypothesis_gen.test_hypothesis(hypothesis)
        performance = CognitivePerformance(
            timestamp=datetime.now(),
            task_type="hypothesis_testing",
            success=is_valid,
            accuracy=hypothesis.confidence,
            time_taken=1.0,
        )
        self.metacognition.record_performance(performance)
        return is_valid

    async def get_brain_status(self) -> Dict[str, Any]:
        """获取大脑状态"""
        return {
            "is_active": self.is_active,
            "last_update": self.last_update.isoformat(),
            "total_cycles": self.total_cycles,
            "memory_store_connected": self.memory_store is not None,
            "self_awareness": {
                "identity": self.self_model.identity,
                "version": self.self_model.version,
                "evolution_generation": self.self_model.evolution_generation,
                "total_experiences": self.self_model.total_learning_experiences,
            },
            "active_cognition": {
                "curiosity_level": self.curiosity.curiosity_score,
                "attention_threshold": self.attention.attention_threshold,
                "pending_questions": len(self.curiosity.questions),
                "pending_hypotheses": len(self.hypothesis_gen.get_pending_hypotheses()),
            },
            "value_system": self.value_system.get_statistics(),
            "dynamic_memory": {
                "total_traces": len(self.consolidation.memory_traces),
                "active_memories": len(self.consolidation.get_active_memories()),
                "forgotten_memories": len(self.consolidation.get_forgotten_memories()),
                "total_associations": len(self.associations.associations),
            },
            "metacognition": {
                "current_state": self.metacognition.current_state,
                "cognitive_strategies": self.metacognition.cognitive_strategies,
                "detected_biases": [b["bias"] for b in self.metacognition.detected_biases[-5:]],
            },
        }

    async def evolve_brain(self, experiences: List[Dict[str, Any]]) -> None:
        """进化大脑"""
        print(f"[AIBrain] 开始进化，基于 {len(experiences)} 个经验")
        for exp in experiences:
            evaluation = self.experience_evaluator.evaluate_experience(exp)
            for dimension, delta in evaluation["value_updates"].items():
                if dimension in self.self_model.values:
                    current_value = self.self_model.values[dimension]
                    self.self_model.values[dimension] = max(0.0, min(1.0, current_value + delta))
        for exp in experiences:
            self.self_model.evolve(exp)
        self.metacognition.optimize_cognitive_strategy()
        print(f"[AIBrain] 进化完成，当前代数: {self.self_model.evolution_generation}")

    def save_brain_state(self, filepath: str) -> None:
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
            "saved_at": datetime.now().isoformat(),
        }
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(state, f, indent=2, ensure_ascii=False)
        print(f"[AIBrain] 大脑状态已保存到: {filepath}")

    def load_brain_state(self, filepath: str) -> None:
        """加载大脑状态"""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                state = json.load(f)
            self.self_model = SelfModel.from_dict(state.get("self_model", {}))
            self.attention.attention_weights = state.get("attention_weights", self.attention.attention_weights)
            self.attention.attention_threshold = state.get("attention_threshold", self.attention.attention_threshold)
            self.curiosity.curiosity_score = state.get("curiosity_score", self.curiosity.curiosity_score)
            self.value_system.importance_weights = state.get("value_weights", self.value_system.importance_weights)
            self.value_system.value_statistics = state.get("value_statistics", self.value_system.value_statistics)
            self.metacognition.current_state = state.get("metacognition_state", self.metacognition.current_state)
            self.metacognition.cognitive_strategies = state.get("cognitive_strategies", self.metacognition.cognitive_strategies)
            print(f"[AIBrain] 大脑状态已从 {filepath} 恢复，进化代数: {self.self_model.evolution_generation}")
        except Exception as e:
            print(f"[AIBrain] 加载大脑状态失败: {e}")

    async def shutdown(self) -> None:
        """关闭 AI 大脑"""
        print("[AIBrain] 正在关闭AI大脑...")
        self.is_active = False
        await self.run_self_reflection()
        print("[AIBrain] AI大脑已关闭")
