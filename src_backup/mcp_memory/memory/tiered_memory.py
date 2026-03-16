"""
三层记忆架构实现
- Storage Memory: 原始对话记录
- Thinking Memory: 思维总结
- Skill Memory: 可复用技能
"""

import chromadb
from chromadb.config import Settings
from mcp_memory.models.data_models import (
    MemoryItem, MemoryLink, 
    StorageMemoryCreate, ThinkingMemoryCreate, SkillMemoryCreate
)
from typing import List, Optional, Dict, Any
import os
import uuid
import json
import networkx as nx
from datetime import datetime, timedelta
from filelock import FileLock


class TieredMemoryStore:
    """
    三层记忆存储系统
    """
    
    def __init__(self, data_path: str = "data/chroma"):
        self.data_path = data_path
        self.client = chromadb.PersistentClient(path=data_path)
        
        # 三个独立的集合用于三层记忆
        self.storage_collection = self.client.get_or_create_collection("storage_memories")
        self.thinking_collection = self.client.get_or_create_collection("thinking_memories")
        self.skill_collection = self.client.get_or_create_collection("skill_memories")
        
        # 记忆链接集合
        self.links_collection = self.client.get_or_create_collection("memory_links")
        
        # 文件锁
        os.makedirs(data_path, exist_ok=True)
        self.lock_path = os.path.join(data_path, "tiered_memory.lock")
        self.lock = FileLock(self.lock_path, timeout=10)
        
        # 知识图谱
        self.graph_path = os.path.join(data_path, "tiered_graph.json")
        self.graph = nx.DiGraph()
        self._load_graph()
    
    def _load_graph(self):
        """加载知识图谱"""
        if os.path.exists(self.graph_path):
            try:
                with open(self.graph_path, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    self.graph = nx.node_link_graph(data)
                    if not self.graph.is_directed():
                        self.graph = self.graph.to_directed()
            except Exception as e:
                print(f"[TieredMemory] 加载图谱失败: {e}")
                self.graph = nx.DiGraph()
    
    def _save_graph(self):
        """保存知识图谱"""
        try:
            with self.lock:
                data = nx.node_link_data(self.graph)
                with open(self.graph_path, 'w', encoding='utf-8') as f:
                    json.dump(data, f, ensure_ascii=False)
        except Exception as e:
            print(f"[TieredMemory] 保存图谱失败: {e}")
    
    def _get_collection(self, memory_type: str):
        """根据记忆类型获取对应的集合"""
        if memory_type == "storage":
            return self.storage_collection
        elif memory_type == "thinking":
            return self.thinking_collection
        elif memory_type == "skill":
            return self.skill_collection
        else:
            raise ValueError(f"未知的记忆类型: {memory_type}")
    
    def create_storage_memory(self, data: StorageMemoryCreate) -> str:
        """
        创建存储记忆（原始对话记录）
        """
        memory_id = str(uuid.uuid4())
        timestamp = datetime.now().isoformat()
        
        metadata = {
            "memory_id": memory_id,
            "memory_type": "storage",
            "user_id": data.user_id,
            "session_id": data.session_id,
            "project_id": data.project_id or "",
            "scope": data.scope,
            "timestamp": timestamp,
            "participants": json.dumps(data.participants),
            "topic": data.topic or "",
            "importance": 1.0,
            "access_count": 0
        }
        
        self.storage_collection.add(
            ids=[memory_id],
            documents=[data.content],
            metadatas=[metadata]
        )
        
        # 添加到图谱
        self.graph.add_node(memory_id, type="storage", timestamp=timestamp)
        self._save_graph()
        
        print(f"[TieredMemory] 存储记忆已创建: {memory_id[:8]}")
        return memory_id
    
    def create_thinking_memory(self, data: ThinkingMemoryCreate) -> str:
        """
        创建思维记忆（总结）
        """
        memory_id = str(uuid.uuid4())
        timestamp = datetime.now().isoformat()
        
        metadata = {
            "memory_id": memory_id,
            "memory_type": "thinking",
            "user_id": data.user_id,
            "project_id": data.project_id or "",
            "scope": data.scope,
            "timestamp": timestamp,
            "source_memories": json.dumps(data.source_memories),
            "summary_type": data.summary_type,
            "key_points": json.dumps(data.key_points),
            "confidence": 0.9,
            "version": 1,
            "verified": False,
            "importance": 2.0,
            "access_count": 0
        }
        
        self.thinking_collection.add(
            ids=[memory_id],
            documents=[data.content],
            metadatas=[metadata]
        )
        
        # 创建记忆链接
        for source_id in data.source_memories:
            self._create_link(memory_id, source_id, "summarized_from")
        
        # 添加到图谱
        self.graph.add_node(memory_id, type="thinking", timestamp=timestamp)
        for source_id in data.source_memories:
            self.graph.add_edge(memory_id, source_id, relation="summarized_from")
        self._save_graph()
        
        print(f"[TieredMemory] 思维记忆已创建: {memory_id[:8]}")
        return memory_id
    
    def create_skill_memory(self, data: SkillMemoryCreate) -> str:
        """
        创建技能记忆（可复用知识）
        """
        memory_id = str(uuid.uuid4())
        timestamp = datetime.now().isoformat()
        
        metadata = {
            "memory_id": memory_id,
            "memory_type": "skill",
            "user_id": data.user_id,
            "project_id": data.project_id or "",
            "scope": data.scope,
            "timestamp": timestamp,
            "source_thinking": json.dumps(data.source_thinking),
            "skill_type": data.skill_type,
            "tags": json.dumps(data.tags),
            "usage_count": 0,
            "effectiveness": 1.0,
            "confidence": 0.85,
            "version": 1,
            "verified": False,
            "importance": 3.0,
            "access_count": 0
        }
        
        self.skill_collection.add(
            ids=[memory_id],
            documents=[data.content],
            metadatas=[metadata]
        )
        
        # 创建记忆链接
        for source_id in data.source_thinking:
            self._create_link(memory_id, source_id, "extracted_from")
        
        # 添加到图谱
        self.graph.add_node(memory_id, type="skill", timestamp=timestamp, tags=data.tags)
        for source_id in data.source_thinking:
            self.graph.add_edge(memory_id, source_id, relation="extracted_from")
        self._save_graph()
        
        print(f"[TieredMemory] 技能记忆已创建: {memory_id[:8]}")
        return memory_id
    
    def _create_link(self, source_id: str, target_id: str, link_type: str):
        """创建记忆链接"""
        link_id = str(uuid.uuid4())
        self.links_collection.add(
            ids=[link_id],
            documents=[f"{link_type}:{source_id}->{target_id}"],
            metadatas=[{
                "link_id": link_id,
                "source_id": source_id,
                "target_id": target_id,
                "link_type": link_type,
                "timestamp": datetime.now().isoformat(),
                "confidence": 1.0
            }]
        )
    
    def query_memories(
        self,
        query: str,
        memory_type: str = "all",
        user_id: Optional[str] = None,
        limit: int = 10,
        days: Optional[int] = None
    ) -> List[Dict[str, Any]]:
        """
        分层查询记忆
        优先级: skill > thinking > storage
        """
        results = []
        
        # 构建时间过滤条件
        where_filter = {}
        if user_id:
            where_filter["user_id"] = user_id
        if days:
            cutoff = (datetime.now() - timedelta(days=days)).isoformat()
            # 注意：Chroma的where过滤不支持复杂的日期比较
            # 这里简化处理，实际使用时可能需要后过滤
        
        # 1. 优先查询 skill memories
        if memory_type in ["all", "skill"]:
            try:
                skill_results = self.skill_collection.query(
                    query_texts=[query],
                    n_results=min(limit, 5),
                    where=where_filter if where_filter else None
                )
                results.extend(self._format_results(skill_results, "skill"))
            except Exception as e:
                print(f"[TieredMemory] 查询 skill memories 失败: {e}")
        
        # 2. 查询 thinking memories
        if memory_type in ["all", "thinking"] and len(results) < limit:
            try:
                thinking_results = self.thinking_collection.query(
                    query_texts=[query],
                    n_results=min(limit - len(results), 5),
                    where=where_filter if where_filter else None
                )
                results.extend(self._format_results(thinking_results, "thinking"))
            except Exception as e:
                print(f"[TieredMemory] 查询 thinking memories 失败: {e}")
        
        # 3. 最后查询 storage memories
        if memory_type in ["all", "storage"] and len(results) < limit:
            try:
                storage_results = self.storage_collection.query(
                    query_texts=[query],
                    n_results=min(limit - len(results), 3),
                    where=where_filter if where_filter else None
                )
                results.extend(self._format_results(storage_results, "storage"))
            except Exception as e:
                print(f"[TieredMemory] 查询 storage memories 失败: {e}")
        
        return results[:limit]
    
    def _format_results(self, query_results: Dict, memory_type: str) -> List[Dict[str, Any]]:
        """格式化查询结果"""
        results = []
        ids = query_results.get("ids", [[]])[0]
        documents = query_results.get("documents", [[]])[0]
        metadatas = query_results.get("metadatas", [[]])[0]
        distances = query_results.get("distances", [[]])[0]
        
        for i, memory_id in enumerate(ids):
            if i < len(documents):
                meta = metadatas[i] if i < len(metadatas) else {}
                distance = distances[i] if i < len(distances) else 1.0
                
                results.append({
                    "memory_id": memory_id,
                    "memory_type": memory_type,
                    "content": documents[i],
                    "metadata": meta,
                    "similarity": 1.0 - distance,  # 转换为相似度
                    "timestamp": meta.get("timestamp", "")
                })
        
        return results
    
    def get_memory_by_id(self, memory_id: str, memory_type: Optional[str] = None) -> Optional[Dict[str, Any]]:
        """通过ID获取记忆详情"""
        # 如果指定了类型，直接查询
        if memory_type:
            collection = self._get_collection(memory_type)
            try:
                result = collection.get(ids=[memory_id])
                if result and result["ids"]:
                    return {
                        "memory_id": memory_id,
                        "memory_type": memory_type,
                        "content": result["documents"][0],
                        "metadata": result["metadatas"][0]
                    }
            except:
                pass
        
        # 否则遍历所有类型
        for mtype in ["skill", "thinking", "storage"]:
            try:
                collection = self._get_collection(mtype)
                result = collection.get(ids=[memory_id])
                if result and result["ids"]:
                    return {
                        "memory_id": memory_id,
                        "memory_type": mtype,
                        "content": result["documents"][0],
                        "metadata": result["metadatas"][0]
                    }
            except:
                continue
        
        return None
    
    def get_source_memories(self, memory_id: str) -> List[Dict[str, Any]]:
        """获取记忆的源记忆（用于回溯）"""
        try:
            # 查询链接
            links = self.links_collection.query(
                query_texts=[""],
                where={"source_id": memory_id},
                n_results=100
            )
            
            source_memories = []
            metadatas = links.get("metadatas", [[]])[0]
            
            for meta in metadatas:
                target_id = meta.get("target_id")
                if target_id:
                    memory = self.get_memory_by_id(target_id)
                    if memory:
                        source_memories.append(memory)
            
            return source_memories
        except Exception as e:
            print(f"[TieredMemory] 获取源记忆失败: {e}")
            return []
    
    def update_memory(
        self,
        memory_id: str,
        content: Optional[str] = None,
        verified: Optional[bool] = None,
        reason: Optional[str] = None
    ) -> bool:
        """更新记忆内容"""
        # 先找到记忆
        memory = self.get_memory_by_id(memory_id)
        if not memory:
            return False
        
        memory_type = memory["memory_type"]
        collection = self._get_collection(memory_type)
        
        # 更新元数据
        metadata = memory["metadata"]
        if content:
            metadata["content"] = content
        if verified is not None:
            metadata["verified"] = verified
        metadata["version"] = metadata.get("version", 1) + 1
        metadata["updated_at"] = datetime.now().isoformat()
        if reason:
            metadata["update_reason"] = reason
        
        try:
            collection.update(
                ids=[memory_id],
                documents=[content] if content else None,
                metadatas=[metadata]
            )
            print(f"[TieredMemory] 记忆已更新: {memory_id[:8]}")
            return True
        except Exception as e:
            print(f"[TieredMemory] 更新记忆失败: {e}")
            return False
    
    def get_stats(self) -> Dict[str, int]:
        """获取记忆统计信息"""
        return {
            "storage_count": self.storage_collection.count(),
            "thinking_count": self.thinking_collection.count(),
            "skill_count": self.skill_collection.count(),
            "links_count": self.links_collection.count()
        }
