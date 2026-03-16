#!/usr/bin/env python3
"""
TUI演示脚本
展示TUI的基本功能，无需完整依赖
"""

import asyncio
from typing import List, Dict, Any
from datetime import datetime

class MockMemoryItem:
    """模拟记忆项目"""
    def __init__(self, title: str, content: str, memory_type: str = "note"):
        self.id = f"mem_{id(self)}"
        self.title = title
        self.content = content
        self.content_type = memory_type
        self.keywords = []
        self.tags = []
        self.timestamp = datetime.now()
        self.char_count = len(content)
        self.user_id = "demo_user"
        self.project_id = "demo_project"
        self.importance = 1.0

class MockMemoryManager:
    """模拟记忆管理器"""
    def __init__(self):
        self.memories: List[MockMemoryItem] = []

        # 创建一些示例记忆
        sample_memories = [
            ("项目启动", "今天开始了新的AI记忆系统项目，使用MCP协议作为基础架构。", "note"),
            ("设计思路", "系统需要支持个体记忆和集体记忆，具备生物本能特征。", "idea"),
            ("TODO任务", "实现TUI界面，支持文本交互操作记忆系统。", "task"),
            ("会议记录", "讨论了记忆存储的分层架构，使用ChromaDB作为向量存储。", "meeting"),
            ("代码片段", "class MemoryManager:\\n    def __init__(self):\\n        self.store = MemoryStore()", "code")
        ]

        for title, content, memory_type in sample_memories:
            memory = MockMemoryItem(title, content, memory_type)
            memory.keywords = title.lower().split()
            self.memories.append(memory)

    def get_memories(self, user_id: str = None, project_id: str = None) -> List[MockMemoryItem]:
        return self.memories

class SimpleTUIDemo:
    """简单的TUI演示"""

    def __init__(self):
        self.memory_manager = MockMemoryManager()
        self.current_memory = None
        self.running = True

    def show_header(self):
        """显示头部"""
        print("=" * 60)
        print("🧠 MCP Memory System - TUI 演示")
        print("=" * 60)
        print(f"用户: demo_user | 项目: demo_project")
        print("-" * 60)

    def show_menu(self):
        """显示主菜单"""
        print("\n主菜单:")
        print("1. 📋 查看记忆列表")
        print("2. 🔍 搜索记忆")
        print("3. ➕ 新建记忆")
        print("4. 📊 统计信息")
        print("5. 🤖 AI助手")
        print("6. ⚙️ 设置")
        print("0. 🚪 退出")
        print("-" * 60)

    def show_memory_list(self):
        """显示记忆列表"""
        memories = self.memory_manager.get_memories()

        print("\n📋 记忆列表:")
        print("-" * 60)
        for i, memory in enumerate(memories, 1):
            print(f"{i:2d}. [{memory.content_type:^8}] {memory.title}")
        print("-" * 60)

    def search_memories(self):
        """搜索记忆"""
        keyword = input("\n🔍 输入搜索关键词: ").strip()

        if not keyword:
            print("请输入搜索关键词！")
            return

        memories = self.memory_manager.get_memories()
        results = [m for m in memories if keyword.lower() in m.title.lower() or keyword.lower() in m.content.lower()]

        if results:
            print(f"\n🔍 搜索结果 (共 {len(results)} 条):")
            print("-" * 60)
            for i, memory in enumerate(results, 1):
                print(f"{i:2d}. [{memory.content_type:^8}] {memory.title}")
            print("-" * 60)
        else:
            print("❌ 没有找到匹配的记忆。")

    def create_memory(self):
        """创建新记忆"""
        print("\n➕ 创建新记忆")
        print("-" * 60)

        title = input("标题: ").strip()
        if not title:
            print("标题不能为空！")
            return

        content = input("内容: ").strip()
        if not content:
            print("内容不能为空！")
            return

        print("类型 (note/task/idea/meeting/code): ")
        memory_type = input("(默认: note): ").strip() or "note"

        # 创建记忆
        memory = MockMemoryItem(title, content, memory_type)
        memory.keywords = title.lower().split()
        self.memory_manager.memories.append(memory)

        print(f"✅ 记忆已保存！ID: {memory.id}")

    def show_statistics(self):
        """显示统计信息"""
        memories = self.memory_manager.get_memories()

        # 按类型统计
        type_count = {}
        for memory in memories:
            type_count[memory.content_type] = type_count.get(memory.content_type, 0) + 1

        print("\n📊 统计信息")
        print("-" * 60)
        print(f"总记忆数: {len(memories)}")
        print("\n按类型分布:")
        for mtype, count in type_count.items():
            print(f"  {mtype}: {count}")
        print("-" * 60)

    def ai_assistant(self):
        """AI助手演示"""
        print("\n🤖 AI助手")
        print("-" * 60)
        print("AI: 你好！我是你的记忆助手。")
        print("AI: 今天有 5 条记忆，包括 1 个任务和 1 个想法。")
        print("AI: 你想了解什么？")
        print("\n可用功能:")
        print("1. 总结今日记忆")
        print("2. 搜索相关记忆")
        print("3. 生成灵感")
        print("4. 智能问答")
        print("0. 返回")

        choice = input("\n选择功能: ").strip()

        if choice == "1":
            print("\nAI: 今日记忆总结:")
            print("- 完成了项目启动，开始AI记忆系统开发")
            print("- 设计了分层架构，支持个体和集体记忆")
            print("- 实现了TUI界面，提供良好的交互体验")
        elif choice == "2":
            print("\nAI: 请告诉我你想搜索什么？")
        elif choice == "3":
            print("\nAI: 基于你的记忆，我建议:")
            print("- 考虑添加记忆的优先级管理")
            print("- 可以实现记忆之间的关联分析")
            print("- 建议添加定期回顾功能")
        elif choice == "4":
            print("\nAI: 请输入你的问题...")
        elif choice == "0":
            return

    def run(self):
        """运行演示"""
        while self.running:
            self.show_header()
            self.show_menu()

            try:
                print("\n提示: 在终端中直接输入选择，或使用 Ctrl+C 退出")
                choice = input("请选择操作 (0-6): ").strip()

                if choice == "1":
                    self.show_memory_list()
                elif choice == "2":
                    self.search_memories()
                elif choice == "3":
                    self.create_memory()
                elif choice == "4":
                    self.show_statistics()
                elif choice == "5":
                    self.ai_assistant()
                elif choice == "6":
                    print("\n⚙️ 设置功能开发中...")
                elif choice == "0":
                    print("\n👋 感谢使用记忆系统！")
                    self.running = False
                else:
                    print("❌ 无效选择，请重试。")

                if self.running:
                    print("\n按 Enter 继续...")
                    try:
                        input()
                    except (EOFError, KeyboardInterrupt):
                        print("\n\n👋 感谢使用记忆系统！")
                        self.running = False

            except KeyboardInterrupt:
                print("\n\n👋 感谢使用记忆系统！")
                self.running = False

def main():
    """主函数"""
    print("🚀 启动TUI演示...")

    demo = SimpleTUIDemo()
    demo.run()

if __name__ == "__main__":
    main()