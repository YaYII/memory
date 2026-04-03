"""
MCP Memory Python SDK

支持本地模式（直接操作数据库）和远程模式（通过HTTP API调用）
"""

import json
import logging
import os
from datetime import datetime
from typing import Any, Dict, List, Optional, Union, Literal

import httpx
from pydantic import BaseModel, Field

logger = logging.getLogger("mcp-memory.sdk")


class WriteMemoryRequest(BaseModel):
    user_id: str = Field(..., description="当前用户ID")
    content: str = Field(..., description="需记忆的内容")
    memory_type: Literal["storage", "thinking", "skill"] = Field("storage", description="记忆类型")
    project_id: Optional[str] = Field(None, description="项目ID")
    scope: Literal["project", "global"] = Field("project", description="记忆作用域")
    source_memories: List[str] = Field(default_factory=list, description="源记忆ID列表")
    session_id: Optional[str] = Field(None, description="对话会话ID")
    tags: List[str] = Field(default_factory=list, description="标签列表")
    title: Optional[str] = Field(None, description="记忆标题")
    keywords: List[str] = Field(default_factory=list, description="关键词列表")


class ReadMemoryRequest(BaseModel):
    user_id: str = Field(..., description="当前用户ID")
    query: str = Field(..., description="查询内容/当前上下文")
    limit: int = Field(10, description="返回记忆数量限制")
    memory_type: Optional[Literal["storage", "thinking", "skill", "all"]] = Field("all", description="记忆类型过滤")
    project_id: Optional[str] = Field(None, description="项目ID")


class DeleteMemoryRequest(BaseModel):
    memory_id: str = Field(..., description="要删除的记忆ID")
    user_id: str = Field(..., description="当前用户ID")


class UpdateMemoryRequest(BaseModel):
    memory_id: str = Field(..., description="要更新的记忆ID")
    user_id: str = Field(..., description="当前用户ID")
    content: str = Field(..., description="更新后的记忆内容")
    reason: Optional[str] = Field(None, description="更新原因")


class MemoryClient:
    """
    MCP Memory 客户端 SDK
    
    支持两种模式：
    - 本地模式：直接操作数据库（需要安装完整的 mcp_memory 包）
    - 远程模式：通过 HTTP API 调用远程服务器
    """
    
    def __init__(
        self,
        mode: Literal["local", "remote"] = "remote",
        base_url: str = "http://127.0.0.1:22888",
        api_key: Optional[str] = None,
        timeout: float = 30.0,
    ):
        """
        初始化 MemoryClient
        
        Args:
            mode: 运行模式，"local" 或 "remote"
            base_url: 远程服务器地址（仅远程模式使用）
            api_key: API 密钥（仅远程模式使用，可选）
            timeout: 请求超时时间（秒）
        """
        self.mode = mode
        self.base_url = base_url.rstrip("/")
        self.api_key = api_key
        self.timeout = timeout
        self._local_initialized = False
        self._memory_manager = None
        self._settings = None
        
        if mode == "local":
            self._init_local()
        else:
            self._client = httpx.Client(
                base_url=self.base_url,
                timeout=timeout,
                headers=self._get_headers(),
            )
    
    def _get_headers(self) -> Dict[str, str]:
        """获取 HTTP 请求头"""
        headers = {
            "Content-Type": "application/json",
        }
        if self.api_key:
            headers["X-API-Key"] = self.api_key
        return headers
    
    def _init_local(self) -> None:
        """初始化本地模式"""
        try:
            from mcp_memory.core.config import settings
            from mcp_memory.memory.manager import MemoryManager
            
            self._settings = settings
            self._memory_manager = MemoryManager()
            self._local_initialized = True
            logger.info("Local mode initialized successfully")
        except ImportError as e:
            raise ImportError(
                "Local mode requires mcp_memory package to be installed. "
                "Please install it first or use remote mode."
            ) from e
    
    def close(self) -> None:
        """关闭客户端连接"""
        if self.mode == "remote" and hasattr(self, "_client"):
            self._client.close()
    
    def __enter__(self) -> "MemoryClient":
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb) -> None:
        self.close()
    
    def write_memory(
        self,
        user_id: str,
        content: str,
        memory_type: Literal["storage", "thinking", "skill"] = "storage",
        project_id: Optional[str] = None,
        scope: Literal["project", "global"] = "project",
        source_memories: Optional[List[str]] = None,
        session_id: Optional[str] = None,
        tags: Optional[List[str]] = None,
        title: Optional[str] = None,
        keywords: Optional[List[str]] = None,
    ) -> Dict[str, Any]:
        """
        写入记忆
        
        Args:
            user_id: 用户ID
            content: 记忆内容
            memory_type: 记忆类型
            project_id: 项目ID
            scope: 作用域
            source_memories: 源记忆ID列表
            session_id: 会话ID
            tags: 标签列表
            title: 记忆标题
            keywords: 关键词列表
            
        Returns:
            写入结果，包含记忆ID
        """
        if self.mode == "local":
            return self._write_memory_local(
                user_id=user_id,
                content=content,
                memory_type=memory_type,
                project_id=project_id,
                scope=scope,
                source_memories=source_memories,
                session_id=session_id,
                tags=tags,
                title=title,
                keywords=keywords,
            )
        else:
            return self._write_memory_remote(
                user_id=user_id,
                content=content,
                memory_type=memory_type,
                project_id=project_id,
                scope=scope,
                source_memories=source_memories,
                session_id=session_id,
                tags=tags,
                title=title,
                keywords=keywords,
            )
    
    def _write_memory_local(
        self,
        user_id: str,
        content: str,
        memory_type: Literal["storage", "thinking", "skill"],
        project_id: Optional[str],
        scope: Literal["project", "global"],
        source_memories: Optional[List[str]],
        session_id: Optional[str],
        tags: Optional[List[str]],
        title: Optional[str],
        keywords: Optional[List[str]],
    ) -> Dict[str, Any]:
        """本地模式写入记忆"""
        memory_id = self._memory_manager.write_memory(
            user_id=user_id,
            content=content,
            project_id=project_id,
            scope=scope,
            title=title,
            tags=tags or [],
            keywords=keywords or [],
        )
        return {"id": memory_id, "status": "success"}
    
    def _write_memory_remote(
        self,
        user_id: str,
        content: str,
        memory_type: Literal["storage", "thinking", "skill"],
        project_id: Optional[str],
        scope: Literal["project", "global"],
        source_memories: Optional[List[str]],
        session_id: Optional[str],
        tags: Optional[List[str]],
        title: Optional[str],
        keywords: Optional[List[str]],
    ) -> Dict[str, Any]:
        """远程模式写入记忆"""
        req_data = WriteMemoryRequest(
            user_id=user_id,
            content=content,
            memory_type=memory_type,
            project_id=project_id,
            scope=scope,
            source_memories=source_memories or [],
            session_id=session_id,
            tags=tags or [],
            title=title,
            keywords=keywords or [],
        ).model_dump(exclude_none=True)
        
        response = self._client.post("/memory/write", json=req_data)
        response.raise_for_status()
        return response.json()
    
    def read_memory(
        self,
        user_id: str,
        query: str,
        limit: int = 10,
        memory_type: Optional[Literal["storage", "thinking", "skill", "all"]] = "all",
        project_id: Optional[str] = None,
    ) -> List[Dict[str, Any]]:
        """
        搜索/读取记忆
        
        Args:
            user_id: 用户ID
            query: 查询内容
            limit: 返回数量限制
            memory_type: 记忆类型过滤
            project_id: 项目ID
            
        Returns:
            记忆列表
        """
        if self.mode == "local":
            return self._read_memory_local(
                user_id=user_id,
                query=query,
                limit=limit,
                memory_type=memory_type,
                project_id=project_id,
            )
        else:
            return self._read_memory_remote(
                user_id=user_id,
                query=query,
                limit=limit,
                memory_type=memory_type,
                project_id=project_id,
            )
    
    def _read_memory_local(
        self,
        user_id: str,
        query: str,
        limit: int,
        memory_type: Optional[str],
        project_id: Optional[str],
    ) -> List[Dict[str, Any]]:
        """本地模式读取记忆"""
        memories, _ = self._memory_manager.read_memory(
            user_id=user_id,
            query=query,
            project_id=project_id,
            limit=limit,
            reinforce=True,
        )
        return memories
    
    def _read_memory_remote(
        self,
        user_id: str,
        query: str,
        limit: int,
        memory_type: Optional[str],
        project_id: Optional[str],
    ) -> List[Dict[str, Any]]:
        """远程模式读取记忆"""
        req_data = ReadMemoryRequest(
            user_id=user_id,
            query=query,
            limit=limit,
            memory_type=memory_type,
            project_id=project_id,
        ).model_dump(exclude_none=True)
        
        response = self._client.post("/memory/read", json=req_data)
        response.raise_for_status()
        return response.json()
    
    def list_memories(
        self,
        query: str = "",
        limit: int = 20,
    ) -> Dict[str, Any]:
        """
        列出记忆
        
        Args:
            query: 搜索关键词（空字符串列出所有）
            limit: 返回数量限制
            
        Returns:
            记忆列表
        """
        if self.mode == "local":
            return self._list_memories_local(query=query, limit=limit)
        else:
            return self._list_memories_remote(query=query, limit=limit)
    
    def _list_memories_local(self, query: str, limit: int) -> Dict[str, Any]:
        """本地模式列出记忆"""
        store = self._memory_manager.store
        items = []
        
        if not query.strip():
            all_docs = store.collection.get(limit=limit)
            for i, mid in enumerate(all_docs.get("ids", [])):
                content = (all_docs.get("documents") or [])[i] if i < len(all_docs.get("documents") or []) else ""
                meta = (all_docs.get("metadatas") or [])[i] if i < len(all_docs.get("metadatas") or []) else {}
                first_line = (content or "").splitlines()[0].strip()
                title = (first_line[:28] + "…") if len(first_line) > 28 else (first_line or f"Memory {str(mid)[:8]}")
                
                def _parse_json_list(raw):
                    if isinstance(raw, list):
                        return raw
                    if isinstance(raw, str):
                        try:
                            parsed = json.loads(raw)
                            return parsed if isinstance(parsed, list) else []
                        except (json.JSONDecodeError, TypeError):
                            pass
                    return []
                
                items.append({
                    "id": mid, "title": title, "content": content,
                    "timestamp": meta.get("timestamp", ""),
                    "scope": meta.get("scope", "project"),
                    "user_id": meta.get("user_id", ""),
                    "match_type": "all",
                    "memory_type": meta.get("memory_type", "storage"),
                    "keywords": _parse_json_list(meta.get("keywords", [])),
                    "tags": _parse_json_list(meta.get("tags", [])),
                    "importance": meta.get("importance", 0.5),
                })
        else:
            results, _ = store.search(query, user_id="sdk", limit=limit, reinforce=False)
            for r in results:
                content = r.get("content", "")
                first_line = content.splitlines()[0].strip() if content else ""
                title = (first_line[:28] + "…") if len(first_line) > 28 else (first_line or f"Memory {r['id'][:8]}")
                meta = r.get("metadata", {})
                
                def _parse_json_list(raw):
                    if isinstance(raw, list):
                        return raw
                    if isinstance(raw, str):
                        try:
                            parsed = json.loads(raw)
                            return parsed if isinstance(parsed, list) else []
                        except (json.JSONDecodeError, TypeError):
                            pass
                    return []
                
                items.append({
                    "id": r["id"], "title": title, "content": content,
                    "timestamp": r.get("timestamp", ""),
                    "scope": meta.get("scope", "project"),
                    "user_id": meta.get("user_id", ""),
                    "match_type": "semantic",
                    "memory_type": meta.get("memory_type", "storage"),
                    "keywords": _parse_json_list(meta.get("keywords", [])),
                    "tags": _parse_json_list(meta.get("tags", [])),
                    "importance": meta.get("importance", 0.5),
                })
        
        return {"items": items}
    
    def _list_memories_remote(self, query: str, limit: int) -> Dict[str, Any]:
        """远程模式列出记忆"""
        params = {
            "query": query,
            "limit": limit,
        }
        response = self._client.get("/dashboard/memory/search", params=params)
        response.raise_for_status()
        return response.json()
    
    def delete_memory(
        self,
        user_id: str,
        memory_id: str,
    ) -> Dict[str, Any]:
        """
        删除记忆
        
        Args:
            user_id: 用户ID
            memory_id: 记忆ID
            
        Returns:
            删除结果
        """
        if self.mode == "local":
            return self._delete_memory_local(user_id=user_id, memory_id=memory_id)
        else:
            return self._delete_memory_remote(user_id=user_id, memory_id=memory_id)
    
    def _delete_memory_local(self, user_id: str, memory_id: str) -> Dict[str, Any]:
        """本地模式删除记忆"""
        success = self._memory_manager.delete_memory(user_id, memory_id)
        if success:
            return {"status": "deleted", "id": memory_id}
        return {"status": "error", "message": "Memory not found or permission denied"}
    
    def _delete_memory_remote(self, user_id: str, memory_id: str) -> Dict[str, Any]:
        """远程模式删除记忆"""
        req_data = DeleteMemoryRequest(
            user_id=user_id,
            memory_id=memory_id,
        ).model_dump()
        
        response = self._client.post("/memory/delete", json=req_data)
        response.raise_for_status()
        return response.json()
    
    def get_memory(
        self,
        memory_id: str,
    ) -> Optional[Dict[str, Any]]:
        """
        获取记忆详情
        
        Args:
            memory_id: 记忆ID
            
        Returns:
            记忆详情，如果不存在返回 None
        """
        if self.mode == "local":
            return self._get_memory_local(memory_id=memory_id)
        else:
            return self._get_memory_remote(memory_id=memory_id)
    
    def _get_memory_local(self, memory_id: str) -> Optional[Dict[str, Any]]:
        """本地模式获取记忆详情"""
        try:
            raw = self._memory_manager.store.collection.get(ids=[memory_id])
            if not raw["ids"]:
                return None
            meta = raw["metadatas"][0]
            return {
                "id": memory_id,
                "content": raw["documents"][0],
                "timestamp": meta.get("timestamp", ""),
                "scope": meta.get("scope", "project"),
                "user_id": meta.get("user_id", ""),
                "memory_type": meta.get("memory_type", "storage"),
                "title": meta.get("title", ""),
                "keywords": meta.get("keywords", []),
            }
        except Exception:
            return None
    
    def _get_memory_remote(self, memory_id: str) -> Optional[Dict[str, Any]]:
        """远程模式获取记忆详情"""
        try:
            response = self._client.get(f"/dashboard/memory/{memory_id}")
            response.raise_for_status()
            return response.json()
        except httpx.HTTPStatusError as e:
            if e.response.status_code == 404:
                return None
            raise
    
    def get_stats(self) -> Dict[str, Any]:
        """
        获取统计信息
        
        Returns:
            统计信息
        """
        if self.mode == "local":
            return self._get_stats_local()
        else:
            return self._get_stats_remote()
    
    def _get_stats_local(self) -> Dict[str, Any]:
        """本地模式获取统计信息"""
        tiered_stats = self._memory_manager.store.get_tiered_stats()
        providers = self._settings.providers if self._settings else []
        
        return {
            "memory_count": tiered_stats["total_count"],
            "tiered_breakdown": {
                "storage": tiered_stats["storage_count"],
                "thinking": tiered_stats["thinking_count"],
                "skill": tiered_stats["skill_count"],
            },
            "llm_enabled": self._settings.has_llm if self._settings else False,
            "providers_count": len(providers),
            "preferred_provider": self._settings.MCP_LLM_PROVIDER if self._settings else None,
            "data_path": self._settings.CHROMA_DATA_PATH if self._settings else None,
        }
    
    def _get_stats_remote(self) -> Dict[str, Any]:
        """远程模式获取统计信息"""
        response = self._client.get("/dashboard/stats")
        response.raise_for_status()
        return response.json()
    
    def reflect(self, user_id: str) -> Dict[str, Any]:
        """
        触发反思
        
        Args:
            user_id: 用户ID
            
        Returns:
            触发结果
        """
        if self.mode == "local":
            return self._reflect_local(user_id=user_id)
        else:
            return self._reflect_remote(user_id=user_id)
    
    def _reflect_local(self, user_id: str) -> Dict[str, Any]:
        """本地模式触发反思"""
        try:
            from mcp_memory.memory.daily_reflection import DailyReflection
            dr = DailyReflection(memory_store=self._memory_manager.store)
            import asyncio
            loop = asyncio.get_event_loop()
            loop.create_task(dr.run_daily_reflection())
            return {
                "status": "started",
                "message": "Autonomous evolution cycle triggered"
            }
        except Exception as e:
            logger.error("Failed to trigger reflection: %s", e)
            return {"status": "error", "message": str(e)}
    
    def _reflect_remote(self, user_id: str) -> Dict[str, Any]:
        """远程模式触发反思"""
        params = {"user_id": user_id}
        response = self._client.post("/memory/reflect", params=params)
        response.raise_for_status()
        return response.json()
    
    def batch_write(
        self,
        memories: List[Dict[str, Any]],
    ) -> Dict[str, Any]:
        """
        批量写入记忆
        
        Args:
            memories: 记忆列表，每个记忆项包含 write_memory 需要的参数
            
        Returns:
            批量写入结果
        """
        results = []
        for mem in memories:
            try:
                result = self.write_memory(**mem)
                results.append({"success": True, "result": result})
            except Exception as e:
                results.append({"success": False, "error": str(e)})
        
        return {
            "total": len(memories),
            "success": sum(1 for r in results if r["success"]),
            "failed": sum(1 for r in results if not r["success"]),
            "results": results,
        }
    
    def batch_delete(
        self,
        user_id: str,
        memory_ids: List[str],
    ) -> Dict[str, Any]:
        """
        批量删除记忆
        
        Args:
            user_id: 用户ID
            memory_ids: 记忆ID列表
            
        Returns:
            批量删除结果
        """
        results = []
        for memory_id in memory_ids:
            try:
                result = self.delete_memory(user_id=user_id, memory_id=memory_id)
                results.append({"success": True, "result": result})
            except Exception as e:
                results.append({"success": False, "error": str(e)})
        
        return {
            "total": len(memory_ids),
            "success": sum(1 for r in results if r["success"]),
            "failed": sum(1 for r in results if not r["success"]),
            "results": results,
        }
    
    def import_memories(
        self,
        file_path: str,
        user_id: str,
    ) -> Dict[str, Any]:
        """
        从JSON文件导入记忆
        
        Args:
            file_path: JSON文件路径
            user_id: 用户ID
            
        Returns:
            导入结果
        """
        if not os.path.exists(file_path):
            return {"status": "error", "message": f"File not found: {file_path}"}
        
        with open(file_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        
        if not isinstance(data, list):
            return {"status": "error", "message": "Invalid JSON format: expected list of memories"}
        
        for mem in data:
            if "user_id" not in mem:
                mem["user_id"] = user_id
        
        return self.batch_write(data)
    
    def export_memories(
        self,
        file_path: str,
        query: str = "",
        limit: int = 100,
    ) -> Dict[str, Any]:
        """
        导出记忆到JSON文件
        
        Args:
            file_path: 输出JSON文件路径
            query: 搜索关键词
            limit: 导出数量限制
            
        Returns:
            导出结果
        """
        result = self.list_memories(query=query, limit=limit)
        items = result.get("items", [])
        
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(items, f, ensure_ascii=False, indent=2, default=str)
        
        return {
            "status": "success",
            "file_path": file_path,
            "exported_count": len(items),
        }

    def list_users(self) -> Dict[str, Any]:
        """
        列出所有用户
        
        Returns:
            用户列表
        """
        if self.mode == "local":
            return self._list_users_local()
        else:
            return self._list_users_remote()
    
    def _list_users_local(self) -> Dict[str, Any]:
        """本地模式列出用户"""
        try:
            users = self._memory_manager.store.get_all_users()
            return {"users": users}
        except Exception as e:
            logger.error("Failed to list users: %s", e)
            return {"users": [], "error": str(e)}
    
    def _list_users_remote(self) -> Dict[str, Any]:
        """远程模式列出用户"""
        response = self._client.get("/users/list")
        response.raise_for_status()
        return response.json()

    def delete_user(self, user_id: str, force: bool = False) -> Dict[str, Any]:
        """
        删除用户及其所有记忆
        
        Args:
            user_id: 用户ID
            force: 是否强制删除
            
        Returns:
            删除结果
        """
        if self.mode == "local":
            return self._delete_user_local(user_id, force)
        else:
            return self._delete_user_remote(user_id, force)
    
    def _delete_user_local(self, user_id: str, force: bool) -> Dict[str, Any]:
        """本地模式删除用户"""
        success = self._memory_manager.store.delete_user(user_id, force=force)
        if success:
            return {"status": "deleted", "user_id": user_id}
        return {"status": "error", "message": "User not found"}
    
    def _delete_user_remote(self, user_id: str, force: bool) -> Dict[str, Any]:
        """远程模式删除用户"""
        params = {"user_id": user_id, "force": force}
        response = self._client.delete("/users/delete", params=params)
        response.raise_for_status()
        return response.json()

    def get_usage(self, user_id: str, period: str = "7d") -> Dict[str, Any]:
        """
        获取用户使用统计
        
        Args:
            user_id: 用户ID
            period: 统计周期: 1d/7d/30d/all
            
        Returns:
            使用统计信息
        """
        if self.mode == "local":
            return self._get_usage_local(user_id, period)
        else:
            return self._get_usage_remote(user_id, period)
    
    def _get_usage_local(self, user_id: str, period: str) -> Dict[str, Any]:
        """本地模式获取使用统计"""
        return self._memory_manager.store.get_user_usage(user_id, period)
    
    def _get_usage_remote(self, user_id: str, period: str) -> Dict[str, Any]:
        """远程模式获取使用统计"""
        params = {"user_id": user_id, "period": period}
        response = self._client.get("/users/usage", params=params)
        response.raise_for_status()
        return response.json()


__all__ = ["MemoryClient", "WriteMemoryRequest", "ReadMemoryRequest", "DeleteMemoryRequest", "UpdateMemoryRequest"]
