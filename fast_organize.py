#!/usr/bin/env python3
"""
快速整理记忆系统：批量删除，避免频繁保存图谱
"""

import sys
import os
import json

# 添加项目路径
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'src'))

from mcp_memory.memory.long_term import MemoryStore

print("开始快速整理记忆系统...")

try:
    # 创建MemoryStore实例（直接使用底层类，避免manager的一些开销）
    store = MemoryStore(data_path="data/chroma")
    print("✅ MemoryStore初始化成功")
    
    # 第一步：获取所有记忆
    print("\n📋 第一步：获取所有记忆...")
    all_memories = store.collection.get()
    ids = all_memories.get("ids", [])
    metadatas = all_memories.get("metadatas", [])
    documents = all_memories.get("documents", [])
    
    print(f"   📊 共找到 {len(ids)} 条记忆")
    
    # 第二步：分析Python编码规范记忆
    print("\n🐍 第二步：分析Python编码规范记忆...")
    
    python_ids = []
    all_data = []
    
    for i, mem_id in enumerate(ids):
        meta = metadatas[i] if i < len(metadatas) else {}
        title = meta.get("title", "")
        content = documents[i] if i < len(documents) else ""
        
        all_data.append({
            "id": mem_id,
            "title": title,
            "content": content,
            "user_id": meta.get("user_id", ""),
            "memory_type": meta.get("memory_type", ""),
            "timestamp": meta.get("timestamp", ""),
        })
        
        # 检查是否是Python编码规范相关
        if ("Python" in title or "python" in title.lower() or 
            "编码" in title or "规范" in title or
            "Python" in content or "python" in content.lower()):
            python_ids.append(mem_id)
    
    print(f"   📊 找到 {len(python_ids)} 条Python编码规范相关记忆")
    
    # 第三步：选择要保留的核心记忆
    print("\n🎯 第三步：选择要保留的核心记忆...")
    
    # 按类型分组
    storage_data = [d for d in all_data if d["memory_type"] == "storage"]
    thinking_data = [d for d in all_data if d["memory_type"] == "thinking"]
    skill_data = [d for d in all_data if d["memory_type"] == "skill"]
    
    print(f"   Storage: {len(storage_data)} 条")
    print(f"   Thinking: {len(thinking_data)} 条")
    print(f"   Skill: {len(skill_data)} 条")
    
    # 选择要保留的记忆
    ids_to_keep = set()
    
    # 保留所有storage记忆
    ids_to_keep.update([d["id"] for d in storage_data])
    print(f"   ✅ 保留所有 {len(storage_data)} 条Storage记忆")
    
    # 选择最新的thinking记忆（按时间倒序，取前5条）
    thinking_data.sort(key=lambda x: x["timestamp"], reverse=True)
    ids_to_keep.update([d["id"] for d in thinking_data[:5]])
    print(f"   ✅ 保留最新的 5 条Thinking记忆")
    
    # 选择最新的skill记忆（按时间倒序，取前3条）
    skill_data.sort(key=lambda x: x["timestamp"], reverse=True)
    ids_to_keep.update([d["id"] for d in skill_data[:3]])
    print(f"   ✅ 保留最新的 3 条Skill记忆")
    
    # 第四步：批量删除
    print("\n🗑️  第四步：批量删除重复记忆...")
    
    ids_to_delete = []
    for d in all_data:
        if d["id"] not in ids_to_keep:
            ids_to_delete.append(d["id"])
    
    print(f"   📊 准备删除 {len(ids_to_delete)} 条记忆")
    
    # 直接批量删除（不使用store.delete方法，避免频繁保存图谱）
    if ids_to_delete:
        store.collection.delete(ids=ids_to_delete)
        print(f"   ✅ 已批量删除 {len(ids_to_delete)} 条记忆")
        
        # 更新BM25索引（只重建一次）
        store._bm25_dirty = True
        store._rebuild_bm25_index()
        print(f"   ✅ BM25索引已重建")
        
        # 从图谱中移除节点并只保存一次
        for mem_id in ids_to_delete:
            if mem_id in store.graph:
                store.graph.remove_node(mem_id)
                store._graph_dirty = True
        
        if store._graph_dirty:
            store._save_graph()
            print(f"   ✅ 知识图谱已更新")
    
    # 第五步：统计结果
    print("\n📊 第五步：整理结果统计...")
    
    # 获取整理后的记忆数量
    all_memories_after = store.collection.get()
    total_after = len(all_memories_after.get("ids", []))
    
    print(f"\n🎉 记忆整理完成！")
    print(f"   整理前: {len(ids)} 条")
    print(f"   整理后: {total_after} 条")
    print(f"   共删除: {len(ids_to_delete)} 条")
    
    # 保存整理结果
    organize_result = {
        "before_total": len(ids),
        "after_total": total_after,
        "deleted_count": len(ids_to_delete),
        "memories_kept": list(ids_to_keep)
    }
    
    with open("memory_organize_result.json", "w", encoding="utf-8") as f:
        json.dump(organize_result, f, ensure_ascii=False, indent=2)
    
    print(f"\n💾 整理结果已保存到: memory_organize_result.json")
    
except Exception as e:
    print(f"\n❌ 整理失败: {e}")
    import traceback
    traceback.print_exc()
