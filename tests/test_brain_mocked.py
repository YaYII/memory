"""
AI大脑单元测试 — 使用 Mock 隔离依赖
"""

import unittest
from datetime import datetime
from unittest.mock import MagicMock, patch, PropertyMock

from mcp_memory.brain.ai_brain import AIBrain
from mcp_memory.brain.attention import AttentionSystem
from mcp_memory.brain.curiosity import CuriositySystem
from mcp_memory.brain.hypothesis import HypothesisGenerator
from mcp_memory.brain.value_system import ValueSystem
from mcp_memory.brain.consolidation import MemoryConsolidation
from mcp_memory.brain.forgetting import ForgettingMechanism
from mcp_memory.brain.association import AssociationNetwork
from mcp_memory.brain.metacognition import MetacognitionSystem
from mcp_memory.brain.self_model import SelfModel


class TestAIBrainWithMock(unittest.TestCase):
    """使用 Mock 隔离外部依赖的 AI 大脑测试"""

    def setUp(self):
        self.mock_store = MagicMock()
        self.mock_store.get_tiered_stats.return_value = {
            "total_count": 10,
            "storage_count": 6,
            "thinking_count": 3,
            "skill_count": 1,
        }
        self.mock_store.read_memory.return_value = ([], {})
        self.mock_store._fallback_extract_entities.return_value = []
        self.mock_store.get_related_memories_by_graph.return_value = []

        self.brain = AIBrain(memory_store=self.mock_store)

    def test_initialization_with_store(self):
        assert self.brain._memory_store is self.mock_store
        assert isinstance(self.brain.self_model, SelfModel)
        assert isinstance(self.brain.attention, AttentionSystem)
        assert isinstance(self.brain.curiosity, CuriositySystem)
        assert isinstance(self.brain.hypothesis_gen, HypothesisGenerator)
        assert isinstance(self.brain.value_system, ValueSystem)
        assert isinstance(self.brain.consolidation, MemoryConsolidation)
        assert isinstance(self.brain.forgetting, ForgettingMechanism)
        assert isinstance(self.brain.associations, AssociationNetwork)
        assert isinstance(self.brain.metacognition, MetacognitionSystem)

    def test_set_memory_store(self):
        new_store = MagicMock()
        self.brain.set_memory_store(new_store)
        assert self.brain._memory_store is new_store
        assert self.brain.consolidation.memory_store is new_store
        assert self.brain.associations.memory_store is new_store

    async def test_process_input_with_high_value_content(self):
        self.mock_store.save.return_value = "mem_test_001"
        content = "这是一个重要的技术知识点"
        context = {"user_id": "test", "scope": "project"}

        result = await self.brain.process_input(content, context)

        assert result["content"] == content
        assert "processed_at" in result
        assert "actions_taken" in result
        assert "attention_score" in result
        assert "value_assessment" in result
        assert "memories_created" in result
        assert isinstance(result["attention_score"], float)
        assert 0.0 <= result["attention_score"] <= 1.0

    async def test_process_input_with_low_value_content(self):
        content = "x"
        context = {"user_id": "test"}

        result = await self.brain.process_input(content, context)

        assert result["actions_taken"] == ["content_filtered"]
        assert result["memories_created"] == []

    async def test_retrieve_memory_without_store(self):
        brain_no_store = AIBrain()
        result = await brain_no_store.retrieve_memory("test query")

        assert result["error"] == "MemoryStore not connected"
        assert result["memories"] == []
        assert result["associations_activated"] == []

    async def test_retrieve_memory_with_store(self):
        mock_results = [
            {"id": "mem_1", "content": "test content", "metadata": {}},
        ]
        self.mock_store.read_memory.return_value = (mock_results, {})

        result = await self.brain.retrieve_memory("test query", user_id="test_user")

        self.mock_store.read_memory.assert_called_once_with(
            user_id="test_user",
            query="test query",
            limit=10,
            reinforce=True,
        )
        assert result["memories"] == mock_results
        assert result["confidence"] > 0.0

    async def test_retrieve_memory_store_error(self):
        self.mock_store.read_memory.side_effect = RuntimeError("DB error")

        result = await self.brain.retrieve_memory("test query")

        assert "error" in result
        assert "DB error" in result["error"]
        assert result["memories"] == []

    async def test_generate_hypotheses(self):
        hypotheses = await self.brain.generate_hypotheses("系统运行缓慢")
        assert isinstance(hypotheses, list)
        assert len(hypotheses) > 0

    async def test_test_hypothesis(self):
        assert await self.brain.test_hypothesis("这是一个有效的假设文本") is True
        assert await self.brain.test_hypothesis("短") is False

    async def test_get_brain_status_with_store(self):
        result = await self.brain.get_brain_status()

        assert result["is_active"] is True
        assert result["memory_store_connected"] is True
        assert result["memory_total_count"] == 10

    async def test_get_brain_status_without_store(self):
        brain_no_store = AIBrain()
        result = await brain_no_store.get_brain_status()

        assert result["memory_store_connected"] is False

    async def test_evolve_brain(self):
        experiences = [
            {"action": "memory_created"},
            {"action": "retrieval_success"},
        ]
        initial_gen = self.brain.self_model.evolution_generation
        await self.brain.evolve_brain(experiences)

        assert self.brain.self_model.evolution_generation == initial_gen + 1
        assert self.brain.self_model.total_learning_experiences == 2

    def test_save_and_load_brain_state(self, tmp_path):
        state_file = str(tmp_path / "brain_state.json")

        self.brain.total_cycles = 42
        self.brain.save_brain_state(state_file)

        self.brain.total_cycles = 0
        self.brain.load_brain_state(state_file)

        assert self.brain.total_cycles == 42

    async def test_shutdown(self):
        assert self.brain.is_active is True
        await self.brain.shutdown()
        assert self.brain.is_active is False


class TestAttentionSystem(unittest.TestCase):
    def test_empty_content_returns_zero(self):
        system = AttentionSystem()
        assert system.calculate_attention("", {}) == 0.0

    def test_high_signal_keywords_boost_score(self):
        system = AttentionSystem()
        low_score = system.calculate_attention("hello world", {})
        high_score = system.calculate_attention("error bug critical fix", {})
        assert high_score > low_score

    def test_code_indicators_boost_score(self):
        system = AttentionSystem()
        code_score = system.calculate_attention("def foo(): return bar", {})
        assert code_score > 0.0

    def test_question_marks_boost_score(self):
        system = AttentionSystem()
        q_score = system.calculate_attention("What is this???", {})
        assert q_score > 0.0

    def test_score_bounded(self):
        system = AttentionSystem()
        score = system.calculate_attention("A" * 1000 + " error critical ???", {})
        assert 0.0 <= score <= 1.0


class TestCuriositySystem(unittest.TestCase):
    def test_generate_questions_empty_content(self):
        system = CuriositySystem()
        assert system.generate_questions("") == []

    def test_generate_questions_error_content(self):
        system = CuriositySystem()
        questions = system.generate_questions("error: connection failed")
        assert len(questions) > 0
        assert any("问题" in q or "为什么" in q for q in questions)

    def test_add_questions_respects_max(self):
        system = CuriositySystem()
        questions = [f"Question {i}" for i in range(60)]
        system.add_questions(questions)
        assert len(system.questions) <= 50

    def test_get_top_questions(self):
        system = CuriositySystem()
        system.add_questions(["Q1", "Q2", "Q3", "Q4"])
        top = system.get_top_questions(limit=2)
        assert len(top) == 2


class TestForgettingMechanism(unittest.TestCase):
    def test_decay_with_recent_access(self):
        system = ForgettingMechanism()
        from datetime import datetime, timedelta
        recent = datetime.now() - timedelta(hours=1)
        decay = system.calculate_decay(recent, importance=1.0)
        assert 0.05 <= decay <= 1.0

    def test_decay_with_old_access(self):
        system = ForgettingMechanism()
        from datetime import datetime, timedelta
        old = datetime.now() - timedelta(days=30)
        decay = system.calculate_decay(old, importance=0.1)
        assert decay == 0.05  # hits floor

    def test_decay_with_string_input(self):
        system = ForgettingMechanism()
        decay = system.calculate_decay("invalid-date", importance=1.0)
        assert 0.05 <= decay <= 1.0

    def test_high_importance_slower_decay(self):
        system = ForgettingMechanism()
        from datetime import datetime, timedelta
        past = datetime.now() - timedelta(hours=24)
        high_imp = system.calculate_decay(past, importance=2.0)
        low_imp = system.calculate_decay(past, importance=0.1)
        assert high_imp > low_imp


class TestHypothesisGenerator(unittest.TestCase):
    def test_empty_context(self):
        gen = HypothesisGenerator()
        assert gen.generate("") == []

    def test_performance_hypothesis(self):
        gen = HypothesisGenerator()
        hypotheses = gen.generate("系统运行缓慢，超时严重")
        assert any("性能" in h or "瓶颈" in h for h in hypotheses)

    def test_error_hypothesis(self):
        gen = HypothesisGenerator()
        hypotheses = gen.generate("出现错误，bug 导致失败")
        assert any("配置" in h or "环境" in h for h in hypotheses)

    def test_test_valid_hypothesis(self):
        gen = HypothesisGenerator()
        assert gen.test("这是一个有效的假设文本内容") is True

    def test_test_invalid_hypothesis(self):
        gen = HypothesisGenerator()
        assert gen.test("") is False
        assert gen.test("1234") is False


class TestSelfModel(unittest.TestCase):
    def test_add_learning_experience(self):
        model = SelfModel()
        initial = model.values["learning"]
        model.add_learning_experience({"action": "memory_created"})
        assert model.values["learning"] > initial
        assert model.total_learning_experiences == 1

    def test_evolve_increases_generation(self):
        model = SelfModel()
        initial_gen = model.evolution_generation
        model.evolve()
        assert model.evolution_generation == initial_gen + 1

    def test_assess_learning_efficiency(self):
        model = SelfModel()
        efficiency = model.assess_learning_efficiency()
        assert 0.0 <= efficiency <= 1.0

    def test_get_awareness_level(self):
        model = SelfModel()
        awareness = model.get_awareness_level()
        assert 0.0 <= awareness <= 1.0

    def test_update_from_stats(self):
        model = SelfModel()
        model.update_from_stats({"total_count": 100})

    def test_get_and_set_state(self):
        model = SelfModel()
        model.values["learning"] = 0.9
        state = model.get_state()
        assert state["learning"] == 0.9

        model2 = SelfModel()
        model2.set_state(state)
        assert model2.values["learning"] == 0.9
