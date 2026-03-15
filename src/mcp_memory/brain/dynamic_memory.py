"""
动态记忆层
实现记忆巩固机制、遗忘系统和联想引擎
让AI能够主动管理记忆的生命周期
"""

from typing import List, Dict, Any, Optional, Tuple, Set
from datetime import datetime, timedelta
from dataclasses import dataclass, field
from enum import Enum
import math
import networkx as nx
import random


class MemoryState(str, Enum):
    """记忆状态"""
    ACTIVE = "active"           # 活跃记忆，频繁访问
    CONSOLIDATED = "consolidated" # 已巩固，稳定存储
    DECAYING = "decaying"        # 衰退中，可能被遗忘
    FORGOTTEN = "forgotten"     # 已遗忘


class AssociationType(str, Enum):
    """联想类型"""
    SEMANTIC = "semantic"       # 语义联想
    TEMPORAL = "temporal"       # 时间联想
    CAUSAL = "causal"          # 因果联想
    HIERARCHICAL = "hierarchical" # 层级联想
    CONTEXTUAL = "contextual"   # 上下文联想


@dataclass
class MemoryTrace:
    """记忆痕迹"""
    memory_id: str
    strength: float              # 记忆强度 (0-1)
    activation: float           # 当前激活水平 (0-1)
    last_accessed: datetime
    access_count: int
    state: MemoryState
    created_at: datetime
    decay_rate: float          # 衰减率

    def to_dict(self) -> Dict[str, Any]:
        return {
            "memory_id": self.memory_id,
            "strength": self.strength,
            "activation": self.activation,
            "last_accessed": self.last_accessed.isoformat(),
            "access_count": self.access_count,
            "state": self.state.value,
            "created_at": self.created_at.isoformat(),
            "decay_rate": self.decay_rate
        }


@dataclass
class Association:
    """记忆联想"""
    source_id: str
    target_id: str
    association_type: AssociationType
    strength: float              # 联想强度 (0-1)
    created_at: datetime
    last_activated: datetime

    def to_dict(self) -> Dict[str, Any]:
        return {
            "source_id": self.source_id,
            "target_id": self.target_id,
            "association_type": self.association_type.value,
            "strength": self.strength,
            "created_at": self.created_at.isoformat(),
            "last_activated": self.last_activated.isoformat()
        }


class ConsolidationSystem:
    """
    记忆巩固系统
    模拟海马体到大脑皮层的记忆转移过程
    """

    def __init__(self):
        self.memory_traces: Dict[str, MemoryTrace] = {}
        self.consolidation_queue: List[str] = []
        self.consolidation_interval = timedelta(hours=24)  # 默认24小时巩固一次
        self.strengthening_factor = 0.15  # 强化因子

    def create_trace(self, memory_id: str, importance: float = 0.5) -> MemoryTrace:
        """
        创建记忆痕迹

        Args:
            memory_id: 记忆ID
            importance: 记忆重要性 (0-1)

        Returns:
            记忆痕迹
        """
        trace = MemoryTrace(
            memory_id=memory_id,
            strength=0.3 + importance * 0.5,  # 基础强度 + 重要性
            activation=1.0,  # 新创建的记忆激活度高
            last_accessed=datetime.now(),
            access_count=1,
            state=MemoryState.ACTIVE,
            created_at=datetime.now(),
            decay_rate=0.05 - importance * 0.03  # 重要记忆衰减更慢
        )

        self.memory_traces[memory_id] = trace
        self.consolidation_queue.append(memory_id)

        print(f"[Consolidation] 创建记忆痕迹: {memory_id[:8]}, 强度: {trace.strength:.2f}")
        return trace

    def activate_memory(self, memory_id: str, activation_amount: float = 0.3):
        """
        激活记忆

        Args:
            memory_id: 记忆ID
            activation_amount: 激活量 (0-1)
        """
        if memory_id not in self.memory_traces:
            return

        trace = self.memory_traces[memory_id]

        # 增加激活水平
        trace.activation = min(1.0, trace.activation + activation_amount)

        # 更新访问记录
        trace.last_accessed = datetime.now()
        trace.access_count += 1

        # 激活会增强记忆
        self.strengthen_memory(memory_id, self.strengthening_factor)

        print(f"[Consolidation] 激活记忆: {memory_id[:8]}, 激活水平: {trace.activation:.2f}")

    def strengthen_memory(self, memory_id: str, factor: float):
        """
        强化记忆

        Args:
            memory_id: 记忆ID
            factor: 强化因子 (0-1)
        """
        if memory_id not in self.memory_traces:
            return

        trace = self.memory_traces[memory_id]

        # 应用强化
        trace.strength = min(1.0, trace.strength + factor * (1.0 - trace.strength))

        # 更新状态
        if trace.strength > 0.8:
            trace.state = MemoryState.CONSOLIDATED
        elif trace.strength > 0.5:
            trace.state = MemoryState.ACTIVE

        print(f"[Consolidation] 强化记忆: {memory_id[:8]}, 新强度: {trace.strength:.2f}")

    def decay_memories(self):
        """衰减所有记忆"""
        current_time = datetime.now()

        for memory_id, trace in self.memory_traces.items():
            # 计算时间差
            time_diff = (current_time - trace.last_accessed).total_seconds()
            time_factor = time_diff / (24 * 3600)  # 以天为单位

            # 应用衰减
            decay_amount = trace.decay_rate * time_factor
            trace.strength = max(0.0, trace.strength - decay_amount)

            # 衰减激活水平
            trace.activation *= 0.95  # 激活水平快速衰减

            # 更新状态
            if trace.strength < 0.2:
                trace.state = MemoryState.FORGOTTEN
            elif trace.strength < 0.4:
                trace.state = MemoryState.DECAYING
            elif trace.strength > 0.8:
                trace.state = MemoryState.CONSOLIDATED
            else:
                trace.state = MemoryState.ACTIVE

        print(f"[Consolidation] 已衰减 {len(self.memory_traces)} 个记忆")

    def consolidate_short_term(self):
        """巩固短期记忆到长期记忆"""
        if not self.consolidation_queue:
            print("[Consolidation] 没有需要巩固的记忆")
            return

        # 处理队列中的记忆
        consolidated_count = 0
        remaining_queue = []

        for memory_id in self.consolidation_queue:
            trace = self.memory_traces.get(memory_id)

            if trace and trace.state == MemoryState.ACTIVE:
                # 检查是否应该巩固
                time_since_creation = datetime.now() - trace.created_at

                # 访问次数多或时间长的记忆优先巩固
                if trace.access_count >= 3 or time_since_creation >= timedelta(hours=12):
                    # 提升到巩固状态
                    trace.strength = min(1.0, trace.strength + 0.2)
                    trace.state = MemoryState.CONSOLIDATED
                    consolidated_count += 1
                    print(f"[Consolidation] 巩固记忆: {memory_id[:8]}")
                else:
                    remaining_queue.append(memory_id)

        self.consolidation_queue = remaining_queue

        print(f"[Consolidation] 本轮巩固了 {consolidated_count} 个记忆")

    def get_memory_trace(self, memory_id: str) -> Optional[MemoryTrace]:
        """获取记忆痕迹"""
        return self.memory_traces.get(memory_id)

    def get_active_memories(self) -> List[MemoryTrace]:
        """获取活跃记忆"""
        return [trace for trace in self.memory_traces.values()
                if trace.state == MemoryState.ACTIVE]

    def get_forgotten_memories(self) -> List[MemoryTrace]:
        """获取已遗忘记忆"""
        return [trace for trace in self.memory_traces.values()
                if trace.state == MemoryState.FORGOTTEN]


class ForgettingMechanism:
    """
    遗忘机制
    主动清除低价值记忆，保持记忆活力
    """

    def __init__(self):
        self.forgetting_history: List[Dict[str, Any]] = []
        self.forgetting_strategy = "graceful"  # graceful, immediate, adaptive

    def should_forget(self, memory_id: str, trace: MemoryTrace, value_score: float = None) -> bool:
        """
        判断是否应该遗忘记忆

        Args:
            memory_id: 记忆ID
            trace: 记忆痕迹
            value_score: 价值评分 (可选)

        Returns:
            是否应该遗忘
        """
        # 已遗忘的记忆不需要再次遗忘
        if trace.state == MemoryState.FORGOTTEN:
            return False

        # 基于记忆状态
        if trace.state == MemoryState.DECAYING:
            # 衰退中的记忆需要检查价值
            if value_score and value_score < 0.3:
                return True
        elif trace.state == MemoryState.ACTIVE:
            # 活跃记忆一般不遗忘
            return False

        # 基于记忆强度
        if trace.strength < 0.2:
            return True

        # 基于访问历史
        if trace.access_count == 1:
            # 只访问过一次且创建时间长的记忆
            days_old = (datetime.now() - trace.created_at).days
            if days_old > 90:
                return True

        return False

    def forget_gracefully(self, memory_id: str, trace: MemoryTrace, content: str = None) -> str:
        """
        优雅遗忘 - 保留核心信息

        Args:
            memory_id: 记忆ID
            trace: 记忆痕迹
            content: 原始内容 (可选)

        Returns:
            遗忘后的摘要内容
        """
        # 根据内容生成摘要
        if content:
            # 保留最重要的信息
            summary = self._extract_essence(content)
        else:
            summary = f"已遗忘记忆 {memory_id[:8]} (强度: {trace.strength:.2f})"

        # 记录遗忘历史
        self.forgetting_history.append({
            "memory_id": memory_id,
            "forgotten_at": datetime.now().isoformat(),
            "original_strength": trace.strength,
            "summary": summary[:200],
            "strategy": self.forgetting_strategy
        })

        # 标记为已遗忘
        trace.state = MemoryState.FORGOTTEN
        trace.strength = 0.0
        trace.activation = 0.0

        print(f"[Forgetting] 优雅遗忘: {memory_id[:8]}, 摘要: {summary[:50]}...")
        return summary

    def _extract_essence(self, content: str) -> str:
        """提取内容本质"""
        if not content:
            return "空内容"

        # 简化实现：提取关键句
        sentences = content.split('.')

        # 按长度排序，取中等长度的句子
        sentences_with_length = [(s.strip(), len(s)) for s in sentences if s.strip()]
        sorted_sentences = sorted(sentences_with_length, key=lambda x: x[1])

        # 取中间长度的句子
        if len(sorted_sentences) >= 3:
            middle_idx = len(sorted_sentences) // 2
            essence = sorted_sentences[middle_idx][0]
        elif sorted_sentences:
            essence = sorted_sentences[0][0]
        else:
            essence = content[:100]

        return essence[:200]

    def cleanup_forgotten_memories(self, memory_store) -> List[str]:
        """
        清理已遗忘记忆

        Args:
            memory_store: 记忆存储

        Returns:
            被清理的记忆ID列表
        """
        forgotten_ids = []

        # 这里需要实际的存储清理逻辑
        # 简化实现：返回空列表
        print(f"[Forgetting] 清理已遗忘记忆 (待实现)")

        return forgotten_ids

    def get_forgetting_statistics(self) -> Dict[str, Any]:
        """获取遗忘统计"""
        total_forgotten = len(self.forgetting_history)

        # 统计不同强度下遗忘的记忆
        strength_distribution = {
            "high_strength_forgotten": sum(1 for h in self.forgetting_history if h["original_strength"] > 0.7),
            "medium_strength_forgotten": sum(1 for h in self.forgetting_history if 0.4 <= h["original_strength"] <= 0.7),
            "low_strength_forgotten": sum(1 for h in self.forgetting_history if h["original_strength"] < 0.4)
        }

        return {
            "total_forgotten": total_forgotten,
            "forgetting_strategy": self.forgetting_strategy,
            "strength_distribution": strength_distribution,
            "recent_forgetting": self.forgetting_history[-10:] if self.forgetting_history else []
        }


class AssociationEngine:
    """
    联想引擎
    建立记忆之间的深层语义关联
    """

    def __init__(self):
        self.associations: List[Association] = []
        self.association_graph = nx.DiGraph()
        self.semantic_embeddings: Dict[str, List[float]] = {}  # 简化的语义嵌入

    def create_associations(self, memory_id: str, content: str, metadata: Dict[str, Any] = None) -> List[Association]:
        """
        为新记忆建立联想

        Args:
            memory_id: 记忆ID
            content: 记忆内容
            metadata: 元数据

        Returns:
            创建的联想列表
        """
        created_associations = []

        # 1. 语义联想 - 基于内容相似性
        semantic_assocs = self._create_semantic_associations(memory_id, content)
        created_associations.extend(semantic_assocs)

        # 2. 上下文联想 - 基于项目、用户等
        if metadata:
            contextual_assocs = self._create_contextual_associations(memory_id, metadata)
            created_associations.extend(contextual_assocs)

        # 3. 时间联想 - 基于创建时间
        temporal_assocs = self._create_temporal_associations(memory_id, metadata)
        created_associations.extend(temporal_assocs)

        # 4. 层级联想 - 基于内容类型
        hierarchical_assocs = self._create_hierarchical_associations(memory_id, metadata)
        created_associations.extend(hierarchical_assocs)

        # 保存联想
        for assoc in created_associations:
            self.associations.append(assoc)

            # 更新图结构
            self.association_graph.add_edge(
                assoc.source_id,
                assoc.target_id,
                weight=assoc.strength,
                type=assoc.association_type.value
            )

        print(f"[Association] 为记忆 {memory_id[:8]} 创建了 {len(created_associations)} 个联想")
        return created_associations

    def _create_semantic_associations(self, memory_id: str, content: str) -> List[Association]:
        """创建语义联想"""
        # 简化实现：基于关键词匹配
        associations = []

        # 提取关键词
        keywords = self._extract_keywords(content)

        # 在现有联想中查找相关记忆
        for existing_assoc in self.associations:
            if existing_assoc.source_id == memory_id:
                continue

            # 检查关键词重叠
            existing_keywords = self._get_keywords_for_memory(existing_assoc.source_id)
            overlap = set(keywords) & set(existing_keywords)

            if overlap and len(overlap) >= 2:
                # 创建语义联想
                strength = min(1.0, len(overlap) / len(keywords) * 1.5)
                assoc = Association(
                    source_id=memory_id,
                    target_id=existing_assoc.source_id,
                    association_type=AssociationType.SEMANTIC,
                    strength=strength,
                    created_at=datetime.now(),
                    last_activated=datetime.now()
                )
                associations.append(assoc)

        return associations

    def _create_contextual_associations(self, memory_id: str, metadata: Dict[str, Any]) -> List[Association]:
        """创建上下文联想"""
        associations = []

        # 基于用户ID
        user_id = metadata.get("user_id")
        if user_id:
            for existing_assoc in self.associations:
                # 获取源记忆的元数据（简化）
                if self._has_same_user(existing_assoc.target_id, user_id):
                    assoc = Association(
                        source_id=memory_id,
                        target_id=existing_assoc.target_id,
                        association_type=AssociationType.CONTEXTUAL,
                        strength=0.6,
                        created_at=datetime.now(),
                        last_activated=datetime.now()
                    )
                    associations.append(assoc)

        # 基于项目ID
        project_id = metadata.get("project_id")
        if project_id:
            for existing_assoc in self.associations:
                if self._has_same_project(existing_assoc.target_id, project_id):
                    assoc = Association(
                        source_id=memory_id,
                        target_id=existing_assoc.target_id,
                        association_type=AssociationType.CONTEXTUAL,
                        strength=0.7,
                        created_at=datetime.now(),
                        last_activated=datetime.now()
                    )
                    associations.append(assoc)

        return associations

    def _create_temporal_associations(self, memory_id: str, metadata: Dict[str, Any]) -> List[Association]:
        """创建时间联想"""
        associations = []

        if not metadata or "timestamp" not in metadata:
            return associations

        current_time = datetime.now()
        memory_time = metadata["timestamp"]

        if isinstance(memory_time, str):
            memory_time = datetime.fromisoformat(memory_time.replace('Z', '+00:00'))

        # 查找时间相近的记忆（简化）
        for existing_assoc in self.associations:
            existing_time_str = existing_assoc.created_at.isoformat()
            existing_time = datetime.fromisoformat(existing_time_str)

            time_diff = abs((memory_time - existing_time).total_seconds())

            # 时间差小于1小时
            if time_diff < 3600:
                assoc = Association(
                    source_id=memory_id,
                    target_id=existing_assoc.source_id,
                    association_type=AssociationType.TEMPORAL,
                    strength=0.5,
                    created_at=datetime.now(),
                    last_activated=datetime.now()
                )
                associations.append(assoc)

        return associations

    def _create_hierarchical_associations(self, memory_id: str, metadata: Dict[str, Any]) -> List[Association]:
        """创建层级联想"""
        associations = []

        if not metadata:
            return associations

        # 基于内容类型
        content_type = metadata.get("content_type", "")
        memory_type = metadata.get("memory_type", "")

        # 查找相同类型的记忆
        for existing_assoc in self.associations:
            existing_type = self._get_memory_type(existing_assoc.target_id)

            if existing_type in [content_type, memory_type]:
                assoc = Association(
                    source_id=memory_id,
                    target_id=existing_assoc.target_id,
                    association_type=AssociationType.HIERARCHICAL,
                    strength=0.6,
                    created_at=datetime.now(),
                    last_activated=datetime.now()
                )
                associations.append(assoc)

        return associations

    def _extract_keywords(self, content: str) -> List[str]:
        """提取关键词（简化）"""
        import re
        words = re.findall(r'\b\w+\b', content.lower())

        # 过滤停用词
        stop_words = {'the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been',
                     'have', 'has', 'had', 'do', 'does', 'did', 'will',
                     '的', '是', '在', '有', '和', '这', '那', '我', '你', '他'}

        keywords = [w for w in words if len(w) > 3 and w not in stop_words]
        return keywords

    def _get_keywords_for_memory(self, memory_id: str) -> List[str]:
        """获取记忆的关键词（简化）"""
        # 简化实现：返回空列表
        # 实际应该从存储中获取
        return []

    def _has_same_user(self, memory_id: str, user_id: str) -> bool:
        """检查是否同一用户（简化）"""
        return False  # 简化实现

    def _has_same_project(self, memory_id: str, project_id: str) -> bool:
        """检查是否同一项目（简化）"""
        return False  # 简化实现

    def _get_memory_type(self, memory_id: str) -> str:
        """获取记忆类型（简化）"""
        return ""  # 简化实现

    def activate_associations(self, cue: str, limit: int = 5) -> List[str]:
        """
        激活相关联想

        Args:
            cue: 激活线索
            limit: 返回数量限制

        Returns:
            被激活的记忆ID列表
        """
        # 提取线索中的关键词
        cue_keywords = self._extract_keywords(cue)

        if not cue_keywords:
            return []

        # 查找包含相似关键词的联想
        activated_memories = []
        seen_ids = set()

        for assoc in self.associations:
            # 检查是否与线索相关
            target_keywords = self._get_keywords_for_memory(assoc.target_id)
            overlap = set(cue_keywords) & set(target_keywords)

            if overlap and assoc.target_id not in seen_ids:
                # 激活联想
                assoc.last_activated = datetime.now()

                # 增强联想强度
                assoc.strength = min(1.0, assoc.strength + 0.05)

                seen_ids.add(assoc.target_id)
                activated_memories.append(assoc.target_id)

                if len(activated_memories) >= limit:
                    break

        print(f"[Association] 激活了 {len(activated_memories)} 个联想")
        return activated_memories

    def get_strong_associations(self, memory_id: str, min_strength: float = 0.7) -> List[Association]:
        """
        获取强联想

        Args:
            memory_id: 记忆ID
            min_strength: 最小强度

        Returns:
            强联想列表
        """
        return [assoc for assoc in self.associations
                if (assoc.source_id == memory_id or assoc.target_id == memory_id)
                and assoc.strength >= min_strength]

    def update_association_strength(self, source_id: str, target_id: str, delta: float):
        """
        更新联想强度

        Args:
            source_id: 源记忆ID
            target_id: 目标记忆ID
            delta: 强度变化量
        """
        for assoc in self.associations:
            if (assoc.source_id == source_id and assoc.target_id == target_id) or \
               (assoc.source_id == target_id and assoc.target_id == source_id):
                old_strength = assoc.strength
                assoc.strength = max(0.0, min(1.0, assoc.strength + delta))
                print(f"[Association] 更新联想强度: {source_id[:8]} <-> {target_id[:8]} "
                      f"{old_strength:.2f} -> {assoc.strength:.2f}")
                return

        print(f"[Association] 未找到联想: {source_id[:8]} <-> {target_id[:8]}")
