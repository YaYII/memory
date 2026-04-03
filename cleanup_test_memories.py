#!/usr/bin/env python3
"""
清理测试记忆
"""

import sys
import os

# 添加项目路径
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'src'))

from mcp_memory.memory.long_term import MemoryStore

print("开始清理测试记忆...")

try:
    store = MemoryStore(data_path="data/chroma")
    
    # 获取所有记忆
    all_memories = store.collection.get()
    ids = all_memories.get("ids", [])
    metadatas = all_memories.get("metadatas", [])
    
    # 找出测试记忆
    test_ids = []
    for i, mem_id in enumerate(ids):
        meta = metadatas[i] if i < len(metadatas) else {}
        title = meta.get("title", "")
        if "测试" in title or "test" in title.lower():
            test_ids.append(mem_id)
            print(f"   找到测试记忆: {title[:50]}")
    
    if test_ids:
        print(f"\n准备删除 {len(test_ids)} 条测试记忆...")
        
        # 批量删除
        store.collection.delete(ids=test_ids)
        print(f"✅ 已删除 {len(test_ids)} 条测试记忆")
        
        # 更新索引和图谱
        store._bm25_dirty = True
        store._rebuild_bm25_index()
        
        for mem_id in test_ids:
            if mem_id in store.graph:
                store.graph.remove_node(mem_id)
                store._graph_dirty = True
        
        if store._graph_dirty:
            store._save_graph()
        
        # 验证
        all_after = store.collection.get()
        print(f"\n最终记忆数: {len(all_after.get('ids', []))}")
        
    else:
        print("没有找到测试记忆")
        
except Exception as e:
    print(f"❌ 清理失败: {e}")
    import traceback
    traceback.print_exc()
