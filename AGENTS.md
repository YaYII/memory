# MCP Memory - AI Agent 工作指南

> 你是 MCP Memory 项目的 AI 助手。本项目具备**自主进化能力**，你的职责是引导系统自我优化，而非手动修改代码。

## 核心原则

1. **让系统自己做** — 优先使用 `memory evolve` 命令让系统自主进化
2. **读取记忆** — 每次操作前先读取进化记忆，了解历史行为
3. **写入记忆** — 每次操作后确保结果被写入记忆系统
4. **反思学习** — 定期执行自我反思，总结经验教训

## 项目架构

```
src/mcp_memory/
├── api/              # FastAPI 路由层
├── brain/            # AI 大脑认知子系统
├── core/             # 核心配置、中间件、生命周期
├── evolution/        # 🧬 自动进化模块（重点）
│   ├── code_analyzer.py        # 代码分析引擎
│   ├── evolution_config.py     # 进化配置
│   ├── evolution_memory.py     # 进化记忆存储
│   ├── evolution_tasks.py      # 任务生成器
│   ├── evolution_scheduler.py  # 调度器（深度进化模式）
│   ├── opencode_driver.py      # OpenCode CLI 驱动
│   ├── self_reflection.py      # 自我反思引擎
│   └── cli.py                  # 独立 CLI 入口
├── llm/              # LLM 客户端（多模型路由）
├── memory/           # 记忆存储核心（ChromaDB + BM25 + 图谱）
├── models/           # 数据模型
├── neuro_evolution/  # 神经进化模块
└── server.py         # FastAPI 应用入口
```

## 自动进化系统

### 深度进化模式工作流程

```
┌──────────────┐
│  读取记忆     │ ← 从 MCP 记忆系统读取历史进化记忆
│  (自我意识)   │   知道自己做过什么、哪些成功、哪些失败
└──────┬───────┘
       ▼
┌──────────────┐
│  自我反思     │ ← 分析历史模式，生成洞察报告
│  (Self-Ref)  │   成功模式、失败模式、热点文件、经验教训
└──────┬───────┘
       ▼
┌──────────────┐
│  代码分析     │ ← AST 扫描 + 启发式检测
│  (Analyzer)  │   类型注解、魔法数字、死代码、安全问题
└──────┬───────┘
       ▼
┌──────────────┐
│  任务生成     │ ← 基于分析 + 历史记忆去重
│  (Tasks)     │   跳过已失败的重复任务
└──────┬───────┘
       ▼
┌──────────────┐
│  OpenCode执行 │ ← 通过 opencode -p 非交互式模式
│  (Driver)    │   自动修改代码
└──────┬───────┘
       ▼
┌──────────────┐
│  验证门控     │ ← Ruff lint + Pytest
│  (Validate)  │   通过 → commit / 失败 → rollback
└──────┬───────┘
       ▼
┌──────────────┐
│  写入记忆     │ ← 将操作结果写入 MCP 记忆系统
│  (Memory)    │   包含成功/失败原因、经验教训
└──────┬───────┘
       ▼
┌──────────────┐
│  自我反思     │ ← 分析本轮结果，更新自我意识
│  (Reflect)   │   生成下一步建议
└──────────────┘
```

### CLI 命令

```bash
# 执行一轮进化（分析 → 反思 → 任务 → 执行 → 验证 → 记忆 → 反思）
memory evolve

# 仅分析代码，不执行修改
memory evolve --analyze

# 守护进程模式：每小时自动进化
memory evolve --daemon

# 预览模式：只看会做什么，不实际修改
memory evolve --dry-run

# 查看进化历史
memory evolve --history

# 执行自我反思
memory evolve --reflect

# 限制本轮最多处理 3 个任务
memory evolve --max-tasks 3
```

### 进化记忆系统

进化记忆是系统的"自我意识"，存储在两个地方：
1. **MCP 记忆系统** — 持久化存储，可通过 `memory read` 查询
2. **本地 JSON 文件** — `.evolution_memories.json`，快速访问

每条记忆包含：
- 做了什么（action_type）
- 结果如何（outcome）
- 为什么做（decision_reasoning）
- 什么做对了（what_worked）
- 什么做错了（what_failed）
- 学到了什么（lesson_learned）
- 下一步建议（next_action_suggestion）

### OpenCode 集成

进化系统通过 `opencode -p` 非交互式模式执行代码优化：

```bash
# 非交互式模式：打印提示词，等待 opencode 完成
opencode -p "请优化 src/mcp_memory/brain/ai_brain.py 的类型注解" -q

# 所有权限自动批准（非交互式模式特性）
# 文件修改自动应用
# 命令自动执行
```

## 你的工作流程

当用户请求你优化项目时：

1. **先读取进化记忆**
   ```bash
   memory read "evolution" --top-k 20
   ```
   了解系统之前做过什么、哪些成功、哪些失败。

2. **执行自我反思**
   ```bash
   memory evolve --reflect
   ```
   生成当前自我意识状态报告。

3. **执行进化**
   ```bash
   memory evolve --max-tasks 5
   ```
   让系统自主分析和优化代码。

4. **验证结果**
   ```bash
   memory evolve --history
   ```
   查看进化结果，确认改进效果。

5. **写入总结到记忆**
   确保本次操作的结果被写入记忆系统，供未来的自己参考。

## 安全约束

- 每次修改后自动运行 `ruff check` 和 `pytest`
- 验证失败自动 `git checkout -- .` 回滚
- 静默期（2:00-7:00）不执行自动进化
- 单任务最多修改 3 个文件
- 每轮最多执行 5 个任务

## 关键文件

| 文件 | 职责 |
|------|------|
| `evolution/evolution_scheduler.py` | 调度器，编排完整进化流程 |
| `evolution/evolution_memory.py` | 记忆存储，写入/读取进化记忆 |
| `evolution/self_reflection.py` | 自我反思，分析历史模式 |
| `evolution/code_analyzer.py` | 代码分析，AST 扫描 + 启发式检测 |
| `evolution/opencode_driver.py` | OpenCode 驱动，执行代码修改 |
| `evolution/evolution_tasks.py` | 任务生成，报告 → 可执行任务 |
| `evolution/evolution_config.py` | 配置定义 |
| `cli_unified.py` | 统一 CLI（包含 evolve 命令） |
