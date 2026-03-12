import asyncio
import os
import sys
import re
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
    # 现在 main.py 不需要 'stdio' 参数，它默认就是 stdio 桥接模式
    server_params = StdioServerParameters(
        command=sys.executable,
        args=["-m", "mcp_memory.main"], 
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
            
            # 2. 写入记忆 (测试 Smart Write - Deduplication)
            print("\n📝 测试写入记忆 (第1次)...")
            write_res1 = await session.call_tool(
                "write_memory",
                arguments={
                    "user_id": "test_user_v2",
                    "content": "测试记忆：Python 是一种优秀的编程语言，特别适合 AI 开发",
                    "scope": "project"
                }
            )
            print(f"   写入结果1: {write_res1.content[0].text}")
            id1 = re.search(r"ID:\s*([a-f0-9\-]+)", write_res1.content[0].text).group(1)

            print("\n📝 测试写入重复记忆 (第2次 - 应触发强化)...")
            write_res2 = await session.call_tool(
                "write_memory",
                arguments={
                    "user_id": "test_user_v2",
                    "content": "测试记忆：Python 是一种优秀的编程语言，特别适合 AI 开发", # 完全相同的内容
                    "scope": "project"
                }
            )
            print(f"   写入结果2: {write_res2.content[0].text}")
            id2 = re.search(r"ID:\s*([a-f0-9\-]+)", write_res2.content[0].text).group(1)
            
            if id1 == id2:
                print("   ✅ 验证成功：重复写入返回了相同的 ID (触发了 Deduplication)")
            else:
                print(f"   ❌ 验证失败：重复写入生成了新 ID ({id1} != {id2})")

            # 3. 读取记忆 (测试 Hybrid Search - Keyword)
            print("\n📖 测试读取记忆 (Hybrid Search)...")
            # 故意使用只有关键词匹配但语义可能偏离的 Query，或者专有名词
            # "AI 开发" 是关键词
            read_res = await session.call_tool(
                "read_memory",
                arguments={
                    "user_id": "test_user_v2",
                    "query": "AI 开发 Python"
                }
            )
            print(f"   读取结果:\n{read_res.content[0].text}")
            assert "Python 是一种优秀的编程语言" in read_res.content[0].text

            # 4. 测试用户画像 (User Profile)
            print("\n👤 测试用户画像 (Profile)...")
            await session.call_tool(
                "write_memory",
                arguments={
                    "user_id": "test_user_v2",
                    "content": "我喜欢使用 VS Code 进行开发，不喜欢 PyCharm",
                    "scope": "global"
                }
            )
            
            # 查询一个完全无关的问题，看看是否带出了画像
            profile_res = await session.call_tool(
                "read_memory",
                arguments={
                    "user_id": "test_user_v2",
                    "query": "今天天气怎么样" # 无关问题
                }
            )
            print(f"   读取结果 (Profile Check):\n{profile_res.content[0].text}")
            assert "我喜欢使用 VS Code" in profile_res.content[0].text
            
            # Cleanup
            await session.call_tool("delete_memory", arguments={"user_id": "test_user_v2", "memory_id": id1})
  
    print("\n🎉 所有测试完成！")

if __name__ == "__main__":
    asyncio.run(run_test())
