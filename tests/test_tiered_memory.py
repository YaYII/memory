"""
单元测试：三层记忆存储 (tiered_memory.py)
测试 TieredMemoryStore 的创建、查询、更新等功能
"""

import pytest
import os
import shutil
import tempfile
from datetime import datetime
from unittest.mock import Mock, patch, MagicMock

from mcp_memory.memory.tiered_memory import TieredMemoryStore
from mcp_memory.models.data_models import (
    StorageMemoryCreate,
    ThinkingMemoryCreate,
    SkillMemoryCreate
)


@pytest.fixture
def temp_data_dir():
    """创建临时数据目录"""
    temp_dir = tempfile.mkdtemp()
    yield temp_dir
    # 清理
    if os.path.exists(temp_dir):
        shutil.rmtree(temp_dir)


@pytest.fixture
def mock_chromadb():
    """模拟 ChromaDB 客户端和集合"""
    with patch('mcp_memory.memory.tiered_memory.chromadb') as mock_chroma:
        # 模拟客户端
        mock_client = MagicMock()
        mock_chroma.PersistentClient.return_value = mock_client
        
        # 模拟集合
        mock_collection = MagicMock()
        mock_client.get_or_create_collection.return_value = mock_collection
        
        # 模拟查询结果
        mock_collection.query.return_value = {
            "ids": [["mem_001", "mem_002"]],
            "documents": [["内容1", "内容2"]],
            "metadatas": [[{"timestamp": "2024-01-01T00:00:00"}, {"timestamp": "2024-01-02T00:00:00"}]],
            "distances": [[0.1, 0.2]]
        }
        
        mock_collection.get.return_value = {
            "ids": ["mem_001"],
            "documents": ["测试内容"],
            "metadatas": [{"timestamp": "2024-01-01T00:00:00", "memory_type": "storage"}]
        }
        
        mock_collection.count.return_value = 10
        
        yield mock_chroma, mock_client, mock_collection


class TestTieredMemoryStore:
    """测试 TieredMemoryStore 类"""
    
    def test_initialization(self, temp_data_dir, mock_chromadb):
        """测试存储初始化"""
        mock_chroma, mock_client, _ = mock_chromadb
        
        store = TieredMemoryStore(data_path=temp_data_dir)
        
        # 验证创建了四个集合
        assert mock_client.get_or_create_collection.call_count == 4
        mock_client.get_or_create_collection.assert_any_call("storage_memories")
        mock_client.get_or_create_collection.assert_any_call("thinking_memories")
        mock_client.get_or_create_collection.assert_any_call("skill_memories")
        mock_client.get_or_create_collection.assert_any_call("memory_links")
    
    def test_get_collection(self, temp_data_dir, mock_chromadb):
        """测试根据类型获取集合"""
        store = TieredMemoryStore(data_path=temp_data_dir)
        
        storage = store._get_collection("storage")
        thinking = store._get_collection("thinking")
        skill = store._get_collection("skill")
        
        assert storage is not None
        assert thinking is not None
        assert skill is not None
    
    def test_get_collection_invalid_type(self, temp_data_dir, mock_chromadb):
        """测试获取无效的记忆类型"""
        store = TieredMemoryStore(data_path=temp_data_dir)
        
        with pytest.raises(ValueError) as exc_info:
            store._get_collection("invalid_type")
        
        assert "未知的记忆类型" in str(exc_info.value)
    
    def test_create_storage_memory(self, temp_data_dir, mock_chromadb):
        """测试创建存储记忆"""
        _, mock_client, mock_collection = mock_chromadb
        store = TieredMemoryStore(data_path=temp_data_dir)
        
        data = StorageMemoryCreate(
            content="测试对话内容",
            user_id="user_001",
            session_id="session_001",
            topic="测试主题",
            participants=["user_001", "assistant"]
        )
        
        memory_id = store.create_storage_memory(data)
        
        # 验证返回了有效的记忆ID
        assert memory_id is not None
        assert len(memory_id) > 0
        
        # 验证调用了集合的 add 方法
        mock_collection.add.assert_called()
        call_args = mock_collection.add.call_args
        assert "ids" in call_args.kwargs or call_args.args
    
    def test_create_thinking_memory(self, temp_data_dir, mock_chromadb):
        """测试创建思维记忆"""
        _, mock_client, mock_collection = mock_chromadb
        store = TieredMemoryStore(data_path=temp_data_dir)
        
        data = ThinkingMemoryCreate(
            content="总结内容",
            user_id="user_001",
            source_memories=["mem_001", "mem_002"],
            summary_type="session",
            key_points=["要点1", "要点2"]
        )
        
        memory_id = store.create_thinking_memory(data)
        
        # 验证返回了有效的记忆ID
        assert memory_id is not None
        assert len(memory_id) > 0
        
        # 验证调用了集合的 add 方法
        mock_collection.add.assert_called()
    
    def test_create_skill_memory(self, temp_data_dir, mock_chromadb):
        """测试创建技能记忆"""
        _, mock_client, mock_collection = mock_chromadb
        store = TieredMemoryStore(data_path=temp_data_dir)
        
        data = SkillMemoryCreate(
            content="Python 异步编程技能",
            user_id="user_001",
            source_thinking=["think_001"],
            skill_type="coding",
            tags=["python", "async"]
        )
        
        memory_id = store.create_skill_memory(data)
        
        # 验证返回了有效的记忆ID
        assert memory_id is not None
        assert len(memory_id) > 0
        
        # 验证调用了集合的 add 方法
        mock_collection.add.assert_called()
    
    def test_query_memories_all_types(self, temp_data_dir, mock_chromadb):
        """测试查询所有类型的记忆"""
        _, mock_client, mock_collection = mock_chromadb
        store = TieredMemoryStore(data_path=temp_data_dir)
        
        results = store.query_memories(
            query="Python 编程",
            memory_type="all",
            user_id="user_001",
            limit=5
        )
        
        # 验证返回了结果列表
        assert isinstance(results, list)
        assert len(results) > 0
        
        # 验证结果被正确格式化
        first_result = results[0]
        assert "memory_id" in first_result
        assert "memory_type" in first_result
        assert "content" in first_result
        assert "similarity" in first_result
    
    def test_query_memories_skill_only(self, temp_data_dir, mock_chromadb):
        """测试仅查询技能记忆"""
        _, mock_client, mock_collection = mock_chromadb
        store = TieredMemoryStore(data_path=temp_data_dir)
        
        results = store.query_memories(
            query="编程",
            memory_type="skill",
            limit=3
        )
        
        # 验证只查询了 skill 集合
        mock_collection.query.assert_called()
    
    def test_format_results(self, temp_data_dir, mock_chromadb):
        """测试结果格式化"""
        store = TieredMemoryStore(data_path=temp_data_dir)
        
        query_results = {
            "ids": [["mem_001", "mem_002"]],
            "documents": [["内容1", "内容2"]],
            "metadatas": [[{"timestamp": "2024-01-01"}, {"timestamp": "2024-01-02"}]],
            "distances": [[0.1, 0.3]]
        }
        
        results = store._format_results(query_results, "storage")
        
        assert len(results) == 2
        
        # 验证相似度转换（1.0 - distance）
        assert results[0]["similarity"] == 0.9  # 1.0 - 0.1
        assert results[1]["similarity"] == 0.7  # 1.0 - 0.3
        
        # 验证记忆类型
        assert results[0]["memory_type"] == "storage"
    
    def test_get_memory_by_id_with_type(self, temp_data_dir, mock_chromadb):
        """测试通过ID获取记忆（指定类型）"""
        _, mock_client, mock_collection = mock_chromadb
        store = TieredMemoryStore(data_path=temp_data_dir)
        
        result = store.get_memory_by_id("mem_001", memory_type="storage")
        
        assert result is not None
        assert result["memory_id"] == "mem_001"
        assert result["memory_type"] == "storage"
    
    def test_get_memory_by_id_without_type(self, temp_data_dir, mock_chromadb):
        """测试通过ID获取记忆（不指定类型）"""
        _, mock_client, mock_collection = mock_chromadb
        store = TieredMemoryStore(data_path=temp_data_dir)
        
        result = store.get_memory_by_id("mem_001")
        
        assert result is not None
        # 应该遍历所有类型直到找到
        assert result["memory_id"] == "mem_001"
    
    def test_get_memory_by_id_not_found(self, temp_data_dir, mock_chromadb):
        """测试获取不存在的记忆"""
        _, mock_client, mock_collection = mock_chromadb
        
        # 模拟返回空结果
        mock_collection.get.return_value = {"ids": []}
        
        store = TieredMemoryStore(data_path=temp_data_dir)
        result = store.get_memory_by_id("non_existent_id")
        
        assert result is None
    
    def test_get_stats(self, temp_data_dir, mock_chromadb):
        """测试获取统计信息"""
        _, mock_client, mock_collection = mock_chromadb
        store = TieredMemoryStore(data_path=temp_data_dir)
        
        stats = store.get_stats()
        
        assert "storage_count" in stats
        assert "thinking_count" in stats
        assert "skill_count" in stats
        assert "links_count" in stats
        
        # 验证 count 被调用了
        assert mock_collection.count.call_count == 4
    
    def test_update_memory(self, temp_data_dir, mock_chromadb):
        """测试更新记忆"""
        _, mock_client, mock_collection = mock_chromadb
        store = TieredMemoryStore(data_path=temp_data_dir)
        
        # 先模拟获取记忆
        mock_collection.get.return_value = {
            "ids": ["mem_001"],
            "documents": ["旧内容"],
            "metadatas": [{"timestamp": "2024-01-01", "memory_type": "storage", "version": 1}]
        }
        
        result = store.update_memory(
            memory_id="mem_001",
            content="新内容",
            verified=True,
            reason="修正错误"
        )
        
        assert result is True
        mock_collection.update.assert_called()
    
    def test_update_memory_not_found(self, temp_data_dir, mock_chromadb):
        """测试更新不存在的记忆"""
        _, mock_client, mock_collection = mock_chromadb
        
        # 模拟返回空结果
        mock_collection.get.return_value = {"ids": []}
        
        store = TieredMemoryStore(data_path=temp_data_dir)
        result = store.update_memory("non_existent_id", content="新内容")
        
        assert result is False


class TestMemoryRelationships:
    """测试记忆关系功能"""
    
    def test_create_link(self, temp_data_dir, mock_chromadb):
        """测试创建记忆链接"""
        _, mock_client, mock_collection = mock_chromadb
        store = TieredMemoryStore(data_path=temp_data_dir)
        
        # 调用内部方法创建链接
        store._create_link("source_001", "target_001", "summarized_from")
        
        # 验证 links 集合的 add 方法被调用
        mock_collection.add.assert_called()
    
    def test_graph_operations(self, temp_data_dir, mock_chromadb):
        """测试知识图谱操作"""
        store = TieredMemoryStore(data_path=temp_data_dir)
        
        # 验证图谱已创建
        assert store.graph is not None
        
        # 添加节点
        store.graph.add_node("mem_001", type="storage")
        store.graph.add_node("mem_002", type="thinking")
        store.graph.add_edge("mem_002", "mem_001", relation="summarized_from")
        
        # 验证节点和边
        assert "mem_001" in store.graph.nodes
        assert "mem_002" in store.graph.nodes
        assert store.graph.has_edge("mem_002", "mem_001")


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
