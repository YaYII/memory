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
                      max_chars: int = 1000, auto_enhance: bool = True) -> str:
        """
        写入记忆：支持 AI 动态指定 project_id，若不指定则使用当前环境的自动ID
        
        智能增强版：
        1. 如果AI只提供了简单content，系统会在后台自动补全结构化信息
        2. 如果AI已经提供了完整信息，则直接使用
        
        Args:
            user_id: 用户ID
            content: 记忆内容
            project_id: 项目ID（可选）
            scope: 作用域（project/global）
            title: 记忆标题（可选）
            description: 任务描述（可选）
            summary: 任务总结（可选）
            content_type: 内容类型（可选）
            keywords: 关键词列表（可选）
            tags: 标签列表（可选）
            max_chars: 最大字符限制（默认1000）
            auto_enhance: 是否自动增强（默认True）
        """
        # 确定最终的 project_id
        final_project_id = project_id or settings.MCP_PROJECT_ID
        
        # 检查是否需要自动增强（AI只提供了简单内容）
        needs_enhancement = auto_enhance and not (title and keywords and description)
        
        if needs_enhancement:
            print(f"[MemoryManager] 检测到简单内容，启动后台结构化增强...")
            # 在后台异步增强（不阻塞写入）
            enhanced = self._auto_enhance_memory(content, content_type)
            if enhanced:
                # 使用增强后的信息（如果AI没提供的话）
                title = title or enhanced.get('title')
                description = description or enhanced.get('description')
                summary = summary or enhanced.get('summary')
                keywords = keywords or enhanced.get('keywords', [])
                content_type = content_type or enhanced.get('content_type', 'note')
                print(f"[MemoryManager] 结构化增强完成: {title[:30]}...")
        
        # 如果没有提供标题，从内容生成基础标题
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
    
    def _auto_enhance_memory(self, content: str, content_type_hint: str = None) -> Optional[dict]:
        """
        自动增强记忆：使用LLM深度思考生成结构化信息
        
        调用底层AI模型（DeepSeek）进行深度思考：
        1. 理解内容核心主题，生成精准标题
        2. 提炼关键概念，构建关键词标签
        3. 判断内容类型（code/config/workflow/task/note）
        4. 生成简洁描述
        """
        try:
            from mcp_memory.llm.facade import llm_facade
            from mcp_memory.core.config import settings
            import json
            import re
            
            # 检查LLM是否可用
            if not llm_facade.is_available():
                print("[MemoryManager] LLM不可用，跳过智能增强")
                return None
            
            print("[MemoryManager] 调用LLM进行深度思考增强...")
            
            target_language = settings.MCP_MEMORY_LANGUAGE or "简体中文"
            
            prompt = f"""
请深度分析以下内容，提取结构化元数据。

【待分析内容】
{content[:2000]}

【深度思考任务】
1. **标题生成**：基于内容核心主题，生成一个简洁、准确的标题（20-50字）
   - 标题应该概括内容的本质
   - 避免使用过于笼统的词汇

2. **关键词提取**：提取3-5个最能代表内容主题的关键词
   - 关键词应该是具体的概念、技术、工具或主题
   - 避免通用词汇如"方法"、"技巧"等

3. **内容类型判断**：判断这是什么类型的内容
   - code: 代码片段、编程相关
   - config: 配置信息、环境设置
   - workflow: 工作流程、操作步骤
   - task: 任务描述、待办事项
   - note: 一般笔记、记录

4. **描述生成**：用1-2句话概括内容的核心价值（50-100字）

【语言要求】
- 必须使用{target_language}
- 禁止中英文混杂
- 代码和技术术语保持原样

【输出格式】
请严格按照以下JSON格式输出：
{{
    "title": "生成的标题",
    "keywords": ["关键词1", "关键词2", "关键词3"],
    "content_type": "code|config|workflow|task|note",
    "description": "内容描述"
}}
"""
            
            # 调用LLM进行深度思考
            response = llm_facade.chat_completion(
                messages=[{"role": "user", "content": prompt}],
                temperature=0.3,
                max_tokens=1000
            )
            
            if not response:
                print("[MemoryManager] LLM未返回响应")
                return None
            
            # 解析JSON响应
            json_match = re.search(r'\{[\s\S]*\}', response)
            if not json_match:
                print("[MemoryManager] 无法从LLM响应中提取JSON")
                return None
            
            json_str = json_match.group()
            enhanced = json.loads(json_str)
            
            # 验证必要字段
            if not enhanced.get('title') or not enhanced.get('keywords'):
                print("[MemoryManager] LLM返回的结构缺少必要字段")
                return None
            
            print(f"[MemoryManager] LLM深度思考完成: {enhanced['title'][:30]}...")
            print(f"[MemoryManager] 提取关键词: {', '.join(enhanced['keywords'])}")
            
            return {
                'title': enhanced['title'],
                'description': enhanced.get('description', ''),
                'summary': None,  # 简单内容不生成总结，留给后续认知处理
                'keywords': enhanced['keywords'],
                'content_type': enhanced.get('content_type', content_type_hint or 'note')
            }
            
        except Exception as e:
            print(f"[MemoryManager] LLM智能增强失败: {e}")
            return None

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
                # 从 metadata 提取完整字段
                meta = r.get("metadata", {})
                formatted.append({
                    "content": r["content"],
                    "timestamp": r["timestamp"],
                    "id": mem_id,
                    "source": "traditional",
                    "score": r.get("score", 0),
                    # 添加完整的元数据字段
                    "title": meta.get("title", "") or "",
                    "description": meta.get("description", "") or "",
                    "summary": meta.get("summary", "") or "",
                    "keywords": meta.get("keywords", []) or [],
                    "tags": meta.get("tags", []) or [],
                    "content_type": meta.get("content_type", "note") or "note",
                    "memory_type": meta.get("memory_type", "storage") or "storage",
                    "importance": meta.get("importance", 1.0) or 1.0,
                    "user_id": meta.get("user_id", "") or "",
                    "scope": meta.get("scope", "project") or "project",
                    "project_id": meta.get("project_id", "") or ""
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
                    "score": 0.9,  # 三层记忆默认较高分数
                    # 添加完整的元数据字段
                    "title": m.title,
                    "keywords": m.keywords if hasattr(m, 'keywords') else [],
                    "tags": m.tags if hasattr(m, 'tags') else [],
                    "description": m.description if hasattr(m, 'description') else "",
                    "summary": m.summary if hasattr(m, 'summary') else "",
                    "content_type": m.content_type if hasattr(m, 'content_type') else "note",
                    "importance": m.importance if hasattr(m, 'importance') else 1.0,
                    "user_id": m.user_id,
                    "scope": m.scope,
                    "project_id": m.project_id if hasattr(m, 'project_id') else ""
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
