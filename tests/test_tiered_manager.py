"""
单元测试：三层记忆管理器 (tiered_manager.py)
测试 TieredMemoryManager 的统一接口、查询和管理功能
"""

import pytest
import asyncio
from datetime import datetime
from unittest.mock import Mock, patch, MagicMock, AsyncMock

from mcp_memory.memory.tiered_manager import TieredMemoryManager
from mcp_memory.models.data_models import (
    MemoryItem,
    StorageMemoryCreate,
    ThinkingMemoryCreate,
    SkillMemoryCreate,
    QueryMemoryResponse
)


@pytest.fixture
def mock_memory_store():
    """模拟记忆存储"""
    store = MagicMock()
    
    # 模拟集合
    store.storage_collection = MagicMock()
    store.thinking_collection = MagicMock()
    store.skill_collection = MagicMock()
    
    # 模拟查询结果
    store.query_memories.return_value = [
        {
            "memory_id": "skill_001",
            "memory_type": "skill",
            "content": "Python 技能",
            "metadata": {
                "user_id": "user_001",
                "scope": "global",
                "project_id": "",
                "importance": 3.0,
                "confidence": 0.95,
                "verified": True
            },
            "timestamp": datetime.now().isoformat()
        },
        {
            "memory_id": "think_001",
            "memory_type": "thinking",
            "content": "思维总结",
            "metadata": {
                "user_id": "user_001",
                "scope": "project",
                "project_id": "proj_001",
                "importance": 2.0,
                "confidence": 0.9,
                "verified": False
            },
            "timestamp": datetime.now().isoformat()
        }
    ]
    
    # 模拟获取记忆
    store.get_memory_by_id.return_value = {
        "memory_id": "mem_001",
        "memory_type": "thinking",
        "content": "测试内容",
        "metadata": {"user_id": "user_001"}
    }
    
    # 模拟创建记忆
    store.create_storage_memory.return_value = "storage_new_001"
    store.create_thinking_memory.return_value = "thinking_new_001"
    store.create_skill_memory.return_value = "skill_new_001"
    
    # 模拟源记忆
    store.get_source_memories.return_value = [
        {"memory_id": "source_001", "content": "源记忆1"},
        {"memory_id": "source_002", "content": "源记忆2"}
    ]
    
    # 模拟统计
    store.get_stats.return_value = {
        "storage_count": 10,
        "thinking_count": 5,
        "skill_count": 3,
        "links_count": 8
    }
    
    # 模拟图谱
    store.graph = MagicMock()
    store.graph.neighbors.return_value = ["neighbor_001", "neighbor_002"]
    
    return store


@pytest.fixture
def mock_summarizer():
    """模拟自动总结器"""
    with patch('mcp_memory.memory.tiered_manager.AutoSummarizer') as MockSummarizer:
        instance = MockSummarizer.return_value
        instance.initialize = AsyncMock()
        instance.start = AsyncMock()
        instance.stop = AsyncMock()
        instance._running = False
        yield instance


@pytest.fixture
def manager(mock_memory_store, mock_summarizer):
    """创建管理器实例"""
    with patch('mcp_memory.memory.tiered_manager.TieredMemoryStore', return_value=mock_memory_store):
        mgr = TieredMemoryManager(data_path="test_data")
        mgr.store = mock_memory_store
        return mgr


class TestTieredMemoryManager:
    """测试 TieredMemoryManager 类"""
    
    @pytest.mark.asyncio
    async def test_initialize(self, manager, mock_summarizer):
        """测试初始化"""
        await manager.initialize()
        
        assert manager._initialized is True
        mock_summarizer.initialize.assert_called_once()
        mock_summarizer.start.assert_called_once()
    
    @pytest.mark.asyncio
    async def test_initialize_already_initialized(self, manager, mock_summarizer):
        """测试重复初始化"""
        manager._initialized = True
        
        await manager.initialize()
        
        # 不应该再次调用
        mock_summarizer.initialize.assert_not_called()
    
    @pytest.mark.asyncio
    async def test_shutdown(self, manager, mock_summarizer):
        """测试关闭"""
        manager._initialized = True
        
        await manager.shutdown()
        
        assert manager._initialized is False
        mock_summarizer.stop.assert_called_once()
    
    def test_write_storage_memory(self, manager, mock_memory_store):
        """测试写入存储记忆"""
        memory_id = manager.write_storage_memory(
            content="测试对话内容",
            user_id="user_001",
            session_id="session_001",
            topic="测试主题"
        )
        
        assert memory_id == "storage_new_001"
        mock_memory_store.create_storage_memory.assert_called_once()
        
        # 验证调用参数
        call_args = mock_memory_store.create_storage_memory.call_args[0][0]
        assert call_args.content == "测试对话内容"
        assert call_args.user_id == "user_001"
        assert call_args.session_id == "session_001"
    
    def test_write_thinking_memory(self, manager, mock_memory_store):
        """测试写入思维记忆"""
        memory_id = manager.write_thinking_memory(
            content="总结内容",
            user_id="user_001",
            source_memories=["mem_001", "mem_002"],
            summary_type="session",
            key_points=["要点1", "要点2"]
        )
        
        assert memory_id == "thinking_new_001"
        mock_memory_store.create_thinking_memory.assert_called_once()
    
    def test_write_skill_memory(self, manager, mock_memory_store):
        """测试写入技能记忆"""
        memory_id = manager.write_skill_memory(
            content="Python 异步编程技能",
            user_id="user_001",
            source_thinking=["think_001"],
            skill_type="coding",
            tags=["python", "async"]
        )
        
        assert memory_id == "skill_new_001"
        mock_memory_store.create_skill_memory.assert_called_once()
    
    def test_query_memories(self, manager, mock_memory_store):
        """测试查询记忆"""
        response = manager.query_memories(
            query="Python 编程",
            user_id="user_001",
            memory_type="all",
            limit=5
        )
        
        assert isinstance(response, QueryMemoryResponse)
        assert response.total == 2
        assert len(response.memories) == 2
        assert response.query_time_ms >= 0
        
        # 验证调用了存储查询
        mock_memory_store.query_memories.assert_called_once()
    
    def test_query_memories_with_sources(self, manager, mock_memory_store):
        """测试查询记忆（包含源记忆）"""
        response = manager.query_memories(
            query="测试",
            user_id="user_001",
            include_sources=True
        )
        
        assert isinstance(response, QueryMemoryResponse)
        # 验证获取了源记忆
        mock_memory_store.get_source_memories.assert_called()
    
    def test_query_memories_skill_only(self, manager, mock_memory_store):
        """测试只查询技能记忆"""
        # 修改模拟返回只包含技能
        mock_memory_store.query_memories.return_value = [
            {
                "memory_id": "skill_001",
                "memory_type": "skill",
                "content": "Python 技能",
                "metadata": {
                    "user_id": "user_001",
                    "scope": "global",
                    "importance": 3.0
                },
                "timestamp": datetime.now().isoformat()
            }
        ]
        
        response = manager.query_memories(
            query="Python",
            user_id="user_001",
            memory_type="skill"
        )
        
        assert response.total == 1
        assert response.memories[0].memory_type == "skill"
    
    def test_get_memory_detail(self, manager, mock_memory_store):
        """测试获取记忆详情"""
        detail = manager.get_memory_detail(
            memory_id="mem_001",
            include_sources=True,
            include_related=False
        )
        
        assert detail is not None
        assert "memory" in detail
        assert "sources" in detail
        assert "related" in detail
        assert len(detail["sources"]) == 2
    
    def test_get_memory_detail_with_related(self, manager, mock_memory_store):
        """测试获取记忆详情（包含相关记忆）"""
        # 设置图谱包含该节点
        mock_memory_store.graph.__contains__ = MagicMock(return_value=True)
        
        detail = manager.get_memory_detail(
            memory_id="mem_001",
            include_sources=False,
            include_related=True
        )
        
        assert detail is not None
        # 验证获取了相关记忆
        mock_memory_store.graph.neighbors.assert_called_once_with("mem_001")
    
    def test_get_memory_detail_not_found(self, manager, mock_memory_store):
        """测试获取不存在的记忆详情"""
        mock_memory_store.get_memory_by_id.return_value = None
        
        detail = manager.get_memory_detail("non_existent")
        
        assert detail is None
    
    def test_trace_memory_origin(self, manager, mock_memory_store):
        """测试追溯记忆起源"""
        # 设置模拟返回链式结构
        def side_effect(memory_id, **kwargs):
            if memory_id == "mem_001":
                return {"memory_id": "mem_001", "memory_type": "thinking", "content": "思维"}
            elif memory_id == "source_001":
                return {"memory_id": "source_001", "memory_type": "storage", "content": "存储"}
            return None
        
        mock_memory_store.get_memory_by_id.side_effect = side_effect
        
        # 设置源记忆链
        mock_memory_store.get_source_memories.side_effect = [
            [{"memory_id": "source_001"}],  # mem_001 的源
            []  # source_001 没有源
        ]
        
        chain = manager.trace_memory_origin("mem_001", max_depth=3)
        
        assert isinstance(chain, list)
        assert len(chain) >= 1
    
    def test_trace_memory_origin_max_depth(self, manager, mock_memory_store):
        """测试追溯记忆起源（达到最大深度）"""
        # 设置无限链
        mock_memory_store.get_memory_by_id.return_value = {
            "memory_id": "mem_001",
            "memory_type": "thinking",
            "content": "内容"
        }
        mock_memory_store.get_source_memories.return_value = [
            {"memory_id": "mem_002"}
        ]
        
        chain = manager.trace_memory_origin("mem_001", max_depth=2)
        
        # 应该限制在 max_depth 内
        assert len(chain) <= 2
    
    def test_update_memory(self, manager, mock_memory_store):
        """测试更新记忆"""
        mock_memory_store.update_memory.return_value = True
        
        success = manager.update_memory(
            memory_id="mem_001",
            content="新内容",
            verified=True,
            reason="修正错误"
        )
        
        assert success is True
        mock_memory_store.update_memory.assert_called_once_with(
            memory_id="mem_001",
            content="新内容",
            verified=True,
            reason="修正错误"
        )
    
    def test_provide_feedback(self, manager, mock_memory_store):
        """测试提供反馈"""
        mock_memory_store.get_memory_by_id.return_value = {
            "memory_id": "mem_001",
            "memory_type": "thinking"
        }
        
        # 设置 _get_collection 返回模拟集合
        mock_collection = MagicMock()
        mock_memory_store._get_collection.return_value = mock_collection
        
        success = manager.provide_feedback(
            memory_id="mem_001",
            user_id="user_001",
            feedback_type="inaccurate",
            comment="这个记忆不准确",
            suggested_content="建议的正确内容"
        )
        
        assert success is True
        # 验证获取了集合
        mock_memory_store._get_collection.assert_called_once_with("thinking")
        # 验证更新了集合
        mock_collection.update.assert_called_once()
    
    def test_provide_feedback_not_found(self, manager, mock_memory_store):
        """测试为不存在的记忆提供反馈"""
        mock_memory_store.get_memory_by_id.return_value = None
        
        success = manager.provide_feedback(
            memory_id="non_existent",
            user_id="user_001",
            feedback_type="inaccurate"
        )
        
        assert success is False
    
    def test_get_stats(self, manager, mock_memory_store, mock_summarizer):
        """测试获取统计信息"""
        manager._initialized = True
        mock_summarizer._running = True
        
        stats = manager.get_stats()
        
        assert "storage_count" in stats
        assert "thinking_count" in stats
        assert "skill_count" in stats
        assert "links_count" in stats
        assert "initialized" in stats
        assert "summarizer_running" in stats
        
        assert stats["storage_count"] == 10
        assert stats["initialized"] is True
        assert stats["summarizer_running"] is True
    
    def test_quick_query(self, manager, mock_memory_store):
        """测试快速查询"""
        contents = manager.quick_query(
            query="Python",
            user_id="user_001",
            limit=3
        )
        
        assert isinstance(contents, list)
        assert len(contents) == 2
        assert "Python 技能" in contents
        assert "思维总结" in contents
    
    def test_quick_query_empty(self, manager, mock_memory_store):
        """测试快速查询（无结果）"""
        mock_memory_store.query_memories.return_value = []
        
        contents = manager.quick_query(
            query="不存在的查询",
            user_id="user_001"
        )
        
        assert contents == []


class TestTieredMemoryManagerEdgeCases:
    """测试边界情况"""
    
    def test_write_storage_memory_default_values(self, manager, mock_memory_store):
        """测试写入存储记忆（使用默认值）"""
        memory_id = manager.write_storage_memory(
            content="内容",
            user_id="user_001",
            session_id="session_001"
        )
        
        call_args = mock_memory_store.create_storage_memory.call_args[0][0]
        # 验证默认值
        assert call_args.participants == []
        assert call_args.topic is None
        assert call_args.scope == "project"
    
    def test_write_thinking_memory_default_values(self, manager, mock_memory_store):
        """测试写入思维记忆（使用默认值）"""
        memory_id = manager.write_thinking_memory(
            content="总结",
            user_id="user_001",
            source_memories=["mem_001"]
        )
        
        call_args = mock_memory_store.create_thinking_memory.call_args[0][0]
        # 验证默认值
        assert call_args.summary_type == "manual"
        assert call_args.key_points == []
    
    def test_write_skill_memory_default_values(self, manager, mock_memory_store):
        """测试写入技能记忆（使用默认值）"""
        memory_id = manager.write_skill_memory(
            content="技能",
            user_id="user_001",
            source_thinking=["think_001"]
        )
        
        call_args = mock_memory_store.create_skill_memory.call_args[0][0]
        # 验证默认值
        assert call_args.skill_type == "knowledge"
        assert call_args.tags == []
        assert call_args.scope == "global"
    
    def test_query_memories_error_handling(self, manager, mock_memory_store):
        """测试查询记忆错误处理"""
        # 模拟转换失败
        mock_memory_store.query_memories.return_value = [
            {
                "memory_id": "bad_mem",
                "memory_type": "invalid_type",  # 无效类型
                "content": "内容",
                "metadata": {},
                "timestamp": "invalid_timestamp"  # 无效时间戳
            }
        ]
        
        response = manager.query_memories(
            query="测试",
            user_id="user_001"
        )
        
        # 应该返回空列表而不是崩溃
        assert isinstance(response, QueryMemoryResponse)


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
