"""
进化记忆存储 — 自我意识的基石

本模块将每次进化操作的执行过程、决策、结果写入 MCP 记忆系统，
使系统能够"记住"自己做过什么、哪些成功、哪些失败、哪些需要重做。

这是实现"深度进化模式"的核心：系统通过读取自己的进化记忆，
理解自己的历史行为，从而做出更明智的进化决策。
"""

import json
import logging
import os
from dataclasses import dataclass, field
from datetime import datetime
from enum import Enum
from typing import Any

logger = logging.getLogger("mcp-memory.evolution.memory")


class EvolutionActionType(Enum):
    """进化操作类型"""
    CODE_ANALYSIS = "code_analysis"          # 代码分析
    TASK_GENERATION = "task_generation"       # 任务生成
    TASK_EXECUTION = "task_execution"         # 任务执行
    CODE_MODIFICATION = "code_modification"   # 代码修改
    VALIDATION_PASS = "validation_pass"       # 验证通过
    VALIDATION_FAIL = "validation_fail"       # 验证失败
    ROLLBACK = "rollback"                     # 回滚
    COMMIT = "commit"                         # 提交
    REFLECTION = "reflection"                 # 自我反思
    LESSON_LEARNED = "lesson_learned"         # 经验教训


class EvolutionOutcome(Enum):
    """进化结果"""
    SUCCESS = "success"               # 成功完成
    PARTIAL = "partial"               # 部分完成
    FAILED = "failed"                 # 失败
    ROLLED_BACK = "rolled_back"       # 已回滚
    SKIPPED = "skipped"               # 跳过


@dataclass
class EvolutionMemory:
    """一条进化记忆

    记录系统的一次行为，包括：做了什么、为什么做、结果如何、学到了什么。
    这些记忆会被写入 MCP 记忆系统，供未来的自己读取和反思。
    """
    memory_id: str
    action_type: EvolutionActionType
    outcome: EvolutionOutcome
    title: str
    description: str
    files_involved: list[str]
    timestamp: str = field(default_factory=lambda: datetime.now().isoformat())
    context: dict[str, Any] = field(default_factory=dict)
    decision_reasoning: str = ""       # 为什么做出这个决策
    what_worked: str = ""              # 什么做对了
    what_failed: str = ""              # 什么做错了
    lesson_learned: str = ""           # 学到了什么
    next_action_suggestion: str = ""   # 下一步建议

    def to_dict(self) -> dict[str, Any]:
        return {
            "memory_id": self.memory_id,
            "action_type": self.action_type.value,
            "outcome": self.outcome.value,
            "title": self.title,
            "description": self.description,
            "files_involved": self.files_involved,
            "timestamp": self.timestamp,
            "context": self.context,
            "decision_reasoning": self.decision_reasoning,
            "what_worked": self.what_worked,
            "what_failed": self.what_failed,
            "lesson_learned": self.lesson_learned,
            "next_action_suggestion": self.next_action_suggestion,
        }

    def to_memory_content(self) -> str:
        """转换为可写入 MCP 记忆的内容格式"""
        parts = [
            f"【进化记忆】{self.title}",
            f"操作类型: {self.action_type.value}",
            f"结果: {self.outcome.value}",
            f"时间: {self.timestamp}",
            f"涉及文件: {', '.join(self.files_involved) if self.files_involved else '无'}",
            f"描述: {self.description}",
        ]
        if self.decision_reasoning:
            parts.append(f"决策原因: {self.decision_reasoning}")
        if self.what_worked:
            parts.append(f"成功之处: {self.what_worked}")
        if self.what_failed:
            parts.append(f"失败之处: {self.what_failed}")
        if self.lesson_learned:
            parts.append(f"经验教训: {self.lesson_learned}")
        if self.next_action_suggestion:
            parts.append(f"下一步: {self.next_action_suggestion}")
        return "\n".join(parts)


class EvolutionMemoryStore:
    """进化记忆存储器

    将进化记忆写入 MCP 记忆系统，同时维护本地缓存以便快速查询。
    支持：
    1. 写入记忆（同时写入 MCP 和本地）
    2. 读取历史（按类型、结果、时间过滤）
    3. 自我反思（分析历史模式，生成洞察）
    4. 任务去重（避免重复执行已失败的相同任务）
    """

    def __init__(self, project_root: str):
        self.project_root = project_root
        self._local_memories: list[EvolutionMemory] = []
        self._memory_file = os.path.join(project_root, ".evolution_memories.json")
        self._load_local()

    def record(
        self,
        action_type: EvolutionActionType,
        outcome: EvolutionOutcome,
        title: str,
        description: str,
        files_involved: list[str] | None = None,
        context: dict[str, Any] | None = None,
        decision_reasoning: str = "",
        what_worked: str = "",
        what_failed: str = "",
        lesson_learned: str = "",
        next_action_suggestion: str = "",
    ) -> EvolutionMemory:
        """记录一条进化记忆

        Args:
            action_type: 操作类型
            outcome: 执行结果
            title: 简短标题
            description: 详细描述
            files_involved: 涉及的文件列表
            context: 额外的上下文信息
            decision_reasoning: 为什么做出这个决策
            what_worked: 什么做对了
            what_failed: 什么做错了
            lesson_learned: 学到了什么
            next_action_suggestion: 下一步建议

        Returns:
            创建的 EvolutionMemory 对象
        """
        import uuid
        memory = EvolutionMemory(
            memory_id=f"evo-{uuid.uuid4().hex[:8]}",
            action_type=action_type,
            outcome=outcome,
            title=title,
            description=description,
            files_involved=files_involved or [],
            context=context or {},
            decision_reasoning=decision_reasoning,
            what_worked=what_worked,
            what_failed=what_failed,
            lesson_learned=lesson_learned,
            next_action_suggestion=next_action_suggestion,
        )

        self._local_memories.append(memory)
        self._save_local()

        # 同时写入 MCP 记忆系统
        self._write_to_mcp(memory)

        logger.info(
            "[%s] %s → %s",
            action_type.value,
            title,
            outcome.value,
        )
        return memory

    def get_memories(
        self,
        action_type: EvolutionActionType | None = None,
        outcome: EvolutionOutcome | None = None,
        limit: int = 50,
    ) -> list[EvolutionMemory]:
        """查询进化记忆

        Args:
            action_type: 按操作类型过滤
            outcome: 按结果过滤
            limit: 返回数量限制

        Returns:
            匹配的记忆列表（按时间倒序）
        """
        results = self._local_memories
        if action_type:
            results = [m for m in results if m.action_type == action_type]
        if outcome:
            results = [m for m in results if m.outcome == outcome]
        return list(reversed(results))[:limit]

    def get_lessons_learned(self, limit: int = 20) -> list[str]:
        """获取所有经验教训"""
        lessons = [
            m.lesson_learned
            for m in reversed(self._local_memories)
            if m.lesson_learned
        ]
        return lessons[:limit]

    def get_failed_tasks(self) -> list[EvolutionMemory]:
        """获取所有失败的任务"""
        return [
            m for m in reversed(self._local_memories)
            if m.outcome in (EvolutionOutcome.FAILED, EvolutionOutcome.ROLLED_BACK)
        ]

    def get_successful_tasks(self) -> list[EvolutionMemory]:
        """获取所有成功的任务"""
        return [
            m for m in reversed(self._local_memories)
            if m.outcome == EvolutionOutcome.SUCCESS
        ]

    def is_duplicate_task(self, title_keywords: list[str]) -> bool:
        """检查是否是重复任务（基于关键词匹配）

        避免重复执行已经尝试过的相同任务。
        """
        for memory in reversed(self._local_memories):
            if memory.action_type != EvolutionActionType.TASK_EXECUTION:
                continue
            title_lower = memory.title.lower()
            if any(kw.lower() in title_lower for kw in title_keywords):
                return True
        return False

    def self_reflect(self) -> str:
        """自我反思 — 分析历史模式，生成洞察报告

        系统阅读自己的进化记忆，回答：
        - 我做了什么？
        - 哪些成功了？哪些失败了？
        - 我学到了什么？
        - 接下来应该做什么？
        """
        if not self._local_memories:
            return "暂无进化记忆，无法进行自我反思。"

        total = len(self._local_memories)
        successes = len(self.get_successful_tasks())
        failures = len(self.get_failed_tasks())
        rollbacks = sum(1 for m in self._local_memories if m.outcome == EvolutionOutcome.ROLLED_BACK)

        # 按类型统计
        by_type: dict[str, int] = {}
        for m in self._local_memories:
            t = m.action_type.value
            by_type[t] = by_type.get(t, 0) + 1

        # 按文件统计
        by_file: dict[str, int] = {}
        for m in self._local_memories:
            for f in m.files_involved:
                by_file[f] = by_file.get(f, 0) + 1
        top_files = sorted(by_file.items(), key=lambda x: -x[1])[:5]

        # 收集经验教训
        lessons = self.get_lessons_learned(limit=10)

        # 收集失败模式
        failed = self.get_failed_tasks()
        failure_patterns: dict[str, int] = {}
        for f in failed:
            reason = f.what_failed or "未知原因"
            key = reason[:50]
            failure_patterns[key] = failure_patterns.get(key, 0) + 1

        # 生成反思报告
        lines = [
            "=" * 60,
            "自我反思报告",
            "=" * 60,
            "",
            f"总记忆数: {total}",
            f"  成功: {successes} ({successes/total*100:.0f}%)",
            f"  失败: {failures} ({failures/total*100:.0f}%)",
            f"  回滚: {rollbacks}",
            "",
            "操作类型分布:",
        ]
        for t, c in sorted(by_type.items(), key=lambda x: -x[1]):
            lines.append(f"  {t}: {c}")

        lines.append("")
        lines.append("最常修改的文件:")
        for f, c in top_files:
            lines.append(f"  {f}: {c} 次")

        if lessons:
            lines.append("")
            lines.append("经验教训:")
            for i, lesson in enumerate(lessons, 1):
                lines.append(f"  {i}. {lesson}")

        if failure_patterns:
            lines.append("")
            lines.append("失败模式分析:")
            for reason, count in sorted(failure_patterns.items(), key=lambda x: -x[1]):
                lines.append(f"  [{count}次] {reason}")

        # 下一步建议
        lines.append("")
        lines.append("下一步建议:")
        next_actions = [
            m.next_action_suggestion
            for m in reversed(self._local_memories)
            if m.next_action_suggestion
        ]
        if next_actions:
            for i, action in enumerate(next_actions[:5], 1):
                lines.append(f"  {i}. {action}")
        else:
            lines.append("  继续执行代码分析和优化任务")

        return "\n".join(lines)

    # ─── 内部方法 ─────────────────────────────────────────────

    def _write_to_mcp(self, memory: EvolutionMemory) -> None:
        """将进化记忆写入 MCP 记忆系统

        通过直接调用 MemoryStore 写入，确保未来的 AI 实例
        可以通过读取记忆来了解自己的历史行为。
        """
        try:
            from mcp_memory.models.data_models import MemoryItem

            # 尝试获取现有的 MemoryStore 实例
            store = self._get_or_create_store()
            if store is None:
                return

            content = memory.to_memory_content()
            item = MemoryItem(
                content=content,
                user_id="evolution_system",
                scope="global",
                project_id="mcp_memory_self_evolution",
                title=memory.title,
                memory_type="thinking",
                is_shared=False,
                keywords=[
                    "evolution",
                    memory.action_type.value,
                    memory.outcome.value,
                    *memory.files_involved[:3],
                ],
            )
            store.save(item)
            logger.debug("进化记忆已写入 MCP: %s", memory.title)
        except Exception as e:
            logger.debug("写入 MCP 记忆失败: %s", e)

    def _get_or_create_store(self):
        """获取或创建 MemoryStore 实例"""
        try:
            from mcp_memory.memory.long_term import MemoryStore

            chroma_path = os.environ.get(
                "CHROMA_DATA_PATH",
                os.path.join(self.project_root, "data", "chroma")
            )
            return MemoryStore(data_path=chroma_path)
        except Exception as e:
            logger.debug("创建 MemoryStore 失败: %s", e)
            return None

    def _load_local(self) -> None:
        """从本地文件加载进化记忆"""
        if os.path.exists(self._memory_file):
            try:
                with open(self._memory_file, encoding="utf-8") as f:
                    data = json.load(f)
                self._local_memories = []
                for item in data:
                    # 将字符串转换回枚举
                    if isinstance(item.get("action_type"), str):
                        item["action_type"] = EvolutionActionType(item["action_type"])
                    if isinstance(item.get("outcome"), str):
                        item["outcome"] = EvolutionOutcome(item["outcome"])
                    self._local_memories.append(EvolutionMemory(**item))
                logger.info("已加载 %d 条进化记忆", len(self._local_memories))
            except Exception as e:
                logger.warning("加载进化记忆失败: %s", e)
                self._local_memories = []

    def _save_local(self) -> None:
        """保存进化记忆到本地文件"""
        try:
            os.makedirs(os.path.dirname(self._memory_file) or ".", exist_ok=True)
            with open(self._memory_file, "w", encoding="utf-8") as f:
                json.dump(
                    [m.to_dict() for m in self._local_memories],
                    f,
                    ensure_ascii=False,
                    indent=2,
                )
        except Exception as e:
            logger.warning("保存进化记忆失败: %s", e)
