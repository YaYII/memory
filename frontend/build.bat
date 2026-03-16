@echo off
REM Vue前端构建脚本 (Windows)
REM 用于将Vue项目构建并部署到后端静态目录

echo 🚀 开始构建Vue前端...

REM 进入前端目录
cd /d "%~dp0"

REM 检查node_modules是否存在
if not exist "node_modules" (
    echo 📦 安装依赖...
    call npm install
)

REM 构建项目
echo 🔨 构建项目...
call npm run build

REM 检查构建结果
if exist "..\src\mcp_memory\static_vue" (
    echo ✅ 构建成功！
    echo 📁 静态文件已输出到: src\mcp_memory\static_vue\
    echo 🌐 访问地址: http://localhost:22888/vue/
) else (
    echo ❌ 构建失败！
    exit /b 1
)
