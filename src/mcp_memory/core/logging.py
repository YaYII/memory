"""
结构化日志模块

工业标准：
- 使用 Python 标准 logging，支持 JSON 格式输出（生产）和彩色文本输出（开发）
- 通过 MCP_LOG_FORMAT=json|text 控制格式
- 通过 MCP_LOG_LEVEL 控制级别
- 自动注入 request_id、service、version 等字段
"""

import logging
import sys
import os
import json
from datetime import datetime, timezone
from typing import Any, Optional

# ─── 常量 ─────────────────────────────────────────────────────────────────────

SERVICE_NAME = "mcp-memory"
SERVICE_VERSION = os.getenv("SERVICE_VERSION", "2.0.0")
LOG_LEVEL = os.getenv("MCP_LOG_LEVEL", "INFO").upper()
LOG_FORMAT = os.getenv("MCP_LOG_FORMAT", "text").lower()  # "json" | "text"


# ─── JSON Formatter ───────────────────────────────────────────────────────────

class JsonFormatter(logging.Formatter):
    """
    结构化 JSON 日志格式，适合 ELK / Loki / CloudWatch 采集。
    每条日志一行 JSON，包含标准字段。
    """

    def format(self, record: logging.LogRecord) -> str:
        log_entry: dict[str, Any] = {
            "timestamp": datetime.fromtimestamp(record.created, tz=timezone.utc).isoformat(),
            "level": record.levelname,
            "logger": record.name,
            "message": record.getMessage(),
            "service": SERVICE_NAME,
            "version": SERVICE_VERSION,
        }

        # 注入自定义字段（通过 extra= 传入）
        for key in ("request_id", "user_id", "memory_id", "duration_ms", "path"):
            val = getattr(record, key, None)
            if val is not None:
                log_entry[key] = val

        # 异常信息
        if record.exc_info:
            log_entry["exception"] = self.formatException(record.exc_info)

        # 源码位置（仅 DEBUG）
        if record.levelno == logging.DEBUG:
            log_entry["source"] = f"{record.pathname}:{record.lineno}"

        return json.dumps(log_entry, ensure_ascii=False)


# ─── 彩色文本 Formatter（开发环境）──────────────────────────────────────────────

_LEVEL_COLORS = {
    "DEBUG":    "\033[36m",   # Cyan
    "INFO":     "\033[32m",   # Green
    "WARNING":  "\033[33m",   # Yellow
    "ERROR":    "\033[31m",   # Red
    "CRITICAL": "\033[35m",   # Magenta
}
_RESET = "\033[0m"


class ColorTextFormatter(logging.Formatter):
    """开发环境彩色文本格式，便于人眼阅读。"""

    def format(self, record: logging.LogRecord) -> str:
        level = record.levelname
        color = _LEVEL_COLORS.get(level, "")
        ts = datetime.fromtimestamp(record.created).strftime("%H:%M:%S")
        name = record.name.split(".")[-1]  # 只显示最后一段
        request_id = getattr(record, "request_id", None)
        rid_part = f" [{request_id[:8]}]" if request_id else ""

        prefix = f"{color}[{ts}] [{level:<8}] [{name}]{rid_part}{_RESET}"
        message = record.getMessage()

        lines = [f"{prefix} {message}"]
        if record.exc_info:
            lines.append(self.formatException(record.exc_info))
        return "\n".join(lines)


# ─── 全局配置入口 ─────────────────────────────────────────────────────────────

def configure_logging() -> None:
    """
    在应用启动时调用一次，配置全局 logging。
    幂等：重复调用无副作用。
    """
    root = logging.getLogger()

    # 避免重复配置
    if root.handlers:
        return

    level = getattr(logging, LOG_LEVEL, logging.INFO)
    root.setLevel(level)

    handler = logging.StreamHandler(sys.stdout)
    handler.setLevel(level)

    if LOG_FORMAT == "json":
        handler.setFormatter(JsonFormatter())
    else:
        handler.setFormatter(ColorTextFormatter())

    root.addHandler(handler)

    # 抑制第三方库的噪音日志
    for noisy in ("chromadb", "httpx", "uvicorn.access", "sentence_transformers", "httpcore"):
        logging.getLogger(noisy).setLevel(logging.WARNING)


# ─── 便捷获取 logger ──────────────────────────────────────────────────────────

def get_logger(name: str) -> logging.Logger:
    """
    获取命名 logger。

    Usage:
        logger = get_logger(__name__)
        logger.info("Memory written", extra={"memory_id": mid, "user_id": uid})
    """
    return logging.getLogger(f"{SERVICE_NAME}.{name}")
