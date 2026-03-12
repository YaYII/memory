import httpx
import asyncio
import sys

BASE_URL = "http://localhost:22888"

async def verify_dashboard():
    print(f"🔍 Verifying Dashboard at {BASE_URL}...")
    
    async with httpx.AsyncClient(timeout=5.0) as client:
        # 1. Test Root (Static HTML)
        try:
            resp = await client.get(f"{BASE_URL}/")
            if resp.status_code == 200 and "<!DOCTYPE html>" in resp.text:
                print("✅ Root Endpoint (/): OK (HTML served)")
            else:
                print(f"❌ Root Endpoint (/): Failed (Status: {resp.status_code})")
        except Exception as e:
            print(f"❌ Root Endpoint (/): Connection Error ({e})")

        # 2. Test Stats API
        try:
            resp = await client.get(f"{BASE_URL}/dashboard/stats")
            if resp.status_code == 200:
                data = resp.json()
                print(f"✅ Stats API: OK (Memories: {data.get('memory_count')}, DeepSeek: {data.get('deepseek_enabled')})")
            else:
                print(f"❌ Stats API: Failed (Status: {resp.status_code})")
        except Exception as e:
            print(f"❌ Stats API: Connection Error ({e})")

        # 3. Test Logs API
        try:
            resp = await client.get(f"{BASE_URL}/dashboard/logs")
            if resp.status_code == 200:
                data = resp.json()
                print(f"✅ Logs API: OK (Log Count: {len(data.get('logs', []))})")
            else:
                print(f"❌ Logs API: Failed (Status: {resp.status_code})")
        except Exception as e:
            print(f"❌ Logs API: Connection Error ({e})")

        # 4. Test Graph API
        try:
            resp = await client.get(f"{BASE_URL}/dashboard/graph")
            if resp.status_code == 200:
                data = resp.json()
                print(f"✅ Graph API: OK (Nodes: {len(data.get('nodes', []))}, Links: {len(data.get('links', []))})")
            else:
                print(f"❌ Graph API: Failed (Status: {resp.status_code})")
        except Exception as e:
            print(f"❌ Graph API: Connection Error ({e})")

if __name__ == "__main__":
    asyncio.run(verify_dashboard())
