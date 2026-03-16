#!/bin/bash
# Memory TUI Bash 自动启动脚本

echo "🧠 启动 Memory System TUI..."
echo "=================================="

# 切换到项目目录
cd /Users/yingyang/Documents/project/memory

# 设置环境变量
export PYTHONPATH="/Users/yingyang/Documents/project/memory/src"

# 检查虚拟环境
if [ ! -d ".venv" ]; then
    echo "❌ 错误: 未找到虚拟环境！"
    echo "请先创建虚拟环境: python3 -m venv .venv"
    exit 1
fi

# 启动 TUI（使用虚拟环境）
exec .venv/bin/python -m mcp_memory.tui_cli interactive "$@"