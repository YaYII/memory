from mcp_memory.memory.long_term import MemoryStore
from mcp_memory.models.data_models import MemoryItem
from typing import Optional, List
from datetime import datetime
from mcp_memory.core.config import settings

class MemoryManager:
    """
    记忆管理器：根据 ENV 配置自动处理 Scope 和 Sharing
    """
    def __init__(self):
        self.store = MemoryStore(data_path=settings.CHROMA_DATA_PATH)

    def write_memory(self, user_id: str, content: str, project_id: Optional[str] = None, scope: str = "project") -> str:
        """
        写入记忆：支持 AI 动态指定 project_id，若不指定则使用当前环境的自动ID
        """
        # 确定最终的 project_id
        final_project_id = project_id or settings.MCP_PROJECT_ID
        
        memory = MemoryItem(
            content=content,
            user_id=user_id,
            scope=scope,
            project_id=final_project_id,
            is_shared=settings.MCP_MEMORY_SHARED, 
            timestamp=datetime.now(),
            importance=1.0
        )
        return self.store.save(memory)

    def read_memory(self, user_id: str, query: str, project_id: Optional[str] = None, limit: int = 10) -> List[dict]:
        """
        读取记忆：AI 可传入 project_id，若不传入则默认检索当前项目
        """
        final_project_id = project_id or settings.MCP_PROJECT_ID
        
        results = self.store.search(
            query=query, 
            user_id=user_id, 
            project_id=final_project_id, 
            limit=limit
        )
        
        # 格式化输出，隐藏内部评分细节，只保留最终 score
        formatted = []
        for r in results:
            formatted.append({
                "id": r["id"],
                "content": r["content"],
                "user_id": r["user_id"],
                "type": r["type"],
                "timestamp": r["timestamp"],
                "score": round(r["score"], 4)
            })
        return formatted

    def delete_memory(self, user_id: str, memory_id: str) -> bool:
        """
        删除记忆
        """
        return self.store.delete(memory_id, user_id)


import uuid
