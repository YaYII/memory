"""
AI大脑价值判断层单元测试
"""

import unittest
from datetime import datetime, timedelta
import sys
import os

# 添加src到路径
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'src'))

from mcp_memory.brain.value_judgment import (
    ValueSystem, ValueScore, ExperienceEvaluator
)


class TestValueSystem(unittest.TestCase):
    """测试价值系统"""

    def setUp(self):
        """测试前准备"""
        self.value_system = ValueSystem()

    def test_initialization(self):
        """测试初始化"""
        self.assertIsNotNone(self.value_system.importance_weights)
        self.assertIsNotNone(self.value_system.value_thresholds)
        self.assertEqual(len(self.value_system.evaluation_history), 0)

    def test_evaluate_memory(self):
        """测试记忆价值评估"""
        content = "这是一个重要的最佳实践，包含了关键的配置信息"
        metadata = {
            "content_type": "config",
            "importance": 1.0,
            "access_count": 5
        }

        score = self.value_system.evaluate_memory(content, metadata)

        self.assertGreaterEqual(score.total_score, 0.0)
        self.assertLessEqual(score.total_score, 1.0)
        self.assertGreaterEqual(score.novelty, 0.0)
        self.assertGreaterEqual(score.utility, 0.0)

    def test_evaluate_novelty(self):
        """测试新颖性评估"""
        # 新内容
        new_content = "这是一个全新的技术领域，包含创新的算法设计"
        metadata = {"is_new": True}

        score = self.value_system.evaluate_memory(new_content, metadata)
        self.assertGreater(score.novelty, 0.5)

    def test_evaluate_utility(self):
        """测试实用性评估"""
        # 实用性高的内容
        useful_content = "如何优化内存使用效率的最佳实践方法"
        metadata = {
            "content_type": "skill",
            "keywords": ["优化", "最佳实践"]
        }

        score = self.value_system.evaluate_memory(useful_content, metadata)
        self.assertGreater(score.utility, 0.5)

    def test_should_keep_memory(self):
        """测试记忆保留判断"""
        # 高价值记忆
        content = "关键配置信息，必须保留"
        metadata = {"importance": 1.0}
        score = self.value_system.evaluate_memory(content, metadata)

        should_keep = self.value_system.should_keep_memory(score)
        self.assertTrue(should_keep)

    def test_should_forget_memory(self):
        """测试记忆遗忘判断"""
        # 低价值且旧的记忆
        content = "简单注释"
        metadata = {"importance": 0.1}
        score = self.value_system.evaluate_memory(content, metadata)

        should_forget = self.value_system.should_forget_memory(
            memory_age_days=180,
            score=score
        )
        self.assertTrue(should_forget)

    def test_update_value_over_time(self):
        """测试价值随时间更新"""
        content = "中等价值的内容"
        metadata = {"access_count": 3}
        initial_score = self.value_system.evaluate_memory(content, metadata)

        # 30天后
        updated_score = self.value_system.update_value_over_time(
            memory_id="test_mem",
            days_passed=30,
            current_score=initial_score
        )

        # 新颖性应该衰减
        self.assertLess(updated_score.novelty, initial_score.novelty)
        # 频率应该衰减
        self.assertLess(updated_score.frequency, initial_score.frequency)

    def test_adjust_weights(self):
        """测试权重调整"""
        old_novelty_weight = self.value_system.importance_weights["novelty"]
        old_utility_weight = self.value_system.importance_weights["utility"]

        new_weights = {
            "novelty": 0.35,
            "utility": 0.20
        }
        self.value_system.adjust_weights(new_weights)

        self.assertEqual(self.value_system.importance_weights["novelty"], 0.35)
        self.assertEqual(self.value_system.importance_weights["utility"], 0.20)

    def test_get_statistics(self):
        """测试获取统计信息"""
        # 评估几个记忆
        for i in range(5):
            content = f"记忆内容{i}"
            self.value_system.evaluate_memory(content, {})

        stats = self.value_system.get_statistics()

        self.assertIn("total_evaluated", stats)
        self.assertGreater(stats["total_evaluated"], 0)
        self.assertIn("thresholds", stats)
        self.assertIn("weights", stats)

    def test_find_high_value_memories(self):
        """测试查找高价值记忆"""
        # 评估一些记忆，确保有高价值的
        high_value_content = "关键配置，非常重要"
        for i in range(10):
            content = high_value_content if i < 3 else f"普通内容{i}"
            metadata = {"importance": 1.0 if i < 3 else 0.5}
            self.value_system.evaluate_memory(content, metadata)

        high_value_memories = self.value_system.find_high_value_memories(limit=3)

        self.assertLessEqual(len(high_value_memories), 3)

        for mem in high_value_memories:
            self.assertGreaterEqual(mem["total_score"], 0.75)


class TestExperienceEvaluator(unittest.TestCase):
    """测试经验评估器"""

    def setUp(self):
        """测试前准备"""
        self.value_system = ValueSystem()
        self.experience_evaluator = ExperienceEvaluator(self.value_system)

    def test_initialization(self):
        """测试初始化"""
        self.assertIsNotNone(self.experience_evaluator.value_system)
        self.assertEqual(len(self.experience_evaluator.experience_history), 0)

    def test_evaluate_success_experience(self):
        """测试评估成功经验"""
        experience = {
            "id": "exp_1",
            "outcome": "success",
            "task": "memory_creation"
        }

        evaluation = self.experience_evaluator.evaluate_experience(experience)

        self.assertIn("experience_id", evaluation)
        self.assertIn("value_updates", evaluation)
        self.assertIn("learning_gain", evaluation)
        self.assertGreater(evaluation["learning_gain"], 0.5)

    def test_evaluate_failure_experience(self):
        """测试评估失败经验"""
        experience = {
            "id": "exp_2",
            "outcome": "failure",
            "task": "memory_retrieval"
        }

        evaluation = self.experience_evaluator.evaluate_experience(experience)

        self.assertIn("experience_id", evaluation)
        self.assertIn("learning_gain", evaluation)
        self.assertLess(evaluation["learning_gain"], 0.5)
        self.assertGreater(evaluation["learning_gain"], 0)  # 失败也是学习

    def test_get_learning_trends(self):
        """测试获取学习趋势"""
        # 添加一些经验
        for i in range(10):
            experience = {
                "id": f"exp_{i}",
                "outcome": "success" if i % 3 != 0 else "failure"
            }
            self.experience_evaluator.evaluate_experience(experience)

        trends = self.experience_evaluator.get_learning_trends()

        self.assertIn("total_experiences", trends)
        self.assertIn("success_rate", trends)
        self.assertIn("average_learning_gain", trends)
        self.assertGreater(trends["total_experiences"], 0)


if __name__ == '__main__':
    unittest.main()
