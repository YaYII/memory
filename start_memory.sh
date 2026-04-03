#!/bin/bash
# Memory System Launcher - 系统命令入口脚本

# 加载配置
if [ -f ~/.memoryrc ]; then
    source ~/.memoryrc
fi

echo "🧠 Memory System"
echo "==============="

# 检查是否在正确目录
if [ ! -f "$MEMORY_PROJECT_PATH/src/mcp_memory/server.py" ]; then
    echo "错误: 找不到记忆系统项目"
    echo "请确保项目位于: $MEMORY_PROJECT_PATH"
    echo "当前配置的项目路径: $MEMORY_PROJECT_PATH"
    exit 1
fi

cd "$MEMORY_PROJECT_PATH"
export PYTHONPATH="$MEMORY_PYTHONPATH"

# 检查虚拟环境
VENV_PYTHON="$MEMORY_PROJECT_PATH/.venv/bin/python"
if [ ! -f "$VENV_PYTHON" ]; then
    echo "错误: 未找到虚拟环境"
    echo "项目路径: $MEMORY_PROJECT_PATH"
    echo "请先创建虚拟环境:"
    echo "  cd $MEMORY_PROJECT_PATH"
    echo "  python3 -m venv .venv"
    echo "  .venv/bin/pip install -r requirements.txt"
    exit 1
fi

case "$1" in
    "status")
        echo "系统状态:"
        echo "===================="
        echo "项目路径: $MEMORY_PROJECT_PATH"
        echo "Python路径: $PYTHONPATH"
        echo "虚拟环境: $VENV_PYTHON"
        echo ""
        echo "Python版本:"
        "$VENV_PYTHON" --version
        echo ""
        echo "数据目录:"
        ls -la "$MEMORY_PROJECT_PATH/data/" 2>/dev/null || echo '  未找到数据目录'
        echo ""
        echo "依赖检查:"
        "$VENV_PYTHON" -m mcp_memory.cli check-dependencies
        ;;
    "write"|"read"|"list"|"stats"|"delete"|"reflect"|"rebuild"|"feedback"|"tiered"|"server"|"check-dependencies")
        # CLI 命令转发
        "$VENV_PYTHON" -m mcp_memory.cli "$@"
        ;;
    "help"|*)
        echo "用法: memory [命令] [参数]"
        echo ""
        echo "CLI命令:"
        echo "  write    - 写入新记忆"
        echo "           memory write \"内容\" --title \"标题\""
        echo "  read     - 搜索记忆"
        echo "           memory read \"关键词\" --top-k 5"
        echo "  list     - 列出记忆"
        echo "           memory list --type storage"
        echo "  stats    - 查看统计信息"
        echo "  server   - 服务器管理"
        echo "           memory server start|stop|status"
        echo "  status   - 查看系统状态"
        echo "  check-dependencies - 检查依赖"
        echo ""
        echo "使用 --help 查看具体命令的详细帮助"
        echo "例如: memory write --help"
        ;;
esac