"""
三层记忆管理器
提供统一的查询接口，支持分层查询和溯源
"""

from typing import List, Dict, Optional, Any
from datetime import datetime
from mcp_memory.memory.tiered_memory import TieredMemoryStore
from mcp_memory.memory.auto_summarizer_v2 import AutoSummarizerV2
from mcp_memory.models.data_models import (
    MemoryItem, MemoryLink,
    StorageMemoryCreate, ThinkingMemoryCreate, SkillMemoryCreate,
    QueryMemoryResponse
)


class TieredMemoryManager:
    """
    三层记忆管理器
    
    职责：
    1. 提供统一的记忆写入接口
    2. 实现分层查询（skill > thinking > storage）
    3. 支持记忆溯源
    4. 管理自动总结流程
    
    支持两种模式：
    1. 独立模式：使用 TieredMemoryStore（三层独立存储）
    2. 兼容模式：使用外部 MemoryStore（统一存储，通过metadata区分层级）
    """
    
    def __init__(self, memory_store=None, data_path: str = "data/chroma"):
        # 如果提供了外部store，使用兼容模式；否则创建独立的三层存储
        if memory_store is not None:
            self.store = memory_store
            self._using_external_store = True
            self._tiered_store = None
            print(f"[TieredManager] 使用外部store（兼容模式）: {type(memory_store).__name__}")
        else:
            self._tiered_store = TieredMemoryStore(data_path)
            self.store = self._tiered_store
            self._using_external_store = False
            print(f"[TieredManager] 使用内部TieredMemoryStore（独立模式）")
        
        self.summarizer = AutoSummarizerV2(self.store)
        self._initialized = False
    
    async def initialize(self):
        """初始化管理器"""
        if self._initialized:
            return
        
        # 初始化LLM
        await self.summarizer.initialize()
        
        # 启动自动总结
        await self.summarizer.start()
        
        self._initialized = True
        print("[TieredManager] 三层记忆管理器初始化完成")
    
    async def shutdown(self):
        """关闭管理器"""
        await self.summarizer.stop()
        self._initialized = False
        print("[TieredManager] 三层记忆管理器已关闭")
    
    # ========== 写入接口 ==========
    
    def write_storage_memory(
        self,
        content: str,
        user_id: str,
        session_id: str,
        project_id: Optional[str] = None,
        scope: str = "project",
        participants: List[str] = None,
        topic: Optional[str] = None
    ) -> str:
        """
        写入存储记忆（原始对话）
        
        Args:
            content: 原始对话内容
            user_id: 用户ID
            session_id: 会话ID
            project_id: 项目ID
            scope: 作用域
            participants: 参与者
            topic: 主题
        
        Returns:
            memory_id: 记忆ID
        """
        data = StorageMemoryCreate(
            content=content,
            user_id=user_id,
            session_id=session_id,
            project_id=project_id or "",
            scope=scope,
            participants=participants or [],
            topic=topic
        )
        
        memory_id = self.store.create_storage_memory(data)
        print(f"[TieredManager] 存储记忆已写入: {memory_id[:8]}")
        return memory_id
    
    def write_thinking_memory(
        self,
        content: str,
        user_id: str,
        source_memories: List[str],
        summary_type: str = "manual",
        key_points: List[str] = None,
        project_id: Optional[str] = None,
        scope: str = "project"
    ) -> str:
        """
        写入思维记忆（总结）
        
        Args:
            content: 总结内容
            user_id: 用户ID
            source_memories: 源存储记忆ID列表
            summary_type: 总结类型
            key_points: 关键要点
            project_id: 项目ID
            scope: 作用域
        
        Returns:
            memory_id: 记忆ID
        """
        data = ThinkingMemoryCreate(
            content=content,
            user_id=user_id,
            source_memories=source_memories,
            summary_type=summary_type,
            key_points=key_points or [],
            project_id=project_id or "",
            scope=scope
        )
        
        memory_id = self.store.create_thinking_memory(data)
        print(f"[TieredManager] 思维记忆已写入: {memory_id[:8]}")
        return memory_id
    
    def write_skill_memory(
        self,
        content: str,
        user_id: str,
        source_thinking: List[str],
        skill_type: str = "knowledge",
        tags: List[str] = None,
        project_id: Optional[str] = None,
        scope: str = "global"
    ) -> str:
        """
        写入技能记忆（可复用知识）
        
        Args:
            content: 技能描述
            user_id: 用户ID
            source_thinking: 源思维记忆ID列表
            skill_type: 技能类型
            tags: 标签
            project_id: 项目ID
            scope: 作用域
        
        Returns:
            memory_id: 记忆ID
        """
        data = SkillMemoryCreate(
            content=content,
            user_id=user_id,
            source_thinking=source_thinking,
            skill_type=skill_type,
            tags=tags or [],
            project_id=project_id or "",
            scope=scope
        )
        
        memory_id = self.store.create_skill_memory(data)
        print(f"[TieredManager] 技能记忆已写入: {memory_id[:8]}")
        return memory_id
    
    # ========== 查询接口 ==========
    
    def query_memories(
        self,
        query: str,
        user_id: str,
        memory_type: str = "all",
        limit: int = 10,
        days: Optional[int] = None,
        include_sources: bool = False
    ) -> QueryMemoryResponse:
        """
        分层查询记忆
        
        优先级: skill > thinking > storage
        
        Args:
            query: 查询内容
            user_id: 用户ID
            memory_type: 记忆类型过滤 (all/skill/thinking/storage)
            limit: 返回数量限制
            days: 时间范围（最近几天）
            include_sources: 是否包含源记忆
        
        Returns:
            QueryMemoryResponse: 查询结果
        """
        start_time = datetime.now()
        
        # 执行分层查询
        results = self.store.query_memories(
            query=query,
            memory_type=memory_type,
            user_id=user_id,
            limit=limit,
            days=days
        )
        
        # 如果需要溯源，获取源记忆
        if include_sources:
            for result in results:
                if result["memory_type"] in ["thinking", "skill"]:
                    sources = self.store.get_source_memories(result["memory_id"])
                    result["source_memories"] = sources
        
        # 转换为 MemoryItem 列表
        memories = []
        for r in results:
            try:
                item = MemoryItem(
                    memory_id=r["memory_id"],
                    content=r["content"],
                    user_id=r["metadata"].get("user_id", user_id),
                    memory_type=r["memory_type"],
                    scope=r["metadata"].get("scope", "project"),
                    project_id=r["metadata"].get("project_id", ""),
                    is_shared=r["metadata"].get("scope") == "global",
                    timestamp=datetime.fromisoformat(r["timestamp"].replace('Z', '+00:00')) if r.get("timestamp") else datetime.now(),
                    importance=r["metadata"].get("importance", 1.0),
                    source_memories=r["metadata"].get("source_memories", []),
                    tags=r["metadata"].get("tags", []),
                    confidence=r["metadata"].get("confidence", 1.0),
                    verified=r["metadata"].get("verified", False)
                )
                memories.append(item)
            except Exception as e:
                print(f"[TieredManager] 转换记忆失败: {e}")
                continue
        
        # 计算查询时间
        query_time_ms = int((datetime.now() - start_time).total_seconds() * 1000)
        
        return QueryMemoryResponse(
            memories=memories,
            total=len(memories),
            query_time_ms=query_time_ms,
            has_more=len(results) >= limit
        )
    
    def get_memory_detail(
        self,
        memory_id: str,
        include_sources: bool = True,
        include_related: bool = False
    ) -> Optional[Dict[str, Any]]:
        """
        获取记忆详情（支持溯源）
        
        Args:
            memory_id: 记忆ID
            include_sources: 是否包含源记忆
            include_related: 是否包含相关记忆
        
        Returns:
            记忆详情字典
        """
        # 获取记忆基本信息
        memory = self.store.get_memory_by_id(memory_id)
        if not memory:
            return None
        
        detail = {
            "memory": memory,
            "sources": [],
            "related": []
        }
        
        # 获取源记忆
        if include_sources:
            sources = self.store.get_source_memories(memory_id)
            detail["sources"] = sources
        
        # 获取相关记忆（通过图谱）
        if include_related:
            # 获取图谱中的邻居节点
            if memory_id in self.store.graph:
                neighbors = list(self.store.graph.neighbors(memory_id))
                for neighbor_id in neighbors[:5]:  # 限制数量
                    neighbor = self.store.get_memory_by_id(neighbor_id)
                    if neighbor:
                        detail["related"].append(neighbor)
        
        return detail
    
    def trace_memory_origin(
        self,
        memory_id: str,
        max_depth: int = 3
    ) -> List[Dict[str, Any]]:
        """
        追溯记忆的起源（完整的溯源链）
        
        Args:
            memory_id: 记忆ID
            max_depth: 最大追溯深度
        
        Returns:
            溯源链列表（从当前到源头）
        """
        chain = []
        current_id = memory_id
        depth = 0
        
        while current_id and depth < max_depth:
            memory = self.store.get_memory_by_id(current_id)
            if not memory:
                break
            
            chain.append(memory)
            
            # 获取源记忆
            sources = self.store.get_source_memories(current_id)
            if not sources:
                break
            
            # 继续追溯第一个源记忆
            current_id = sources[0]["memory_id"]
            depth += 1
        
        return chain
    
    # ========== 管理接口 ==========
    
    def update_memory(
        self,
        memory_id: str,
        content: Optional[str] = None,
        verified: Optional[bool] = None,
        reason: Optional[str] = None
    ) -> bool:
        """
        更新记忆
        
        Args:
            memory_id: 记忆ID
            content: 新内容
            verified: 验证状态
            reason: 更新原因
        
        Returns:
            是否成功
        """
        success = self.store.update_memory(
            memory_id=memory_id,
            content=content,
            verified=verified,
            reason=reason
        )
        
        if success:
            print(f"[TieredManager] 记忆已更新: {memory_id[:8]}")
        
        return success
    
    def provide_feedback(
        self,
        memory_id: str,
        user_id: str,
        feedback_type: str,
        comment: Optional[str] = None,
        suggested_content: Optional[str] = None
    ) -> bool:
        """
        提供记忆反馈（标记不准确）
        
        Args:
            memory_id: 记忆ID
            user_id: 用户ID
            feedback_type: 反馈类型
            comment: 评论
            suggested_content: 建议内容
        
        Returns:
            是否成功
        """
        try:
            # 获取记忆
            memory = self.store.get_memory_by_id(memory_id)
            if not memory:
                return False
            
            # 更新元数据，记录反馈
            metadata_updates = {
                "feedback_type": feedback_type,
                "feedback_comment": comment or "",
                "feedback_suggested": suggested_content or "",
                "feedback_user": user_id,
                "feedback_time": datetime.now().isoformat(),
                "needs_review": True
            }
            
            # 根据反馈类型处理
            if feedback_type == "inaccurate":
                metadata_updates["confidence"] = 0.3
            elif feedback_type == "outdated":
                metadata_updates["outdated"] = True
            
            # 更新记忆
            collection = self.store._get_collection(memory["memory_type"])
            collection.update(
                ids=[memory_id],
                metadatas=[metadata_updates]
            )
            
            print(f"[TieredManager] 反馈已记录: {memory_id[:8]} ({feedback_type})")
            return True
            
        except Exception as e:
            print(f"[TieredManager] 记录反馈失败: {e}")
            return False
    
    def get_stats(self) -> Dict[str, Any]:
        """获取统计信息"""
        stats = self.store.get_stats()
        return {
            **stats,
            "initialized": self._initialized,
            "summarizer_running": self.summarizer._running
        }
    
    # ========== 快捷方法 ==========
    
    def quick_query(
        self,
        query: str,
        user_id: str,
        limit: int = 5
    ) -> List[str]:
        """
        快速查询（只返回内容列表）
        
        用于AI智能体快速获取上下文
        """
        response = self.query_memories(
            query=query,
            user_id=user_id,
            memory_type="all",
            limit=limit
        )
        
        return [m.content for m in response.memories]
