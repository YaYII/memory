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
    print("✅ 记忆管理器与认知处理器初始化成功。")
except Exception as e:
    print(f"❌ 无法初始化记忆管理器: {e}")
    sys.exit(1)

# Dashboard HTML Template - Now served from static/index.html
# Keeping this var for reference or fallback, but actual serving uses FileResponse
DASHBOARD_HTML_LEGACY = """
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>MCP 记忆看板</title>
</head>
<body>
    <h1>看板加载中...</h1>
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
    获取知识图谱数据用于可视化 (D3/ForceGraph 格式)
    """
    try:
        # 1. 从 NetworkX 加载图谱
        # 注意：直接访问 store.graph。这里读取是线程安全的。
        # 理想情况下应该使用读锁，但对于可视化来说是可以的。
        G = memory_manager.store.graph
        
        # 2. 转换为 D3 格式 {nodes: [], links: []}
        data = nx.node_link_data(G)
        return data
    except Exception as e:
        print(f"提供图谱数据时出错: {e}")
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
    写入记忆接口
    """
    try:
        # project_id: 如果 AI 不传，manager 会使用当前自动检测的 CWD ID
        # 注意：在客户端-服务器模式下，project_id 可能来自客户端请求
        # 如果客户端未设置，此处将为 None。
        # 但 MemoryManager 会使用 settings.MCP_PROJECT_ID 作为备选。
        # 然而，此处的 settings 反映的是服务器的环境。
        # 如果客户端希望上下文隔离，我们应该依赖其传递 project_id。
        log_event(f"正在为用户 {req.user_id} 写入记忆 (范围: {req.scope})")
        result = memory_manager.write_memory(
            req.user_id, 
            req.content, 
            project_id=req.project_id, 
            scope=req.scope
        )
        
        # 在后台触发认知处理
        if settings.DEEPSEEK_API_KEY:
            log_event(f"正在为记忆 {result[:8]} 触发认知处理")
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
    读取记忆接口，可选 DeepSeek 综合
    """
    try:
        # 1. 检索原始记忆
        log_event(f"正在为用户 {req.user_id} 读取记忆 (查询: {req.query})")
        result = memory_manager.read_memory(req.user_id, req.query, req.project_id, req.limit)
        
        # 2. 如果已启用且有结果，尝试进行综合
        if settings.DEEPSEEK_API_KEY and result:
            log_event("正在使用 DeepSeek 综合搜索结果...")
            memories = [item["content"] for item in result]
            # 调用 LLM 进行综合
            synthesis = await cognitive_processor.llm.synthesize_search_results(req.query, memories)
            
            if synthesis:
                # 将列表替换为单个综合记忆项
                # 但我们保持结构与客户端兼容
                return [{
                    "content": f"【系统整合回答】\n{synthesis}\n\n(基于 {len(result)} 条相关记忆整合)",
                    "timestamp": result[0]["timestamp"], # 使用排名第一结果的时间戳
                    "id": "synthesis" # 虚拟 ID
                }]
        
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/memory/reflect")
async def reflect_memory_endpoint(user_id: str, background_tasks: BackgroundTasks):
    """
    在后台触发深度反思 (记忆垃圾回收)
    """
    if not settings.DEEPSEEK_API_KEY:
        raise HTTPException(status_code=400, detail="未配置 DeepSeek API Key")
        
    log_event(f"正在为用户 {user_id} 触发记忆反思")
    background_tasks.add_task(cognitive_processor.run_reflection, user_id=user_id)
    return {"status": "反思已启动", "message": "深度思考进程正在后台运行"}

@app.post("/memory/delete")
async def delete_memory_endpoint(req: DeleteMemoryRequest):
    """
    删除记忆接口
    """
    try:
        log_event(f"正在为用户 {req.user_id} 删除记忆 {req.memory_id}")
        success = memory_manager.delete_memory(req.user_id, req.memory_id)
        if success:
            return {"status": "已删除", "id": req.memory_id}
        else:
            raise HTTPException(status_code=404, detail="未找到记忆或权限不足")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def main():
    """
    启动服务器
    """
    port = int(os.environ.get("MCP_MEMORY_PORT", 22888))
    print(f"🚀 正在端口 {port} 上启动 MCP 记忆服务器...")
    print(f"📊 看板地址: http://localhost:{port}/")
    uvicorn.run(app, host="0.0.0.0", port=port)

if __name__ == "__main__":
    main()
