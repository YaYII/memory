"""
进化任务生成引擎

基于代码分析结果，自动生成可执行的进化任务。
每个任务包含：
- 明确的优化目标
- 需要修改的文件
- 验证标准（测试 + lint）
- OpenCode 执行提示词
"""

import logging
import os
from dataclasses import dataclass, field
from datetime import datetime
from typing import Any, Dict, List, Optional

from mcp_memory.evolution.code_analyzer import (
    AnalysisReport,
    CodeIssue,
    IssueCategory,
    IssueSeverity,
)

logger = logging.getLogger("mcp-memory.evolution.tasks")


@dataclass
class EvolutionTask:
    """一个可执行的进化任务

    Attributes:
        task_id: 任务唯一标识
        title: 任务标题
        description: 任务描述
        category: 问题分类
        severity: 严重程度
        files: 需要修改的文件列表
        prompt: 发送给 OpenCode 的执行提示词
        validation: 验证命令（如 pytest、ruff check）
        created_at: 创建时间
        status: 任务状态
        result: 执行结果
    """
    task_id: str
    title: str
    description: str
    category: IssueCategory
    severity: IssueSeverity
    files: List[str]
    prompt: str
    validation: str = ""
    created_at: str = field(default_factory=lambda: datetime.now().isoformat())
    status: str = "pending"  # pending | running | success | failed | skipped
    result: Optional[str] = None

    def to_dict(self) -> Dict[str, Any]:
        return {
            "task_id": self.task_id,
            "title": self.title,
            "description": self.description,
            "category": self.category.value,
            "severity": self.severity.value,
            "files": self.files,
            "prompt": self.prompt,
            "validation": self.validation,
            "created_at": self.created_at,
            "status": self.status,
            "result": self.result,
        }


# ─── 任务模板 ─────────────────────────────────────────────────

_TYPE_HINT_PROMPT = """请为以下 Python 函数/方法添加完整的类型注解。

要求：
1. 所有参数和返回值都必须有类型注解
2. 使用 typing 模块中的类型（Optional, List, Dict, Any, Union 等）
3. 保持原有逻辑不变，只添加类型注解
4. 如果函数内部使用了未导入的 typing 类型，请在文件顶部添加 import

文件：{file_path}
目标函数（第 {line} 行附近）：
{context}

只输出修改后的代码片段，不要输出其他内容。"""

_DOCSTRING_PROMPT = """请为以下 Python 类/函数添加完整的文档字符串（docstring）。

要求：
1. 使用 Google 风格的 docstring 格式
2. 说明类的职责、属性；说明函数的参数、返回值、异常
3. 使用简体中文
4. 保持原有逻辑不变

文件：{file_path}
目标（第 {line} 行附近）：
{context}

只输出修改后的代码片段。"""

_PRINT_TO_LOGGER_PROMPT = """请将以下文件中的 print() 调用替换为 logging 模块。

要求：
1. 在文件顶部添加 import logging 和 logger = logging.getLogger(__name__)
2. print() → logger.info()
3. print(..., file=sys.stderr) → logger.error()
4. 保持原有逻辑不变

文件：{file_path}
"""

_SECURITY_FIX_PROMPT = """请修复以下文件中的安全问题。

问题：{title}
描述：{description}
建议：{suggestion}

文件：{file_path}
第 {line} 行附近：
{context}

请修复安全问题，使用环境变量或配置管理敏感信息。"""

_DEAD_CODE_PROMPT = """请分析并清理以下文件中的死代码。

问题：{title}
描述：{description}

文件：{file_path}
第 {line} 行附近：
{context}

请删除或修复死代码，保持原有功能不变。"""

_FRONTEND_ANY_TYPE_PROMPT = """请优化以下 TypeScript/Vue 文件中的 any 类型使用。

问题：使用了 {count} 处 any 类型
建议：逐步替换为具体类型或泛型

文件：{file_path}

请识别并替换最明显的 any 类型为更具体的类型。"""

_FRONTEND_ALERT_PROMPT = """请将以下 Vue 组件中的 alert() 调用替换为 toast 通知系统。

文件：{file_path}

使用 toast.error() 和 toast.success() 替换所有 alert() 调用。"""


class TaskGenerator:
    """进化任务生成器

    根据代码分析报告，自动生成可执行的进化任务。
    任务按优先级排序，严重程度高的优先执行。
    """

    def __init__(self, project_root: str):
        self.project_root = project_root
        self._task_counter = 0

    def generate(self, report: AnalysisReport) -> List[EvolutionTask]:
        """基于分析报告生成进化任务

        Args:
            report: 代码分析报告

        Returns:
            按优先级排序的任务列表
        """
        tasks = []
        seen_files = set()
        for issue in report.issues:
            # 只处理实际存在的文件
            full_path = issue.file_path
            if not full_path.startswith("/"):
                full_path = os.path.join(self.project_root, issue.file_path)
            if not os.path.exists(full_path):
                continue
            # 去重：每个文件最多生成一个任务
            if issue.file_path in seen_files:
                continue
            seen_files.add(issue.file_path)
            task = self._issue_to_task(issue)
            if task:
                tasks.append(task)

        # 按严重程度排序
        severity_order = {
            IssueSeverity.CRITICAL: 0,
            IssueSeverity.HIGH: 1,
            IssueSeverity.MEDIUM: 2,
            IssueSeverity.LOW: 3,
            IssueSeverity.INFO: 4,
        }
        tasks.sort(key=lambda t: severity_order.get(t.severity, 99))

        logger.info("生成了 %d 个进化任务", len(tasks))
        return tasks

    def _issue_to_task(self, issue: CodeIssue) -> Optional[EvolutionTask]:
        """将单个代码问题转换为进化任务"""
        self._task_counter += 1
        task_id = f"EVOLVE-{self._task_counter:04d}"

        # 根据问题类型选择提示词模板
        prompt = self._select_prompt(issue)
        if not prompt:
            return None

        validation = self._select_validation(issue)

        return EvolutionTask(
            task_id=task_id,
            title=issue.title,
            description=issue.description,
            category=issue.category,
            severity=issue.severity,
            files=[issue.file_path],
            prompt=prompt,
            validation=validation,
        )

    def _select_prompt(self, issue: CodeIssue) -> Optional[str]:
        """根据问题类型选择 OpenCode 提示词"""
        ctx = self._get_file_context(issue.file_path, issue.line_number)

        if "缺少返回类型注解" in issue.title or "缺少类型注解" in issue.title:
            return _TYPE_HINT_PROMPT.format(
                file_path=issue.file_path, line=issue.line_number, context=ctx
            )

        if "缺少文档字符串" in issue.title:
            return _DOCSTRING_PROMPT.format(
                file_path=issue.file_path, line=issue.line_number, context=ctx
            )

        if "print()" in issue.title:
            return _PRINT_TO_LOGGER_PROMPT.format(file_path=issue.file_path)

        if issue.category == IssueCategory.SECURITY:
            return _SECURITY_FIX_PROMPT.format(
                title=issue.title, description=issue.description,
                suggestion=issue.suggestion, file_path=issue.file_path,
                line=issue.line_number, context=ctx,
            )

        if "死代码" in issue.title or "pass" in issue.title:
            return _DEAD_CODE_PROMPT.format(
                title=issue.title, description=issue.description,
                file_path=issue.file_path, line=issue.line_number, context=ctx,
            )

        if "any 类型" in issue.title:
            count = issue.description.split("(")[1].split(" ")[0] if "(" in issue.description else "多处"
            return _FRONTEND_ANY_TYPE_PROMPT.format(
                file_path=issue.file_path, count=count,
            )

        if "alert()" in issue.title:
            return _FRONTEND_ALERT_PROMPT.format(file_path=issue.file_path)

        if "魔法" in issue.title:
            return (
                f"请将 {issue.file_path} 中的魔法数字提取为命名常量。\n"
                f"问题：{issue.description}\n"
                f"建议：{issue.suggestion}\n"
                f"只修改相关代码，保持功能不变。"
            )

        if "过长" in issue.title:
            return (
                f"请重构 {issue.file_path} 中过长的函数。\n"
                f"问题：{issue.description}\n"
                f"建议：{issue.suggestion}\n"
                f"将函数拆分为职责单一的小函数。"
            )

        if "无限制增长" in issue.title:
            return (
                f"请修复 {issue.file_path} 中潜在的无限制增长问题。\n"
                f"问题：{issue.description}\n"
                f"建议：{issue.suggestion}\n"
                f"添加大小限制或 LRU 淘汰策略。"
            )

        if "console" in issue.title.lower():
            return (
                f"请将 {issue.file_path} 中的 console.log/error 替换为结构化日志。\n"
                f"使用统一的日志工具函数。"
            )

        # 通用提示词
        return (
            f"请优化 {issue.file_path} 中的代码质量问题。\n"
            f"问题：{issue.title}\n"
            f"描述：{issue.description}\n"
            f"建议：{issue.suggestion}\n"
            f"请修复此问题，保持原有功能不变。"
        )

    def _select_validation(self, issue: CodeIssue) -> str:
        """选择验证命令"""
        if issue.file_path.endswith(".py"):
            if issue.severity in (IssueSeverity.CRITICAL, IssueSeverity.HIGH):
                return "ruff check src/mcp_memory/ && python -m pytest tests/ -x -q"
            return "ruff check src/mcp_memory/"
        return ""

    def _get_file_context(self, file_path: str, line_number: int, context_lines: int = 5) -> str:
        """获取文件上下文代码片段"""
        try:
            full_path = file_path
            if not full_path.startswith("/"):
                full_path = f"{self.project_root}/{file_path}"
            with open(full_path, "r", encoding="utf-8") as f:
                lines = f.readlines()
            start = max(0, line_number - context_lines - 1)
            end = min(len(lines), line_number + context_lines)
            result = []
            for i in range(start, end):
                prefix = ">>> " if i == line_number - 1 else "    "
                result.append(f"{prefix}{i + 1}: {lines[i].rstrip()}")
            return "\n".join(result)
        except (OSError, UnicodeDecodeError):
            return "(无法读取文件上下文)"
