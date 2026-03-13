"""
单元测试：自动总结系统 (auto_summarizer.py)
测试 AutoSummarizer 的初始化、总结生成、技能提取等功能
"""

import pytest
import asyncio
from datetime import datetime, timedelta
from unittest.mock import Mock, patch, MagicMock, AsyncMock

from mcp_memory.memory.auto_summarizer import AutoSummarizer
from mcp_memory.models.data_models import (
    StorageMemoryCreate,
    ThinkingMemoryCreate,
    SkillMemoryCreate
)


@pytest.fixture
def mock_memory_store():
    """模拟记忆存储"""
    store = MagicMock()
    
    # 模拟存储集合
    store.storage_collection = MagicMock()
    store.thinking_collection = MagicMock()
    store.skill_collection = MagicMock()
    
    # 模拟查询结果
    store.storage_collection.get.return_value = {
        "ids": ["mem_001", "mem_002", "mem_003"],
        "documents": ["内容1", "内容2", "内容3"],
        "metadatas": [
            {"timestamp": datetime.now().isoformat(), "user_id": "user_001"},
            {"timestamp": datetime.now().isoformat(), "user_id": "user_001"},
            {"timestamp": datetime.now().isoformat(), "user_id": "user_001"}
        ]
    }
    
    store.thinking_collection.get.return_value = {
        "ids": ["think_001"],
        "documents": ["思维内容"],
        "metadatas": [
            {"timestamp": datetime.now().isoformat(), "user_id": "user_001", "skill_extracted": False}
        ]
    }
    
    store.create_thinking_memory.return_value = "think_new_001"
    store.create_skill_memory.return_value = "skill_new_001"
    store.get_memory_by_id.return_value = {
        "memory_id": "mem_001",
        "memory_type": "storage",
        "content": "测试内容",
        "metadata": {"user_id": "user_001", "project_id": "proj_001", "scope": "project"}
    }
    
    return store


@pytest.fixture
def mock_llm_facade():
    """模拟 LLM 服务"""
    with patch('mcp_memory.memory.auto_summarizer.llm_facade') as mock_llm:
        mock_llm.initialize = AsyncMock()
        mock_llm.chat_completion = AsyncMock(return_value="生成的总结内容")
        yield mock_llm


class TestAutoSummarizer:
    """测试 AutoSummarizer 类"""
    
    def test_initialization(self, mock_memory_store):
        """测试初始化"""
        summarizer = AutoSummarizer(mock_memory_store)
        
        assert summarizer.memory_store == mock_memory_store
        assert summarizer._running is False
        assert summarizer._summary_task is None
        assert summarizer._extraction_task is None
        
        # 验证配置参数
        assert summarizer.session_summary_threshold == 1000
        assert summarizer.daily_summary_hour == 2
        assert summarizer.skill_extraction_interval == 3600
    
    @pytest.mark.asyncio
    async def test_initialize(self, mock_memory_store, mock_llm_facade):
        """测试初始化 LLM 服务"""
        summarizer = AutoSummarizer(mock_memory_store)
        
        await summarizer.initialize()
        
        mock_llm_facade.initialize.assert_called_once()
    
    @pytest.mark.asyncio
    async def test_start_and_stop(self, mock_memory_store, mock_llm_facade):
        """测试启动和停止任务"""
        summarizer = AutoSummarizer(mock_memory_store)
        
        # 启动
        await summarizer.start()
        assert summarizer._running is True
        assert summarizer._summary_task is not None
        assert summarizer._extraction_task is not None
        
        # 停止
        await summarizer.stop()
        assert summarizer._running is False
    
    def test_get_recent_storage_memories(self, mock_memory_store):
        """测试获取最近的存储记忆"""
        summarizer = AutoSummarizer(mock_memory_store)
        
        memories = summarizer._get_recent_storage_memories(minutes=30)
        
        assert isinstance(memories, list)
        assert len(memories) == 3
        
        # 验证返回的数据结构
        first_memory = memories[0]
        assert "memory_id" in first_memory
        assert "content" in first_memory
        assert "metadata" in first_memory
    
    def test_get_recent_storage_memories_empty(self, mock_memory_store):
        """测试获取空的存储记忆"""
        mock_memory_store.storage_collection.get.return_value = {"ids": []}
        
        summarizer = AutoSummarizer(mock_memory_store)
        memories = summarizer._get_recent_storage_memories(minutes=30)
        
        assert memories == []
    
    def test_get_unprocessed_thinking_memories(self, mock_memory_store):
        """测试获取未处理的思维记忆"""
        summarizer = AutoSummarizer(mock_memory_store)
        
        memories = summarizer._get_unprocessed_thinking_memories()
        
        assert isinstance(memories, list)
        assert len(memories) == 1
        
        # 验证返回的数据结构
        first_memory = memories[0]
        assert "memory_id" in first_memory
        assert "content" in first_memory
    
    def test_get_unprocessed_thinking_memories_all_processed(self, mock_memory_store):
        """测试所有思维记忆都已处理"""
        mock_memory_store.thinking_collection.get.return_value = {
            "ids": ["think_001"],
            "documents": ["思维内容"],
            "metadatas": [
                {"timestamp": datetime.now().isoformat(), "skill_extracted": True}
            ]
        }
        
        summarizer = AutoSummarizer(mock_memory_store)
        memories = summarizer._get_unprocessed_thinking_memories()
        
        assert memories == []
    
    @pytest.mark.asyncio
    async def test_generate_summary(self, mock_memory_store, mock_llm_facade):
        """测试生成总结"""
        summarizer = AutoSummarizer(mock_memory_store)
        
        contents = ["内容1", "内容2", "内容3"]
        summary = await summarizer._generate_summary(contents)
        
        assert summary == "生成的总结内容"
        mock_llm_facade.chat_completion.assert_called_once()
        
        # 验证调用参数包含提示词
        call_args = mock_llm_facade.chat_completion.call_args
        assert "messages" in call_args.kwargs
    
    @pytest.mark.asyncio
    async def test_generate_summary_empty(self, mock_memory_store, mock_llm_facade):
        """测试生成空内容的总结"""
        summarizer = AutoSummarizer(mock_memory_store)
        
        summary = await summarizer._generate_summary([])
        
        # 空列表应该也能处理
        assert summary is not None
    
    @pytest.mark.asyncio
    async def test_generate_summary_llm_error(self, mock_memory_store, mock_llm_facade):
        """测试 LLM 生成总结失败"""
        mock_llm_facade.chat_completion = AsyncMock(side_effect=Exception("LLM 错误"))
        
        summarizer = AutoSummarizer(mock_memory_store)
        summary = await summarizer._generate_summary(["内容"])
        
        assert summary is None
    
    @pytest.mark.asyncio
    async def test_extract_key_points(self, mock_memory_store, mock_llm_facade):
        """测试提取关键要点"""
        mock_llm_facade.chat_completion = AsyncMock(
            return_value='["要点1", "要点2", "要点3"]'
        )
        
        summarizer = AutoSummarizer(mock_memory_store)
        key_points = await summarizer._extract_key_points(["内容1", "内容2"])
        
        assert isinstance(key_points, list)
        assert len(key_points) == 3
        assert "要点1" in key_points
    
    @pytest.mark.asyncio
    async def test_extract_key_points_invalid_json(self, mock_memory_store, mock_llm_facade):
        """测试提取关键要点时返回无效 JSON"""
        mock_llm_facade.chat_completion = AsyncMock(return_value="无效的内容")
        
        summarizer = AutoSummarizer(mock_memory_store)
        key_points = await summarizer._extract_key_points(["内容"])
        
        assert key_points == []
    
    @pytest.mark.asyncio
    async def test_analyze_skill_potential_with_skill(self, mock_memory_store, mock_llm_facade):
        """测试分析技能潜力（包含技能）"""
        mock_llm_facade.chat_completion = AsyncMock(return_value='''
        {
            "is_skill": true,
            "skill_content": "Python 异步编程技能",
            "skill_type": "coding",
            "tags": ["python", "async"]
        }
        ''')
        
        summarizer = AutoSummarizer(mock_memory_store)
        skill_info = await summarizer._analyze_skill_potential("Python 异步编程内容")
        
        assert skill_info is not None
        assert skill_info["is_skill"] is True
        assert skill_info["skill_type"] == "coding"
        assert "tags" in skill_info
    
    @pytest.mark.asyncio
    async def test_analyze_skill_potential_no_skill(self, mock_memory_store, mock_llm_facade):
        """测试分析技能潜力（不包含技能）"""
        mock_llm_facade.chat_completion = AsyncMock(return_value='{"is_skill": false}')
        
        summarizer = AutoSummarizer(mock_memory_store)
        skill_info = await summarizer._analyze_skill_potential("普通对话内容")
        
        assert skill_info is not None
        assert skill_info["is_skill"] is False
    
    @pytest.mark.asyncio
    async def test_create_session_summary(self, mock_memory_store, mock_llm_facade):
        """测试创建会话总结"""
        mock_llm_facade.chat_completion = AsyncMock(return_value="生成的总结")
        
        summarizer = AutoSummarizer(mock_memory_store)
        
        memories = [
            {
                "memory_id": "mem_001",
                "content": "内容1",
                "metadata": {"user_id": "user_001", "project_id": "proj_001", "scope": "project"}
            },
            {
                "memory_id": "mem_002",
                "content": "内容2",
                "metadata": {"user_id": "user_001", "project_id": "proj_001", "scope": "project"}
            },
            {
                "memory_id": "mem_003",
                "content": "内容3",
                "metadata": {"user_id": "user_001", "project_id": "proj_001", "scope": "project"}
            }
        ]
        
        await summarizer._create_session_summary(memories)
        
        # 验证创建了思维记忆
        mock_memory_store.create_thinking_memory.assert_called_once()
    
    @pytest.mark.asyncio
    async def test_create_session_summary_empty(self, mock_memory_store, mock_llm_facade):
        """测试创建空会话总结"""
        summarizer = AutoSummarizer(mock_memory_store)
        
        await summarizer._create_session_summary([])
        
        # 空列表不应该创建思维记忆
        mock_memory_store.create_thinking_memory.assert_not_called()
    
    @pytest.mark.asyncio
    async def test_extract_skill_from_thinking(self, mock_memory_store, mock_llm_facade):
        """测试从思维记忆提取技能"""
        mock_llm_facade.chat_completion = AsyncMock(return_value='''
        {
            "is_skill": true,
            "skill_content": "Python 异步编程技能",
            "skill_type": "coding",
            "tags": ["python", "async"]
        }
        ''')
        
        summarizer = AutoSummarizer(mock_memory_store)
        
        thinking_memory = {
            "memory_id": "think_001",
            "content": "Python 异步编程总结",
            "metadata": {"user_id": "user_001", "project_id": "proj_001"}
        }
        
        await summarizer._extract_skill_from_thinking(thinking_memory)
        
        # 验证创建了技能记忆
        mock_memory_store.create_skill_memory.assert_called_once()
        # 验证标记为已处理
        mock_memory_store.thinking_collection.update.assert_called_once()
    
    @pytest.mark.asyncio
    async def test_extract_skill_from_thinking_not_skill(self, mock_memory_store, mock_llm_facade):
        """测试从思维记忆提取技能（不是技能）"""
        mock_llm_facade.chat_completion = AsyncMock(return_value='{"is_skill": false}')
        
        summarizer = AutoSummarizer(mock_memory_store)
        
        thinking_memory = {
            "memory_id": "think_001",
            "content": "普通总结",
            "metadata": {"user_id": "user_001"}
        }
        
        await summarizer._extract_skill_from_thinking(thinking_memory)
        
        # 不应该创建技能记忆
        mock_memory_store.create_skill_memory.assert_not_called()
    
    @pytest.mark.asyncio
    async def test_force_summary(self, mock_memory_store, mock_llm_facade):
        """测试手动触发总结"""
        mock_llm_facade.chat_completion = AsyncMock(return_value="手动总结")
        
        summarizer = AutoSummarizer(mock_memory_store)
        result = await summarizer.force_summary(["mem_001", "mem_002"])
        
        assert "已为" in result
        assert "条记忆创建总结" in result
    
    @pytest.mark.asyncio
    async def test_force_summary_insufficient_memories(self, mock_memory_store, mock_llm_facade):
        """测试手动触发总结（记忆不足）"""
        summarizer = AutoSummarizer(mock_memory_store)
        result = await summarizer.force_summary(["mem_001"])
        
        assert "记忆数量不足" in result
    
    @pytest.mark.asyncio
    async def test_force_skill_extraction(self, mock_memory_store, mock_llm_facade):
        """测试手动触发技能提取"""
        mock_memory_store.get_memory_by_id.return_value = {
            "memory_id": "think_001",
            "content": "思维内容",
            "metadata": {"user_id": "user_001"}
        }
        mock_llm_facade.chat_completion = AsyncMock(return_value='''
        {
            "is_skill": true,
            "skill_content": "技能内容",
            "skill_type": "knowledge",
            "tags": ["tag1"]
        }
        ''')
        
        summarizer = AutoSummarizer(mock_memory_store)
        result = await summarizer.force_skill_extraction("think_001")
        
        assert "已为思维记忆" in result
        assert "提取技能" in result
    
    @pytest.mark.asyncio
    async def test_force_skill_extraction_not_found(self, mock_memory_store, mock_llm_facade):
        """测试手动触发技能提取（记忆不存在）"""
        mock_memory_store.get_memory_by_id.return_value = None
        
        summarizer = AutoSummarizer(mock_memory_store)
        result = await summarizer.force_skill_extraction("non_existent")
        
        assert "思维记忆不存在" in result


class TestAutoSummarizerLoops:
    """测试自动总结循环"""
    
    @pytest.mark.asyncio
    async def test_session_summary_loop(self, mock_memory_store, mock_llm_facade):
        """测试会话总结循环"""
        summarizer = AutoSummarizer(mock_memory_store)
        
        # 模拟只运行一次就退出
        summarizer._running = True
        call_count = 0
        
        original_sleep = asyncio.sleep
        async def mock_sleep(seconds):
            nonlocal call_count
            call_count += 1
            if call_count >= 1:
                summarizer._running = False
            await original_sleep(0.1)  # 使用很短的睡眠时间
        
        with patch('asyncio.sleep', mock_sleep):
            with patch.object(summarizer, '_create_session_summary', new_callable=AsyncMock) as mock_create:
                await summarizer._session_summary_loop()
                
                # 验证调用了创建总结
                mock_create.assert_called()
    
    @pytest.mark.asyncio
    async def test_skill_extraction_loop(self, mock_memory_store, mock_llm_facade):
        """测试技能提取循环"""
        summarizer = AutoSummarizer(mock_memory_store)
        
        # 模拟只运行一次就退出
        summarizer._running = True
        call_count = 0
        
        original_sleep = asyncio.sleep
        async def mock_sleep(seconds):
            nonlocal call_count
            call_count += 1
            if call_count >= 1:
                summarizer._running = False
            await original_sleep(0.1)
        
        with patch('asyncio.sleep', mock_sleep):
            with patch.object(summarizer, '_extract_skill_from_thinking', new_callable=AsyncMock) as mock_extract:
                await summarizer._skill_extraction_loop()
                
                # 验证调用了提取技能
                mock_extract.assert_called()


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
