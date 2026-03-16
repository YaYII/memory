"""
HTTP 中间件集合

包含：
1. RequestIDMiddleware  — 为每个请求注入唯一 X-Request-ID
2. SecurityMiddleware   — 防时序攻击的 API Key 认证（hmac.compare_digest）
3. setup_rate_limiting  — 基于 slowapi 的限流（可选依赖）
4. GlobalExceptionHandler — 统一异常格式，屏蔽内部细节
"""

import hmac
import uuid
import time
import logging
from typing import Callable, Set

from fastapi import FastAPI, Request, Response
from fastapi.responses import JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware, RequestResponseEndpoint
from starlette.types import ASGIApp

logger = logging.getLogger("mcp-memory.middleware")

# ─── 不需要认证的路径集合 ─────────────────────────────────────────────────────

_PUBLIC_PATH_PREFIXES: Set[str] = {
    "/health",
    "/docs",
    "/openapi.json",
    "/redoc",
    "/static",
    "/vue",
    "/dashboard/events",  # SSE 事件流（允许前端直连）
    "/dashboard/stats",
    "/dashboard/logs",
}


def _is_public_path(path: str) -> bool:
    return any(path.startswith(p) for p in _PUBLIC_PATH_PREFIXES)


# ─── 1. Request ID 中间件 ─────────────────────────────────────────────────────

class RequestIDMiddleware(BaseHTTPMiddleware):
    """
    为每个请求注入唯一 X-Request-ID。

    - 优先读取客户端传入的 X-Request-ID（便于链路追踪）
    - 若无则自动生成 UUID4
    - 在响应头中回传，便于客户端/日志关联
    """

    async def dispatch(self, request: Request, call_next: RequestResponseEndpoint) -> Response:
        request_id = request.headers.get("X-Request-ID") or str(uuid.uuid4())
        request.state.request_id = request_id

        # 注入到 logging context（通过 LoggerAdapter 传递）
        start_time = time.monotonic()
        response = await call_next(request)
        duration_ms = int((time.monotonic() - start_time) * 1000)

        response.headers["X-Request-ID"] = request_id
        response.headers["X-Response-Time"] = f"{duration_ms}ms"

        # 访问日志
        logger.info(
            "%s %s %s %dms",
            request.method,
            request.url.path,
            response.status_code,
            duration_ms,
            extra={"request_id": request_id, "duration_ms": duration_ms, "path": request.url.path},
        )
        return response


# ─── 2. API Key 认证中间件 ────────────────────────────────────────────────────

class APIKeyAuthMiddleware(BaseHTTPMiddleware):
    """
    防时序攻击的 API Key 认证。

    使用 hmac.compare_digest() 替代 ==，防止通过响应时间推断密钥。
    仅当 MCP_MEMORY_API_KEY 非空时激活。
    """

    def __init__(self, app: ASGIApp, api_key: str) -> None:
        super().__init__(app)
        self._api_key = api_key
        self._enabled = bool(api_key)

    async def dispatch(self, request: Request, call_next: RequestResponseEndpoint) -> Response:
        if not self._enabled or _is_public_path(request.url.path):
            return await call_next(request)

        provided_key = self._extract_key(request)
        if not provided_key:
            logger.warning(
                "Unauthorized request — missing API key",
                extra={"path": request.url.path, "ip": request.client.host if request.client else "unknown"},
            )
            return JSONResponse(
                status_code=401,
                content={"code": 401, "message": "Unauthorized: API key required"},
                headers={"WWW-Authenticate": "Bearer"},
            )

        # 时序安全比较：两字符串必须等长才能防时序攻击
        # hmac.compare_digest 在长度不同时仍以恒定时间返回 False
        if not hmac.compare_digest(provided_key.encode(), self._api_key.encode()):
            logger.warning(
                "Unauthorized request — invalid API key",
                extra={"path": request.url.path, "ip": request.client.host if request.client else "unknown"},
            )
            return JSONResponse(
                status_code=401,
                content={"code": 401, "message": "Unauthorized: Invalid API key"},
            )

        return await call_next(request)

    @staticmethod
    def _extract_key(request: Request) -> str:
        """从 Authorization header 或 query param 提取 API Key。"""
        auth = request.headers.get("Authorization", "")
        if auth.startswith("Bearer "):
            return auth[7:].strip()
        return request.query_params.get("api_key", "").strip()


# ─── 3. 全局异常处理器 ────────────────────────────────────────────────────────

def register_exception_handlers(app: FastAPI) -> None:
    """
    注册全局异常处理器，确保：
    1. 内部错误（5xx）不暴露堆栈信息给客户端
    2. 所有错误响应格式统一
    3. 错误通过 logging 记录（含 request_id）
    """

    @app.exception_handler(Exception)
    async def unhandled_exception_handler(request: Request, exc: Exception) -> JSONResponse:
        request_id = getattr(request.state, "request_id", "unknown")
        logger.exception(
            "Unhandled exception: %s",
            type(exc).__name__,
            extra={"request_id": request_id, "path": request.url.path},
        )
        return JSONResponse(
            status_code=500,
            content={
                "code": 500,
                "message": "Internal server error",
                "request_id": request_id,
            },
        )

    @app.exception_handler(ValueError)
    async def value_error_handler(request: Request, exc: ValueError) -> JSONResponse:
        request_id = getattr(request.state, "request_id", "unknown")
        logger.warning("ValueError: %s", exc, extra={"request_id": request_id})
        return JSONResponse(
            status_code=400,
            content={
                "code": 400,
                "message": str(exc),
                "request_id": request_id,
            },
        )


# ─── 4. 限流（可选，依赖 slowapi）────────────────────────────────────────────

def setup_rate_limiting(app: FastAPI) -> None:
    """
    配置 API 限流（使用 slowapi，基于令牌桶算法）。

    默认限制：
    - /memory/write: 60次/分钟（防 LLM Token 滥用）
    - /memory/read: 120次/分钟
    - 其他接口: 200次/分钟

    需要安装：pip install slowapi
    """
    try:
        from slowapi import Limiter, _rate_limit_exceeded_handler
        from slowapi.util import get_remote_address
        from slowapi.errors import RateLimitExceeded
        from slowapi.middleware import SlowAPIMiddleware

        limiter = Limiter(key_func=get_remote_address, default_limits=["200/minute"])
        app.state.limiter = limiter
        app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
        app.add_middleware(SlowAPIMiddleware)

        logger.info("Rate limiting enabled: 200 req/min default")
        return limiter
    except ImportError:
        logger.warning(
            "slowapi not installed, rate limiting disabled. "
            "Install with: pip install slowapi"
        )
        return None
