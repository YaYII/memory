import httpx
import asyncio
import sys

BASE_URL = "http://127.0.0.1:22888"

async def verify_network():
    print(f"🔍 Verifying Network Connectivity at {BASE_URL}...")
    
    async with httpx.AsyncClient(timeout=5.0) as client:
        # 1. Test Root (Dashboard HTML)
        try:
            resp = await client.get(f"{BASE_URL}/")
            if resp.status_code == 200:
                print(f"✅ GET /: OK ({len(resp.content)} bytes)")
            else:
                print(f"❌ GET /: Failed (Status: {resp.status_code})")
        except Exception as e:
            print(f"❌ GET /: Connection Error ({e})")

        # 2. Test Static JS (App Logic)
        try:
            resp = await client.get(f"{BASE_URL}/static/js/app.js")
            if resp.status_code == 200:
                print(f"✅ GET /static/js/app.js: OK ({len(resp.content)} bytes)")
            else:
                print(f"❌ GET /static/js/app.js: Failed (Status: {resp.status_code})")
        except Exception as e:
            print(f"❌ GET /static/js/app.js: Connection Error ({e})")

        # 3. Test Static CSS
        try:
            resp = await client.get(f"{BASE_URL}/static/css/style.css")
            if resp.status_code == 200:
                print(f"✅ GET /static/css/style.css: OK ({len(resp.content)} bytes)")
            else:
                print(f"❌ GET /static/css/style.css: Failed (Status: {resp.status_code})")
        except Exception as e:
            print(f"❌ GET /static/css/style.css: Connection Error ({e})")

        # 4. Test API Endpoint (Stats)
        try:
            resp = await client.get(f"{BASE_URL}/dashboard/stats")
            if resp.status_code == 200:
                print(f"✅ GET /dashboard/stats: OK ({resp.json()})")
            else:
                print(f"❌ GET /dashboard/stats: Failed (Status: {resp.status_code})")
        except Exception as e:
            print(f"❌ GET /dashboard/stats: Connection Error ({e})")

if __name__ == "__main__":
    asyncio.run(verify_network())
