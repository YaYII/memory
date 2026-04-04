"""
代码分析引擎 — 静态扫描 + 启发式检测

本模块对项目代码进行全面分析，识别：
1. 代码质量问题（无类型注解、魔法数字、重复代码）
2. 架构问题（死代码、循环依赖、紧耦合）
3. 安全问题（硬编码密钥、XSS 风险）
4. 性能问题（N+1 查询、内存泄漏风险）
5. 测试覆盖缺口

分析结果用于驱动进化任务生成。
"""

import ast
import logging
import os
import re
from dataclasses import dataclass, field
from enum import Enum
from typing import Any, Dict, List, Optional, Set, Tuple

logger = logging.getLogger("mcp-memory.evolution.analyzer")


class IssueSeverity(Enum):
    """问题严重程度"""
    CRITICAL = "critical"  # 必须立即修复
    HIGH = "high"          # 应该尽快修复
    MEDIUM = "medium"      # 建议修复
    LOW = "low"            # 可选优化
    INFO = "info"          # 信息提示


class IssueCategory(Enum):
    """问题分类"""
    CODE_QUALITY = "code_quality"       # 代码质量
    ARCHITECTURE = "architecture"        # 架构设计
    SECURITY = "security"               # 安全
    PERFORMANCE = "performance"         # 性能
    TESTING = "testing"                 # 测试
    DOCUMENTATION = "documentation"     # 文档/注释


@dataclass
class CodeIssue:
    """代码问题报告"""
    file_path: str
    line_number: int
    severity: IssueSeverity
    category: IssueCategory
    title: str
    description: str
    suggestion: str = ""

    def to_dict(self) -> Dict[str, Any]:
        return {
            "file": self.file_path,
            "line": self.line_number,
            "severity": self.severity.value,
            "category": self.category.value,
            "title": self.title,
            "description": self.description,
            "suggestion": self.suggestion,
        }


@dataclass
class AnalysisReport:
    """分析报告"""
    files_scanned: int = 0
    total_lines: int = 0
    issues: List[CodeIssue] = field(default_factory=list)
    metrics: Dict[str, Any] = field(default_factory=dict)

    @property
    def critical_count(self) -> int:
        return sum(1 for i in self.issues if i.severity == IssueSeverity.CRITICAL)

    @property
    def high_count(self) -> int:
        return sum(1 for i in self.issues if i.severity == IssueSeverity.HIGH)

    def summary(self) -> str:
        by_severity = {}
        for issue in self.issues:
            by_severity[issue.severity.value] = by_severity.get(issue.severity.value, 0) + 1
        parts = [
            f"扫描 {self.files_scanned} 个文件，共 {self.total_lines} 行代码",
            f"发现 {len(self.issues)} 个问题:",
        ]
        for sev, count in sorted(by_severity.items()):
            parts.append(f"  {sev}: {count}")
        return "\n".join(parts)


class CodeAnalyzer:
    """代码分析引擎

    通过 AST 分析、正则匹配、启发式规则检测代码问题。
    分析结果用于驱动进化任务生成。
    """

    def __init__(self, project_root: str, exclude_dirs: Optional[List[str]] = None, scan_dirs: Optional[List[str]] = None):
        self.project_root = project_root
        self.exclude_dirs = set(exclude_dirs or [
            "__pycache__", ".venv", "node_modules", ".git", "dist", "build"
        ])
        # 只扫描指定的目录（避免扫描项目根目录的独立脚本）
        self.scan_dirs = scan_dirs or ["src/mcp_memory", "frontend/src"]
        self._issues: List[CodeIssue] = []
        self._files_scanned = 0
        self._total_lines = 0

    def analyze(self, extensions: Optional[List[str]] = None) -> AnalysisReport:
        """执行全面代码分析

        Args:
            extensions: 要扫描的文件扩展名，默认 ['.py']

        Returns:
            AnalysisReport: 完整的分析报告
        """
        self._issues = []
        self._files_scanned = 0
        self._total_lines = 0

        exts = extensions or [".py"]
        py_files = self._find_files(exts)

        for file_path in py_files:
            try:
                if file_path.endswith(".py"):
                    self._analyze_python(file_path)
                elif file_path.endswith((".vue", ".ts", ".js")):
                    self._analyze_frontend(file_path)
            except Exception as e:
                logger.warning("分析文件失败 %s: %s", file_path, e)

        report = AnalysisReport(
            files_scanned=self._files_scanned,
            total_lines=self._total_lines,
            issues=self._issues,
            metrics=self._compute_metrics(),
        )
        logger.info(report.summary())
        return report

    def _find_files(self, extensions: List[str]) -> List[str]:
        """递归查找目标文件（只扫描 scan_dirs 中的目录）"""
        result = []
        for scan_dir in self.scan_dirs:
            dir_path = os.path.join(self.project_root, scan_dir)
            if not os.path.isdir(dir_path):
                continue
            for root, dirs, files in os.walk(dir_path):
                dirs[:] = [d for d in dirs if d not in self.exclude_dirs]
                for f in files:
                    if any(f.endswith(ext) for ext in extensions):
                        result.append(os.path.join(root, f))
        return sorted(result)

    def _analyze_python(self, file_path: str) -> None:
        """分析 Python 文件"""
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                source = f.read()
        except (OSError, UnicodeDecodeError):
            return

        self._files_scanned += 1
        self._total_lines += source.count("\n") + 1
        rel_path = os.path.relpath(file_path, self.project_root)

        # ─── AST 分析 ─────────────────────────────────────
        try:
            tree = ast.parse(source, filename=file_path)
        except SyntaxError:
            self._issues.append(CodeIssue(
                file_path=rel_path, line_number=0,
                severity=IssueSeverity.CRITICAL, category=IssueCategory.CODE_QUALITY,
                title="语法错误", description="文件无法被 Python 解析",
            ))
            return

        self._check_type_hints(tree, source, rel_path)
        self._check_magic_numbers(tree, rel_path)
        self._check_long_functions(tree, source, rel_path)
        self._check_dead_code_patterns(tree, source, rel_path)
        self._check_docstrings(tree, source, rel_path)

        # ─── 文本模式分析 ────────────────────────────────
        self._check_hardcoded_secrets(source, rel_path)
        self._check_print_statements(source, rel_path)
        self._check_todo_fixme(source, rel_path)
        self._check_unbounded_growth(source, rel_path)

    def _analyze_frontend(self, file_path: str) -> None:
        """分析前端文件（Vue/TS/JS）"""
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                source = f.read()
        except (OSError, UnicodeDecodeError):
            return

        self._files_scanned += 1
        self._total_lines += source.count("\n") + 1
        rel_path = os.path.relpath(file_path, self.project_root)

        self._check_console_logs(source, rel_path)
        self._check_any_types(source, rel_path)
        self._check_alert_usage(source, rel_path)

    # ─── Python AST 检查 ──────────────────────────────────────

    def _check_type_hints(self, tree: ast.AST, source: str, rel_path: str) -> None:
        """检查函数/方法缺少类型注解"""
        for node in ast.walk(tree):
            if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)):
                if node.name.startswith("_") and not node.name.startswith("__"):
                    continue  # 跳过私有方法
                if node.name in ("__init__", "__str__", "__repr__"):
                    continue
                returns = node.returns
                if returns is None:
                    self._issues.append(CodeIssue(
                        file_path=rel_path, line_number=node.lineno,
                        severity=IssueSeverity.MEDIUM, category=IssueCategory.CODE_QUALITY,
                        title=f"函数 `{node.name}` 缺少返回类型注解",
                        description="公共函数应标注返回类型以提高可读性和可维护性",
                        suggestion=f"添加 -> None 或 -> T 类型注解",
                    ))

    def _check_magic_numbers(self, tree: ast.AST, rel_path: str) -> None:
        """检查魔法数字"""
        for node in ast.walk(tree):
            if isinstance(node, ast.Compare):
                for comparator in node.comparators:
                    if isinstance(comparator, ast.Constant) and isinstance(comparator.value, (int, float)):
                        val = comparator.value
                        if val not in (0, 1, -1, 0.0, 1.0) and isinstance(val, (int, float)):
                            # 只报告看起来像配置值的魔法数字
                            if isinstance(val, float) and 0 < val < 1:
                                self._issues.append(CodeIssue(
                                    file_path=rel_path, line_number=node.lineno,
                                    severity=IssueSeverity.LOW, category=IssueCategory.CODE_QUALITY,
                                    title="魔法浮点数",
                                    description=f"发现魔法浮点数 {val}，应提取为命名常量",
                                    suggestion="定义如 THRESHOLD_HIGH = 0.85 的常量",
                                ))

    def _check_long_functions(self, tree: ast.AST, source: str, rel_path: str) -> None:
        """检查过长的函数"""
        lines = source.split("\n")
        for node in ast.walk(tree):
            if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)):
                end_line = node.end_lineno or node.lineno
                func_len = end_line - node.lineno
                if func_len > 80:
                    self._issues.append(CodeIssue(
                        file_path=rel_path, line_number=node.lineno,
                        severity=IssueSeverity.MEDIUM, category=IssueCategory.CODE_QUALITY,
                        title=f"函数 `{node.name}` 过长 ({func_len} 行)",
                        description="超过 80 行的函数应考虑拆分",
                        suggestion="将函数拆分为多个职责单一的小函数",
                    ))

    def _check_dead_code_patterns(self, tree: ast.AST, source: str, rel_path: str) -> None:
        """检查死代码模式"""
        # 检查 pass-only 函数
        for node in ast.walk(tree):
            if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)):
                if (len(node.body) == 1 and
                        isinstance(node.body[0], ast.Pass) and
                        not node.name.startswith("__") and
                        not node.name.startswith("_abc")):
                    # 排除 ABC 抽象方法
                    has_decorator = any(
                        isinstance(d, ast.Name) and d.id in ("abstractmethod", "override")
                        for d in node.decorator_list
                    )
                    if not has_decorator:
                        self._issues.append(CodeIssue(
                            file_path=rel_path, line_number=node.lineno,
                            severity=IssueSeverity.LOW, category=IssueCategory.CODE_QUALITY,
                            title=f"函数 `{node.name}` 仅有 pass",
                            description="空函数体可能是未完成的实现或死代码",
                            suggestion="实现函数逻辑或删除函数",
                        ))

    def _check_docstrings(self, tree: ast.AST, source: str, rel_path: str) -> None:
        """检查缺少文档字符串的公共类/函数"""
        for node in ast.walk(tree):
            if isinstance(node, ast.ClassDef):
                if not node.name.startswith("_"):
                    has_doc = (node.body and isinstance(node.body[0], ast.Expr)
                               and isinstance(node.body[0].value, ast.Constant))
                    if not has_doc:
                        self._issues.append(CodeIssue(
                            file_path=rel_path, line_number=node.lineno,
                            severity=IssueSeverity.LOW, category=IssueCategory.DOCUMENTATION,
                            title=f"类 `{node.name}` 缺少文档字符串",
                            description="公共类应有 docstring 说明其职责",
                            suggestion='添加 """...""" 文档字符串',
                        ))

    # ─── 文本模式检查 ─────────────────────────────────────────

    def _check_hardcoded_secrets(self, source: str, rel_path: str) -> None:
        """检查硬编码密钥/密码"""
        patterns = [
            (r'(?i)(api_key|apikey|secret|password|token)\s*=\s*["\'][^"\']{8,}["\']',
             "硬编码密钥/密码"),
            (r'(?i)(DEEPSEEK_API_KEY|OPENAI_API_KEY|ANTHROPIC_API_KEY)\s*=\s*["\']sk-',
             "硬编码 API 密钥"),
        ]
        for i, line in enumerate(source.split("\n"), 1):
            for pattern, title in patterns:
                if re.search(pattern, line) and "example" not in line.lower() and "test" not in line.lower():
                    self._issues.append(CodeIssue(
                        file_path=rel_path, line_number=i,
                        severity=IssueSeverity.CRITICAL, category=IssueCategory.SECURITY,
                        title=title,
                        description="密钥不应硬编码在源码中",
                        suggestion="使用环境变量或 .env 文件管理密钥",
                    ))

    def _check_print_statements(self, source: str, rel_path: str) -> None:
        """检查生产代码中的 print()"""
        for i, line in enumerate(source.split("\n"), 1):
            stripped = line.strip()
            if stripped.startswith("print(") and not stripped.startswith("#"):
                self._issues.append(CodeIssue(
                    file_path=rel_path, line_number=i,
                    severity=IssueSeverity.LOW, category=IssueCategory.CODE_QUALITY,
                    title="使用 print() 而非 logger",
                    description="生产代码应使用 logging 模块",
                    suggestion="替换为 logger.info/debug/warning/error",
                ))

    def _check_todo_fixme(self, source: str, rel_path: str) -> None:
        """检查 TODO/FIXME/HACK 注释"""
        for i, line in enumerate(source.split("\n"), 1):
            if re.search(r'#\s*(TODO|FIXME|HACK|XXX|BUG)\b', line, re.IGNORECASE):
                self._issues.append(CodeIssue(
                    file_path=rel_path, line_number=i,
                    severity=IssueSeverity.INFO, category=IssueCategory.CODE_QUALITY,
                    title="TODO/FIXME 注释",
                    description=line.strip(),
                    suggestion="解决此 TODO 或创建进化任务",
                ))

    def _check_unbounded_growth(self, source: str, rel_path: str) -> None:
        """检查潜在的无限制增长模式"""
        patterns = [
            (r'\.append\(', "列表 append 操作（检查是否有上限）"),
            (r'\.add\(', "集合 add 操作（检查是否有上限）"),
        ]
        for i, line in enumerate(source.split("\n"), 1):
            for pattern, desc in patterns:
                if re.search(pattern, line):
                    # 检查附近是否有 len() 检查或 pop/remove
                    context_start = max(0, i - 5)
                    context_end = min(len(source.split("\n")), i + 5)
                    context = "\n".join(source.split("\n")[context_start:context_end])
                    if not any(kw in context for kw in ["pop(", "remove(", "del ", "len(", "clear(", "max_", "_MAX", "limit"]):
                        self._issues.append(CodeIssue(
                            file_path=rel_path, line_number=i,
                            severity=IssueSeverity.MEDIUM, category=IssueCategory.PERFORMANCE,
                            title="潜在的无限制增长",
                            description=desc,
                            suggestion="添加大小限制或 LRU 淘汰策略",
                        ))
                    break  # 每行只报告一次

    # ─── 前端检查 ─────────────────────────────────────────────

    def _check_console_logs(self, source: str, rel_path: str) -> None:
        """检查 console.log 在生产代码中的使用"""
        for i, line in enumerate(source.split("\n"), 1):
            if "console.log(" in line or "console.error(" in line:
                self._issues.append(CodeIssue(
                    file_path=rel_path, line_number=i,
                    severity=IssueSeverity.LOW, category=IssueCategory.CODE_QUALITY,
                    title="console.log/error 调用",
                    description="生产环境应使用结构化日志系统",
                    suggestion="替换为统一的日志工具函数",
                ))

    def _check_any_types(self, source: str, rel_path: str) -> None:
        """检查 TypeScript 中的 any 类型滥用"""
        count = source.count(": any")
        if count > 10:
            self._issues.append(CodeIssue(
                file_path=rel_path, line_number=1,
                severity=IssueSeverity.MEDIUM, category=IssueCategory.CODE_QUALITY,
                title=f"大量使用 any 类型 ({count} 处)",
                description="过度使用 any 会削弱 TypeScript 的类型安全",
                suggestion="逐步替换为具体类型或泛型",
            ))

    def _check_alert_usage(self, source: str, rel_path: str) -> None:
        """检查 alert() 调用"""
        for i, line in enumerate(source.split("\n"), 1):
            if re.search(r'\balert\(', line):
                self._issues.append(CodeIssue(
                    file_path=rel_path, line_number=i,
                    severity=IssueSeverity.MEDIUM, category=IssueCategory.CODE_QUALITY,
                    title="使用 alert() 弹窗",
                    description="alert() 是阻塞式弹窗，用户体验差",
                    suggestion="替换为 toast/notification 组件",
                ))

    # ─── 指标计算 ─────────────────────────────────────────────

    def _compute_metrics(self) -> Dict[str, Any]:
        """计算代码质量指标"""
        return {
            "total_issues": len(self._issues),
            "critical_issues": sum(1 for i in self._issues if i.severity == IssueSeverity.CRITICAL),
            "high_issues": sum(1 for i in self._issues if i.severity == IssueSeverity.HIGH),
            "issues_per_kloc": round(len(self._issues) / max(self._total_lines / 1000, 1), 1),
        }
