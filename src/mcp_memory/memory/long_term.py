import chromadb
from chromadb.config import Settings
from mcp_memory.models.data_models import MemoryItem
from typing import List, Optional
import os
import uuid
from datetime import datetime

class MemoryStore:
    def __init__(self, data_path: str = "data/chroma"):
        """
        统一记忆存储（ChromaDB）
        """
        self.client = chromadb.PersistentClient(path=data_path)
        # 统一使用一个Collection，通过Metadata区分
        self.collection = self.client.get_or_create_collection("unified_memories")
    
    def save(self, memory: MemoryItem):
        """
        保存记忆：记录 Scope 和 Sharing 状态
        """
        # 确保 last_accessed 有值
        last_accessed_iso = memory.last_accessed.isoformat() if memory.last_accessed else datetime.now().isoformat()
        
        metadata = {
            "user_id": memory.user_id,
            "scope": memory.scope,
            "project_id": memory.project_id or "", # Chroma metadata cannot be None
            "is_shared": str(memory.is_shared),
            "timestamp": memory.timestamp.isoformat(),
            "importance": memory.importance,
            "last_accessed": last_accessed_iso,
            "access_count": memory.access_count
        }

        self.collection.add(
            documents=[memory.content],
            metadatas=[metadata],
            ids=[memory.memory_id]
        )
        return memory.memory_id

    def search(self, query: str, user_id: str, project_id: Optional[str] = None, limit: int = 10) -> List[dict]:
        """
        检索记忆：Generative Agents 加权排序版 + 本能强化机制
        
        Score = alpha * Relevance + beta * Importance + gamma * Recency + delta * Instinct
        
        - Instinct (本能): 基于访问频率 (access_count) 的对数增长
        """
        
        # 1. 投名状检查 (保持不变)
        is_contributor = False
        try:
            check_res = self.collection.get(
                where={"$and": [{"user_id": user_id}, {"is_shared": "True"}]},
                limit=1
            )
            if check_res and check_res["ids"]:
                is_contributor = True
        except Exception:
            is_contributor = False

        # 2. 构造查询条件
        where_filter = {}
        if is_contributor:
            where_filter = {
                "$or": [
                    {"user_id": {"$eq": user_id}},
                    {"is_shared": {"$eq": "True"}}
                ]
            }
        else:
            where_filter = {"user_id": {"$eq": user_id}}

        # 3. 执行语义检索
        recall_limit = limit * 3
        results = self.collection.query(
            query_texts=[query],
            n_results=recall_limit,
            where=where_filter
        )
        
        # 4. 内存重排序 (Re-ranking)
        candidates = []
        now = datetime.now()
        
        # 用于记录被唤醒的记忆ID，以便进行强化
        reinforced_ids = []
        
        if results["documents"]:
            for i, doc in enumerate(results["documents"][0]):
                meta = results["metadatas"][0][i]
                mem_id = results["ids"][0][i]
                dist = results["distances"][0][i]
                
                # Scope 过滤
                m_scope = meta["scope"]
                m_pid = meta.get("project_id", "")
                
                is_scope_match = False
                if m_scope == "global":
                    is_scope_match = True
                elif m_scope == "project" and project_id and m_pid == project_id:
                    is_scope_match = True
                
                if not is_scope_match:
                    continue

                # --- 评分因子计算 ---
                
                # 1. Relevance (语义)
                relevance_score = max(0, 1.0 - dist)
                
                # 2. Importance (重要性)
                importance_val = float(meta.get("importance", 1.0))
                importance_score = min(importance_val / 10.0, 1.0)
                
                # 3. Recency (近时性)
                try:
                    last_access_str = meta.get("last_accessed") or meta["timestamp"]
                    last_access_dt = datetime.fromisoformat(last_access_str)
                    hours_diff = (now - last_access_dt).total_seconds() / 3600
                    recency_score = 0.99 ** max(0, hours_diff)
                except:
                    recency_score = 0.5
                
                # 4. Instinct (本能/习惯) - NEW
                # 基于 access_count，使用对数函数避免分数无限膨胀
                # 假设：访问10次算形成初步习惯，100次算强本能
                # log10(1) = 0, log10(10) = 1, log10(100) = 2
                access_count = meta.get("access_count", 0)
                # 归一化：我们希望 Instinct Score 在 0~1 之间，对应约 0~50 次访问
                # 使用 tanh 或 softsign 函数更平滑，或者简单的 min(log(N+1)/K, 1)
                import math
                instinct_score = min(math.log10(access_count + 1) / 2.0, 1.0) # count=100 -> score=1.0
                
                # 综合评分 (调整权重)
                # Relevance: 0.4 (基础相关性)
                # Recency: 0.2 (新鲜度)
                # Importance: 0.2 (重要性)
                # Instinct: 0.2 (本能/习惯 - 越用越强)
                final_score = (0.4 * relevance_score) + (0.2 * recency_score) + (0.2 * importance_score) + (0.2 * instinct_score)
                
                m_user = meta["user_id"]
                candidates.append({
                    "content": doc,
                    "user_id": m_user,
                    "type": "personal" if m_user == user_id else "collective",
                    "timestamp": meta["timestamp"],
                    "relevance": relevance_score,
                    "recency": recency_score,
                    "importance": importance_score,
                    "instinct": instinct_score,
                    "score": final_score,
                    "id": mem_id,
                    "access_count": access_count,
                    "metadata": meta # 保留原始元数据用于更新
                })
        
        # 5. 排序并截取
        candidates.sort(key=lambda x: x["score"], reverse=True)
        top_results = candidates[:limit]
        
        # 6. 记忆强化 (Reinforcement) - NEW
        # 只有真正被选中的 Top 结果才会被强化
        for res in top_results:
            self._reinforce_memory(res["id"], res["metadata"])
            
        return top_results

    def delete(self, memory_id: str, user_id: str) -> bool:
        """
        删除记忆：仅允许拥有者删除
        """
        try:
            # 1. 查询记忆是否存在
            res = self.collection.get(ids=[memory_id])
            if not res or not res["ids"]:
                return False
            
            # 2. 检查所有权
            # ChromaDB 的 get 结果中，metadatas 是 list[dict]
            meta = res["metadatas"][0]
            if meta["user_id"] != user_id:
                raise PermissionError("Access Denied: You can only delete your own memories.")
            
            # 3. 执行删除
            self.collection.delete(ids=[memory_id])
            return True
        except PermissionError:
            raise
        except Exception as e:
            print(f"Delete failed: {e}")
            raise e
        """
        检索记忆：Generative Agents 加权排序版 + 本能强化机制
        
        Score = alpha * Relevance + beta * Importance + gamma * Recency + delta * Instinct
        
        - Instinct (本能): 基于访问频率 (access_count) 的对数增长
        """
        
        # 1. 投名状检查 (保持不变)
        is_contributor = False
        try:
            check_res = self.collection.get(
                where={"$and": [{"user_id": user_id}, {"is_shared": "True"}]},
                limit=1
            )
            if check_res and check_res["ids"]:
                is_contributor = True
        except Exception:
            is_contributor = False

        # 2. 构造查询条件
        where_filter = {}
        if is_contributor:
            where_filter = {
                "$or": [
                    {"user_id": {"$eq": user_id}},
                    {"is_shared": {"$eq": "True"}}
                ]
            }
        else:
            where_filter = {"user_id": {"$eq": user_id}}

        # 3. 执行语义检索
        recall_limit = limit * 3
        results = self.collection.query(
            query_texts=[query],
            n_results=recall_limit,
            where=where_filter
        )
        
        # 4. 内存重排序 (Re-ranking)
        candidates = []
        now = datetime.now()
        
        # 用于记录被唤醒的记忆ID，以便进行强化
        reinforced_ids = []
        
        if results["documents"]:
            for i, doc in enumerate(results["documents"][0]):
                meta = results["metadatas"][0][i]
                mem_id = results["ids"][0][i]
                dist = results["distances"][0][i]
                
                # Scope 过滤
                m_scope = meta["scope"]
                m_pid = meta.get("project_id", "")
                
                is_scope_match = False
                if m_scope == "global":
                    is_scope_match = True
                elif m_scope == "project" and project_id and m_pid == project_id:
                    is_scope_match = True
                
                if not is_scope_match:
                    continue

                # --- 评分因子计算 ---
                
                # 1. Relevance (语义)
                relevance_score = max(0, 1.0 - dist)
                
                # 2. Importance (重要性)
                importance_val = float(meta.get("importance", 1.0))
                importance_score = min(importance_val / 10.0, 1.0)
                
                # 3. Recency (近时性)
                try:
                    last_access_str = meta.get("last_accessed") or meta["timestamp"]
                    last_access_dt = datetime.fromisoformat(last_access_str)
                    hours_diff = (now - last_access_dt).total_seconds() / 3600
                    recency_score = 0.99 ** max(0, hours_diff)
                except:
                    recency_score = 0.5
                
                # 4. Instinct (本能/习惯) - NEW
                # 基于 access_count，使用对数函数避免分数无限膨胀
                # 假设：访问10次算形成初步习惯，100次算强本能
                # log10(1) = 0, log10(10) = 1, log10(100) = 2
                access_count = meta.get("access_count", 0)
                # 归一化：我们希望 Instinct Score 在 0~1 之间，对应约 0~50 次访问
                # 使用 tanh 或 softsign 函数更平滑，或者简单的 min(log(N+1)/K, 1)
                import math
                instinct_score = min(math.log10(access_count + 1) / 2.0, 1.0) # count=100 -> score=1.0
                
                # 综合评分 (调整权重)
                # Relevance: 0.4 (基础相关性)
                # Recency: 0.2 (新鲜度)
                # Importance: 0.2 (重要性)
                # Instinct: 0.2 (本能/习惯 - 越用越强)
                final_score = (0.4 * relevance_score) + (0.2 * recency_score) + (0.2 * importance_score) + (0.2 * instinct_score)
                
                m_user = meta["user_id"]
                candidates.append({
                    "content": doc,
                    "user_id": m_user,
                    "type": "personal" if m_user == user_id else "collective",
                    "timestamp": meta["timestamp"],
                    "relevance": relevance_score,
                    "recency": recency_score,
                    "importance": importance_score,
                    "instinct": instinct_score,
                    "score": final_score,
                    "id": mem_id,
                    "access_count": access_count,
                    "metadata": meta # 保留原始元数据用于更新
                })
        
        # 5. 排序并截取
        candidates.sort(key=lambda x: x["score"], reverse=True)
        top_results = candidates[:limit]
        
        # 6. 记忆强化 (Reinforcement) - NEW
        # 只有真正被选中的 Top 结果才会被强化
        for res in top_results:
            self._reinforce_memory(res["id"], res["metadata"])
            
        return top_results

    def _reinforce_memory(self, memory_id: str, old_metadata: dict):
        """
        记忆强化：更新访问时间和访问次数
        这是模拟生物学中的“长期增强作用”(LTP)
        """
        try:
            new_count = old_metadata.get("access_count", 0) + 1
            new_last_accessed = datetime.now().isoformat()
            
            # 更新元数据
            # 注意：ChromaDB update 需要传入所有 metadata，否则可能会覆盖（取决于版本）
            # 安全起见，我们修改 old_metadata 并回写
            old_metadata["access_count"] = new_count
            old_metadata["last_accessed"] = new_last_accessed
            
            self.collection.update(
                ids=[memory_id],
                metadatas=[old_metadata]
            )
        except Exception as e:
            print(f"记忆强化失败 ID={memory_id}: {e}")

