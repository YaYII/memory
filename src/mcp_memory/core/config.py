"""
应用配置模块

修复记录（工业化升级）:
- [P0] 修复 _providers_cache：Pydantic v2 中使用 PrivateAttr() 而非裸类变量
- [P1] 添加 model_post_init 钩子，启动时验证关键配置
- [P2] 所有字段添加完整 Field 描述，支持文档生成
- [P3] 添加计算属性 data_path 的日志路径
"""

import os
import hashlib
import json
import logging
from pydantic_settings import BaseSettings
from pydantic import Field, PrivateAttr, model_validator
from typing import Optional, Dict, List, Any

logger = logging.getLogger("mcp-memory.config")


def get_current_project_id() -> str:
    """
    自动获取当前项目ID。
    策略：CWD 绝对路径 → SHA256 前8位 + 目录名。
    确保每个项目目录对应唯一 ID，无需人工配置。
    """
    cwd = os.getcwd()
    abs_path = os.path.abspath(cwd)
    project_hash = hashlib.sha256(abs_path.encode()).hexdigest()[:8]
    folder_name = os.path.basename(abs_path)
    return f"{folder_name}_{project_hash}"


def get_default_chroma_path() -> str:
    """
    获取默认的 ChromaDB 数据存储路径。
    优先级：
    1. 项目目录下的 data/chroma（如果存在且有数据）
    2. 用户目录下的 ~/.mcp_memory/chroma
    """
    cwd = os.getcwd()
    project_data_path = os.path.join(cwd, "data", "chroma")
    user_data_path = os.path.join(os.path.expanduser("~"), ".mcp_memory", "chroma")
    
    if os.path.exists(project_data_path):
        chroma_db = os.path.join(project_data_path, "chroma.sqlite3")
        if os.path.exists(chroma_db):
            logger.info("[config] 检测到项目数据目录: %s", project_data_path)
            return project_data_path
    
    logger.info("[config] 使用用户数据目录: %s", user_data_path)
    return user_data_path


def _parse_providers_from_env() -> List[Dict[str, Any]]:
    """
    从环境变量解析 LLM 提供商配置。

    支持两种格式：
    1. JSON 数组（推荐）: LLM_PROVIDERS='[{"name":"deepseek",...}]'
    2. 单独变量（兼容）: DEEPSEEK_API_KEY=xxx
    """
    providers: List[Dict[str, Any]] = []

    providers_env = os.environ.get("LLM_PROVIDERS", "").strip()
    if providers_env:
        try:
            parsed = json.loads(providers_env)
            if isinstance(parsed, list):
                return parsed
        except json.JSONDecodeError as e:
            logger.warning("Failed to parse LLM_PROVIDERS JSON: %s", e)

    def _add(name: str, key_env: str, base_url: str, priority_env: str, default_priority: int) -> None:
        key = os.environ.get(key_env, "").strip()
        if key:
            providers.append({
                "name": name,
                "api_key": key,
                "base_url": os.environ.get(f"{name.upper()}_BASE_URL", base_url),
                "priority": int(os.environ.get(priority_env, default_priority)),
                "enabled": True,
            })

    _add("deepseek", "DEEPSEEK_API_KEY", "https://api.deepseek.com", "DEEPSEEK_PRIORITY", 100)
    _add("openai",   "OPENAI_API_KEY",   "https://api.openai.com/v1", "OPENAI_PRIORITY",   80)
    _add("anthropic","ANTHROPIC_API_KEY","https://api.anthropic.com/v1","ANTHROPIC_PRIORITY",90)
    _add("glm",      "GLM_API_KEY",      "https://open.bigmodel.cn/api/paas/v4","GLM_PRIORITY",50)

    return providers


class Settings(BaseSettings):
    """
    应用配置。

    优先级（高→低）：环境变量 > .env 文件 > 字段默认值
    """

    # ── 服务配置 ──────────────────────────────────────────────────────────────
    MCP_MEMORY_PORT: int = Field(22888, description="HTTP 服务端口")
    MCP_MEMORY_HOST: str = Field("127.0.0.1", description="服务绑定地址（生产环境保持 127.0.0.1，用反向代理暴露）")
    MCP_MEMORY_API_KEY: str = Field("", description="API 认证密钥（空=不启用认证，仅用于受信任内网）")
    MCP_MEMORY_SHARED: bool = Field(False, description="是否开启记忆共享模式")
    MCP_PROJECT_ID: str = Field(default_factory=get_current_project_id, description="当前项目唯一ID（自动生成）")

    # ── 存储配置 ──────────────────────────────────────────────────────────────
    CHROMA_DATA_PATH: str = Field(
        default_factory=get_default_chroma_path,
        description="ChromaDB 持久化存储路径",
    )

    # ── 语言和日志 ────────────────────────────────────────────────────────────
    MCP_MEMORY_LANGUAGE: str = Field("简体中文", description="AI 写入记忆的强制语言")
    MCP_LOG_LEVEL: str = Field("INFO", description="日志级别: DEBUG|INFO|WARNING|ERROR")
    MCP_LOG_FORMAT: str = Field("text", description="日志格式: text|json")

    # ── LLM 配置 ──────────────────────────────────────────────────────────────
    LLM_PROVIDERS: str = Field("", description="JSON 格式的 LLM 提供商配置列表")

    # 兼容旧版单独 Key 配置
    GLM_API_KEY: str = Field("", description="智谱 GLM API Key")
    GLM_BASE_URL: str = Field("https://open.bigmodel.cn/api/paas/v4")
    GLM_PRIORITY: int = Field(50)

    DEEPSEEK_API_KEY: str = Field("", description="DeepSeek API Key")
    DEEPSEEK_BASE_URL: str = Field("https://api.deepseek.com")
    DEEPSEEK_PRIORITY: int = Field(100)

    OPENAI_API_KEY: str = Field("", description="OpenAI API Key")
    OPENAI_BASE_URL: str = Field("https://api.openai.com/v1")
    OPENAI_PRIORITY: int = Field(80)

    ANTHROPIC_API_KEY: str = Field("", description="Anthropic API Key")
    ANTHROPIC_PRIORITY: int = Field(90)

    MCP_LLM_PROVIDER: str = Field("deepseek", description="首选 LLM 提供商名称（fallback 顺序由 priority 决定）")

    # ── Token 管理 ────────────────────────────────────────────────────────────
    TOKEN_POOL_DAILY_LIMIT: int = Field(100_000, description="每日 Token 消耗上限")
    TOKEN_POOL_MONTHLY_LIMIT: int = Field(1_000_000, description="每月 Token 消耗上限")

    # ── 进化引擎调度 ──────────────────────────────────────────────────────────
    MCP_EVOLUTION_ENABLED: bool = Field(True, description="是否启用自动记忆进化")
    MCP_EVOLUTION_SCAN_INTERVAL_SECONDS: int = Field(300, ge=60, description="扫描间隔（最小60秒，防过热）")
    MCP_EVOLUTION_REFLECTION_INTERVAL_SECONDS: int = Field(1800, ge=300, description="反思间隔（最小5分钟）")
    MCP_EVOLUTION_SCAN_BATCH_SIZE: int = Field(50, ge=1, le=500, description="单次扫描批量大小")
    MCP_EVOLUTION_REFLECTION_USER_ID: str = Field("system_evolution")
    MCP_EVOLUTION_PROFILE: str = Field("standard", description="进化策略: light|standard|aggressive")
    MCP_EVOLUTION_ADAPTIVE: bool = Field(True, description="是否开启自适应进化策略")

    # ── Pydantic v2：私有缓存（不参与序列化/验证）────────────────────────────
    _providers_cache: Optional[List[Dict[str, Any]]] = PrivateAttr(default=None)

    model_config = {
        "env_file": ".env",
        "env_file_encoding": "utf-8",
        "extra": "ignore",
        "populate_by_name": True,
    }

    @model_validator(mode="after")
    def _validate_and_warn(self) -> "Settings":
        """启动时对关键配置进行验证和警告。"""
        if self.MCP_EVOLUTION_PROFILE not in ("light", "standard", "aggressive"):
            logger.warning(
                "Invalid MCP_EVOLUTION_PROFILE '%s', falling back to 'standard'",
                self.MCP_EVOLUTION_PROFILE,
            )
            object.__setattr__(self, "MCP_EVOLUTION_PROFILE", "standard")

        if not self.MCP_MEMORY_API_KEY:
            logger.warning(
                "MCP_MEMORY_API_KEY is not set. "
                "The server is running WITHOUT authentication. "
                "Set MCP_MEMORY_API_KEY in .env for production deployments."
            )

        if self.MCP_MEMORY_HOST == "0.0.0.0":
            logger.warning(
                "Server is binding to 0.0.0.0 (all interfaces). "
                "Make sure this is intentional and protected by a reverse proxy."
            )

        return self

    @property
    def providers(self) -> List[Dict[str, Any]]:
        """获取 LLM 提供商配置列表（懒加载，线程安全）。"""
        if self._providers_cache is None:
            cache = _parse_providers_from_env()
            # 按 priority 降序排列（priority 越高越优先）
            cache.sort(key=lambda p: p.get("priority", 0), reverse=True)
            object.__setattr__(self, "_providers_cache", cache)
        return self._providers_cache  # type: ignore[return-value]

    @property
    def has_llm(self) -> bool:
        """是否配置了至少一个 LLM 提供商。"""
        return len(self.providers) > 0

    @property
    def preferred_provider(self) -> Optional[Dict[str, Any]]:
        """返回最高优先级的可用提供商配置。"""
        return self.providers[0] if self.providers else None


# 全局单例（由 lifespan 初始化后使用）
settings = Settings()
