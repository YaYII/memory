"""
统一记忆存储层 (ChromaDB + NetworkX Graph + BM25)

修复记录:
- [P0] 移除 FileLock，依赖 ChromaDB 自身并发管理
- [P1] search() 添加 reinforce 参数，后台扫描可禁用强化
- [P1] 修复 get_source_memories() 重复定义，合并为一个方法
- [P2] 真正的 BM25 预建索引（增量更新），不再每次搜索临时建索引
- [P2] Profile 注入改为独立返回，不再污染搜索结果排序
- [P2] 评分公式修正：同时包含 Recency 和 Importance
- [P3] 补充类型注解
- [P3] 细化异常处理
"""

import logging
import chromadb
from chromadb.config import Settings as ChromaSettings
from mcp_memory.models.data_models import MemoryItem
from typing import List, Optional, Dict, Tuple, Set, TypedDict
import os
import uuid
import math
import jieba
import json
import re
import networkx as nx
from rank_bm25 import BM25Okapi
from datetime import datetime
from tenacity import retry, stop_after_attempt, wait_exponential


class SearchResult(TypedDict, total=False):
    """搜索结果类型定义"""
    id: str
    content: str
    user_id: str
    score: float
    timestamp: str
    scope: str
    project_id: str
    memory_type: str
    importance: float
    access_count: int
    agent_processed: bool
    profiles_injected: int
    capabilities_applied: List[str]


class ProfileResult(TypedDict, total=False):
    """Profile 结果类型定义"""
    id: str
    content: str
    metadata: Dict


logger = logging.getLogger("mcp-memory.memory.store")


class MemoryStore:
    """统一记忆存储（ChromaDB + NetworkX Graph + BM25）"""

    def __init__(self, data_path: str = "data/chroma") -> None:
        self.data_path = data_path
        os.makedirs(data_path, exist_ok=True)

        self.client = chromadb.PersistentClient(path=data_path)
        self.collection = self.client.get_or_create_collection("unified_memories")

        # Knowledge Graph
        self.graph_path = os.path.join(data_path, "knowledge_graph.json")
        self.graph: nx.DiGraph = nx.DiGraph()
        self._graph_dirty = False
        self._load_graph()

        # BM25 预建索引
        self._bm25_docs: List[str] = []
        self._bm25_ids: List[str] = []
        self._bm25_index: Optional[BM25Okapi] = None
        self._rebuild_bm25_index()

    # ========== Knowledge Graph ==========

    def _load_graph(self) -> None:
        """加载图谱"""
        if os.path.exists(self.graph_path):
            try:
                with open(self.graph_path, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    loaded = nx.node_link_graph(data)
                    self.graph = loaded if loaded.is_directed() else loaded.to_directed()
            except (json.JSONDecodeError, ValueError) as e:
                logger.warning(f"[MemoryStore] 加载知识图谱失败: {e}")
                self.graph = nx.DiGraph()

    def _save_graph(self) -> None:
        """保存图谱到磁盘"""
        if not self._graph_dirty:
            return
        try:
            data = nx.node_link_data(self.graph)
            tmp_path = self.graph_path + ".tmp"
            with open(tmp_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False)
            # Atomic rename
            os.replace(tmp_path, self.graph_path)
            self._graph_dirty = False
        except (IOError, OSError) as e:
            logger.warning(f"[MemoryStore] 保存知识图谱失败: {e}")

    def flush_graph(self) -> None:
        """手动 flush 图谱（供定时任务调用）"""
        self._save_graph()

    def add_entities_to_graph(self, memory_id: str, entities: List[str], category: Optional[str] = None) -> None:
        """将实体和记忆 ID 关联到图谱中"""
        if not entities:
            return

        root_id = category or "General"
        self.graph.add_node(root_id, type="category", label=root_id)
        self.graph.add_node(memory_id, type="memory")

        for entity in entities:
            self.graph.add_node(entity, type="entity", label=entity)
            self.graph.add_edge(root_id, entity, relation="contains")
            self.graph.add_edge(entity, memory_id, relation="detailed_in")

        self._graph_dirty = True

    def get_related_memories_by_graph(self, query_entities: List[str], limit: int = 5) -> List[str]:
        """通过图谱进行 1-hop 检索"""
        related: Set[str] = set()
        for entity in query_entities:
            if entity in self.graph:
                for n in self.graph.neighbors(entity):
                    if self.graph.nodes[n].get("type") == "memory":
                        related.add(n)
        return list(related)[:limit]

    # ========== BM25 Index ==========

    def _rebuild_bm25_index(self) -> None:
        """全量重建 BM25 索引"""
        try:
            all_data = self.collection.get()
            ids = all_data.get("ids", [])
            docs = all_data.get("documents", [])
            self._bm25_ids = ids
            self._bm25_docs = docs or []
            if self._bm25_docs:
                tokenized = [list(jieba.cut_for_search(d)) for d in self._bm25_docs]
                self._bm25_index = BM25Okapi(tokenized)
            else:
                self._bm25_index = None
            logger.info(f"[MemoryStore] BM25 索引重建完成，文档数: {len(self._bm25_docs)}")
        except Exception as e:
            logger.warning(f"[MemoryStore] BM25 索引重建失败: {e}")
            self._bm25_index = None

    def _add_to_bm25_index(self, doc_id: str, doc_text: str) -> None:
        """增量添加文档到 BM25 索引"""
        self._bm25_ids.append(doc_id)
        self._bm25_docs.append(doc_text)
        tokenized = [list(jieba.cut_for_search(d)) for d in self._bm25_docs]
        self._bm25_index = BM25Okapi(tokenized)

    def _remove_from_bm25_index(self, doc_id: str) -> None:
        """从 BM25 索引中移除文档"""
        try:
            idx = self._bm25_ids.index(doc_id)
            self._bm25_ids.pop(idx)
            self._bm25_docs.pop(idx)
            if self._bm25_docs:
                tokenized = [list(jieba.cut_for_search(d)) for d in self._bm25_docs]
                self._bm25_index = BM25Okapi(tokenized)
            else:
                self._bm25_index = None
        except ValueError:
            pass  # ID 不在索引中，忽略

    # ========== Helpers ==========

    def _tokenize(self, text: str) -> List[str]:
        """中文分词"""
        return list(jieba.cut_for_search(text))

    def _fallback_extract_entities(self, text: str) -> List[str]:
        """无 LLM 时的简单实体提取"""
        entities: Set[str] = set()

        # 文件名/路径
        paths = re.findall(r'[a-zA-Z0-9_\-\./]+\.[a-zA-Z0-9]+', text)
        entities.update(paths)

        # 驼峰
        camel = re.findall(r'\b[A-Z][a-z]+(?:[A-Z][a-z]+)+\b|\b[a-z]+(?:[A-Z][a-z]+)+\b', text)
        entities.update(camel)

        # 全大写常量
        uppers = re.findall(r'\b[A-Z][A-Z0-9_]{3,}\b', text)
        entities.update(uppers)

        # 常见技术栈
        tech_kw = ["Python", "JavaScript", "FastAPI", "Docker", "NVIDIA", "CUDA",
                    "PyTorch", "React", "Vue", "MCP", "ChromaDB", "OpenAI", "DeepSeek"]
        for kw in tech_kw:
            if kw.lower() in text.lower():
                entities.add(kw)

        return list(entities)

    PROFILE_KEYWORDS = ["我喜欢", "我偏好", "我不喜欢", "我的习惯", "总是", "不要",
                         "必须", "要求", "规定", "建议", "My preference", "I like", "I prefer"]

    def _is_profile_content(self, text: str) -> bool:
        """判断是否为用户画像相关内容"""
        return any(kw in text for kw in self.PROFILE_KEYWORDS)

    def _categorize_memory(self, content: str) -> Optional[str]:
        """根据内容自动分类"""
        lower = content.lower()
        if any(k in lower for k in ["python", "java", "code", "function", "api",
                                      "class", "method", "git", "docker", "programming", "coding"]):
            return "Coding"
        elif any(k in lower for k in ["config", "env", "port", "host", "setting", "setup", "configuration"]):
            return "Config"
        elif any(k in lower for k in ["user", "profile", "preference", "like", "dislike", "习惯", "偏好"]):
            return "Personal"
        return "General"

    # ========== CRUD ==========

    def save(self, memory: MemoryItem) -> str:
        """
        保存记忆：支持去重和强化
        如果发现高相似度 (>0.95) 的记忆，则更新该记忆的权重和时间，而非新增。
        """
        is_profile = self._is_profile_content(memory.content)

        # 查重：在同项目/同用户范围内检索
        try:
            duplicates = self.collection.query(
                query_texts=[memory.content],
                n_results=1,
                where={"$and": [
                    {"user_id": {"$eq": memory.user_id}},
                    {"scope": {"$eq": memory.scope}},
                    {"project_id": {"$eq": memory.project_id or ""}}
                ]}
            )
            if duplicates["ids"] and duplicates["distances"][0][0] < 0.05:
                existing_id = duplicates["ids"][0][0]
                existing_meta = duplicates["metadatas"][0][0]
                logger.debug(f"[MemoryStore] 重复记忆检测 (dist={duplicates['distances'][0][0]:.4f})，强化 {existing_id[:8]}")
                self._reinforce_memory(existing_id, existing_meta)
                return existing_id
        except Exception as e:
            logger.warning(f"[MemoryStore] 查重失败: {e}")

        last_accessed_iso = memory.last_accessed.isoformat() if memory.last_accessed else datetime.now().isoformat()
        char_count = len(memory.content) if memory.content else 0

        metadata = {
            "user_id": memory.user_id,
            "scope": memory.scope,
            "project_id": memory.project_id or "",
            "is_shared": str(memory.is_shared),
            "is_profile": str(is_profile),
            "timestamp": memory.timestamp.isoformat(),
            "importance": memory.importance,
            "last_accessed": last_accessed_iso,
            "access_count": memory.access_count,
            "memory_type": memory.memory_type or "storage",
            "source_memories": json.dumps(memory.source_memories or [], ensure_ascii=False),
            "summary_type": memory.summary_type or "",
            "skill_type": memory.skill_type or "",
            "verified": str(memory.verified) if memory.verified is not None else "False",
            "confidence": memory.confidence or 1.0,
            "title": memory.title or "",
            "description": memory.description or "",
            "summary": memory.summary or "",
            "content_type": memory.content_type or "note",
            "keywords": json.dumps(memory.keywords or [], ensure_ascii=False),
            "tags": json.dumps(memory.tags or [], ensure_ascii=False),
            "char_count": char_count,
            "max_chars": memory.max_chars or 1000,
        }

        try:
            self.collection.add(
                documents=[memory.content],
                metadatas=[metadata],
                ids=[memory.memory_id]
            )
        except Exception as e:
            logger.warning(f"[MemoryStore] ChromaDB 保存失败: {e}")
            raise

        try:
            self._add_to_bm25_index(memory.memory_id, memory.content)
        except Exception as e:
            logger.warning(f"[MemoryStore] BM25 索引更新失败: {e}")
            try:
                self.collection.delete(ids=[memory.memory_id])
            except Exception:
                pass
            raise

        try:
            self._add_memory_to_graph(memory)
            self._save_graph()
        except Exception as e:
            logger.warning(f"[MemoryStore] 图谱操作失败: {e}")

        return memory.memory_id

    def _add_memory_to_graph(self, memory: MemoryItem) -> None:
        """将记忆添加到知识图谱"""
        try:
            memory_id = memory.memory_id
            if memory_id in self.graph:
                return

            self.graph.add_node(
                memory_id,
                type="memory",
                label=memory.content[:30] + "..." if len(memory.content) > 30 else memory.content,
                timestamp=memory.timestamp.isoformat() if memory.timestamp else datetime.now().isoformat(),
                user_id=memory.user_id,
                scope=memory.scope
            )
            category = self._categorize_memory(memory.content)
            if category:
                if category not in self.graph:
                    self.graph.add_node(category, type="category", label=category)
                self.graph.add_edge(category, memory_id, relation="contains")
            self._graph_dirty = True
        except Exception as e:
            logger.warning(f"[MemoryStore] 添加记忆到图谱失败: {e}")

    def _reinforce_memory(self, memory_id: str, metadata: dict) -> None:
        """记忆强化：增加 access_count 并更新 last_accessed"""
        try:
            current_count = metadata.get("access_count", 0)
            updates = {
                "access_count": current_count + 1,
                "last_accessed": datetime.now().isoformat()
            }
            self.collection.update(
                ids=[memory_id],
                metadatas=[{**metadata, **updates}]
            )
        except Exception as e:
            logger.warning(f"[MemoryStore] 强化记忆失败 {memory_id[:8]}: {e}")

    def search(self, query: str, user_id: str, project_id: Optional[str] = None,
               limit: int = 10, reinforce: bool = True) -> Tuple[List[SearchResult], List[ProfileResult]]:
        """
        检索记忆：Hybrid Search (Vector + BM25 + Graph)

        Score = 0.4 × Vector + 0.25 × Keyword + 0.2 × Recency + 0.1 × Importance + 0.05 × Instinct

        Returns:
            Tuple[List[SearchResult], List[ProfileResult]]: (搜索结果, Profile 上下文)
        """
        # === Phase 1: 投名状检查 ===
        is_contributor = False
        try:
            check_res = self.collection.get(
                where={"$and": [{"user_id": user_id}, {"is_shared": "True"}]},
                limit=1
            )
            if check_res and check_res["ids"]:
                is_contributor = True
        except Exception:
            pass

        if is_contributor:
            where_filter = {
                "$or": [
                    {"user_id": {"$eq": user_id}},
                    {"is_shared": {"$eq": "True"}}
                ]
            }
        else:
            where_filter = {"user_id": {"$eq": user_id}}

        # === Phase 2: 语义检索（高召回） ===
        recall_limit = limit * 3
        results = None
        try:
            results = self.collection.query(
                query_texts=[query],
                n_results=recall_limit,
                where=where_filter
            )
        except Exception as e:
            if "Error finding id" in str(e):
                logger.warning(f"[MemoryStore] 数据库索引不一致: {e}")
                return [], []
            raise

        # === Phase 2b: BM25 并行检索 ===
        bm25_matches: Dict[str, float] = {}
        if self._bm25_index and self._bm25_ids and self._bm25_docs:
            tokenized_query = self._tokenize(query)
            bm25_scores = self._bm25_index.get_scores(tokenized_query)
            if len(bm25_scores) > 0:
                max_bm25 = max(bm25_scores)
                if max_bm25 > 0:
                    for i, score in enumerate(bm25_scores):
                        if score > 0.1:  # 忽略极低分
                            bm25_matches[self._bm25_ids[i]] = score / max_bm25

        # === Phase 2c: Graph 2-hop 检索 ===
        query_tokens = self._tokenize(query)
        graph_related_ids = self.get_related_memories_by_graph(query_tokens, limit=5)
        if graph_related_ids and results:
            try:
                graph_results = self.collection.get(ids=graph_related_ids)
                if graph_results["ids"]:
                    existing_ids = set(results["ids"][0]) if results["ids"] else set()
                    for i, pid in enumerate(graph_results["ids"]):
                        if pid not in existing_ids:
                            if not results["ids"]:
                                results = {"ids": [[]], "documents": [[]], "metadatas": [[]], "distances": [[]]}
                            results["ids"][0].append(pid)
                            results["documents"][0].append(graph_results["documents"][i])
                            results["metadatas"][0].append(graph_results["metadatas"][i])
                            results["distances"][0].append(0.1)
            except Exception as e:
                logger.warning(f"[MemoryStore] 图谱检索错误: {e}")

        # === Phase 2d: Profile 独立获取 ===
        profiles: List[dict] = []
        try:
            profile_where = {"$and": [where_filter, {"is_profile": "True"}]} if isinstance(where_filter, dict) else None
            if profile_where:
                profile_results = self.collection.get(where=profile_where, limit=3)
                if profile_results and profile_results["ids"]:
                    for i, pid in enumerate(profile_results["ids"]):
                        profiles.append({
                            "id": pid,
                            "content": profile_results["documents"][i] if i < len(profile_results["documents"]) else "",
                            "metadata": profile_results["metadatas"][i] if i < len(profile_results["metadatas"]) else {},
                        })
        except Exception as e:
            logger.warning(f"[MemoryStore] Profile 获取警告: {e}")

        # === Phase 3: 混合重排序 ===
        candidates: List[dict] = []
        now = datetime.now()

        if results and results["documents"]:
            docs = results["documents"][0]

            for i, doc in enumerate(docs):
                if not doc:
                    continue
                meta = results["metadatas"][0][i] if i < len(results["metadatas"][0]) else {}
                mem_id = results["ids"][0][i] if i < len(results["ids"][0]) else ""
                dist = results["distances"][0][i] if i < len(results["distances"][0]) else 0.5

                # Scope 过滤
                m_scope = meta.get("scope", "project")
                m_pid = meta.get("project_id", "")
                is_scope_match = (
                    m_scope == "global" or
                    (m_scope == "project" and project_id and m_pid == project_id)
                )
                if not is_scope_match:
                    continue

                # 1. Vector Similarity
                relevance_score = max(0.0, 1.0 - dist)

                # 2. BM25 Keyword Score（从预建索引获取，不再临时计算）
                keyword_score = bm25_matches.get(mem_id, 0.0)

                # 3. Recency（近时性）— 衰减因子
                try:
                    last_access_str = meta.get("last_accessed") or meta.get("timestamp", "")
                    if last_access_str:
                        last_access_dt = datetime.fromisoformat(last_access_str)
                        hours_diff = (now - last_access_dt).total_seconds() / 3600
                        recency_score = 0.99 ** max(0, hours_diff)
                    else:
                        recency_score = 0.5
                except (ValueError, TypeError):
                    recency_score = 0.5

                # 4. Importance（重要性权重）
                importance_val = float(meta.get("importance", 1.0))
                importance_score = min(importance_val / 10.0, 1.0)

                # 5. Instinct（访问习惯）
                access_count = meta.get("access_count", 0)
                instinct_score = min(math.log10(access_count + 1) / 2.0, 1.0)

                # 6. Hybrid Score
                final_score = (
                    0.40 * relevance_score +
                    0.25 * keyword_score +
                    0.20 * recency_score +
                    0.10 * importance_score +
                    0.05 * instinct_score
                )

                candidates.append({
                    "content": doc,
                    "user_id": meta.get("user_id", ""),
                    "type": "personal" if meta.get("user_id", "") == user_id else "collective",
                    "timestamp": meta.get("timestamp", ""),
                    "relevance": relevance_score,
                    "keyword_score": keyword_score,
                    "recency_score": recency_score,
                    "score": final_score,
                    "id": mem_id,
                    "access_count": access_count,
                    "metadata": meta,
                })

        candidates.sort(key=lambda x: x["score"], reverse=True)
        top_results = candidates[:limit]

        # 记忆强化（仅在用户主动检索时触发，后台扫描不触发）
        if reinforce:
            for res in top_results:
                self._reinforce_memory(res["id"], res["metadata"])

        return top_results, profiles

    def delete(self, memory_id: str, user_id: str) -> bool:
        """删除记忆：仅允许拥有者删除"""
        try:
            res = self.collection.get(ids=[memory_id])
            if not res or not res["ids"]:
                return False

            meta = res["metadatas"][0]
            if meta["user_id"] != user_id:
                raise PermissionError("Access Denied: You can only delete your own memories.")

            self.collection.delete(ids=[memory_id])
            # 从 BM25 索引移除
            self._remove_from_bm25_index(memory_id)
            # 从图谱移除
            if memory_id in self.graph:
                self.graph.remove_node(memory_id)
                self._graph_dirty = True
                self._save_graph()
            return True
        except PermissionError:
            raise
        except Exception as e:
            logger.warning(f"[MemoryStore] 删除失败: {e}")
            raise

    def update_memory_content(self, memory_id: str, user_id: str, content: str) -> bool:
        """更新记忆内容"""
        try:
            res = self.collection.get(ids=[memory_id])
            if not res or not res["ids"]:
                return False
            
            meta = res["metadatas"][0]
            updated_meta = {**meta, "timestamp": datetime.now().isoformat(), "last_accessed": datetime.now().isoformat()}
            
            self.collection.update(
                ids=[memory_id],
                documents=[content],
                metadatas=[updated_meta]
            )
            # BM25 索引需要重建（内容变了）
            self._remove_from_bm25_index(memory_id)
            self._add_to_bm25_index(memory_id, content)
            return True
        except Exception as e:
            logger.warning(f"[MemoryStore] 更新记忆内容失败: {e}")
            return False

    def update_memory_metadata(self, memory_id: str, metadata: dict) -> bool:
        """更新记忆元数据"""
        try:
            res = self.collection.get(ids=[memory_id])
            if not res or not res["ids"]:
                return False

            existing_meta = res["metadatas"][0] if res["metadatas"] else {}
            updated_meta = {**existing_meta, **metadata}
            self.collection.update(ids=[memory_id], metadatas=[updated_meta])
            return True
        except Exception as e:
            logger.warning(f"[MemoryStore] 更新元数据失败: {e}")
            return False

    def get_memories(self, user_id: str, project_id: Optional[str] = None, limit: int = 100) -> List[MemoryItem]:
        """
        获取用户的所有记忆（用于TUI界面）
        
        Args:
            user_id: 用户ID
            project_id: 项目ID（可选）
            limit: 返回数量限制
            
        Returns:
            List[MemoryItem]: 记忆列表
        """
        try:
            # 构建查询条件
            where_filter = {"user_id": {"$eq": user_id}}
            if project_id:
                where_filter["project_id"] = {"$eq": project_id}
            
            # 执行查询
            results = self.collection.get(
                where=where_filter,
                limit=limit,
                include=["documents", "metadatas"]
            )
            
            # 转换为MemoryItem对象
            memories = []
            if results["ids"]:
                for i, mem_id in enumerate(results["ids"]):
                    doc = results["documents"][i] if results["documents"] else ""
                    meta = results["metadatas"][i] if results["metadatas"] else {}
                    
                    # 处理可能的JSON字符串字段
                    import json
                    keywords = meta.get("keywords", [])
                    if isinstance(keywords, str):
                        try:
                            keywords = json.loads(keywords)
                        except (json.JSONDecodeError, TypeError):
                            keywords = []
                    
                    tags = meta.get("tags", [])
                    if isinstance(tags, str):
                        try:
                            tags = json.loads(tags)
                        except (json.JSONDecodeError, TypeError):
                            tags = []
                    
                    summary = meta.get("summary", "")
                    if isinstance(summary, list):
                        summary = ' '.join(str(s) for s in summary)
                    elif summary is None:
                        summary = ""
                    
                    description = meta.get("description", "")
                    if isinstance(description, list):
                        description = ' '.join(str(d) for d in description)
                    elif description is None:
                        description = ""
                    
                    # 创建MemoryItem对象
                    memory = MemoryItem(
                        id=mem_id,
                        content=doc,
                        title=meta.get("title", doc[:50] + "..." if len(doc) > 50 else doc),
                        description=description,
                        summary=summary,
                        content_type=meta.get("content_type", "note"),
                        keywords=keywords,
                        tags=tags,
                        char_count=meta.get("char_count", len(doc)),
                        max_chars=meta.get("max_chars", 1000),
                        user_id=meta.get("user_id", user_id),
                        scope=meta.get("scope", "project"),
                        project_id=meta.get("project_id", project_id or ""),
                        timestamp=datetime.fromisoformat(meta["timestamp"]) if meta.get("timestamp") else datetime.now(),
                        importance=meta.get("importance", 1.0),
                        access_count=meta.get("access_count", 0),
                        last_accessed=datetime.fromisoformat(meta["last_accessed"]) if meta.get("last_accessed") else datetime.now(),
                        is_shared=meta.get("is_shared", "False") == "True",
                        is_profile=meta.get("is_profile", "False") == "True"
                    )
                    memories.append(memory)
            
            return memories
        except Exception as e:
            logger.warning(f"[MemoryStore] 获取记忆列表失败: {e}")
            return []

    # ========== 三层记忆兼容接口 ==========

    def save_storage_memory(self, content: str, user_id: str, session_id: str = None,
                            topic: str = None, participants: List[str] = None,
                            scope: str = "project", project_id: str = None) -> str:
        """保存存储记忆（原始对话记录）"""
        memory = MemoryItem(
            content=content,
            user_id=user_id,
            memory_type="storage",
            scope=scope,
            project_id=project_id or "",
            is_shared=False,
            session_id=session_id,
            tags=[topic] if topic else [],
            title=topic or (content[:50] + "..." if len(content) > 50 else content)
        )
        memory_id = self.save(memory)
        if topic:
            self.add_entities_to_graph(memory_id, [topic], category="Session")
            self._save_graph()
        return memory_id

    def save_thinking_memory(self, content: str, user_id: str, source_memories: List[str],
                             summary_type: str = "manual", key_points: List[str] = None,
                             scope: str = "project", project_id: str = None,
                             confidence: float = 0.9) -> str:
        """保存思维记忆（总结）"""
        memory = MemoryItem(
            content=content,
            user_id=user_id,
            memory_type="thinking",
            scope=scope,
            project_id=project_id or "",
            is_shared=False,
            source_memories=source_memories,
            summary_type=summary_type,
            confidence=confidence,
            title=content[:50] + "..." if len(content) > 50 else content
        )
        memory_id = self.save(memory)
        for source_id in source_memories:
            self.graph.add_edge(memory_id, source_id, relation="summarized_from")
        self._save_graph()
        return memory_id

    def save_skill_memory(self, content: str, user_id: str, source_thinking: List[str],
                          skill_type: str = "knowledge", tags: List[str] = None,
                          scope: str = "global", project_id: str = "global",
                          confidence: float = 0.95, verified: bool = False) -> str:
        """保存技能记忆（可复用知识）"""
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
            verified=verified,
            title=content[:50] + "..." if len(content) > 50 else content
        )
        memory_id = self.save(memory)
        for source_id in source_thinking:
            self.graph.add_edge(memory_id, source_id, relation="extracted_from")
        if tags:
            self.add_entities_to_graph(memory_id, tags, category=skill_type)
            self._save_graph()
        return memory_id

    def query_by_type(self, query: str, memory_type: str = "all",
                      user_id: str = None, limit: int = 10) -> List[dict]:
        """按记忆类型查询"""
        where_conditions: list = []

        if user_id:
            where_conditions.append({"user_id": {"$eq": user_id}})
        if memory_type != "all":
            where_conditions.append({"memory_type": {"$eq": memory_type}})

        where_filter: Optional[dict] = None
        if len(where_conditions) > 1:
            where_filter = {"$and": where_conditions}
        elif len(where_conditions) == 1:
            where_filter = where_conditions[0]

        try:
            if not query or not query.strip():
                results = self.collection.get(where=where_filter, limit=limit)
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
                            "source_memories": json.loads(meta.get("source_memories", "[]")),
                            "title": meta.get("title"),
                            "keywords": json.loads(meta.get("keywords", "[]")),
                            "tags": json.loads(meta.get("tags", "[]"))
                        })
                return memories

            results = self.collection.query(query_texts=[query], n_results=limit, where=where_filter)
            memories = []
            if results and results.get("ids") and results["ids"][0]:
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
                        "source_memories": json.loads(meta.get("source_memories", "[]")),
                        "title": meta.get("title"),
                        "keywords": json.loads(meta.get("keywords", "[]")),
                        "tags": json.loads(meta.get("tags", "[]"))
                    })
            return memories
        except Exception as e:
            logger.warning(f"[MemoryStore] query_by_type 失败: {e}")
            return []

    def get_tiered_stats(self, user_id: str = None) -> dict:
        """获取三层记忆统计"""
        try:
            where_filter = {"user_id": {"$eq": user_id}} if user_id else None
            all_memories = self.collection.get(where=where_filter)
            stats = {"storage_count": 0, "thinking_count": 0, "skill_count": 0, "total_count": 0}
            if all_memories and all_memories.get("metadatas"):
                for meta in all_memories["metadatas"]:
                    mem_type = meta.get("memory_type", "storage")
                    if mem_type in stats:
                        stats[mem_type] += 1
                    stats["total_count"] += 1
            return stats
        except Exception as e:
            logger.warning(f"[MemoryStore] get_tiered_stats 失败: {e}")
            return {"storage_count": 0, "thinking_count": 0, "skill_count": 0, "total_count": 0}

    # ========== 溯源和合并 ==========

    def get_source_memories(self, memory_id: str) -> List[dict]:
        """
        获取记忆的源记忆（溯源链）
        先查图谱 predecessors，fallback 到 metadata 中的 source_memories
        """
        sources: List[dict] = []

        # 方式1: 图谱 predecessors
        try:
            if memory_id in self.graph:
                predecessors = list(self.graph.predecessors(memory_id))
                for pred_id in predecessors:
                    edge_data = self.graph.get_edge_data(memory_id, pred_id)
                    if edge_data and edge_data.get("relation") in ["summarized_from", "extracted_from"]:
                        res = self.collection.get(ids=[pred_id])
                        if res and res["ids"]:
                            sources.append({
                                "memory_id": pred_id,
                                "content": res["documents"][0] if res.get("documents") else "",
                                "memory_type": res["metadatas"][0].get("memory_type", "storage") if res.get("metadatas") else "storage"
                            })
        except Exception as e:
            logger.warning(f"[MemoryStore] 图谱溯源失败: {e}")

        # 方式2: Metadata fallback
        if not sources:
            try:
                res = self.collection.get(ids=[memory_id])
                if res and res["ids"] and res["metadatas"]:
                    meta = res["metadatas"][0]
                    source_ids = []
                    for field in ["source_memories", "source_thinking"]:
                        raw = meta.get(field, "")
                        if raw:
                            try:
                                source_ids.extend(json.loads(raw))
                            except (json.JSONDecodeError, TypeError):
                                pass

                    seen = set(s["memory_id"] for s in sources)
                    for sid in source_ids:
                        if sid in seen:
                            continue
                        try:
                            sres = self.collection.get(ids=[sid])
                            if sres and sres["ids"]:
                                sources.append({
                                    "memory_id": sid,
                                    "content": sres["documents"][0] if sres.get("documents") else "",
                                    "memory_type": sres["metadatas"][0].get("memory_type", "storage") if sres.get("metadatas") else "storage"
                                })
                                seen.add(sid)
                        except Exception:
                            pass
            except Exception as e:
                logger.warning(f"[MemoryStore] metadata 溯源失败: {e}")

        return sources

    def get_merged_memories(self, user_id: str = None, limit: int = 50) -> List[dict]:
        """查询合并的记忆"""
        try:
            results = []
            all_memories = self.collection.get(limit=limit * 2)
            ids = all_memories.get("ids", [])
            docs = all_memories.get("documents", [])
            metas = all_memories.get("metadatas", [])

            for i in range(len(ids)):
                meta = metas[i] if i < len(metas) else {}
                is_merged = meta.get("is_merged_memory", False)
                merge_status = meta.get("merge_status", "")

                if is_merged or merge_status == "merged_into":
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

            results.sort(key=lambda x: x.get("merged_at", ""), reverse=True)
            return results[:limit]
        except Exception as e:
            logger.warning(f"[MemoryStore] 查询合并记忆失败: {e}")
            return []

    def get_merge_chain(self, memory_id: str) -> dict:
        """获取记忆的合并链"""
        try:
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

            if result["is_merged_memory"]:
                for sid in meta.get("merged_from", []):
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
            logger.warning(f"[MemoryStore] 获取合并链失败: {e}")
