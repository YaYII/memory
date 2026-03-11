import asyncio
import os
import sys
from mcp.client.stdio import stdio_client, StdioServerParameters
from mcp.client.session import ClientSession
from mcp.types import CallToolRequest, Tool

# 设置环境变量，模拟 MCP 客户端环境
env = os.environ.copy()
env["PYTHONPATH"] = os.path.abspath("src")
env["MCP_MEMORY_SHARED"] = "true"

async def run_test():
    print("🚀 开始 MCP 记忆功能集成测试...")
    
    # 定义服务器参数
    server_params = StdioServerParameters(
        command=sys.executable,
        args=["-m", "mcp_memory.main", "stdio"],
        env=env
    )

    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()
            
            # 1. 列出工具
            print("\n🔍 检查工具列表...")
            tools = await session.list_tools()
            tool_names = [t.name for t in tools.tools]
            print(f"   可用工具: {tool_names}")
            assert "write_memory" in tool_names
            assert "read_memory" in tool_names
            assert "delete_memory" in tool_names
            
            # 2. 写入记忆
            print("\n📝 测试写入记忆...")
            write_res = await session.call_tool(
                "write_memory",
                arguments={
                    "user_id": "test_user",
                    "content": "MCP 测试记忆：Python 是一种优秀的编程语言",
                    "scope": "project"
                }
            )
            print(f"   写入结果: {write_res.content[0].text}")
            
            # 3. 读取记忆
            print("\n📖 测试读取记忆...")
            read_res = await session.call_tool(
                "read_memory",
                arguments={
                    "user_id": "test_user",
                    "query": "Python 怎么样"
                }
            )
            print(f"   读取结果: {read_res.content[0].text}")
            
            # 解析读取结果以获取 ID (简单的字符串解析)
            import ast
            memories = ast.literal_eval(read_res.content[0].text)
            assert len(memories) > 0
            memory_id = memories[0]["id"]
            print(f"   获取到记忆 ID: {memory_id}")

            # 4. 删除记忆
            print(f"\n🗑️ 测试删除记忆 ({memory_id})...")
            del_res = await session.call_tool(
                "delete_memory",
                arguments={
                    "user_id": "test_user",
                    "memory_id": memory_id
                }
            )
            print(f"   删除结果: {del_res.content[0].text}")
            
            # 5. 验证删除
            print("\n✅ 验证删除结果...")
            verify_res = await session.call_tool(
                "read_memory",
                arguments={
                    "user_id": "test_user",
                    "query": "Python 怎么样"
                }
            )
            verify_memories = ast.literal_eval(verify_res.content[0].text)
            # 确保刚才那个 ID 不在了
            found = any(m["id"] == memory_id for m in verify_memories)
            if not found:
                print("   验证成功：记忆已消失")
            else:
                print("   验证失败：记忆仍然存在")

    print("\n🎉 所有测试完成！")

if __name__ == "__main__":
    asyncio.run(run_test())