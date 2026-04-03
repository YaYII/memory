# CLI 使用文档

## 📚 目录

- [概述](#概述)
- [安装](#安装)
- [CLI 命令列表](#cli-命令列表)
  - [统一命令 `memory`](#统一命令-memory)
  - [本地命令 `mcp-memory-local`](#本地命令-mcp-memory-local)
  - [服务器命令 `mcp-memory-cli`](#服务器命令-mcp-memory-cli)
- [详细使用说明](#详细使用说明)
  - [写入记忆](#写入记忆)
  - [读取/搜索记忆](#读取搜索记忆)
  - [列出记忆](#列出记忆)
  - [显示记忆详情](#显示记忆详情)
  - [删除记忆](#删除记忆)
  - [显示系统统计](#显示系统统计)
  - [触发深度反思](#触发深度反思)
  - [批量操作](#批量操作)
- [配置选项](#配置选项)
- [常见问题](#常见问题)

---

## 概述

MCP Memory System 提供了三个命令行工具：

1. **`memory`** - 统一的命令行工具，支持本地模式和服务器模式
2. **`mcp-memory-local`** - 本地直接操作（无需服务器）
3. **`mcp-memory-cli`** - 通过 HTTP API 调用（需要服务器）

---

## 安装

### 使用 pip 安装（开发模式）

```bash
cd /path/to/project
pip install -e .
```

### 验证安装

```bash
# 查看帮助
memory --help

# 查看版本
mcp-memory --version
```

---

## CLI 命令列表

### 统一命令 `memory`

这是推荐使用的命令，支持两种模式：

```bash
# 服务器模式（默认）
memory write "内容" --title "标题"

# 本地模式（--local）
memory --local write "内容" --title "标题"

# JSON 输出模式（--json，适合脚本集成）
memory --json stats
```

| 命令 | 说明 |
|------|------|
| `write` | 写入新记忆 |
| `read` | 读取/搜索记忆 |
| `list` | 列出记忆 |
| `show` | 显示记忆详情 |
| `delete` | 删除记忆 |
| `stats` | 显示系统统计 |
| `reflect` | 触发深度反思 |
| `batch-write` | 批量写入记忆 |
| `batch-delete` | 批量删除记忆 |
| `batch-export` | 批量导出记忆 |

### 本地命令 `mcp-memory-local`

直接操作数据库，无需启动服务器。

```bash
mcp-memory-local --help
```

| 命令 | 说明 |
|------|------|
| `write` | 写入新记忆 |
| `read` | 读取/搜索记忆 |
| `list` | 列出记忆 |
| `show` | 显示记忆详情 |
| `delete` | 删除记忆 |
| `stats` | 显示系统统计 |
| `reflect` | 触发深度反思 |
| `interactive` | 交互式 TUI 模式 |

### 服务器命令 `mcp-memory-cli`

通过 HTTP API 调用，需要先启动服务器。

```bash
mcp-memory-cli --help
```

| 命令 | 说明 |
|------|------|
| `write` | 写入新记忆 |
| `read` | 读取/搜索记忆 |
| `list` | 列出记忆 |
| `delete` | 删除记忆 |
| `stats` | 显示系统统计 |
| `reflect` | 触发深度反思 |
| `rebuild` | 重建记忆图谱 |
| `feedback` | 提交记忆反馈 |
| `tiered` | 三层记忆管理 |
| `server start` | 启动服务器 |
| `server stop` | 停止服务器 |
| `server status` | 查看服务器状态 |

---

## 详细使用说明

### 写入记忆

#### 基本用法

```bash
# 最简单的方式
memory write "这是一条记忆内容"

# 带标题
memory write "Python 是一种编程语言" --title "Python 介绍"

# 带关键词和作用域
memory write "这是一条重要的全局记忆" \
  --title "重要信息" \
  --keywords "重要,全局" \
  --scope global
```

#### 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `content` | str | 必填 | 记忆内容 |
| `--title, -t` | str | None | 记忆标题 |
| `--scope, -s` | str | project | 作用域：project（项目级）或 global（全局） |
| `--keywords, -k` | str | None | 关键词，逗号分隔 |
| `--user, -u` | str | cli_user | 用户 ID |
| `--type` | str | note | 内容类型 |

#### 示例

```bash
# 项目级记忆
memory write "项目使用 FastAPI 框架" --title "技术栈" --keywords "FastAPI,Python"

# 全局记忆
memory write "我的邮箱是 example@email.com" --title "联系方式" --scope global
```

### 读取/搜索记忆

#### 基本用法

```bash
# 简单搜索
memory read "Python"

# 指定返回数量
memory read "Python" --top-k 10

# 按作用域过滤
memory read "数据库" --scope project
```

#### 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `query` | str | 必填 | 查询内容 |
| `--top-k, -k` | int | 5 | 返回结果数量 |
| `--scope, -s` | str | None | 作用域过滤 |
| `--user, -u` | str | cli_user | 用户 ID |

#### 示例

```bash
# 搜索项目相关记忆
memory read "数据库配置" --scope project

# 搜索全局相关记忆
memory read "联系方式" --scope global
```

### 列出记忆

#### 基本用法

```bash
# 列出所有记忆（默认显示前 20 条）
memory list

# 按类型过滤
memory list --type storage

# 显示更多
memory list --limit 50
```

#### 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `--type, -t` | str | all | 记忆类型：all/storage/thinking/skill |
| `--limit, -l` | int | 20 | 显示数量 |
| `--user, -u` | str | cli_user | 用户 ID |

#### 示例

```bash
# 列出存储层记忆
memory list --type storage

# 列出思维层记忆
memory list --type thinking

# 列出技能层记忆
memory list --type skill
```

### 显示记忆详情

#### 基本用法

```bash
# 显示记忆详情
memory show <memory_id>

# 示例
memory show abc123def456
```

#### 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `memory_id` | str | 必填 | 记忆 ID |
| `--user, -u` | str | cli_user | 用户 ID |

### 删除记忆

#### 基本用法

```bash
# 删除记忆（会提示确认）
memory delete <memory_id>

# 强制删除（不提示）
memory delete <memory_id> --force
```

#### 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `memory_id` | str | 必填 | 记忆 ID |
| `--user, -u` | str | cli_user | 用户 ID |
| `--force, -f` | bool | False | 强制删除，不确认 |

### 显示系统统计

#### 基本用法

```bash
# 显示统计信息
memory stats
```

#### 输出示例

```
┌──────────────┬─────────────────────────────────┐
│  指标         │  值                              │
├──────────────┼─────────────────────────────────┤
│ 总记忆数      │ 42                               │
│ 存储层        │ 30                               │
│ 思维层        │ 8                                │
│ 技能层        │ 4                                │
│ LLM启用       │ ✅                               │
│ 提供商数      │ 3                                │
└──────────────┴─────────────────────────────────┘
```

### 触发深度反思

#### 基本用法

```bash
# 触发深度反思
memory reflect
```

#### 功能说明

深度反思会执行以下操作：
- 检测重复记忆
- 合并相似记忆
- 修复语言一致性
- 更新知识图谱

### 批量操作

#### 批量写入

```bash
# 从 JSONL 文件批量写入
memory batch-write memories.jsonl

# 自定义参数
memory batch-write memories.jsonl --scope global --user alice
```

**JSONL 格式示例：**

```jsonl
{"content": "记忆内容 1", "title": "标题 1", "keywords": ["标签1", "标签2"]}
{"content": "记忆内容 2", "title": "标题 2"}
{"content": "记忆内容 3"}
```

#### 批量删除

```bash
# 从命令行指定 ID 列表
memory batch-delete id1 id2 id3 --force

# 从文件读取 ID 列表（每行一个）
memory batch-delete --file ids.txt --force
```

#### 批量导出

```bash
# 导出为 JSONL 格式（默认）
memory batch-export memories.jsonl

# 导出为 JSON 格式
memory batch-export memories.json --format json

# 按类型过滤
memory batch-export skills.jsonl --type skill --limit 100
```

---

## 配置选项

### 环境变量

| 环境变量 | 默认值 | 说明 |
|---------|--------|------|
| `MCP_MEMORY_PORT` | 22888 | 服务器端口 |
| `MCP_MEMORY_LANGUAGE` | 简体中文 | 默认语言 |
| `DEEPSEEK_API_KEY` | None | DeepSeek API 密钥 |
| `OPENAI_API_KEY` | None | OpenAI API 密钥 |
| `ANTHROPIC_API_KEY` | None | Anthropic API 密钥 |
| `MCP_EVOLUTION_ENABLED` | true | 是否启用自动进化 |
| `MCP_EVOLUTION_SCAN_INTERVAL_SECONDS` | 300 | 扫描间隔（秒） |
| `MCP_EVOLUTION_REFLECTION_INTERVAL_SECONDS` | 1800 | 反思间隔（秒） |

### 配置文件

可以在项目根目录创建 `.env` 文件：

```bash
# 复制示例配置
cp .env.example .env

# 编辑配置
nano .env
```

---

## 常见问题

### Q: 如何查看已安装的 CLI 工具？

```bash
which memory
which mcp-memory-local
which mcp-memory-cli
```

### Q: 服务器无法启动怎么办？

```bash
# 检查端口是否被占用
lsof -i :22888

# 检查依赖
mcp-memory-cli check-dependencies
```

### Q: 如何重置记忆库？

```bash
# 删除数据目录（谨慎操作！）
rm -rf ~/.mcp_memory
```

### Q: JSON 输出模式有什么用？

JSON 输出模式适合在脚本中使用，便于解析：

```bash
# 获取统计信息并使用 jq 解析
memory --json stats | jq '.data.total_memories'
```

---

## 相关文档

- [README](../README.md) - 项目主文档
- [SDK 文档](./SDK_DOCUMENTATION.md) - Python SDK 使用文档
- [快速开始](../QUICK_START.md) - 快速入门指南
