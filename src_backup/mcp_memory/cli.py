#!/usr/bin/env python3
"""
MCP Memory CLI - Command Line Interface for Memory System

Usage:
    mcp-memory-cli write "内容" --title "标题" --scope project
    mcp-memory-cli read "查询内容" --top-k 5
    mcp-memory-cli list --type storage
    mcp-memory-cli delete <memory_id>
    mcp-memory-cli stats
    mcp-memory-cli reflect
    mcp-memory-cli server start|stop|status
"""

import asyncio
import json
import sys
from typing import Optional
from datetime import datetime

import httpx
import typer
from rich.console import Console
from rich.table import Table
from rich.panel import Panel
from rich.progress import Progress, SpinnerColumn, TextColumn

from mcp_memory.core.config import settings

app = typer.Typer(
    name="mcp-memory-cli",
    help="🧠 MCP Memory System - 命令行工具",
    add_completion=False
)
console = Console()

SERVER_URL = f"http://127.0.0.1:{settings.MCP_MEMORY_PORT}"
DEFAULT_USER = "cli_user"


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


@app.command()
def write(
    content: str = typer.Argument(..., help="记忆内容"),
    title: Optional[str] = typer.Option(None, "--title", "-t", help="记忆标题"),
    scope: str = typer.Option("project", "--scope", "-s", help="作用域: project/global"),
    keywords: Optional[str] = typer.Option(None, "--keywords", "-k", help="关键词(逗号分隔)"),
    user_id: str = typer.Option(DEFAULT_USER, "--user", "-u", help="用户ID"),
):
    """📝 写入新记忆"""
    async def _write():
        if not await check_server_health():
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
        
        try:
            with Progress(
                SpinnerColumn(),
                TextColumn("[progress.description]{task.description}"),
                console=console,
            ) as progress:
                progress.add_task("正在写入记忆...", total=None)
                result = await api_call("POST", "/memory/write", json=data)
            
            console.print(Panel(
                f"[green]✅ 记忆已保存[/green]\n\n"
                f"ID: [cyan]{result.get('id', 'N/A')}[/cyan]\n"
                f"状态: {result.get('status', 'success')}",
                title="写入成功",
                border_style="green"
            ))
        except Exception as e:
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
    async def _read():
        if not await check_server_health():
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
            ) as progress:
                progress.add_task("正在搜索记忆...", total=None)
                result = await api_call("POST", "/memory/read", json=data)
            
            memories = result if isinstance(result, list) else result.get("memories", [])
            
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
            console.print(f"[red]❌ 查询失败: {e}[/red]")
    
    asyncio.run(_read())


@app.command("list")
def list_memories(
    memory_type: str = typer.Option("all", "--type", "-t", help="记忆类型: all/storage/thinking/skill"),
    limit: int = typer.Option(20, "--limit", "-l", help="显示数量"),
    user_id: str = typer.Option(DEFAULT_USER, "--user", "-u", help="用户ID"),
):
    """📋 列出记忆"""
    async def _list():
        if not await check_server_health():
            console.print("[red]❌ 服务器未运行，请先启动: mcp-memory-cli server start[/red]")
            return
        
        try:
            params = {
                "query": "",
                "user_id": user_id,
                "top_k": limit,
            }
            if memory_type != "all":
                params["memory_type"] = memory_type
            
            with Progress(
                SpinnerColumn(),
                TextColumn("[progress.description]{task.description}"),
                console=console,
            ) as progress:
                progress.add_task("正在加载记忆列表...", total=None)
                result = await api_call("GET", "/tiered/query", params=params)
            
            memories = result if isinstance(result, list) else result.get("memories", [])
            
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
                # API返回memory_id而不是id
                mem_id = mem.get("memory_id", mem.get("id", ""))
                # 从content中提取前20字符作为标题（如果没有title字段）
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
            console.print(f"[red]❌ 加载失败: {e}[/red]")
    
    asyncio.run(_list())


@app.command()
def delete(
    memory_id: str = typer.Argument(..., help="记忆ID"),
    user_id: str = typer.Option(DEFAULT_USER, "--user", "-u", help="用户ID"),
    force: bool = typer.Option(False, "--force", "-f", help="强制删除，不确认"),
):
    """🗑️ 删除记忆"""
    async def _delete():
        if not await check_server_health():
            console.print("[red]❌ 服务器未运行，请先启动: mcp-memory-cli server start[/red]")
            return
        
        if not force:
            confirm = typer.confirm(f"确定要删除记忆 {memory_id} 吗？")
            if not confirm:
                console.print("[yellow]已取消[/yellow]")
                return
        
        try:
            await api_call("POST", "/memory/delete", json={
                "memory_id": memory_id,
                "user_id": user_id
            })
            console.print(f"[green]✅ 记忆 {memory_id} 已删除[/green]")
        except Exception as e:
            console.print(f"[red]❌ 删除失败: {e}[/red]")
    
    asyncio.run(_delete())


@app.command()
def stats():
    """📊 显示系统统计"""
    async def _stats():
        if not await check_server_health():
            console.print("[red]❌ 服务器未运行，请先启动: mcp-memory-cli server start[/red]")
            return
        
        try:
            with Progress(
                SpinnerColumn(),
                TextColumn("[progress.description]{task.description}"),
                console=console,
            ) as progress:
                progress.add_task("正在获取统计数据...", total=None)
                stats_data = await api_call("GET", "/dashboard/stats")
                evolution = await api_call("GET", "/dashboard/evolution/status")
            
            table = Table(title="📊 系统统计", show_header=False)
            table.add_column("指标", style="cyan")
            table.add_column("值", style="green")
            
            # 获取三层记忆统计
            tiered = stats_data.get("tiered_breakdown", {})
            total_count = stats_data.get("memory_count", 0)
            
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
            console.print(f"[red]❌ 获取统计失败: {e}[/red]")
    
    asyncio.run(_stats())


@app.command()
def reflect(
    user_id: str = typer.Option(DEFAULT_USER, "--user", "-u", help="用户ID"),
):
    """🤔 触发深度反思"""
    async def _reflect():
        if not await check_server_health():
            console.print("[red]❌ 服务器未运行，请先启动: mcp-memory-cli server start[/red]")
            return
        
        try:
            with Progress(
                SpinnerColumn(),
                TextColumn("[progress.description]{task.description}"),
                console=console,
            ) as progress:
                progress.add_task("正在触发深度反思...", total=None)
                result = await api_call("POST", "/memory/reflect", params={"user_id": user_id})
            
            console.print(Panel(
                f"[green]✅ {result.get('status', 'success')}[/green]\n\n"
                f"{result.get('message', '反思任务已触发')}",
                title="深度反思",
                border_style="green"
            ))
        except Exception as e:
            console.print(f"[red]❌ 触发失败: {e}[/red]")
    
    asyncio.run(_reflect())


@app.command()
def rebuild():
    """🔧 重建记忆图谱"""
    async def _rebuild():
        if not await check_server_health():
            console.print("[red]❌ 服务器未运行，请先启动: mcp-memory-cli server start[/red]")
            return
        
        try:
            with Progress(
                SpinnerColumn(),
                TextColumn("[progress.description]{task.description}"),
                console=console,
            ) as progress:
                progress.add_task("正在重建图谱...", total=None)
                result = await api_call("POST", "/dashboard/rebuild_graph")
            
            console.print(f"[green]✅ 图谱重建完成: {result.get('status', 'success')}[/green]")
        except Exception as e:
            console.print(f"[red]❌ 重建失败: {e}[/red]")
    
    asyncio.run(_rebuild())


@app.command()
def feedback(
    memory_id: str = typer.Argument(..., help="记忆ID"),
    rating: int = typer.Option(0, "--rating", "-r", help="评分 (1-5)"),
    useful: Optional[bool] = typer.Option(None, "--useful/--not-useful", help="是否有用"),
    comment: Optional[str] = typer.Option(None, "--comment", "-c", help="评论"),
):
    """⭐ 提交记忆反馈"""
    async def _feedback():
        if not await check_server_health():
            console.print("[red]❌ 服务器未运行，请先启动: mcp-memory-cli server start[/red]")
            return
        
        feedback_data = {}
        if rating > 0:
            feedback_data["rating"] = rating
        if useful is not None:
            feedback_data["useful"] = useful
        if comment:
            feedback_data["comment"] = comment
        
        if not feedback_data:
            console.print("[yellow]请至少提供一项反馈内容[/yellow]")
            return
        
        try:
            await api_call("POST", f"/tiered/memory/{memory_id}/feedback", json=feedback_data)
            console.print(f"[green]✅ 反馈已提交[/green]")
        except Exception as e:
            console.print(f"[red]❌ 提交失败: {e}[/red]")
    
    asyncio.run(_feedback())


server_app = typer.Typer(help="🖥️ 服务器管理")
app.add_typer(server_app, name="server")


@server_app.command("start")
def server_start(
    port: int = typer.Option(settings.MCP_MEMORY_PORT, "--port", "-p", help="服务端口"),
    daemon: bool = typer.Option(True, "--daemon/--foreground", help="后台运行"),
):
    """🚀 启动服务器"""
    import subprocess
    import os
    
    async def check():
        return await check_server_health()
    
    if asyncio.run(check()):
        console.print(f"[green]✅ 服务器已在运行: {get_server_url()}[/green]")
        return
    
    python_exe = sys.executable
    
    if daemon:
        log_file = open(os.path.join(os.getcwd(), "mcp_server.log"), "a")
        subprocess.Popen(
            [python_exe, "-m", "mcp_memory.server"],
            stdout=log_file,
            stderr=log_file,
            start_new_session=True,
            cwd=os.getcwd(),
            env=os.environ.copy()
        )
        
        console.print(f"[green]🚀 服务器启动中...[/green]")
        console.print(f"   URL: [cyan]{get_server_url()}[/cyan]")
        console.print(f"   Dashboard: [cyan]{get_server_url()}/[/cyan]")
        console.print(f"   Vue UI: [cyan]{get_server_url()}/vue/[/cyan]")
    else:
        console.print(f"[green]🚀 启动服务器 (前台模式)...[/green]")
        subprocess.run([python_exe, "-m", "mcp_memory.server"], cwd=os.getcwd())


@server_app.command("stop")
def server_stop():
    """🛑 停止服务器"""
    import subprocess
    
    try:
        result = subprocess.run(
            ["pkill", "-f", "mcp_memory.server"],
            capture_output=True,
            text=True
        )
        if result.returncode == 0:
            console.print("[green]✅ 服务器已停止[/green]")
        else:
            console.print("[yellow]⚠️ 没有找到运行中的服务器[/yellow]")
    except Exception as e:
        console.print(f"[red]❌ 停止失败: {e}[/red]")


@server_app.command("status")
def server_status():
    """📡 检查服务器状态"""
    async def _status():
        if await check_server_health():
            console.print(f"[green]✅ 服务器运行中[/green]")
            console.print(f"   URL: [cyan]{get_server_url()}[/cyan]")
            
            try:
                stats_data = await api_call("GET", "/dashboard/stats")
                console.print(f"   记忆数: [cyan]{stats_data.get('total_memories', 0)}[/cyan]")
            except:
                pass
        else:
            console.print("[red]❌ 服务器未运行[/red]")
            console.print("   启动命令: [cyan]mcp-memory-cli server start[/cyan]")
    
    asyncio.run(_status())


@app.command()
def tiered(
    action: str = typer.Argument(..., help="操作: write/query/stats"),
    content: Optional[str] = typer.Argument(None, help="内容(用于write)"),
    tier: str = typer.Option("storage", "--tier", "-t", help="层级: storage/thinking/skill"),
    title: Optional[str] = typer.Option(None, "--title", help="标题"),
    keywords: Optional[str] = typer.Option(None, "--keywords", "-k", help="关键词"),
    user_id: str = typer.Option(DEFAULT_USER, "--user", "-u", help="用户ID"),
):
    """📚 三层记忆管理"""
    async def _tiered():
        if not await check_server_health():
            console.print("[red]❌ 服务器未运行[/red]")
            return
        
        if action == "write":
            if not content:
                console.print("[red]请提供内容[/red]")
                return
            
            import uuid
            session_id = str(uuid.uuid4())[:8]
            
            data = {
                "content": content,
                "user_id": user_id,
                "session_id": session_id,
            }
            if title:
                data["topic"] = title
            
            endpoint = f"/tiered/{tier}/write"
            try:
                result = await api_call("POST", endpoint, json=data)
                console.print(f"[green]✅ {tier}层记忆已写入: {result.get('memory_id', '')}[/green]")
            except Exception as e:
                console.print(f"[red]❌ 写入失败: {e}[/red]")
        
        elif action == "stats":
            try:
                result = await api_call("GET", "/tiered/stats")
                table = Table(title="📊 三层记忆统计", show_header=False)
                table.add_column("层级", style="cyan")
                table.add_column("数量", style="green")
                for key, value in result.items():
                    table.add_row(key, str(value))
                console.print(table)
            except Exception as e:
                console.print(f"[red]❌ 获取统计失败: {e}[/red]")
        
        else:
            console.print(f"[yellow]未知操作: {action}[/yellow]")
    
    asyncio.run(_tiered())


if __name__ == "__main__":
    app()
