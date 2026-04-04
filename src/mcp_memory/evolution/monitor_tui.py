"""
进化监控 TUI — 实时终端仪表盘

使用 Textual 构建的终端界面，实时显示：
- 当前进化阶段和进度
- AI 思考链（类似对话的思考过程）
- 任务执行状态
- 代码分析结果
- 自我反思内容
- 进化历史统计

启动方式:
    memory evolve --monitor
"""

from textual.app import App, ComposeResult
from textual.containers import Container, Horizontal, Vertical, VerticalScroll
from textual.widgets import Header, Footer, Static, DataTable, Label, Log
from textual.binding import Binding
from datetime import datetime
from typing import Any, Dict, List
import asyncio
import json
import os


# ─── 事件样式 ────────────────────────────────────────────────────────────────

EVENT_STYLES = {
    "stage_start": "cyan",
    "stage_end": "dim",
    "task_start": "bold green",
    "task_end": "green",
    "thinking": "magenta",
    "analysis_result": "blue",
    "reflection_result": "yellow",
    "error": "bold red",
    "cycle_complete": "bold cyan",
}


class EvolutionMonitorApp(App):
    """进化监控 TUI 应用

    实时显示进化过程的每个阶段、AI 思考、任务状态。
    类似 Java 控制台日志 + AI 思考链的结合体。
    """

    CSS = """
    Screen {
        layout: grid;
        grid-size: 3;
        grid-columns: 2fr 1fr 1fr;
        grid-rows: 1fr;
    }

    #thinking-chain {
        column-span: 1;
        background: $surface;
        border: solid $primary;
    }

    #status-panel {
        column-span: 1;
        background: $surface;
        border: solid $secondary;
    }

    #history-panel {
        column-span: 1;
        background: $surface;
        border: solid $accent;
    }

    .panel-title {
        text-style: bold;
        color: $text;
        padding: 1;
        background: $primary;
    }

    .thinking-entry {
        padding: 0 1;
        color: $text;
    }

    .thinking-entry.thinking {
        color: $text-muted;
    }

    .thinking-entry.success {
        color: $success;
    }

    .thinking-entry.warning {
        color: $warning;
    }

    .thinking-entry.error {
        color: $error;
    }

    .status-label {
        padding: 0 1;
    }

    .status-value {
        padding: 0 1;
        text-style: bold;
    }
    """

    BINDINGS = [
        Binding("q", "quit", "退出", show=True),
        Binding("c", "clear", "清空", show=True),
        Binding("r", "refresh", "刷新", show=True),
    ]

    def __init__(self, project_root: str = None):
        super().__init__()
        self.project_root = project_root or os.getcwd()
        self.thinking_entries: List[str] = []
        self.current_stage = "等待中..."
        self.current_task = None
        self.cycle_count = 0
        self.total_success = 0
        self.total_failed = 0
        self.total_skipped = 0
        self.stage_times: Dict[str, float] = {}

    def compose(self) -> ComposeResult:
        yield Header(show_clock=True)

        with Horizontal():
            # 左侧：思考链
            with Vertical(id="thinking-chain"):
                yield Static("🧠 AI 思考链", classes="panel-title")
                yield Log(id="thinking-log")

            # 中间：状态面板
            with Vertical(id="status-panel"):
                yield Static("📊 当前状态", classes="panel-title")
                with VerticalScroll():
                    yield Static(f"阶段: {self.current_stage}", id="stage-label", classes="status-label")
                    yield Static(f"任务: 无", id="task-label", classes="status-label")
                    yield Static(f"周期: {self.cycle_count}", id="cycle-label", classes="status-label")
                    yield Static(f"成功: {self.total_success}", id="success-label", classes="status-label")
                    yield Static(f"失败: {self.total_failed}", id="failed-label", classes="status-label")
                    yield Static(f"跳过: {self.total_skipped}", id="skipped-label", classes="status-label")

            # 右侧：进化历史
            with Vertical(id="history-panel"):
                yield Static("📜 进化历史", classes="panel-title")
                table = DataTable(id="history-table")
                table.add_columns("周期", "时间", "成功", "失败")
                yield table

        yield Footer()

    def on_mount(self) -> None:
        """应用挂载时初始化"""
        self.thinking_log = self.query_one("#thinking-log", Log)
        self._add_thinking("🧬 进化监控已启动", "info")
        self._add_thinking("等待进化周期开始...", "thinking")

    def action_clear(self) -> None:
        """清空思考链"""
        self.thinking_log.clear()
        self._add_thinking("🗑️ 思考链已清空", "info")

    def action_refresh(self) -> None:
        """刷新状态面板"""
        self._update_status()

    def update_stage(self, stage: str, index: int, total: int) -> None:
        """更新当前阶段"""
        self.current_stage = stage
        progress = int((index / total) * 100) if total > 0 else 0
        self._add_thinking(f"📌 阶段 {index}/{total}: {stage} ({progress}%)", "info")
        self._update_status()

    def update_task(self, task_id: str, title: str, status: str) -> None:
        """更新任务状态"""
        self.current_task = {"id": task_id, "title": title, "status": status}
        icon = {"running": "⚡", "success": "✅", "failed": "❌", "skipped": "⏭️"}.get(status, "📋")
        self._add_thinking(f"{icon} [{task_id}] {title} → {status}", status)
        self._update_status()

    def add_thinking(self, thought: str) -> None:
        """添加思考内容"""
        self._add_thinking(f"💭 {thought}", "thinking")

    def add_analysis_result(self, issues_count: int, files_scanned: int) -> None:
        """添加分析结果"""
        self._add_thinking(f"🔍 扫描 {files_scanned} 个文件，发现 {issues_count} 个问题", "info")

    def add_reflection_result(self, reflection: Dict[str, str]) -> None:
        """添加反思结果"""
        if "self_awareness" in reflection:
            self._add_thinking(f"🧠 自我意识: {reflection['self_awareness'][:80]}...", "info")

    def cycle_complete(self, success: int, failed: int, skipped: int) -> None:
        """周期完成"""
        self.cycle_count += 1
        self.total_success += success
        self.total_failed += failed
        self.total_skipped += skipped
        self._add_thinking(
            f"🧬 周期完成! ✅{success} ❌{failed} ⏭️{skipped}",
            "success" if failed == 0 else "warning"
        )
        self._update_status()

    def _add_thinking(self, message: str, level: str = "info") -> None:
        """添加思考条目到日志"""
        timestamp = datetime.now().strftime("%H:%M:%S")
        entry = f"[{timestamp}] {message}"
        self.thinking_entries.append(entry)
        self.thinking_log.write(entry)

    def _update_status(self) -> None:
        """更新状态面板"""
        try:
            stage_label = self.query_one("#stage-label", Static)
            task_label = self.query_one("#task-label", Static)
            cycle_label = self.query_one("#cycle-label", Static)
            success_label = self.query_one("#success-label", Static)
            failed_label = self.query_one("#failed-label", Static)
            skipped_label = self.query_one("#skipped-label", Static)

            stage_label.update(f"阶段: {self.current_stage}")

            if self.current_task:
                task_label.update(f"任务: {self.current_task['title']} ({self.current_task['status']})")
            else:
                task_label.update("任务: 无")

            cycle_label.update(f"周期: {self.cycle_count}")
            success_label.update(f"成功: {self.total_success}")
            failed_label.update(f"失败: {self.total_failed}")
            skipped_label.update(f"跳过: {self.total_skipped}")
        except Exception:
            pass  # 组件可能还未渲染


def run_monitor(project_root: str = None) -> None:
    """运行进化监控 TUI

    Args:
        project_root: 项目根目录
    """
    app = EvolutionMonitorApp(project_root)
    app.run()


if __name__ == "__main__":
    run_monitor()
