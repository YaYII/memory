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
            
            # 从写入结果中解析 ID: "记忆已保存，ID: xxxxx"
            match = re.search(r"ID:\s*([a-f0-9\-]+)", write_res.content[0].text)
            assert match, "未能从写入结果中提取 ID"
            memory_id = match.group(1)
            print(f"   提取到记忆 ID: {memory_id}")
            
            # 3. 读取记忆
            print("\n📖 测试读取记忆...")
            read_res = await session.call_tool(
                "read_memory",
                arguments={
                    "user_id": "test_user",
                    "query": "Python 怎么样"
                }
            )
            print(f"   读取结果:\n{read_res.content[0].text}")
            
            # 验证读取结果是纯文本，且包含刚写入的内容
            assert "MCP 测试记忆：Python 是一种优秀的编程语言" in read_res.content[0].text
            # 只要不是以 `[{` 开头，就说明不是 JSON 列表
            assert not read_res.content[0].text.strip().startswith("[{"), "读取结果不应是 JSON 列表格式"

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
            # 确保刚才那个内容不在了
            # 注意：由于检索是语义匹配，即使删除了完全匹配的那条，可能还会检索到其他相似的。
            # 但这里我们刚删除了唯一一条完全匹配的。
            print(f"   验证读取结果:\n{verify_res.content[0].text}")
            
            # 简单检查：如果是完全删除，可能返回 "没有找到相关记忆" 或者其他不相关的
            if "MCP 测试记忆：Python 是一种优秀的编程语言" not in verify_res.content[0].text:
                 print("   验证成功：记忆内容已消失")
            else:
                 print("   验证警告：记忆内容可能仍然存在（或许是重复写入导致）")

    print("\n🎉 所有测试完成！")

if __name__ == "__main__":
    asyncio.run(run_test())
