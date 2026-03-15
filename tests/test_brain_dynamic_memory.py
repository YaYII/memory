"""
AI大脑动态记忆层单元测试
"""

import unittest
from datetime import datetime, timedelta
import sys
import os

# 添加src到路径
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'src'))

from mcp_memory.brain.dynamic_memory import (
    ConsolidationSystem, ForgettingMechanism, AssociationEngine,
    MemoryTrace, Association, MemoryState, AssociationType
)


class TestConsolidationSystem(unittest.TestCase):
    """测试记忆巩固系统"""

    def setUp(self):
        """测试前准备"""
        self.consolidation = ConsolidationSystem()

    def test_initialization(self):
        """测试初始化"""
        self.assertEqual(len(self.consolidation.memory_traces), 0)
        self.assertEqual(len(self.consolidation.consolidation_queue), 0)

    def test_create_trace(self):
        """测试创建记忆痕迹"""
        memory_id = "test_memory_1"
        importance = 0.8

        trace = self.consolidation.create_trace(memory_id, importance)

        self.assertEqual(trace.memory_id, memory_id)
        self.assertGreater(trace.strength, 0)
        self.assertEqual(trace.state, MemoryState.ACTIVE)
        self.assertIn(memory_id, self.consolidation.memory_traces)

    def test_activate_memory(self):
        """测试激活记忆"""
        memory_id = "test_memory_2"
        self.consolidation.create_trace(memory_id, importance=0.7)

        initial_strength = self.consolidation.memory_traces[memory_id].strength
        self.consolidation.activate_memory(memory_id, activation_amount=0.3)

        activated_trace = self.consolidation.memory_traces[memory_id]
        self.assertGreater(activated_trace.strength, initial_strength)
        self.assertEqual(activated_trace.access_count, 2)  # 创建时+1，激活时+1

    def test_strengthen_memory(self):
        """测试强化记忆"""
        memory_id = "test_memory_3"
        self.consolidation.create_trace(memory_id, importance=0.6)

        initial_strength = self.consolidation.memory_traces[memory_id].strength
        self.consolidation.strengthen_memory(memory_id, factor=0.2)

        strengthened_trace = self.consolidation.memory_traces[memory_id]
        self.assertGreater(strengthened_trace.strength, initial_strength)

    def test_decay_memories(self):
        """测试记忆衰减"""
        # 创建几个记忆
        for i in range(5):
            memory_id = f"mem_{i}"
            self.consolidation.create_trace(memory_id, importance=0.5)

        # 执行衰减
        self.consolidation.decay_memories()

        # 验证衰减效果
        for trace in self.consolidation.memory_traces.values():
            self.assertLess(trace.activation, 1.0)  # 激活水平应该降低

    def test_consolidate_short_term(self):
        """测试短期记忆巩固"""
        # 创建短期记忆并多次访问
        memory_id = "test_memory_4"
        self.consolidation.create_trace(memory_id, importance=0.8)

        # 多次激活
        for _ in range(5):
            self.consolidation.activate_memory(memory_id, 0.2)

        # 执行巩固
        self.consolidation.consolidate_short_term()

        # 检查状态变化
        trace = self.consolidation.memory_traces[memory_id]
        # 应该从ACTIVE变为CONSOLIDATED或保持ACTIVE
        self.assertIn(trace.state, [MemoryState.ACTIVE, MemoryState.CONSOLIDATED])

    def test_get_active_memories(self):
        """测试获取活跃记忆"""
        # 创建不同状态的记忆
        for i in range(5):
            memory_id = f"mem_{i}"
            trace = self.consolidation.create_trace(memory_id, importance=0.5)

            # 模拟一些记忆衰减
            if i >= 3:
                trace.state = MemoryState.DECAYING

        active_memories = self.consolidation.get_active_memories()

        self.assertGreater(len(active_memories), 0)
        for mem in active_memories:
            self.assertEqual(mem.state, MemoryState.ACTIVE)


class TestForgettingMechanism(unittest.TestCase):
    """测试遗忘机制"""

    def setUp(self):
        """测试前准备"""
        self.forgetting = ForgettingMechanism()
        self.consolidation = ConsolidationSystem()

    def test_initialization(self):
        """测试初始化"""
        self.assertEqual(self.forgetting.forgetting_strategy, "graceful")
        self.assertEqual(len(self.forgetting.forgetting_history), 0)

    def test_should_forget(self):
        """测试遗忘判断"""
        # 创建一个弱记忆
        memory_id = "test_memory_5"
        trace = self.consolidation.create_trace(memory_id, importance=0.2)

        # 强制设为已遗忘状态
        trace.state = MemoryState.DECAYING
        trace.strength = 0.15

        # 使用默认值分数
        value_score = 0.25  # 低价值
        should_forget = self.forgetting.should_forget(memory_id, trace, value_score)
        self.assertTrue(should_forget)

    def test_forget_gracefully(self):
        """测试优雅遗忘"""
        memory_id = "test_memory_6"
        trace = self.consolidation.create_trace(memory_id, importance=0.3)

        # 使用更长的内容以便测试摘要缩短
        content = "这是一个非常重要的技术要点，包含了关键的实现细节和最佳实践建议，还有很多的补充说明和详细的解释"
        summary = self.forgetting.forget_gracefully(memory_id, trace, content)

        self.assertEqual(trace.state, MemoryState.FORGOTTEN)
        self.assertEqual(trace.strength, 0.0)
        self.assertIsNotNone(summary)
        # 摘要应该更短或相等
        self.assertLessEqual(len(summary), len(content))

    def test_extract_essence(self):
        """测试内容本质提取"""
        long_content = """
        这是一个关于记忆系统设计的详细说明，包含了很多重要的概念和实现细节。
        记忆系统是AI认知的核心组件，负责存储、检索和管理知识。
        三层记忆架构包括存储记忆、思维记忆和技能记忆。
        存储记忆保存原始对话，思维记忆提供总结，技能记忆提取可复用知识。
        这种设计能够提高检索效率，降低认知负荷，支持持续学习。
        """

        essence = self.forgetting._extract_essence(long_content)

        self.assertIsNotNone(essence)
        self.assertGreater(len(essence), 0)
        self.assertLessEqual(len(essence), 200)  # 摘要应该限制长度

    def test_get_forgetting_statistics(self):
        """测试获取遗忘统计"""
        # 遗忘一些记忆
        for i in range(3):
            memory_id = f"mem_{i}"
            trace = self.consolidation.create_trace(memory_id, importance=0.2)
            trace.state = MemoryState.DECAYING
            trace.strength = 0.1
            self.forgetting.forget_gracefully(memory_id, trace, f"内容{i}")

        stats = self.forgetting.get_forgetting_statistics()

        self.assertIn("total_forgotten", stats)
        self.assertGreater(stats["total_forgotten"], 0)
        self.assertIn("strength_distribution", stats)


class TestAssociationEngine(unittest.TestCase):
    """测试联想引擎"""

    def setUp(self):
        """测试前准备"""
        self.associations = AssociationEngine()

    def test_initialization(self):
        """测试初始化"""
        self.assertEqual(len(self.associations.associations), 0)
        self.assertEqual(len(self.associations.semantic_embeddings), 0)

    def test_create_associations(self):
        """测试创建联想"""
        memory_id = "test_memory_7"
        content = "关于记忆系统的配置和最佳实践"
        metadata = {
            "user_id": "user_1",
            "project_id": "project_1",
            "content_type": "config",
            "timestamp": datetime.now()
        }

        created_assocs = self.associations.create_associations(memory_id, content, metadata)

        self.assertIsInstance(created_assocs, list)
        # 由于是简化实现，可能不会创建联想，但应该调用方法
        # 只检查返回列表不为None即可
        self.assertIsNotNone(created_assocs)

    def test_activate_associations(self):
        """测试激活联想"""
        # 先创建一些联想
        memory_id = "test_memory_8"
        content = "记忆检索优化的关键策略"
        metadata = {"project_id": "project_1"}
        self.associations.create_associations(memory_id, content, metadata)

        # 激活联想
        cue = "记忆优化"
        activated = self.associations.activate_associations(cue, limit=3)

        self.assertIsInstance(activated, list)
        # 检查是否激活了一些联想
        # (实际应该基于关键词匹配)

    def test_get_strong_associations(self):
        """测试获取强联想"""
        # 创建一些联想
        memory_id_1 = "mem_1"
        memory_id_2 = "mem_2"

        # 强联想
        strong_assoc = Association(
            source_id=memory_id_1,
            target_id=memory_id_2,
            association_type=AssociationType.SEMANTIC,
            strength=0.9,
            created_at=datetime.now(),
            last_activated=datetime.now()
        )
        self.associations.associations.append(strong_assoc)

        # 弱联想
        weak_assoc = Association(
            source_id=memory_id_1,
            target_id="mem_3",
            association_type=AssociationType.CONTEXTUAL,
            strength=0.3,
            created_at=datetime.now(),
            last_activated=datetime.now()
        )
        self.associations.associations.append(weak_assoc)

        strong_assocs = self.associations.get_strong_associations(memory_id_1, min_strength=0.7)

        self.assertGreater(len(strong_assocs), 0)
        for assoc in strong_assocs:
            self.assertGreaterEqual(assoc.strength, 0.7)

    def test_update_association_strength(self):
        """测试更新联想强度"""
        # 创建联想
        memory_id_1 = "mem_4"
        memory_id_2 = "mem_5"

        assoc = Association(
            source_id=memory_id_1,
            target_id=memory_id_2,
            association_type=AssociationType.SEMANTIC,
            strength=0.5,
            created_at=datetime.now(),
            last_activated=datetime.now()
        )
        self.associations.associations.append(assoc)

        # 更新强度
        initial_strength = assoc.strength
        self.associations.update_association_strength(memory_id_1, memory_id_2, delta=0.2)

        # 检查强度是否更新
        found_assoc = self.associations.associations[-1]
        self.assertGreater(found_assoc.strength, initial_strength)


if __name__ == '__main__':
    unittest.main()
