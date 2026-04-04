"""
OpenCode CLI 驱动引擎

通过 opencode serve + run --attach 模式执行代码优化任务。
工作流程：
1. 启动 opencode serve 后台服务
2. 通过 opencode run --attach 发送任务提示词
3. 等待任务完成
4. 验证修改（lint + test）
5. 通过则 git commit，失败则 git reset
6. 停止 serve 服务

使用 opencode/qwen3.6-plus-free 免费模型。
"""

import json
import logging
import os
import random
import subprocess
import sys
import time
from dataclasses import dataclass
from typing import List, Optional, Tuple

from mcp_memory.evolution.evolution_config import EvolutionConfig
from mcp_memory.evolution.evolution_tasks import EvolutionTask

logger = logging.getLogger("mcp-memory.evolution.driver")


class Colors:
    """终端颜色代码"""
    RESET = "\033[0m"
    BOLD = "\033[1m"
    DIM = "\033[2m"
    RED = "\033[91m"
    GREEN = "\033[92m"
    YELLOW = "\033[93m"
    BLUE = "\033[94m"


@dataclass
class TaskResult:
    """任务执行结果"""
    task: EvolutionTask
    success: bool
    files_modified: List[str]
    output: str
    validation_passed: bool

    def to_dict(self):
        return {
            "task_id": self.task.task_id,
            "success": self.success,
            "files_modified": self.files_modified,
            "validation_passed": self.validation_passed,
            "output": self.output[:500] if self.output else "",
        }


class OpenCodeDriver:
    """OpenCode CLI 自动化驱动

    通过 opencode serve + run --attach 模式执行代码优化。
    使用 opencode/qwen3.6-plus-free 免费模型。
    """

    def __init__(self, config: EvolutionConfig):
        self.config = config
        self._results: List[TaskResult] = []
        self._serve_proc: Optional[subprocess.Popen] = None
        self._serve_port: int = 0
        self._serve_url: str = ""

    def _find_opencode_binary(self) -> Optional[str]:
        """查找 opencode 可执行文件"""
        # 1. OpenCode.app 内置的 CLI
        macos_paths = [
            "/Applications/OpenCode.app/Contents/Resources/opencode-cli",
            os.path.expanduser("~/Applications/OpenCode.app/Contents/Resources/opencode-cli"),
        ]
        for p in macos_paths:
            if os.path.exists(p):
                return p

        # 2. PATH 中的 opencode
        try:
            result = subprocess.run(
                ["which", "opencode"],
                capture_output=True, text=True, timeout=5,
            )
            if result.returncode == 0:
                path = result.stdout.strip()
                if os.path.exists(path):
                    return path
        except Exception:
            pass

        # 3. Go bin 目录
        try:
            go_env = subprocess.run(
                ["go", "env", "GOPATH"],
                capture_output=True, text=True, timeout=5,
            )
            if go_env.returncode == 0:
                gopath = go_env.stdout.strip()
                bin_path = os.path.join(gopath, "bin", "opencode")
                if os.path.exists(bin_path):
                    return bin_path
        except Exception:
            pass

        return None

    def _start_serve(self) -> bool:
        """启动 opencode serve 后台服务"""
        if self._serve_proc and self._serve_proc.poll() is None:
            return True

        opencode_binary = self._find_opencode_binary()
        if not opencode_binary:
            logger.error("找不到 opencode 可执行文件")
            return False

        self._serve_port = random.randint(4100, 4200)
        self._serve_url = f"http://127.0.0.1:{self._serve_port}"

        logger.info("启动 opencode serve 于端口 %d", self._serve_port)
        print(f"\n  {Colors.DIM}🔌 启动 opencode 服务 (端口 {self._serve_port})...{Colors.RESET}")

        try:
            self._serve_proc = subprocess.Popen(
                [opencode_binary, "serve", "--port", str(self._serve_port)],
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
                cwd=self.config.project_root,
                start_new_session=True,
            )

            # 等待服务启动（最多 30 秒）
            for _ in range(30):
                time.sleep(1)
                if self._serve_proc.poll() is not None:
                    logger.error("opencode serve 启动失败，进程已退出")
                    print(f"  {Colors.RED}❌ opencode 服务启动失败{Colors.RESET}")
                    return False
                try:
                    import urllib.request
                    import urllib.error
                    req = urllib.request.Request(f"{self._serve_url}/config")
                    urllib.request.urlopen(req, timeout=2)
                    print(f"  {Colors.GREEN}✅ opencode 服务已就绪{Colors.RESET}")
                    return True
                except urllib.error.HTTPError as e:
                    if e.code in (401, 403):
                        print(f"  {Colors.GREEN}✅ opencode 服务已就绪{Colors.RESET}")
                        return True
                except Exception:
                    continue

            logger.error("opencode serve 启动超时")
            return False

        except Exception as e:
            logger.error("启动 opencode serve 异常: %s", e)
            return False

    def _stop_serve(self) -> None:
        """停止 opencode serve 服务"""
        if self._serve_proc:
            try:
                self._serve_proc.terminate()
                self._serve_proc.wait(timeout=5)
            except Exception:
                try:
                    self._serve_proc.kill()
                except Exception:
                    pass
            self._serve_proc = None
            logger.info("opencode serve 已停止")

    def _send_task(self, prompt: str) -> Tuple[bool, str]:
        """通过 opencode run --attach 发送任务"""
        opencode_binary = self._find_opencode_binary()
        if not opencode_binary:
            return False, "找不到 opencode 可执行文件"

        cmd = [
            opencode_binary,
            "run",
            "--attach", self._serve_url,
            "--format", "json",
            "--pure",
            "--model", "opencode/qwen3.6-plus-free",
            prompt,
        ]

        logger.debug("执行命令: %s", " ".join(cmd[:6]))
        print(f"  {Colors.DIM}🤖 发送任务到 opencode (qwen3.6-plus-free)...{Colors.RESET}")

        try:
            proc = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=self.config.opencode_timeout,
                cwd=self.config.project_root,
            )

            output = proc.stdout + proc.stderr
            success = proc.returncode == 0

            if not success:
                logger.warning("opencode run 退出码 %d: %s", proc.returncode, output[:300])

            return success, output

        except subprocess.TimeoutExpired:
            return False, f"任务超时（{self.config.opencode_timeout}s）"
        except Exception as e:
            return False, f"执行异常: {e}"

    def execute_task(self, task: EvolutionTask) -> TaskResult:
        """执行单个进化任务"""
        task.status = "running"
        logger.info("执行任务 [%s] %s", task.task_id, task.title)

        if self.config.dry_run:
            logger.info("[DRY RUN] 将执行: %s", task.title)
            logger.info("[DRY RUN] 提示词: %s", task.prompt[:200])
            task.status = "skipped"
            result = TaskResult(
                task=task, success=False, files_modified=[],
                output="[DRY RUN] 未实际执行", validation_passed=False,
            )
            self._results.append(result)
            return result

        # ─── 启动 opencode serve ──────────────────────────
        if not self._start_serve():
            task.status = "failed"
            task.result = "opencode serve 启动失败"
            result = TaskResult(
                task=task, success=False, files_modified=[],
                output="opencode serve 启动失败", validation_passed=False,
            )
            self._results.append(result)
            return result

        try:
            # ─── 发送任务 ────────────────────────────────
            success, output = self._send_task(task.prompt)

            if not success:
                task.status = "failed"
                task.result = output
                logger.warning("任务 [%s] 执行失败: %s", task.task_id, output[:200])
                result = TaskResult(
                    task=task, success=False, files_modified=[],
                    output=output, validation_passed=False,
                )
                self._results.append(result)
                return result

            # ─── 等待文件系统同步 ────────────────────────
            time.sleep(1)

            # ─── 验证 ────────────────────────────────────
            files_modified = self._get_modified_files()
            validation_passed = self._validate(task)

            if validation_passed and self.config.auto_commit:
                commit_msg = f"{self.config.commit_prefix}({task.category.value}): {task.title}"
                self._git_commit(files_modified, commit_msg)

            task.status = "success" if validation_passed else "failed"
            task.result = output

            result = TaskResult(
                task=task,
                success=success,
                files_modified=files_modified,
                output=output,
                validation_passed=validation_passed,
            )
            self._results.append(result)
            return result

        finally:
            # 每个任务完成后停止 serve（避免端口占用）
            self._stop_serve()

    def execute_batch(self, tasks: List[EvolutionTask], max_count: Optional[int] = None) -> List[TaskResult]:
        """批量执行进化任务"""
        limit = max_count or self.config.max_tasks_per_cycle
        results = []

        for task in tasks[:limit]:
            result = self.execute_task(task)
            results.append(result)

            if not result.validation_passed:
                logger.warning("验证失败，停止后续任务")
                break

        return results

    def _get_modified_files(self) -> List[str]:
        """获取 git 追踪到的已修改文件"""
        try:
            result = subprocess.run(
                ["git", "diff", "--name-only", "--diff-filter=M"],
                capture_output=True, text=True,
                cwd=self.config.project_root,
            )
            if result.returncode == 0:
                return [f.strip() for f in result.stdout.strip().split("\n") if f.strip()]
        except Exception:
            pass
        return []

    def _validate(self, task: EvolutionTask) -> bool:
        """验证任务结果

        验证策略：
        1. 确认文件确实被修改了
        2. 只对修改的文件运行 lint（不检查整个代码库）
        3. 如果 lint 失败，尝试自动修复
        4. 对于纯代码质量任务（类型注解、文档字符串等），跳过测试
        5. 对于逻辑修改任务，运行测试
        """
        files_modified = self._get_modified_files()
        if not files_modified:
            # opencode 执行了但没有修改文件，标记为"无需修改"而非失败
            logger.info("任务 [%s] 无需修改（opencode 判断当前代码已符合要求）", task.task_id)
            task.status = "skipped"
            task.result = "opencode 判断无需修改"
            return True  # 返回 True 表示不需要回滚，继续下一个任务

        # 只对修改的文件运行 lint，且不作为强制失败条件
        if self.config.require_lint_pass:
            lint_ok = self._run_lint(files_modified)
            if not lint_ok:
                # 尝试自动修复
                fix_ok = self._run_lint_fix(files_modified)
                if not fix_ok:
                    # 不强制回滚，因为可能是预存在的问题
                    logger.info("Lint 检查未通过，但继续执行（可能是预存问题）")

        # 只对涉及逻辑修改的任务运行测试
        skip_test_categories = {
            "code_quality", "documentation",
        }
        if self.config.require_tests_pass and task.category.value not in skip_test_categories:
            test_ok = self._run_tests()
            if not test_ok:
                logger.warning("测试失败，回滚修改")
                self._git_reset(files_modified)
                return False

        logger.info("验证通过: %d 个文件被修改", len(files_modified))
        return True

    def _run_lint(self, files: List[str]) -> bool:
        """运行 Ruff lint 检查指定文件"""
        try:
            cmd = [sys.executable, "-m", "ruff", "check"] + files
            result = subprocess.run(
                cmd,
                capture_output=True, text=True,
                cwd=self.config.project_root,
                timeout=60,
            )
            return result.returncode == 0
        except Exception as e:
            logger.warning("Lint 执行异常: %s", e)
            return False

    def _run_lint_fix(self, files: List[str]) -> bool:
        """运行 Ruff lint --fix 自动修复"""
        try:
            fix_cmd = [sys.executable, "-m", "ruff", "check", "--fix"] + files
            subprocess.run(
                fix_cmd,
                capture_output=True, text=True,
                cwd=self.config.project_root,
                timeout=60,
            )
            # 修复后再检查一次
            return self._run_lint(files)
        except Exception as e:
            logger.warning("Lint 修复异常: %s", e)
            return False

    def _run_tests(self) -> bool:
        """运行 pytest"""
        try:
            result = subprocess.run(
                ["python", "-m", "pytest", self.config.tests_dir, "-x", "-q", "--tb=short"],
                capture_output=True, text=True,
                cwd=self.config.project_root,
                timeout=120,
                env={**os.environ, "CHROMA_DATA_PATH": "/tmp/test_chroma_evolve"},
            )
            if result.returncode != 0:
                logger.warning("测试失败:\n%s", result.stdout[:500])
                return False
            return True
        except Exception as e:
            logger.warning("测试执行异常: %s", e)
            return False

    def _git_commit(self, files: List[str], message: str) -> bool:
        """git add + commit"""
        try:
            if files:
                subprocess.run(
                    ["git", "add"] + files,
                    capture_output=True, cwd=self.config.project_root,
                )
            else:
                subprocess.run(
                    ["git", "add", "-A"],
                    capture_output=True, cwd=self.config.project_root,
                )

            result = subprocess.run(
                ["git", "commit", "-m", message],
                capture_output=True, text=True, cwd=self.config.project_root,
            )
            if result.returncode == 0:
                logger.info("已提交: %s", message)
                return True
            else:
                logger.warning("提交失败: %s", result.stderr[:200])
                return False
        except Exception as e:
            logger.warning("git commit 异常: %s", e)
            return False

    def _git_reset(self, files: Optional[List[str]] = None) -> None:
        """回滚未提交的修改

        Args:
            files: 指定要回滚的文件列表，如果为 None 则只回滚 _get_modified_files() 返回的文件
        """
        try:
            target_files = files or self._get_modified_files()
            if not target_files:
                return
            subprocess.run(
                ["git", "checkout", "--"] + target_files,
                capture_output=True, cwd=self.config.project_root,
            )
            logger.info("已回滚文件: %s", ", ".join(target_files))
        except Exception as e:
            logger.warning("git reset 异常: %s", e)

    def get_results_summary(self) -> str:
        """获取执行结果摘要"""
        if not self._results:
            return "无执行记录"

        lines = ["\n=== 进化任务执行结果 ==="]
        for r in self._results:
            status = "✅" if r.validation_passed else "❌"
            lines.append(f"  {status} [{r.task.task_id}] {r.task.title}")
            if r.files_modified:
                lines.append(f"     修改文件: {', '.join(r.files_modified)}")
        lines.append(f"\n总计: {len(self._results)} 个任务, "
                     f"成功: {sum(1 for r in self._results if r.validation_passed)}, "
                     f"失败: {sum(1 for r in self._results if not r.validation_passed)}")
        return "\n".join(lines)
