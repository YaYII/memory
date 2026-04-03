#!/bin/bash
# MCP Memory System - Shell 集成示例
# 
# 本示例展示了如何在 Shell 脚本中集成记忆系统
# 
# 使用方法:
#   chmod +x shell_integration.sh
#   ./shell_integration.sh

set -e

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 日志函数
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 检查 memory 命令是否可用
check_memory_command() {
    if ! command -v memory &> /dev/null; then
        log_error "memory 命令未找到，请先安装 MCP Memory System"
        exit 1
    fi
    log_success "memory 命令可用"
}

# 示例 1: 写入当前目录信息
example_write_directory_info() {
    log_info "示例 1: 写入当前目录信息"
    
    local dir=$(pwd)
    local dir_name=$(basename "$dir")
    local timestamp=$(date "+%Y-%m-%d %H:%M:%S")
    
    memory --local write \
        "当前工作目录: $dir\n目录名: $dir_name\n时间: $timestamp" \
        --title "当前目录信息 - $dir_name" \
        --keywords "目录,工作目录,$dir_name" \
        --scope project
    
    log_success "目录信息已写入记忆"
}

# 示例 2: 记录命令历史
example_save_command_history() {
    log_info "示例 2: 记录重要命令"
    
    local command="git status"
    local description="查看 Git 仓库状态"
    
    memory --local write \
        "命令: $command\n描述: $description\n用途: 快速查看当前 Git 仓库的状态" \
        --title "Git 命令: $command" \
        --keywords "git,命令,status" \
        --scope global
    
    log_success "命令已记录"
}

# 示例 3: 搜索记忆
example_search_memory() {
    log_info "示例 3: 搜索记忆"
    
    echo "搜索 'git' 相关的记忆..."
    memory --local read "git" --top-k 3
}

# 示例 4: 使用 JSON 输出进行脚本集成
example_json_output() {
    log_info "示例 4: 使用 JSON 输出进行脚本集成"
    
    # 获取统计信息并解析
    local stats=$(memory --local --json stats)
    local total_memories=$(echo "$stats" | python3 -c "import sys, json; data = json.load(sys.stdin); print(data['data'].get('total_memories', 0))")
    
    log_success "当前总记忆数: $total_memories"
}

# 示例 5: 批量导入命令
example_batch_import() {
    log_info "示例 5: 批量导入命令"
    
    # 创建临时 JSONL 文件
    local temp_file=$(mktemp /tmp/memory_batch.XXXXXX.jsonl)
    
    cat > "$temp_file" << EOF
{"content": "ls -la: 列出目录所有文件，包括隐藏文件", "title": "命令: ls -la", "keywords": ["命令", "ls", "文件列表"]}
{"content": "grep -r 'pattern' .: 在当前目录递归搜索模式", "title": "命令: grep -r", "keywords": ["命令", "grep", "搜索"]}
{"content": "chmod +x file.sh: 给文件添加执行权限", "title": "命令: chmod +x", "keywords": ["命令", "chmod", "权限"]}
EOF
    
    log_info "创建的批量文件: $temp_file"
    cat "$temp_file"
    
    # 批量导入（注意：需要使用 memory 命令的 batch-write）
    log_warning "批量导入功能需要通过 SDK 或直接使用 API"
    
    # 清理临时文件
    rm "$temp_file"
}

# 示例 6: 每日备份脚本
example_backup_script() {
    log_info "示例 6: 生成每日备份脚本"
    
    local backup_script="backup_memory.sh"
    
    cat > "$backup_script" << 'EOF'
#!/bin/bash
# 记忆系统每日备份脚本

BACKUP_DIR="$HOME/.mcp_memory_backups"
DATE=$(date "+%Y%m%d_%H%M%S")
BACKUP_FILE="$BACKUP_DIR/memory_backup_$DATE.jsonl"

# 创建备份目录
mkdir -p "$BACKUP_DIR"

# 使用 SDK 导出记忆（这里假设你有一个 Python 导出脚本）
echo "开始备份记忆..."

# 这里你可以使用 Python SDK 来导出
# python3 export_memories.py "$BACKUP_FILE"

echo "备份完成: $BACKUP_FILE"

# 保留最近 7 天的备份
find "$BACKUP_DIR" -name "memory_backup_*.jsonl" -mtime +7 -delete

echo "旧备份已清理"
EOF
    
    chmod +x "$backup_script"
    log_success "备份脚本已生成: $backup_script"
    log_info "你可以通过 cron 定期运行: 0 2 * * * $backup_script"
}

# 示例 7: 记住当前环境
example_remember_environment() {
    log_info "示例 7: 记住当前环境"
    
    local python_version=$(python3 --version 2>/dev/null || echo "未安装")
    local node_version=$(node --version 2>/dev/null || echo "未安装")
    local git_branch=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "非 Git 仓库")
    
    memory --local write \
        "Python 版本: $python_version\nNode 版本: $node_version\nGit 分支: $git_branch\n目录: $(pwd)" \
        --title "当前环境状态 - $(date '+%Y-%m-%d')" \
        --keywords "环境,版本,状态" \
        --scope project
    
    log_success "环境状态已记录"
}

# 主函数
main() {
    echo "========================================"
    echo "  MCP Memory System - Shell 集成示例"
    echo "========================================"
    echo ""
    
    check_memory_command
    
    echo ""
    echo "选择要运行的示例:"
    echo "1. 写入当前目录信息"
    echo "2. 记录命令历史"
    echo "3. 搜索记忆"
    echo "4. JSON 输出集成"
    echo "5. 批量导入示例"
    echo "6. 生成备份脚本"
    echo "7. 记住当前环境"
    echo "8. 运行所有示例"
    echo "0. 退出"
    echo ""
    
    read -p "请输入选项 [0-8]: " choice
    
    case $choice in
        1)
            example_write_directory_info
            ;;
        2)
            example_save_command_history
            ;;
        3)
            example_search_memory
            ;;
        4)
            example_json_output
            ;;
        5)
            example_batch_import
            ;;
        6)
            example_backup_script
            ;;
        7)
            example_remember_environment
            ;;
        8)
            example_write_directory_info
            example_save_command_history
            example_search_memory
            example_json_output
            example_remember_environment
            ;;
        0)
            log_info "退出"
            exit 0
            ;;
        *)
            log_error "无效选项"
            exit 1
            ;;
    esac
    
    echo ""
    log_success "示例运行完成！"
}

# 运行主函数
main "$@"
