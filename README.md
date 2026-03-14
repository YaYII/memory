# AI Memory System (MCP) - 生物本能增强版

本项目实现了一个 **基于个体、构建集体** 且具备 **生物学本能** 的 AI 记忆系统。

## 数据持久化说明 (Persistence)

**数据不会因为服务关闭而丢失。**
所有记忆存储在 `~/.mcp_memory/chroma`。

## 智能上下文 (Smart Context)

本系统采用 **路径即项目 (Path-as-Project)** 策略：
*   **Project 记忆**：默认模式。当你打开一个项目目录，AI 会自动将记忆归档到该项目下。
*   **Global 记忆**：AI 会智能判断，如果是一条通用的编程知识或用户偏好（如“我喜欢 Python”），它会将其标记为全局记忆，跨项目共享。

## 快速配置 (Configuration)

### Claude Desktop / Trae 配置

由于 MCP 客户端无法读取你终端的 PATH 环境变量，**请务必使用绝对路径**。

请将下方的 `<path_to_project>` 替换为你实际的项目绝对路径。

```json
{
  "mcpServers": {
    "memory-system": {
      "command": "<path_to_project>/.venv/bin/python",
      "args": ["-m", "mcp_memory.main", "stdio"],
      "env": {
        "MCP_MEMORY_SHARED": "true",
        "MCP_MEMORY_LANGUAGE": "简体中文", // 可选，默认为简体中文
        "DEEPSEEK_API_KEY": "sk-...", // 选填，开启后支持自动记忆总结与技能提取
        "PYTHONPATH": "<path_to_project>/src"
      }
    }
  }
}
```

> **注意**：
> 1. `command`: 必须指向项目 `.venv/bin/python` 的绝对路径。
> 2. `args`: 使用 `["-m", "mcp_memory.main", "stdio"]` 确保模块被正确加载。
> 3. `PYTHONPATH`: 必须包含 `src` 目录的绝对路径，否则会报错 `ModuleNotFoundError`。
> 4. `MCP_MEMORY_LANGUAGE`: 用于强制规定 AI 写入记忆的语言（如 "English", "日本語"），默认为 "简体中文"。
> 5. `DEEPSEEK_API_KEY`: 配置后，系统会在后台自动分析写入的记忆，提取"技能"和"知识总结"，实现自我进化。
> 6. `MCP_MEMORY_PORT`: 服务端口，默认为 22888。
> 7. `MCP_EVOLUTION_ENABLED`: 是否启用自动进化，默认为 true。
> 8. `MCP_EVOLUTION_SCAN_INTERVAL_SECONDS`: 扫描间隔（秒），默认为 300（5分钟）。
> 9. `MCP_EVOLUTION_REFLECTION_INTERVAL_SECONDS`: 反思间隔（秒），默认为 1800（30分钟）。

## 认知增强 (Cognitive Enhancement)

如果你配置了 `DEEPSEEK_API_KEY`，记忆系统将获得**自我思考**的能力：
1.  **自动分类**：自动识别记忆类型（如 Coding, Config, Personal）。
2.  **技能提取**：当检测到代码或配置相关的记忆时，会自动总结出可复用的“技能”或“知识点”，并存回记忆库。
    *   *输入*: "Create a new file using `touch filename`"
    *   *AI 后台总结*: "【认知总结】Linux 文件创建技能：使用 `touch` 命令..."
3.  **自我进化**: 这些总结后的高价值记忆将在未来的检索中被优先召回。

## 交互接口 (Tools)

AI 将获得以下工具，并根据上下文智能调用：

1.  **`write_memory(content, scope)`**
    *   *AI 的思考*：“这是一个关于当前项目的数据库配置。”
    *   *AI 的行动*：`write_memory("DB_HOST=localhost", scope="project")` -> **自动关联当前路径**
    *   *AI 的思考*：“用户说他以后都用 pytest 做测试。”
    *   *AI 的行动*：`write_memory("User prefers pytest", scope="global")` -> **跨项目通用**

2.  **`read_memory(query)`**
    *   *系统行为*：自动检索 **当前项目记忆** + **所有全局记忆**。

## 认知操作系统 (Cognitive OS)

自 v2.0 起，系统已升级为 **Cognitive OS**，具备深度思考与自我修正能力。

### 1. Critic & Self-Correction (自我修正)
当您启用 `DEEPSEEK_API_KEY` 后，`read_memory` 不再只是简单的检索。
*   **Synthesis (综合)**: DeepSeek 会阅读所有检索到的记忆片段，并为您撰写一个简洁、准确的答案。
*   **Critic (批评家)**: 第二轮深度思考 (DeepSeek R1) 会检查生成的答案是否存在幻觉或逻辑漏洞，并自动修正。

### 2. Knowledge Graph (知识图谱)
*   **实体提取**: 写入记忆时，系统会自动提取关键实体（如 `config.py`, `API_KEY`）并存入图谱。
*   **关联检索**: 检索时，系统会进行 **2-hop Graph Traversal**，找到逻辑相关但语义不直接相似的内容。

### 3. Active Reflection (主动反思)
*   **工具**: `reflect_memory(user_id)`
*   **作用**: 主动触发后台的 **Memory GC (垃圾回收)**。DeepSeek R1 会深度分析您的记忆库，合并重复项、解决冲突、提炼精华，让记忆库越用越好用。

## 每日深度思考 (Daily Reflection) v2.5

自 v2.5 起，系统新增了 **每日深度思考** 功能，每天 12:00 自动执行全局记忆整理：

### 1. 跨记忆重复检测
*   **全局视角**: 分析所有记忆，识别跨时间段的重复内容
*   **智能合并**: 相似度 > 0.8 的记忆自动合并为增强版
*   **保留源记忆**: 合并后保留所有原始记忆，仅添加标记

### 2. 记忆合并策略
```
重复记忆检测 → 相似度分析 → 创建增强版记忆 → 标记源记忆 → 更新知识图谱
```

### 3. 语言一致性强制
*   **强制规则**: 合并后的记忆统一使用配置语言（默认简体中文）
*   **例外保护**: 代码片段、命令行、技术术语保持原样
*   **禁止混杂**: 禁止中英文混杂，确保记忆通用性

### 4. 手动触发
```bash
# 立即执行每日深度思考
curl -X POST http://localhost:22888/tiered/daily-reflection/trigger

# 查询合并记忆列表
curl http://localhost:22888/tiered/merged

# 查询记忆的合并链
curl http://localhost:22888/tiered/memory/{memory_id}/merge-chain
```

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
