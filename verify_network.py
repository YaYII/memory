import httpx
import asyncio
import sys

BASE_URL = "http://127.0.0.1:22888"

async def verify_network():
    print(f"🔍 正在验证 {BASE_URL} 的网络连通性...")
    
    async with httpx.AsyncClient(timeout=5.0) as client:
        # 1. 测试根路径 (看板 HTML)
        try:
            resp = await client.get(f"{BASE_URL}/")
            if resp.status_code == 200:
                print(f"✅ GET /: 正常 ({len(resp.content)} 字节)")
            else:
                print(f"❌ GET /: 失败 (状态码: {resp.status_code})")
        except Exception as e:
            print(f"❌ GET /: 连接错误 ({e})")

        # 2. 测试静态 JS (应用逻辑)
        try:
            resp = await client.get(f"{BASE_URL}/static/js/app.js")
            if resp.status_code == 200:
                print(f"✅ GET /static/js/app.js: 正常 ({len(resp.content)} 字节)")
            else:
                print(f"❌ GET /static/js/app.js: 失败 (状态码: {resp.status_code})")
        except Exception as e:
            print(f"❌ GET /static/js/app.js: 连接错误 ({e})")

        # 3. 测试静态 CSS
        try:
            resp = await client.get(f"{BASE_URL}/static/css/style.css")
            if resp.status_code == 200:
                print(f"✅ GET /static/css/style.css: 正常 ({len(resp.content)} 字节)")
            else:
                print(f"❌ GET /static/css/style.css: 失败 (状态码: {resp.status_code})")
        except Exception as e:
            print(f"❌ GET /static/css/style.css: 连接错误 ({e})")

        # 4. 测试 API 端点 (状态)
        try:
            resp = await client.get(f"{BASE_URL}/dashboard/stats")
            if resp.status_code == 200:
                print(f"✅ GET /dashboard/stats: 正常 ({resp.json()})")
            else:
                print(f"❌ GET /dashboard/stats: 失败 (状态码: {resp.status_code})")
        except Exception as e:
            print(f"❌ GET /dashboard/stats: 连接错误 ({e})")

if __name__ == "__main__":
    asyncio.run(verify_network())
