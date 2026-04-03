#!/usr/bin/env python3
"""
分析并整理记忆系统中的记忆
"""

import sys
import os
import json

# 添加项目路径
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'src'))

from mcp_memory.memory.manager import MemoryManager
from mcp_memory.models.data_models import MemoryItem

print("开始分析记忆系统...")

try:
    # 创建MemoryManager实例
    manager = MemoryManager()
    print("✅ MemoryManager初始化成功")
    
    # 获取所有记忆
    print("\n📊 正在获取所有记忆...")
    all_memories = manager.store.collection.get()
    
    total_count = len(all_memories.get("ids", []))
    print(f"✅ 总记忆数: {total_count}")
    
    # 按类型分类统计
    storage_count = 0
    thinking_count = 0
    skill_count = 0
    other_count = 0
    
    memories_by_type = {
        "storage": [],
        "thinking": [],
        "skill": [],
        "other": []
    }
    
    ids = all_memories.get("ids", [])
    metadatas = all_memories.get("metadatas", [])
    documents = all_memories.get("documents", [])
    
    for i, mem_id in enumerate(ids):
        meta = metadatas[i] if i < len(metadatas) else {}
        mem_type = meta.get("memory_type", "unknown")
        title = meta.get("title", "")
        user_id = meta.get("user_id", "")
        
        mem_info = {
            "id": mem_id,
            "title": title,
            "user_id": user_id,
            "timestamp": meta.get("timestamp", ""),
            "content": documents[i] if i < len(documents) else ""
        }
        
        if mem_type == "storage":
            storage_count += 1
            memories_by_type["storage"].append(mem_info)
        elif mem_type == "thinking":
            thinking_count += 1
            memories_by_type["thinking"].append(mem_info)
        elif mem_type == "skill":
            skill_count += 1
            memories_by_type["skill"].append(mem_info)
        else:
            other_count += 1
            memories_by_type["other"].append(mem_info)
    
    print(f"\n📋 记忆类型统计:")
    print(f"   Storage: {storage_count}")
    print(f"   Thinking: {thinking_count}")
    print(f"   Skill: {skill_count}")
    print(f"   Other: {other_count}")
    
    # 按用户统计
    print(f"\n👥 按用户统计:")
    user_stats = {}
    for i, mem_id in enumerate(ids):
        meta = metadatas[i] if i < len(metadatas) else {}
        user_id = meta.get("user_id", "unknown")
        if user_id not in user_stats:
            user_stats[user_id] = 0
        user_stats[user_id] += 1
    
    for user_id, count in user_stats.items():
        print(f"   {user_id}: {count}")
    
    # 查找测试记忆
    print(f"\n🧪 查找测试记忆...")
    test_memories = []
    for i, mem_id in enumerate(ids):
        meta = metadatas[i] if i < len(metadatas) else {}
        title = meta.get("title", "")
        content = documents[i] if i < len(documents) else ""
        if "测试" in title or "test" in title.lower() or "测试" in content or "test" in content.lower():
            test_memories.append({
                "id": mem_id,
                "title": title,
                "user_id": meta.get("user_id", "")
            })
    
    print(f"   找到 {len(test_memories)} 条测试记忆")
    for mem in test_memories:
        print(f"     - {mem['id'][:12]}: {mem['title']} (用户: {mem['user_id']})")
    
    # 查找Python编码规范相关记忆
    print(f"\n🐍 查找Python编码规范记忆...")
    python_memories = []
    for i, mem_id in enumerate(ids):
        meta = metadatas[i] if i < len(metadatas) else {}
        title = meta.get("title", "")
        content = documents[i] if i < len(documents) else ""
        if "Python" in title or "python" in title.lower() or "编码" in title or "规范" in title:
            python_memories.append({
                "id": mem_id,
                "title": title,
                "user_id": meta.get("user_id", ""),
                "memory_type": meta.get("memory_type", "")
            })
    
    print(f"   找到 {len(python_memories)} 条Python编码规范相关记忆")
    for mem in python_memories[:10]:  # 只显示前10条
        print(f"     - {mem['id'][:12]}: {mem['title']} (类型: {mem['memory_type']})")
    if len(python_memories) > 10:
        print(f"     ... 还有 {len(python_memories) - 10} 条")
    
    # 保存分析结果到文件
    analysis_result = {
        "total_count": total_count,
        "by_type": {
            "storage": storage_count,
            "thinking": thinking_count,
            "skill": skill_count,
            "other": other_count
        },
        "by_user": user_stats,
        "test_memories": test_memories,
        "python_memories": python_memories
    }
    
    with open("memory_analysis.json", "w", encoding="utf-8") as f:
        json.dump(analysis_result, f, ensure_ascii=False, indent=2)
    
    print(f"\n💾 分析结果已保存到: memory_analysis.json")
    
    print("\n✅ 记忆分析完成！")
    
except Exception as e:
    print(f"\n❌ 分析失败: {e}")
    import traceback
    traceback.print_exc()
