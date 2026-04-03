#!/usr/bin/env python3
"""
MCP Memory Unified CLI - 统一的记忆系统命令行工具

支持两种模式：
  1. 服务器模式（默认）：通过HTTP API调用
  2. 本地模式（--local）：直接操作数据库，无需服务器

Usage:
    memory write "内容" --title "标题"
    memory read "查询内容" --top-k 5
    memory list
    memory delete <memory_id>
    memory show <memory_id>
    memory stats
    memory reflect
    
    memory --local write "内容"  # 本地模式
    memory --local read "查询"    # 本地模式
"""

import os
import sys
import asyncio
import json
from typing import Optional, Any
from pathlib import Path

import httpx
import typer
from rich.console import Console
from rich.table import Table
from rich.panel import Panel
from rich.progress import Progress, SpinnerColumn, TextColumn

project_root = Path(__file__).parent.parent.parent
sys.path.insert(0, str(project_root))

from mcp_memory.core.config import settings

app = typer.Typer(
    name="memory",
    help="🧠 MCP Memory System - 统一命令行工具",
    add_completion=False
)
console = Console()

_local_mode = False
_memory_manager = None
_json_mode = False
SERVER_URL = f"http://127.0.0.1:{settings.MCP_MEMORY_PORT}"
DEFAULT_USER = "cli_user"


def set_local_mode(value: bool):
    global _local_mode
    _local_mode = value


def is_local_mode() -> bool:
    return _local_mode


def set_json_mode(value: bool):
    global _json_mode
    _json_mode = value


def is_json_mode() -> bool:
    return _json_mode


def print_json_success(data: Any):
    output = {
        "status": "success",
        "data": data
    }
    print(json.dumps(output, ensure_ascii=False, default=str))


def print_json_error(error: str):
    output = {
        "status": "error",
        "error": error
    }
    print(json.dumps(output, ensure_ascii=False))


def get_memory_manager():
    global _memory_manager
    if _memory_manager is None:
        from mcp_memory.memory.manager import MemoryManager
        console.print("[dim]🔄 正在初始化记忆系统...[/dim]")
        _memory_manager = MemoryManager()
        console.print("[dim]✅ 记忆系统初始化完成[/dim]")
    return _memory_manager


def get_server_url() -> str:
    return SERVER_URL


async def check_server_health() -> bool:
    try:
        async with httpx.AsyncClient() as client:
            resp = await client.get(f"{get_server_url()}/health", timeout=2.0)
            return resp.status_code == 200
    except:
        return False


async def api_call(method: str, endpoint: str, **kwargs) -> dict:
    async with httpx.AsyncClient(timeout=30.0) as client:
        url = f"{get_server_url()}{endpoint}"
        if method == "GET":
            resp = await client.get(url, **kwargs)
        elif method == "POST":
            resp = await client.post(url, **kwargs)
        elif method == "DELETE":
            resp = await client.delete(url, **kwargs)
        else:
            raise ValueError(f"Unknown method: {method}")
        resp.raise_for_status()
        return resp.json()


@app.callback()
def main(
    local: bool = typer.Option(False, "--local", help="本地模式：直接操作数据库，无需服务器"),
    json: bool = typer.Option(False, "--json", help="JSON输出模式"),
):
    """统一的记忆系统命令行工具"""
    set_local_mode(local)
    set_json_mode(json)
    if not is_json_mode():
        if local:
            console.print("[dim]📦 使用本地模式[/dim]")
        else:
            console.print("[dim]🌐 使用服务器模式[/dim]")


@app.command()
def write(
    content: str = typer.Argument(..., help="记忆内容"),
    title: Optional[str] = typer.Option(None, "--title", "-t", help="记忆标题"),
    scope: str = typer.Option("project", "--scope", "-s", help="作用域: project/global"),
    keywords: Optional[str] = typer.Option(None, "--keywords", "-k", help="关键词(逗号分隔)"),
    user_id: str = typer.Option(DEFAULT_USER, "--user", "-u", help="用户ID"),
    content_type: str = typer.Option("note", "--type", help="内容类型"),
):
    """📝 写入新记忆"""
    if is_local_mode():
        _write_local(content, title, scope, keywords, user_id, content_type)
    else:
        _write_server(content, title, scope, keywords, user_id, content_type)


def _write_local(content, title, scope, keywords, user_id, content_type):
    try:
        manager = get_memory_manager()
        keyword_list = [k.strip() for k in keywords.split(",")] if keywords else []
        
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console,
            disable=is_json_mode()
        ) as progress:
            progress.add_task("正在写入记忆...", total=None)
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
        
        if is_json_mode():
            print_json_success({
                "id": memory_id,
                "status": "success",
                "title": title or content[:30] + '...',
                "keywords": keyword_list
            })
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
        if is_json_mode():
            print_json_error(str(e))
        else:
            console.print(f"[red]❌ 写入失败: {e}[/red]")


def _write_server(content, title, scope, keywords, user_id, content_type):
    async def _write():
        if not await check_server_health():
            if is_json_mode():
                print_json_error("服务器未运行")
            else:
                console.print("[red]❌ 服务器未运行，请先启动: mcp-memory-cli server start[/red]")
            return
        
        data = {
            "content": content,
            "user_id": user_id,
            "scope": scope,
        }
        if title:
            data["title"] = title
        if keywords:
            data["keywords"] = [k.strip() for k in keywords.split(",")]
        if content_type:
            data["tags"] = [content_type]
        
        try:
            with Progress(
                SpinnerColumn(),
                TextColumn("[progress.description]{task.description}"),
                console=console,
                disable=is_json_mode()
            ) as progress:
                progress.add_task("正在写入记忆...", total=None)
                result = await api_call("POST", "/memory/write", json=data)
            
            if is_json_mode():
                print_json_success({
                    "id": result.get('id', 'N/A'),
                    "status": result.get('status', 'success')
                })
            else:
                console.print(Panel(
                    f"[green]✅ 记忆已保存[/green]\n\n"
                    f"ID: [cyan]{result.get('id', 'N/A')}[/cyan]\n"
                    f"状态: {result.get('status', 'success')}",
                    title="写入成功",
                    border_style="green"
                ))
        except Exception as e:
            if is_json_mode():
                print_json_error(str(e))
            else:
                console.print(f"[red]❌ 写入失败: {e}[/red]")
    
    asyncio.run(_write())


@app.command()
def read(
    query: str = typer.Argument(..., help="查询内容"),
    top_k: int = typer.Option(5, "--top-k", "-k", help="返回结果数量"),
    scope: Optional[str] = typer.Option(None, "--scope", "-s", help="作用域过滤"),
    user_id: str = typer.Option(DEFAULT_USER, "--user", "-u", help="用户ID"),
):
    """🔍 读取/搜索记忆"""
    if is_local_mode():
        _read_local(query, top_k, scope, user_id)
    else:
        _read_server(query, top_k, scope, user_id)


def _read_local(query, top_k, scope, user_id):
    try:
        manager = get_memory_manager()
        
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console,
            disable=is_json_mode()
        ) as progress:
            progress.add_task("正在搜索记忆...", total=None)
            results, _ = manager.read_memory(
                user_id=user_id,
                query=query,
                project_id=settings.MCP_PROJECT_ID,
                limit=top_k,
                scope=scope
            )
        
        if is_json_mode():
            print_json_success({"memories": results})
        else:
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
        if is_json_mode():
            print_json_error(str(e))
        else:
            console.print(f"[red]❌ 查询失败: {e}[/red]")


def _read_server(query, top_k, scope, user_id):
    async def _read():
        if not await check_server_health():
            if is_json_mode():
                print_json_error("服务器未运行")
            else:
                console.print("[red]❌ 服务器未运行，请先启动: mcp-memory-cli server start[/red]")
            return
        
        data = {
            "query": query,
            "user_id": user_id,
            "top_k": top_k,
        }
        if scope:
            data["scope"] = scope
        
        try:
            with Progress(
                SpinnerColumn(),
                TextColumn("[progress.description]{task.description}"),
                console=console,
                disable=is_json_mode()
            ) as progress:
                progress.add_task("正在搜索记忆...", total=None)
                result = await api_call("POST", "/memory/read", json=data)
            
            memories = result if isinstance(result, list) else result.get("memories", [])
            
            if is_json_mode():
                print_json_success({"memories": memories})
            else:
                if not memories:
                    console.print("[yellow]📭 没有找到相关记忆[/yellow]")
                    return
                
                table = Table(title=f"🔍 搜索结果 ({len(memories)}条)", show_header=True, header_style="bold cyan")
                table.add_column("#", style="dim", width=3)
                table.add_column("标题", style="green")
                table.add_column("内容预览", style="white")
                table.add_column("类型", style="magenta")
                table.add_column("时间", style="dim")
                
                for i, mem in enumerate(memories, 1):
                    content = mem.get("content", "")
                    preview = content[:50] + "..." if len(content) > 50 else content
                    table.add_row(
                        str(i),
                        mem.get("title", "无标题")[:20],
                        preview,
                        mem.get("memory_type", "unknown"),
                        mem.get("timestamp", "")[:19] if mem.get("timestamp") else ""
                    )
                
                console.print(table)
            
        except Exception as e:
            if is_json_mode():
                print_json_error(str(e))
            else:
                console.print(f"[red]❌ 查询失败: {e}[/red]")
    
    asyncio.run(_read())


@app.command("list")
def list_memories(
    memory_type: str = typer.Option("all", "--type", "-t", help="记忆类型: all/storage/thinking/skill"),
    limit: int = typer.Option(20, "--limit", "-l", help="显示数量"),
    user_id: str = typer.Option(DEFAULT_USER, "--user", "-u", help="用户ID"),
):
    """📋 列出记忆"""
    if is_local_mode():
        _list_local(memory_type, limit, user_id)
    else:
        _list_server(memory_type, limit, user_id)


def _list_local(memory_type, limit, user_id):
    try:
        manager = get_memory_manager()
        
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console,
            disable=is_json_mode()
        ) as progress:
            progress.add_task("正在加载记忆列表...", total=None)
            memories = manager.store.query_by_type(
                query="",
                memory_type=memory_type,
                user_id=user_id,
                limit=limit
            )
        
        if is_json_mode():
            print_json_success({"memories": memories})
        else:
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
        if is_json_mode():
            print_json_error(str(e))
        else:
            console.print(f"[red]❌ 加载失败: {e}[/red]")


def _list_server(memory_type, limit, user_id):
    async def _list():
        if not await check_server_health():
            if is_json_mode():
                print_json_error("服务器未运行")
            else:
                console.print("[red]❌ 服务器未运行，请先启动: mcp-memory-cli server start[/red]")
            return
        
        try:
            params = {
                "query": "",
                "limit": limit,
            }
            if user_id != DEFAULT_USER:
                params["user_id"] = user_id
            if memory_type != "all":
                params["memory_type"] = memory_type
            
            with Progress(
                SpinnerColumn(),
                TextColumn("[progress.description]{task.description}"),
                console=console,
                disable=is_json_mode()
            ) as progress:
                progress.add_task("正在加载记忆列表...", total=None)
                result = await api_call("GET", "/tiered/query", params=params)
            
            memories = result if isinstance(result, list) else result.get("memories", [])
            
            if is_json_mode():
                print_json_success({"memories": memories})
            else:
                if not memories:
                    console.print("[yellow]📭 记忆库为空[/yellow]")
                    return
                
                table = Table(title=f"📋 记忆列表 ({len(memories)}条)", show_header=True, header_style="bold cyan")
                table.add_column("ID", style="dim", width=12)
                table.add_column("标题", style="green")
                table.add_column("类型", style="magenta")
                table.add_column("作用域", style="yellow")
                table.add_column("时间", style="dim")
                
                for mem in memories:
                    mem_id = mem.get("memory_id", mem.get("id", ""))
                    content = mem.get("content", "")
                    title = mem.get("title", content[:30] + "..." if len(content) > 30 else content)
                    table.add_row(
                        mem_id[:12] if mem_id else "N/A",
                        title[:25] if title else "无标题",
                        mem.get("memory_type", "unknown"),
                        mem.get("scope", ""),
                        mem.get("timestamp", "")[:19] if mem.get("timestamp") else ""
                    )
                
                console.print(table)
            
        except Exception as e:
            if is_json_mode():
                print_json_error(str(e))
            else:
                console.print(f"[red]❌ 加载失败: {e}[/red]")
    
    asyncio.run(_list())


@app.command()
def delete(
    memory_id: str = typer.Argument(..., help="记忆ID"),
    user_id: str = typer.Option(DEFAULT_USER, "--user", "-u", help="用户ID"),
    force: bool = typer.Option(False, "--force", "-f", help="强制删除，不确认"),
):
    """🗑️ 删除记忆"""
    if is_local_mode():
        _delete_local(memory_id, user_id, force)
    else:
        _delete_server(memory_id, user_id, force)


def _delete_local(memory_id, user_id, force):
    try:
        if not force:
            if is_json_mode():
                print_json_error("需要--force参数来强制删除")
                return
            confirm = typer.confirm(f"确定要删除记忆 {memory_id} 吗？")
            if not confirm:
                console.print("[yellow]已取消[/yellow]")
                return
        
        manager = get_memory_manager()
        manager.store.delete(memory_id)
        
        if is_json_mode():
            print_json_success({
                "memory_id": memory_id,
                "status": "deleted"
            })
        else:
            console.print(f"[green]✅ 记忆 {memory_id} 已删除[/green]")
        
    except Exception as e:
        if is_json_mode():
            print_json_error(str(e))
        else:
            console.print(f"[red]❌ 删除失败: {e}[/red]")


def _delete_server(memory_id, user_id, force):
    async def _delete():
        if not await check_server_health():
            if is_json_mode():
                print_json_error("服务器未运行")
            else:
                console.print("[red]❌ 服务器未运行，请先启动: mcp-memory-cli server start[/red]")
            return
        
        if not force:
            if is_json_mode():
                print_json_error("需要--force参数来强制删除")
                return
            confirm = typer.confirm(f"确定要删除记忆 {memory_id} 吗？")
            if not confirm:
                console.print("[yellow]已取消[/yellow]")
                return
        
        try:
            await api_call("POST", "/memory/delete", json={
                "memory_id": memory_id,
                "user_id": user_id
            })
            
            if is_json_mode():
                print_json_success({
                    "memory_id": memory_id,
                    "status": "deleted"
                })
            else:
                console.print(f"[green]✅ 记忆 {memory_id} 已删除[/green]")
        except Exception as e:
            if is_json_mode():
                print_json_error(str(e))
            else:
                console.print(f"[red]❌ 删除失败: {e}[/red]")
    
    asyncio.run(_delete())


@app.command()
def show(
    memory_id: str = typer.Argument(..., help="记忆ID"),
    user_id: str = typer.Option(DEFAULT_USER, "--user", "-u", help="用户ID"),
):
    """🔍 显示记忆详情"""
    if is_local_mode():
        _show_local(memory_id)
    else:
        _show_server(memory_id)


def _show_local(memory_id):
    try:
        manager = get_memory_manager()
        memories = manager.store.query_by_type(query="", memory_type="all", limit=100)
        target_mem = None
        for mem in memories:
            if mem.get("memory_id") == memory_id or mem.get("memory_id", "").startswith(memory_id):
                target_mem = mem
                break
        
        if not target_mem:
            if is_json_mode():
                print_json_error(f"未找到记忆: {memory_id}")
            else:
                console.print(f"[red]❌ 未找到记忆: {memory_id}[/red]")
            return
        
        if is_json_mode():
            print_json_success(target_mem)
        else:
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
        if is_json_mode():
            print_json_error(str(e))
        else:
            console.print(f"[red]❌ 查询失败: {e}[/red]")


def _show_server(memory_id):
    async def _show():
        if not await check_server_health():
            if is_json_mode():
                print_json_error("服务器未运行")
            else:
                console.print("[red]❌ 服务器未运行，请先启动: mcp-memory-cli server start[/red]")
            return
        
        try:
            result = await api_call("GET", f"/dashboard/memory/{memory_id}")
            
            if is_json_mode():
                print_json_success(result)
            else:
                console.print(Panel(
                    f"[bold cyan]ID:[/bold cyan] {result.get('id')}\n"
                    f"[bold cyan]标题:[/bold cyan] {result.get('title', '无标题')}\n"
                    f"[bold cyan]类型:[/bold cyan] {result.get('memory_type', 'unknown')}\n"
                    f"[bold cyan]用户:[/bold cyan] {result.get('user_id')}\n"
                    f"[bold cyan]作用域:[/bold cyan] {result.get('scope')}\n"
                    f"[bold cyan]时间:[/bold cyan] {result.get('timestamp')}\n"
                    f"[bold cyan]关键词:[/bold cyan] {', '.join(result.get('keywords', [])) or '无'}\n"
                    f"\n[bold cyan]内容:[/bold cyan]\n{result.get('content', '')}",
                    title="记忆详情",
                    border_style="cyan"
                ))
            
        except Exception as e:
            if is_json_mode():
                print_json_error(str(e))
            else:
                console.print(f"[red]❌ 查询失败: {e}[/red]")
    
    asyncio.run(_show())


@app.command()
def stats(
    user_id: str = typer.Option(DEFAULT_USER, "--user", "-u", help="用户ID"),
):
    """📊 显示系统统计"""
    if is_local_mode():
        _stats_local()
    else:
        _stats_server()


def _stats_local():
    try:
        manager = get_memory_manager()
        
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console,
            disable=is_json_mode()
        ) as progress:
            progress.add_task("正在获取统计数据...", total=None)
            all_memories = manager.store.query_by_type(query="", memory_type="all", limit=10000)
            storage_count = len([m for m in all_memories if m.get("memory_type") == "storage"])
            thinking_count = len([m for m in all_memories if m.get("memory_type") == "thinking"])
            skill_count = len([m for m in all_memories if m.get("memory_type") == "skill"])
            total_memories = len(all_memories)
            
            graph_stats = manager.store.get_tiered_stats()
        
        stats_data = {
            "total_memories": total_memories,
            "storage_count": storage_count,
            "thinking_count": thinking_count,
            "skill_count": skill_count,
            "data_path": str(settings.CHROMA_DATA_PATH),
            "graph_nodes": graph_stats.get("total_count", 0)
        }
        
        if is_json_mode():
            print_json_success(stats_data)
        else:
            table = Table(title="📊 系统统计", show_header=False)
            table.add_column("指标", style="cyan")
            table.add_column("值", style="green")
            
            table.add_row("总记忆数", str(total_memories))
            table.add_row("存储层", str(storage_count))
            table.add_row("思维层", str(thinking_count))
            table.add_row("技能层", str(skill_count))
            table.add_row("数据目录", str(settings.CHROMA_DATA_PATH))
            table.add_row("图谱节点", str(graph_stats.get("total_count", 0)))
            
            console.print(table)
        
    except Exception as e:
        if is_json_mode():
            print_json_error(str(e))
        else:
            console.print(f"[red]❌ 获取统计失败: {e}[/red]")


def _stats_server():
    async def _stats():
        if not await check_server_health():
            if is_json_mode():
                print_json_error("服务器未运行")
            else:
                console.print("[red]❌ 服务器未运行，请先启动: mcp-memory-cli server start[/red]")
            return
        
        try:
            with Progress(
                SpinnerColumn(),
                TextColumn("[progress.description]{task.description}"),
                console=console,
                disable=is_json_mode()
            ) as progress:
                progress.add_task("正在获取统计数据...", total=None)
                stats_data = await api_call("GET", "/dashboard/stats")
                evolution = await api_call("GET", "/dashboard/evolution/status")
            
            tiered = stats_data.get("tiered_breakdown", {})
            total_count = stats_data.get("memory_count", 0)
            
            combined_stats = {
                "total_memories": total_count,
                "storage_count": tiered.get("storage", 0),
                "thinking_count": tiered.get("thinking", 0),
                "skill_count": tiered.get("skill", 0),
                "llm_enabled": stats_data.get("llm_enabled"),
                "providers_count": stats_data.get("providers_count", 0),
                "evolution": evolution
            }
            
            if is_json_mode():
                print_json_success(combined_stats)
            else:
                table = Table(title="📊 系统统计", show_header=False)
                table.add_column("指标", style="cyan")
                table.add_column("值", style="green")
                
                table.add_row("总记忆数", str(total_count))
                table.add_row("存储层", str(tiered.get("storage", 0)))
                table.add_row("思维层", str(tiered.get("thinking", 0)))
                table.add_row("技能层", str(tiered.get("skill", 0)))
                table.add_row("LLM启用", "✅" if stats_data.get("llm_enabled") else "❌")
                table.add_row("提供商数", str(stats_data.get("providers_count", 0)))
                
                console.print(table)
                
                if evolution:
                    evo_table = Table(title="🧬 进化状态", show_header=False)
                    evo_table.add_column("指标", style="cyan")
                    evo_table.add_column("值", style="green")
                    
                    evo_table.add_row("进化阶段", evolution.get("evolution_stage", "unknown"))
                    evo_table.add_row("神经元数", str(evolution.get("neuron_count", 0)))
                    evo_table.add_row("突触数", str(evolution.get("synapse_count", 0)))
                    evo_table.add_row("运行状态", "✅ 运行中" if evolution.get("is_running") else "⏸️ 已停止")
                    
                    console.print(evo_table)
            
        except Exception as e:
            if is_json_mode():
                print_json_error(str(e))
            else:
                console.print(f"[red]❌ 获取统计失败: {e}[/red]")
    
    asyncio.run(_stats())


@app.command()
def reflect(
    user_id: str = typer.Option(DEFAULT_USER, "--user", "-u", help="用户ID"),
):
    """🤔 触发深度反思"""
    if is_local_mode():
        _reflect_local()
    else:
        _reflect_server(user_id)


def _reflect_local():
    try:
        manager = get_memory_manager()
        
        from mcp_memory.memory.daily_reflection import DailyReflection
        dr = DailyReflection(memory_store=manager.store)
        
        if not is_json_mode():
            console.print("[dim]🔄 正在执行每日反思...[/dim]")
        
        async def run_reflection():
            await dr.initialize()
            return await dr.run_daily_reflection()
        
        stats = asyncio.run(run_reflection())
        
        if is_json_mode():
            print_json_success(stats)
        else:
            console.print(Panel(
                f"[green]✅ 每日反思完成[/green]\n\n"
                f"发现重复: {stats.get('duplicates_found', 0)} 条\n"
                f"合并记忆: {stats.get('memories_merged', 0)} 条\n"
                f"语言修复: {stats.get('language_fixed', 0)} 条",
                title="反思结果",
                border_style="green"
            ))
        
    except Exception as e:
        if is_json_mode():
            print_json_error(str(e))
        else:
            console.print(f"[red]❌ 反思失败: {e}[/red]")


def _reflect_server(user_id):
    async def _reflect():
        if not await check_server_health():
            if is_json_mode():
                print_json_error("服务器未运行")
            else:
                console.print("[red]❌ 服务器未运行，请先启动: mcp-memory-cli server start[/red]")
            return
        
        try:
            with Progress(
                SpinnerColumn(),
                TextColumn("[progress.description]{task.description}"),
                console=console,
                disable=is_json_mode()
            ) as progress:
                progress.add_task("正在触发深度反思...", total=None)
                result = await api_call("POST", "/memory/reflect", params={"user_id": user_id})
            
            if is_json_mode():
                print_json_success({
                    "status": result.get('status', 'success'),
                    "message": result.get('message', '反思任务已触发')
                })
            else:
                console.print(Panel(
                    f"[green]✅ {result.get('status', 'success')}[/green]\n\n"
                    f"{result.get('message', '反思任务已触发')}",
                    title="深度反思",
                    border_style="green"
                ))
        except Exception as e:
            if is_json_mode():
                print_json_error(str(e))
            else:
                console.print(f"[red]❌ 触发失败: {e}[/red]")
    
    asyncio.run(_reflect())


@app.command("batch-write")
def batch_write(
    file_path: str = typer.Argument(..., help="JSONL文件路径，每行一个JSON对象"),
    scope: str = typer.Option("project", "--scope", "-s", help="作用域: project/global"),
    user_id: str = typer.Option(DEFAULT_USER, "--user", "-u", help="用户ID"),
    content_type: str = typer.Option("note", "--type", help="内容类型"),
):
    """📝 批量写入记忆（JSONL格式）"""
    if is_local_mode():
        _batch_write_local(file_path, scope, user_id, content_type)
    else:
        _batch_write_server(file_path, scope, user_id, content_type)


def _batch_write_local(file_path, scope, user_id, content_type):
    try:
        manager = get_memory_manager()
        success_count = 0
        fail_count = 0
        failures = []
        
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console,
            disable=is_json_mode()
        ) as progress:
            task = progress.add_task("正在读取文件...", total=None)
            
            if not os.path.exists(file_path):
                raise FileNotFoundError(f"文件不存在: {file_path}")
            
            memories = []
            with open(file_path, 'r', encoding='utf-8') as f:
                for line_num, line in enumerate(f, 1):
                    line = line.strip()
                    if not line:
                        continue
                    try:
                        mem_data = json.loads(line)
                        memories.append((line_num, mem_data))
                    except Exception as e:
                        fail_count += 1
                        failures.append(f"第{line_num}行: JSON解析错误 - {str(e)}")
            
            progress.update(task, description=f"正在批量写入 {len(memories)} 条记忆...")
            
            for line_num, mem_data in memories:
                try:
                    content = mem_data.get("content", "")
                    if not content:
                        fail_count += 1
                        failures.append(f"第{line_num}行: content字段缺失")
                        continue
                    
                    title = mem_data.get("title")
                    keywords = mem_data.get("keywords", [])
                    mem_scope = mem_data.get("scope", scope)
                    mem_user = mem_data.get("user_id", user_id)
                    mem_content_type = mem_data.get("content_type", content_type)
                    
                    manager.write_memory(
                        user_id=mem_user,
                        content=content,
                        scope=mem_scope,
                        title=title,
                        keywords=keywords,
                        content_type=mem_content_type,
                        auto_enhance=True
                    )
                    success_count += 1
                except Exception as e:
                    fail_count += 1
                    failures.append(f"第{line_num}行: {str(e)}")
        
        stats = {
            "total": success_count + fail_count,
            "success": success_count,
            "failed": fail_count,
            "failures": failures
        }
        
        if is_json_mode():
            print_json_success(stats)
        else:
            table = Table(title="批量写入结果", show_header=False)
            table.add_column("指标", style="cyan")
            table.add_column("值", style="green")
            table.add_row("总处理数", str(success_count + fail_count))
            table.add_row("成功数", str(success_count))
            table.add_row("失败数", str(fail_count))
            console.print(table)
            
            if failures:
                console.print("\n[red]失败详情:[/red]")
                for f in failures[:10]:
                    console.print(f"  - {f}")
                if len(failures) > 10:
                    console.print(f"  ... 还有 {len(failures) - 10} 条失败")
        
    except Exception as e:
        if is_json_mode():
            print_json_error(str(e))
        else:
            console.print(f"[red]❌ 批量写入失败: {e}[/red]")


def _batch_write_server(file_path, scope, user_id, content_type):
    async def _write():
        if not await check_server_health():
            if is_json_mode():
                print_json_error("服务器未运行")
            else:
                console.print("[red]❌ 服务器未运行，请先启动: mcp-memory-cli server start[/red]")
            return
        
        try:
            success_count = 0
            fail_count = 0
            failures = []
            
            with Progress(
                SpinnerColumn(),
                TextColumn("[progress.description]{task.description}"),
                console=console,
                disable=is_json_mode()
            ) as progress:
                task = progress.add_task("正在读取文件...", total=None)
                
                if not os.path.exists(file_path):
                    raise FileNotFoundError(f"文件不存在: {file_path}")
                
                memories = []
                with open(file_path, 'r', encoding='utf-8') as f:
                    for line_num, line in enumerate(f, 1):
                        line = line.strip()
                        if not line:
                            continue
                        try:
                            mem_data = json.loads(line)
                            memories.append((line_num, mem_data))
                        except Exception as e:
                            fail_count += 1
                            failures.append(f"第{line_num}行: JSON解析错误 - {str(e)}")
                
                progress.update(task, description=f"正在批量写入 {len(memories)} 条记忆...")
                
                for line_num, mem_data in memories:
                    try:
                        content = mem_data.get("content", "")
                        if not content:
                            fail_count += 1
                            failures.append(f"第{line_num}行: content字段缺失")
                            continue
                        
                        data = {
                            "content": content,
                            "user_id": mem_data.get("user_id", user_id),
                            "scope": mem_data.get("scope", scope),
                        }
                        if mem_data.get("title"):
                            data["title"] = mem_data["title"]
                        if mem_data.get("keywords"):
                            data["keywords"] = mem_data["keywords"]
                        if mem_data.get("content_type", content_type):
                            data["tags"] = [mem_data.get("content_type", content_type)]
                        
                        await api_call("POST", "/memory/write", json=data)
                        success_count += 1
                    except Exception as e:
                        fail_count += 1
                        failures.append(f"第{line_num}行: {str(e)}")
            
            stats = {
                "total": success_count + fail_count,
                "success": success_count,
                "failed": fail_count,
                "failures": failures
            }
            
            if is_json_mode():
                print_json_success(stats)
            else:
                table = Table(title="批量写入结果", show_header=False)
                table.add_column("指标", style="cyan")
                table.add_column("值", style="green")
                table.add_row("总处理数", str(success_count + fail_count))
                table.add_row("成功数", str(success_count))
                table.add_row("失败数", str(fail_count))
                console.print(table)
                
                if failures:
                    console.print("\n[red]失败详情:[/red]")
                    for f in failures[:10]:
                        console.print(f"  - {f}")
                    if len(failures) > 10:
                        console.print(f"  ... 还有 {len(failures) - 10} 条失败")
        
        except Exception as e:
            if is_json_mode():
                print_json_error(str(e))
            else:
                console.print(f"[red]❌ 批量写入失败: {e}[/red]")
    
    asyncio.run(_write())


@app.command("batch-delete")
def batch_delete(
    memory_ids: Optional[list[str]] = typer.Argument(None, help="记忆ID列表（可选，不指定则从文件读取）"),
    file_path: Optional[str] = typer.Option(None, "--file", "-f", help="从文件读取ID列表，每行一个ID"),
    user_id: str = typer.Option(DEFAULT_USER, "--user", "-u", help="用户ID"),
    force: bool = typer.Option(False, "--force", "-f", help="强制删除，不确认"),
):
    """🗑️ 批量删除记忆"""
    if not memory_ids and not file_path:
        console.print("[red]❌ 必须提供记忆ID列表或文件路径[/red]")
        raise typer.Exit(1)
    
    if is_local_mode():
        _batch_delete_local(memory_ids, file_path, user_id, force)
    else:
        _batch_delete_server(memory_ids, file_path, user_id, force)


def _batch_delete_local(memory_ids, file_path, user_id, force):
    try:
        manager = get_memory_manager()
        ids_to_delete = []
        
        if memory_ids:
            ids_to_delete = memory_ids
        elif file_path:
            if not os.path.exists(file_path):
                raise FileNotFoundError(f"文件不存在: {file_path}")
            with open(file_path, 'r', encoding='utf-8') as f:
                for line in f:
                    line = line.strip()
                    if line:
                        ids_to_delete.append(line)
        
        if not ids_to_delete:
            if is_json_mode():
                print_json_error("没有找到要删除的记忆ID")
            else:
                console.print("[yellow]📭 没有要删除的记忆[/yellow]")
            return
        
        if not force:
            if is_json_mode():
                print_json_error("需要--force参数来强制删除")
                return
            confirm = typer.confirm(f"确定要删除 {len(ids_to_delete)} 条记忆吗？")
            if not confirm:
                console.print("[yellow]已取消[/yellow]")
                return
        
        success_count = 0
        fail_count = 0
        failures = []
        
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console,
            disable=is_json_mode()
        ) as progress:
            task = progress.add_task(f"正在删除 {len(ids_to_delete)} 条记忆...", total=None)
            
            for mem_id in ids_to_delete:
                try:
                    success = manager.delete_memory(user_id, mem_id)
                    if success:
                        success_count += 1
                    else:
                        fail_count += 1
                        failures.append(f"{mem_id}: 删除失败")
                except Exception as e:
                    fail_count += 1
                    failures.append(f"{mem_id}: {str(e)}")
        
        stats = {
            "total": success_count + fail_count,
            "success": success_count,
            "failed": fail_count,
            "failures": failures
        }
        
        if is_json_mode():
            print_json_success(stats)
        else:
            table = Table(title="批量删除结果", show_header=False)
            table.add_column("指标", style="cyan")
            table.add_column("值", style="green")
            table.add_row("总处理数", str(success_count + fail_count))
            table.add_row("成功数", str(success_count))
            table.add_row("失败数", str(fail_count))
            console.print(table)
            
            if failures:
                console.print("\n[red]失败详情:[/red]")
                for f in failures[:10]:
                    console.print(f"  - {f}")
                if len(failures) > 10:
                    console.print(f"  ... 还有 {len(failures) - 10} 条失败")
        
    except Exception as e:
        if is_json_mode():
            print_json_error(str(e))
        else:
            console.print(f"[red]❌ 批量删除失败: {e}[/red]")


def _batch_delete_server(memory_ids, file_path, user_id, force):
    async def _delete():
        if not await check_server_health():
            if is_json_mode():
                print_json_error("服务器未运行")
            else:
                console.print("[red]❌ 服务器未运行，请先启动: mcp-memory-cli server start[/red]")
            return
        
        try:
            ids_to_delete = []
            
            if memory_ids:
                ids_to_delete = memory_ids
            elif file_path:
                if not os.path.exists(file_path):
                    raise FileNotFoundError(f"文件不存在: {file_path}")
                with open(file_path, 'r', encoding='utf-8') as f:
                    for line in f:
                        line = line.strip()
                        if line:
                            ids_to_delete.append(line)
            
            if not ids_to_delete:
                if is_json_mode():
                    print_json_error("没有找到要删除的记忆ID")
                else:
                    console.print("[yellow]📭 没有要删除的记忆[/yellow]")
                return
            
            if not force:
                if is_json_mode():
                    print_json_error("需要--force参数来强制删除")
                    return
                confirm = typer.confirm(f"确定要删除 {len(ids_to_delete)} 条记忆吗？")
                if not confirm:
                    console.print("[yellow]已取消[/yellow]")
                    return
            
            success_count = 0
            fail_count = 0
            failures = []
            
            with Progress(
                SpinnerColumn(),
                TextColumn("[progress.description]{task.description}"),
                console=console,
                disable=is_json_mode()
            ) as progress:
                task = progress.add_task(f"正在删除 {len(ids_to_delete)} 条记忆...", total=None)
                
                for mem_id in ids_to_delete:
                    try:
                        await api_call("POST", "/memory/delete", json={
                            "memory_id": mem_id,
                            "user_id": user_id
                        })
                        success_count += 1
                    except Exception as e:
                        fail_count += 1
                        failures.append(f"{mem_id}: {str(e)}")
            
            stats = {
                "total": success_count + fail_count,
                "success": success_count,
                "failed": fail_count,
                "failures": failures
            }
            
            if is_json_mode():
                print_json_success(stats)
            else:
                table = Table(title="批量删除结果", show_header=False)
                table.add_column("指标", style="cyan")
                table.add_column("值", style="green")
                table.add_row("总处理数", str(success_count + fail_count))
                table.add_row("成功数", str(success_count))
                table.add_row("失败数", str(fail_count))
                console.print(table)
                
                if failures:
                    console.print("\n[red]失败详情:[/red]")
                    for f in failures[:10]:
                        console.print(f"  - {f}")
                    if len(failures) > 10:
                        console.print(f"  ... 还有 {len(failures) - 10} 条失败")
        
        except Exception as e:
            if is_json_mode():
                print_json_error(str(e))
            else:
                console.print(f"[red]❌ 批量删除失败: {e}[/red]")
    
    asyncio.run(_delete())


@app.command("batch-export")
def batch_export(
    output_path: str = typer.Argument(..., help="输出文件路径"),
    format: str = typer.Option("jsonl", "--format", help="输出格式: json/jsonl"),
    memory_type: str = typer.Option("all", "--type", "-t", help="记忆类型: all/storage/thinking/skill"),
    limit: int = typer.Option(1000, "--limit", "-l", help="导出数量限制"),
    user_id: str = typer.Option(DEFAULT_USER, "--user", "-u", help="用户ID"),
    start_time: Optional[str] = typer.Option(None, "--start-time", help="开始时间 (ISO格式)"),
    end_time: Optional[str] = typer.Option(None, "--end-time", help="结束时间 (ISO格式)"),
):
    """📤 批量导出记忆"""
    if is_local_mode():
        _batch_export_local(output_path, format, memory_type, limit, user_id, start_time, end_time)
    else:
        _batch_export_server(output_path, format, memory_type, limit, user_id, start_time, end_time)


def _batch_export_local(output_path, format, memory_type, limit, user_id, start_time, end_time):
    try:
        manager = get_memory_manager()
        
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console,
            disable=is_json_mode()
        ) as progress:
            progress.add_task("正在查询记忆...", total=None)
            
            all_memories = manager.store.query_by_type(
                query="",
                memory_type=memory_type,
                user_id=user_id,
                limit=limit
            )
            
            filtered_memories = []
            for mem in all_memories:
                ts = mem.get("timestamp", "")
                if start_time and ts < start_time:
                    continue
                if end_time and ts > end_time:
                    continue
                filtered_memories.append(mem)
            
            progress.add_task(f"正在导出 {len(filtered_memories)} 条记忆...", total=None)
            
            if format == "jsonl":
                with open(output_path, 'w', encoding='utf-8') as f:
                    for mem in filtered_memories:
                        f.write(json.dumps(mem, ensure_ascii=False) + '\n')
            else:
                with open(output_path, 'w', encoding='utf-8') as f:
                    json.dump(filtered_memories, f, ensure_ascii=False, indent=2)
        
        stats = {
            "count": len(filtered_memories),
            "format": format,
            "path": output_path
        }
        
        if is_json_mode():
            print_json_success(stats)
        else:
            console.print(f"[green]✅ 成功导出 {len(filtered_memories)} 条记忆到: {output_path}[/green]")
        
    except Exception as e:
        if is_json_mode():
            print_json_error(str(e))
        else:
            console.print(f"[red]❌ 批量导出失败: {e}[/red]")


def _batch_export_server(output_path, format, memory_type, limit, user_id, start_time, end_time):
    async def _export():
        if not await check_server_health():
            if is_json_mode():
                print_json_error("服务器未运行")
            else:
                console.print("[red]❌ 服务器未运行，请先启动: mcp-memory-cli server start[/red]")
            return
        
        try:
            with Progress(
                SpinnerColumn(),
                TextColumn("[progress.description]{task.description}"),
                console=console,
                disable=is_json_mode()
            ) as progress:
                progress.add_task("正在查询记忆...", total=None)
                
                params = {
                    "query": "",
                    "limit": limit,
                }
                if user_id != DEFAULT_USER:
                    params["user_id"] = user_id
                if memory_type != "all":
                    params["memory_type"] = memory_type
                
                result = await api_call("GET", "/tiered/query", params=params)
                memories = result if isinstance(result, list) else result.get("memories", [])
                
                filtered_memories = []
                for mem in memories:
                    ts = mem.get("timestamp", "")
                    if start_time and ts < start_time:
                        continue
                    if end_time and ts > end_time:
                        continue
                    filtered_memories.append(mem)
                
                progress.add_task(f"正在导出 {len(filtered_memories)} 条记忆...", total=None)
                
                if format == "jsonl":
                    with open(output_path, 'w', encoding='utf-8') as f:
                        for mem in filtered_memories:
                            f.write(json.dumps(mem, ensure_ascii=False) + '\n')
                else:
                    with open(output_path, 'w', encoding='utf-8') as f:
                        json.dump(filtered_memories, f, ensure_ascii=False, indent=2)
            
            stats = {
                "count": len(filtered_memories),
                "format": format,
                "path": output_path
            }
            
            if is_json_mode():
                print_json_success(stats)
            else:
                console.print(f"[green]✅ 成功导出 {len(filtered_memories)} 条记忆到: {output_path}[/green]")
        
        except Exception as e:
            if is_json_mode():
                print_json_error(str(e))
            else:
                console.print(f"[red]❌ 批量导出失败: {e}[/red]")
    
    asyncio.run(_export())


@app.command("import")
def import_memories(
    file_path: str = typer.Argument(..., help="输入文件路径（JSON或JSONL格式）"),
    scope: str = typer.Option("project", "--scope", "-s", help="作用域: project/global"),
    user_id: str = typer.Option(DEFAULT_USER, "--user", "-u", help="用户ID"),
    content_type: str = typer.Option("note", "--type", help="内容类型"),
):
    """📥 导入记忆"""
    if is_local_mode():
        _import_local(file_path, scope, user_id, content_type)
    else:
        _import_server(file_path, scope, user_id, content_type)


def _import_local(file_path, scope, user_id, content_type):
    try:
        manager = get_memory_manager()
        success_count = 0
        fail_count = 0
        failures = []
        
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console,
            disable=is_json_mode()
        ) as progress:
            task = progress.add_task("正在读取文件...", total=None)
            
            if not os.path.exists(file_path):
                raise FileNotFoundError(f"文件不存在: {file_path}")
            
            memories = []
            if file_path.endswith('.jsonl'):
                with open(file_path, 'r', encoding='utf-8') as f:
                    for line_num, line in enumerate(f, 1):
                        line = line.strip()
                        if not line:
                            continue
                        try:
                            mem_data = json.loads(line)
                            memories.append((line_num, mem_data))
                        except Exception as e:
                            fail_count += 1
                            failures.append(f"第{line_num}行: JSON解析错误 - {str(e)}")
            else:
                with open(file_path, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    if isinstance(data, list):
                        for idx, mem_data in enumerate(data):
                            memories.append((idx + 1, mem_data))
                    else:
                        memories.append((1, data))
            
            progress.update(task, description=f"正在导入 {len(memories)} 条记忆...")
            
            for line_num, mem_data in memories:
                try:
                    content = mem_data.get("content", "")
                    if not content:
                        fail_count += 1
                        failures.append(f"第{line_num}行: content字段缺失")
                        continue
                    
                    title = mem_data.get("title")
                    keywords = mem_data.get("keywords", [])
                    mem_scope = mem_data.get("scope", scope)
                    mem_user = mem_data.get("user_id", user_id)
                    mem_content_type = mem_data.get("content_type", content_type)
                    
                    manager.write_memory(
                        user_id=mem_user,
                        content=content,
                        scope=mem_scope,
                        title=title,
                        keywords=keywords,
                        content_type=mem_content_type,
                        auto_enhance=True
                    )
                    success_count += 1
                except Exception as e:
                    fail_count += 1
                    failures.append(f"第{line_num}行: {str(e)}")
        
        stats = {
            "total": success_count + fail_count,
            "success": success_count,
            "failed": fail_count,
            "failures": failures
        }
        
        if is_json_mode():
            print_json_success(stats)
        else:
            table = Table(title="导入结果", show_header=False)
            table.add_column("指标", style="cyan")
            table.add_column("值", style="green")
            table.add_row("总处理数", str(success_count + fail_count))
            table.add_row("成功数", str(success_count))
            table.add_row("失败数", str(fail_count))
            console.print(table)
            
            if failures:
                console.print("\n[red]失败详情:[/red]")
                for f in failures[:10]:
                    console.print(f"  - {f}")
                if len(failures) > 10:
                    console.print(f"  ... 还有 {len(failures) - 10} 条失败")
        
    except Exception as e:
        if is_json_mode():
            print_json_error(str(e))
        else:
            console.print(f"[red]❌ 导入失败: {e}[/red]")


def _import_server(file_path, scope, user_id, content_type):
    async def _import():
        if not await check_server_health():
            if is_json_mode():
                print_json_error("服务器未运行")
            else:
                console.print("[red]❌ 服务器未运行，请先启动: mcp-memory-cli server start[/red]")
            return
        
        try:
            success_count = 0
            fail_count = 0
            failures = []
            
            with Progress(
                SpinnerColumn(),
                TextColumn("[progress.description]{task.description}"),
                console=console,
                disable=is_json_mode()
            ) as progress:
                task = progress.add_task("正在读取文件...", total=None)
                
                if not os.path.exists(file_path):
                    raise FileNotFoundError(f"文件不存在: {file_path}")
                
                memories = []
                if file_path.endswith('.jsonl'):
                    with open(file_path, 'r', encoding='utf-8') as f:
                        for line_num, line in enumerate(f, 1):
                            line = line.strip()
                            if not line:
                                continue
                            try:
                                mem_data = json.loads(line)
                                memories.append((line_num, mem_data))
                            except Exception as e:
                                fail_count += 1
                                failures.append(f"第{line_num}行: JSON解析错误 - {str(e)}")
                else:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        data = json.load(f)
                        if isinstance(data, list):
                            for idx, mem_data in enumerate(data):
                                memories.append((idx + 1, mem_data))
                        else:
                            memories.append((1, data))
                
                progress.update(task, description=f"正在导入 {len(memories)} 条记忆...")
                
                for line_num, mem_data in memories:
                    try:
                        content = mem_data.get("content", "")
                        if not content:
                            fail_count += 1
                            failures.append(f"第{line_num}行: content字段缺失")
                            continue
                        
                        data = {
                            "content": content,
                            "user_id": mem_data.get("user_id", user_id),
                            "scope": mem_data.get("scope", scope),
                        }
                        if mem_data.get("title"):
                            data["title"] = mem_data["title"]
                        if mem_data.get("keywords"):
                            data["keywords"] = mem_data["keywords"]
                        if mem_data.get("content_type", content_type):
                            data["tags"] = [mem_data.get("content_type", content_type)]
                        
                        await api_call("POST", "/memory/write", json=data)
                        success_count += 1
                    except Exception as e:
                        fail_count += 1
                        failures.append(f"第{line_num}行: {str(e)}")
            
            stats = {
                "total": success_count + fail_count,
                "success": success_count,
                "failed": fail_count,
                "failures": failures
            }
            
            if is_json_mode():
                print_json_success(stats)
            else:
                table = Table(title="导入结果", show_header=False)
                table.add_column("指标", style="cyan")
                table.add_column("值", style="green")
                table.add_row("总处理数", str(success_count + fail_count))
                table.add_row("成功数", str(success_count))
                table.add_row("失败数", str(fail_count))
                console.print(table)
                
                if failures:
                    console.print("\n[red]失败详情:[/red]")
                    for f in failures[:10]:
                        console.print(f"  - {f}")
                    if len(failures) > 10:
                        console.print(f"  ... 还有 {len(failures) - 10} 条失败")
        
        except Exception as e:
            if is_json_mode():
                print_json_error(str(e))
            else:
                console.print(f"[red]❌ 导入失败: {e}[/red]")
    
    asyncio.run(_import())


@app.command("export")
def export_alias(
    output_path: str = typer.Argument(..., help="输出文件路径"),
    format: str = typer.Option("jsonl", "--format", help="输出格式: json/jsonl"),
    memory_type: str = typer.Option("all", "--type", "-t", help="记忆类型: all/storage/thinking/skill"),
    limit: int = typer.Option(1000, "--limit", "-l", help="导出数量限制"),
    user_id: str = typer.Option(DEFAULT_USER, "--user", "-u", help="用户ID"),
    start_time: Optional[str] = typer.Option(None, "--start-time", help="开始时间 (ISO格式)"),
    end_time: Optional[str] = typer.Option(None, "--end-time", help="结束时间 (ISO格式)"),
):
    """📤 导出记忆（batch-export的别名）"""
    batch_export(output_path, format, memory_type, limit, user_id, start_time, end_time)


@app.command("list-users")
def list_users():
    """👥 列出所有用户"""
    if is_local_mode():
        _list_users_local()
    else:
        _list_users_server()


def _list_users_local():
    try:
        manager = get_memory_manager()
        users = manager.store.get_all_users()
        
        if is_json_mode():
            print_json_success({"users": users})
        else:
            if not users:
                console.print("[yellow]📭 没有用户数据[/yellow]")
                return
            
            table = Table(title="👥 用户列表", show_header=True, header_style="bold cyan")
            table.add_column("用户ID", style="green")
            table.add_column("记忆总数", style="magenta")
            table.add_column("存储层", style="yellow")
            table.add_column("思维层", style="cyan")
            table.add_column("技能层", style="white")
            table.add_column("总字符", style="dim")
            table.add_column("首次使用", style="dim")
            table.add_column("最后使用", style="dim")
            
            for user in users:
                table.add_row(
                    user.get("user_id", "N/A"),
                    str(user.get("memory_count", 0)),
                    str(user.get("storage_count", 0)),
                    str(user.get("thinking_count", 0)),
                    str(user.get("skill_count", 0)),
                    str(user.get("total_chars", 0)),
                    user.get("first_seen", "")[:19] if user.get("first_seen") else "",
                    user.get("last_seen", "")[:19] if user.get("last_seen") else ""
                )
            
            console.print(table)
        
    except Exception as e:
        if is_json_mode():
            print_json_error(str(e))
        else:
            console.print(f"[red]❌ 获取用户列表失败: {e}[/red]")


def _list_users_server():
    async def _list():
        if not await check_server_health():
            if is_json_mode():
                print_json_error("服务器未运行")
            else:
                console.print("[red]❌ 服务器未运行，请先启动: mcp-memory-cli server start[/red]")
            return
        
        try:
            with Progress(
                SpinnerColumn(),
                TextColumn("[progress.description]{task.description}"),
                console=console,
                disable=is_json_mode()
            ) as progress:
                progress.add_task("正在加载用户列表...", total=None)
                result = await api_call("GET", "/users/list")
            
            users = result.get("users", [])
            
            if is_json_mode():
                print_json_success({"users": users})
            else:
                if not users:
                    console.print("[yellow]📭 没有用户数据[/yellow]")
                    return
                
                table = Table(title="👥 用户列表", show_header=True, header_style="bold cyan")
                table.add_column("用户ID", style="green")
                table.add_column("记忆总数", style="magenta")
                table.add_column("存储层", style="yellow")
                table.add_column("思维层", style="cyan")
                table.add_column("技能层", style="white")
                table.add_column("总字符", style="dim")
                table.add_column("首次使用", style="dim")
                table.add_column("最后使用", style="dim")
                
                for user in users:
                    table.add_row(
                        user.get("user_id", "N/A"),
                        str(user.get("memory_count", 0)),
                        str(user.get("storage_count", 0)),
                        str(user.get("thinking_count", 0)),
                        str(user.get("skill_count", 0)),
                        str(user.get("total_chars", 0)),
                        user.get("first_seen", "")[:19] if user.get("first_seen") else "",
                        user.get("last_seen", "")[:19] if user.get("last_seen") else ""
                    )
                
                console.print(table)
        
        except Exception as e:
            if is_json_mode():
                print_json_error(str(e))
            else:
                console.print(f"[red]❌ 获取用户列表失败: {e}[/red]")
    
    asyncio.run(_list())


@app.command("delete-user")
def delete_user(
    user_id: str = typer.Argument(..., help="要删除的用户ID"),
    force: bool = typer.Option(False, "--force", "-f", help="强制删除，不确认"),
):
    """🗑️ 删除用户及其所有记忆"""
    if is_local_mode():
        _delete_user_local(user_id, force)
    else:
        _delete_user_server(user_id, force)


def _delete_user_local(user_id, force):
    try:
        if not force:
            if is_json_mode():
                print_json_error("需要--force参数来强制删除")
                return
            confirm = typer.confirm(f"确定要删除用户 {user_id} 及其所有记忆吗？此操作不可恢复！")
            if not confirm:
                console.print("[yellow]已取消[/yellow]")
                return
        
        manager = get_memory_manager()
        success = manager.store.delete_user(user_id, force=force)
        
        if is_json_mode():
            if success:
                print_json_success({"status": "deleted", "user_id": user_id})
            else:
                print_json_error(f"未找到用户: {user_id}")
        else:
            if success:
                console.print(f"[green]✅ 用户 {user_id} 及其所有记忆已删除[/green]")
            else:
                console.print(f"[red]❌ 未找到用户: {user_id}[/red]")
        
    except Exception as e:
        if is_json_mode():
            print_json_error(str(e))
        else:
            console.print(f"[red]❌ 删除用户失败: {e}[/red]")


def _delete_user_server(user_id, force):
    async def _delete():
        if not await check_server_health():
            if is_json_mode():
                print_json_error("服务器未运行")
            else:
                console.print("[red]❌ 服务器未运行，请先启动: mcp-memory-cli server start[/red]")
            return
        
        if not force:
            if is_json_mode():
                print_json_error("需要--force参数来强制删除")
                return
            confirm = typer.confirm(f"确定要删除用户 {user_id} 及其所有记忆吗？此操作不可恢复！")
            if not confirm:
                console.print("[yellow]已取消[/yellow]")
                return
        
        try:
            await api_call("DELETE", "/users/delete", params={"user_id": user_id, "force": force})
            
            if is_json_mode():
                print_json_success({"status": "deleted", "user_id": user_id})
            else:
                console.print(f"[green]✅ 用户 {user_id} 及其所有记忆已删除[/green]")
        
        except Exception as e:
            if is_json_mode():
                print_json_error(str(e))
            else:
                console.print(f"[red]❌ 删除用户失败: {e}[/red]")
    
    asyncio.run(_delete())


@app.command("usage")
def usage(
    user_id: str = typer.Option(DEFAULT_USER, "--user", "-u", help="用户ID"),
    period: str = typer.Option("7d", "--period", "-p", help="统计周期: 1d/7d/30d/all"),
):
    """📊 显示使用统计"""
    if is_local_mode():
        _usage_local(user_id, period)
    else:
        _usage_server(user_id, period)


def _usage_local(user_id, period):
    try:
        manager = get_memory_manager()
        
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console,
            disable=is_json_mode()
        ) as progress:
            progress.add_task("正在获取使用统计...", total=None)
            usage_data = manager.store.get_user_usage(user_id, period)
        
        if is_json_mode():
            print_json_success(usage_data)
        else:
            if usage_data.get("error"):
                console.print(f"[red]❌ 获取使用统计失败: {usage_data['error']}[/red]")
                return
            
            table = Table(title=f"📊 使用统计 - {user_id} ({period})", show_header=False)
            table.add_column("指标", style="cyan")
            table.add_column("值", style="green")
            
            table.add_row("总记忆数", str(usage_data.get("total_memories", 0)))
            table.add_row(f"近期记忆({period})", str(usage_data.get("recent_memories", 0)))
            table.add_row("总字符数", str(usage_data.get("total_chars", 0)))
            
            by_type = usage_data.get("by_type", {})
            table.add_row("存储层记忆", str(by_type.get("storage", 0)))
            table.add_row("思维层记忆", str(by_type.get("thinking", 0)))
            table.add_row("技能层记忆", str(by_type.get("skill", 0)))
            
            by_scope = usage_data.get("by_scope", {})
            table.add_row("项目作用域", str(by_scope.get("project", 0)))
            table.add_row("全局作用域", str(by_scope.get("global", 0)))
            
            console.print(table)
        
    except Exception as e:
        if is_json_mode():
            print_json_error(str(e))
        else:
            console.print(f"[red]❌ 获取使用统计失败: {e}[/red]")


def _usage_server(user_id, period):
    async def _usage():
        if not await check_server_health():
            if is_json_mode():
                print_json_error("服务器未运行")
            else:
                console.print("[red]❌ 服务器未运行，请先启动: mcp-memory-cli server start[/red]")
            return
        
        try:
            with Progress(
                SpinnerColumn(),
                TextColumn("[progress.description]{task.description}"),
                console=console,
                disable=is_json_mode()
            ) as progress:
                progress.add_task("正在获取使用统计...", total=None)
                usage_data = await api_call("GET", "/users/usage", params={"user_id": user_id, "period": period})
            
            if is_json_mode():
                print_json_success(usage_data)
            else:
                if usage_data.get("error"):
                    console.print(f"[red]❌ 获取使用统计失败: {usage_data['error']}[/red]")
                    return
                
                table = Table(title=f"📊 使用统计 - {user_id} ({period})", show_header=False)
                table.add_column("指标", style="cyan")
                table.add_column("值", style="green")
                
                table.add_row("总记忆数", str(usage_data.get("total_memories", 0)))
                table.add_row(f"近期记忆({period})", str(usage_data.get("recent_memories", 0)))
                table.add_row("总字符数", str(usage_data.get("total_chars", 0)))
                
                by_type = usage_data.get("by_type", {})
                table.add_row("存储层记忆", str(by_type.get("storage", 0)))
                table.add_row("思维层记忆", str(by_type.get("thinking", 0)))
                table.add_row("技能层记忆", str(by_type.get("skill", 0)))
                
                by_scope = usage_data.get("by_scope", {})
                table.add_row("项目作用域", str(by_scope.get("project", 0)))
                table.add_row("全局作用域", str(by_scope.get("global", 0)))
                
                console.print(table)
        
        except Exception as e:
            if is_json_mode():
                print_json_error(str(e))
            else:
                console.print(f"[red]❌ 获取使用统计失败: {e}[/red]")
    
    asyncio.run(_usage())


if __name__ == "__main__":
    app()
