"""
MCP Memory 自动进化 CLI

用法:
    memory evolve              # 执行一轮进化
    memory evolve --analyze    # 仅分析，不执行
    memory evolve --daemon     # 守护进程模式，持续自动进化
    memory evolve --dry-run    # 仅预览，不实际修改
    memory evolve --max-tasks 3  # 限制本轮最多处理 3 个任务
    memory evolve --history    # 查看进化历史
"""

import argparse
import json
import logging
import sys

from mcp_memory.evolution.evolution_config import EvolutionConfig
from mcp_memory.evolution.evolution_scheduler import EvolutionScheduler

logger = logging.getLogger("mcp-memory.evolution.cli")


def setup_logging(verbose: bool = False) -> None:
    """配置日志输出"""
    level = logging.DEBUG if verbose else logging.INFO
    logging.basicConfig(
        level=level,
        format="%(asctime)s [%(name)s] %(levelname)s %(message)s",
        datefmt="%H:%M:%S",
    )


def cmd_evolve(args: argparse.Namespace) -> int:
    """执行进化命令"""
    config = EvolutionConfig()
    config.dry_run = args.dry_run

    if args.scan_interval:
        config.scan_interval_seconds = args.scan_interval
    if args.max_tasks:
        config.max_tasks_per_cycle = args.max_tasks

    scheduler = EvolutionScheduler(config)

    # 加载历史
    scheduler.load_history()

    if args.analyze:
        # 仅分析
        report = scheduler.analyze_only()
        print(report.summary())

        # 输出问题详情
        if args.verbose:
            print("\n问题详情:")
            for issue in report.issues:
                print(f"  [{issue.severity.value.upper()}] {issue.file_path}:{issue.line_number} - {issue.title}")
        return 0

    if args.daemon:
        # 守护进程模式
        print("启动进化守护进程...")
        print(f"扫描间隔: {config.scan_interval_seconds}s")
        print(f"静默期: {config.quiet_hours_start}:00 - {config.quiet_hours_end}:00")
        print("按 Ctrl+C 退出\n")
        scheduler.run_daemon()
        return 0

    # 执行一轮进化
    result = scheduler.run_cycle(max_tasks=args.max_tasks)

    # 保存历史
    scheduler.save_history()

    # 输出结果
    if result.get("summary"):
        print(result["summary"])

    if result["status"] == "no_issues":
        print("\n✅ 代码质量良好，无需进化")
    elif result["status"] == "no_tasks":
        print("\n⚠️  发现了代码问题，但无可自动修复的任务")
    elif result["status"] == "completed":
        record = result.get("record", {})
        succeeded = record.get("tasks_succeeded", 0)
        failed = record.get("tasks_failed", 0)
        if failed > 0:
            print(f"\n⚠️  进化完成，但有 {failed} 个任务未通过验证")
            return 1
        else:
            print(f"\n✅ 进化完成，{succeeded} 个任务全部通过验证")

    return 0


def cmd_history(args: argparse.Namespace) -> int:
    """查看进化历史"""
    config = EvolutionConfig()
    scheduler = EvolutionScheduler(config)
    count = scheduler.load_history()

    if count == 0:
        print("暂无进化历史")
        return 0

    history = scheduler.get_history()

    if args.json:
        print(json.dumps(history, ensure_ascii=False, indent=2))
        return 0

    print(f"\n进化历史记录 ({count} 轮):\n")
    print(f"{'周期':>4}  {'时间':>20}  {'耗时':>8}  {'问题':>4}  {'任务':>4}  {'成功':>4}  {'失败':>4}")
    print("-" * 60)

    for record in history:
        duration = record.get("duration_seconds", 0)
        mins = int(duration // 60)
        secs = int(duration % 60)
        print(
            f"{record['cycle_number']:>4}  "
            f"{record['start_time'][:19]:>20}  "
            f"{mins:02d}:{secs:02d}    "
            f"{record['issues_found']:>4}  "
            f"{record['tasks_executed']:>4}  "
            f"{record['tasks_succeeded']:>4}  "
            f"{record['tasks_failed']:>4}"
        )

    return 0


def main() -> int:
    """CLI 入口"""
    parser = argparse.ArgumentParser(
        prog="memory evolve",
        description="MCP Memory 自动进化系统 — 让项目自我优化",
    )
    parser.add_argument("-v", "--verbose", action="store_true", help="详细输出")
    parser.add_argument("--dry-run", action="store_true", help="仅预览，不修改代码")

    subparsers = parser.add_subparsers(dest="command")

    # ─── evolve 子命令 ─────────────────────────────────────
    evolve_parser = subparsers.add_parser("evolve", help="执行自动进化")
    evolve_parser.add_argument("--analyze", action="store_true", help="仅分析代码")
    evolve_parser.add_argument("--daemon", action="store_true", help="守护进程模式")
    evolve_parser.add_argument("--dry-run", action="store_true", help="仅预览")
    evolve_parser.add_argument("--max-tasks", type=int, help="最多处理的任务数")
    evolve_parser.add_argument("--scan-interval", type=int, help="扫描间隔（秒）")
    evolve_parser.add_argument("-v", "--verbose", action="store_true", help="详细输出")

    # ─── history 子命令 ────────────────────────────────────
    history_parser = subparsers.add_parser("history", help="查看进化历史")
    history_parser.add_argument("--json", action="store_true", help="JSON 格式输出")

    args = parser.parse_args()
    setup_logging(args.verbose)

    if args.command == "history":
        return cmd_history(args)
    else:
        return cmd_evolve(args)


if __name__ == "__main__":
    sys.exit(main())
