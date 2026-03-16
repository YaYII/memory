#!/bin/bash
# Memory TUI 启动脚本

# 获取脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# 切换到项目目录
cd "$SCRIPT_DIR"

# 设置PYTHONPATH
export PYTHONPATH="$SCRIPT_DIR/src"

# 检查虚拟环境
if [ ! -d ".venv" ]; then
    echo "❌ 错误: 未找到虚拟环境！"
    echo "请先创建虚拟环境: python3 -m venv .venv"
    exit 1
fi

# 使用虚拟环境的Python
exec .venv/bin/python -m mcp_memory.tui_cli "$@"