import os
import hashlib
import json
from pydantic_settings import BaseSettings
from typing import Optional, Dict, List, Any


def get_current_project_id():
    """
    自动获取当前项目ID
    逻辑：取当前工作目录 (CWD) 的绝对路径，计算 SHA256 哈希的前8位
    这样确保每个项目目录对应唯一的 ID，无需人工配置
    """
    cwd = os.getcwd()
    # 使用绝对路径，避免相对路径差异
    abs_path = os.path.abspath(cwd)
    # 计算哈希
    project_hash = hashlib.sha256(abs_path.encode()).hexdigest()[:8]
    # 取目录名作为前缀，方便肉眼识别
    folder_name = os.path.basename(abs_path)
    return f"{folder_name}_{project_hash}"


def parse_providers_from_env() -> List[Dict[str, Any]]:
    """
    从环境变量解析模型提供商配置
    支持两种格式：
    1. 单一模型（旧兼容）: GLM_API_KEY=xxx -> [{"name": "glm", "api_key": "xxx", "priority": 50}]
    2. 数组配置（推荐）: LLM_PROVIDERS='[{"name":"glm","api_key":"xxx","priority":50}]'
    """
    providers = []
    
    # 优先读取数组配置
    providers_env = os.environ.get("LLM_PROVIDERS", "")
    if providers_env:
        try:
            providers = json.loads(providers_env)
            return providers
        except json.JSONDecodeError:
            pass
    
    # 兼容旧的单一配置方式
    glm_key = os.environ.get("GLM_API_KEY", "")
    if glm_key:
        providers.append({
            "name": "glm",
            "api_key": glm_key,
            "base_url": os.environ.get("GLM_BASE_URL", "https://open.bigmodel.cn/api/paas/v4"),
            "priority": int(os.environ.get("GLM_PRIORITY", 50)),
            "enabled": True
        })
    
    deepseek_key = os.environ.get("DEEPSEEK_API_KEY", "")
    if deepseek_key:
        providers.append({
            "name": "deepseek",
            "api_key": deepseek_key,
            "base_url": os.environ.get("DEEPSEEK_BASE_URL", "https://api.deepseek.com"),
            "priority": int(os.environ.get("DEEPSEEK_PRIORITY", 100)),
            "enabled": True
        })
    
    openai_key = os.environ.get("OPENAI_API_KEY", "")
    if openai_key:
        providers.append({
            "name": "openai",
            "api_key": openai_key,
            "base_url": os.environ.get("OPENAI_BASE_URL", "https://api.openai.com/v1"),
            "priority": int(os.environ.get("OPENAI_PRIORITY", 80)),
            "enabled": True
        })
    
    anthropic_key = os.environ.get("ANTHROPIC_API_KEY", "")
    if anthropic_key:
        providers.append({
            "name": "anthropic",
            "api_key": anthropic_key,
            "base_url": "https://api.anthropic.com/v1",
            "priority": int(os.environ.get("ANTHROPIC_PRIORITY", 90)),
            "enabled": True
        })
    
    return providers


class Settings(BaseSettings):
    # MCP服务配置
    # 核心开关：是否开启共享模式
    MCP_MEMORY_SHARED: bool = False
    
    # 自动识别的项目ID (也可以通过环境变量覆盖)
    MCP_PROJECT_ID: str = get_current_project_id()
    
    # 存储路径
    CHROMA_DATA_PATH: str = os.path.join(os.path.expanduser("~"), ".mcp_memory", "chroma")
    
    # 记忆语言设置 (默认: 简体中文)
    MCP_MEMORY_LANGUAGE: str = "简体中文"

    # 多模型配置（数组方式）
    LLM_PROVIDERS: str = ""
    _providers_cache: Optional[List[Dict[str, Any]]] = None

    @property
    def providers(self) -> List[Dict[str, Any]]:
        """获取模型提供商配置列表"""
        if self._providers_cache is None:
            self._providers_cache = parse_providers_from_env()
        return self._providers_cache

    # 向后兼容：直接读取环境变量
    @property
    def GLM_API_KEY(self) -> str:
        return os.environ.get("GLM_API_KEY", "")
    
    @property
    def DEEPSEEK_API_KEY(self) -> str:
        return os.environ.get("DEEPSEEK_API_KEY", "")
    
    @property
    def OPENAI_API_KEY(self) -> str:
        return os.environ.get("OPENAI_API_KEY", "")
    
    @property
    def ANTHROPIC_API_KEY(self) -> str:
        return os.environ.get("ANTHROPIC_API_KEY", "")

    # 首选模型（兼容旧配置）
    MCP_LLM_PROVIDER: str = "glm"

    # Token 池配置
    TOKEN_POOL_DAILY_LIMIT: int = 100000
    TOKEN_POOL_MONTHLY_LIMIT: int = 1000000

    # 自我进化调度配置
    MCP_EVOLUTION_ENABLED: bool = True
    MCP_EVOLUTION_SCAN_INTERVAL_SECONDS: int = 300
    MCP_EVOLUTION_REFLECTION_INTERVAL_SECONDS: int = 1800
    MCP_EVOLUTION_SCAN_BATCH_SIZE: int = 50
    MCP_EVOLUTION_REFLECTION_USER_ID: str = "system_evolution"
    MCP_EVOLUTION_PROFILE: str = "standard"
    MCP_EVOLUTION_ADAPTIVE: bool = True

    class Config:
        env_file = ".env"
        env_file_encoding = 'utf-8'
        extra = 'ignore'  # 忽略未定义的环境变量

settings = Settings()
