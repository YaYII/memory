#!/bin/bash
# TUI简单测试脚本

PROJECT_PATH="/Users/yingyang/Documents/project/memory"
VENV_PYTHON="$PROJECT_PATH/.venv/bin/python"

echo "=========================================="
echo "  TUI 启动测试"
echo "=========================================="
echo ""
echo "项目路径: $PROJECT_PATH"
echo "Python路径: $VENV_PYTHON"
echo ""

# 检查虚拟环境
if [ ! -f "$VENV_PYTHON" ]; then
    echo "❌ 错误: 未找到虚拟环境"
    echo "路径: $VENV_PYTHON"
    exit 1
fi

echo "✓ 虚拟环境找到"
echo ""

# 检查Textual
echo "检查Textual依赖..."
$VENV_PYTHON -c "import textual; print('✓ Textual版本:', textual.__version__)" 2>&1 || {
    echo "❌ 缺少依赖，正在安装..."
    $VENV_PYTHON -m pip install textual
}

echo ""
echo "启动TUI界面..."
echo "提示："
echo "  - 界面将在全屏模式运行"
echo "  - 按 'q' 键退出"
echo "  - 按 'h' 键查看帮助"
echo "  - 使用上下箭头键导航"
echo ""
echo "正在启动..."
echo ""

# 设置Python路径
export PYTHONPATH="$PROJECT_PATH/src"

# 启动TUI
cd "$PROJECT_PATH"
exec "$VENV_PYTHON" -m mcp_memory.tui_cli interactive