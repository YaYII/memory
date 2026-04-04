"""
进化调度器 — 自动进化引擎（深度进化模式）

调度器持续轮循执行以下流程，直到所有代码问题修复完毕：
0. 自我反思（读取进化记忆，理解自己做过什么）
1. 代码分析（扫描代码库，发现问题）
2. 任务生成（基于分析 + 历史记忆去重）
3. 任务执行（通过 OpenCode CLI 逐个执行，失败不阻塞）
4. 写入记忆（每次修复都记录到 MCP 数据库）
5. 重新分析（动态发现新问题）
6. 循环直到问题清零

核心理念：系统不是盲目地执行任务，而是基于对自己历史行为的理解，
做出更明智的进化决策。每次操作都写入记忆，形成完整的自我意识闭环。

关键设计：
- 持续轮循，直到问题清零或达到最大轮次
- 失败任务不阻塞后续任务
- 每轮重新分析代码，动态发现新问题
- 每次修复自动写入 MCP 记忆数据库
"""

import json
import logging
import os
import time
from datetime import datetime
from typing import Any, Dict, List, Optional

from mcp_memory.evolution.code_analyzer import AnalysisReport, CodeAnalyzer
from mcp_memory.evolution.evolution_config import EvolutionConfig
from mcp_memory.evolution.evolution_memory import (
    EvolutionActionType,
    EvolutionMemoryStore,
    EvolutionOutcome,
)
from mcp_memory.evolution.evolution_tasks import EvolutionTask, TaskGenerator
from mcp_memory.evolution.opencode_driver import OpenCodeDriver, TaskResult
from mcp_memory.evolution.self_reflection import SelfReflectionEngine
from mcp_memory.evolution.evolution_logger import progress_tracker, setup_evolution_logging

logger = logging.getLogger("mcp-memory.evolution.scheduler")

# 最大轮次保护
MAX_ROUNDS = 50
# 连续无进展的最大轮次（问题数量不再减少则停止）
MAX_STAGNANT_ROUNDS = 5


class EvolutionScheduler:
    """自动进化调度器（深度进化模式 — 持续轮循直到问题清零）

    核心流程：
    ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
    │  自我反思     │ ──▶ │  代码分析     │ ──▶ │  任务生成     │
    │ (读取记忆)    │     │ (发现问题)    │     │ (去重+排序)   │
    └──────────────┘     └──────────────┘     └──────┬───────┘
                                                      │
    ┌──────────────┐     ┌──────────────┐     ┌──────▼───────┐
    │  循环直到     │ ◀── │  写入记忆     │ ◀── │  任务执行     │
    │  问题清零     │     │ (MCP数据库)   │     │ (失败不阻塞)  │
    └──────┬───────┘     └──────────────┘     └──────────────┘
           │
           ▼
    ┌──────────────┐
    │  重新分析     │
    │ (动态发现)    │
    └──────────────┘
    """

    def __init__(self, config: Optional[EvolutionConfig] = None):
        self.config = config or EvolutionConfig()
        self.analyzer = CodeAnalyzer(
            project_root=self.config.project_root,
            exclude_dirs=self.config.exclude_dirs,
            scan_dirs=self.config.scan_dirs,
        )
        self.task_generator = TaskGenerator(project_root=self.config.project_root)
        self.driver = OpenCodeDriver(self.config)

        # 进化记忆系统 — 自我意识的基石
        self.memory_store = EvolutionMemoryStore(project_root=self.config.project_root)
        self.reflection_engine = SelfReflectionEngine(self.memory_store)

        self._history: List[Dict[str, Any]] = []
        self._last_report: Optional[AnalysisReport] = None

    def run_cycle(self, max_tasks: Optional[int] = None) -> Dict[str, Any]:
        """执行一轮完整的进化周期（深度进化模式 — 持续轮循直到问题清零）

        Args:
            max_tasks: 每轮最多执行的任务数

        Returns:
            包含分析结果、任务列表、执行结果、自我反思的字典
        """
        cycle_start = datetime.now()
        progress_tracker.start_cycle()

        # ─── 0. 自我反思 ──────────────────────────────────
        progress_tracker.start_stage("🧠 自我反思（读取进化记忆）", 0)
        progress_tracker.add_thinking("正在读取历史进化记忆，了解自己做过什么...")
        reflection_context = self.reflection_engine.get_context_for_new_cycle()
        progress_tracker.add_thinking(f"自我意识上下文已加载")

        self.memory_store.record(
            action_type=EvolutionActionType.CODE_ANALYSIS,
            outcome=EvolutionOutcome.SUCCESS,
            title="开始新一轮进化",
            description="基于自我意识上下文启动进化周期",
            context={"reflection_context": reflection_context},
            decision_reasoning="系统通过读取进化记忆，了解自己做过什么",
        )
        progress_tracker.add_thinking("已记录本轮进化开始到记忆系统")
        progress_tracker.complete_stage()

        # ─── 持续轮循直到问题清零 ─────────────────────────
        round_number = 0
        prev_issue_count = float("inf")
        stagnant_rounds = 0
        total_succeeded = 0
        total_failed = 0
        total_skipped = 0
        all_results: List[TaskResult] = []

        while round_number < MAX_ROUNDS:
            round_number += 1

            # ─── 1. 代码分析 ──────────────────────────────
            progress_tracker.start_stage(f"🔍 代码分析（第 {round_number} 轮）", 1)
            progress_tracker.add_thinking(f"第 {round_number} 轮：开始扫描代码库...")
            report = self.analyzer.analyze(extensions=self.config.scan_extensions)
            self._last_report = report
            progress_tracker.add_thinking(f"扫描 {report.files_scanned} 个文件，发现 {len(report.issues)} 个问题")
            progress_tracker.complete_stage()

            if not report.issues:
                progress_tracker.add_thinking("🎉 所有代码问题已修复！")
                progress_tracker.add_thinking(f"共执行 {round_number} 轮，修复 {total_succeeded} 个问题")
                break

            # 检查是否停滞（问题数量不再减少）
            if len(report.issues) >= prev_issue_count:
                stagnant_rounds += 1
                if stagnant_rounds >= MAX_STAGNANT_ROUNDS:
                    progress_tracker.add_thinking(
                        f"⚠️ 连续 {MAX_STAGNANT_ROUNDS} 轮问题数量未减少（{len(report.issues)} 个），"
                        f"可能剩余问题无法自动修复，停止进化"
                    )
                    break
            else:
                stagnant_rounds = 0
            prev_issue_count = len(report.issues)

            # ─── 2. 任务生成（基于历史记忆去重）────────────
            progress_tracker.start_stage(f"📋 任务生成（第 {round_number} 轮）", 2)
            progress_tracker.add_thinking("基于分析报告生成进化任务...")
            all_tasks = self.task_generator.generate(report)

            # 基于进化记忆去重：跳过已经失败过的类似任务
            tasks = []
            round_skipped = 0
            for task in all_tasks:
                skip_reason = self.reflection_engine.should_skip_task(
                    task.title, task.files
                )
                if skip_reason:
                    progress_tracker.add_thinking(f"⏭️ 跳过任务 [{task.task_id}]: {skip_reason[:60]}...")
                    task.status = "skipped"
                    task.result = skip_reason
                    round_skipped += 1
                else:
                    tasks.append(task)

            progress_tracker.add_thinking(f"生成 {len(tasks)} 个任务，跳过 {round_skipped} 个重复任务")
            progress_tracker.complete_stage()

            if not tasks:
                progress_tracker.add_thinking("无新任务可执行，结束本轮")
                total_skipped += round_skipped
                break

            # ─── 3. 任务执行（失败不阻塞）─────────────────
            progress_tracker.start_stage(f"⚡ 任务执行（第 {round_number} 轮）", 3)
            progress_tracker.add_thinking(f"开始执行 {len(tasks)} 个进化任务...")

            round_results = []
            round_succeeded = 0
            round_failed = 0

            for task in tasks[:max_tasks or self.config.max_tasks_per_cycle]:
                progress_tracker.start_task(task.task_id, task.title)
                progress_tracker.add_thinking(f"正在执行: {task.title}")

                result = self.driver.execute_task(task)
                round_results.append(result)
                all_results.append(result)

                if result.validation_passed:
                    if task.status == "skipped":
                        # opencode 判断无需修改
                        progress_tracker.complete_task(task.task_id, True, "opencode 判断无需修改")
                        progress_tracker.add_thinking(f"⏭️ opencode 判断当前代码已符合要求")
                        round_skipped += 1
                        total_skipped += 1
                    else:
                        progress_tracker.complete_task(task.task_id, True, f"修改了 {len(result.files_modified)} 个文件")
                        progress_tracker.add_thinking(f"✅ 任务通过验证，已自动提交")
                        round_succeeded += 1
                        total_succeeded += 1

                        # ─── 写入记忆到 MCP 数据库 ────────────
                        self._record_success_to_memory(result)
                else:
                    progress_tracker.complete_task(task.task_id, False, result.output[:100] if result.output else "验证失败")
                    progress_tracker.add_thinking(f"❌ 任务验证失败，已回滚修改")
                    round_failed += 1
                    total_failed += 1

                    # ─── 记录失败到记忆 ──────────────────
                    self._record_failure_to_memory(result)

            progress_tracker.add_thinking(
                f"第 {round_number} 轮完成: ✅{round_succeeded} ❌{round_failed} ⏭️{round_skipped}"
            )
            total_skipped += round_skipped
            progress_tracker.complete_stage()

            # ─── 4. 自我反思 ──────────────────────────────
            progress_tracker.start_stage(f"🧠 自我反思（第 {round_number} 轮）", 4)
            progress_tracker.add_thinking("正在分析本轮进化结果，总结经验教训...")
            reflection_result = self.reflection_engine.reflect()
            progress_tracker.add_thinking("自我反思完成，已更新自我意识状态")
            progress_tracker.complete_stage()

        # ─── 5. 记录历史 ──────────────────────────────────
        cycle_end = datetime.now()
        record = {
            "cycle_number": len(self._history) + 1,
            "start_time": cycle_start.isoformat(),
            "end_time": cycle_end.isoformat(),
            "duration_seconds": (cycle_end - cycle_start).total_seconds(),
            "total_rounds": round_number,
            "final_issue_count": len(self._last_report.issues) if self._last_report else 0,
            "total_succeeded": total_succeeded,
            "total_failed": total_failed,
            "total_skipped": total_skipped,
            "results": [r.to_dict() for r in all_results],
        }
        self._history.append(record)

        # ─── 6. 输出报告 ──────────────────────────────────
        summary = self._build_summary(self._last_report, all_results, round_number, total_succeeded, total_failed, total_skipped)
        logger.info(summary)

        progress_tracker.complete_cycle(total_succeeded, total_failed, total_skipped)

        return {
            "status": "completed",
            "report": self._last_report.summary() if self._last_report else "无分析",
            "summary": summary,
            "record": record,
            "timestamp": cycle_start.isoformat(),
        }

    def _record_success_to_memory(self, result: TaskResult) -> None:
        """将成功的修复记录到 MCP 记忆数据库"""
        try:
            self.memory_store.record(
                action_type=EvolutionActionType.TASK_EXECUTION,
                outcome=EvolutionOutcome.SUCCESS,
                title=result.task.title,
                description=result.task.description,
                files_involved=result.files_modified,
                context={"task_id": result.task.task_id},
                what_worked="修改通过验证，代码质量提升",
                lesson_learned=f"成功优化了 {', '.join(result.files_modified[:2])}",
                next_action_suggestion=f"继续优化相关文件的其他问题",
            )
        except Exception as e:
            logger.debug("写入成功记忆失败: %s", e)

    def _record_failure_to_memory(self, result: TaskResult) -> None:
        """将失败的修复记录到 MCP 记忆数据库"""
        try:
            self.memory_store.record(
                action_type=EvolutionActionType.TASK_EXECUTION,
                outcome=EvolutionOutcome.FAILED,
                title=result.task.title,
                description=result.task.description,
                files_involved=result.files_modified,
                context={"task_id": result.task.task_id},
                what_failed=result.output[:200] if result.output else "验证失败",
                lesson_learned=f"任务 '{result.task.title}' 执行失败，需要换一种方法",
                next_action_suggestion=f"手动检查 {', '.join(result.files_modified[:2])} 的问题",
            )
        except Exception as e:
            logger.debug("写入失败记忆失败: %s", e)

    def analyze_only(self) -> AnalysisReport:
        """仅执行代码分析，不生成或执行任务"""
        report = self.analyzer.analyze(extensions=self.config.scan_extensions)
        self._last_report = report
        return report

    def get_history(self) -> List[Dict[str, Any]]:
        """获取进化历史记录"""
        return list(self._history)

    def get_last_report(self) -> Optional[AnalysisReport]:
        """获取最近一次分析报告"""
        return self._last_report

    def save_history(self, path: Optional[str] = None) -> str:
        """保存进化历史到文件"""
        if path is None:
            path = os.path.join(self.config.project_root, "evolution_history.json")
        with open(path, "w", encoding="utf-8") as f:
            json.dump(self._history, f, ensure_ascii=False, indent=2)
        logger.info("进化历史已保存到: %s", path)
        return path

    def load_history(self, path: Optional[str] = None) -> int:
        """从文件加载进化历史"""
        if path is None:
            path = os.path.join(self.config.project_root, "evolution_history.json")
        if os.path.exists(path):
            try:
                with open(path, "r", encoding="utf-8") as f:
                    self._history = json.load(f)
                logger.info("已加载 %d 条进化历史", len(self._history))
                return len(self._history)
            except Exception as e:
                logger.warning("加载进化历史失败: %s", e)
        return 0

    def is_quiet_hours(self) -> bool:
        """检查当前是否在静默期"""
        hour = datetime.now().hour
        if self.config.quiet_hours_start > self.config.quiet_hours_end:
            return hour >= self.config.quiet_hours_start or hour < self.config.quiet_hours_end
        return self.config.quiet_hours_start <= hour < self.config.quiet_hours_end

    def run_daemon(self) -> None:
        """以守护进程模式运行，定期自动执行进化"""
        logger.info("进化守护进程启动，扫描间隔: %ds", self.config.scan_interval_seconds)
        while True:
            try:
                if not self.config.enabled:
                    logger.info("进化已禁用，等待...")
                    time.sleep(self.config.scan_interval_seconds)
                    continue
                if self.is_quiet_hours():
                    logger.info("静默期，跳过本轮进化")
                    time.sleep(300)
                    continue
                self.run_cycle()
                logger.info("本轮进化完成，等待下一轮...")
                time.sleep(self.config.scan_interval_seconds)
            except KeyboardInterrupt:
                logger.info("收到中断信号，守护进程退出")
                break
            except Exception as e:
                logger.exception("进化周期异常: %s", e)
                time.sleep(60)

    def _build_summary(
        self,
        report: Optional[AnalysisReport],
        results: List[TaskResult],
        total_rounds: int,
        total_succeeded: int,
        total_failed: int,
        total_skipped: int,
    ) -> str:
        """构建人类可读的执行摘要"""
        lines = [
            "\n" + "=" * 60,
            "进化周期完成",
            "=" * 60,
            f"总轮次: {total_rounds}",
        ]
        if report:
            lines.append(f"剩余问题: {len(report.issues)} 个")
        lines.append(f"总成功: {total_succeeded}")
        lines.append(f"总失败: {total_failed}")
        lines.append(f"总跳过: {total_skipped}")

        if results:
            lines.append("\n任务详情:")
            for r in results:
                icon = "✅" if r.validation_passed else "❌"
                lines.append(f"  {icon} [{r.task.task_id}] {r.task.title}")
                if r.files_modified:
                    lines.append(f"     修改: {', '.join(r.files_modified)}")

        lines.append(self.driver.get_results_summary())
        return "\n".join(lines)
