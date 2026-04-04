"""
自我反思引擎 — 让系统理解自己的行为

本模块在每次进化周期后执行自我反思：
1. 读取进化记忆，理解自己做过什么
2. 分析成功/失败模式，总结经验教训
3. 生成下一步行动建议
4. 将反思结果写入记忆系统

这是"深度进化模式"的核心：系统不是盲目地执行任务，
而是基于对自己历史行为的理解，做出更明智的决策。
"""

import logging
from datetime import datetime
from typing import Dict, List, Optional

from mcp_memory.evolution.evolution_memory import (
    EvolutionActionType,
    EvolutionMemory,
    EvolutionMemoryStore,
    EvolutionOutcome,
)

logger = logging.getLogger("mcp-memory.evolution.reflection")


class SelfReflectionEngine:
    """自我反思引擎

    通过读取进化记忆，系统能够：
    - 知道自己做过哪些操作
    - 理解哪些操作成功了、哪些失败了
    - 从失败中学习，避免重复同样的错误
    - 识别代码库中的"热点"文件（频繁修改但总有问题）
    - 生成有针对性的下一步行动建议
    """

    def __init__(self, memory_store: EvolutionMemoryStore):
        self.memory_store = memory_store

    def reflect(self) -> Dict[str, str]:
        """执行自我反思

        Returns:
            包含各个维度反思结果的字典
        """
        memories = self.memory_store.get_memories(limit=200)
        if not memories:
            return {"summary": "暂无进化记忆，无法进行自我反思。"}

        result = {
            "summary": self._generate_summary(memories),
            "success_patterns": self._analyze_success_patterns(memories),
            "failure_patterns": self._analyze_failure_patterns(memories),
            "hotspot_files": self._identify_hotspots(memories),
            "lessons_learned": self._extract_lessons(memories),
            "next_actions": self._generate_next_actions(memories),
            "self_awareness": self._assess_self_awareness(memories),
        }

        # 将反思结果写入记忆
        self._record_reflection(result)

        return result

    def get_context_for_new_cycle(self) -> str:
        """为新的一轮进化生成上下文

        这个方法在每轮进化开始前调用，告诉系统：
        - 之前做过什么
        - 哪些已经成功了（不需要重做）
        - 哪些失败了（需要换方法或跳过）
        - 学到了什么经验
        """
        memories = self.memory_store.get_memories(limit=100)
        if not memories:
            return "这是首次进化，没有历史记录。请全面分析代码质量并生成进化任务。"

        lines = [
            "【自我意识上下文】基于历史进化记忆的分析：",
            "",
        ]

        # 已完成的任务（不需要重做）
        successful = self.memory_store.get_successful_tasks()
        if successful:
            lines.append("✅ 已完成的任务（无需重做）:")
            for m in successful[:10]:
                lines.append(f"  - {m.title} ({', '.join(m.files_involved[:2])})")
            lines.append("")

        # 失败的任务（需要换方法或跳过）
        failed = self.memory_store.get_failed_tasks()
        if failed:
            lines.append("❌ 失败的任务（需要换方法或跳过）:")
            for m in failed[:10]:
                reason = m.what_failed or "未知原因"
                lines.append(f"  - {m.title}: {reason[:60]}")
            lines.append("")

        # 经验教训
        lessons = self.memory_store.get_lessons_learned(limit=5)
        if lessons:
            lines.append("💡 经验教训:")
            for i, lesson in enumerate(lessons, 1):
                lines.append(f"  {i}. {lesson}")
            lines.append("")

        # 热点文件
        hotspot_files = self._identify_hotspots(memories)
        if hotspot_files:
            lines.append("🔥 热点文件（频繁修改，需要重点关注）:")
            for f, count in hotspot_files[:5]:
                lines.append(f"  - {f}: {count} 次修改")
            lines.append("")

        return "\n".join(lines)

    def should_skip_task(self, task_title: str, task_files: List[str]) -> Optional[str]:
        """判断是否应该跳过某个任务

        基于历史记忆，如果相同或类似的任务已经尝试过且失败了，
        建议跳过，避免重复浪费时间。

        Args:
            task_title: 任务标题
            task_files: 涉及的文件列表

        Returns:
            跳过原因（如果需要跳过），否则返回 None
        """
        failed = self.memory_store.get_failed_tasks()
        for m in failed:
            # 检查标题相似度
            title_words = set(task_title.lower().split())
            memory_words = set(m.title.lower().split())
            overlap = title_words & memory_words
            if len(overlap) >= 2:
                return (
                    f"跳过：类似任务 '{m.title}' 曾失败（{m.what_failed or '未知原因'}）。"
                    f"建议：{m.next_action_suggestion or '换一种方法或跳过'}"
                )

            # 检查文件重叠
            file_overlap = set(task_files) & set(m.files_involved)
            if len(file_overlap) >= 2:
                return (
                    f"跳过：相同文件 '{', '.join(file_overlap)}' 的修改曾失败。"
                )

        return None

    # ─── 内部分析方法 ─────────────────────────────────────────

    def _generate_summary(self, memories: List[EvolutionMemory]) -> str:
        total = len(memories)
        successes = sum(1 for m in memories if m.outcome == EvolutionOutcome.SUCCESS)
        failures = sum(1 for m in memories if m.outcome in (EvolutionOutcome.FAILED, EvolutionOutcome.ROLLED_BACK))

        return (
            f"共 {total} 条进化记忆，"
            f"成功 {successes} 次 ({successes/total*100:.0f}%)，"
            f"失败 {failures} 次 ({failures/total*100:.0f}%)"
        )

    def _analyze_success_patterns(self, memories: List[EvolutionMemory]) -> str:
        successes = [m for m in memories if m.outcome == EvolutionOutcome.SUCCESS]
        if not successes:
            return "暂无成功记录。"

        by_type: Dict[str, int] = {}
        for m in successes:
            t = m.action_type.value
            by_type[t] = by_type.get(t, 0) + 1

        lines = ["成功模式分析:"]
        for t, c in sorted(by_type.items(), key=lambda x: -x[1]):
            lines.append(f"  {t}: {c} 次成功")

        # 找出最常见的成功因素
        what_worked = [m.what_worked for m in successes if m.what_worked]
        if what_worked:
            lines.append("\n常见成功因素:")
            for w in what_worked[:5]:
                lines.append(f"  - {w}")

        return "\n".join(lines)

    def _analyze_failure_patterns(self, memories: List[EvolutionMemory]) -> str:
        failures = [
            m for m in memories
            if m.outcome in (EvolutionOutcome.FAILED, EvolutionOutcome.ROLLED_BACK)
        ]
        if not failures:
            return "暂无失败记录，很好！"

        lines = ["失败模式分析:"]
        by_reason: Dict[str, int] = {}
        for m in failures:
            reason = (m.what_failed or "未知原因")[:50]
            by_reason[reason] = by_reason.get(reason, 0) + 1

        for reason, count in sorted(by_reason.items(), key=lambda x: -x[1]):
            lines.append(f"  [{count}次] {reason}")

        # 重复失败的文件
        file_failures: Dict[str, int] = {}
        for m in failures:
            for f in m.files_involved:
                file_failures[f] = file_failures.get(f, 0) + 1
        repeat_failures = {f: c for f, c in file_failures.items() if c >= 2}
        if repeat_failures:
            lines.append("\n反复失败的文件:")
            for f, c in sorted(repeat_failures.items(), key=lambda x: -x[1]):
                lines.append(f"  {f}: {c} 次失败")

        return "\n".join(lines)

    def _identify_hotspots(self, memories: List[EvolutionMemory]) -> List[tuple]:
        """识别热点文件（被频繁修改的文件）"""
        file_counts: Dict[str, int] = {}
        for m in memories:
            for f in m.files_involved:
                file_counts[f] = file_counts.get(f, 0) + 1
        return sorted(file_counts.items(), key=lambda x: -x[1])

    def _extract_lessons(self, memories: List[EvolutionMemory]) -> str:
        """提取所有经验教训"""
        lessons = [
            m.lesson_learned
            for m in memories
            if m.lesson_learned
        ]
        if not lessons:
            return "暂无经验教训。"

        lines = ["经验教训:"]
        for i, lesson in enumerate(lessons[:10], 1):
            lines.append(f"  {i}. {lesson}")
        return "\n".join(lines)

    def _generate_next_actions(self, memories: List[EvolutionMemory]) -> str:
        """生成下一步行动建议"""
        suggestions = [
            m.next_action_suggestion
            for m in memories
            if m.next_action_suggestion
        ]
        if not suggestions:
            return "建议：继续执行代码分析，发现并修复代码质量问题。"

        lines = ["下一步行动建议:"]
        for i, action in enumerate(suggestions[:5], 1):
            lines.append(f"  {i}. {action}")
        return "\n".join(lines)

    def _assess_self_awareness(self, memories: List[EvolutionMemory]) -> str:
        """评估系统的自我意识水平"""
        total = len(memories)
        has_reflection = any(m.action_type == EvolutionActionType.REFLECTION for m in memories)
        has_lessons = any(m.lesson_learned for m in memories)
        has_failures = any(m.outcome == EvolutionOutcome.FAILED for m in memories)
        has_analysis = any(m.action_type == EvolutionActionType.CODE_ANALYSIS for m in memories)

        score = 0
        if has_analysis:
            score += 1
        if has_reflection:
            score += 2
        if has_lessons:
            score += 2
        if has_failures:
            score += 1  # 能记录失败也是意识的一部分

        level = "初始" if score <= 1 else "觉醒" if score <= 3 else "成熟" if score <= 5 else "深度进化"

        return (
            f"自我意识等级: {level} ({score}/6)\n"
            f"  代码分析: {'✅' if has_analysis else '❌'}\n"
            f"  自我反思: {'✅' if has_reflection else '❌'}\n"
            f"  经验学习: {'✅' if has_lessons else '❌'}\n"
            f"  失败记录: {'✅' if has_failures else '❌'}\n"
            f"  总记忆数: {total}"
        )

    def _record_reflection(self, result: Dict[str, str]) -> None:
        """将反思结果写入记忆"""
        self.memory_store.record(
            action_type=EvolutionActionType.REFLECTION,
            outcome=EvolutionOutcome.SUCCESS,
            title="自我反思",
            description=result.get("summary", ""),
            context={
                "success_patterns": result.get("success_patterns", ""),
                "failure_patterns": result.get("failure_patterns", ""),
                "self_awareness": result.get("self_awareness", ""),
            },
            lesson_learned="通过反思历史进化记忆，系统能够更好地理解自己的行为模式",
            next_action_suggestion="根据反思结果调整下一轮进化策略",
        )
