#!/usr/bin/env python3
"""
显示最终记忆系统状态
"""

import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'src'))

from mcp_memory.memory.manager import MemoryManager

manager = MemoryManager()

all_data = manager.store.collection.get()
ids = all_data.get('ids', [])
metadatas = all_data.get('metadatas', [])
documents = all_data.get('documents', [])

print('=' * 80)
print('🎉 记忆整理方案实施完成！')
print('=' * 80)
print()
print(f'📊 最终记忆系统状态:')
print(f'   总记忆数: {len(ids)}')
print()

storage_count = 0
thinking_count = 0
skill_count = 0
for meta in metadatas:
    mem_type = meta.get('memory_type', 'storage')
    if mem_type == 'storage':
        storage_count += 1
    elif mem_type == 'thinking':
        thinking_count += 1
    elif mem_type == 'skill':
        skill_count += 1

print(f'   Storage记忆: {storage_count} 条')
print(f'   Thinking记忆: {thinking_count} 条')
print(f'   Skill记忆: {skill_count} 条')
print()

print('📋 保留的记忆详情:')
print('-' * 80)
for i in range(len(ids)):
    meta = metadatas[i] if i < len(metadatas) else {}
    title = meta.get('title', '无标题')
    mem_type = meta.get('memory_type', 'storage')
    timestamp = meta.get('timestamp', '')[:19]
    print(f'[{i+1}] [{mem_type}] {title}')
    print(f'      时间: {timestamp}')
    print()
