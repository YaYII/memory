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
from rich.progress import Progress, SpinnerColumn, TextColumn
from rich.layout import Layout
from rich.live import Live
from rich.text import Text

# 确保能导入mcp_memory模块
project_root = Path(__file__).parent.parent.parent
sys.path.insert(0, str(project_root))

from mcp_memory.core.config import settings
from mcp_memory.memory.manager import MemoryManager

app = typer.Typer(
    name="mcp-memory-local",
    help="🧠 MCP Memory System - 本地CLI工具（无需服务器）",
    add_completion=False
)
console = Console()
# 全局实例（延迟初始化）
_memory_manager: Optional[MemoryManager] = None

def get_memory_manager() -> MemoryManager:
    """获取记忆管理器实例（单例模式）"""
    global _memory_manager
    if _memory_manager is None:
        console.print("[dim]🔄 正在初始化记忆系统...[/dim]")
        _memory_manager = MemoryManager()
        console.print("[dim]✅ 记忆系统初始化完成[/dim]")
    return _memory_manager


@app.command()
def write(
    content: str = typer.Argument(..., help="记忆内容"),
    title: Optional[str] = typer.Option(None, "--title", "-t", help="记忆标题"),
    scope: str = typer.Option("project", "--scope", "-s", help="作用域: project/global"),
    keywords: Optional[str] = typer.Option(None, "--keywords", "-k", help="关键词(逗号分隔)"),
    user_id: str = typer.Option("default_user", "--user", "-u", help="用户ID"),
    content_type: str = typer.Option("note", "--type", help="内容类型"),
):
    """📝 写入新记忆（本地直接操作）"""
    try:
        manager = get_memory_manager()
        
        # 解析关键词
        keyword_list = [k.strip() for k in keywords.split(",")] if keywords else []
        
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console,
        ) as progress:
            progress.add_task("正在写入记忆...", total=None)
            
            # 直接调用本地方法，不走HTTP
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
        
        console.print(Panel(
            f"[green]✅ 记忆已保存[/green]\n\n"
            f"ID: [cyan]{memory_id}[/cyan]\n"
            f"标题: {title or content[:30] + '...'}\n"
            f"关键词: {', '.join(keyword_list) if keyword_list else '无'}",
            title="写入成功",
            border_style="green"
        ))
        
    except Exception as e:
        console.print(f"[red]❌ 写入失败: {e}[/red]")


@app.command()
def read(
    query: str = typer.Argument(..., help="查询内容"),
    top_k: int = typer.Option(5, "--top-k", "-k", help="返回结果数量"),
    user_id: str = typer.Option("default_user", "--user", "-u", help="用户ID"),
):
    """🔍 搜索记忆（本地直接操作）"""
    try:
        manager = get_memory_manager()
        
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console,
        ) as progress:
            progress.add_task("正在搜索记忆...", total=None)
            
            # 直接调用本地方法
            results = manager.read_memory(
                user_id=user_id,
                query=query,
                project_id=settings.MCP_PROJECT_ID,
                limit=top_k
            )
        
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
            similarity = mem.get("similarity", 0)
            table.add_row(
                str(i),
                mem.get("title", "无标题")[:20],
                preview,
                f"{similarity:.2f}",
                mem.get("timestamp", "")[:19] if mem.get("timestamp") else ""
            )
        
        console.print(table)
        
    except Exception as e:
        console.print(f"[red]❌ 查询失败: {e}[/red]")


@app.command("list")
def list_memories(
    memory_type: str = typer.Option("all", "--type", "-t", help="记忆类型: all/storage/thinking/skill"),
    limit: int = typer.Option(20, "--limit", "-l", help="显示数量"),
    user_id: str = typer.Option("default_user", "--user", "-u", help="用户ID"),
):
    """📋 列出所有记忆（本地直接操作）"""
    try:
        manager = get_memory_manager()
        
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console,
        ) as progress:
            progress.add_task("正在加载记忆列表...", total=None)
            
            # 直接查询本地存储 - 使用MemoryManager的store
            memories = manager.store.query_by_type(
                query="",
                memory_type=memory_type,
                user_id=user_id,
                limit=limit
            )
        
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
        console.print(f"[red]❌ 加载失败: {e}[/red]")


@app.command()
def delete(
    memory_id: str = typer.Argument(..., help="记忆ID"),
    user_id: str = typer.Option("default_user", "--user", "-u", help="用户ID"),
    force: bool = typer.Option(False, "--force", "-f", help="强制删除，不确认"),
):
    """🗑️ 删除记忆（本地直接操作）"""
    try:
        if not force:
            confirm = typer.confirm(f"确定要删除记忆 {memory_id} 吗？")
            if not confirm:
                console.print("[yellow]已取消[/yellow]")
                return
        
        manager = get_memory_manager()
        
        # 直接调用本地删除方法
        manager.store.delete(memory_id)
        
        console.print(f"[green]✅ 记忆 {memory_id} 已删除[/green]")
        
    except Exception as e:
        console.print(f"[red]❌ 删除失败: {e}[/red]")


@app.command()
def stats():
    """📊 显示系统统计（本地直接操作）"""
    try:
        manager = get_memory_manager()
        
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console,
        ) as progress:
            progress.add_task("正在获取统计数据...", total=None)
            
            # 获取本地统计 - 通过查询所有记忆
            all_memories = manager.store.query_by_type(query="", memory_type="all", limit=10000)
            storage_count = len([m for m in all_memories if m.get("memory_type") == "storage"])
            thinking_count = len([m for m in all_memories if m.get("memory_type") == "thinking"])
            skill_count = len([m for m in all_memories if m.get("memory_type") == "skill"])
            total_memories = len(all_memories)
        
        # 显示统计
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
        console.print(f"[red]❌ 获取统计失败: {e}[/red]")




@app.command()
def show(
    memory_id: str = typer.Argument(..., help="记忆ID"),
):
    """🔍 显示记忆详情（本地直接操作）"""
    try:
        manager = get_memory_manager()
        
        # 查询记忆详情
        memories = manager.store.query_by_type(query="", memory_type="all", limit=100)
        target_mem = None
        for mem in memories:
            if mem.get("memory_id") == memory_id or mem.get("memory_id", "").startswith(memory_id):
                target_mem = mem
                break
        
        if not target_mem:
            console.print(f"[red]❌ 未找到记忆: {memory_id}[/red]")
            return
        
        # 显示详情
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
        console.print(f"[red]❌ 查询失败: {e}[/red]")


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
