"""
记忆管理器：统一存储路径，消除双写

修复记录:
- [P0] 消除双写：write_memory 只调用 store.save() 一次
- [P0] read_memory 只从 store.search() 读取，去掉 tiered 合并
- [P1] _auto_enhance_memory 移到异步方法 enhance_memory_background()
- [P3] 补充类型注解
"""

from mcp_memory.memory.long_term import MemoryStore
from mcp_memory.models.data_models import MemoryItem
from typing import Optional, List, Tuple
from datetime import datetime
from mcp_memory.core.config import settings


class MemoryManager:
    """
    记忆管理器：统一存储入口

    整合传统记忆系统，三层记忆系统已合并到统一的 MemoryStore。
    不再双写，所有记忆存储在同一个 ChromaDB Collection 中，
    通过 metadata.memory_type 区分层级。
    """

    def __init__(self) -> None:
        self.store = MemoryStore(data_path=settings.CHROMA_DATA_PATH)

    def write_memory(
        self,
        user_id: str,
        content: str,
        project_id: Optional[str] = None,
        scope: str = "project",
        title: str = None,
        description: str = None,
        summary: str = None,
        content_type: str = "note",
        keywords: List[str] = None,
        tags: List[str] = None,
        max_chars: int = 1000,
        auto_enhance: bool = True,
    ) -> str:
        """
        写入记忆（同步，不阻塞）。

        LLM 智能增强已移至后台异步处理（enhance_memory_background），
        此方法只做本地基础处理：标题截取、字符统计。
        """
        final_project_id = project_id or settings.MCP_PROJECT_ID

        # 基础标题生成
        if not title:
            title = content[:50] + "..." if len(content) > 50 else content

        char_count = len(content) if content else 0

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
            importance=1.0,
        )
        memory_id = self.store.save(memory)
        return memory_id

    async def enhance_memory_background(self, memory_id: str, content: str, user_id: str) -> None:
        """
        后台异步增强记忆：调用 LLM 生成结构化元信息后回写。

        不阻塞写入流程，在 BackgroundTask 中调用。
        """
        try:
            from mcp_memory.llm.facade import llm_facade
            import json
            import re

            if not llm_facade.is_available():
                return

            target_language = settings.MCP_MEMORY_LANGUAGE or "简体中文"

            prompt = f"""
请深度分析以下内容，提取结构化元数据。

【待分析内容】
{content[:2000]}

【深度思考任务】
1. **标题生成**：基于内容核心主题，生成一个简洁、准确的标题（20-50字）
2. **关键词提取**：提取3-5个最能代表内容主题的关键词
3. **内容类型判断**：code | config | workflow | task | note
4. **描述生成**：用1-2句话概括内容的核心价值（50-100字）

【语言要求】必须使用{target_language}，禁止中英文混杂，代码和技术术语保持原样。

【输出格式】严格按照以下JSON格式输出（不要包含markdown标记）：
{{"title": "标题", "keywords": ["k1", "k2"], "content_type": "note", "description": "描述"}}
"""

            response = await llm_facade.chat_completion(
                messages=[{"role": "user", "content": prompt}],
                temperature=0.3,
                max_tokens=1000
            )
            if not response:
                return

            json_match = re.search(r'\{[\s\S]*\}', response)
            if not json_match:
                return

            enhanced = json.loads(json_match.group())
            if not enhanced.get('title') or not enhanced.get('keywords'):
                return

            # 回写元数据
            metadata_updates = {
                "title": enhanced.get('title', ''),
                "description": enhanced.get('description', ''),
                "content_type": enhanced.get('content_type', 'note'),
                "keywords": json.dumps(enhanced.get('keywords', []), ensure_ascii=False),
                "cognitive_enhanced": True,
                "cognitive_enhanced_at": datetime.now().isoformat(),
            }
            self.store.update_memory_metadata(memory_id, metadata_updates)
            print(f"[MemoryManager] 后台增强完成: {memory_id[:8]} -> {enhanced['title'][:30]}")

        except Exception as e:
            print(f"[MemoryManager] 后台增强失败 {memory_id[:8]}: {e}")

    def read_memory(
        self,
        user_id: str,
        query: str,
        project_id: Optional[str] = None,
        limit: int = 10,
        reinforce: bool = True,
    ) -> Tuple[List[dict], List[dict]]:
        """
        读取记忆：统一从 store.search() 检索

        Returns:
            Tuple[List[dict], List[dict]]: (记忆列表, Profile 上下文)
        """
        final_project_id = project_id or settings.MCP_PROJECT_ID
        results, profiles = self.store.search(
            query=query,
            user_id=user_id,
            project_id=final_project_id,
            limit=limit,
            reinforce=reinforce,
        )

        # 格式化结果
        formatted: List[dict] = []
        for r in results:
            meta = r.get("metadata", {})
            formatted.append({
                "content": r["content"],
                "timestamp": r.get("timestamp", ""),
                "id": r["id"],
                "score": r.get("score", 0),
                "title": meta.get("title", ""),
                "description": meta.get("description", ""),
                "summary": meta.get("summary", ""),
                "keywords": meta.get("keywords", []),
                "tags": meta.get("tags", []),
                "content_type": meta.get("content_type", "note"),
                "memory_type": meta.get("memory_type", "storage"),
                "importance": meta.get("importance", 1.0),
                "user_id": meta.get("user_id", ""),
                "scope": meta.get("scope", "project"),
                "project_id": meta.get("project_id", ""),
            })

        return formatted, profiles

    def delete_memory(self, user_id: str, memory_id: str) -> bool:
        """删除记忆"""
        return self.store.delete(memory_id, user_id)

    def update_memory(self, user_id: str, memory_id: str, content: str) -> bool:
        """更新记忆内容"""
        return self.store.update_memory_content(memory_id, user_id, content)
