#!/usr/bin/env python3
"""
MCP Memory System - AI 集成示例

本示例展示了如何将记忆系统与 AI/LLM 集成使用
"""

import sys
import json
from pathlib import Path
from typing import List, Dict, Any, Optional

# 添加项目路径
project_root = Path(__file__).parent.parent
sys.path.insert(0, str(project_root / "src"))

from mcp_memory import MemoryClient


class AIAssistant:
    """
    带有记忆能力的 AI 助手示例
    """
    
    def __init__(self, user_id: str = "ai_assistant"):
        self.user_id = user_id
        self.client = MemoryClient(mode="local")
        self.conversation_history: List[Dict] = []
        
    def __enter__(self):
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.client.close()
    
    def remember_conversation(self, user_input: str, ai_response: str):
        """
        记录对话到记忆系统
        """
        content = f"用户: {user_input}\nAI: {ai_response}"
        
        result = self.client.write_memory(
            user_id=self.user_id,
            content=content,
            title=f"对话: {user_input[:30]}...",
            tags=["对话", "AI交互"],
            keywords=["对话", "AI"],
            scope="project"
        )
        
        self.conversation_history.append({
            "user": user_input,
            "ai": ai_response,
            "memory_id": result.get("id")
        })
        
        return result
    
    def recall_context(self, query: str, top_k: int = 5) -> List[Dict]:
        """
        从记忆中检索相关上下文
        """
        memories = self.client.read_memory(
            user_id=self.user_id,
            query=query,
            limit=top_k
        )
        return memories
    
    def build_context_prompt(self, query: str) -> str:
        """
        构建包含记忆上下文的提示词
        """
        memories = self.recall_context(query)
        
        context_parts = ["以下是相关的历史记忆：\n"]
        
        for i, mem in enumerate(memories, 1):
            context_parts.append(f"{i}. {mem.get('title', '无标题')}")
            context_parts.append(f"   {mem.get('content', '')[:200]}...\n")
        
        context_parts.append(f"\n当前问题：{query}")
        
        return "\n".join(context_parts)
    
    def save_preference(self, key: str, value: str):
        """
        保存用户偏好
        """
        content = f"用户偏好: {key} = {value}"
        
        return self.client.write_memory(
            user_id=self.user_id,
            content=content,
            title=f"偏好设置: {key}",
            tags=["偏好", "设置"],
            keywords=["偏好", key],
            scope="global"
        )
    
    def get_preference(self, key: str) -> Optional[str]:
        """
        获取用户偏好
        """
        memories = self.client.read_memory(
            user_id=self.user_id,
            query=f"偏好 {key}",
            limit=3
        )
        
        for mem in memories:
            content = mem.get("content", "")
            if key in content:
                # 简单解析偏好值
                if "=" in content:
                    return content.split("=")[1].strip()
        
        return None
    
    def save_skill(self, name: str, description: str, steps: List[str]):
        """
        保存技能/知识
        """
        content = f"技能: {name}\n描述: {description}\n步骤:\n"
        for i, step in enumerate(steps, 1):
            content += f"  {i}. {step}\n"
        
        return self.client.write_memory(
            user_id=self.user_id,
            content=content,
            title=f"技能: {name}",
            tags=["技能", "知识"],
            keywords=["技能", name],
            memory_type="skill",
            scope="global"
        )
    
    def get_skills(self, query: str = "") -> List[Dict]:
        """
        获取技能列表
        """
        # 先尝试搜索
        if query:
            return self.client.read_memory(
                user_id=self.user_id,
                query=query,
                limit=10,
                memory_type="skill"
            )
        
        # 否则列出所有技能
        result = self.client.list_memories(limit=50)
        items = result.get("items", [])
        
        # 过滤技能类型
        skills = [item for item in items if item.get("memory_type") == "skill"]
        return skills
    
    def reflect_and_improve(self):
        """
        触发反思，提升记忆质量
        """
        return self.client.reflect(self.user_id)
    
    def get_stats(self) -> Dict[str, Any]:
        """
        获取统计信息
        """
        return self.client.get_stats()


def example_basic_conversation():
    """
    示例 1: 基本对话记忆
    """
    print("\n" + "="*60)
    print("示例 1: 基本对话记忆")
    print("="*60)
    
    with AIAssistant(user_id="example_user") as assistant:
        # 记录对话
        assistant.remember_conversation(
            "你好，我想学习 Python",
            "好的！Python 是一种很棒的编程语言，我可以帮助你学习。"
        )
        
        assistant.remember_conversation(
            "如何安装 Python？",
            "你可以从 python.org 下载安装包，或者使用包管理器。"
        )
        
        # 检索相关记忆
        context = assistant.build_context_prompt("Python 学习")
        print("\n构建的上下文提示词：")
        print(context)


def example_preferences():
    """
    示例 2: 用户偏好管理
    """
    print("\n" + "="*60)
    print("示例 2: 用户偏好管理")
    print("="*60)
    
    with AIAssistant(user_id="example_user") as assistant:
        # 保存偏好
        assistant.save_preference("编程语言", "Python")
        assistant.save_preference("主题", "深色")
        assistant.save_preference("回复风格", "简洁")
        
        # 获取偏好
        lang = assistant.get_preference("编程语言")
        print(f"\n编程语言偏好: {lang}")
        
        theme = assistant.get_preference("主题")
        print(f"主题偏好: {theme}")


def example_skills():
    """
    示例 3: 技能/知识管理
    """
    print("\n" + "="*60)
    print("示例 3: 技能/知识管理")
    print("="*60)
    
    with AIAssistant(user_id="example_user") as assistant:
        # 保存技能
        assistant.save_skill(
            name="创建 Python 虚拟环境",
            description="使用 venv 模块创建 Python 虚拟环境",
            steps=[
                "打开终端/命令行",
                "运行: python -m venv myenv",
                "激活虚拟环境 (Windows): myenv\\Scripts\\activate",
                "激活虚拟环境 (Mac/Linux): source myenv/bin/activate"
            ]
        )
        
        assistant.save_skill(
            name="Git 提交代码",
            description="基本的 Git 提交流程",
            steps=[
                "git status - 查看状态",
                "git add . - 添加所有文件",
                'git commit -m "提交信息" - 提交更改',
                "git push - 推送到远程仓库"
            ]
        )
        
        # 获取技能
        skills = assistant.get_skills()
        print(f"\n已保存 {len(skills)} 个技能:")
        for skill in skills:
            print(f"  - {skill.get('title')}")
        
        # 搜索特定技能
        git_skills = assistant.get_skills("Git")
        print(f"\n找到 {len(git_skills)} 个 Git 相关技能")


def example_context_retrieval():
    """
    示例 4: 上下文检索
    """
    print("\n" + "="*60)
    print("示例 4: 上下文检索")
    print("="*60)
    
    with AIAssistant(user_id="example_user") as assistant:
        # 先保存一些记忆
        assistant.remember_conversation(
            "我的项目使用 FastAPI",
            "好的，FastAPI 是一个现代、快速的 Web 框架。"
        )
        
        assistant.remember_conversation(
            "数据库配置在 config.py 文件中",
            "记住了，数据库配置文件是 config.py。"
        )
        
        # 检索相关记忆
        memories = assistant.recall_context("数据库配置")
        print(f"\n找到 {len(memories)} 条相关记忆:")
        for mem in memories:
            print(f"\n标题: {mem.get('title')}")
            print(f"内容: {mem.get('content', '')[:100]}...")


def example_stats():
    """
    示例 5: 统计信息
    """
    print("\n" + "="*60)
    print("示例 5: 统计信息")
    print("="*60)
    
    with AIAssistant(user_id="example_user") as assistant:
        stats = assistant.get_stats()
        print("\n系统统计:")
        print(f"  总记忆数: {stats.get('memory_count', 0)}")
        print(f"  存储层: {stats.get('tiered_breakdown', {}).get('storage', 0)}")
        print(f"  思维层: {stats.get('tiered_breakdown', {}).get('thinking', 0)}")
        print(f"  技能层: {stats.get('tiered_breakdown', {}).get('skill', 0)}")


def main():
    """
    主函数：运行所有示例
    """
    print("="*60)
    print("  MCP Memory System - AI 集成示例")
    print("="*60)
    
    examples = [
        ("基本对话记忆", example_basic_conversation),
        ("用户偏好管理", example_preferences),
        ("技能/知识管理", example_skills),
        ("上下文检索", example_context_retrieval),
        ("统计信息", example_stats),
    ]
    
    print("\n可用示例:")
    for i, (name, _) in enumerate(examples, 1):
        print(f"  {i}. {name}")
    print("  0. 运行所有示例")
    print("  q. 退出")
    
    choice = input("\n请选择 (0-{} 或 q): ".format(len(examples))).strip()
    
    if choice == "q":
        print("退出")
        return
    elif choice == "0":
        for _, func in examples:
            try:
                func()
            except Exception as e:
                print(f"示例运行出错: {e}")
    elif choice.isdigit() and 1 <= int(choice) <= len(examples):
        idx = int(choice) - 1
        _, func = examples[idx]
        try:
            func()
        except Exception as e:
            print(f"示例运行出错: {e}")
    else:
        print("无效选择")
    
    print("\n" + "="*60)
    print("  示例运行完成！")
    print("="*60)


if __name__ == "__main__":
    main()
