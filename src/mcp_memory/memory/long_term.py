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
from typing import Optional, List, Dict, Tuple, Set, TypedDict, Any
import os
import uuid
import math
import threading
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

        # Knowledge Graph (stored in ChromaDB)
        self.graph_collection = self.client.get_or_create_collection("knowledge_graph")
        self.graph: nx.DiGraph = nx.DiGraph()
        self._graph_dirty = False
        self._migrate_graph_from_json()
        self._load_graph()

        # BM25 预建索引（延迟批量重建策略）
        self._bm25_docs: List[str] = []
        self._bm25_ids: List[str] = []
        self._bm25_index: Optional[BM25Okapi] = None
        self._bm25_dirty: bool = False
        self._bm25_lock = threading.Lock()
        self._rebuild_bm25_index()

    # ========== Knowledge Graph ==========

    def _migrate_graph_from_json(self) -> None:
        """从旧的 JSON 文件迁移图谱数据到 ChromaDB"""
        old_graph_path = os.path.join(self.data_path, "knowledge_graph.json")
        if not os.path.exists(old_graph_path):
            return

        try:
            existing = self.graph_collection.get()
            if existing and existing.get("ids"):
                logger.info("[MemoryStore] ChromaDB 中已存在图谱数据，跳过迁移")
                return

            with open(old_graph_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                loaded_graph = nx.node_link_graph(data)
                if not loaded_graph.is_directed():
                    loaded_graph = loaded_graph.to_directed()

            node_ids = []
            documents = []
            metadatas = []

            for node_id in loaded_graph.nodes():
                node_data = loaded_graph.nodes[node_id]
                edges = []
                for _, target, edge_data in loaded_graph.out_edges(node_id, data=True):
                    edges.append({
                        "target": target,
                        "relation": edge_data.get("relation", "related_to")
                    })

                node_type = node_data.get("type", "entity")
                label = node_data.get("label", node_id)

                meta = {
                    "type": node_type,
                    "label": label,
                    "edges": json.dumps(edges, ensure_ascii=False)
                }
                for key in ["timestamp", "user_id", "scope"]:
                    if key in node_data:
                        meta[key] = node_data[key]

                node_ids.append(node_id)
                documents.append(label)
                metadatas.append(meta)

            if node_ids:
                self.graph_collection.add(
                    ids=node_ids,
                    documents=documents,
                    metadatas=metadatas
                )

            backup_path = old_graph_path + ".migrated"
            os.rename(old_graph_path, backup_path)
            logger.info(f"[MemoryStore] 图谱迁移完成，节点数: {len(node_ids)}，旧文件已备份至 {backup_path}")
        except Exception as e:
            logger.warning(f"[MemoryStore] 图谱迁移失败: {e}")

    def _load_graph(self) -> None:
        """从 ChromaDB 加载图谱"""
        try:
            all_nodes = self.graph_collection.get()
            if not all_nodes or not all_nodes.get("ids"):
                return

            ids = all_nodes["ids"]
            metadatas = all_nodes.get("metadatas", [])

            for i, node_id in enumerate(ids):
                meta = metadatas[i] if i < len(metadatas) else {}
                node_type = meta.get("type", "entity")
                label = meta.get("label", node_id)

                self.graph.add_node(node_id, type=node_type, label=label)

                for key in ["timestamp", "user_id", "scope"]:
                    if key in meta:
                        self.graph.nodes[node_id][key] = meta[key]

                edges_str = meta.get("edges", "[]")
                try:
                    edges = json.loads(edges_str) if edges_str else []
                except (json.JSONDecodeError, TypeError):
                    edges = []

                for edge in edges:
                    target = edge.get("target")
                    relation = edge.get("relation", "related_to")
                    if target:
                        self.graph.add_edge(node_id, target, relation=relation)

            logger.info(f"[MemoryStore] 从 ChromaDB 加载图谱完成，节点数: {len(ids)}")
        except Exception as e:
            logger.warning(f"[MemoryStore] 加载知识图谱失败: {e}")
            self.graph = nx.DiGraph()

    def _save_graph(self) -> None:
        """保存图谱到 ChromaDB"""
        if not self._graph_dirty:
            return
        try:
            existing = self.graph_collection.get()
            existing_ids = set(existing.get("ids", [])) if existing else set()

            node_ids = []
            documents = []
            metadatas = []

            for node_id in self.graph.nodes():
                node_data = self.graph.nodes[node_id]
                edges = []
                for _, target, edge_data in self.graph.out_edges(node_id, data=True):
                    edges.append({
                        "target": target,
                        "relation": edge_data.get("relation", "related_to")
                    })

                node_type = node_data.get("type", "entity")
                label = node_data.get("label", node_id)

                meta = {
                    "type": node_type,
                    "label": label,
                    "edges": json.dumps(edges, ensure_ascii=False)
                }
                for key in ["timestamp", "user_id", "scope"]:
                    if key in node_data:
                        meta[key] = node_data[key]

                node_ids.append(node_id)
                documents.append(label)
                metadatas.append(meta)

            if node_ids:
                self.graph_collection.upsert(
                    ids=node_ids,
                    documents=documents,
                    metadatas=metadatas
                )

            stale_ids = existing_ids - set(node_ids)
            if stale_ids:
                self.graph_collection.delete(ids=list(stale_ids))

            self._graph_dirty = False
            logger.debug(f"[MemoryStore] 图谱保存到 ChromaDB 完成，节点数: {len(node_ids)}")
        except Exception as e:
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

    # ========== BM25 Index（延迟批量重建） ==========

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
            self._bm25_dirty = False
            logger.info(f"[MemoryStore] BM25 索引重建完成，文档数: {len(self._bm25_docs)}")
        except Exception as e:
            logger.warning(f"[MemoryStore] BM25 索引重建失败: {e}")
            self._bm25_index = None

    def _ensure_bm25_fresh(self) -> None:
        """按需重建：仅当索引脏时才执行批量重建（搜索前调用）"""
        with self._bm25_lock:
            if self._bm25_dirty:
                self._rebuild_bm25_index()

    def _add_to_bm25_index(self, doc_id: str, doc_text: str) -> None:
        """增量添加文档到 BM25 索引（O(1)，延迟重建）"""
        with self._bm25_lock:
            self._bm25_ids.append(doc_id)
            self._bm25_docs.append(doc_text)
            self._bm25_dirty = True

    def _remove_from_bm25_index(self, doc_id: str) -> None:
        """从 BM25 索引中移除文档（O(1)，延迟重建）"""
        with self._bm25_lock:
            try:
                idx = self._bm25_ids.index(doc_id)
                self._bm25_ids.pop(idx)
                self._bm25_docs.pop(idx)
                self._bm25_dirty = True
            except ValueError:
                pass

    # ========== Helpers ==========

    @staticmethod
    def _parse_json_field(raw) -> List[str]:
        if isinstance(raw, list):
            return raw
        if isinstance(raw, str):
            try:
                parsed = json.loads(raw)
                return parsed if isinstance(parsed, list) else [parsed]
            except (json.JSONDecodeError, TypeError):
                pass
        return []

    @staticmethod
    def _parse_json_str_field(raw) -> str:
        if raw is None:
            return ""
        if isinstance(raw, str):
            if raw.startswith('[') and raw.endswith(']'):
                try:
                    parsed = json.loads(raw)
                    if isinstance(parsed, list):
                        return ' '.join(str(s) for s in parsed)
                except (json.JSONDecodeError, TypeError):
                    pass
            elif isinstance(raw, list):
                return ' '.join(str(s) for s in raw)
            return raw
        if isinstance(raw, list):
            return ' '.join(str(s) for s in raw)
        return str(raw)

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
            where_clauses = [
                {"user_id": {"$eq": memory.user_id}},
                {"scope": {"$eq": memory.scope}},
            ]
            if memory.project_id:
                where_clauses.append({"project_id": {"$eq": memory.project_id}})
            
            duplicates = self.collection.query(
                query_texts=[memory.content],
                n_results=1,
                where={"$and": where_clauses}
            )
            if duplicates.get("ids") and duplicates.get("distances") and duplicates["distances"][0] and duplicates["distances"][0][0] < 0.05:
                existing_id = duplicates["ids"][0][0]
                existing_meta = duplicates["metadatas"][0][0]
                logger.debug(f"[MemoryStore] 重复记忆检测 (dist={duplicates['distances'][0][0]:.4f})，强化 {existing_id[:8]}")
                self._reinforce_memory(existing_id, existing_meta)
                return existing_id
        except Exception as e:
            logger.warning(f"[MemoryStore] 查重失败: {e}")

        last_accessed_iso = memory.last_accessed.isoformat() if memory.last_accessed else datetime.now().isoformat()
        char_count = len(memory.content) if memory.content else 0

        # 严格确保 summary 和 description 是字符串，防止 Pydantic 校验失败
        def _to_str(val) -> str:
            if val is None: return ""
            if isinstance(val, (list, dict)): return json.dumps(val, ensure_ascii=False)
            return str(val)

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
            "title": _to_str(memory.title),
            "description": _to_str(memory.description),
            "summary": _to_str(memory.summary),
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

        # === Phase 2b: BM25 并行检索（按需重建索引） ===
        self._ensure_bm25_fresh()
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

                # 7. Procedural (Skill) Boost - 优先召回技能和规则
                if meta.get("memory_type") == "skill":
                    final_score += 0.2  # 显著提升技能权重

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
        try:
            where_filter = {"user_id": {"$eq": user_id}}
            if project_id:
                where_filter["project_id"] = {"$eq": project_id}

            results = self.collection.get(
                where=where_filter,
                limit=limit,
                include=["documents", "metadatas"]
            )

            memories = []
            if results["ids"]:
                for i, mem_id in enumerate(results["ids"]):
                    doc = results["documents"][i] if results["documents"] else ""
                    meta = results["metadatas"][i] if results["metadatas"] else {}

                    memory = MemoryItem(
                        memory_id=mem_id,
                        content=doc,
                        title=meta.get("title", doc[:50] + "..." if len(doc) > 50 else doc),
                        description=self._parse_json_str_field(meta.get("description")),
                        summary=self._parse_json_str_field(meta.get("summary")),
                        content_type=meta.get("content_type", "note"),
                        keywords=self._parse_json_field(meta.get("keywords")),
                        tags=self._parse_json_field(meta.get("tags")),
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
                    key = f"{mem_type}_count"
                    if key in stats:
                        stats[key] += 1
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
            return {"error": str(e)}

    async def deep_deduplicate(self, user_id: str = None, threshold: float = 0.8) -> dict:
        """
        深度去重：使用LLM进行语义去重
        
        Args:
            user_id: 可选，指定用户ID，不指定则处理所有用户
            threshold: 语义相似度阈值，默认0.8
            
        Returns:
            去重结果统计
        """
        try:
            logger.info("[MemoryStore] 开始深度去重...")
            
            # 获取所有记忆
            where_filter = {"user_id": {"$eq": user_id}} if user_id else None
            all_memories = self.collection.get(where=where_filter)
            
            if not all_memories or not all_memories.get("ids"):
                return {"processed": 0, "merged": 0, "errors": 0}
            
            ids = all_memories["ids"]
            documents = all_memories["documents"]
            metadatas = all_memories["metadatas"]
            
            # 按用户和范围分组
            groups = {}
            for i, mem_id in enumerate(ids):
                meta = metadatas[i] if i < len(metadatas) else {}
                key = f"{meta.get('user_id', 'unknown')}_{meta.get('scope', 'project')}_{meta.get('project_id', '')}"
                if key not in groups:
                    groups[key] = []
                groups[key].append({
                    "id": mem_id,
                    "content": documents[i] if i < len(documents) else "",
                    "metadata": meta
                })
            
            processed = 0
            merged = 0
            errors = 0
            
            # 检查LLM是否可用
            try:
                from mcp_memory.llm.facade import llm_facade
                if not llm_facade.is_available():
                    logger.warning("[MemoryStore] LLM不可用，跳过深度去重")
                    return {"processed": 0, "merged": 0, "errors": 1, "message": "LLM不可用"}
            except ImportError:
                logger.warning("[MemoryStore] LLM模块导入失败，跳过深度去重")
                return {"processed": 0, "merged": 0, "errors": 1, "message": "LLM模块导入失败"}
            
            # 对每个组进行去重
            for group_key, memories in groups.items():
                if len(memories) < 2:
                    continue
                
                # 计算记忆之间的相似度
                for i in range(len(memories)):
                    for j in range(i + 1, len(memories)):
                        try:
                            processed += 1
                            mem1 = memories[i]
                            mem2 = memories[j]
                            
                            # 使用LLM判断语义相似度
                            similarity = await self._calculate_semantic_similarity(mem1["content"], mem2["content"])
                            
                            if similarity >= threshold:
                                # 合并记忆
                                merged_memory_id = await self._merge_memories(mem1, mem2, similarity)
                                if merged_memory_id:
                                    merged += 1
                                    logger.info(f"[MemoryStore] 合并记忆: {mem1['id'][:8]} + {mem2['id'][:8]} → {merged_memory_id[:8]}")
                        except Exception as e:
                            logger.warning(f"[MemoryStore] 去重处理失败: {e}")
                            errors += 1
            
            logger.info(f"[MemoryStore] 深度去重完成: 处理 {processed} 对，合并 {merged} 条，错误 {errors} 个")
            return {"processed": processed, "merged": merged, "errors": errors}
        except Exception as e:
            logger.error(f"[MemoryStore] 深度去重失败: {e}")
            return {"processed": 0, "merged": 0, "errors": 1, "message": str(e)}
    
    async def _calculate_semantic_similarity(self, content1: str, content2: str) -> float:
        """
        使用LLM计算两个内容的语义相似度
        
        Args:
            content1: 第一个内容
            content2: 第二个内容
            
        Returns:
            相似度分数 (0-1)
        """
        try:
            from mcp_memory.llm.facade import llm_facade
            
            prompt = f"""
            请判断以下两个内容的语义相似度，返回一个0-1之间的数字，其中1表示完全相同，0表示完全不同。
            
            内容1:
            {content1[:1000]}
            
            内容2:
            {content2[:1000]}
            
            请只返回数字，不要有其他文字。
            """
            
            response = await llm_facade.chat_completion(
                messages=[{"role": "user", "content": prompt}],
                temperature=0.1,
                max_tokens=10
            )
            
            if response:
                # 提取数字
                import re
                match = re.search(r'\d+(\.\d+)?', response)
                if match:
                    score = float(match.group())
                    return max(0, min(1, score))
        except Exception as e:
            logger.warning(f"[MemoryStore] 计算语义相似度失败: {e}")
        
        #  fallback: 使用简单的文本相似度
        return self._simple_text_similarity(content1, content2)
    
    def _simple_text_similarity(self, content1: str, content2: str) -> float:
        """
        简单的文本相似度计算
        
        Args:
            content1: 第一个内容
            content2: 第二个内容
            
        Returns:
            相似度分数 (0-1)
        """
        import difflib
        return difflib.SequenceMatcher(None, content1, content2).ratio()
    
    async def _merge_memories(self, mem1: dict, mem2: dict, similarity: float) -> str:
        """
        合并两个相似的记忆
        
        Args:
            mem1: 第一个记忆
            mem2: 第二个记忆
            similarity: 相似度分数
            
        Returns:
            合并后的记忆ID
        """
        try:
            # 生成合并后的内容
            merged_content = await self._generate_merged_content(mem1["content"], mem2["content"])
            
            # 创建新的记忆项
            from mcp_memory.models.data_models import MemoryItem
            from datetime import datetime
            
            # 合并元数据
            meta1 = mem1["metadata"]
            meta2 = mem2["metadata"]
            
            merged_meta = {
                "title": meta1.get("title", "") or meta2.get("title", ""),
                "description": meta1.get("description", "") or meta2.get("description", ""),
                "summary": meta1.get("summary", "") or meta2.get("summary", ""),
                "content_type": meta1.get("content_type", "note"),
                "keywords": self._merge_lists(meta1.get("keywords", "[]"), meta2.get("keywords", "[]")),
                "tags": self._merge_lists(meta1.get("tags", "[]"), meta2.get("tags", "[]")),
                "importance": max(float(meta1.get("importance", 1.0)), float(meta2.get("importance", 1.0))),
                "access_count": int(meta1.get("access_count", 0)) + int(meta2.get("access_count", 0)),
                "memory_type": meta1.get("memory_type", "storage"),
                "source_memories": json.dumps([mem1["id"], mem2["id"]], ensure_ascii=False),
                "is_merged_memory": True,
                "merged_from": [mem1["id"], mem2["id"]],
                "merged_at": datetime.now().isoformat(),
                "merged_count": 2,
                "merge_reason": f"语义相似度: {similarity:.2f}",
                "merge_status": "merged"
            }
            
            # 创建记忆项
            memory = MemoryItem(
                content=merged_content,
                user_id=meta1.get("user_id", "unknown"),
                scope=meta1.get("scope", "project"),
                project_id=meta1.get("project_id", ""),
                title=merged_meta["title"] or merged_content[:50] + "...",
                description=merged_meta["description"],
                summary=merged_meta["summary"],
                content_type=merged_meta["content_type"],
                keywords=self._parse_json_field(merged_meta["keywords"]),
                tags=self._parse_json_field(merged_meta["tags"]),
                importance=merged_meta["importance"],
                access_count=merged_meta["access_count"],
                memory_type=merged_meta["memory_type"],
                source_memories=[mem1["id"], mem2["id"]]
            )
            
            # 保存合并后的记忆
            merged_memory_id = self.save(memory)
            
            # 更新原记忆的状态
            for mem in [mem1, mem2]:
                self.collection.update(
                    ids=[mem["id"]],
                    metadatas=[{
                        **mem["metadata"],
                        "merge_status": "merged_into",
                        "merged_into_id": merged_memory_id,
                        "merged_at": datetime.now().isoformat()
                    }]
                )
            
            return merged_memory_id
        except Exception as e:
            logger.warning(f"[MemoryStore] 合并记忆失败: {e}")
            return None
    
    async def _generate_merged_content(self, content1: str, content2: str) -> str:
        """
        生成合并后的内容
        
        Args:
            content1: 第一个内容
            content2: 第二个内容
            
        Returns:
            合并后的内容
        """
        try:
            from mcp_memory.llm.facade import llm_facade
            
            prompt = f"""
            请将以下两个内容合并成一个更完整、更清晰的版本，保留所有重要信息，去除重复内容。
            
            内容1:
            {content1[:1000]}
            
            内容2:
            {content2[:1000]}
            
            合并后的内容应该：
            1. 保持原有的风格和语气
            2. 去除重复的信息
            3. 组织成逻辑清晰的结构
            4. 保留所有重要的细节
            """
            
            response = await llm_facade.chat_completion(
                messages=[{"role": "user", "content": prompt}],
                temperature=0.3,
                max_tokens=1000
            )
            
            if response:
                return response
        except Exception as e:
            logger.warning(f"[MemoryStore] 生成合并内容失败: {e}")
        
        # fallback: 简单拼接
        return f"{content1}\n\n=== 合并内容 ===\n\n{content2}"
    
    def _merge_lists(self, list1: str, list2: str) -> str:
        """
        合并两个列表字符串
        
        Args:
            list1: 第一个列表字符串
            list2: 第二个列表字符串
            
        Returns:
            合并后的列表字符串
        """
        try:
            items1 = self._parse_json_field(list1)
            items2 = self._parse_json_field(list2)
            merged = list(set(items1 + items2))
            return json.dumps(merged, ensure_ascii=False)
        except Exception:
            return json.dumps([], ensure_ascii=False)

    # ========== 增强去重引擎（多层检测 + 真正删除） ==========

    def _content_fingerprint(self, content: str) -> str:
        """生成内容指纹：标准化后的内容哈希"""
        import re, hashlib
        normalized = re.sub(r'\s+', ' ', content.lower().strip())
        normalized = re.sub(r'[^\w\u4e00-\u9fff]', '', normalized)
        return hashlib.md5(normalized.encode()).hexdigest() if len(normalized) > 10 else hashlib.md5(content.encode()).hexdigest()

    def _find_exact_duplicates(self, memories: List[dict]) -> Dict[str, List[dict]]:
        """Layer 1: 精确/近精确重复检测（基于内容指纹，O(n)）"""
        import hashlib
        fp_groups: Dict[str, List[dict]] = {}
        for mem in memories:
            content = mem.get("content", "")
            fp = self._content_fingerprint(content)
            if fp not in fp_groups:
                fp_groups[fp] = []
            fp_groups[fp].append(mem)

        duplicates: Dict[str, List[dict]] = {}
        for fp, group in fp_groups.items():
            if len(group) > 1:
                duplicates[fp] = group

        return duplicates

    def _find_fuzzy_duplicates(self, memories: List[dict], threshold: float = 0.85) -> List[List[dict]]:
        """Layer 2: 模糊重复检测（基于 difflib SequenceMatcher，O(n²) 但仅对同类型同用户）"""
        import difflib
        from collections import defaultdict

        groups: Dict[str, List[dict]] = defaultdict(list)
        for mem in memories:
            key = f"{mem.get('user_id', '')}_{mem.get('memory_type', '')}"
            groups[key].append(mem)

        clusters: List[List[dict]] = []
        processed_indices: set = set()

        for key, group in groups.items():
            for i in range(len(group)):
                if i in processed_indices:
                    continue
                cluster = [group[i]]
                processed_indices.add(i)
                for j in range(i + 1, len(group)):
                    if j in processed_indices:
                        continue
                    c1 = group[i].get("content", "")
                    c2 = group[j].get("content", "")
                    if not c1 or not c2 or len(c1) < 10 or len(c2) < 10:
                        continue
                    ratio = difflib.SequenceMatcher(None, c1[:500], c2[:500]).ratio()
                    if ratio >= threshold:
                        cluster.append(group[j])
                        processed_indices.add(j)
                if len(cluster) > 1:
                    clusters.append(cluster)

        return clusters

    def _pick_best_memory(self, cluster: List[dict]) -> dict:
        """从重复簇中选择保留的最佳记忆"""
        scored = []
        for mem in cluster:
            meta = mem.get("metadata", {})
            score = 0
            content = mem.get("content", "")

            length_score = min(1.0, len(content) / 200)
            score += length_score * 20

            access_count = int(meta.get("access_count", 0))
            score += access_count * 2

            importance = float(meta.get("importance", 1.0))
            score += importance * 10

            has_keywords = bool(meta.get("keywords"))
            has_summary = bool(meta.get("summary"))
            score += (5 if has_keywords else 0) + (3 if has_summary else 0)

            newer_is_better = meta.get("timestamp", "")
            try:
                from datetime import datetime
                ts = datetime.fromisoformat(newer_is_better) if newer_is_better else datetime.min
                age_days = (datetime.now() - ts).days
                score -= age_days * 0.01
            except (ValueError, TypeError):
                pass

            scored.append((score, mem))

        scored.sort(key=lambda x: x[0], reverse=True)
        return scored[0][1]

    def smart_deduplicate(
        self,
        user_id: str = None,
        fuzzy_threshold: float = 0.82,
        dry_run: bool = False,
        delete_duplicates: bool = True
    ) -> dict:
        """
        增强版智能去重：三层检测 + 真正删除重复记忆

        Layer 1: 精确重复（内容指纹相同）→ 直接删除
        Layer 2: 模糊重复（相似度 > threshold）→ 保留最佳，删除其余
        Layer 3: （可选）语义聚类 → LLM 辅助判断

        Args:
            user_id: 用户ID，None 则处理所有用户
            fuzzy_threshold: 模糊匹配阈值（默认 0.82）
            dry_run: 仅分析不执行删除
            delete_duplicates: 是否真正删除重复项

        Returns:
            去重统计报告
        """
        report = {
            "total_before": 0,
            "total_after": 0,
            "exact_duplicates": 0,
            "fuzzy_duplicates": 0,
            "deleted_ids": [],
            "kept_ids": [],
            "clusters_found": 0,
            "dry_run": dry_run
        }

        try:
            where_filter = {"user_id": {"$eq": user_id}} if user_id else None
            all_data = self.collection.get(where=where_filter, include=['documents', 'metadatas'])

            if not all_data or not all_data.get("ids"):
                return {**report, "message": "无记忆数据"}

            ids = all_data["ids"]
            docs = all_data["documents"]
            metas = all_data["metadatas"]
            report["total_before"] = len(ids)

            if len(ids) <= 1:
                return {**report, "message": "记忆数量不足，无需去重"}

            memories = []
            for i in range(len(ids)):
                memories.append({
                    "id": ids[i],
                    "content": docs[i] if i < len(docs) else "",
                    "metadata": metas[i] if i < len(metas) else {}
                })

            logger.info("[smart_deduplicate] 开始分析 %d 条记忆...", len(memories))

            # === Layer 1: 精确重复 ===
            exact_dups = self._find_exact_duplicates(memories)
            exact_dup_ids: set = set()
            exact_kept_ids: set = set()

            for fp, dup_group in exact_dups.items():
                report["clusters_found"] += 1
                best = self._pick_best_memory(dup_group)
                exact_kept_ids.add(best["id"])
                for mem in dup_group:
                    if mem["id"] != best["id"]:
                        exact_dup_ids.add(mem["id"])
                        report["exact_duplicates"] += 1

            logger.info("[smart_deduplicate] Layer 1 完成: %d 组精确重复, 将删除 %d 条",
                       len(exact_dups), len(exact_dup_ids))

            # === Layer 2: 模糊重复 ===
            non_exact = [m for m in memories if m["id"] not in exact_dup_ids and m["id"] not in exact_kept_ids]
            fuzzy_clusters = self._find_fuzzy_duplicates(non_exact, fuzzy_threshold)
            fuzzy_dup_ids: set = set()
            fuzzy_kept_ids: set = set()

            for cluster in fuzzy_clusters:
                report["clusters_found"] += 1
                best = self._pick_best_memory(cluster)
                fuzzy_kept_ids.add(best["id"])
                for mem in cluster:
                    if mem["id"] != best["id"]:
                        fuzzy_dup_ids.add(mem["id"])
                        report["fuzzy_duplicates"] += 1

            logger.info("[smart_deduplicate] Layer 2 完成: %d 组模糊重复, 将删除 %d 条",
                       len(fuzzy_clusters), len(fuzzy_dup_ids))

            # === 汇总 & 执行 ===
            all_to_delete = exact_dup_ids | fuzzy_dup_ids
            all_to_keep = exact_kept_ids | fuzzy_kept_ids | {m["id"] for m in non_exact if m["id"] not in fuzzy_dup_ids and m["id"] not in fuzzy_kept_ids}

            report["deleted_ids"] = list(all_to_delete)
            report["kept_ids"] = list(all_to_keep)
            report["total_after"] = len(all_to_keep)

            if dry_run:
                logger.info("[smart_deduplicate] DRY RUN 模式: 不执行实际删除")
                return report

            if delete_duplicates and all_to_delete:
                delete_list = list(all_to_delete)
                for i in range(0, len(delete_list), 50):
                    batch = delete_list[i:i+50]
                    try:
                        self.collection.delete(ids=batch)
                        logger.debug("[smart_deduplicate] 已删除批次: %d 条", len(batch))
                    except Exception as e:
                        logger.warning("[smart_deduplicate] 删除失败 (batch): %s", e)

                self._rebuild_bm25_index()
                logger.info("[smart_deduplicate] 实际删除完成: 删除 %d 条, 保留 %d 条",
                           len(all_to_delete), len(all_to_keep))

            return report

        except Exception as e:
            logger.error("[smart_deduplicate] 去重失败: %s", e)
            return {**report, "error": str(e)}

    def enhance_save_with_dedup(self, memory: MemoryItem) -> str:
        """
        写入时增强去重：在 save() 基础上增加 BM25 文本相似度检查

        当向量距离不够近但文本高度相似时（如同一段话换了表述方式），
        也应判定为重复并强化已有记忆而非新增。
        """
        is_profile = self._is_profile_content(memory.content)

        existing_id = self._check_write_time_duplicate(memory)
        if existing_id:
            return existing_id

        last_accessed_iso = memory.last_accessed.isoformat() if memory.last_accessed else datetime.now().isoformat()
        char_count = len(memory.content) if memory.content else 0

        def _to_str(val):
            if val is None: return ""
            if isinstance(val, (list, dict)): return json.dumps(val, ensure_ascii=False)
            return str(val)

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
            "title": _to_str(memory.title),
            "description": _to_str(memory.description),
            "summary": _to_str(memory.summary),
            "content_type": memory.content_type or "note",
            "keywords": json.dumps(memory.keywords or [], ensure_ascii=False),
            "tags": json.dumps(memory.tags or [], ensure_ascii=False),
            "char_count": char_count,
            "max_chars": memory.max_chars or 1000,
        }

        memory_id = str(uuid.uuid4())

        try:
            self.collection.upsert(ids=[memory_id], documents=[memory.content], metadatas=[metadata])
        except Exception as e:
            logger.warning(f"[MemoryStore] upsert 失败: {e}")
            memory_id = str(uuid.uuid4())
            self.collection.upsert(ids=[memory_id], documents=[memory.content], metadatas=[metadata])

        self._add_to_bm25_index(memory_id, memory.content)

        if is_profile:
            try:
                profile_meta = {**metadata}
                profile_meta["is_profile"] = "True"
                self.profile_collection.upsert(
                    ids=[f"profile_{memory.user_id}"],
                    documents=[memory.content],
                    metadatas=[profile_meta]
                )
            except Exception as e:
                logger.warning(f"[MemoryStore] 更新个人档案失败: {e}")

        logger.debug(f"[MemoryStore] 记忆已保存: {memory_id[:12]}... type={memory.memory_type}")
        return memory_id

    def _check_write_time_duplicate(self, memory: MemoryItem) -> Optional[str]:
        """写入时快速去重检查：向量 + BM25 双重验证"""
        content = memory.content
        if not content or len(content.strip()) < 5:
            return None

        # 快速路径：向量距离 < 0.08（约 99% 相似）
        try:
            where_clause = {"$and": [
                {"user_id": {"$eq": memory.user_id}},
                {"scope": {"$eq": memory.scope}},
                {"memory_type": {"$eq": memory.memory_type or "storage"}}
            ]}
            results = self.collection.query(
                query_texts=[content],
                n_results=3,
                where=where_clause
            )
            if results["ids"] and results["ids"][0]:
                dist = results["distances"][0][0]
                if dist < 0.08:
                    existing_id = results["ids"][0][0]
                    existing_meta = results["metadatas"][0][0]
                    logger.info("[write_dedup] 向量命中 (dist=%.3f): 强化 %s", dist, existing_id[:8])
                    self._reinforce_memory(existing_id, existing_meta)
                    return existing_id
        except Exception as e:
            logger.debug("[write_dedup] 向量查重跳过: %s", e)

        # 中速路径：BM25 文本相似度 > 0.88
        try:
            self._ensure_bm25_fresh()
            if self._bm25_index and self._bm25_docs:
                tokenized_query = list(jieba.cut_for_search(content))
                scores = self._bm25_index.get_scores(tokenized_query)
                if scores:
                    max_score = max(scores)
                    max_idx = scores.index(max_score)
                    if max_score > 15.0 and max_idx < len(self._bm25_ids):
                        candidate_id = self._bm25_ids[max_idx]
                        candidate_doc = self._bm25_docs[max_idx] if max_idx < len(self._bm25_docs) else ""
                        if candidate_doc and candidate_id != getattr(memory, 'memory_id', None):
                            import difflib
                            ratio = difflib.SequenceMatcher(None, content[:300], candidate_doc[:300]).ratio()
                            if ratio > 0.88:
                                logger.info("[write_dedup] BM25+文本命中 (score=%.1f ratio=%.2f): 强化 %s",
                                           max_score, ratio, candidate_id[:8])
                                candidate_results = self.collection.get(ids=[candidate_id], include=['metadatas'])
                                if candidate_results and candidate_results.get("metadatas"):
                                    self._reinforce_memory(candidate_id, candidate_results["metadatas"][0])
                                return candidate_id
        except Exception as e:
            logger.debug("[write_dedup] BM25 查重跳过: %s", e)

        return None

    # ========== Layer 4: 向量语义聚类去重 ==========

    def semantic_deduplicate(
        self,
        user_id: str = None,
        vector_threshold: float = 0.92,
        dry_run: bool = False,
        delete_duplicates: bool = True
    ) -> dict:
        """
        Layer 4: 基于向量语义相似度的去重
        利用 ChromaDB 内置的 embedding 做余弦相似度聚类，
        专门捕捉 LLM 改写导致的「语义等价但措辞不同」的重复内容。

        Args:
            user_id: 用户ID
            vector_threshold: 余弦相似度阈值（默认 0.92，即距离 < 0.08 视为重复）
            dry_run: 仅分析不删除
            delete_duplicates: 是否实际删除

        Returns:
            去重报告
        """
        report = {
            "total_before": 0,
            "total_after": 0,
            "semantic_duplicates": 0,
            "deleted_ids": [],
            "kept_ids": [],
            "clusters_found": 0,
            "dry_run": dry_run,
            "method": "vector_semantic"
        }

        try:
            where_filter = {"user_id": {"$eq": user_id}} if user_id else None
            all_data = self.collection.get(where=where_filter, include=['documents', 'metadatas'])

            if not all_data or not all_data.get("ids"):
                return {**report, "message": "无记忆数据"}

            ids = all_data["ids"]
            docs = all_data["documents"]
            metas = all_data["metadatas"]
            report["total_before"] = len(ids)

            if len(ids) <= 1:
                return {**report, "message": "记忆数量不足"}

            logger.info("[semantic_deduplicate] 开始向量语义分析 %d 条记忆...", len(ids))

            # 对每条记忆查询最相似的邻居
            processed: set = set()
            to_delete: set = set()
            clusters: List[List[dict]] = []

            for i, mem_id in enumerate(ids):
                if mem_id in processed:
                    continue

                doc = docs[i] if i < len(docs) else ""
                meta = metas[i] if i < len(metas) else {}

                # 用当前文档作为 query，找 top-5 最相似的
                try:
                    results = self.collection.query(
                        query_texts=[doc],
                        n_results=6,
                        where=where_filter,
                        include=["distances", "metadatas"]
                    )
                except Exception as e:
                    logger.debug("[semantic_dedup] 查询失败 id=%s: %s", mem_id[:8], e)
                    continue

                if not results["ids"] or not results["ids"][0]:
                    continue

                neighbor_ids = results["ids"][0]
                distances = results["distances"][0] if results["distances"] else []

                cluster = [{"id": mem_id, "content": doc, "metadata": meta}]
                processed.add(mem_id)

                for j, nid in enumerate(neighbor_ids):
                    if nid == mem_id:
                        continue
                    if j >= len(distances):
                        break
                    dist = distances[j]

                    if dist < (1.0 - vector_threshold):
                        if nid not in processed:
                            nj = ids.index(nid) if nid in ids else -1
                            n_doc = docs[nj] if 0 <= nj < len(docs) else ""
                            n_meta = metas[nj] if 0 <= nj < len(metas) else {}
                            cluster.append({"id": nid, "content": n_doc, "metadata": n_meta})
                            processed.add(nid)

                if len(cluster) > 1:
                    clusters.append(cluster)
                    report["clusters_found"] += 1

            logger.info("[semantic_deduplicate] 发现 %d 个语义重复簇", len(clusters))

            for cluster in clusters:
                best = self._pick_best_memory(cluster)
                report["kept_ids"].append(best["id"])
                for mem in cluster:
                    if mem["id"] != best["id"]:
                        to_delete.add(mem["id"])
                        report["semantic_duplicates"] += 1

            report["deleted_ids"] = list(to_delete)
            report["total_after"] = len(ids) - len(to_delete)

            if dry_run:
                logger.info("[semantic_dedup] DRY RUN: 将删除 %d 条", len(to_delete))
                return report

            if delete_duplicates and to_delete:
                delete_list = list(to_delete)
                for batch_start in range(0, len(delete_list), 50):
                    batch = delete_list[batch_start:batch_start+50]
                    try:
                        self.collection.delete(ids=batch)
                    except Exception as e:
                        logger.warning("[semantic_dedup] 删除失败: %s", e)

                self._rebuild_bm25_index()
                logger.info("[semantic_dedup] 完成: 删除 %d 条语义重复, 保留 %d 条",
                           len(to_delete), report["total_after"])

            return report

        except Exception as e:
            logger.error("[semantic_deduplicate] 失败: %s", e)
            return {**report, "error": str(e)}

    def full_deduplicate_pipeline(
        self,
        user_id: str = None,
        fuzzy_threshold: float = 0.82,
        vector_threshold: float = 0.92,
        dry_run: bool = False,
    ) -> dict:
        """
        完整去重流水线：按顺序执行所有 4 层检测

        Layer 1: 精确重复（内容指纹）
        Layer 2: 模糊重复（difflib SequenceMatcher）
        Layer 3: 向量语义重复（ChromaDB embedding 余弦距离）
        Layer 4: 写入时预防（已集成到 enhance_save_with_dedup）

        Args:
            user_id: 用户ID
            fuzzy_threshold: Layer 2 阈值
            vector_threshold: Layer 3 阈值
            dry_run: 仅分析模式

        Returns:
            完整报告
        """
        pipeline_report = {
            "phases": {},
            "total_before": 0,
            "total_after": 0,
            "total_deleted": 0
        }

        all_data = self.collection.get(include=['documents', 'metadatas'])
        pipeline_report["total_before"] = len(all_data['ids'])

        if dry_run:
            print(f"\n{'='*60}")
            print("  FULL DEDUP PIPELINE — DRY RUN")
            print(f"{'='*60}")

        # Phase 1: Exact + Fuzzy
        r1 = self.smart_deduplicate(
            user_id=user_id,
            fuzzy_threshold=fuzzy_threshold,
            dry_run=dry_run,
            delete_duplicates=not dry_run
        )
        pipeline_report["phases"]["layer1_exact_fuzzy"] = r1

        if dry_run:
            print(f"\n  Phase 1 (Exact+Fuzzy): {r1['total_before']} → {r1['total_after']} "
                  f"(删 {len(r1['deleted_ids'])}: exact={r1['exact_duplicates']} fuzzy={r1['fuzzy_duplicates']})")

        # Phase 2: Vector Semantic
        r2 = self.semantic_deduplicate(
            user_id=user_id,
            vector_threshold=vector_threshold,
            dry_run=dry_run,
            delete_duplicates=not dry_run
        )
        pipeline_report["phases"]["layer2_vector_semantic"] = r2

        if dry_run:
            print(f"  Phase 2 (Vector):   {r2['total_before']} → {r2['total_after']} "
                  f"(删 {len(r2['deleted_ids'])} 语义重复)")

        final_data = self.collection.get(include=['documents'])
        pipeline_report["total_after"] = len(final_data['ids'])
        pipeline_report["total_deleted"] = pipeline_report["total_before"] - pipeline_report["total_after"]

        if dry_run:
            print(f"\n{'='*60}")
            print(f"  总计: {pipeline_report['total_before']} → {pipeline_report['total_after']} "
                  f"(共删 {pipeline_report['total_deleted']})")
            print(f"{'='*60}\n")

        return pipeline_report

    # ========== 用户管理和使用统计 ==========

    def get_all_users(self) -> List[Dict[str, Any]]:
        """获取系统中的所有用户及其统计信息"""
        try:
            all_data = self.collection.get(include=['metadatas'])
            if not all_data or not all_data.get('metadatas'):
                return []

            user_stats = {}
            for meta in all_data['metadatas']:
                user_id = meta.get('user_id', 'unknown')
                if user_id not in user_stats:
                    user_stats[user_id] = {
                        'user_id': user_id,
                        'memory_count': 0,
                        'storage_count': 0,
                        'thinking_count': 0,
                        'skill_count': 0,
                        'total_chars': 0,
                        'first_seen': None,
                        'last_seen': None
                    }
                
                stat = user_stats[user_id]
                stat['memory_count'] += 1
                
                mem_type = meta.get('memory_type', 'storage')
                type_key = f'{mem_type}_count'
                if type_key in stat:
                    stat[type_key] += 1
                
                stat['total_chars'] += meta.get('char_count', 0)
                
                ts = meta.get('timestamp')
                if ts:
                    if not stat['first_seen'] or ts < stat['first_seen']:
                        stat['first_seen'] = ts
                    if not stat['last_seen'] or ts > stat['last_seen']:
                        stat['last_seen'] = ts

            return list(user_stats.values())
        except Exception as e:
            logger.error(f"[MemoryStore] 获取用户列表失败: {e}")
            return []

    def delete_user(self, user_id: str, force: bool = False) -> bool:
        """删除指定用户及其所有记忆数据"""
        try:
            where_filter = {"user_id": {"$eq": user_id}}
            user_data = self.collection.get(where=where_filter)
            
            if not user_data or not user_data.get('ids'):
                return False

            memory_ids = user_data['ids']
            self.collection.delete(ids=memory_ids)
            
            # 清理 BM25 索引
            for mem_id in memory_ids:
                self._remove_from_bm25_index(mem_id)
            
            # 清理图谱中该用户的节点
            nodes_to_remove = []
            for node_id, node_data in self.graph.nodes(data=True):
                if node_data.get('user_id') == user_id:
                    nodes_to_remove.append(node_id)
            
            for node_id in nodes_to_remove:
                if node_id in self.graph:
                    self.graph.remove_node(node_id)
                    self._graph_dirty = True
            
            if self._graph_dirty:
                self._save_graph()
            
            # 重建 BM25 索引
            self._rebuild_bm25_index()
            
            logger.info(f"[MemoryStore] 删除用户 {user_id} 完成，删除了 {len(memory_ids)} 条记忆")
            return True
        except Exception as e:
            logger.error(f"[MemoryStore] 删除用户失败: {e}")
            return False

    def get_user_usage(self, user_id: str, period: str = "7d") -> Dict[str, Any]:
        """获取用户使用统计信息"""
        try:
            from datetime import datetime, timedelta

            # 计算时间范围
            now = datetime.now()
            if period == "1d":
                start_time = now - timedelta(days=1)
            elif period == "7d":
                start_time = now - timedelta(days=7)
            elif period == "30d":
                start_time = now - timedelta(days=30)
            else:
                start_time = None

            where_filter = {"user_id": {"$eq": user_id}}
            all_data = self.collection.get(where=where_filter, include=['metadatas'])
            
            if not all_data or not all_data.get('metadatas'):
                return {
                    'user_id': user_id,
                    'period': period,
                    'total_memories': 0,
                    'recent_memories': 0,
                    'total_chars': 0,
                    'by_type': {'storage': 0, 'thinking': 0, 'skill': 0},
                    'by_scope': {'project': 0, 'global': 0}
                }

            total_memories = len(all_data['metadatas'])
            recent_memories = 0
            total_chars = 0
            by_type = {'storage': 0, 'thinking': 0, 'skill': 0}
            by_scope = {'project': 0, 'global': 0}

            for meta in all_data['metadatas']:
                total_chars += meta.get('char_count', 0)
                
                mem_type = meta.get('memory_type', 'storage')
                if mem_type in by_type:
                    by_type[mem_type] += 1
                
                scope = meta.get('scope', 'project')
                if scope in by_scope:
                    by_scope[scope] += 1
                
                if start_time:
                    ts = meta.get('timestamp')
                    if ts:
                        try:
                            mem_time = datetime.fromisoformat(ts)
                            if mem_time >= start_time:
                                recent_memories += 1
                        except (ValueError, TypeError):
                            pass

            if start_time is None:
                recent_memories = total_memories

            return {
                'user_id': user_id,
                'period': period,
                'total_memories': total_memories,
                'recent_memories': recent_memories,
                'total_chars': total_chars,
                'by_type': by_type,
                'by_scope': by_scope
            }
        except Exception as e:
            logger.error(f"[MemoryStore] 获取用户使用统计失败: {e}")
            return {
                'user_id': user_id,
                'period': period,
                'error': str(e)
            }
