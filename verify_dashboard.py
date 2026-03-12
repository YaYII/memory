import httpx
import asyncio
import sys

BASE_URL = "http://localhost:22888"

async def verify_dashboard():
    print(f"🔍 正在验证位于 {BASE_URL} 的看板...")
    
    async with httpx.AsyncClient(timeout=5.0) as client:
        # 1. 测试根路径 (静态 HTML)
        try:
            resp = await client.get(f"{BASE_URL}/")
            if resp.status_code == 200 and "<!DOCTYPE html>" in resp.text:
                print("✅ 根路径 (/): 正常 (已提供 HTML)")
            else:
                print(f"❌ 根路径 (/): 失败 (状态码: {resp.status_code})")
        except Exception as e:
            print(f"❌ 根路径 (/): 连接错误 ({e})")

        # 2. 测试状态 API
        try:
            resp = await client.get(f"{BASE_URL}/dashboard/stats")
            if resp.status_code == 200:
                data = resp.json()
                print(f"✅ 状态 API: 正常 (记忆量: {data.get('memory_count')}, DeepSeek: {data.get('deepseek_enabled')})")
            else:
                print(f"❌ 状态 API: 失败 (状态码: {resp.status_code})")
        except Exception as e:
            print(f"❌ 状态 API: 连接错误 ({e})")

        # 3. 测试日志 API
        try:
            resp = await client.get(f"{BASE_URL}/dashboard/logs")
            if resp.status_code == 200:
                data = resp.json()
                print(f"✅ 日志 API: 正常 (日志数量: {len(data.get('logs', []))})")
            else:
                print(f"❌ 日志 API: 失败 (状态码: {resp.status_code})")
        except Exception as e:
            print(f"❌ 日志 API: 连接错误 ({e})")

        # 4. 测试图谱 API
        try:
            resp = await client.get(f"{BASE_URL}/dashboard/graph")
            if resp.status_code == 200:
                data = resp.json()
                print(f"✅ 图谱 API: 正常 (节点数: {len(data.get('nodes', []))}, 连线数: {len(data.get('links', []))})")
            else:
                print(f"❌ 图谱 API: 失败 (状态码: {resp.status_code})")
        except Exception as e:
            print(f"❌ 图谱 API: 连接错误 ({e})")

if __name__ == "__main__":
    asyncio.run(verify_dashboard())
