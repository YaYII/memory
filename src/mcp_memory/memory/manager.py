from mcp_memory.memory.long_term import MemoryStore
from mcp_memory.memory.tiered_manager import TieredMemoryManager
from mcp_memory.models.data_models import MemoryItem
from typing import Optional, List
from datetime import datetime
from mcp_memory.core.config import settings

class MemoryManager:
    """
    记忆管理器：根据 ENV 配置自动处理 Scope 和 Sharing
    
    整合传统记忆系统和三层记忆系统，实现数据同步
    """
    def __init__(self):
        self.store = MemoryStore(data_path=settings.CHROMA_DATA_PATH)
        # 初始化三层记忆管理器，传入统一的store
        self.tiered_manager = TieredMemoryManager(memory_store=self.store, data_path=settings.CHROMA_DATA_PATH)

    def write_memory(self, user_id: str, content: str, project_id: Optional[str] = None, scope: str = "project",
                      title: str = None, description: str = None, summary: str = None,
                      content_type: str = "note", keywords: List[str] = None, tags: List[str] = None,
                      max_chars: int = 1000) -> str:
        """
        写入记忆：支持 AI 动态指定 project_id，若不指定则使用当前环境的自动ID
        
        增强版：支持标题、关键词、结构化内容
        
        Args:
            user_id: 用户ID
            content: 记忆内容
            project_id: 项目ID（可选）
            scope: 作用域（project/global）
            title: 记忆标题（可选，默认取内容前50字）
            description: 任务描述（可选）
            summary: 任务总结（可选）
            content_type: 内容类型（task/note/summary/code/config/workflow）
            keywords: 关键词列表（可选）
            tags: 标签列表（可选）
            max_chars: 最大字符限制（默认1000）
        """
        # 确定最终的 project_id
        final_project_id = project_id or settings.MCP_PROJECT_ID
        
        # 如果没有提供标题，从内容生成
        if not title:
            title = content[:50] + "..." if len(content) > 50 else content
        
        # 计算字符数
        char_count = len(content) if content else 0
        
        # 1. 写入传统记忆系统
        memory = MemoryItem(
            title=title,
            content=content,
            description=description,
            summary=summary,
            content_type=content_type,
            keywords=keywords or [],
            tags=tags or [],
            char_count=char_count,
            max_chars=max_chars,
            user_id=user_id,
            scope=scope,
            project_id=final_project_id,
            is_shared=settings.MCP_MEMORY_SHARED,
            timestamp=datetime.now(),
            importance=1.0
        )
        memory_id = self.store.save(memory)
        
        # 2. 同步写入三层记忆系统（作为storage记忆）
        try:
            import uuid
            session_id = str(uuid.uuid4())
            tiered_id = self.tiered_manager.write_storage_memory(
                content=content,
                user_id=user_id,
                session_id=session_id,
                project_id=final_project_id,
                scope=scope,
                participants=[user_id],
                topic=title  # 使用标题作为topic
            )
            print(f"[MemoryManager] 记忆已同步到三层系统: {tiered_id[:8]}")
        except Exception as e:
            print(f"[MemoryManager] 同步到三层系统失败: {e}")
        
        return memory_id

    def read_memory(self, user_id: str, query: str, project_id: Optional[str] = None, limit: int = 10) -> List[dict]:
        """
        读取记忆：AI 可传入 project_id，若不传入则默认检索当前项目
        
        同时从传统记忆系统和三层记忆系统读取，合并结果
        """
        final_project_id = project_id or settings.MCP_PROJECT_ID
        
        # 1. 从传统记忆系统读取
        traditional_results = self.store.search(
            query=query,
            user_id=user_id,
            project_id=final_project_id,
            limit=limit
        )
        
        # 2. 从三层记忆系统读取
        tiered_results = []
        try:
            tiered_response = self.tiered_manager.query_memories(
                query=query,
                user_id=user_id,
                memory_type="all",
                limit=limit
            )
            tiered_results = tiered_response.memories
        except Exception as e:
            print(f"[MemoryManager] 从三层系统读取失败: {e}")
        
        # 3. 合并结果（去重）
        seen_ids = set()
        formatted = []
        
        # 先添加传统记忆结果
        for r in traditional_results:
            mem_id = r["id"]
            if mem_id not in seen_ids:
                seen_ids.add(mem_id)
                formatted.append({
                    "content": r["content"],
                    "timestamp": r["timestamp"],
                    "id": mem_id,
                    "source": "traditional",
                    "score": r.get("score", 0)
                })
        
        # 再添加三层记忆结果
        for m in tiered_results:
            mem_id = m.memory_id
            if mem_id not in seen_ids:
                seen_ids.add(mem_id)
                formatted.append({
                    "content": m.content,
                    "timestamp": m.timestamp.isoformat() if m.timestamp else "",
                    "id": mem_id,
                    "source": "tiered",
                    "memory_type": m.memory_type,
                    "score": 0.9  # 三层记忆默认较高分数
                })
        
        # 按分数排序并限制数量
        formatted.sort(key=lambda x: x.get("score", 0), reverse=True)
        return formatted[:limit]

    def delete_memory(self, user_id: str, memory_id: str) -> bool:
        """
        删除记忆
        """
        return self.store.delete(memory_id, user_id)

    def update_memory(self, user_id: str, memory_id: str, content: str) -> bool:
        """
        更新记忆
        """
        return self.store.update_memory_content(memory_id, user_id, content)


import uuid
