#!/usr/bin/env python3
"""
环境检查脚本 - 确保TUI可以正常运行
"""

import sys
import os
import subprocess

def check_python_version():
    """检查Python版本"""
    version = sys.version_info
    print(f"Python版本: {version.major}.{version.minor}.{version.micro}")

    if version.major < 3 or (version.major == 3 and version.minor < 8):
        print("❌ Python版本过低，需要3.8或更高版本")
        return False
    else:
        print("✅ Python版本符合要求")
        return True

def check_packages():
    """检查必需包是否安装"""
    required_packages = {
        'textual': 'textual>=0.47.0',
        'rich': 'rich>=13.0.0',
        'click': 'click>=8.0.0',
        'typer': 'typer>=0.9.0',
        'fastapi': 'fastapi>=0.100.0',
    }

    optional_packages = {
        'chromadb': 'chromadb>=0.4.0',
        'jieba': 'jieba>=0.42.0',
        'httpx': 'httpx>=0.25.0',
    }

    print("\n检查依赖包...")
    print("-" * 50)

    all_ok = True
    missing_required = []
    missing_optional = []

    # 检查必需包
    for package, requirement in required_packages.items():
        try:
            __import__(package.replace("-", "_"))
            print(f"✅ {package} 已安装")
        except ImportError:
            print(f"❌ {package} 未安装")
            missing_required.append(package)
            all_ok = False

    # 检查可选包
    for package, requirement in optional_packages.items():
        try:
            __import__(package.replace("-", "_"))
            print(f"✅ {package} (可选) 已安装")
        except ImportError:
            print(f"⚠️  {package} (可选) 未安装")
            missing_optional.append(package)

    return all_ok, missing_required, missing_optional

def check_memory_structure():
    """检查项目结构"""
    print("\n检查项目结构...")
    print("-" * 50)

    required_paths = [
        'src/mcp_memory',
        'src/mcp_memory/tui',
        'src/mcp_memory/tui/__init__.py',
        'src/mcp_memory/tui/tui_style.css',
        'src/mcp_memory/tui/advanced_features.py',
        'src/mcp_memory/tui_cli.py',
        'src/mcp_memory/memory/manager.py',
        'src/mcp_memory/core/config.py',
    ]

    all_ok = True
    for path in required_paths:
        full_path = f"/Users/yingyang/Documents/project/memory/{path}"
        if os.path.exists(full_path):
            print(f"✅ {path}")
        else:
            print(f"❌ {path}")
            all_ok = False

    return all_ok

def install_packages(packages):
    """安装包"""
    if not packages:
        return

    print(f"\n安装缺失的包: {', '.join(packages)}")
    print("-" * 50)

    for package in packages:
        try:
            print(f"安装 {package}...")
            subprocess.check_call([sys.executable, '-m', 'pip', 'install', package])
            print(f"✅ {package} 安装成功")
        except subprocess.CalledProcessError as e:
            print(f"❌ {package} 安装失败: {e}")

def check_setup():
    """完整的环境检查"""
    print("🔍 Memory System 环境检查")
    print("=" * 60)

    # 检查Python版本
    python_ok = check_python_version()

    # 检查依赖包
    packages_ok, missing_required, missing_optional = check_packages()

    # 检查项目结构
    structure_ok = check_memory_structure()

    # 安装缺失的包
    if not packages_ok and missing_required:
        print("\n⚠️  发现缺失的必需依赖，尝试自动安装...")
        install_packages(missing_required)

        # 重新检查
        print("\n重新检查依赖...")
        packages_ok, missing_required, missing_optional = check_packages()

    # 显示结果
    print("\n" + "=" * 60)
    print("检查结果:")

    if python_ok and packages_ok and structure_ok:
        print("🎉 环境检查通过！TUI已准备就绪。")
        print("\n启动方法:")
        print("  memory tui")
        print("  或")
        print("  python3 -m mcp_memory.tui_cli")
        return True
    else:
        print("❌ 环境检查失败，请修复以下问题:")

        if not python_ok:
            print("  - Python版本需要3.8或更高")

        if missing_required:
            print("  - 缺失必需包:")
            for pkg in missing_required:
                print(f"    * {pkg}")

        if missing_optional:
            print("  - 缺失可选包（功能可能受限）:")
            for pkg in missing_optional:
                print(f"    * {pkg}")

        if not structure_ok:
            print("  - 项目文件缺失")

        return False

def main():
    """主函数"""
    success = check_setup()

    if success:
        print("\n🚀 现在可以启动TUI了！")
        print("试试运行:")
        print("  memory tui")
    else:
        print("\n💡 请按提示修复问题后重试。")

    return success

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)