"""
进化日志格式化器 — 输出"思考链"风格的日志

让进化过程透明化，用户可以实时看到：
- AI 当前在做什么阶段
- 发现了什么问题
- 做出了什么决策
- 遇到了什么困难
- 下一步计划是什么

类似 Java 控制台日志 + AI 思考链的结合体。
"""

import logging
import sys
import time
from datetime import datetime
from typing import Optional


# ─── 颜色定义 ────────────────────────────────────────────────────────────────
class Colors:
    """终端颜色代码"""
    RESET = "\033[0m"
    BOLD = "\033[1m"
    DIM = "\033[2m"
    RED = "\033[91m"
    GREEN = "\033[92m"
    YELLOW = "\033[93m"
    BLUE = "\033[94m"
    MAGENTA = "\033[95m"
    CYAN = "\033[96m"
    WHITE = "\033[97m"
    BG_BLUE = "\033[44m"
    BG_GREEN = "\033[42m"
    BG_YELLOW = "\033[43m"
    BG_RED = "\033[41m"


# ─── 思考链日志格式化器 ─────────────────────────────────────────────────────

class ThinkingChainFormatter(logging.Formatter):
    """思考链风格的日志格式化器

    输出格式：
    ┌─────────────────────────────────────────┐
    │ 🧬 [阶段] 自我反思                      │
    │   ↳ 读取了 42 条进化记忆                 │
    │   ↳ 发现 3 个失败模式                    │
    │   ↳ 下一步建议：优化类型注解              │
    └─────────────────────────────────────────┘
    """

    # 阶段图标映射
    STAGE_ICONS = {
        "自我反思": "🧠",
        "代码分析": "🔍",
        "任务生成": "📋",
        "任务执行": "⚡",
        "验证门控": "✅",
        "写入记忆": "💾",
        "进化周期": "🧬",
        "守护进程": "🔄",
    }

    def format(self, record: logging.LogRecord) -> str:
        msg = record.getMessage()

        # 阶段标题（INFO 级别的大标题）
        if record.levelno == logging.INFO and "=" * 20 in msg:
            return f"\n{Colors.BOLD}{Colors.CYAN}{msg}{Colors.RESET}"

        # 阶段开始
        if record.levelno == logging.INFO and msg.startswith("阶段"):
            # 提取阶段名称
            stage_name = msg.split(":")[0].replace("阶段 ", "").strip()
            icon = self.STAGE_ICONS.get(stage_name, "📌")
            return f"\n{Colors.BOLD}{Colors.CYAN}┌─ {icon} {msg} ──────────────────────────────┐{Colors.RESET}"

        # 成功消息
        if "成功" in msg or "✅" in msg:
            return f"  {Colors.GREEN}✅ {msg}{Colors.RESET}"

        # 失败/警告消息
        if "失败" in msg or "❌" in msg or "警告" in msg:
            return f"  {Colors.YELLOW}⚠️  {msg}{Colors.RESET}"

        # 跳过消息
        if "跳过" in msg or "⏭️" in msg:
            return f"  {Colors.DIM}⏭️  {msg}{Colors.RESET}"

        # 普通 INFO 消息
        if record.levelno == logging.INFO:
            return f"  {Colors.BLUE}│ {msg}{Colors.RESET}"

        # WARNING
        if record.levelno == logging.WARNING:
            return f"  {Colors.YELLOW}│ ⚠️  {msg}{Colors.RESET}"

        # ERROR
        if record.levelno >= logging.ERROR:
            return f"  {Colors.RED}│ ❌ {msg}{Colors.RESET}"

        # DEBUG
        if record.levelno == logging.DEBUG:
            return f"  {Colors.DIM}│ {msg}{Colors.RESET}"

        return f"  {msg}"


class EvolutionProgressTracker:
    """进化进度追踪器

    实时追踪进化过程的每个阶段，提供：
    - 当前阶段
    - 已用时间
    - 进度百分比
    - 当前操作详情
    """

    def __init__(self):
        self.current_stage: str = "idle"
        self.stage_start_time: float = 0
        self.cycle_start_time: float = 0
        self.total_stages: int = 5
        self.current_stage_index: int = 0
        self.stage_details: list = []
        self.task_progress: dict = {}

    def start_cycle(self) -> None:
        """开始新一轮进化"""
        self.cycle_start_time = time.time()
        self.current_stage = "starting"
        self.stage_details = []
        self.task_progress = {}
        self._print_header("🧬 进化周期开始")

    def start_stage(self, stage_name: str, stage_index: int) -> None:
        """开始一个阶段

        Args:
            stage_name: 阶段名称
            stage_index: 阶段索引（从 0 开始）
        """
        self.current_stage = stage_name
        self.current_stage_index = stage_index
        self.stage_start_time = time.time()
        elapsed = self._format_elapsed(time.time() - self.cycle_start_time)
        progress = int((stage_index / self.total_stages) * 100)

        print(f"\n{Colors.BOLD}{Colors.CYAN}"
              f"[{progress}%] [{elapsed}] {stage_name}"
              f"{Colors.RESET}")

    def add_detail(self, detail: str, level: str = "info") -> None:
        """添加阶段详情

        Args:
            detail: 详情内容
            level: 级别 (info/success/warning/error)
        """
        self.stage_details.append({"detail": detail, "level": level, "time": time.time()})

        icons = {
            "info": f"{Colors.BLUE}  ↳{Colors.RESET}",
            "success": f"{Colors.GREEN}  ✅{Colors.RESET}",
            "warning": f"{Colors.YELLOW}  ⚠️ {Colors.RESET}",
            "error": f"{Colors.RED}  ❌{Colors.RESET}",
            "thinking": f"{Colors.MAGENTA}  💭{Colors.RESET}",
        }
        icon = icons.get(level, icons["info"])
        print(f"  {icon} {detail}")

    def add_thinking(self, thought: str) -> None:
        """添加思考链内容"""
        self.add_detail(thought, "thinking")

    def add_analysis_result(self, issues_count: int, files_scanned: int) -> None:
        """添加分析结果"""
        self.add_thinking(f"扫描 {files_scanned} 个文件，发现 {issues_count} 个问题")

    def start_task(self, task_id: str, task_title: str) -> None:
        """开始执行一个任务"""
        self.task_progress[task_id] = {
            "title": task_title,
            "start_time": time.time(),
            "status": "running",
        }
        print(f"\n  {Colors.BOLD}⚡ 任务 [{task_id}]: {task_title}{Colors.RESET}")

    def complete_task(self, task_id: str, success: bool, detail: str = "") -> None:
        """完成任务"""
        if task_id in self.task_progress:
            self.task_progress[task_id]["status"] = "success" if success else "failed"
            self.task_progress[task_id]["end_time"] = time.time()
            duration = self.task_progress[task_id]["end_time"] - self.task_progress[task_id]["start_time"]

            if success:
                print(f"  {Colors.GREEN}  ✅ 完成 ({duration:.1f}s){Colors.RESET}")
            else:
                print(f"  {Colors.RED}  ❌ 失败 ({duration:.1f}s){Colors.RESET}")

            if detail:
                print(f"     {Colors.DIM}{detail}{Colors.RESET}")

    def complete_stage(self) -> None:
        """完成当前阶段"""
        elapsed = time.time() - self.stage_start_time
        print(f"  {Colors.DIM}└─ 耗时 {elapsed:.1f}s{Colors.RESET}")

    def complete_cycle(self, success_count: int, fail_count: int, skip_count: int) -> None:
        """完成整个进化周期"""
        total_elapsed = time.time() - self.cycle_start_time

        print(f"\n{Colors.BOLD}{'─' * 50}{Colors.RESET}")
        print(f"  {Colors.BOLD}🧬 进化周期完成{Colors.RESET}")
        print(f"  {Colors.DIM}总耗时: {self._format_elapsed(total_elapsed)}{Colors.RESET}")
        print(f"  {Colors.GREEN}✅ 成功: {success_count}{Colors.RESET}")
        print(f"  {Colors.RED}❌ 失败: {fail_count}{Colors.RESET}")
        print(f"  {Colors.DIM}⏭️  跳过: {skip_count}{Colors.RESET}")
        print(f"{Colors.BOLD}{'─' * 50}{Colors.RESET}\n")

    def _print_header(self, title: str) -> None:
        """打印标题"""
        width = 50
        print(f"\n{Colors.BOLD}{Colors.CYAN}{'─' * width}{Colors.RESET}")
        print(f"  {Colors.BOLD}{title}{Colors.RESET}")
        print(f"{Colors.BOLD}{Colors.CYAN}{'─' * width}{Colors.RESET}")

    @staticmethod
    def _format_elapsed(seconds: float) -> str:
        """格式化已用时间"""
        if seconds < 60:
            return f"{seconds:.0f}s"
        mins = int(seconds // 60)
        secs = int(seconds % 60)
        return f"{mins}m{secs}s"


# 全局进度追踪器实例
progress_tracker = EvolutionProgressTracker()


def setup_evolution_logging(verbose: bool = False) -> None:
    """配置进化系统的日志输出

    Args:
        verbose: 是否输出详细日志（包含 DEBUG 级别）
    """
    level = logging.DEBUG if verbose else logging.INFO

    # 创建自定义 handler
    handler = logging.StreamHandler(sys.stdout)
    handler.setLevel(level)
    handler.setFormatter(ThinkingChainFormatter())

    # 配置进化相关 logger
    evolution_loggers = [
        "mcp-memory.evolution",
        "mcp-memory.evolution.scheduler",
        "mcp-memory.evolution.analyzer",
        "mcp-memory.evolution.driver",
        "mcp-memory.evolution.reflection",
        "mcp-memory.evolution.memory",
    ]

    for logger_name in evolution_loggers:
        logger = logging.getLogger(logger_name)
        logger.setLevel(level)
        # 清除已有 handler，避免重复
        logger.handlers = []
        logger.addHandler(handler)
        logger.propagate = False  # 不传播到 root logger
