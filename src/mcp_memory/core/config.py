import os
import hashlib
from pydantic_settings import BaseSettings
from typing import Optional

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

    # DeepSeek 配置 (用于认知增强：总结、分类)
    DEEPSEEK_API_KEY: Optional[str] = None
    DEEPSEEK_BASE_URL: str = "https://api.deepseek.com"

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

settings = Settings()
