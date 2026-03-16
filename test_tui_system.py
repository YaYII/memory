#!/usr/bin/env python3
"""
TUI系统功能测试脚本
验证TUI是否能正确连接到后端并执行基本操作
"""

import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from datetime import datetime

def test_basic_imports():
    """测试基础模块导入"""
    print("✓ 测试基础模块导入...")
    try:
        from mcp_memory.memory.manager import MemoryManager
        from mcp_memory.core.config import settings
        print("  ✓ MemoryManager 导入成功")
        print("  ✓ 配置模块导入成功")
        return True
    except Exception as e:
        print(f"  ✗ 导入失败: {e}")
        return False

def test_memory_manager():
    """测试记忆管理器初始化"""
    print("\n✓ 测试记忆管理器初始化...")
    try:
        from mcp_memory.memory.manager import MemoryManager
        manager = MemoryManager()
        print("  ✓ 记忆管理器初始化成功")
        print(f"  ✓ 存储路径: {manager.store.data_path}")
        return manager
    except Exception as e:
        print(f"  ✗ 初始化失败: {e}")
        return None

def test_memory_operations(manager):
    """测试记忆操作"""
    print("\n✓ 测试记忆操作...")
    
    # 测试写入
    print("  测试写入记忆...")
    try:
        memory_id = manager.write_memory(
            user_id="test_user",
            content="这是一个测试记忆，用于验证TUI系统功能。",
            title="TUI测试记忆",
            keywords=["测试", "TUI", "验证"],
            tags=["临时", "验证"]
        )
        print(f"  ✓ 写入成功，ID: {memory_id}")
    except Exception as e:
        print(f"  ✗ 写入失败: {e}")
        return False
    
    # 测试读取
    print("  测试读取记忆...")
    try:
        results = manager.read_memory(
            user_id="test_user",
            query="TUI测试",
            limit=5
        )
        print(f"  ✓ 读取成功，找到 {len(results) if isinstance(results, list) else 1} 条记忆")
        if results:
            # 处理返回数据（可能是list或dict）
            if isinstance(results, list):
                result = results[0] if results else {}
            else:
                result = results
            # 安全获取字段
            print(f"  ✓ 记忆标题: {result.get('title', 'N/A') if isinstance(result, dict) else 'N/A'}")
            content = result.get('content', 'N/A') if isinstance(result, dict) else str(result)
            print(f"  ✓ 记忆内容: {content[:50] if isinstance(content, str) else content}...")
            print(f"  ✓ 关键词: {result.get('keywords', []) if isinstance(result, dict) else []}")
            print(f"  ✓ 标签: {result.get('tags', []) if isinstance(result, dict) else []}")
    except Exception as e:
        print(f"  ✗ 读取失败: {e}")
        return False
    
    # 测试列表
    print("  测试列出记忆...")
    try:
        from mcp_memory.memory.long_term import MemoryStore
        memories = manager.store.get_memories(user_id="test_user", limit=10)
        print(f"  ✓ 列表成功，共 {len(memories)} 条记忆")
    except Exception as e:
        print(f"  ✗ 列表失败: {e}")
        return False
    
    return True

def test_tui_components():
    """测试TUI组件"""
    print("\n✓ 测试TUI组件...")
    try:
        # 检查Textual是否安装
        import textual
        print(f"  ✓ Textual 版本: {textual.__version__}")
        
        # 检查Rich是否安装（不检查版本）
        import rich
        print("  ✓ Rich 模块已安装")
        
        # 检查TUI模块
        from mcp_memory import tui
        print("  ✓ TUI模块导入成功")
        
        return True
    except Exception as e:
        print(f"  ✗ TUI组件测试失败: {e}")
        return False

def main():
    """运行所有测试"""
    print("=" * 60)
    print("MCP Memory TUI 系统测试")
    print("=" * 60)
    print(f"测试时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print()
    
    results = []
    
    # 测试基础导入
    results.append(("基础模块导入", test_basic_imports()))
    
    # 测试记忆管理器
    manager = test_memory_manager()
    results.append(("记忆管理器初始化", manager is not None))
    
    if manager:
        # 测试记忆操作
        results.append(("记忆操作", test_memory_operations(manager)))
    
    # 测试TUI组件
    results.append(("TUI组件", test_tui_components()))
    
    # 输出测试结果
    print("\n" + "=" * 60)
    print("测试结果汇总:")
    print("=" * 60)
    
    all_passed = True
    for name, passed in results:
        status = "✓ 通过" if passed else "✗ 失败"
        print(f"{name:20} {status}")
        if not passed:
            all_passed = False
    
    print("=" * 60)
    if all_passed:
        print("✓ 所有测试通过！TUI系统已准备就绪。")
        print("\n启动TUI方式:")
        print("  方式1: ./start_tui.sh")
        print("  方式2: .venv/bin/python -m src.mcp_memory.tui_cli interactive")
        print("\n查看TUI使用指南: cat TUI_GUIDE.md")
    else:
        print("✗ 部分测试失败，请检查上述错误信息。")
    
    print("=" * 60)
    
    return 0 if all_passed else 1

if __name__ == "__main__":
    sys.exit(main())