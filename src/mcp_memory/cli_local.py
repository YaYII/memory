#!/usr/bin/env python3
"""
MCP Memory CLI - 本地直接操作版本
无需启动HTTP服务器，直接操作记忆系统

Usage:
    mcp-memory-local write "内容" --title "标题"
    mcp-memory-local read "查询内容"
    mcp-memory-local list
    mcp-memory-local interactive  # 交互式TUI模式
"""

import os
import sys
import json
import asyncio
from typing import Optional, List
from datetime import datetime
from pathlib import Path

import typer
from rich.console import Console
from rich.table import Table
from rich.panel import Panel
from rich.prompt import Prompt, Confirm

# 确保能导入mcp_memory模块
project_root = Path(__file__).parent.parent.parent
sys.path.insert(0, str(project_root))

from mcp_memory.core.config import settings
from mcp_memory.memory.manager import MemoryManager

app = typer.Typer(
    name="mcp-memory-local",
    help="AI Memory System - 本地CLI工具（无需服务器）",
    add_completion=False
)
console = Console()
# 全局实例（延迟初始化）
_memory_manager: Optional[MemoryManager] = None

def get_memory_manager() -> MemoryManager:
    """获取记忆管理器实例（单例模式）"""
    global _memory_manager
    if _memory_manager is None:
        _memory_manager = MemoryManager()
    return _memory_manager


def output_json(data: dict, quiet: bool = False) -> None:
    """输出 JSON 格式（供 AI skill 解析）"""
    if not quiet:
        console.print(json.dumps(data, ensure_ascii=False, indent=2))
    else:
        print(json.dumps(data, ensure_ascii=False))


@app.command()
def write(
    content: str = typer.Argument(..., help="记忆内容"),
    title: Optional[str] = typer.Option(None, "--title", "-t", help="记忆标题"),
    scope: str = typer.Option("project", "--scope", "-s", help="作用域: project/global"),
    keywords: Optional[str] = typer.Option(None, "--keywords", "-k", help="关键词(逗号分隔)"),
    user_id: str = typer.Option("default_user", "--user", "-u", help="用户ID"),
    content_type: str = typer.Option("note", "--type", help="内容类型"),
    json_output: bool = typer.Option(False, "--json", help="输出JSON格式（供AI skill解析）"),
    quiet: bool = typer.Option(False, "--quiet", "-q", help="静默模式，仅输出JSON"),
):
    """写入新记忆（本地直接操作）"""
    try:
        manager = get_memory_manager()
        
        keyword_list = [k.strip() for k in keywords.split(",")] if keywords else []
        
        memory_id = manager.write_memory(
            user_id=user_id,
            content=content,
            project_id=settings.MCP_PROJECT_ID,
            scope=scope,
            title=title,
            keywords=keyword_list,
            content_type=content_type,
            auto_enhance=True
        )
        
        if json_output or quiet:
            output_json({
                "status": "success",
                "memory_id": memory_id,
                "title": title or content[:50],
                "scope": scope,
                "keywords": keyword_list,
            }, quiet=quiet)
        else:
            console.print(Panel(
                f"[green]✅ 记忆已保存[/green]\n\n"
                f"ID: [cyan]{memory_id}[/cyan]\n"
                f"标题: {title or content[:30] + '...'}\n"
                f"关键词: {', '.join(keyword_list) if keyword_list else '无'}",
                title="写入成功",
                border_style="green"
            ))
        
    except Exception as e:
        if json_output or quiet:
            output_json({"status": "error", "message": str(e)}, quiet=quiet)
        else:
            console.print(f"[red]❌ 写入失败: {e}[/red]")


@app.command()
def read(
    query: str = typer.Argument(..., help="查询内容"),
    top_k: int = typer.Option(5, "--top-k", "-k", help="返回结果数量"),
    scope: Optional[str] = typer.Option(None, "--scope", "-s", help="作用域: project/global"),
    memory_type: Optional[str] = typer.Option(None, "--type", "-t", help="记忆类型: storage/thinking/skill"),
    user_id: str = typer.Option("default_user", "--user", "-u", help="用户ID"),
    json_output: bool = typer.Option(False, "--json", help="输出JSON格式（供AI skill解析）"),
    quiet: bool = typer.Option(False, "--quiet", "-q", help="静默模式，仅输出JSON"),
):
    """搜索记忆（本地直接操作）"""
    try:
        manager = get_memory_manager()
        
        results, profiles = manager.read_memory(
            user_id=user_id,
            query=query,
            project_id=settings.MCP_PROJECT_ID,
            limit=top_k
        )
        
        if scope:
            results = [r for r in results if r.get("scope") == scope]
        if memory_type:
            results = [r for r in results if r.get("memory_type") == memory_type]
        
        if json_output or quiet:
            output_json({
                "status": "success",
                "query": query,
                "count": len(results),
                "memories": results,
                "profiles": profiles,
            }, quiet=quiet)
            return
        
        if not results:
            console.print("[yellow]📭 没有找到相关记忆[/yellow]")
            return
        
        table = Table(title=f"🔍 搜索结果 ({len(results)}条)", show_header=True, header_style="bold cyan")
        table.add_column("#", style="dim", width=3)
        table.add_column("标题", style="green")
        table.add_column("内容预览", style="white")
        table.add_column("相似度", style="magenta")
        table.add_column("时间", style="dim")
        
        for i, mem in enumerate(results, 1):
            content = mem.get("content", "")
            preview = content[:40] + "..." if len(content) > 40 else content
            score = mem.get("score", 0)
            table.add_row(
                str(i),
                mem.get("title", "无标题")[:20],
                preview,
                f"{score:.2f}",
                mem.get("timestamp", "")[:19] if mem.get("timestamp") else ""
            )
        
        console.print(table)
        
    except Exception as e:
        if json_output or quiet:
            output_json({"status": "error", "message": str(e)}, quiet=quiet)
        else:
            console.print(f"[red]❌ 查询失败: {e}[/red]")


@app.command("list")
def list_memories(
    memory_type: str = typer.Option("all", "--type", "-t", help="记忆类型: all/storage/thinking/skill"),
    scope: Optional[str] = typer.Option(None, "--scope", "-s", help="作用域: project/global"),
    limit: int = typer.Option(20, "--limit", "-l", help="显示数量"),
    user_id: str = typer.Option("default_user", "--user", "-u", help="用户ID"),
    json_output: bool = typer.Option(False, "--json", help="输出JSON格式（供AI skill解析）"),
    quiet: bool = typer.Option(False, "--quiet", "-q", help="静默模式，仅输出JSON"),
):
    """列出所有记忆（本地直接操作）"""
    try:
        manager = get_memory_manager()
        
        memories = manager.store.query_by_type(
            query="",
            memory_type=memory_type,
            user_id=user_id,
            limit=limit
        )
        
        if scope:
            memories = [m for m in memories if m.get("scope") == scope]
        
        if json_output or quiet:
            output_json({
                "status": "success",
                "count": len(memories),
                "memories": memories,
            }, quiet=quiet)
            return
        
        if not memories:
            console.print("[yellow]📭 记忆库为空[/yellow]")
            return
        
        table = Table(title=f"📋 记忆列表 ({len(memories)}条)", show_header=True, header_style="bold cyan")
        table.add_column("ID", style="dim", width=12)
        table.add_column("标题", style="green")
        table.add_column("类型", style="magenta")
        table.add_column("关键词", style="yellow")
        table.add_column("时间", style="dim")
        
        for mem in memories:
            mem_id = mem.get("memory_id", "")[:12]
            title = mem.get("title", "") or mem.get("content", "")[:30]
            mem_type = mem.get("memory_type", "unknown")
            keywords = ", ".join(mem.get("keywords", []))[:20]
            timestamp = mem.get("timestamp", "")[:19] if mem.get("timestamp") else ""
            
            table.add_row(mem_id, title[:25], mem_type, keywords, timestamp)
        
        console.print(table)
        
    except Exception as e:
        if json_output or quiet:
            output_json({"status": "error", "message": str(e)}, quiet=quiet)
        else:
            console.print(f"[red]❌ 加载失败: {e}[/red]")


@app.command()
def delete(
    memory_id: str = typer.Argument(..., help="记忆ID"),
    user_id: str = typer.Option("default_user", "--user", "-u", help="用户ID"),
    force: bool = typer.Option(False, "--force", "-f", help="强制删除，不确认"),
    json_output: bool = typer.Option(False, "--json", help="输出JSON格式（供AI skill解析）"),
    quiet: bool = typer.Option(False, "--quiet", "-q", help="静默模式，仅输出JSON"),
):
    """删除记忆（本地直接操作）"""
    try:
        if not force:
            confirm = typer.confirm(f"确定要删除记忆 {memory_id} 吗？")
            if not confirm:
                if json_output or quiet:
                    output_json({"status": "cancelled", "message": "User cancelled"}, quiet=quiet)
                else:
                    console.print("[yellow]已取消[/yellow]")
                return
        
        manager = get_memory_manager()
        manager.store.delete(memory_id, user_id)
        
        if json_output or quiet:
            output_json({"status": "success", "memory_id": memory_id, "message": "Deleted"}, quiet=quiet)
        else:
            console.print(f"[green]✅ 记忆 {memory_id} 已删除[/green]")
        
    except Exception as e:
        if json_output or quiet:
            output_json({"status": "error", "message": str(e)}, quiet=quiet)
        else:
            console.print(f"[red]❌ 删除失败: {e}[/red]")


@app.command()
def stats(
    json_output: bool = typer.Option(False, "--json", help="输出JSON格式（供AI skill解析）"),
    quiet: bool = typer.Option(False, "--quiet", "-q", help="静默模式，仅输出JSON"),
):
    """显示系统统计（本地直接操作）"""
    try:
        manager = get_memory_manager()
        
        all_memories = manager.store.query_by_type(query="", memory_type="all", limit=10000)
        storage_count = len([m for m in all_memories if m.get("memory_type") == "storage"])
        thinking_count = len([m for m in all_memories if m.get("memory_type") == "thinking"])
        skill_count = len([m for m in all_memories if m.get("memory_type") == "skill"])
        total_memories = len(all_memories)
        
        if json_output or quiet:
            output_json({
                "status": "success",
                "total_memories": total_memories,
                "storage_count": storage_count,
                "thinking_count": thinking_count,
                "skill_count": skill_count,
                "data_path": str(settings.CHROMA_DATA_PATH),
            }, quiet=quiet)
            return
        
        table = Table(title="📊 系统统计", show_header=False)
        table.add_column("指标", style="cyan")
        table.add_column("值", style="green")
        
        table.add_row("总记忆数", str(total_memories))
        table.add_row("存储层", str(storage_count))
        table.add_row("思维层", str(thinking_count))
        table.add_row("技能层", str(skill_count))
        table.add_row("数据目录", str(settings.CHROMA_DATA_PATH))
        
        console.print(table)
        
    except Exception as e:
        if json_output or quiet:
            output_json({"status": "error", "message": str(e)}, quiet=quiet)
        else:
            console.print(f"[red]❌ 获取统计失败: {e}[/red]")




@app.command()
def show(
    memory_id: str = typer.Argument(..., help="记忆ID"),
    json_output: bool = typer.Option(False, "--json", help="输出JSON格式（供AI skill解析）"),
    quiet: bool = typer.Option(False, "--quiet", "-q", help="静默模式，仅输出JSON"),
):
    """显示记忆详情（本地直接操作）"""
    try:
        manager = get_memory_manager()
        
        memories = manager.store.query_by_type(query="", memory_type="all", limit=10000)
        target_mem = None
        for mem in memories:
            if mem.get("memory_id") == memory_id or mem.get("memory_id", "").startswith(memory_id):
                target_mem = mem
                break
        
        if not target_mem:
            if json_output or quiet:
                output_json({"status": "error", "message": f"Memory not found: {memory_id}"}, quiet=quiet)
            else:
                console.print(f"[red]❌ 未找到记忆: {memory_id}[/red]")
            return
        
        if json_output or quiet:
            output_json({"status": "success", "memory": target_mem}, quiet=quiet)
            return
        
        console.print(Panel(
            f"[bold cyan]ID:[/bold cyan] {target_mem.get('memory_id')}\n"
            f"[bold cyan]标题:[/bold cyan] {target_mem.get('title', '无标题')}\n"
            f"[bold cyan]类型:[/bold cyan] {target_mem.get('memory_type', 'unknown')}\n"
            f"[bold cyan]用户:[/bold cyan] {target_mem.get('user_id')}\n"
            f"[bold cyan]作用域:[/bold cyan] {target_mem.get('scope')}\n"
            f"[bold cyan]时间:[/bold cyan] {target_mem.get('timestamp')}\n"
            f"[bold cyan]关键词:[/bold cyan] {', '.join(target_mem.get('keywords', [])) or '无'}\n"
            f"[bold cyan]标签:[/bold cyan] {', '.join(target_mem.get('tags', [])) or '无'}\n"
            f"\n[bold cyan]内容:[/bold cyan]\n{target_mem.get('content', '')}",
            title="记忆详情",
            border_style="cyan"
        ))
        
    except Exception as e:
        if json_output or quiet:
            output_json({"status": "error", "message": str(e)}, quiet=quiet)
        else:
            console.print(f"[red]❌ 查询失败: {e}[/red]")


@app.command()
def update(
    memory_id: str = typer.Argument(..., help="记忆ID"),
    content: str = typer.Argument(..., help="新内容"),
    title: Optional[str] = typer.Option(None, "--title", "-t", help="新标题"),
    keywords: Optional[str] = typer.Option(None, "--keywords", "-k", help="新关键词(逗号分隔)"),
    user_id: str = typer.Option("default_user", "--user", "-u", help="用户ID"),
    json_output: bool = typer.Option(False, "--json", help="输出JSON格式（供AI skill解析）"),
    quiet: bool = typer.Option(False, "--quiet", "-q", help="静默模式，仅输出JSON"),
):
    """更新记忆（本地直接操作）"""
    try:
        manager = get_memory_manager()
        
        success = manager.store.update_memory_content(memory_id, user_id, content)
        if not success:
            if json_output or quiet:
                output_json({"status": "error", "message": "Memory not found or update failed"}, quiet=quiet)
            else:
                console.print(f"[red]❌ 更新失败：记忆不存在或权限不足[/red]")
            return
        
        if title or keywords:
            metadata_updates = {}
            if title:
                metadata_updates["title"] = title
            if keywords:
                import json as _json
                kw_list = [k.strip() for k in keywords.split(",")]
                metadata_updates["keywords"] = _json.dumps(kw_list, ensure_ascii=False)
            if metadata_updates:
                manager.store.update_memory_metadata(memory_id, metadata_updates)
        
        if json_output or quiet:
            output_json({
                "status": "success",
                "memory_id": memory_id,
                "message": "Memory updated",
            }, quiet=quiet)
        else:
            console.print(f"[green]✅ 记忆 {memory_id} 已更新[/green]")
        
    except Exception as e:
        if json_output or quiet:
            output_json({"status": "error", "message": str(e)}, quiet=quiet)
        else:
            console.print(f"[red]❌ 更新失败: {e}[/red]")


@app.command("check-duplicate")
def check_duplicate(
    content: str = typer.Argument(..., help="要检查重复的内容"),
    threshold: float = typer.Option(0.95, "--threshold", help="相似度阈值 (0.0-1.0)"),
    user_id: str = typer.Option("default_user", "--user", "-u", help="用户ID"),
    json_output: bool = typer.Option(False, "--json", help="输出JSON格式（供AI skill解析）"),
    quiet: bool = typer.Option(False, "--quiet", "-q", help="静默模式，仅输出JSON"),
):
    """检查相似/重复记忆（本地直接操作）"""
    try:
        manager = get_memory_manager()
        
        results, _ = manager.read_memory(
            user_id=user_id,
            query=content,
            project_id=settings.MCP_PROJECT_ID,
            limit=10
        )
        
        duplicates = [r for r in results if r.get("score", 0) >= threshold]
        
        if json_output or quiet:
            output_json({
                "status": "success",
                "query": content,
                "threshold": threshold,
                "has_duplicates": len(duplicates) > 0,
                "duplicates": duplicates,
                "similar": results[:5],
            }, quiet=quiet)
            return
        
        if duplicates:
            console.print(Panel(
                f"[yellow]⚠️ 发现 {len(duplicates)} 条高度相似记忆（相似度 ≥ {threshold:.0%}）[/yellow]\n\n"
                + "\n".join([
                    f"ID: [cyan]{d['id'][:12]}[/cyan] | 相似度: [magenta]{d['score']:.2f}[/magenta]\n"
                    f"  标题: {d.get('title', '无标题')}\n"
                    f"  内容: {d['content'][:80]}..."
                    for d in duplicates
                ]),
                title="重复检测",
                border_style="yellow"
            ))
        else:
            console.print(f"[green]✅ 未发现高度相似的记忆[/green]")
            if results:
                console.print(f"\n[dim]找到 {len(results)} 条相关记忆：[/dim]")
                for r in results[:3]:
                    console.print(f"  - [{r.get('score', 0):.2f}] {r.get('title', '无标题')}: {r['content'][:60]}...")
        
    except Exception as e:
        if json_output or quiet:
            output_json({"status": "error", "message": str(e)}, quiet=quiet)
        else:
            console.print(f"[red]❌ 检测失败: {e}[/red]")


@app.command()
def reflect(
    user_id: str = typer.Option("default_user", "--user", "-u", help="用户ID"),
    json_output: bool = typer.Option(False, "--json", help="输出JSON格式（供AI skill解析）"),
    quiet: bool = typer.Option(False, "--quiet", "-q", help="静默模式，仅输出JSON"),
):
    """触发深度反思（本地直接操作）"""
    try:
        manager = get_memory_manager()
        
        from mcp_memory.memory.tiered_evolution import TieredEvolutionEngine
        import asyncio
        
        engine = TieredEvolutionEngine(manager.store)
        
        async def _run_evolution():
            await engine.initialize()
            return await engine.run_once()
        
        result = asyncio.run(_run_evolution())
        
        if json_output or quiet:
            output_json({
                "status": "success",
                "message": "Reflection completed",
                "result": result,
            }, quiet=quiet)
        else:
            console.print(Panel(
                f"[green]✅ 反思完成[/green]\n\n"
                f"新思维记忆: {result.get('new_thinking', 0)}\n"
                f"新技能记忆: {result.get('new_skills', 0)}",
                title="深度反思",
                border_style="green"
            ))
        
    except Exception as e:
        if json_output or quiet:
            output_json({"status": "error", "message": str(e)}, quiet=quiet)
        else:
            console.print(f"[red]❌ 反思失败: {e}[/red]")


@app.command("bootstrap-skills")
def bootstrap_skills(
    user_id: str = typer.Option("system", "--user", "-u", help="用户ID"),
    json_output: bool = typer.Option(False, "--json", help="输出JSON格式（供AI skill解析）"),
    quiet: bool = typer.Option(False, "--quiet", "-q", help="静默模式，仅输出JSON"),
):
    """将CLI使用技能写入记忆系统，供后续AI智能体检索使用"""
    try:
        manager = get_memory_manager()
        
        cli_skills = [
            {
                "title": "记忆系统CLI - 写入记忆技能",
                "content": """【技能名称】写入记忆（write）
【用途】将重要信息保存到记忆系统，供后续会话检索
【命令格式】
mcp-memory-local write "记忆内容" --title "标题" --keywords "关键词1,关键词2" --scope project --user <user_id> --json --quiet

【参数说明】
- 记忆内容（必填）：要保存的信息
- --title, -t：记忆标题（建议提供，便于检索）
- --keywords, -k：关键词，逗号分隔（建议3-5个）
- --scope, -s：作用域，project（项目专属，默认）或 global（跨项目共享）
- --user, -u：用户ID（默认default_user）
- --type：内容类型，note（默认）| code | config | workflow | task
- --json：输出JSON格式（AI智能体必须使用）
- --quiet, -q：静默模式，仅输出JSON到stdout

【AI使用场景】
1. 用户告知项目配置 → 写入project scope
2. 用户表达编程偏好 → 写入global scope
3. 总结对话要点 → 写入project scope
4. 提取可复用知识点 → 写入global scope

【JSON输出示例】
{"status":"success","memory_id":"abc123...","title":"标题","scope":"project","keywords":["key1","key2"]}

【注意事项】
- 写入前建议先用 check-duplicate 检查是否已存在相似记忆
- 内容必须使用简体中文（除非是代码或技术术语）
- scope=global 用于跨项目通用的知识/偏好""",
                "keywords": ["write", "写入记忆", "保存记忆", "CLI命令"],
                "content_type": "note",
            },
            {
                "title": "记忆系统CLI - 搜索记忆技能",
                "content": """【技能名称】搜索记忆（read）
【用途】根据查询内容检索相关记忆
【命令格式】
mcp-memory-local read "查询内容" --top-k 5 --scope project --type storage --user <user_id> --json --quiet

【参数说明】
- 查询内容（必填）：搜索关键词或语义查询
- --top-k, -k：返回结果数量（默认5）
- --scope, -s：按作用域过滤，project 或 global
- --type, -t：按记忆类型过滤，storage 或 thinking 或 skill
- --user, -u：用户ID
- --json：输出JSON格式（AI智能体必须使用）
- --quiet, -q：静默模式

【AI使用场景】
1. 开始新任务前 → 搜索项目相关记忆
2. 回答用户问题时 → 搜索用户偏好记忆
3. 编写代码前 → 搜索项目配置和技术栈记忆
4. 解决bug时 → 搜索相关历史经验

【JSON输出示例】
{"status":"success","query":"查询","count":2,"memories":[{"content":"...","title":"...","score":0.95,"memory_type":"storage","timestamp":"...","id":"...","scope":"project"}],"profiles":[]}

【注意事项】
- 搜索结果按综合评分排序（向量+关键词+时间+重要性）
- score > 0.8 表示高度相关
- 同时检索项目记忆和全局记忆""",
                "keywords": ["read", "搜索记忆", "检索", "查询", "CLI命令"],
                "content_type": "note",
            },
            {
                "title": "记忆系统CLI - 列出记忆技能",
                "content": """【技能名称】列出记忆（list）
【用途】浏览记忆库中的记忆列表
【命令格式】
mcp-memory-local list --type all --scope project --limit 20 --user <user_id> --json --quiet

【参数说明】
- --type, -t：记忆类型，all（默认）| storage | thinking | skill
- --scope, -s：作用域过滤，project 或 global
- --limit, -l：显示数量（默认20）
- --user, -u：用户ID
- --json：输出JSON格式
- --quiet, -q：静默模式

【AI使用场景】
1. 用户询问"我有哪些记忆" → 使用list
2. 查看特定类型的记忆 → --type skill 查看技能记忆
3. 浏览全局偏好 → --scope global

【JSON输出示例】
{"status":"success","count":5,"memories":[{"memory_id":"...","content":"...","memory_type":"storage","title":"...","scope":"project","timestamp":"...","keywords":[],"tags":[]}]}""",
                "keywords": ["list", "列出记忆", "浏览记忆", "CLI命令"],
                "content_type": "note",
            },
            {
                "title": "记忆系统CLI - 查看记忆详情技能",
                "content": """【技能名称】查看记忆详情（show）
【用途】查看某条记忆的完整信息
【命令格式】
mcp-memory-local show <memory_id> --json --quiet

【参数说明】
- memory_id（必填）：记忆ID（可用完整ID或前缀）
- --json：输出JSON格式
- --quiet, -q：静默模式

【AI使用场景】
1. 搜索结果中看到某条记忆 → 用show查看完整内容
2. 用户询问某条记忆的详细信息

【JSON输出示例】
{"status":"success","memory":{"memory_id":"...","content":"完整内容","title":"...","memory_type":"storage","user_id":"...","scope":"project","timestamp":"...","keywords":[],"tags":[],"content_type":"note"}}""",
                "keywords": ["show", "记忆详情", "查看记忆", "CLI命令"],
                "content_type": "note",
            },
            {
                "title": "记忆系统CLI - 更新记忆技能",
                "content": """【技能名称】更新记忆（update）
【用途】修改已有记忆的内容或元数据
【命令格式】
mcp-memory-local update <memory_id> "新内容" --title "新标题" --keywords "新关键词" --user <user_id> --json --quiet

【参数说明】
- memory_id（必填）：记忆ID
- 新内容（必填）：更新后的记忆内容
- --title, -t：新标题（可选）
- --keywords, -k：新关键词，逗号分隔（可选）
- --user, -u：用户ID
- --json：输出JSON格式
- --quiet, -q：静默模式

【AI使用场景】
1. 用户纠正了之前的信息 → 更新对应记忆
2. 项目配置变更 → 更新配置记忆
3. 补充记忆内容 → 追加或修改内容

【JSON输出示例】
{"status":"success","memory_id":"abc123...","message":"Memory updated"}""",
                "keywords": ["update", "更新记忆", "修改记忆", "CLI命令"],
                "content_type": "note",
            },
            {
                "title": "记忆系统CLI - 删除记忆技能",
                "content": """【技能名称】删除记忆（delete）
【用途】删除不再需要的记忆
【命令格式】
mcp-memory-local delete <memory_id> --force --user <user_id> --json --quiet

【参数说明】
- memory_id（必填）：记忆ID
- --force, -f：强制删除，跳过确认提示（AI必须使用）
- --user, -u：用户ID
- --json：输出JSON格式
- --quiet, -q：静默模式

【AI使用场景】
1. 用户要求删除某条记忆
2. 清理过期/错误的记忆
3. 记忆合并后删除源记忆

【注意】AI调用时必须加 --force 参数，否则会进入交互确认模式

【JSON输出示例】
{"status":"success","memory_id":"abc123...","message":"Deleted"}""",
                "keywords": ["delete", "删除记忆", "CLI命令"],
                "content_type": "note",
            },
            {
                "title": "记忆系统CLI - 重复检测技能",
                "content": """【技能名称】检查重复记忆（check-duplicate）
【用途】写入新记忆前检查是否已存在相似内容
【命令格式】
mcp-memory-local check-duplicate "要检查的内容" --threshold 0.95 --user <user_id> --json --quiet

【参数说明】
- 内容（必填）：要检查是否重复的内容
- --threshold：相似度阈值，0.0-1.0（默认0.95）
- --user, -u：用户ID
- --json：输出JSON格式
- --quiet, -q：静默模式

【AI使用场景】
1. 写入记忆前 → 先检查是否已存在，避免重复
2. 用户告知信息 → 检查是否已经记录过

【推荐工作流】
# 1. 先检查重复
mcp-memory-local check-duplicate "项目使用FastAPI" --threshold 0.9 --json --quiet
# 2. 如果 has_duplicates=false，则写入
mcp-memory-local write "项目使用FastAPI框架" --title "项目框架" --json --quiet

【JSON输出示例】
{"status":"success","query":"内容","threshold":0.95,"has_duplicates":false,"duplicates":[],"similar":[{"content":"...","score":0.7}]}""",
                "keywords": ["check-duplicate", "重复检测", "相似检测", "去重", "CLI命令"],
                "content_type": "note",
            },
            {
                "title": "记忆系统CLI - 系统统计技能",
                "content": """【技能名称】系统统计（stats）
【用途】查看记忆系统的统计信息
【命令格式】
mcp-memory-local stats --json --quiet

【参数说明】
- --json：输出JSON格式
- --quiet, -q：静默模式

【AI使用场景】
1. 用户询问"我有多少记忆"
2. 了解记忆系统状态

【JSON输出示例】
{"status":"success","total_memories":50,"storage_count":30,"thinking_count":15,"skill_count":5,"data_path":"/home/user/.mcp_memory/chroma"}""",
                "keywords": ["stats", "统计", "记忆数量", "CLI命令"],
                "content_type": "note",
            },
            {
                "title": "记忆系统CLI - 深度反思技能",
                "content": """【技能名称】深度反思（reflect）
【用途】触发记忆系统的自我整理和优化
【命令格式】
mcp-memory-local reflect --user <user_id> --json --quiet

【参数说明】
- --user, -u：用户ID
- --json：输出JSON格式
- --quiet, -q：静默模式

【AI使用场景】
1. 长时间工作后 → 触发反思，整理记忆
2. 记忆库变得混乱时 → 触发去重和合并
3. 任务完成时 → 触发反思总结

【作用】
- 将原始存储记忆蒸馏为思维记忆
- 从思维记忆提取可复用的技能记忆
- 合并重复记忆

【JSON输出示例】
{"status":"success","message":"Reflection completed","result":{"new_thinking":2,"new_skills":1}}""",
                "keywords": ["reflect", "深度反思", "记忆整理", "自我优化", "CLI命令"],
                "content_type": "note",
            },
            {
                "title": "记忆系统CLI - AI智能体最佳实践",
                "content": """【AI智能体使用记忆系统的最佳实践】

【1. 开始对话时】
# 搜索项目相关记忆和用户偏好
mcp-memory-local read "项目配置 技术栈" --top-k 5 --json --quiet
mcp-memory-local read "用户偏好 编程习惯" --scope global --top-k 3 --json --quiet

【2. 写入信息前】
# 先检查重复
mcp-memory-local check-duplicate "要写入的内容" --threshold 0.9 --json --quiet
# 如果没有重复，再写入
mcp-memory-local write "内容" --title "标题" --keywords "关键词" --scope project --json --quiet

【3. 什么时候用 project scope】
- 项目特定的配置、技术栈、架构决策
- 当前任务的上下文和进展
- 项目相关的bug和解决方案

【4. 什么时候用 global scope】
- 用户的编程偏好和习惯
- 通用的技术知识和最佳实践
- 跨项目可复用的经验

【5. 什么时候用 check-duplicate】
- 每次写入前都应该检查
- 阈值建议用 0.9（宽松）到 0.95（严格）

【6. 什么时候用 reflect】
- 长时间会话结束时
- 记忆库积累较多时（>50条）
- 用户要求整理记忆时

【7. 重要：所有AI调用都必须加 --json --quiet】
这确保输出是纯JSON，没有其他干扰文本""",
                "keywords": ["最佳实践", "AI使用指南", "工作流", "使用规范"],
                "content_type": "note",
            },
        ]
        
        written = []
        for skill in cli_skills:
            memory_id = manager.write_memory(
                user_id=user_id,
                content=skill["content"],
                project_id="",
                scope="global",
                title=skill["title"],
                keywords=skill["keywords"],
                content_type=skill["content_type"],
                auto_enhance=False,
            )
            written.append({"title": skill["title"], "memory_id": memory_id})
        
        if json_output or quiet:
            output_json({
                "status": "success",
                "message": f"已写入 {len(written)} 条CLI使用技能到全局记忆",
                "skills": written,
            }, quiet=quiet)
        else:
            console.print(Panel(
                f"[green]✅ 已写入 {len(written)} 条CLI使用技能[/green]\n\n"
                + "\n".join([f"  [cyan]{s['title']}[/cyan] → {s['memory_id'][:12]}..." for s in written])
                + "\n\n[dim]这些技能已标记为 global scope，所有AI智能体均可检索使用[/dim]",
                title="技能引导完成",
                border_style="green"
            ))
        
    except Exception as e:
        if json_output or quiet:
            output_json({"status": "error", "message": str(e)}, quiet=quiet)
        else:
            console.print(f"[red]❌ 技能引导失败: {e}[/red]")


@app.command()
def interactive():
    """🖥️ 交互式TUI模式"""
    console.print(Panel(
        "[bold green]🧠 MCP Memory System - 交互式模式[/bold green]\n\n"
        "命令: [cyan]write[/cyan] 写入 | [cyan]read[/cyan] 读取 | [cyan]list[/cyan] 列表\n"
        "       [cyan]show[/cyan] 详情 | [cyan]delete[/cyan] 删除 | [cyan]stats[/cyan] 统计 | [cyan]quit[/cyan] 退出",
        title="欢迎使用",
        border_style="green"
    ))
    
    while True:
        try:
            command = Prompt.ask("\n[bold green]❯[/bold green]", default="")
            command = command.strip().lower()
            
            if not command or command == "quit" or command == "exit":
                console.print("[yellow]👋 再见！[/yellow]")
                break
            
            elif command == "stats":
                stats()
            
            elif command == "list":
                list_memories()
            
            elif command.startswith("write "):
                content = command[6:]
                if content:
                    title = Prompt.ask("  标题", default="")
                    keywords = Prompt.ask("  关键词(逗号分隔)", default="")
                    write(content=content, title=title or None, keywords=keywords or None)
                else:
                    console.print("[red]请提供内容[/red]")
            
            elif command.startswith("read "):
                query = command[5:]
                if query:
                    read(query=query)
                else:
                    console.print("[red]请提供查询内容[/red]")
            
            elif command.startswith("show "):
                memory_id = command[5:]
                if memory_id:
                    show(memory_id=memory_id)
                else:
                    console.print("[red]请提供记忆ID[/red]")
            
            elif command.startswith("delete "):
                memory_id = command[7:]
                if memory_id:
                    delete(memory_id=memory_id)
                else:
                    console.print("[red]请提供记忆ID[/red]")
            
            else:
                console.print(f"[red]未知命令: {command}[/red]")
                console.print("可用: write, read, list, show, delete, stats, quit")
        
        except KeyboardInterrupt:
            console.print("\n[yellow]👋 再见！[/yellow]")
            break
        except Exception as e:
            console.print(f"[red]错误: {e}[/red]")


if __name__ == "__main__":
    app()
