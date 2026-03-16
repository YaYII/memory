#!/usr/bin/env python3
"""
MCP Memory TUI CLI - 命令行文本用户界面入口

Usage:
    memory tui                  # 启动TUI界面
    memory tui --help           # 显示帮助
    memory tui --user USER       # 指定用户
"""

import typer
from typing import Optional
import sys
import os

# 添加项目根目录到Python路径
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from mcp_memory.core.config import settings
from mcp_memory.tui import main

app = typer.Typer(
    name="tui",
    help="🧠 MCP Memory System - TUI 交互界面",
    add_completion=False
)


@app.command()
def interactive(
    user: str = typer.Option("cli_user", "--user", "-u", help="用户ID"),
    project: Optional[str] = typer.Option(None, "--project", "-p", help="项目ID"),
    fullscreen: bool = typer.Option(False, "--fullscreen", "-f", help="全屏模式"),
    debug: bool = typer.Option(False, "--debug", "-d", help="调试模式")
):
    """启动TUI交互界面"""

    # 设置环境变量
    os.environ["MCP_MEMORY_USER"] = user
    if project:
        os.environ["MCP_MEMORY_PROJECT_ID"] = project

    # 配置日志级别
    if debug:
        import logging
        logging.basicConfig(level=logging.DEBUG)

    try:
        # 启动TUI应用
        main()
    except KeyboardInterrupt:
        print("\n感谢使用记忆系统！")
    except Exception as e:
        print(f"启动TUI失败: {e}")
        if debug:
            import traceback
            traceback.print_exc()


@app.command()
def version():
    """显示版本信息"""
    print("MCP Memory System - TUI 版本 1.0.0")
    print("基于 Textual 的交互式记忆系统")


@app.command()
def check_dependencies():
    """检查依赖"""
    required_packages = [
        "textual",
        "rich",
        "click",
        "fastapi",
        "chromadb"
    ]

    missing_packages = []
    for package in required_packages:
        try:
            __import__(package.replace("-", "_"))
        except ImportError:
            missing_packages.append(package)

    if missing_packages:
        print("缺少以下依赖:")
        for package in missing_packages:
            print(f"  - {package}")
        print("\n请使用以下命令安装:")
        print(f"pip install {' '.join(missing_packages)}")
    else:
        print("所有依赖都已安装完成！")


if __name__ == "__main__":
    app()