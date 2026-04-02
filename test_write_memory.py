#!/usr/bin/env python3
"""
测试写入记忆功能
"""

import sys
import os

# 添加项目路径
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'src'))

from mcp_memory.memory.manager import MemoryManager
from mcp_memory.models.data_models import MemoryItem
from datetime import datetime

print("测试写入记忆功能...")

try:
    # 创建MemoryManager实例
    manager = MemoryManager()
    print("✅ MemoryManager初始化成功")
    
    # 创建MemoryItem
    memory = MemoryItem(
        content="测试记忆内容1",
        user_id="cli_user",
        scope="project",
        project_id="",
        is_shared=False,
        title="测试1"
    )
    print(f"✅ MemoryItem创建成功，ID: {memory.memory_id}")
    
    # 调用save方法
    memory_id = manager.store.save(memory)
    print(f"✅ 记忆保存成功，ID: {memory_id}")
    
    print("测试成功！")
    
except Exception as e:
    print(f"❌ 测试失败: {e}")
    import traceback
    traceback.print_exc()
