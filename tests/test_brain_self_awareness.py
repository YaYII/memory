"""
AI大脑自我意识层单元测试
"""

import unittest
from datetime import datetime
import sys
import os

# 添加src到路径
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'src'))

from mcp_memory.brain.self_awareness import (
    SelfModel, Goal, GoalType, PersonalityTraits
)


class TestSelfModel(unittest.TestCase):
    """测试自我模型"""

    def setUp(self):
        """测试前准备"""
        self.self_model = SelfModel()

    def test_initialization(self):
        """测试初始化"""
        self.assertIsNotNone(self.self_model.identity)
        self.assertEqual(self.self_model.version, "3.0.0")
        self.assertGreater(len(self.self_model.capabilities), 0)
        self.assertGreater(len(self.self_model.limitations), 0)
        self.assertGreater(len(self.self_model.values), 0)
        self.assertEqual(len(self.self_model.goals), 4)  # 4个默认目标

    def test_who_am_i(self):
        """测试'我是谁'方法"""
        response = self.self_model.who_am_i()
        self.assertIn(self.self_model.identity, response)
        self.assertIn(str(self.self_model.evolution_generation), response)

    def test_what_can_i_do(self):
        """测试'我能做什么'方法"""
        capabilities = self.self_model.what_can_i_do()
        self.assertIsInstance(capabilities, list)
        self.assertEqual(capabilities, self.self_model.capabilities)

    def test_what_cannot_i_do(self):
        """测试'我不能做什么'方法"""
        limitations = self.self_model.what_cannot_i_do()
        self.assertIsInstance(limitations, list)
        self.assertEqual(limitations, self.self_model.limitations)

    def test_update_value(self):
        """测试价值观更新"""
        initial_value = self.self_model.values["accuracy"]
        # 测试增加值
        self.self_model.update_value("accuracy", initial_value + 0.05)

        self.assertGreater(self.self_model.values["accuracy"], initial_value)
        self.assertLessEqual(self.self_model.values["accuracy"], 1.0)

    def test_update_goal_progress(self):
        """测试目标进度更新"""
        goal_id = self.self_model.goals[0].goal_id
        success = self.self_model.update_goal_progress(goal_id, 0.5)

        self.assertTrue(success)
        self.assertEqual(self.self_model.goals[0].progress, 0.5)

    def test_add_goal(self):
        """测试添加目标"""
        initial_count = len(self.self_model.goals)
        new_goal = Goal(
            goal_id="test_goal",
            goal_type=GoalType.KNOWLEDGE,
            description="测试目标",
            priority=0.9
        )
        self.self_model.add_goal(new_goal)

        self.assertEqual(len(self.self_model.goals), initial_count + 1)

    def test_get_priority_goals(self):
        """测试获取优先级目标"""
        priority_goals = self.self_model.get_priority_goals(limit=2)
        self.assertLessEqual(len(priority_goals), 2)

        # 验证排序
        if len(priority_goals) > 1:
            self.assertGreaterEqual(priority_goals[0].priority, priority_goals[1].priority)

    def test_evaluate_self_confidence(self):
        """测试自信度评估"""
        confidence = self.self_model.evaluate_self_confidence("记忆相关任务")
        self.assertGreaterEqual(confidence, 0.0)
        self.assertLessEqual(confidence, 1.0)

    def test_reflect_on_self(self):
        """测试自我反思"""
        reflection = self.self_model.reflect_on_self()

        self.assertIn("identity", reflection)
        self.assertIn("version", reflection)
        self.assertIn("evolution_generation", reflection)
        self.assertIn("goals_progress", reflection)

    def test_evolve(self):
        """测试进化"""
        initial_generation = self.self_model.evolution_generation
        initial_experiences = self.self_model.total_learning_experiences

        experience = {
            "value_updates": {"learning": 0.1, "accuracy": 0.05},
            "performance_metrics": {"accuracy": 0.9, "learning_speed": 0.8}
        }
        self.self_model.evolve(experience)

        self.assertEqual(self.self_model.total_learning_experiences, initial_experiences + 1)
        # 每隔100次经验才进化一代
        self.assertEqual(self.self_model.evolution_generation, initial_generation)

    def test_to_dict_and_from_dict(self):
        """测试序列化和反序列化"""
        # 转换为字典
        data = self.self_model.to_dict()

        self.assertIn("identity", data)
        self.assertIn("capabilities", data)
        self.assertIn("values", data)
        self.assertIn("goals", data)

        # 从字典恢复
        restored_model = SelfModel.from_dict(data)

        self.assertEqual(restored_model.identity, self.self_model.identity)
        self.assertEqual(restored_model.version, self.self_model.version)
        self.assertEqual(restored_model.evolution_generation, self.self_model.evolution_generation)


class TestGoal(unittest.TestCase):
    """测试目标类"""

    def test_goal_creation(self):
        """测试目标创建"""
        goal = Goal(
            goal_id="test_goal",
            goal_type=GoalType.KNOWLEDGE,
            description="学习新知识",
            priority=0.8,
            progress=0.0
        )

        self.assertEqual(goal.goal_id, "test_goal")
        self.assertEqual(goal.goal_type, GoalType.KNOWLEDGE)
        self.assertEqual(goal.progress, 0.0)

    def test_goal_to_dict(self):
        """测试目标序列化"""
        goal = Goal(
            goal_id="test_goal",
            goal_type=GoalType.SKILL,
            description="掌握新技能",
            priority=0.9
        )

        data = goal.to_dict()

        self.assertEqual(data["goal_id"], "test_goal")
        self.assertEqual(data["goal_type"], "skill")
        self.assertEqual(data["priority"], 0.9)


if __name__ == '__main__':
    unittest.main()
