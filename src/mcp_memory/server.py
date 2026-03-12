from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.responses import HTMLResponse
from mcp_memory.memory.manager import MemoryManager
from mcp_memory.models.data_models import ReadMemoryRequest, WriteMemoryRequest, DeleteMemoryRequest
from mcp_memory.core.config import settings
from mcp_memory.memory.cognitive import CognitiveProcessor
import uvicorn
import os
import sys
import json

# Create FastAPI app
app = FastAPI(title="MCP Memory Server", version="1.0.0")

# Initialize Memory Manager (The Singleton that holds the DB lock)
try:
    memory_manager = MemoryManager()
    cognitive_processor = CognitiveProcessor(memory_manager)
    print("✅ Memory Manager & Cognitive Processor initialized successfully.")
except Exception as e:
    print(f"❌ Failed to initialize Memory Manager: {e}")
    sys.exit(1)

# Dashboard HTML Template
DASHBOARD_HTML = """
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>MCP Memory Dashboard</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; max-width: 1000px; margin: 0 auto; padding: 20px; background: #f5f5f7; }
        .card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); margin-bottom: 20px; }
        h1, h2 { color: #1d1d1f; }
        .stat { display: inline-block; margin-right: 30px; }
        .stat-value { font-size: 24px; font-weight: bold; color: #0071e3; }
        .stat-label { font-size: 14px; color: #86868b; }
        pre { background: #f5f5f7; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 13px; }
        .log-entry { margin-bottom: 5px; border-bottom: 1px solid #eee; padding-bottom: 5px; }
        .log-time { color: #86868b; font-size: 12px; margin-right: 10px; }
        .btn { background: #0071e3; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; }
        .btn:hover { background: #0077ed; }
    </style>
</head>
<body>
    <h1>🧠 MCP Memory Dashboard</h1>
    
    <div class="card">
        <h2>System Status</h2>
        <div class="stat">
            <div class="stat-value" id="memory-count">-</div>
            <div class="stat-label">Total Memories</div>
        </div>
        <div class="stat">
            <div class="stat-value" id="status">Online</div>
            <div class="stat-label">Server Status</div>
        </div>
        <div class="stat">
            <div class="stat-value" id="deepseek-status">-</div>
            <div class="stat-label">DeepSeek Brain</div>
        </div>
    </div>

    <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <h2>Recent Logs</h2>
            <button class="btn" onclick="fetchLogs()">Refresh</button>
        </div>
        <div id="logs">Loading...</div>
    </div>

    <script>
        async function fetchStats() {
            try {
                const res = await fetch('/dashboard/stats');
                const data = await res.json();
                document.getElementById('memory-count').textContent = data.memory_count;
                document.getElementById('deepseek-status').textContent = data.deepseek_enabled ? 'Active' : 'Disabled';
            } catch (e) {
                console.error(e);
            }
        }

        async function fetchLogs() {
            try {
                const res = await fetch('/dashboard/logs');
                const data = await res.json();
                const logsDiv = document.getElementById('logs');
                logsDiv.innerHTML = data.logs.map(log => `
                    <div class="log-entry">
                        <span class="log-time">${log.time}</span>
                        <span>${log.message}</span>
                    </div>
                `).join('');
            } catch (e) {
                console.error(e);
            }
        }

        fetchStats();
        fetchLogs();
        setInterval(fetchStats, 5000);
    </script>
</body>
</html>
"""

# Simple in-memory log buffer
LOG_BUFFER = []

def log_event(message: str):
    """Log an event to the buffer"""
    from datetime import datetime
    timestamp = datetime.now().strftime("%H:%M:%S")
    print(f"[{timestamp}] {message}")
    LOG_BUFFER.append({"time": timestamp, "message": message})
    if len(LOG_BUFFER) > 50:
        LOG_BUFFER.pop(0)

@app.get("/", response_class=HTMLResponse)
async def dashboard():
    """
    Serve the dashboard
    """
    return DASHBOARD_HTML

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
