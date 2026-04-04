# MCP Memory 自动进化指南

本项目具备**自主进化能力**，无需人工主导即可持续优化代码质量。

## 快速开始

```bash
# 执行一轮进化（分析 → 生成任务 → 通过 OpenCode 执行 → 验证 → 提交）
memory evolve

# 仅分析代码，不执行任何修改
memory evolve --analyze

# 守护进程模式：每小时自动扫描并进化
memory evolve --daemon

# 预览模式：只看会做什么，不实际修改
memory evolve --dry-run

# 查看进化历史
memory evolve history
```

## 进化流程

```
┌─────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────┐
│  代码分析    │───▶│  任务生成     │───▶│  OpenCode执行 │───▶│  验证门控 │
│ CodeAnalyzer│    │TaskGenerator │    │ OpenCodeDriver│    │ validate │
└─────────────┘    └──────────────┘    └──────────────┘    └────┬─────┘
                                                                │
                                                    ┌───────────┴───────────┐
                                                    ▼                       ▼
                                              通过 ✅                   失败 ❌
                                              git commit              git reset
```

## 检测的问题类型

| 类别 | 示例 | 严重程度 |
|------|------|----------|
| **安全** | 硬编码密钥、XSS 风险 | CRITICAL |
| **架构** | 死代码、循环依赖 | HIGH |
| **质量** | 缺少类型注解、魔法数字、print() | MEDIUM |
| **性能** | 无限制增长、N+1 查询 | MEDIUM |
| **文档** | 缺少 docstring | LOW |
| **测试** | 未覆盖的核心模块 | HIGH |

## 安全门控

每次自动修改后，系统会执行：

1. **Ruff lint 检查** — 确保代码风格合规
2. **Pytest 测试** — 确保没有引入回归
3. **仅验证通过才提交** — 失败则 `git checkout -- .` 回滚

## 配置

编辑 `~/.mcp_memory/evolution.json` 或设置环境变量：

```json
{
  "opencode_binary": "opencode",
  "max_tasks_per_cycle": 5,
  "scan_interval_seconds": 3600,
  "auto_commit": true,
  "dry_run": false,
  "quiet_hours_start": 2,
  "quiet_hours_end": 7
}
```

## 与 OpenCode 集成

进化系统通过 `opencode -p` 非交互式模式执行代码优化：

```bash
# 手动调用 OpenCode 优化指定文件
opencode -p "请优化 src/mcp_memory/brain/ai_brain.py 的类型注解和文档字符串" -q

# 审查当前变更
git diff

# 如果满意，提交
git add -A && git commit -m "evolve(code_quality): 优化 ai_brain.py 类型注解"
```

## CI 集成

在 GitHub Actions 中添加进化步骤：

```yaml
- name: Auto-evolve code quality
  run: |
    memory evolve --max-tasks 3
  env:
    OPENCODE_MODEL: claude-sonnet-4-20250514
```

## 架构设计

```
evolution/
├── __init__.py              # 模块入口
├── evolution_config.py      # 配置定义
├── code_analyzer.py         # 代码分析引擎（AST + 启发式）
├── evolution_tasks.py       # 任务生成器（报告 → 任务）
├── opencode_driver.py       # OpenCode CLI 驱动
├── evolution_scheduler.py   # 调度器（编排全流程）
└── cli.py                   # CLI 入口
```

## 最佳实践

1. **首次使用先用 `--dry-run`** — 了解系统会做什么
2. **守护进程建议夜间运行** — 设置 `quiet_hours` 避免打扰
3. **定期查看进化历史** — `memory evolve history` 追踪改进趋势
4. **配合 git hook** — 在 pre-commit 中运行分析，阻止低质量代码进入
