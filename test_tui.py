#!/usr/bin/env python3
"""
TUI测试脚本
"""

import sys
import os

# 添加项目根目录到Python路径
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

def test_imports():
    """测试导入是否正常"""
    try:
        from mcp_memory.tui import TUIApp, main
        print("✓ TUI导入成功")
        return True
    except ImportError as e:
        print(f"✗ TUI导入失败: {e}")
        return False

def test_dependencies():
    """测试依赖是否安装"""
    dependencies = ['textual', 'rich', 'click']
    all_ok = True

    for dep in dependencies:
        try:
            __import__(dep)
            print(f"✓ {dep} 已安装")
        except ImportError:
            print(f"✗ {dep} 未安装")
            all_ok = False

    return all_ok

def test_memory_manager():
    """测试记忆管理器集成"""
    try:
        from mcp_memory.memory.manager import MemoryManager
        from mcp_memory.core.config import settings

        # 创建记忆管理器
        manager = MemoryManager()
        print("✓ MemoryManager 创建成功")

        return True
    except Exception as e:
        print(f"✗ MemoryManager 测试失败: {e}")
        return False

def test_tui_cli():
    """测试TUI CLI命令"""
    try:
        from mcp_memory.tui_cli import app
        print("✓ TUI CLI 导入成功")
        return True
    except Exception as e:
        print(f"✗ TUI CLI 测试失败: {e}")
        return False

def main():
    """主测试函数"""
    print("开始测试TUI功能...")
    print("=" * 50)

    tests = [
        ("依赖检查", test_dependencies),
        ("模块导入", test_imports),
        ("记忆管理器", test_memory_manager),
        ("TUI CLI", test_tui_cli),
    ]

    results = []
    for name, test_func in tests:
        print(f"\n测试 {name}:")
        result = test_func()
        results.append((name, result))

    print("\n" + "=" * 50)
    print("测试结果汇总:")

    all_passed = True
    for name, result in results:
        status = "✓ 通过" if result else "✗ 失败"
        print(f"  {name}: {status}")
        if not result:
            all_passed = False

    if all_passed:
        print("\n🎉 所有测试通过！TUI功能已准备就绪。")
        print("\n使用方法:")
        print("  python3 -m mcp_memory.tui_cli")
        print("  或者")
        print("  mcp-memory-tui")
    else:
        print("\n❌ 部分测试失败，请检查错误信息。")

    return all_passed

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)