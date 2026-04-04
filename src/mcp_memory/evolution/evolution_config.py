"""
进化系统配置

定义自动进化模块的运行参数、扫描范围、OpenCode 行为约束。
安全门控确保自动修改不会引入回归。
"""

import os
from dataclasses import dataclass, field
from typing import List, Optional


@dataclass
class EvolutionConfig:
    """自动进化系统配置

    Attributes:
        project_root: 项目根目录路径
        src_dir: Python 源码目录
        frontend_dir: 前端源码目录
        tests_dir: 测试目录
        scan_extensions: 需要扫描的文件扩展名
        exclude_dirs: 排除的目录列表
        run_ruff: 是否运行 Ruff 代码 quality 检查
        run_mypy: 是否运行 MyPy 类型检查
        run_pytest: 是否运行 Pytest 单元测试
        opencode_binary: OpenCode CLI 可执行文件路径
        opencode_timeout: 单任务超时时间（秒）
        max_tasks_per_cycle: 每轮进化最多处理的任务数
        auto_commit: 验证通过后是否自动提交 git commit
        commit_prefix: git commit message 前缀
        require_tests_pass: 提交前是否要求测试通过
        require_lint_pass: 提交前是否要求 lint 通过
        max_files_per_task: 单任务最多修改的文件数
        dry_run: 是否仅分析不执行（安全模式）
        enabled: 是否启用自动进化
        scan_interval_seconds: 扫描间隔（秒）
        quiet_hours_start: 静默期开始时间（小时）
        quiet_hours_end: 静默期结束时间（小时）
    """

    # ─── 项目信息 ─────────────────────────────────────────────
    project_root: str = field(default_factory=lambda: os.path.abspath(
        os.path.join(os.path.dirname(__file__), "..", "..", "..")
    ))
    src_dir: str = "src/mcp_memory"
    frontend_dir: str = "frontend/src"
    tests_dir: str = "tests"
    scan_dirs: List[str] = field(default_factory=lambda: ["src/mcp_memory", "frontend/src"])

    # ─── 扫描范围 ─────────────────────────────────────────────
    scan_extensions: List[str] = field(default_factory=lambda: [".py", ".vue", ".ts", ".js"])
    exclude_dirs: List[str] = field(default_factory=lambda: [
        "__pycache__", ".venv", "node_modules", ".git", "dist", "build",
        ".ruff_cache", ".mypy_cache", ".pytest_cache", "data", "chroma"
    ])

    # ─── 分析工具 ─────────────────────────────────────────────
    run_ruff: bool = True
    run_mypy: bool = True
    run_pytest: bool = True

    # ─── OpenCode 驱动 ───────────────────────────────────────
    opencode_binary: str = "opencode"
    opencode_timeout: int = 300
    max_tasks_per_cycle: int = 5
    auto_commit: bool = True
    commit_prefix: str = "evolve"

    # ─── 安全约束 ─────────────────────────────────────────────
    require_tests_pass: bool = True
    require_lint_pass: bool = True
    max_files_per_task: int = 3
    dry_run: bool = False

    # ─── 调度 ─────────────────────────────────────────────────
    enabled: bool = True
    scan_interval_seconds: int = 3600
    quiet_hours_start: int = 2
    quiet_hours_end: int = 7
