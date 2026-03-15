"""
AI大脑控制器单元测试
"""

import unittest
from datetime import datetime
import sys
import os
import asyncio
import tempfile
import json

# 添加src到路径
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'src'))

from mcp_memory.brain.ai_brain import AIBrain


class TestAIBrain(unittest.TestCase):
    """测试AI大脑"""

    def setUp(self):
        """测试前准备"""
        self.brain = AIBrain()

    def test_initialization(self):
        """测试初始化"""
        self.assertIsNotNone(self.brain.self_model)
        self.assertIsNotNone(self.brain.attention)
        self.assertIsNotNone(self.brain.curiosity)
        self.assertIsNotNone(self.brain.hypothesis_gen)
        self.assertIsNotNone(self.brain.value_system)
        self.assertIsNotNone(self.brain.consolidation)
        self.assertIsNotNone(self.brain.forgetting)
        self.assertIsNotNone(self.brain.associations)
        self.assertIsNotNone(self.brain.metacognition)

    async def test_process_input(self):
        """测试处理输入"""
        content = "这是一个重要的技术知识点，关于记忆系统的核心算法"
        context = {
            "current_task": "学习记忆系统",
            "user_id": "test_user"
        }

        result = await self.brain.process_input(content, context)

        self.assertIn("content", result)
        self.assertIn("processed_at", result)
        self.assertIn("actions_taken", result)
        self.assertIn("attention_score", result)

    async def test_process_input_with_low_value(self):
        """测试处理低价值输入"""
        content = "这是一些普通的聊天内容"
        context = {"current_task": "闲聊"}

        result = await self.brain.process_input(content, context)

        # 低价值内容可能被过滤
        self.assertIn("actions_taken", result)
        # 应该包含content_filtered或memory_created
        self.assertTrue(any(action in result["actions_taken"]
                        for action in ["content_filtered", "memory_created"]))

    async def test_retrieve_memory(self):
        """测试检索记忆"""
        # 先创建一些记忆
        for i in range(3):
            await self.brain.process_input(
                f"记忆内容{i}: 关于{i}的重要知识点",
                {"user_id": "test_user"}
            )

        # 检索记忆
        query = "记忆"
        result = await self.brain.retrieve_memory(query)

        self.assertIn("query", result)
        self.assertIn("retrieved_at", result)
        self.assertIn("memories", result)
        self.assertIn("associations_activated", result)
        self.assertIn("confidence", result)

    async def test_run_self_reflection(self):
        """测试运行自我反思"""
        reflection = await self.brain.run_self_reflection()

        self.assertIn("reflected_at", reflection)
        self.assertIn("self_assessment", reflection)
        self.assertIn("memory_state", reflection)
        self.assertIn("learning_efficiency", reflection)
        self.assertIn("detected_biases", reflection)
        self.assertIn("recommendations", reflection)

    async def test_generate_hypotheses(self):
        """测试生成假设"""
        context = "我们需要优化记忆系统的性能，提高检索速度"

        hypotheses = await self.brain.generate_hypotheses(context)

        self.assertIsInstance(hypotheses, list)

    async def test_test_hypothesis(self):
        """测试假设验证"""
        # 先生成一些假设
        context = "测试假设生成"
        hypotheses = await self.brain.generate_hypotheses(context)

        if hypotheses:
            # 测试第一个假设
            is_valid = await self.brain.test_hypothesis(hypotheses[0])

            self.assertIsInstance(is_valid, bool)

    async def test_get_brain_status(self):
        """测试获取大脑状态"""
        status = await self.brain.get_brain_status()

        self.assertIn("is_active", status)
        self.assertIn("last_update", status)
        self.assertIn("total_cycles", status)

        self.assertIn("self_awareness", status)
        self.assertIn("active_cognition", status)
        self.assertIn("value_system", status)
        self.assertIn("dynamic_memory", status)
        self.assertIn("metacognition", status)

    async def test_evolve_brain(self):
        """测试进化大脑"""
        # 创建一些学习经验
        experiences = [
            {
                "id": "exp_1",
                "outcome": "success",
                "value_updates": {"learning": 0.1},
                "performance_metrics": {"accuracy": 0.9}
            },
            {
                "id": "exp_2",
                "outcome": "failure",
                "value_updates": {"learning": 0.05},
                "performance_metrics": {"accuracy": 0.6}
            }
        ]

        initial_generation = self.brain.self_model.evolution_generation
        initial_experiences = self.brain.self_model.total_learning_experiences

        await self.brain.evolve_brain(experiences)

        # 检查进化效果
        self.assertEqual(self.brain.self_model.total_learning_experiences,
                     initial_experiences + len(experiences))

    def test_save_and_load_brain_state(self):
        """测试保存和加载大脑状态"""
        # 修改一些状态
        self.brain.self_model.values["accuracy"] = 0.95
        self.brain.attention.attention_threshold = 0.4
        self.brain.curiosity.curiosity_score = 0.88

        # 保存状态
        with tempfile.NamedTemporaryFile(mode='w', suffix='.json', delete=False) as f:
            temp_file = f.name

        try:
            self.brain.save_brain_state(temp_file)

            # 创建新的大脑实例
            new_brain = AIBrain()

            # 加载状态
            new_brain.load_brain_state(temp_file)

            # 验证状态恢复
            self.assertAlmostEqual(new_brain.self_model.values["accuracy"], 0.95, places=2)
            self.assertAlmostEqual(new_brain.attention.attention_threshold, 0.4, places=2)
            self.assertAlmostEqual(new_brain.curiosity.curiosity_score, 0.88, places=2)

        finally:
            # 清理临时文件
            if os.path.exists(temp_file):
                os.remove(temp_file)

    async def test_shutdown(self):
        """测试关闭大脑"""
        self.brain.is_active = True

        await self.brain.shutdown()

        self.assertFalse(self.brain.is_active)


class TestAIBrainIntegration(unittest.TestCase):
    """测试AI大脑集成功能"""

    async def asyncSetUp(self):
        """异步测试前准备"""
        self.brain = AIBrain()
        await self.brain.initialize()

    async def test_full_memory_lifecycle(self):
        """测试完整记忆生命周期"""
        # 1. 处理输入
        content = "重要的系统配置信息"
        result = await self.brain.process_input(content, {"user_id": "test_user"})

        self.assertIn("memories_created", result)
        self.assertGreater(len(result["memories_created"]), 0)

        # 2. 检索记忆
        if result["memories_created"]:
            memory_id = result["memories_created"][0]

            # 模拟检索（实际应该基于内容）
            # 这里简化，直接检查记忆是否存在
            self.assertIn(memory_id, self.brain.consolidation.memory_traces)

    async def test_multiple_reflections(self):
        """测试多次自我反思"""
        # 执行多次反思
        for i in range(3):
            await self.brain.run_self_reflection()

            # 检查总周期数增加
            self.assertGreater(self.brain.total_cycles, 0)

    async def test_curiosity_learning_loop(self):
        """测试好奇心学习循环"""
        # 处理一些输入
        for i in range(5):
            await self.brain.process_input(
                f"学习内容{i}: 关于AI记忆系统的{i}个知识点",
                {"user_id": "test_user"}
            )

        # 检查是否生成了问题
        self.assertGreater(len(self.brain.curiosity.questions), 0)

        # 获取优先问题
        top_questions = self.brain.curiosity.get_top_questions(limit=3)
        self.assertLessEqual(len(top_questions), 3)

    async def test_value_based_memory_management(self):
        """测试基于价值的记忆管理"""
        # 处理不同价值的输入
        high_value_content = "关键配置，必须记住"
        low_value_content = "普通聊天"

        # 处理高价值内容
        result1 = await self.brain.process_input(high_value_content, {})
        self.assertIn("value_assessment", result1)

        if result1.get("value_assessment"):
            high_value_score = result1["value_assessment"]["total_score"]
            # 高价值内容应该有较高的分数
            self.assertGreater(high_value_score, 0.6)

        # 处理低价值内容
        result2 = await self.brain.process_input(low_value_content, {})
        # 低价值内容可能被过滤
        self.assertTrue(any(action in result2["actions_taken"]
                        for action in ["content_filtered", "memory_created"]))


class TestAIBrainPersistence(unittest.TestCase):
    """测试AI大脑持久化"""

    async def test_brain_state_serialization(self):
        """测试大脑状态序列化和反序列化"""
        brain = AIBrain()
        await brain.initialize()

        # 修改一些状态
        brain.self_model.values["learning"] = 0.92
        brain.metacognition.current_state["focus_level"] = 0.75
        brain.curiosity.curiosity_score = 0.85

        # 保存状态
        with tempfile.NamedTemporaryFile(mode='w', suffix='.json', delete=False) as f:
            temp_file = f.name

        try:
            brain.save_brain_state(temp_file)

            # 读取保存的文件
            with open(temp_file, 'r') as f:
                saved_state = json.load(f)

            # 验证保存的状态
            self.assertIn("self_model", saved_state)
            self.assertIn("curiosity_score", saved_state)
            self.assertIn("metacognition_state", saved_state)
            self.assertAlmostEqual(saved_state["curiosity_score"], 0.85, places=2)

            # 创建新的大脑并加载状态
            new_brain = AIBrain()
            new_brain.load_brain_state(temp_file)

            # 验证加载的状态
            self.assertAlmostEqual(new_brain.self_model.values["learning"], 0.92, places=2)
            self.assertAlmostEqual(new_brain.metacognition.current_state["focus_level"], 0.75, places=2)
            self.assertAlmostEqual(new_brain.curiosity.curiosity_score, 0.85, places=2)

        finally:
            # 清理临时文件
            if os.path.exists(temp_file):
                os.remove(temp_file)


def run_async_test(test_func):
    """运行异步测试的包装器"""
    async def wrapper(self):
        await test_func(self)
    return wrapper


# 为异步测试方法添加装饰器
TestAIBrainIntegration.test_full_memory_lifecycle = run_async_test(
    TestAIBrainIntegration.test_full_memory_lifecycle
)
TestAIBrainIntegration.test_multiple_reflections = run_async_test(
    TestAIBrainIntegration.test_multiple_reflections
)
TestAIBrainIntegration.test_curiosity_learning_loop = run_async_test(
    TestAIBrainIntegration.test_curiosity_learning_loop
)
TestAIBrainIntegration.test_value_based_memory_management = run_async_test(
    TestAIBrainIntegration.test_value_based_memory_management
)

TestAIBrainPersistence.test_brain_state_serialization = run_async_test(
    TestAIBrainPersistence.test_brain_state_serialization
)


if __name__ == '__main__':
    unittest.main()
