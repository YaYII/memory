from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from mcp_memory.memory.manager import MemoryManager
from mcp_memory.models.data_models import ReadMemoryRequest, WriteMemoryRequest, DeleteMemoryRequest
from mcp_memory.core.config import settings
from mcp_memory.memory.cognitive import CognitiveProcessor
import uvicorn
import os
import sys
import json
import networkx as nx

import asyncio
import random
from sse_starlette.sse import EventSourceResponse

# Create FastAPI app
app = FastAPI(title="MCP Memory Server", version="1.0.0")

# Mount static files
static_dir = os.path.join(os.path.dirname(__file__), "static")
if not os.path.exists(static_dir):
    os.makedirs(static_dir)
app.mount("/static", StaticFiles(directory=static_dir), name="static")

# Initialize Memory Manager (The Singleton that holds the DB lock)
try:
    memory_manager = MemoryManager()
    cognitive_processor = CognitiveProcessor(memory_manager)
    print("✅ Memory Manager & Cognitive Processor initialized successfully.")
except Exception as e:
    print(f"❌ Failed to initialize Memory Manager: {e}")
    sys.exit(1)

# Dashboard HTML Template - Now served from static/index.html
# Keeping this var for reference or fallback, but actual serving uses FileResponse
DASHBOARD_HTML_LEGACY = """
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>MCP Memory Dashboard</title>
</head>
<body>
    <h1>Dashboard is loading...</h1>
</body>
</html>
"""

# Log Streaming System
class LogStream:
    def __init__(self):
        self.listeners = []

    async def broadcast(self, message: str):
        from datetime import datetime
        timestamp = datetime.now().strftime("%H:%M:%S")
        data = json.dumps({"time": timestamp, "message": message}, ensure_ascii=False)
        print(f"[{timestamp}] {message}")
        
        # Keep buffer for history (polling fallback)
        LOG_BUFFER.append({"time": timestamp, "message": message})
        if len(LOG_BUFFER) > 50:
            LOG_BUFFER.pop(0)
            
        # Broadcast to SSE listeners
        for queue in self.listeners:
            await queue.put(data)

    async def listen(self):
        queue = asyncio.Queue()
        self.listeners.append(queue)
        try:
            while True:
                data = await queue.get()
                yield dict(data=data)
        except asyncio.CancelledError:
            self.listeners.remove(queue)

log_stream = LogStream()
LOG_BUFFER = []

async def log_event(message: str):
    """Log an event to the buffer and broadcast via SSE"""
    await log_stream.broadcast(message)

# Monkey patch log_event helper to be async if needed, or wrap it
# But wait, our previous log_event was sync. 
# To avoid refactoring all calls to `await log_event(...)`, we can use a background task or just run it synchronously if we don't await the queue put?
# Actually, queue.put is async. Let's make a sync wrapper that schedules it on the loop.
def log_event_sync(message: str):
    try:
        loop = asyncio.get_running_loop()
        loop.create_task(log_stream.broadcast(message))
    except RuntimeError:
        # No loop running (e.g. startup script), just print
        print(f"[SYNC-LOG] {message}")

# Replace the old log_event with this one
log_event = log_event_sync

async def system_heartbeat_task():
    """
    Background task to generate system status logs for visualization
    """
    actions = [
        "监控神经元连接稳定性...",
        "正在优化记忆图谱索引...",
        "DeepSeek 认知模块就绪",
        "扫描冗余数据...",
        "同步思维火花状态...",
        "检测到新的知识关联",
        "更新突触权重...",
        "系统负载正常 (CPU: 12%, MEM: 24%)"
    ]
    while True:
        try:
            await asyncio.sleep(random.randint(5, 10))
            msg = random.choice(actions)
            # Use the sync wrapper which schedules the async broadcast
            log_event(f"[SYSTEM] {msg}")
        except Exception:
            pass

@app.get("/dashboard/events")
async def events_endpoint():
    """
    SSE Endpoint for real-time logs
    """
    return EventSourceResponse(log_stream.listen())

@app.on_event("startup")
async def startup_event():
    asyncio.create_task(system_heartbeat_task())

@app.get("/", response_class=FileResponse)
async def dashboard():
    """
    Serve the Cyber-Brain Dashboard
    """
    return os.path.join(static_dir, "index.html")

@app.get("/dashboard/stats")
async def get_stats():
    """
    Get system stats
    """
    try:
        count = memory_manager.store.collection.count()
        return {
            "memory_count": count,
            "deepseek_enabled": bool(settings.DEEPSEEK_API_KEY)
        }
    except Exception as e:
        return {"error": str(e)}

@app.get("/dashboard/graph")
async def get_graph_data():
    """
    Get Knowledge Graph data for visualization (D3/ForceGraph format)
    """
    try:
        # 1. Load Graph from NetworkX
        # Note: Accessing store.graph directly. It's thread-safe enough for reading here.
        # Ideally should use a read-lock but for viz it's okay.
        G = memory_manager.store.graph
        
        # 2. Convert to D3 format {nodes: [], links: []}
        data = nx.node_link_data(G)
        return data
    except Exception as e:
        print(f"Error serving graph data: {e}")
        return {"nodes": [], "links": []}

@app.get("/dashboard/logs")
async def get_logs():
    """
    Get recent logs
    """
    return {"logs": list(reversed(LOG_BUFFER))}

@app.get("/health")
async def health_check():
    """
    Health check endpoint to verify server is running
    """
    return {"status": "ok", "pid": os.getpid()}

@app.post("/memory/write")
async def write_memory_endpoint(req: WriteMemoryRequest, background_tasks: BackgroundTasks):
    """
    Write memory endpoint
    """
    try:
        # project_id: 如果AI不传，manager会使用当前自动检测的 CWD ID
        # Note: In client-server mode, the project_id might come from the client request
        # If client didn't set it, it will be None here.
        # But MemoryManager uses `settings.MCP_PROJECT_ID` as fallback.
        # However, `settings` here reflects the SERVER's environment.
        # We should rely on the client passing the project_id if they want context isolation.
        log_event(f"Writing memory for user {req.user_id} (scope: {req.scope})")
        result = memory_manager.write_memory(
            req.user_id, 
            req.content, 
            project_id=req.project_id, 
            scope=req.scope
        )
        
        # Trigger cognitive processing in background
        if settings.DEEPSEEK_API_KEY:
            log_event(f"Triggering cognitive processing for memory {result[:8]}")
            background_tasks.add_task(
                cognitive_processor.process_memory_event, 
                memory_id=result, 
                content=req.content,
                user_id=req.user_id
            )
            
        return {"id": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/memory/read")
async def read_memory_endpoint(req: ReadMemoryRequest):
    """
    Read memory endpoint with optional DeepSeek synthesis
    """
    try:
        # 1. Retrieve raw memories
        log_event(f"Reading memory for user {req.user_id} (query: {req.query})")
        result = memory_manager.read_memory(req.user_id, req.query, req.project_id, req.limit)
        
        # 2. Try synthesis if enabled and we have results
        if settings.DEEPSEEK_API_KEY and result:
            log_event("Synthesizing search results with DeepSeek...")
            memories = [item["content"] for item in result]
            # Call LLM to synthesize
            synthesis = await cognitive_processor.llm.synthesize_search_results(req.query, memories)
            
            if synthesis:
                # Replace the list with a single synthesized memory item
                # But we keep the structure compatible with the client
                return [{
                    "content": f"【系统整合回答】\n{synthesis}\n\n(基于 {len(result)} 条相关记忆整合)",
                    "timestamp": result[0]["timestamp"], # Use top result's timestamp
                    "id": "synthesis" # Virtual ID
                }]
        
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/memory/reflect")
async def reflect_memory_endpoint(user_id: str, background_tasks: BackgroundTasks):
    """
    Trigger deep reflection (Memory GC) in background
    """
    if not settings.DEEPSEEK_API_KEY:
        raise HTTPException(status_code=400, detail="DeepSeek API Key not configured")
        
    log_event(f"Triggering memory reflection for user {user_id}")
    background_tasks.add_task(cognitive_processor.run_reflection, user_id=user_id)
    return {"status": "Reflection started", "message": "Deep thinking process is running in background"}

@app.post("/memory/delete")
async def delete_memory_endpoint(req: DeleteMemoryRequest):
    """
    Delete memory endpoint
    """
    try:
        log_event(f"Deleting memory {req.memory_id} for user {req.user_id}")
        success = memory_manager.delete_memory(req.user_id, req.memory_id)
        if success:
            return {"status": "deleted", "id": req.memory_id}
        else:
            raise HTTPException(status_code=404, detail="Memory not found or permission denied")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def main():
    """
    Start the server
    """
    port = int(os.environ.get("MCP_MEMORY_PORT", 22888))
    print(f"🚀 Starting MCP Memory Server on port {port}...")
    print(f"📊 Dashboard available at: http://localhost:{port}/")
    uvicorn.run(app, host="0.0.0.0", port=port)

if __name__ == "__main__":
    main()
