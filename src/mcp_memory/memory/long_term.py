import chromadb
from chromadb.config import Settings
from mcp_memory.models.data_models import MemoryItem
from typing import List, Optional, Dict
import os
import uuid
import math
import jieba
from rank_bm25 import BM25Okapi
from datetime import datetime
from filelock import FileLock
from tenacity import retry, stop_after_attempt, wait_exponential, retry_if_exception_type

class MemoryStore:
    def __init__(self, data_path: str = "data/chroma"):
        """
        统一记忆存储（ChromaDB）
        """
        self.data_path = data_path
        self.client = chromadb.PersistentClient(path=data_path)
        # 统一使用一个Collection，通过Metadata区分
        self.collection = self.client.get_or_create_collection("unified_memories")
        
        # 确保锁文件目录存在
        os.makedirs(data_path, exist_ok=True)
        self.lock_path = os.path.join(data_path, "chroma.lock")
        self.lock = FileLock(self.lock_path, timeout=10) # 10秒超时
    
    # 针对 SQLite 锁定的重试策略
    @retry(
        stop=stop_after_attempt(5), 
        wait=wait_exponential(multiplier=0.1, min=0.1, max=2.0),
        retry=retry_if_exception_type((Exception)) # 捕获所有异常，特别是数据库锁定
    )
    def _safe_write(self, operation, *args, **kwargs):
        """
        带文件锁和重试机制的写操作
        """
        with self.lock:
            return operation(*args, **kwargs)

    def save(self, memory: MemoryItem):
        """
        保存记忆：支持去重和强化 (Inspired by MemOS/Mem0)
        如果发现高相似度 (>0.95) 的记忆，则更新该记忆的权重和时间，而非新增。
        """
        # 1. 查重：检索最相似的1条记忆
        try:
            # 只在同项目/同用户范围内查重
            duplicates = self.collection.query(
                query_texts=[memory.content],
                n_results=1,
                where={"$and": [
                    {"user_id": {"$eq": memory.user_id}},
                    {"scope": {"$eq": memory.scope}},
                    {"project_id": {"$eq": memory.project_id or ""}}
                ]}
            )
            
            # 2. 判断相似度 (Chroma 默认 Cosine Distance，越小越相似)
            # 0.05 距离约等于 0.95 相似度
            if duplicates["ids"] and duplicates["distances"][0][0] < 0.05:
                existing_id = duplicates["ids"][0][0]
                existing_meta = duplicates["metadatas"][0][0]
                print(f"Duplicate memory detected (dist={duplicates['distances'][0][0]:.4f}). Reinforcing {existing_id} instead of adding.")
                
                # 强化现有记忆
                self._reinforce_memory(existing_id, existing_meta)
                return existing_id
                
        except Exception as e:
            print(f"Deduplication check failed: {e}")
            # Fallback to insert if check fails

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

        def _do_save():
            self.collection.add(
                documents=[memory.content],
                metadatas=[metadata],
                ids=[memory.memory_id]
            )
        
        try:
            self._safe_write(_do_save)
            return memory.memory_id
        except Exception as e:
            print(f"Error saving memory: {e}")
            raise e

    def _tokenize(self, text: str) -> List[str]:
        """
        中文分词 helper
        """
        return list(jieba.cut_for_search(text))

    def search(self, query: str, user_id: str, project_id: Optional[str] = None, limit: int = 10) -> List[dict]:
        """
        检索记忆：Hybrid Search (Vector + BM25 Keyword Re-ranking)
        
        Score = 0.5 * VectorScore + 0.3 * KeywordScore + 0.1 * Recency + 0.1 * Instinct
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

        # 3. 执行语义检索 (High Recall Phase)
        # 获取 3倍 limit 的候选集，用于后续重排序
        recall_limit = limit * 3
        try:
            results = self.collection.query(
                query_texts=[query],
                n_results=recall_limit,
                where=where_filter
            )
        except Exception as e:
            # Handle possible database corruption or ID errors gracefully
            if "Error finding id" in str(e):
                print(f"Warning: Database index inconsistency detected: {e}")
                return []
            raise e
        
        # 4. 混合重排序 (Hybrid Re-ranking)
        candidates = []
        now = datetime.now()
        
        if results["documents"]:
            docs = results["documents"][0]
            
            # --- Keyword Search Preparation (BM25) ---
            # 仅对召回的候选集构建临时的 BM25 索引，速度很快
            tokenized_corpus = [self._tokenize(doc) for doc in docs]
            bm25 = BM25Okapi(tokenized_corpus)
            tokenized_query = self._tokenize(query)
            # 获取所有候选文档的关键词得分 (归一化到 0-1 可能会比较困难，BM25 是无界的)
            # 这里我们简单获取原始分，后续做 Softmax 或 MinMax 归一化
            bm25_scores = bm25.get_scores(tokenized_query)
            
            # 归一化 BM25 分数
            if len(bm25_scores) > 0:
                max_bm25 = max(bm25_scores)
                if max_bm25 > 0:
                    bm25_scores = [s / max_bm25 for s in bm25_scores]
                else:
                    bm25_scores = [0.0] * len(docs)
            else:
                bm25_scores = []

            for i, doc in enumerate(docs):
                meta = results["metadatas"][0][i]
                mem_id = results["ids"][0][i]
                dist = results["distances"][0][i]
                keyword_score = bm25_scores[i]
                
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
                
                # 1. Relevance (语义): Cosine Distance (0~2) -> Similarity (0~1)
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
                
                # 4. Instinct (本能/习惯)
                access_count = meta.get("access_count", 0)
                instinct_score = min(math.log10(access_count + 1) / 2.0, 1.0)
                
                # 5. Hybrid Score (混合加权)
                # 提高 Keyword 权重以解决"专有名词检索不到"的问题
                # 降低 Recency 权重，避免"只记得最近的"
                final_score = (
                    0.5 * relevance_score + 
                    0.3 * keyword_score + 
                    0.1 * importance_score + 
                    0.1 * instinct_score
                )
                
                # Debug logging (Optional)
                # print(f"ID: {mem_id[:6]} | Sem: {relevance_score:.2f} | KW: {keyword_score:.2f} | Final: {final_score:.2f}")
                
                m_user = meta["user_id"]
                candidates.append({
                    "content": doc,
                    "user_id": m_user,
                    "type": "personal" if m_user == user_id else "collective",
                    "timestamp": meta["timestamp"],
                    "relevance": relevance_score,
                    "keyword_score": keyword_score,
                    "score": final_score,
                    "id": mem_id,
                    "access_count": access_count,
                    "metadata": meta 
                })
        
        # 5. 排序并截取
        candidates.sort(key=lambda x: x["score"], reverse=True)
        top_results = candidates[:limit]
        
        # 6. 记忆强化 (Reinforcement) - NEW
        # 只有真正被选中的 Top 结果才会被强化
        for res in top_results:
            self._reinforce_memory(res["id"], res["metadata"])
            
        return top_results

    def _reinforce_memory(self, memory_id: str, metadata: dict):
        """
        记忆强化：增加 access_count 并更新 last_accessed
        """
        try:
            current_count = metadata.get("access_count", 0)
            new_count = current_count + 1
            
            updates = {
                "access_count": new_count,
                "last_accessed": datetime.now().isoformat()
            }
            
            # 同样使用安全写入
            def _do_update():
                self.collection.update(
                    ids=[memory_id],
                    metadatas=[{**metadata, **updates}]
                )
            self._safe_write(_do_update)
            
        except Exception as e:
            print(f"Reinforce failed for {memory_id}: {e}")

    def delete(self, memory_id: str, user_id: str) -> bool:
        """
        删除记忆：仅允许拥有者删除
        """
        try:
            # 1. 查询记忆是否存在 (读取操作，通常不需要独占锁，但为了防止删的时候被改，可以加锁)
            # 这里的 get 操作是轻量级的
            res = self.collection.get(ids=[memory_id])
            if not res or not res["ids"]:
                return False
            
            # 2. 检查所有权
            # ChromaDB 的 get 结果中，metadatas 是 list[dict]
            meta = res["metadatas"][0]
            if meta["user_id"] != user_id:
                raise PermissionError("Access Denied: You can only delete your own memories.")
            
            # 3. 执行删除 (使用安全写入)
            def _do_delete():
                self.collection.delete(ids=[memory_id])
            
            self._safe_write(_do_delete)
            return True
        except PermissionError:
            raise
        except Exception as e:
            print(f"Delete failed: {e}")
            raise e

