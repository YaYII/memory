from fastapi import FastAPI, Request
from mcp.server import Server, NotificationOptions
from mcp.server.sse import SseServerTransport
import mcp.types as types
import uvicorn
import os
from typing import Any

from mcp_memory.memory.manager import MemoryManager
from mcp_memory.models.data_models import ReadMemoryRequest, WriteMemoryRequest, DeleteMemoryRequest, MCPResponse
from mcp_memory.core.config import settings

app = FastAPI()
memory_manager = MemoryManager()

server = Server("mcp-memory-server")

@server.list_tools()
async def handle_list_tools() -> list[types.Tool]:
    """
    列出所有可用的MCP工具
    """
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
    """
    处理MCP工具调用
    """
    if not arguments:
        raise ValueError("必须提供参数")

    try:
        if name == "read_memory":
            req = ReadMemoryRequest(**arguments)
            # project_id: 如果AI不传，manager会使用当前自动检测的 CWD ID
            result = memory_manager.read_memory(req.user_id, req.query, req.project_id, req.limit)
            
            # Format as plain text list to reduce cognitive load
            if not result:
                return [types.TextContent(type="text", text="没有找到相关记忆。")]
            
            formatted_text = "\n".join([f"- {item['content']}" for item in result])
            return [types.TextContent(type="text", text=formatted_text)]

        elif name == "write_memory":
            req = WriteMemoryRequest(**arguments)
            # project_id: 如果AI不传，manager会使用当前自动检测的 CWD ID
            result = memory_manager.write_memory(
                req.user_id, 
                req.content, 
                project_id=req.project_id, 
                scope=req.scope
            )
            return [types.TextContent(type="text", text=f"记忆已保存，ID: {result}")]
            
        elif name == "delete_memory":
            req = DeleteMemoryRequest(**arguments)
            success = memory_manager.delete_memory(req.user_id, req.memory_id)
            if success:
                return [types.TextContent(type="text", text=f"记忆 {req.memory_id} 已删除")]
            else:
                return [types.TextContent(type="text", text=f"删除失败：记忆不存在或权限不足")]

        else:
            raise ValueError(f"未知工具: {name}")

    except Exception as e:
        return [types.TextContent(type="text", text=f"错误: {str(e)}")]

import sys
from mcp.server.stdio import stdio_server

# MCP SSE Transport
from mcp.server.sse import SseServerTransport
from starlette.responses import Response

sse = SseServerTransport("/messages")

@app.post("/mcp/call")
async def handle_mcp_call(request: Request):
    """
    Standard HTTP endpoint for MCP calls if not using SSE.
    But MCP usually uses SSE for transport or stdio.
    If we want to expose HTTP API directly, we can wrap tools.
    For this task, we follow standard MCP over SSE pattern.
    """
    # This endpoint is just a placeholder if needed for direct HTTP calls
    # but actual MCP client connects via SSE usually.
    return {"status": "Use SSE endpoint /sse"}

@app.get("/sse")
async def handle_sse(request: Request):
    async with sse.connect_sse(request.scope, request.receive, request._send) as streams:
        await server.run(streams[0], streams[1], server.create_initialization_options())

@app.post("/messages")
async def handle_messages(request: Request):
    await sse.handle_post_message(request.scope, request.receive, request._send)

def main():
    if len(sys.argv) > 1 and sys.argv[1] == "stdio":
        # Stdio 模式：由 MCP 客户端（如 Claude）直接启动进程
        import asyncio
        async def run_stdio():
            async with stdio_server() as (read_stream, write_stream):
                await server.run(read_stream, write_stream, server.create_initialization_options())
        
        asyncio.run(run_stdio())
    else:
        # SSE 模式：作为独立 Web 服务运行
        uvicorn.run(app, host="0.0.0.0", port=22888)

if __name__ == "__main__":
    main()
