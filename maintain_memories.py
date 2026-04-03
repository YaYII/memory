#!/usr/bin/env python3
"""
记忆系统定时维护脚本

功能：
1. 记忆去重：删除内容完全相同的重复记忆
2. 统一用户：将所有记忆迁移到 system 用户
3. 清理测试数据：删除 test_user 等测试账户的记忆
4. 生成维护报告

运行方式：
    # 手动运行
    .venv/bin/python maintain_memories.py
    
    # 添加到 crontab（每天凌晨 2 点执行）
    0 2 * * * cd /path/to/memory && .venv/bin/python maintain_memories.py --auto
    
    # 输出 JSON 格式
    .venv/bin/python maintain_memories.py --json
"""

import sys
import json
import argparse
from pathlib import Path
from collections import defaultdict

project_root = Path(__file__).parent
sys.path.insert(0, str(project_root / "src"))

from mcp_memory.core.config import settings
from mcp_memory.memory.manager import MemoryManager


def deduplicate_memories(manager: MemoryManager, dry_run: bool = False) -> dict:
    """记忆去重：基于内容前 200 字符进行分组，删除重复项"""
    all_memories = manager.store.query_by_type(query="", memory_type="all", limit=10000)
    
    content_groups = defaultdict(list)
    for mem in all_memories:
        content_key = mem.get("content", "")[:200].strip()
        if content_key:
            content_groups[content_key].append(mem)
    
    duplicate_groups = {k: v for k, v in content_groups.items() if len(v) > 1}
    
    ids_to_delete = []
    for key, members in duplicate_groups.items():
        members_sorted = sorted(members, key=lambda x: x.get("timestamp", ""), reverse=True)
        for m in members_sorted[1:]:
            ids_to_delete.append(m["memory_id"])
    
    stats = {
        "total_memories": len(all_memories),
        "duplicate_groups": len(duplicate_groups),
        "duplicates_found": len(ids_to_delete),
        "deleted": 0,
    }
    
    if not dry_run and ids_to_delete:
        for mem_id in ids_to_delete:
            try:
                manager.store.delete(mem_id)
                stats["deleted"] += 1
            except Exception:
                pass
    
    return stats


def unify_users(manager: MemoryManager, target_user: str = "system", dry_run: bool = False) -> dict:
    """将所有记忆迁移到指定用户"""
    import chromadb
    client = chromadb.PersistentClient(path=settings.CHROMA_DATA_PATH)
    col = client.get_or_create_collection("unified_memories")
    
    all_data = col.get(limit=10000)
    total = len(all_data["ids"])
    
    migrated = 0
    for i in range(total):
        meta = all_data["metadatas"][i]
        if meta.get("user_id") != target_user:
            doc_id = all_data["ids"][i]
            if not dry_run:
                new_meta = {**meta, "user_id": target_user}
                try:
                    col.update(ids=[doc_id], metadatas=[new_meta])
                    migrated += 1
                except Exception:
                    pass
            else:
                migrated += 1
    
    return {
        "total_memories": total,
        "migrated_to": target_user,
        "migrated_count": migrated,
    }


def clean_test_data(manager: MemoryManager, dry_run: bool = False) -> dict:
    """清理测试数据"""
    test_users = ["test_user", "test_user_v2", "test", "demo"]
    
    all_memories = manager.store.query_by_type(query="", memory_type="all", limit=10000)
    test_memories = [m for m in all_memories if m.get("user_id") in test_users]
    
    stats = {
        "test_users": test_users,
        "test_memories_found": len(test_memories),
        "deleted": 0,
    }
    
    if not dry_run:
        for mem in test_memories:
            try:
                manager.store.delete(mem["memory_id"])
                stats["deleted"] += 1
            except Exception:
                pass
    
    return stats


def generate_report(manager: MemoryManager) -> dict:
    """生成记忆系统报告"""
    all_memories = manager.store.query_by_type(query="", memory_type="all", limit=10000)
    
    users = defaultdict(int)
    types = defaultdict(int)
    scopes = defaultdict(int)
    
    for mem in all_memories:
        users[mem.get("user_id", "?")] += 1
        types[mem.get("memory_type", "?")] += 1
        scopes[mem.get("scope", "?")] += 1
    
    return {
        "total_memories": len(all_memories),
        "by_user": dict(users),
        "by_type": dict(types),
        "by_scope": dict(scopes),
        "data_path": str(settings.CHROMA_DATA_PATH),
    }


def main():
    parser = argparse.ArgumentParser(description="记忆系统定时维护脚本")
    parser.add_argument("--auto", action="store_true", help="自动模式")
    parser.add_argument("--dry-run", action="store_true", help="只报告不执行")
    parser.add_argument("--deduplicate", action="store_true", help="只执行去重")
    parser.add_argument("--unify-users", action="store_true", help="统一用户为 system")
    parser.add_argument("--clean-test", action="store_true", help="只清理测试数据")
    parser.add_argument("--report", action="store_true", help="生成报告")
    parser.add_argument("--json", action="store_true", help="输出 JSON 格式")
    
    args = parser.parse_args()
    
    manager = MemoryManager()
    results = {}
    
    if args.deduplicate or args.auto:
        results["deduplicate"] = deduplicate_memories(manager, dry_run=args.dry_run)
    
    if args.unify_users or args.auto:
        results["unify_users"] = unify_users(manager, dry_run=args.dry_run)
    
    if args.clean_test or args.auto:
        results["clean_test"] = clean_test_data(manager, dry_run=args.dry_run)
    
    if args.report or args.auto:
        results["report"] = generate_report(manager)
    
    if args.json:
        print(json.dumps(results, ensure_ascii=False, indent=2))
    else:
        print("=" * 60)
        print("记忆系统维护报告")
        print("=" * 60)
        
        if "deduplicate" in results:
            d = results["deduplicate"]
            print(f"\n去重:")
            print(f"  总记忆数: {d['total_memories']}")
            print(f"  重复组数: {d['duplicate_groups']}")
            print(f"  发现重复: {d['duplicates_found']}")
            print(f"  已删除: {d['deleted']}")
        
        if "unify_users" in results:
            u = results["unify_users"]
            print(f"\n统一用户:")
            print(f"  迁移到: {u['migrated_to']}")
            print(f"  已迁移: {u['migrated_count']}")
        
        if "clean_test" in results:
            c = results["clean_test"]
            print(f"\n清理测试数据:")
            print(f"  测试记忆: {c['test_memories_found']}")
            print(f"  已删除: {c['deleted']}")
        
        if "report" in results:
            r = results["report"]
            print(f"\n当前状态:")
            print(f"  总记忆数: {r['total_memories']}")
            print(f"  按用户: {r['by_user']}")
            print(f"  按类型: {r['by_type']}")
            print(f"  按作用域: {r['by_scope']}")
        
        print("\n" + "=" * 60)


if __name__ == "__main__":
    main()
