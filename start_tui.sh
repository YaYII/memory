#!/bin/bash
# MCP Memory TUI 启动脚本

# 设置颜色
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 启动 MCP Memory TUI...${NC}"
echo ""

# 检查虚拟环境
if [ ! -d ".venv" ]; then
    echo -e "${RED}错误: 未找到虚拟环境！${NC}"
    echo "请先运行: python -m venv .venv"
    exit 1
fi

# 检查依赖
echo -e "${YELLOW}检查依赖...${NC}"
.venv/bin/python -m src.mcp_memory.tui_cli check-dependencies
if [ $? -ne 0 ]; then
    echo -e "${RED}依赖检查失败！${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✓ 依赖已就绪${NC}"
echo ""

# 显示启动信息
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}   MCP Memory System - TUI 交互界面${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "使用说明:"
echo -e "  ${YELLOW}↑/↓${NC}  在记忆列表中导航"
echo -e "  ${YELLOW}Enter${NC}  查看记忆详情"
echo -e "  ${YELLOW}n${NC}  新建记忆"
echo -e "  ${YELLOW}s${NC}  搜索记忆"
echo -e "  ${YELLOW}r${NC}  刷新列表"
echo -e "  ${YELLOW}h${NC}  显示帮助"
echo -e "  ${YELLOW}q${NC}  退出"
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# 启动TUI
exec .venv/bin/python -m src.mcp_memory.tui_cli interactive