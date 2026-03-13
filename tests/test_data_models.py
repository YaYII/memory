"""
单元测试：数据模型 (data_models.py)
测试 MemoryItem 和其他模型的创建、验证和序列化
"""

import pytest
from datetime import datetime
from pydantic import ValidationError
from mcp_memory.models.data_models import (
    MemoryItem,
    MemoryLink,
    ReadMemoryRequest,
    WriteMemoryRequest,
    DeleteMemoryRequest,
    UpdateMemoryRequest,
    MemoryFeedbackRequest,
    StorageMemoryCreate,
    ThinkingMemoryCreate,
    SkillMemoryCreate,
    QueryMemoryResponse,
    MCPResponse
)


class TestMemoryItem:
    """测试 MemoryItem 模型"""
    
    def test_create_basic_memory(self):
        """测试创建基本记忆项"""
        memory = MemoryItem(
            content="测试内容",
            user_id="user_001",
            scope="project",
            project_id="project_001",
            is_shared=False
        )
        
        assert memory.content == "测试内容"
        assert memory.user_id == "user_001"
        assert memory.memory_type == "storage"  # 默认值
        assert memory.importance == 1.0  # 默认值
        assert memory.confidence == 1.0  # 默认值
        assert memory.version == 1  # 默认值
        assert isinstance(memory.memory_id, str)
        assert len(memory.memory_id) > 0
        assert isinstance(memory.timestamp, datetime)
    
    def test_create_storage_memory(self):
        """测试创建存储记忆"""
        memory = MemoryItem(
            content="原始对话内容",
            user_id="user_001",
            memory_type="storage",
            scope="project",
            project_id="project_001",
            is_shared=False,
            session_id="session_001",
            tags=["对话", "测试"]
        )
        
        assert memory.memory_type == "storage"
        assert memory.session_id == "session_001"
        assert memory.tags == ["对话", "测试"]
    
    def test_create_thinking_memory(self):
        """测试创建思维记忆"""
        memory = MemoryItem(
            content="总结内容",
            user_id="user_001",
            memory_type="thinking",
            scope="project",
            project_id="project_001",
            is_shared=False,
            source_memories=["mem_001", "mem_002"],
            summary_type="session",
            confidence=0.95
        )
        
        assert memory.memory_type == "thinking"
        assert memory.source_memories == ["mem_001", "mem_002"]
        assert memory.summary_type == "session"
        assert memory.confidence == 0.95
    
    def test_create_skill_memory(self):
        """测试创建技能记忆"""
        memory = MemoryItem(
            content="Python 异步编程最佳实践",
            user_id="user_001",
            memory_type="skill",
            scope="global",
            project_id="global",
            is_shared=True,
            source_memories=["think_001"],
            skill_type="coding",
            tags=["python", "async", "best_practice"],
            confidence=0.98,
            verified=True
        )
        
        assert memory.memory_type == "skill"
        assert memory.skill_type == "coding"
        assert memory.verified == True
        assert memory.scope == "global"
    
    def test_invalid_memory_type(self):
        """测试无效的记忆类型"""
        with pytest.raises(ValidationError) as exc_info:
            MemoryItem(
                content="测试内容",
                user_id="user_001",
                memory_type="invalid_type",  # 无效类型
                scope="project",
                project_id="project_001",
                is_shared=False
            )
        
        assert "memory_type" in str(exc_info.value)
    
    def test_invalid_confidence_range(self):
        """测试无效的置信度范围"""
        # confidence 字段没有范围限制，但应该能正常存储
        memory = MemoryItem(
            content="测试内容",
            user_id="user_001",
            scope="project",
            project_id="project_001",
            is_shared=False,
            confidence=1.5  # 超出 0-1 范围
        )
        
        assert memory.confidence == 1.5
    
    def test_memory_serialization(self):
        """测试记忆序列化为 JSON"""
        memory = MemoryItem(
            content="测试内容",
            user_id="user_001",
            memory_type="thinking",
            scope="project",
            project_id="project_001",
            is_shared=False,
            source_memories=["mem_001"],
            summary_type="daily"
        )
        
        json_data = memory.model_dump()
        
        assert json_data["content"] == "测试内容"
        assert json_data["user_id"] == "user_001"
        assert json_data["memory_type"] == "thinking"
        assert json_data["source_memories"] == ["mem_001"]
        assert json_data["summary_type"] == "daily"
        assert "timestamp" in json_data
    
    def test_memory_deserialization(self):
        """测试从 JSON 反序列化记忆"""
        json_data = {
            "memory_id": "test-uuid-123",
            "content": "测试内容",
            "user_id": "user_001",
            "memory_type": "skill",
            "scope": "global",
            "project_id": "global",
            "is_shared": True,
            "skill_type": "coding",
            "tags": ["python"],
            "confidence": 0.95,
            "verified": True
        }
        
        memory = MemoryItem(**json_data)
        
        assert memory.memory_id == "test-uuid-123"
        assert memory.skill_type == "coding"
        assert memory.verified == True


class TestMemoryLink:
    """测试 MemoryLink 模型"""
    
    def test_create_link(self):
        """测试创建记忆链接"""
        link = MemoryLink(
            source_id="mem_001",
            target_id="mem_002",
            link_type="summarized_from",
            confidence=0.9
        )
        
        assert link.source_id == "mem_001"
        assert link.target_id == "mem_002"
        assert link.link_type == "summarized_from"
        assert link.confidence == 0.9
        assert isinstance(link.link_id, str)
    
    def test_invalid_link_type(self):
        """测试无效的链接类型"""
        with pytest.raises(ValidationError) as exc_info:
            MemoryLink(
                source_id="mem_001",
                target_id="mem_002",
                link_type="invalid_link"  # 无效类型
            )
        
        assert "link_type" in str(exc_info.value)


class TestReadMemoryRequest:
    """测试 ReadMemoryRequest 模型"""
    
    def test_create_read_request(self):
        """测试创建读取请求"""
        request = ReadMemoryRequest(
            user_id="user_001",
            query="Python 异步编程",
            limit=5,
            memory_type="skill"
        )
        
        assert request.user_id == "user_001"
        assert request.query == "Python 异步编程"
        assert request.limit == 5
        assert request.memory_type == "skill"
    
    def test_default_values(self):
        """测试默认值"""
        request = ReadMemoryRequest(
            user_id="user_001",
            query="测试查询"
        )
        
        assert request.limit == 10  # 默认值
        assert request.memory_type == "all"  # 默认值
        assert request.project_id is None


class TestWriteMemoryRequest:
    """测试 WriteMemoryRequest 模型"""
    
    def test_create_write_request(self):
        """测试创建写入请求"""
        request = WriteMemoryRequest(
            user_id="user_001",
            content="需要记忆的内容",
            memory_type="thinking",
            scope="project",
            tags=["重要", "学习"]
        )
        
        assert request.memory_type == "thinking"
        assert request.scope == "project"
        assert request.tags == ["重要", "学习"]
    
    def test_default_memory_type(self):
        """测试默认记忆类型"""
        request = WriteMemoryRequest(
            user_id="user_001",
            content="内容"
        )
        
        assert request.memory_type == "storage"  # 默认值


class TestDeleteMemoryRequest:
    """测试 DeleteMemoryRequest 模型"""
    
    def test_create_delete_request(self):
        """测试创建删除请求"""
        request = DeleteMemoryRequest(
            memory_id="mem_001",
            user_id="user_001"
        )
        
        assert request.memory_id == "mem_001"
        assert request.user_id == "user_001"


class TestUpdateMemoryRequest:
    """测试 UpdateMemoryRequest 模型"""
    
    def test_create_update_request(self):
        """测试创建更新请求"""
        request = UpdateMemoryRequest(
            memory_id="mem_001",
            user_id="user_001",
            content="更新后的内容",
            reason="修正错误"
        )
        
        assert request.memory_id == "mem_001"
        assert request.content == "更新后的内容"
        assert request.reason == "修正错误"


class TestMemoryFeedbackRequest:
    """测试 MemoryFeedbackRequest 模型"""
    
    def test_create_feedback_request(self):
        """测试创建反馈请求"""
        request = MemoryFeedbackRequest(
            memory_id="mem_001",
            user_id="user_001",
            feedback_type="inaccurate",
            comment="这个记忆不准确",
            suggested_content="建议的正确内容"
        )
        
        assert request.feedback_type == "inaccurate"
        assert request.comment == "这个记忆不准确"
        assert request.suggested_content == "建议的正确内容"


class TestStorageMemoryCreate:
    """测试 StorageMemoryCreate 模型"""
    
    def test_create_storage_request(self):
        """测试创建存储记忆请求"""
        request = StorageMemoryCreate(
            content="对话内容",
            user_id="user_001",
            session_id="session_001",
            topic="Python 学习",
            participants=["user_001", "assistant"]
        )
        
        assert request.session_id == "session_001"
        assert request.topic == "Python 学习"
        assert request.participants == ["user_001", "assistant"]


class TestThinkingMemoryCreate:
    """测试 ThinkingMemoryCreate 模型"""
    
    def test_create_thinking_request(self):
        """测试创建思维记忆请求"""
        request = ThinkingMemoryCreate(
            content="总结内容",
            user_id="user_001",
            source_memories=["mem_001", "mem_002"],
            summary_type="daily",
            key_points=["要点1", "要点2"]
        )
        
        assert request.summary_type == "daily"
        assert request.key_points == ["要点1", "要点2"]


class TestSkillMemoryCreate:
    """测试 SkillMemoryCreate 模型"""
    
    def test_create_skill_request(self):
        """测试创建技能记忆请求"""
        request = SkillMemoryCreate(
            content="技能描述",
            user_id="user_001",
            source_thinking=["think_001"],
            skill_type="coding",
            tags=["python", "async"],
            scope="global"
        )
        
        assert request.skill_type == "coding"
        assert request.scope == "global"
    
    def test_invalid_skill_type(self):
        """测试无效的技能类型"""
        with pytest.raises(ValidationError) as exc_info:
            SkillMemoryCreate(
                content="技能描述",
                user_id="user_001",
                source_thinking=["think_001"],
                skill_type="invalid_skill"  # 无效类型
            )
        
        assert "skill_type" in str(exc_info.value)


class TestQueryMemoryResponse:
    """测试 QueryMemoryResponse 模型"""
    
    def test_create_response(self):
        """测试创建查询响应"""
        memories = [
            MemoryItem(
                content="记忆1",
                user_id="user_001",
                scope="project",
                project_id="project_001",
                is_shared=False
            ),
            MemoryItem(
                content="记忆2",
                user_id="user_001",
                scope="project",
                project_id="project_001",
                is_shared=False
            )
        ]
        
        response = QueryMemoryResponse(
            memories=memories,
            total=2,
            query_time_ms=150,
            has_more=False
        )
        
        assert len(response.memories) == 2
        assert response.total == 2
        assert response.query_time_ms == 150
        assert response.has_more == False


class TestMCPResponse:
    """测试 MCPResponse 模型"""
    
    def test_create_success_response(self):
        """测试创建成功响应"""
        response = MCPResponse(
            code=0,
            message="操作成功",
            data={"memory_id": "mem_001"}
        )
        
        assert response.code == 0
        assert response.message == "操作成功"
        assert response.data["memory_id"] == "mem_001"
    
    def test_create_error_response(self):
        """测试创建错误响应"""
        response = MCPResponse(
            code=500,
            message="服务器内部错误",
            data=None
        )
        
        assert response.code == 500
        assert response.data is None


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
