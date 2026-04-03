#!/usr/bin/env python3
"""
整理记忆系统：删除测试记忆，去重Python编码规范记忆
"""

import sys
import os
import json

# 添加项目路径
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'src'))

from mcp_memory.memory.manager import MemoryManager

print("开始整理记忆系统...")

try:
    # 创建MemoryManager实例
    manager = MemoryManager()
    print("✅ MemoryManager初始化成功")
    
    # 第一步：删除测试记忆
    print("\n🧹 第一步：删除测试记忆...")
    test_memory_ids = [
        "e3500709-ba2b-4e2d-8a07-4c9a1b9a8c7f",
        "dc5d4e31-ddd3-4d14-8a07-4c9a1b9a8d7e"
    ]
    
    deleted_count = 0
    for mem_id in test_memory_ids:
        try:
            success = manager.delete_memory("test_user", mem_id)
            if success:
                print(f"   ✅ 删除测试记忆: {mem_id[:12]}")
                deleted_count += 1
            else:
                print(f"   ⚠️  无法删除: {mem_id[:12]}")
        except Exception as e:
            print(f"   ❌ 删除失败 {mem_id[:12]}: {e}")
    
    print(f"   📊 共删除 {deleted_count} 条测试记忆")
    
    # 第二步：分析Python编码规范记忆
    print("\n🐍 第二步：分析Python编码规范记忆...")
    
    # 获取所有记忆
    all_memories = manager.store.collection.get()
    ids = all_memories.get("ids", [])
    metadatas = all_memories.get("metadatas", [])
    documents = all_memories.get("documents", [])
    
    # 收集Python编码规范相关记忆
    python_memories = []
    for i, mem_id in enumerate(ids):
        meta = metadatas[i] if i < len(metadatas) else {}
        title = meta.get("title", "")
        content = documents[i] if i < len(documents) else ""
        user_id = meta.get("user_id", "")
        
        # 检查是否是Python编码规范相关
        if ("Python" in title or "python" in title.lower() or 
            "编码" in title or "规范" in title or
            "Python" in content or "python" in content.lower()):
            python_memories.append({
                "id": mem_id,
                "title": title,
                "content": content,
                "user_id": user_id,
                "memory_type": meta.get("memory_type", ""),
                "timestamp": meta.get("timestamp", ""),
                "importance": meta.get("importance", 1.0),
                "access_count": meta.get("access_count", 0)
            })
    
    print(f"   📊 找到 {len(python_memories)} 条Python编码规范相关记忆")
    
    # 第三步：选择要保留的核心记忆
    print("\n🎯 第三步：选择要保留的核心记忆...")
    
    # 按类型分组
    storage_memories = [m for m in python_memories if m["memory_type"] == "storage"]
    thinking_memories = [m for m in python_memories if m["memory_type"] == "thinking"]
    skill_memories = [m for m in python_memories if m["memory_type"] == "skill"]
    
    print(f"   Storage: {len(storage_memories)} 条")
    print(f"   Thinking: {len(thinking_memories)} 条")
    print(f"   Skill: {len(skill_memories)} 条")
    
    # 选择要保留的记忆
    memories_to_keep = []
    
    # 保留原始的storage记忆（只有几条）
    memories_to_keep.extend([m["id"] for m in storage_memories])
    print(f"   ✅ 保留所有 {len(storage_memories)} 条Storage记忆")
    
    # 选择最新的thinking记忆（按时间倒序，取前5条）
    thinking_memories.sort(key=lambda x: x["timestamp"], reverse=True)
    memories_to_keep.extend([m["id"] for m in thinking_memories[:5]])
    print(f"   ✅ 保留最新的 5 条Thinking记忆")
    
    # 选择最新的skill记忆（按时间倒序，取前3条）
    skill_memories.sort(key=lambda x: x["timestamp"], reverse=True)
    memories_to_keep.extend([m["id"] for m in skill_memories[:3]])
    print(f"   ✅ 保留最新的 3 条Skill记忆")
    
    # 第四步：删除重复的Python编码规范记忆
    print("\n🗑️  第四步：删除重复的Python编码规范记忆...")
    
    ids_to_delete = []
    for mem in python_memories:
        if mem["id"] not in memories_to_keep:
            ids_to_delete.append(mem["id"])
    
    print(f"   📊 准备删除 {len(ids_to_delete)} 条重复记忆")
    
    deleted_python_count = 0
    for i, mem_id in enumerate(ids_to_delete):
        try:
            success = manager.delete_memory("test_user", mem_id)
            if success:
                deleted_python_count += 1
                if (i + 1) % 50 == 0 or i == len(ids_to_delete) - 1:
                    print(f"   ✅ 已删除 {i + 1}/{len(ids_to_delete)} 条记忆")
        except Exception as e:
            print(f"   ❌ 删除失败 {mem_id[:12]}: {e}")
    
    # 第五步：统计结果
    print("\n📊 第五步：整理结果统计...")
    
    # 获取整理后的记忆数量
    all_memories_after = manager.store.collection.get()
    total_after = len(all_memories_after.get("ids", []))
    
    print(f"\n🎉 记忆整理完成！")
    print(f"   整理前: 530 条")
    print(f"   整理后: {total_after} 条")
    print(f"   共删除: {deleted_count + deleted_python_count} 条")
    print(f"   - 测试记忆: {deleted_count} 条")
    print(f"   - Python编码规范重复记忆: {deleted_python_count} 条")
    
    # 保存整理结果
    organize_result = {
        "before_total": 530,
        "after_total": total_after,
        "deleted_test": deleted_count,
        "deleted_python": deleted_python_count,
        "memories_kept": memories_to_keep
    }
    
    with open("memory_organize_result.json", "w", encoding="utf-8") as f:
        json.dump(organize_result, f, ensure_ascii=False, indent=2)
    
    print(f"\n💾 整理结果已保存到: memory_organize_result.json")
    
except Exception as e:
    print(f"\n❌ 整理失败: {e}")
    import traceback
    traceback.print_exc()
