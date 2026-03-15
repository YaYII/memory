"""
AI大脑主动认知层单元测试
"""

import unittest
from datetime import datetime
import sys
import os

# 添加src到路径
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'src'))

from mcp_memory.brain.active_cognition import (
    AttentionSystem, CuriosityEngine, HypothesisGenerator,
    AttentionScore, Hypothesis
)


class TestAttentionSystem(unittest.TestCase):
    """测试注意力系统"""

    def setUp(self):
        """测试前准备"""
        self.attention = AttentionSystem()

    def test_initialization(self):
        """测试初始化"""
        self.assertIsNotNone(self.attention.attention_weights)
        self.assertGreater(self.attention.attention_threshold, 0)
        self.assertEqual(len(self.attention.attention_history), 0)

    def test_calculate_attention_score(self):
        """测试注意力分数计算"""
        content = "这是一个重要的技术知识点，关于记忆系统的核心算法"
        context = {
            "current_task": "学习记忆系统",
            "user_intent": "理解记忆机制"
        }

        score = self.attention.calculate_attention_score(content, context)

        self.assertGreaterEqual(score.total_score, 0.0)
        self.assertLessEqual(score.total_score, 1.0)
        self.assertGreaterEqual(score.novelty, 0.0)
        self.assertGreaterEqual(score.relevance, 0.0)

    def test_should_remember(self):
        """测试记忆判断"""
        # 高价值内容
        high_value_content = "这是一个关键的最佳实践，非常重要，必须记住"
        should_remember, score = self.attention.should_remember(high_value_content)

        self.assertTrue(should_remember)
        self.assertGreater(score.total_score, 0)

    def test_adjust_threshold(self):
        """测试阈值调整"""
        old_threshold = self.attention.attention_threshold
        self.attention.adjust_threshold(0.5)

        self.assertEqual(self.attention.attention_threshold, 0.5)
        self.assertNotEqual(self.attention.attention_threshold, old_threshold)


class TestCuriosityEngine(unittest.TestCase):
    """测试好奇心引擎"""

    def setUp(self):
        """测试前准备"""
        self.curiosity = CuriosityEngine()

    def test_initialization(self):
        """测试初始化"""
        self.assertGreater(self.curiosity.curiosity_score, 0)
        self.assertEqual(len(self.curiosity.questions), 0)
        self.assertEqual(len(self.curiosity.knowledge_gaps), 0)

    def test_generate_questions(self):
        """测试问题生成"""
        context = "在学习记忆系统的架构设计"
        current_knowledge = ["基础记忆", "简单检索"]

        questions = self.curiosity.generate_questions(context, current_knowledge)

        self.assertIsInstance(questions, list)
        self.assertGreater(len(self.curiosity.questions), 0)

    def test_identify_knowledge_gaps(self):
        """测试知识缺口识别"""
        current_knowledge = ["简单记忆", "基础检索"]
        gaps = self.curiosity.identify_knowledge_gaps(current_knowledge)

        self.assertIsInstance(gaps, list)
        self.assertGreater(len(gaps), 0)

    def test_satisfy_curiosity(self):
        """测试满足好奇心"""
        # 添加一个问题
        self.curiosity.questions.append({
            "question": "记忆巩固是如何工作的？",
            "generated_at": datetime.now().isoformat(),
            "priority": 0.9
        })

        initial_curiosity = self.curiosity.curiosity_score
        initial_questions = len(self.curiosity.questions)

        # 满足好奇心
        self.curiosity.satisfy_curiosity(
            "记忆巩固是如何工作的？",
            "记忆巩固是海马体到皮层的转移过程..."
        )

        # 检查结果
        self.assertLess(self.curiosity.curiosity_score, initial_curiosity)
        self.assertLess(len(self.curiosity.questions), initial_questions)

    def test_increase_curiosity(self):
        """测试增加好奇心"""
        initial_score = self.curiosity.curiosity_score
        self.curiosity.increase_curiosity(0.1)

        self.assertGreater(self.curiosity.curiosity_score, initial_score)
        self.assertLessEqual(self.curiosity.curiosity_score, 1.0)

    def test_get_top_questions(self):
        """测试获取优先问题"""
        # 添加几个问题
        for i in range(5):
            self.curiosity.questions.append({
                "question": f"问题{i}",
                "priority": 0.5 + i * 0.1,
                "generated_at": datetime.now().isoformat()
            })

        top_questions = self.curiosity.get_top_questions(limit=3)

        self.assertLessEqual(len(top_questions), 3)
        # 验证排序
        if len(top_questions) > 1:
            self.assertGreaterEqual(top_questions[0]["priority"], top_questions[1]["priority"])


class TestHypothesisGenerator(unittest.TestCase):
    """测试假设生成器"""

    def setUp(self):
        """测试前准备"""
        self.hypothesis_gen = HypothesisGenerator()

    def test_initialization(self):
        """测试初始化"""
        self.assertEqual(len(self.hypothesis_gen.hypotheses), 0)
        self.assertEqual(len(self.hypothesis_gen.validation_history), 0)

    def test_generate_hypotheses(self):
        """测试假设生成"""
        context = "我们需要优化记忆系统的性能"
        observations = ["当前检索速度较慢", "数据量增长很快"]

        hypotheses = self.hypothesis_gen.generate_hypotheses(context, observations)

        self.assertIsInstance(hypotheses, list)

        for hypo in hypotheses:
            self.assertIsInstance(hypo, Hypothesis)
            self.assertIsNotNone(hypo.hypothesis_id)
            self.assertGreater(hypo.confidence, 0)
            self.assertLessEqual(hypo.confidence, 1)

    def test_test_hypothesis(self):
        """测试假设验证"""
        # 创建一个假设
        hypothesis = Hypothesis(
            hypothesis_id="test_hypothesis",
            description="优化算法可以提高性能",
            confidence=0.7,
            evidence=["算法优化通常有效"],
            test_method="A/B测试",
            created_at=datetime.now()
        )

        # 测试假设
        is_valid = self.hypothesis_gen.test_hypothesis(hypothesis)

        self.assertIsInstance(is_valid, bool)

        # 检查置信度变化
        if is_valid:
            self.assertGreater(hypothesis.confidence, 0.7)
        else:
            self.assertLess(hypothesis.confidence, 0.7)

    def test_get_validated_hypotheses(self):
        """测试获取已验证假设"""
        # 添加一些假设
        for i in range(5):
            hypo = Hypothesis(
                hypothesis_id=f"hypo_{i}",
                description=f"假设{i}",
                confidence=0.6 + i * 0.08,
                evidence=[],
                test_method="测试",
                created_at=datetime.now()
            )
            self.hypothesis_gen.hypotheses.append(hypo)

        validated = self.hypothesis_gen.get_validated_hypotheses()

        for hypo in validated:
            self.assertGreater(hypo.confidence, 0.7)

    def test_get_pending_hypotheses(self):
        """测试获取待验证假设"""
        # 添加一些假设
        for i in range(5):
            hypo = Hypothesis(
                hypothesis_id=f"hypo_{i}",
                description=f"假设{i}",
                confidence=0.5 + i * 0.05,
                evidence=[],
                test_method="测试",
                created_at=datetime.now()
            )
            self.hypothesis_gen.hypotheses.append(hypo)

        pending = self.hypothesis_gen.get_pending_hypotheses()

        for hypo in pending:
            self.assertLessEqual(hypo.confidence, 0.7)


if __name__ == '__main__':
    unittest.main()
