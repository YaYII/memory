# AI Memory System - 生物本能增强版

本项目实现了一个 **基于个体、构建集体** 且具备 **生物学本能** 的 AI 记忆系统。

通过 CLI 命令提供记忆能力，AI 可通过 Skill 模式直接调用。

## 快速开始 (Quick Start)

### 安装

```bash
# 激活环境
source .venv/bin/activate

# 或安装依赖
pip install -e .
```

### 本地 CLI（推荐，无需启动服务器）

```bash
# 查看系统统计
mcp-memory-local stats

# 写入记忆
mcp-memory-local write "重要信息" --title "记忆标题" --keywords "标签1,标签2"

# 搜索记忆
mcp-memory-local read "关键词"

# 列出所有记忆
mcp-memory-local list --user cli_user

# 显示记忆详情
mcp-memory-local show <memory_id>

# 删除记忆
mcp-memory-local delete <memory_id>

# 触发深度反思
mcp-memory-local reflect

# 交互式 TUI 模式
mcp-memory-local interactive
```

### AI Skill 调用模式（JSON 输出）

CLI 支持 `--json` 和 `--quiet` 标志，输出机器可读的 JSON 格式，供 AI Skill 解析：

```bash
# 写入记忆，返回 JSON
mcp-memory-local write "内容" --title "标题" --json

# 搜索记忆，静默输出 JSON
mcp-memory-local read "查询" --json --quiet

# 获取统计信息
mcp-memory-local stats --json --quiet

# 列出记忆
mcp-memory-local list --json --quiet

# 删除记忆（无需确认）
mcp-memory-local delete <id> --force --json --quiet
```

**JSON 输出示例：**
```json
{
  "status": "success",
  "query": "Python",
  "count": 2,
  "memories": [
    {
      "content": "...",
      "title": "...",
      "score": 0.95,
      "memory_type": "storage",
      "timestamp": "2024-01-01T12:00:00"
    }
  ]
}
```

### HTTP 服务器 + CLI（可选）

```bash
# 启动服务器
mcp-memory-cli server start

# 使用 CLI 操作（通过 HTTP API）
mcp-memory-cli write "内容" --title "标题"
mcp-memory-cli read "查询"
mcp-memory-cli list
mcp-memory-cli stats
```

## CLI 完整命令参考

### `mcp-memory-local` - 本地直接操作（无需服务器）

| 命令 | 功能 | 示例 |
|------|------|------|
| `write` | 写入新记忆 | `mcp-memory-local write "内容" --title "标题" --keywords "a,b"` |
| `read` | 搜索记忆 | `mcp-memory-local read "查询内容" --top-k 5` |
| `list` | 列出记忆 | `mcp-memory-local list --type storage --limit 20` |
| `show` | 显示详情 | `mcp-memory-local show <memory_id>` |
| `delete` | 删除记忆 | `mcp-memory-local delete <id> --force` |
| `stats` | 系统统计 | `mcp-memory-local stats` |
| `reflect` | 触发反思 | `mcp-memory-local reflect` |
| `interactive` | 交互式模式 | `mcp-memory-local interactive` |

**通用选项：**
- `--json`: 输出 JSON 格式（供 AI skill 解析）
- `--quiet, -q`: 静默模式，仅输出 JSON 到 stdout
- `--user, -u`: 指定用户 ID

### `mcp-memory-cli` - HTTP API 客户端（需要服务器）

| 命令 | 功能 | 示例 |
|------|------|------|
| `write` | 写入记忆 | `mcp-memory-cli write "内容" --title "标题"` |
| `read` | 搜索记忆 | `mcp-memory-cli read "查询" --top-k 5` |
| `list` | 列出记忆 | `mcp-memory-cli list --type storage` |
| `delete` | 删除记忆 | `mcp-memory-cli delete <id>` |
| `stats` | 显示统计 | `mcp-memory-cli stats` |
| `reflect` | 触发反思 | `mcp-memory-cli reflect` |
| `rebuild` | 重建图谱 | `mcp-memory-cli rebuild` |
| `feedback` | 提交反馈 | `mcp-memory-cli feedback <id> --rating 5` |
| `tiered` | 三层记忆 | `mcp-memory-cli tiered write "内容" storage --title "标题"` |
| `server start` | 启动服务器 | `mcp-memory-cli server start` |
| `server stop` | 停止服务器 | `mcp-memory-cli server stop` |
| `server status` | 查看状态 | `mcp-memory-cli server status` |

## 数据持久化说明 (Persistence)

**数据不会因为服务关闭而丢失。**
所有记忆存储在 `~/.mcp_memory/chroma`。

## 智能上下文 (Smart Context)

本系统采用 **路径即项目 (Path-as-Project)** 策略：
*   **Project 记忆**：默认模式。当你打开一个项目目录，AI 会自动将记忆归档到该项目下。
*   **Global 记忆**：AI 会智能判断，如果是一条通用的编程知识或用户偏好（如"我喜欢 Python"），它会将其标记为全局记忆，跨项目共享。

## 配置 (Configuration)

通过环境变量或 `.env` 文件配置：

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `MCP_MEMORY_PORT` | HTTP 服务端口 | `22888` |
| `MCP_MEMORY_HOST` | 服务绑定地址 | `127.0.0.1` |
| `MCP_MEMORY_LANGUAGE` | 写入记忆的强制语言 | `简体中文` |
| `MCP_MEMORY_SHARED` | 记忆共享模式 | `false` |
| `DEEPSEEK_API_KEY` | DeepSeek API Key（用于自动总结） | 空 |
| `OPENAI_API_KEY` | OpenAI API Key | 空 |
| `ANTHROPIC_API_KEY` | Anthropic API Key | 空 |
| `MCP_EVOLUTION_ENABLED` | 启用自动进化 | `true` |
| `MCP_EVOLUTION_PROFILE` | 进化策略: light/standard/aggressive | `standard` |

## 认知增强 (Cognitive Enhancement)

如果你配置了 `DEEPSEEK_API_KEY`，记忆系统将获得**自我思考**的能力：
1.  **自动分类**：自动识别记忆类型（如 Coding, Config, Personal）。
2.  **技能提取**：当检测到代码或配置相关的记忆时，会自动总结出可复用的"技能"或"知识点"，并存回记忆库。
3.  **自我进化**: 这些总结后的高价值记忆将在未来的检索中被优先召回。

## 认知操作系统 (Cognitive OS)

自 v2.0 起，系统已升级为 **Cognitive OS**，具备深度思考与自我修正能力。

### 1. Critic & Self-Correction (自我修正)
当您启用 `DEEPSEEK_API_KEY` 后，`read_memory` 不再只是简单的检索。
*   **Synthesis (综合)**: DeepSeek 会阅读所有检索到的记忆片段，并为您撰写一个简洁、准确的答案。
*   **Critic (批评家)**: 第二轮深度思考会检查生成的答案是否存在幻觉或逻辑漏洞，并自动修正。

### 2. Knowledge Graph (知识图谱)
*   **实体提取**: 写入记忆时，系统会自动提取关键实体并存入图谱。
*   **关联检索**: 检索时，系统会进行 **2-hop Graph Traversal**，找到逻辑相关但语义不直接相似的内容。

### 3. Active Reflection (主动反思)
*   **命令**: `mcp-memory-local reflect`
*   **作用**: 触发 **Memory GC (垃圾回收)**。系统会深度分析您的记忆库，合并重复项、解决冲突、提炼精华，让记忆库越用越好用。

## 三层记忆系统 (Tiered Memory)

自 v2.5 起，系统采用 **三层记忆架构**：

### 1. 存储记忆 (Storage)
*   **原始记录**: 保存完整的对话历史和原始信息
*   **高精度**: 不做任何信息压缩或摘要

### 2. 思维记忆 (Thinking)
*   **思考过程**: 记录分析、推理、决策的逻辑
*   **认知轨迹**: 保存问题解决的思维路径

### 3. 技能记忆 (Skill)
*   **可复用知识**: 提取可复用的技能、模式、最佳实践
*   **流程图编码**: 将技能编码为可执行的工作流

## 核心算法

$$ \text{Score} = 0.5 \cdot \text{Vector} + 0.3 \cdot \text{Keyword} + 0.1 \cdot \text{Recency} + 0.1 \cdot \text{Instinct} $$

*   **Hybrid Search**: 结合了向量检索 (ChromaDB) 和关键词检索 (BM25)，解决了专有名词匹配不准的问题。
*   **Smart Deduplication**: 写入前自动查重，如果相似度 > 95%，则只强化旧记忆，不新增。
*   **Mark-as-Processed**: 扫描过的记忆会标记 `cognitive_processed`，避免重复处理。
*   **Daily Reflection**: 每天 12:00 自动执行全局去重和合并。
