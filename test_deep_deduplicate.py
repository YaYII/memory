#!/usr/bin/env python3
"""
测试深度去重功能
"""

import sys
import os
import asyncio

# 添加项目路径
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'src'))

from mcp_memory.memory.manager import MemoryManager

print("测试深度去重功能...")

async def test_deep_deduplicate():
    try:
        # 创建MemoryManager实例
        manager = MemoryManager()
        print("✅ MemoryManager初始化成功")
        
        # 调用深度去重
        result = await manager.store.deep_deduplicate(user_id="cli_user", threshold=0.8)
        print(f"✅ 深度去重完成: {result}")
        
        print("测试成功！")
        
    except Exception as e:
        print(f"❌ 测试失败: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    asyncio.run(test_deep_deduplicate())
