import chromadb
from chromadb.config import Settings
from mcp_memory.models.data_models import MemoryItem
from typing import List, Optional, Dict, Set
import os
import uuid
import math
import jieba
import json
import networkx as nx
from rank_bm25 import BM25Okapi
from datetime import datetime
from filelock import FileLock
from tenacity import retry, stop_after_attempt, wait_exponential, retry_if_exception_type

class MemoryStore:
    def __init__(self, data_path: str = "data/chroma"):
        """
        统一记忆存储（ChromaDB + NetworkX Graph）
        """
        self.data_path = data_path
        self.client = chromadb.PersistentClient(path=data_path)
        # 统一使用一个Collection，通过Metadata区分
        self.collection = self.client.get_or_create_collection("unified_memories")
        
        # 确保锁文件目录存在
        os.makedirs(data_path, exist_ok=True)
        self.lock_path = os.path.join(data_path, "chroma.lock")
        self.lock = FileLock(self.lock_path, timeout=10) # 10秒超时
        
        # --- Knowledge Graph Initialization ---
        self.graph_path = os.path.join(data_path, "knowledge_graph.json")
        self.graph = nx.DiGraph() # Use Directed Graph for Hierarchy
        self._load_graph()
    
    def _load_graph(self):
        """加载图谱"""
        if os.path.exists(self.graph_path):
            try:
                with open(self.graph_path, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    self.graph = nx.node_link_graph(data)
                    # Ensure it's a DiGraph if loaded as Graph
                    if not self.graph.is_directed():
                        self.graph = self.graph.to_directed()
            except Exception as e:
                print(f"加载知识图谱失败: {e}")
                self.graph = nx.DiGraph()

    def _save_graph(self):
        """保存图谱"""
        try:
            with self.lock: # Reuse the same lock for graph consistency
                data = nx.node_link_data(self.graph)
                with open(self.graph_path, 'w', encoding='utf-8') as f:
                    json.dump(data, f, ensure_ascii=False)
        except Exception as e:
            print(f"Failed to save knowledge graph: {e}")

    def add_entities_to_graph(self, memory_id: str, entities: List[str], category: Optional[str] = None):
        """
        将实体和记忆ID关联到图谱中，并建立技能树层级
        Structure: Category (Root) -> Entity (Branch) -> Memory (Leaf)
        """
        if not entities:
            return
            
        # 1. 确保分类节点存在 (作为技能树的根)
        root_id = category or "General"
        self.graph.add_node(root_id, type="category", label=root_id)
        
        # 2. 添加记忆节点
        self.graph.add_node(memory_id, type="memory")
        
        for entity in entities:
            # 3. 添加实体节点
            self.graph.add_node(entity, type="entity", label=entity)
            
            # 4. 建立层级关系：Category -> Entity -> Memory
            # 这样在技能树视图 (DAG TD) 下会呈现树状
            self.graph.add_edge(root_id, entity, relation="contains")
            self.graph.add_edge(entity, memory_id, relation="detailed_in")
            
        self._save_graph()

    def get_related_memories_by_graph(self, query_entities: List[str], limit: int = 5) -> List[str]:
        """
        通过图谱进行 2-hop 检索
        QueryEntity -> MemoryA -> RelatedEntity -> MemoryB
        """
        related_memory_ids = set()
        
        for entity in query_entities:
            if entity in self.graph:
                # 1-hop: 直接包含该实体的记忆
                neighbors = list(self.graph.neighbors(entity))
                for n in neighbors:
                    if self.graph.nodes[n].get("type") == "memory":
                        related_memory_ids.add(n)
                        
                # 2-hop: 通过共享实体关联的记忆 (EntityA -> MemoryA -> EntityB -> MemoryB)
                # 这是一个简化的协同过滤推荐
                # 暂时只做 1-hop 以保证性能，2-hop 可以在未来扩展
        
        return list(related_memory_ids)[:limit]

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

    # 用户画像关键词 (User Profile Heuristics)
    PROFILE_KEYWORDS = ["我喜欢", "我偏好", "我不喜欢", "我的习惯", "总是", "不要", "必须", "要求", "规定", "建议", "My preference", "I like", "I prefer"]

    def _is_profile_content(self, text: str) -> bool:
        """
        判断是否为用户画像相关内容
        """
        return any(kw in text for kw in self.PROFILE_KEYWORDS)

    def save(self, memory: MemoryItem):
        """
        保存记忆：支持去重和强化 (Inspired by MemOS/Mem0)
        如果发现高相似度 (>0.95) 的记忆，则更新该记忆的权重和时间，而非新增。
        """
        # 0. 用户画像检测
        is_profile = self._is_profile_content(memory.content)
        
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
            "is_profile": str(is_profile),
            "timestamp": memory.timestamp.isoformat(),
            "importance": memory.importance,
            "last_accessed": last_accessed_iso,
            "access_count": memory.access_count,
            # 三层记忆支持
            "memory_type": memory.memory_type or "storage",
            "source_memories": json.dumps(memory.source_memories or [], ensure_ascii=False),
            "summary_type": memory.summary_type or "",
            "skill_type": memory.skill_type or "",
            "verified": str(memory.verified) if memory.verified is not None else "False",
            "confidence": memory.confidence or 1.0
        }

        def _do_save():
            self.collection.add(
                documents=[memory.content],
                metadatas=[metadata],
                ids=[memory.memory_id]
            )
        
        try:
            self._safe_write(_do_save)
            
            # 同步添加到知识图谱
            self._add_memory_to_graph(memory)
            
            return memory.memory_id
        except Exception as e:
            print(f"Error saving memory: {e}")
    
    def _add_memory_to_graph(self, memory: MemoryItem):
        """
        将记忆添加到知识图谱，确保记忆和图谱数量一致
        """
        try:
            memory_id = memory.memory_id
            
            # 检查节点是否已存在
            if memory_id in self.graph:
                return
            
            # 添加记忆节点
            self.graph.add_node(
                memory_id,
                type="memory",
                label=memory.content[:30] + "..." if len(memory.content) > 30 else memory.content,
                timestamp=memory.timestamp.isoformat() if memory.timestamp else datetime.now().isoformat(),
                user_id=memory.user_id,
                scope=memory.scope
            )
            
            # 根据内容自动分类并连接到分类节点
            category = self._categorize_memory(memory.content)
            if category:
                # 确保分类节点存在
                if category not in self.graph:
                    self.graph.add_node(category, type="category", label=category)
                # 建立关系
                self.graph.add_edge(category, memory_id, relation="contains")
            
            self._save_graph()
            print(f"[MemoryStore] 记忆已添加到图谱: {memory_id[:8]}")
            
        except Exception as e:
            print(f"[MemoryStore] 添加记忆到图谱失败: {e}")
    
    def _categorize_memory(self, content: str) -> Optional[str]:
        """
        根据内容自动分类记忆
        """
        content_lower = content.lower()
        
        # 编程相关
        if any(k in content_lower for k in ["python", "java", "code", "function", "api", "class", "method", "git", "docker", "programming", "coding"]):
            return "Coding"
        # 配置相关
        elif any(k in content_lower for k in ["config", "env", "port", "host", "setting", "setup", "configuration"]):
            return "Config"
        # 用户画像
        elif any(k in content_lower for k in ["user", "profile", "preference", "like", "dislike", "习惯", "偏好"]):
            return "Personal"
        # 三层记忆类型
        elif "skill" in content_lower or "技能" in content:
            return "Coding"  # 技能记忆默认归为编程
        elif "thinking" in content_lower or "思维" in content or "总结" in content:
            return "General"
        
        return "General"

    def _tokenize(self, text: str) -> List[str]:
        """
        中文分词 helper
        """
        return list(jieba.cut_for_search(text))

    def _fallback_extract_entities(self, text: str) -> List[str]:
        """
        [Fallback] 无 LLM 时的简单实体提取逻辑
        使用正则匹配代码相关的关键信息：文件名、路径、变量名、技术栈
        """
        import re
        entities = set()
        
        # 1. 匹配路径和文件名 (e.g., src/main.py, config.json)
        paths = re.findall(r'[a-zA-Z0-9_\-\./]+\.[a-zA-Z0-9]+', text)
        entities.update(paths)
        
        # 2. 匹配大驼峰/小驼峰 (可能是类名或变量名)
        camel_cases = re.findall(r'\b[A-Z][a-z]+(?:[A-Z][a-z]+)+\b|\b[a-z]+(?:[A-Z][a-z]+)+\b', text)
        entities.update(camel_cases)
        
        # 3. 匹配全大写 (可能是常量或配置项)
        uppers = re.findall(r'\b[A-Z][A-Z0-9_]{3,}\b', text)
        entities.update(uppers)
        
        # 4. 常见的技术栈关键词
        tech_keywords = ["Python", "JavaScript", "FastAPI", "Docker", "NVIDIA", "CUDA", "PyTorch", "React", "Vue", "MCP", "ChromaDB"]
        for kw in tech_keywords:
            if kw.lower() in text.lower():
                entities.add(kw)
                
        return list(entities)

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
            
            # --- Knowledge Graph Retrieval (2-hop) ---
            # 提取 query 中的实体 (使用 jieba 简单分词，或者复用 cognitive 的 entity extraction)
            # 这里为了性能，我们直接使用 query 的 token 作为潜在实体
            query_tokens = self._tokenize(query)
            graph_related_ids = self.get_related_memories_by_graph(query_tokens, limit=5)
            
            if graph_related_ids:
                try:
                    graph_results = self.collection.get(ids=graph_related_ids)
                    if graph_results["ids"]:
                        g_ids = graph_results["ids"]
                        g_docs = graph_results["documents"]
                        g_metas = graph_results["metadatas"]
                        
                        existing_ids = set(results["ids"][0]) if results["ids"] else set()
                        
                        for i, pid in enumerate(g_ids):
                            if pid not in existing_ids:
                                if not results["ids"]:
                                    results = {"ids": [[]], "documents": [[]], "metadatas": [[]], "distances": [[]]}
                                
                                results["ids"][0].append(pid)
                                results["documents"][0].append(g_docs[i])
                                results["metadatas"][0].append(g_metas[i])
                                # 给 Graph Result 一个不错的权重
                                results["distances"][0].append(0.1)
                except Exception as e:
                    print(f"Graph retrieval error: {e}")

            # --- User Profile Injection (Context Injection) ---
            # 总是尝试获取当前用户的画像 (Profile)，无论 query 是什么
            # 限制 3 条，避免 context 过长
            try:
                profile_results = self.collection.get(
                    where={"$and": [
                        where_filter,
                        {"is_profile": "True"}
                    ]},
                    limit=3,
                    # ChromaDB 的 get 默认不排序，我们尽量获取最近的
                    # 但 get API 不支持 sort，所以这里只是获取任意 3 条
                    # 理想情况下应该用 query 但那样会受语义距离影响
                )
                
                # 手动将 profile 结果合并到 results 中 (如果它们不在 results 里)
                if profile_results["ids"]:
                    # 这里结构不同，get 返回的是 list，query 返回的是 list of list
                    p_ids = profile_results["ids"]
                    p_docs = profile_results["documents"]
                    p_metas = profile_results["metadatas"]
                    
                    # 检查是否已存在
                    existing_ids = set(results["ids"][0]) if results["ids"] else set()
                    
                    for i, pid in enumerate(p_ids):
                        if pid not in existing_ids:
                            # 模拟添加到 results 的结构中
                            if not results["ids"]:
                                results = {"ids": [[]], "documents": [[]], "metadatas": [[]], "distances": [[]]}
                            
                            results["ids"][0].append(pid)
                            results["documents"][0].append(p_docs[i])
                            results["metadatas"][0].append(p_metas[i])
                            # 给 Profile 一个极小的 distance (极大相似度) 确保它被选中
                            results["distances"][0].append(0.0) 
            except Exception as e:
                print(f"Profile injection warning: {e}")

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

    def update_memory_content(self, memory_id: str, user_id: str, content: str) -> bool:
        """
        更新记忆内容
        注意：暂时移除权限检查，因为系统目前没有登录功能
        """
        try:
            res = self.collection.get(ids=[memory_id])
            if not res or not res["ids"]:
                return False

            meta = res["metadatas"][0]
            # 暂时注释掉权限检查
            # if meta["user_id"] != user_id:
            #     raise PermissionError("Access Denied: You can only update your own memories.")

            updated_meta = {**meta, "timestamp": datetime.now().isoformat(), "last_accessed": datetime.now().isoformat()}

            def _do_update():
                self.collection.update(
                    ids=[memory_id],
                    documents=[content],
                    metadatas=[updated_meta]
                )
            self._safe_write(_do_update)
            return True
        except Exception as e:
            print(f"Update failed: {e}")
            raise e

    def update_memory_metadata(self, memory_id: str, metadata: dict) -> bool:
        """
        更新记忆元数据（不修改内容）
        用于标记记忆处理状态等
        """
        try:
            res = self.collection.get(ids=[memory_id])
            if not res or not res["ids"]:
                return False

            existing_meta = res["metadatas"][0] if res["metadatas"] else {}
            updated_meta = {**existing_meta, **metadata}

            def _do_update():
                self.collection.update(
                    ids=[memory_id],
                    metadatas=[updated_meta]
                )
            self._safe_write(_do_update)
            return True
        except Exception as e:
            print(f"[MemoryStore] 更新元数据失败: {e}")
            return False

    def get_merged_memories(self, user_id: str = None, limit: int = 50) -> List[Dict]:
        """
        查询合并的记忆
        
        返回两类记忆：
        1. 合并后的增强版记忆 (is_merged_memory=True)
        2. 被合并的源记忆 (merge_status=merged_into)
        
        Args:
            user_id: 用户ID（可选，不指定则返回所有）
            limit: 返回数量限制
            
        Returns:
            合并记忆列表
        """
        try:
            results = []
            
            # 获取所有记忆
            all_memories = self.collection.get(limit=limit * 2)  # 获取更多以便筛选
            ids = all_memories.get("ids", [])
            docs = all_memories.get("documents", [])
            metas = all_memories.get("metadatas", [])
            
            for i in range(len(ids)):
                meta = metas[i] if i < len(metas) else {}
                
                # 检查是否是合并相关的记忆
                is_merged = meta.get("is_merged_memory", False)
                merge_status = meta.get("merge_status", "")
                
                if is_merged or merge_status == "merged_into":
                    # 如果指定了用户ID，检查是否匹配
                    if user_id and meta.get("user_id") != user_id:
                        continue
                    
                    results.append({
                        "id": ids[i],
                        "content": docs[i] if i < len(docs) else "",
                        "metadata": meta,
                        "type": "merged_enhanced" if is_merged else "merged_source",
                        "created_at": meta.get("timestamp", ""),
                        "merged_at": meta.get("merged_at", meta.get("merge_time", "")),
                        "merged_count": meta.get("merged_count", 0),
                        "merged_from": meta.get("merged_from", []),
                        "merged_into_id": meta.get("merged_into_id", ""),
                        "merge_reason": meta.get("merge_reason", "")
                    })
            
            # 按合并时间排序
            results.sort(key=lambda x: x.get("merged_at", ""), reverse=True)
            
            return results[:limit]
            
        except Exception as e:
            print(f"[MemoryStore] 查询合并记忆失败: {e}")
            return []

    def get_merge_chain(self, memory_id: str) -> Dict:
        """
        获取记忆的合并链
        
        追踪一个记忆的所有合并关系：
        - 如果是合并后的记忆，返回所有源记忆
        - 如果是源记忆，返回合并后的目标记忆
        
        Args:
            memory_id: 记忆ID
            
        Returns:
            合并链信息
        """
        try:
            # 获取记忆详情
            res = self.collection.get(ids=[memory_id])
            if not res or not res["ids"]:
                return {"error": "记忆不存在"}
            
            meta = res["metadatas"][0] if res["metadatas"] else {}
            content = res["documents"][0] if res["documents"] else ""
            
            result = {
                "memory_id": memory_id,
                "content_preview": content[:200] if content else "",
                "is_merged_memory": meta.get("is_merged_memory", False),
                "merge_status": meta.get("merge_status", ""),
                "merged_count": meta.get("merged_count", 0),
                "merged_at": meta.get("merged_at", ""),
                "merge_reason": meta.get("merge_reason", ""),
                "sources": [],
                "target": None
            }
            
            # 如果是合并后的记忆，获取所有源记忆
            if result["is_merged_memory"]:
                source_ids = meta.get("merged_from", [])
                for sid in source_ids:
                    try:
                        sres = self.collection.get(ids=[sid])
                        if sres and sres["ids"]:
                            result["sources"].append({
                                "id": sid,
                                "content_preview": sres["documents"][0][:200] if sres["documents"] else "",
                                "metadata": sres["metadatas"][0] if sres["metadatas"] else {}
                            })
                    except Exception:
                        pass
            
            # 如果是被合并的源记忆，获取目标记忆
            elif result["merge_status"] == "merged_into":
                target_id = meta.get("merged_into_id", "")
                if target_id:
                    try:
                        tres = self.collection.get(ids=[target_id])
                        if tres and tres["ids"]:
                            result["target"] = {
                                "id": target_id,
                                "content_preview": tres["documents"][0][:200] if tres["documents"] else "",
                                "metadata": tres["metadatas"][0] if tres["metadatas"] else {}
                            }
                    except Exception:
                        pass
            
            return result
            
        except Exception as e:
            print(f"[MemoryStore] 获取合并链失败: {e}")
            return {"error": str(e)}

    # ==================== 三层记忆系统扩展 ====================
    
    def save_storage_memory(self, content: str, user_id: str, session_id: str = None,
                           topic: str = None, participants: List[str] = None,
                           scope: str = "project", project_id: str = None) -> str:
        """
        保存存储记忆（原始对话记录）
        """
        memory = MemoryItem(
            content=content,
            user_id=user_id,
            memory_type="storage",
            scope=scope,
            project_id=project_id or "",
            is_shared=False,
            session_id=session_id,
            tags=[topic] if topic else []
        )
        memory_id = self.save(memory)
        
        # 添加到图谱
        if topic:
            self.add_entities_to_graph(memory_id, [topic], category="Session")
        
        return memory_id
    
    def save_thinking_memory(self, content: str, user_id: str, source_memories: List[str],
                            summary_type: str = "manual", key_points: List[str] = None,
                            scope: str = "project", project_id: str = None,
                            confidence: float = 0.9) -> str:
        """
        保存思维记忆（总结）
        """
        memory = MemoryItem(
            content=content,
            user_id=user_id,
            memory_type="thinking",
            scope=scope,
            project_id=project_id or "",
            is_shared=False,
            source_memories=source_memories,
            summary_type=summary_type,
            confidence=confidence
        )
        memory_id = self.save(memory)
        
        # 在图谱中建立链接
        for source_id in source_memories:
            self.graph.add_edge(memory_id, source_id, relation="summarized_from")
        self._save_graph()
        
        return memory_id
    
    def save_skill_memory(self, content: str, user_id: str, source_thinking: List[str],
                         skill_type: str = "knowledge", tags: List[str] = None,
                         scope: str = "global", project_id: str = "global",
                         confidence: float = 0.95, verified: bool = False) -> str:
        """
        保存技能记忆（可复用知识）
        """
        memory = MemoryItem(
            content=content,
            user_id=user_id,
            memory_type="skill",
            scope=scope,
            project_id=project_id or "global",
            is_shared=True,
            source_memories=source_thinking,
            skill_type=skill_type,
            tags=tags or [],
            confidence=confidence,
            verified=verified
        )
        memory_id = self.save(memory)
        
        # 在图谱中建立链接
        for source_id in source_thinking:
            self.graph.add_edge(memory_id, source_id, relation="extracted_from")
        
        # 添加技能标签到图谱
        if tags:
            self.add_entities_to_graph(memory_id, tags, category=skill_type)
        
        return memory_id
    
    def query_by_type(self, query: str, memory_type: str = "all", 
                      user_id: str = None, limit: int = 10) -> List[dict]:
        """
        按记忆类型查询
        memory_type: "storage", "thinking", "skill", "all"
        """
        where_conditions = []
        
        if user_id:
            where_conditions.append({"user_id": {"$eq": user_id}})
        
        if memory_type != "all":
            where_conditions.append({"memory_type": {"$eq": memory_type}})
        
        # 构建where_filter，多个条件使用$and
        if len(where_conditions) == 0:
            where_filter = None
        elif len(where_conditions) == 1:
            where_filter = where_conditions[0]
        else:
            where_filter = {"$and": where_conditions}
        
        try:
            # 如果查询为空，使用get方法获取所有匹配的记忆
            if not query or query.strip() == "":
                results = self.collection.get(
                    where=where_filter,
                    limit=limit
                )
                
                memories = []
                if results and results.get("ids"):
                    for i, doc_id in enumerate(results["ids"]):
                        meta = results["metadatas"][i]
                        
                        memories.append({
                            "memory_id": doc_id,
                            "content": results["documents"][i],
                            "memory_type": meta.get("memory_type", "storage"),
                            "similarity": 1.0,
                            "timestamp": meta.get("timestamp"),
                            "user_id": meta.get("user_id"),
                            "scope": meta.get("scope"),
                            "project_id": meta.get("project_id"),
                            "confidence": float(meta.get("confidence", 1.0)),
                            "verified": meta.get("verified") == "True",
                            "skill_type": meta.get("skill_type"),
                            "summary_type": meta.get("summary_type"),
                            "source_memories": json.loads(meta.get("source_memories", "[]"))
                        })
                
                return memories
            
            # 有查询文本时使用query方法
            results = self.collection.query(
                query_texts=[query],
                n_results=limit,
                where=where_filter
            )
            
            memories = []
            for i, doc_id in enumerate(results["ids"][0]):
                meta = results["metadatas"][0][i]
                distance = results["distances"][0][i] if results.get("distances") else 0
                
                memories.append({
                    "memory_id": doc_id,
                    "content": results["documents"][0][i],
                    "memory_type": meta.get("memory_type", "storage"),
                    "similarity": 1.0 - distance,
                    "timestamp": meta.get("timestamp"),
                    "user_id": meta.get("user_id"),
                    "scope": meta.get("scope"),
                    "project_id": meta.get("project_id"),
                    "confidence": float(meta.get("confidence", 1.0)),
                    "verified": meta.get("verified") == "True",
                    "skill_type": meta.get("skill_type"),
                    "summary_type": meta.get("summary_type"),
                    "source_memories": json.loads(meta.get("source_memories", "[]"))
                })
            
            return memories
        except Exception as e:
            print(f"Query by type failed: {e}")
            return []
    
    def get_tiered_stats(self, user_id: str = None) -> dict:
        """
        获取三层记忆统计
        """
        try:
            # 获取所有记忆
            where_filter = {"user_id": {"$eq": user_id}} if user_id else None
            all_memories = self.collection.get(where=where_filter)
            
            stats = {
                "storage_count": 0,
                "thinking_count": 0,
                "skill_count": 0,
                "total_count": 0
            }
            
            if all_memories and all_memories.get("metadatas"):
                for meta in all_memories["metadatas"]:
                    mem_type = meta.get("memory_type", "storage")
                    if mem_type == "storage":
                        stats["storage_count"] += 1
                    elif mem_type == "thinking":
                        stats["thinking_count"] += 1
                    elif mem_type == "skill":
                        stats["skill_count"] += 1
                    stats["total_count"] += 1
            
            return stats
        except Exception as e:
            print(f"Get tiered stats failed: {e}")
            return {"storage_count": 0, "thinking_count": 0, "skill_count": 0, "total_count": 0}
    
    def get_source_memories(self, memory_id: str) -> List[dict]:
        """
        获取记忆的源记忆（用于溯源）
        """
        try:
            # 从图谱获取源记忆
            if memory_id in self.graph:
                predecessors = list(self.graph.predecessors(memory_id))
                source_memories = []
                for pred_id in predecessors:
                    edge_data = self.graph.get_edge_data(memory_id, pred_id)
                    if edge_data and edge_data.get("relation") in ["summarized_from", "extracted_from"]:
                        # 获取源记忆内容
                        res = self.collection.get(ids=[pred_id])
                        if res and res["ids"]:
                            source_memories.append({
                                "memory_id": pred_id,
                                "content": res["documents"][0] if res.get("documents") else "",
                                "memory_type": res["metadatas"][0].get("memory_type", "storage") if res.get("metadatas") else "storage"
                            })
                return source_memories
            return []
        except Exception as e:
            print(f"Get source memories failed: {e}")
            return []
    
    def migrate_from_tiered_store(self, tiered_store):
        """
        从 TieredMemoryStore 迁移数据到统一存储
        """
        migrated = {"storage": 0, "thinking": 0, "skill": 0}
        
        try:
            # 迁移 storage memories
            storage_data = tiered_store.storage_collection.get()
            if storage_data and storage_data["ids"]:
                for i, mem_id in enumerate(storage_data["ids"]):
                    meta = storage_data["metadatas"][i]
                    memory = MemoryItem(
                        memory_id=mem_id,
                        content=storage_data["documents"][i],
                        user_id=meta.get("user_id", "unknown"),
                        memory_type="storage",
                        scope=meta.get("scope", "project"),
                        project_id=meta.get("project_id") or "",
                        is_shared=False,
                        timestamp=datetime.fromisoformat(meta["timestamp"]) if meta.get("timestamp") else None
                    )
                    try:
                        self.save(memory)
                        migrated["storage"] += 1
                    except Exception as e:
                        print(f"Failed to migrate storage memory {mem_id}: {e}")
            
            # 迁移 thinking memories
            thinking_data = tiered_store.thinking_collection.get()
            if thinking_data and thinking_data["ids"]:
                for i, mem_id in enumerate(thinking_data["ids"]):
                    meta = thinking_data["metadatas"][i]
                    memory = MemoryItem(
                        memory_id=mem_id,
                        content=thinking_data["documents"][i],
                        user_id=meta.get("user_id", "unknown"),
                        memory_type="thinking",
                        scope=meta.get("scope", "project"),
                        project_id=meta.get("project_id") or "",
                        is_shared=False,
                        source_memories=json.loads(meta.get("source_memories", "[]")),
                        summary_type=meta.get("summary_type"),
                        timestamp=datetime.fromisoformat(meta["timestamp"]) if meta.get("timestamp") else None
                    )
                    try:
                        self.save(memory)
                        migrated["thinking"] += 1
                    except Exception as e:
                        print(f"Failed to migrate thinking memory {mem_id}: {e}")
            
            # 迁移 skill memories
            skill_data = tiered_store.skill_collection.get()
            if skill_data and skill_data["ids"]:
                for i, mem_id in enumerate(skill_data["ids"]):
                    meta = skill_data["metadatas"][i]
                    memory = MemoryItem(
                        memory_id=mem_id,
                        content=skill_data["documents"][i],
                        user_id=meta.get("user_id", "unknown"),
                        memory_type="skill",
                        scope=meta.get("scope", "global"),
                        project_id=meta.get("project_id") or "global",
                        is_shared=True,
                        skill_type=meta.get("skill_type", "knowledge"),
                        tags=json.loads(meta.get("tags", "[]")),
                        verified=meta.get("verified", "False") == "True",
                        timestamp=datetime.fromisoformat(meta["timestamp"]) if meta.get("timestamp") else None
                    )
                    try:
                        self.save(memory)
                        migrated["skill"] += 1
                    except Exception as e:
                        print(f"Failed to migrate skill memory {mem_id}: {e}")
            
            print(f"Migration completed: {migrated}")
            return migrated
        except Exception as e:
            print(f"Migration failed: {e}")
            return migrated
