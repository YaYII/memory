"""
Pytest 共享 fixtures。
所有测试文件自动可访问这些 fixture，无需重复导入。
"""

import os
import sys
import tempfile
import pytest

# 确保 src 在 sys.path 中
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "src"))


@pytest.fixture
def temp_chroma_path():
    """提供临时 ChromaDB 路径，测试后自动清理。"""
    with tempfile.TemporaryDirectory() as tmpdir:
        yield os.path.join(tmpdir, "chroma")


@pytest.fixture
def clean_env():
    """清除可能干扰测试的环境变量。"""
    env_keys = [
        "MCP_MEMORY_API_KEY",
        "MCP_MEMORY_PORT",
        "MCP_MEMORY_HOST",
        "CHROMA_DATA_PATH",
        "DEEPSEEK_API_KEY",
        "OPENAI_API_KEY",
        "ANTHROPIC_API_KEY",
        "GLM_API_KEY",
        "LLM_PROVIDERS",
    ]
    saved = {}
    for key in env_keys:
        saved[key] = os.environ.pop(key, None)
    yield
    for key, value in saved.items():
        if value is not None:
            os.environ[key] = value
