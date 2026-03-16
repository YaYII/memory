#!/bin/bash

# Vue前端构建脚本
# 用于将Vue项目构建并部署到后端静态目录

echo "🚀 开始构建Vue前端..."

# 进入前端目录
cd "$(dirname "$0")"

# 检查node_modules是否存在
if [ ! -d "node_modules" ]; then
    echo "📦 安装依赖..."
    npm install
fi

# 构建项目
echo "🔨 构建项目..."
npm run build

# 检查构建结果
if [ -d "../src/mcp_memory/static_vue" ]; then
    echo "✅ 构建成功！"
    echo "📁 静态文件已输出到: src/mcp_memory/static_vue/"
    echo "🌐 访问地址: http://localhost:22888/vue/"
else
    echo "❌ 构建失败！"
    exit 1
fi
