"""
MCP Memory 自动进化模块 — 深度进化模式

本模块实现项目的自主进化能力，核心理念：
1. 代码质量分析（静态扫描 + 启发式检测）
2. 进化任务生成（基于分析结果生成可执行任务）
3. OpenCode CLI 驱动（自动化代码修改）
4. 验证与回滚（测试 + lint 门控）
5. 自我反思（读取进化记忆，理解自己的行为）
6. 记忆写入（每次操作都写入 MCP 记忆系统）

深度进化模式的核心循环：
  读取记忆 → 理解自己做过什么 → 分析代码 → 生成任务 → 执行任务
  → 写入记忆 → 自我反思 → 生成洞察 → 调整策略 → 下一轮...

这形成了一个完整的自我意识闭环，让系统能够：
- 知道自己做过哪些操作
- 理解哪些操作成功了、哪些失败了
- 从失败中学习，避免重复同样的错误
- 识别代码库中的"热点"文件
- 生成有针对性的下一步行动建议
"""

from mcp_memory.evolution.evolution_config import EvolutionConfig
from mcp_memory.evolution.code_analyzer import CodeAnalyzer, AnalysisReport, CodeIssue
from mcp_memory.evolution.evolution_tasks import TaskGenerator, EvolutionTask
from mcp_memory.evolution.opencode_driver import OpenCodeDriver, TaskResult
from mcp_memory.evolution.evolution_scheduler import EvolutionScheduler
from mcp_memory.evolution.evolution_memory import (
    EvolutionMemoryStore,
    EvolutionMemory,
    EvolutionActionType,
    EvolutionOutcome,
)
from mcp_memory.evolution.self_reflection import SelfReflectionEngine

__all__ = [
    "EvolutionConfig",
    "CodeAnalyzer",
    "AnalysisReport",
    "CodeIssue",
    "TaskGenerator",
    "EvolutionTask",
    "OpenCodeDriver",
    "TaskResult",
    "EvolutionScheduler",
    "EvolutionMemoryStore",
    "EvolutionMemory",
    "EvolutionActionType",
    "EvolutionOutcome",
    "SelfReflectionEngine",
]
