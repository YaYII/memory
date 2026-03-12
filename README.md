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
> 5. `DEEPSEEK_API_KEY`: 配置后，系统会在后台自动分析写入的记忆，提取“技能”和“知识总结”，实现自我进化。

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

## 核心算法

$$ \text{Score} = 0.4 \cdot \text{Relevance} + 0.2 \cdot \text{Recency} + 0.2 \cdot \text{Importance} + 0.2 \cdot \text{Instinct} $$

*   **Instinct (本能)**：记忆被使用的次数越多，权重越高。
*   **Reinforcement (强化)**：每次成功检索，都会强化该记忆。
