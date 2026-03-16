# MCP Memory System - TUI 用户指南

## 🎯 什么是 TUI？

TUI (Terminal User Interface) 是**给人类用户**设计的交互式终端界面，提供直观的视觉布局和键盘操作，让您可以在终端中方便地管理记忆。

## 📋 TUI vs CLI 对比

| 特性 | TUI (给人用) | CLI (给AI Agent用) |
|------|-------------|-------------------|
| 界面类型 | 可视化窗口界面 | 命令行参数 |
| 交互方式 | 键盘导航、鼠标点击 | 命令参数 |
| 用户体验 | 直观、无需记忆命令 | 脚本友好、易于自动化 |
| 适用场景 | 日常记忆管理、查看统计 | 自动化脚本、AI Agent调用 |

## 🚀 启动TUI

### 方法1：直接启动
```bash
cd /Users/yingyang/Documents/project/memory
.venv/bin/python -m src.mcp_memory.tui_cli interactive
```

### 方法2：通过CLI命令
```bash
.venv/bin/python -m src.mcp_memory.cli memory tui
```

### 方法3：使用快捷脚本（推荐）
创建启动脚本 `start_tui.sh`：
```bash
#!/bin/bash
cd /Users/yingyang/Documents/project/memory
.venv/bin/python -m src.mcp_memory.tui_cli interactive --user "$USER"
```

## 🎨 界面布局

```
┌─────────────────────────────────────────────────────────────┐
│  MCP Memory System                    用户: cli_user       │
│  三层记忆系统                                              │
├──────────────┬──────────────────────────────────────────────┤
│              │                                             │
│  📊 统计信息  │           记忆列表                          │
│              │   ┌────────────────────────────────────┐   │
│  技能: 5     │   │ 1. [存储] 测试记忆写入功能          │   │
│  思维: 3     │   │ 2. [思维] 设计思路                  │   │
│  存储: 10    │   │ 3. [技能] Python编程               │   │
│              │   │ 4. [存储] 项目启动                  │   │
│  ────────    │   └────────────────────────────────────┘   │
│              │                                             │
│  📂 控制面板  │           详情视图                        │
│              │   ┌────────────────────────────────────┐   │
│  [新建] [搜索]│   │ 标题: 测试记忆写入功能              │   │
│  [刷新] [帮助]│   │ 内容: 今天测试了记忆写入功能...     │   │
│              │   │ 标签: 测试, 验证                    │   │
│              │   │ 关键词: pytest, memory              │   │
│              │   └────────────────────────────────────┘   │
│              │                                             │
├──────────────┴──────────────────────────────────────────────┤
│  快捷键: n=新建 | s=搜索 | r=刷新 | h=帮助 | q=退出         │
│  状态: 已连接 | 记忆数: 18 | 最新更新: 2024-01-15 10:30     │
└─────────────────────────────────────────────────────────────┘
```

## ⌨️ 操作说明

### 导航
- **↑/↓**: 在记忆列表中移动
- **Enter**: 查看选中的记忆详情
- **Tab**: 切换焦点区域
- **Esc**: 返回上一级/取消操作

### 快捷键
- **n**: 新建记忆
- **s**: 搜索记忆
- **r**: 刷新列表
- **h**: 显示帮助
- **f**: 切换全屏模式
- **q**: 退出应用

### 按钮操作
- 使用鼠标点击或键盘Enter激活按钮
- **新建**: 创建新的记忆条目
- **搜索**: 按关键词搜索记忆
- **刷新**: 重新加载记忆列表
- **帮助**: 显示快捷键列表

## 📝 功能详解

### 1. 查看记忆列表
- 启动后自动显示所有记忆
- 使用 ↑/↓ 键浏览
- 按 Enter 查看详细信息

### 2. 新建记忆
```
标题: [输入记忆标题]
内容: [输入记忆内容]
类型: [选择: note/task/idea/meeting/code]
标签: [可选: 输入标签，用逗号分隔]
关键词: [可选: 输入关键词]
```

### 3. 搜索记忆
- 输入关键词或短语
- 支持标题、内容、标签搜索
- 结果实时显示在列表中

### 4. 查看统计
- 按类型分布：技能/思维/存储
- 时间线图表
- 访问频率统计

### 5. AI助手功能
- 智能总结今日记忆
- 记忆关联分析
- 灵感推荐

## 🎯 使用场景

### 场景1：日常记录
```
1. 按 'n' 新建记忆
2. 输入标题: "今日学习笔记"
3. 输入内容: "学习了MCP协议的基本原理..."
4. 选择类型: note
5. 添加标签: 学习, MCP
6. 保存
```

### 场景2：任务管理
```
1. 按 'n' 新建记忆
2. 输入标题: "完成项目文档"
3. 输入内容: "需要编写API文档..."
4. 选择类型: task
5. 添加标签: TODO, 文档
6. 保存后可随时按 's' 搜索 "TODO"
```

### 场景3：知识检索
```
1. 按 's' 打开搜索
2. 输入关键词: "Python"
3. 查看搜索结果
4. 按 Enter 查看详细内容
```

## ⚙️ 配置选项

### 命令行参数
```bash
# 指定用户
.venv/bin/python -m src.mcp_memory.tui_cli interactive --user myname

# 指定项目
.venv/bin/python -m src.mcp_memory.tui_cli interactive --project myproject

# 全屏模式
.venv/bin/python -m src.mcp_memory.tui_cli interactive --fullscreen

# 调试模式
.venv/bin/python -m src.mcp_memory.tui_cli interactive --debug
```

### 环境变量
```bash
export MCP_MEMORY_USER="myname"
export MCP_MEMORY_PROJECT_ID="myproject"
export MCP_MEMORY_LANGUAGE="简体中文"
```

## 🔧 常见问题

### Q: TUI界面显示乱码？
A: 确保终端支持UTF-8编码和256色彩：
```bash
export LANG=zh_CN.UTF-8
export TERM=xterm-256color
```

### Q: 按键没有响应？
A: 检查终端是否支持功能键，或尝试使用 Ctrl 组合键

### Q: 如何退出TUI？
A: 按 'q' 键或 'Esc' 键退出，或按 Ctrl+C

### Q: 记忆数据存储在哪里？
A: 数据存储在 `~/.mcp_memory/chroma` 目录

### Q: 可以同时运行多个TUI实例吗？
A: 不建议，可能导致数据冲突

## 💡 使用技巧

### 技巧1：高效搜索
- 使用标签检索：输入 `#标签名`
- 使用类型过滤：输入 `type:note`
- 组合搜索：`Python #学习 type:code`

### 技巧2：批量操作
- 使用 Shift+↑/↓ 选择多条记忆
- 批量删除：选中后按 Delete 键

### 技巧3：快速导航
- 按 **g** 键跳转到顶部
- 按 **G** 键跳转到底部
- 按 /** 键进入搜索模式

### 技巧4：记忆关联
- 查看记忆详情时，相关记忆会自动显示
- 按 **a** 键查看关联图谱

## 📞 获取帮助

在TUI中：
- 按 **h** 键显示帮助
- 按 **?** 键显示快捷键列表

命令行：
```bash
.venv/bin/python -m src.mcp_memory.tui_cli --help
.venv/bin/python -m src.mcp_memory.cli memory --help
```

## 🔄 TUI vs 实际系统

TUI连接到真实的MCP Memory System后端：
- 所有操作即时生效
- 数据持久化存储
- 支持多人协作（如果配置了共享模式）

```
TUI界面 → MemoryManager → MemoryStore → ChromaDB
                                      ↓
                               三层记忆系统
```

## 🎨 主题自定义

可通过修改配置文件自定义TUI主题：
```bash
# 创建主题配置
mkdir -p ~/.mcp_memory/themes
# 编辑主题文件
vim ~/.mcp_memory/themes/my_theme.yaml
```

---

**注意**: TUI给人类用户使用，CLI给AI Agent使用。两者功能相同，但交互方式不同。

**推荐工作流**: 使用TUI进行日常记忆管理和查看统计，使用CLI编写自动化脚本和集成到其他工具。