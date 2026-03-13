from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from mcp_memory.memory.manager import MemoryManager
from mcp_memory.models.data_models import ReadMemoryRequest, WriteMemoryRequest, DeleteMemoryRequest, UpdateMemoryRequest
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
    print("✅ 记忆管理器初始化成功。")
except Exception as e:
    print(f"❌ 无法初始化记忆管理器: {e}")
    sys.exit(1)


async def initialize_services():
    """初始化服务"""
    try:
        await cognitive_processor.initialize()
        print("✅ LLM 服务初始化成功（多模型支持已启用）")
    except Exception as e:
        print(f"⚠️ LLM 服务初始化失败: {e}")

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
EVOLUTION_SCAN_TASK = None
EVOLUTION_REFLECTION_TASK = None
EVOLUTION_PROFILE_OVERRIDE = None

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

def resolve_evolution_policy() -> dict:
    profile = (EVOLUTION_PROFILE_OVERRIDE or settings.MCP_EVOLUTION_PROFILE or "standard").lower()
    if profile not in ["light", "standard", "aggressive"]:
        profile = "standard"

    policy = {
        "light": {"scan_interval": 900, "reflection_interval": 3600, "batch_size": 20},
        "standard": {"scan_interval": 300, "reflection_interval": 1800, "batch_size": 50},
        "aggressive": {"scan_interval": 120, "reflection_interval": 900, "batch_size": 120}
    }[profile].copy()

    if not settings.MCP_EVOLUTION_ADAPTIVE:
        policy["scan_interval"] = settings.MCP_EVOLUTION_SCAN_INTERVAL_SECONDS
        policy["reflection_interval"] = settings.MCP_EVOLUTION_REFLECTION_INTERVAL_SECONDS
        policy["batch_size"] = settings.MCP_EVOLUTION_SCAN_BATCH_SIZE
        policy["profile"] = profile
        policy["adaptive"] = False
        return policy

    try:
        memory_count = memory_manager.store.collection.count()
    except Exception:
        memory_count = 0

    if memory_count >= 500:
        policy["scan_interval"] = max(policy["scan_interval"], 300)
        policy["reflection_interval"] = max(policy["reflection_interval"], 1800)
        policy["batch_size"] = min(policy["batch_size"], 80)
    elif memory_count <= 100:
        policy["scan_interval"] = min(policy["scan_interval"], 180)
        policy["reflection_interval"] = min(policy["reflection_interval"], 900)
        policy["batch_size"] = max(policy["batch_size"], 60)

    policy["profile"] = profile
    policy["adaptive"] = True
    policy["memory_count"] = memory_count
    return policy

async def periodic_evolution_scan_task():
    while True:
        try:
            policy = resolve_evolution_policy()
            await asyncio.sleep(policy["scan_interval"])
            processed = await cognitive_processor.periodic_scan_once(batch_size=policy["batch_size"])
            log_event(f"[EVOLUTION] 周期扫描完成，本轮处理 {processed} 条记忆。策略={policy['profile']} 批量={policy['batch_size']}")
        except Exception as e:
            log_event(f"[EVOLUTION] 周期扫描失败: {e}")

async def periodic_evolution_reflection_task():
    while True:
        try:
            policy = resolve_evolution_policy()
            await asyncio.sleep(policy["reflection_interval"])
            await cognitive_processor.run_reflection(settings.MCP_EVOLUTION_REFLECTION_USER_ID)
            log_event(f"[EVOLUTION] 周期反思完成。策略={policy['profile']}")
        except Exception as e:
            log_event(f"[EVOLUTION] 周期反思失败: {e}")

@app.get("/dashboard/events")
async def events_endpoint():
    """
    SSE Endpoint for real-time logs
    """
    return EventSourceResponse(log_stream.listen())

@app.on_event("startup")
async def startup_event():
    cognitive_processor.is_running = True
    cognitive_processor.set_logger(log_event)
    asyncio.create_task(system_heartbeat_task())

    await initialize_services()

    if settings.MCP_EVOLUTION_ENABLED:
        global EVOLUTION_SCAN_TASK, EVOLUTION_REFLECTION_TASK
        EVOLUTION_SCAN_TASK = asyncio.create_task(periodic_evolution_scan_task())
        EVOLUTION_REFLECTION_TASK = asyncio.create_task(periodic_evolution_reflection_task())
        log_event("[EVOLUTION] 自我进化调度器已启动。")

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
        # 检查是否有任何 LLM 提供商可用
        providers = settings.providers
        llm_enabled = len(providers) > 0
        return {
            "memory_count": count,
            "llm_enabled": llm_enabled,
            "providers_count": len(providers),
            "preferred_provider": settings.MCP_LLM_PROVIDER
        }
    except Exception as e:
        return {"error": str(e)}

@app.get("/dashboard/evolution/status")
async def get_evolution_status():
    policy = resolve_evolution_policy()
    status = cognitive_processor.get_status()
    status.update({
        "enabled": settings.MCP_EVOLUTION_ENABLED,
        "profile": policy["profile"],
        "adaptive": policy["adaptive"],
        "scan_interval_seconds": policy["scan_interval"],
        "reflection_interval_seconds": policy["reflection_interval"],
        "scan_batch_size": policy["batch_size"],
        "scan_task_running": bool(EVOLUTION_SCAN_TASK and not EVOLUTION_SCAN_TASK.done()),
        "reflection_task_running": bool(EVOLUTION_REFLECTION_TASK and not EVOLUTION_REFLECTION_TASK.done())
    })
    return status

@app.get("/dashboard/llm/interactions")
async def get_llm_interactions(limit: int = 20):
    return {
        "provider": settings.MCP_LLM_PROVIDER,
        "enabled": bool(settings.GLM_API_KEY or settings.DEEPSEEK_API_KEY),
        "items": cognitive_processor.llm.get_recent_interactions(limit=limit)
    }

@app.get("/dashboard/llm/status")
async def get_llm_status():
    return cognitive_processor.llm.get_status()

@app.get("/dashboard/memory/{memory_id}")
async def get_memory_detail(memory_id: str):
    """
    Get full details for a specific memory
    """
    try:
        # Use get() with specific ID
        raw = memory_manager.store.collection.get(ids=[memory_id])
        if not raw["ids"]:
            raise HTTPException(status_code=404, detail="Memory not found")
            
        content = raw["documents"][0]
        meta = raw["metadatas"][0]
        
        return {
            "id": memory_id,
            "content": content,
            "timestamp": meta.get("timestamp", ""),
            "scope": meta.get("scope", "project"),
            "user_id": meta.get("user_id", "")
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/dashboard/memory/search")
async def dashboard_search_memories(query: str, limit: int = 20):
    """
    看板搜索：按语义查询记忆，支持混合检索（语义+关键词）
    """
    print(f"🔍 [SEARCH] Received query: '{query}'")
    try:
        if not query.strip():
            return {"items": []}
            
        items = []
        seen_ids = set()
        
        # 1. Semantic Search via Chroma (vector similarity)
        try:
            print(f"🔍 [SEARCH] Attempting Semantic Search...")
            res = memory_manager.store.collection.query(query_texts=[query], n_results=max(1, min(limit, 50)))
            ids = res.get("ids", [[]])[0] if res.get("ids") else []
            docs = res.get("documents", [[]])[0] if res.get("documents") else []
            metas = res.get("metadatas", [[]])[0] if res.get("metadatas") else []
            
            print(f"🔍 [SEARCH] Semantic found {len(ids)} results.")
            
            for i, mid in enumerate(ids):
                if mid in seen_ids: continue
                seen_ids.add(mid)
                
                content = docs[i] if i < len(docs) else ""
                meta = metas[i] if i < len(metas) else {}
                first_line = (content or "").splitlines()[0].strip()
                title = first_line[:28] + "…" if len(first_line) > 28 else (first_line or f"记忆 {str(mid)[:8]}")
                
                items.append({
                    "id": mid,
                    "title": title,
                    "content": content,
                    "timestamp": meta.get("timestamp", ""),
                    "scope": meta.get("scope", "project"),
                    "user_id": meta.get("user_id", ""),
                    "match_type": "semantic"
                })
        except Exception as e:
            print(f"❌ [SEARCH] Semantic search failed: {e}")

        # 2. Fuzzy/Keyword Search Fallback (Python-side filtering)
        # If semantic results are few, or user expects exact keyword matches that vectors might miss
        if len(items) < limit:
            try:
                print(f"🔍 [SEARCH] Attempting Keyword Fallback (Current items: {len(items)})...")
                # Retrieve a larger batch of documents to filter manually
                # Note: This is inefficient for huge datasets but fine for local memory (<10k items)
                # Ideally, Chroma `where_document` could be used but it's limited to $contains
                all_docs = memory_manager.store.collection.get() # Get all (or use limit/offset if possible)
                
                raw_ids = all_docs.get("ids", [])
                raw_docs = all_docs.get("documents", [])
                raw_metas = all_docs.get("metadatas", [])
                
                print(f"🔍 [SEARCH] Scanning {len(raw_ids)} total documents for keyword '{query}'...")
                
                query_lower = query.lower()
                
                for i, doc in enumerate(raw_docs):
                    if len(items) >= limit: break
                    mid = raw_ids[i]
                    if mid in seen_ids: continue
                    
                    if doc and query_lower in doc.lower():
                        seen_ids.add(mid)
                        meta = raw_metas[i] if i < len(raw_metas) else {}
                        first_line = (doc or "").splitlines()[0].strip()
                        title = first_line[:28] + "…" if len(first_line) > 28 else (first_line or f"记忆 {str(mid)[:8]}")
                        
                        items.append({
                            "id": mid,
                            "title": title,
                            "content": doc,
                            "timestamp": meta.get("timestamp", ""),
                            "scope": meta.get("scope", "project"),
                            "user_id": meta.get("user_id", ""),
                            "match_type": "keyword"
                        })
                print(f"🔍 [SEARCH] After keyword scan, total items: {len(items)}")
            except Exception as e:
                print(f"❌ [SEARCH] Keyword search failed: {e}")

        return {"items": items}
    except Exception as e:
        print(f"❌ [SEARCH] Critical error: {e}")
        return {"items": [], "error": str(e)}

@app.post("/dashboard/memory/update")
async def dashboard_update_memory(req: UpdateMemoryRequest, background_tasks: BackgroundTasks):
    """
    看板更新记忆内容
    """
    try:
        success = memory_manager.update_memory(req.user_id, req.memory_id, req.content)
        if not success:
            raise HTTPException(status_code=404, detail="未找到可更新的记忆")
        log_event(f"看板更新记忆成功: {req.memory_id[:8]}")
        background_tasks.add_task(
            cognitive_processor.process_memory_event,
            memory_id=req.memory_id,
            content=req.content,
            user_id=req.user_id
        )
        return {"status": "ok", "id": req.memory_id}
    except PermissionError:
        raise HTTPException(status_code=403, detail="无权限更新该记忆")
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/dashboard/evolution/profile")
async def set_evolution_profile(profile: str):
    global EVOLUTION_PROFILE_OVERRIDE
    profile = (profile or "").lower()
    if profile not in ["light", "standard", "aggressive"]:
        raise HTTPException(status_code=400, detail="profile 必须是 light/standard/aggressive")
    EVOLUTION_PROFILE_OVERRIDE = profile
    log_event(f"[EVOLUTION] 已切换自我进化策略为: {profile}")
    return {"status": "ok", "profile": profile}

@app.get("/dashboard/graph")
async def get_graph_data(days: int = 7, max_nodes: int = 1000):
    """
    获取知识图谱数据用于可视化 (D3/ForceGraph 格式)
    Enriched with Category/Group logic
    
    Args:
        days: 只显示最近几天的记忆 (默认7天)
        max_nodes: 最大节点数量限制 (默认100个)
    """
    try:
        from datetime import datetime, timedelta
        
        # 计算时间阈值
        cutoff_date = datetime.now() - timedelta(days=days)
        
        G = memory_manager.store.graph
        data = nx.node_link_data(G)

        memory_ids = [str(n.get("id")) for n in data.get("nodes", []) if n.get("type") == "memory"]
        memory_payload = {}
        filtered_memory_ids = set()
        
        if memory_ids:
            raw = memory_manager.store.collection.get(ids=memory_ids)
            ids = raw.get("ids", [])
            docs = raw.get("documents", [])
            metas = raw.get("metadatas", [])
            
            for i, mid in enumerate(ids):
                content = docs[i] if i < len(docs) else ""
                meta = metas[i] if i < len(metas) else {}
                timestamp_str = meta.get("timestamp", "")
                
                # 检查时间是否在范围内
                try:
                    if timestamp_str:
                        memory_date = datetime.fromisoformat(timestamp_str.replace('Z', '+00:00'))
                        if memory_date < cutoff_date:
                            continue  # 跳过过期的记忆
                except:
                    pass  # 如果解析失败，保留该记忆
                
                first_line = (content or "").splitlines()[0].strip()
                short_title = first_line[:22] + "…" if len(first_line) > 22 else first_line
                if not short_title:
                    short_title = f"记忆 {str(mid)[:8]}"
                memory_payload[str(mid)] = {
                    "title": short_title,
                    "detail": content or "",
                    "timestamp": timestamp_str,
                    "scope": meta.get("scope", "project"),
                    "user_id": meta.get("user_id", "")
                }
                filtered_memory_ids.add(str(mid))

        category_name_map = {
            "Coding": "编程技能",
            "Config": "环境配置",
            "Personal": "用户画像",
            "General": "通用知识",
            "Knowledge": "知识体系",
            "Other": "其他"
        }

        enriched_nodes = []
        filtered_node_ids = set()
        
        for node in data.get("nodes", []):
            node_id = str(node.get("id", ""))
            node_type = node.get("type", "")
            
            # 如果是记忆节点，检查是否通过时间过滤
            if node_type == "memory" and node_id not in filtered_memory_ids:
                continue
            
            # 限制节点数量
            if len(filtered_node_ids) >= max_nodes:
                break
                
            filtered_node_ids.add(node_id)
            
            group = "General"
            node_id_lower = node_id.lower()

            if any(k in node_id_lower for k in ["python", "java", "code", "function", "api", "class", "method", "git", "docker"]):
                group = "Coding"
            elif any(k in node_id_lower for k in ["config", "env", "port", "host", "setting", "setup"]):
                group = "Config"
            elif any(k in node_id_lower for k in ["user", "profile", "preference", "like", "dislike"]):
                group = "Personal"
            elif node_type == "entity":
                group = "Entity"
            elif node_type == "category":
                group = node_id if node_id in category_name_map else "General"

            if node_type == "memory" and node_id in memory_payload:
                mp = memory_payload[node_id]
                node["label"] = mp["title"]
                node["title"] = mp["title"]
                node["detail"] = mp["detail"]
                node["timestamp"] = mp["timestamp"]
                node["scope"] = mp["scope"]
                node["user_id"] = mp["user_id"]
            elif node_type == "category":
                node["label"] = category_name_map.get(node_id, str(node_id))
                node["title"] = node["label"]
            elif "label" not in node or not node["label"]:
                node["label"] = str(node_id)
                node["title"] = str(node_id)

            node["group"] = group
            enriched_nodes.append(node)
        
        # 过滤链接，只保留两个端点都在过滤后节点集中的链接
        filtered_links = []
        for link in data.get("links", []):
            source_id = str(link.get("source", ""))
            target_id = str(link.get("target", ""))
            if source_id in filtered_node_ids and target_id in filtered_node_ids:
                filtered_links.append(link)

        return {
            "nodes": enriched_nodes,
            "links": filtered_links
        }
    except Exception as e:
        print(f"提供图谱数据时出错: {e}")
        import traceback
        traceback.print_exc()
        return {"nodes": [], "links": []}

@app.get("/dashboard/logs")
async def get_logs():
    """
    Get recent logs
    """
    return {"logs": list(reversed(LOG_BUFFER))}

@app.post("/dashboard/rebuild_graph")
async def rebuild_graph(background_tasks: BackgroundTasks):
    """
    手动触发全量记忆扫描，重建知识图谱
    """
    log_event("正在启动全量记忆扫描以重建知识图谱...")
    
    # 获取所有记忆 (由于目前没有 list_all 接口，我们通过 search 空字符串获取)
    # 实际上应该从 MemoryStore 直接读取
    background_tasks.add_task(run_full_scan)
    return {"status": "Rebuild started", "message": "全量扫描已在后台启动"}

async def run_full_scan():
    """后台全量扫描任务"""
    try:
        # 1. 从 Chroma 获取所有文档
        # 注意：这里直接操作 collection 以获取所有内容
        all_memories = memory_manager.store.collection.get()
        ids = all_memories["ids"]
        docs = all_memories["documents"]
        metas = all_memories["metadatas"]
        
        log_event(f"发现 {len(ids)} 条记忆，正在逐一分析...")
        
        for i in range(len(ids)):
            await cognitive_processor.process_memory_event(
                memory_id=ids[i],
                content=docs[i],
                user_id=metas[i]["user_id"]
            )
            # 避免请求过快或占用过多资源
            if i % 10 == 0:
                log_event(f"已处理 {i}/{len(ids)} 条记忆...")
                await asyncio.sleep(0.1)
                
        log_event("✅ 全量记忆扫描完成，知识图谱已更新。")
    except Exception as e:
        log_event(f"❌ 重建图谱失败: {e}")

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
        
        # 在后台触发认知处理 (现在支持无 LLM 模式下的基础分析)
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
