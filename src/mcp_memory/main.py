import asyncio
import os
import sys
import time
import subprocess
import httpx
from mcp.server import Server
from mcp.server.stdio import stdio_server
import mcp.types as types
from typing import Any
from mcp_memory.models.data_models import ReadMemoryRequest, WriteMemoryRequest, DeleteMemoryRequest
from mcp_memory.core.config import settings

# This file now acts as the MCP Client Bridge
# It does NOT import MemoryManager directly to avoid DB locking
# Instead, it proxies requests to the background server

SERVER_PORT = int(os.environ.get("MCP_MEMORY_PORT", 22888))
SERVER_URL = f"http://127.0.0.1:{SERVER_PORT}"
server = Server("mcp-memory-bridge")

async def ensure_server_running():
    """
    Check if the MCP Memory Server is running.
    If not, start it as a detached subprocess.
    """
    # 1. Check if running
    try:
        async with httpx.AsyncClient() as client:
            resp = await client.get(f"{SERVER_URL}/health", timeout=0.5)
            if resp.status_code == 200:
                # Server is up
                return
    except (httpx.ConnectError, httpx.ReadTimeout):
        pass

    # 2. Start server if down
    # Get the python executable
    python_exe = sys.executable
    
    # Calculate the module path
    # We assume this script is running from the root of the project or src is in PYTHONPATH
    # Start the server module in a new process group so it persists
    # Use output redirection to avoid cluttering stdio which is used for MCP transport
    try:
        log_file = open(os.path.join(os.getcwd(), "mcp_server.log"), "a")
        process = subprocess.Popen(
            [python_exe, "-m", "mcp_memory.server"],
            stdout=log_file,
            stderr=log_file,
            start_new_session=True, # Detach from current terminal session
            cwd=os.getcwd(),
            env=os.environ.copy()
        )
        
        # 3. Wait for it to be ready
        for _ in range(20): # Wait up to 10 seconds (0.5 * 20)
            try:
                await asyncio.sleep(0.5)
                async with httpx.AsyncClient() as client:
                    resp = await client.get(f"{SERVER_URL}/health", timeout=0.5)
                    if resp.status_code == 200:
                        return
            except:
                continue
                
    except Exception as e:
        # Fallback: If we can't start the server, we might be in trouble.
        # But we should log this error somewhere.
        # Since we are in stdio mode, print to stderr
        print(f"Failed to start MCP Memory Server: {e}", file=sys.stderr)

@server.list_tools()
async def handle_list_tools() -> list[types.Tool]:
    return [
        types.Tool(
            name="read_memory",
            description="读取记忆。AI 应根据查询内容判断：如果是项目相关（默认），则自动检索当前项目上下文；如果是通用知识，则检索全局记忆。",
            inputSchema=ReadMemoryRequest.model_json_schema()
        ),
        types.Tool(
            name="write_memory",
            description="写入记忆。AI 必须自行判断：\n1. 如果是项目专属细节（默认），请保持默认 scope='project'（系统会自动关联当前项目路径）。\n2. 如果是通用知识/偏好（如用户习惯、编程技巧），请显式设置 scope='global'。",
            inputSchema=WriteMemoryRequest.model_json_schema()
        ),
        types.Tool(
            name="delete_memory",
            description="删除记忆。仅允许删除属于当前用户的记忆。",
            inputSchema=DeleteMemoryRequest.model_json_schema()
        )
    ]

@server.call_tool()
async def handle_call_tool(
    name: str, arguments: dict[str, Any] | None
) -> list[types.TextContent | types.ImageContent | types.EmbeddedResource]:
    if not arguments:
        raise ValueError("必须提供参数")

    # Ensure server is running before making calls
    # Note: Ideally this is done once at startup, but checking here is safer for resilience
    await ensure_server_running()

    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            if name == "read_memory":
                # Inject project_id if missing (Client-side auto-detection)
                if "project_id" not in arguments or not arguments["project_id"]:
                    arguments["project_id"] = settings.MCP_PROJECT_ID

                resp = await client.post(f"{SERVER_URL}/memory/read", json=arguments)
                resp.raise_for_status()
                result = resp.json()
                
                # Format output (Client-side formatting)
                if not result:
                    return [types.TextContent(type="text", text="没有找到相关记忆。")]
                
                # Return plain text list
                formatted_text = "\n".join([f"- {item['content']}" for item in result])
                return [types.TextContent(type="text", text=formatted_text)]

            elif name == "write_memory":
                # Inject project_id if missing
                if "project_id" not in arguments or not arguments["project_id"]:
                    arguments["project_id"] = settings.MCP_PROJECT_ID
                    
                resp = await client.post(f"{SERVER_URL}/memory/write", json=arguments)
                resp.raise_for_status()
                data = resp.json()
                return [types.TextContent(type="text", text=f"记忆已保存，ID: {data['id']}")]
                
            elif name == "delete_memory":
                resp = await client.post(f"{SERVER_URL}/memory/delete", json=arguments)
                if resp.status_code == 404:
                    return [types.TextContent(type="text", text=f"删除失败：记忆不存在或权限不足")]
                resp.raise_for_status()
                return [types.TextContent(type="text", text=f"记忆 {arguments['memory_id']} 已删除")]

            else:
                raise ValueError(f"未知工具: {name}")

    except httpx.HTTPStatusError as e:
        return [types.TextContent(type="text", text=f"服务端错误: {e.response.text}")]
    except Exception as e:
        return [types.TextContent(type="text", text=f"连接错误: {str(e)}")]

async def main():
    # Initial check to start server if needed
    await ensure_server_running()
    
    # Run the Stdio Transport (this blocks and handles stdin/stdout)
    async with stdio_server() as (read_stream, write_stream):
        await server.run(read_stream, write_stream, server.create_initialization_options())

if __name__ == "__main__":
    # If run directly, assume stdio mode
    asyncio.run(main())
