# Memory System 快速开始

## 🚀 快速启动

### TUI 交互界面
```bash
# 启动TUI
memory tui

# 指定用户
memory tui --user alice

# 指定项目
memory tui --user alice --project myproject

# 全屏模式
memory tui -f

# 调试模式
memory tui --debug
```

### CLI 命令行
```bash
# 查看帮助
memory --help

# 写入记忆
memory write "重要信息" --title "记忆标题"

# 搜索记忆
memory read "关键词"

# 列出记忆
memory list

# 查看统计
memory stats
```

## 📋 功能对比

| 功能 | TUI | CLI |
|------|-----|-----|
| 交互式操作 | ✅ | ❌ |
| 键盘快捷键 | ✅ | ❌ |
| 批量操作 | ✅ | ❌ |
| AI助手 | ✅ | ❌ |
| 图形界面 | ✅ | ❌ |
| 脚本自动化 | ❌ | ✅ |

## 🔧 安装要求

### 必需依赖
```bash
pip install textual rich click fastapi uvicorn
```

### 可选依赖
```bash
# 矢量存储
pip install chromadb

# 中文分词
pip install jieba

# 排序算法
pip install rank_bm25

# 网络请求
pip install httpx

# LLM支持（选一个）
pip install openai
pip install anthropic
pip install deepseek
```

## 🎯 使用场景

### 1. 个人知识管理
```bash
# 启动TUI
memory tui --user alice --project knowledge

# 创建知识条目
# 1. 按 n 键
# 2. 填写标题和内容
# 3. 添加关键词和标签
```

### 2. 团队项目协作
```bash
# 切换到项目
memory tui --user bob --project team_project

# 搜索相关记忆
# 1. 按 s 键
# 2. 输入项目关键词
# 3. 查看相关记忆
```

### 3. 任务管理
```bash
# 创建任务记忆
memory tui --user charlie --project tasks

# 使用AI助手总结
# 1. 点击AI助手按钮
# 2. 选择"总结今日记忆"
```

## 🎨 TUI 特色

- **现代化界面**: 基于Textual构建的优雅终端界面
- **实时搜索**: 即时搜索和筛选功能
- **智能增强**: AI自动结构化记忆内容
- **可视化**: 3D大脑模型和记忆图谱
- **快捷操作**: 丰富的键盘快捷键

## 📖 更多文档

- [TUI使用指南](TUI_USAGE.md) - 详细的TUI使用说明
- [CLI完整文档](README.md) - CLI命令参考
- [API文档](docs/API.md) - API接口文档
- [开发指南](docs/DEVELOPMENT.md) - 开发者文档

## 🔍 故障排除

### 常见问题

1. **命令不存在**
```bash
# 确保已安装依赖
pip install -e .

# 或者使用Python模块
python3 -m mcp_memory.tui_cli
```

2. **TUI无法启动**
```bash
# 检查依赖
memory tui check-dependencies

# 安装缺失依赖
pip install textual rich
```

3. **界面显示异常**
```bash
# 尝试全屏模式
memory tui -f

# 使用调试模式
memory tui --debug
```

## 🤝 获取帮助

- 查看 `--help` 获取完整命令列表
- 阅读 `TUI_USAGE.md` 了解详细使用方法
- 查看项目README了解系统架构
- 提交Issue获取技术支持