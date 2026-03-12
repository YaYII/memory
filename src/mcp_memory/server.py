from fastapi import FastAPI, HTTPException, BackgroundTasks
from mcp_memory.memory.manager import MemoryManager
from mcp_memory.models.data_models import ReadMemoryRequest, WriteMemoryRequest, DeleteMemoryRequest
from mcp_memory.core.config import settings
from mcp_memory.memory.cognitive import CognitiveProcessor
import uvicorn
import os
import sys

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
        result = memory_manager.write_memory(
            req.user_id, 
            req.content, 
            project_id=req.project_id, 
            scope=req.scope
        )
        
        # Trigger cognitive processing in background
        if settings.DEEPSEEK_API_KEY:
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
    Read memory endpoint
    """
    try:
        result = memory_manager.read_memory(req.user_id, req.query, req.project_id, req.limit)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/memory/delete")
async def delete_memory_endpoint(req: DeleteMemoryRequest):
    """
    Delete memory endpoint
    """
    try:
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
    uvicorn.run(app, host="0.0.0.0", port=port)

if __name__ == "__main__":
    main()
