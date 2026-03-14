from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from mcp_memory.memory.manager import MemoryManager
from mcp_memory.models.data_models import ReadMemoryRequest, WriteMemoryRequest, DeleteMemoryRequest, UpdateMemoryRequest
from mcp_memory.core.config import settings
from mcp_memory.memory.cognitive import CognitiveProcessor
from mcp_memory.memory.agent_processor import MemoryAgentProcessor
import uvicorn
import os
import sys
import json
import networkx as nx
from typing import List

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
    # 初始化智能体处理器
    agent_processor = MemoryAgentProcessor()
    print("✅ 记忆管理器初始化成功。")
    print("✅ 智能体处理器初始化成功（V2深度思考模式）")
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
    
    # 初始化三层记忆管理器和自动总结系统
    try:
        if memory_manager.tiered_manager:
            await memory_manager.tiered_manager.initialize()
            log_event("[AUTO-SUMMARIZER] 自动总结系统已启动，将主动处理记忆清洗和技能提取")
        else:
            log_event("[AUTO-SUMMARIZER] 三层记忆管理器未初始化，自动总结功能已禁用")
    except Exception as e:
        log_event(f"[AUTO-SUMMARIZER] 初始化失败：{e}")

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
    Get system stats - 使用统一的 MemoryStore 统计
    """
    try:
        # 使用统一的 MemoryStore 统计
        tiered_stats = memory_manager.store.get_tiered_stats()
        
        # 检查是否有任何 LLM 提供商可用
        providers = settings.providers
        llm_enabled = len(providers) > 0
        
        return {
            "memory_count": tiered_stats["total_count"],
            "traditional_count": tiered_stats["total_count"],
            "tiered_count": tiered_stats["total_count"],
            "tiered_breakdown": {
                "storage": tiered_stats["storage_count"],
                "thinking": tiered_stats["thinking_count"],
                "skill": tiered_stats["skill_count"]
            },
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
async def get_graph_data(days: int = 7, max_nodes: int = 1000, memory_only: bool = False):
    """
    获取知识图谱数据用于可视化 (D3/ForceGraph 格式)
    Enriched with Category/Group logic
    合并传统记忆图谱和三层记忆图谱
    
    Args:
        days: 只显示最近几天的记忆 (默认7天)
        max_nodes: 最大节点数量限制 (默认100个)
        memory_only: 是否只返回记忆节点，不返回实体节点
    """
    try:
        from datetime import datetime, timedelta
        
        # 计算时间阈值
        cutoff_date = datetime.now() - timedelta(days=days)
        
        # 合并两个图谱：传统记忆 + 三层记忆
        G = nx.DiGraph()
        
        # 1. 添加传统记忆图谱
        traditional_graph = memory_manager.store.graph
        for node_id, node_data in traditional_graph.nodes(data=True):
            G.add_node(node_id, **node_data)
        for source, target, edge_data in traditional_graph.edges(data=True):
            G.add_edge(source, target, **edge_data)
        
        # 注意：三层记忆已合并到统一的 MemoryStore 中，不再需要单独获取
        
        data = nx.node_link_data(G)

        memory_ids = [str(n.get("id")) for n in data.get("nodes", []) if n.get("type") in ["memory", "storage", "thinking", "skill"]]
        memory_payload = {}
        filtered_memory_ids = set()
        
        # 1. 从传统记忆系统获取
        if memory_ids:
            try:
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
                                continue
                    except:
                        pass
                    
                    first_line = (content or "").splitlines()[0].strip()
                    short_title = first_line[:22] + "…" if len(first_line) > 22 else first_line
                    if not short_title:
                        short_title = f"记忆 {str(mid)[:8]}"
                    memory_payload[str(mid)] = {
                        "title": short_title,
                        "detail": content or "",
                        "timestamp": timestamp_str,
                        "scope": meta.get("scope", "project"),
                        "user_id": meta.get("user_id", ""),
                        "memory_type": meta.get("memory_type", "storage")
                    }
                    filtered_memory_ids.add(str(mid))
            except Exception as e:
                print(f"[Graph] 从记忆系统获取数据失败: {e}")
        
        # 注意：三层记忆已合并到统一的 MemoryStore 中

        # 三层记忆类型映射 - 用于3D图谱分组和着色
        tiered_memory_groups = {
            "storage": {"label": "存储记忆", "color": "#4A90E2"},   # 蓝色 - 原始对话
            "thinking": {"label": "思维记忆", "color": "#F5A623"},  # 橙色 - 总结
            "skill": {"label": "技能记忆", "color": "#7ED321"},     # 绿色 - 可复用知识
            "entity": {"label": "实体", "color": "#9013FE"},        # 紫色 - 实体节点
            "category": {"label": "分类", "color": "#BD10E0"}       # 紫色 - 分类节点
        }

        enriched_nodes = []
        filtered_node_ids = set()
        
        for node in data.get("nodes", []):
            node_id = str(node.get("id", ""))
            node_type = node.get("type", "")
            
            # 如果只显示记忆节点，跳过实体节点
            if memory_only and node_type == "entity":
                continue
            
            # 如果是记忆节点，检查是否通过时间过滤
            if node_type == "memory" and node_id not in filtered_memory_ids:
                continue
            
            # 限制节点数量
            if len(filtered_node_ids) >= max_nodes:
                break
                
            filtered_node_ids.add(node_id)
            
            # 根据三层记忆类型确定分组
            group = "storage"  # 默认分组
            
            if node_type == "entity":
                group = "entity"
            elif node_type == "category":
                group = "category"
            elif node_type == "memory" and node_id in memory_payload:
                # 从记忆数据中获取三层记忆类型
                mem_type = memory_payload[node_id].get("memory_type", "storage")
                if mem_type in ["storage", "thinking", "skill"]:
                    group = mem_type
                else:
                    group = "storage"

            if node_type == "memory" and node_id in memory_payload:
                mp = memory_payload[node_id]
                node["label"] = mp["title"]
                node["title"] = mp["title"]
                node["detail"] = mp["detail"]
                node["timestamp"] = mp["timestamp"]
                node["scope"] = mp["scope"]
                node["user_id"] = mp["user_id"]
                node["memory_type"] = mp.get("memory_type", "storage")  # 添加记忆类型
            elif node_type == "category":
                node["label"] = tiered_memory_groups.get(group, {}).get("label", str(node_id))
                node["title"] = node["label"]
            elif "label" not in node or not node["label"]:
                node["label"] = str(node_id)
                node["title"] = str(node_id)

            node["group"] = group
            node["group_label"] = tiered_memory_groups.get(group, {}).get("label", group)
            node["color"] = tiered_memory_groups.get(group, {}).get("color", "#999999")
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
    写入记忆接口（已集成智能体处理器）
    """
    try:
        # 使用智能体处理器处理写入内容
        processed = agent_processor.process_before_write(
            content=req.content,
            memory_type="storage",
            scope=req.scope,
            tags=[]
        )
        
        # 记录智能体处理信息
        suggested_type = processed["metadata"].get("suggested_type", "storage")
        log_event(f"🤖 智能体分析: 建议分类为 {suggested_type}")
        log_event(f"🤖 智能体核心意图: {processed['metadata']['intent_analysis']['core_intent']}")
        
        # project_id: 如果 AI 不传，manager 会使用当前自动检测的 CWD ID
        log_event(f"正在为用户 {req.user_id} 写入记忆 (范围: {req.scope})")
        result = memory_manager.write_memory(
            req.user_id, 
            req.content,  # 保留原始内容，不压缩
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
        
        # 返回包含智能体分析的结果
        return {
            "id": result,
            "agent_processed": True,
            "suggested_type": suggested_type,
            "intent_analysis": processed["metadata"]["intent_analysis"],
            "capabilities_applied": agent_processor.get_capabilities()
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/memory/read")
async def read_memory_endpoint(req: ReadMemoryRequest):
    """
    读取记忆接口，可选 DeepSeek 综合（已集成智能体处理器）
    """
    try:
        # 1. 检索原始记忆
        log_event(f"正在为用户 {req.user_id} 读取记忆 (查询: {req.query})")
        result = memory_manager.read_memory(req.user_id, req.query, req.project_id, req.limit)
        
        # 2. 使用智能体处理器处理读取结果
        if result:
            result = agent_processor.process_after_read(result)
            log_event(f"🤖 智能体处理: 已分析 {len(result)} 条记忆")
        
        # 3. 如果已启用且有结果，尝试进行综合
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
                    "id": "synthesis", # 虚拟 ID
                    "agent_processed": True,
                    "capabilities_applied": agent_processor.get_capabilities()
                }]
        
        # 添加智能体处理标记
        if result:
            for item in result:
                item["agent_processed"] = True
        
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/memory/reflect")
async def reflect_memory_endpoint(user_id: str, background_tasks: BackgroundTasks):
    """
    在后台触发深度反思 (记忆垃圾回收) - 已集成智能体处理器
    """
    if not settings.DEEPSEEK_API_KEY:
        raise HTTPException(status_code=400, detail="未配置 DeepSeek API Key")
    
    # 获取智能体系统提示词
    system_prompt = agent_processor.get_system_prompt()
    capabilities = agent_processor.get_capabilities()
    
    log_event(f"🤖 智能体模式: 正在为用户 {user_id} 触发深度反思")
    log_event(f"🤖 智能体能力: {', '.join(capabilities)}")
    
    background_tasks.add_task(cognitive_processor.run_reflection, user_id=user_id)
    return {
        "status": "反思已启动",
        "message": "深度思考进程正在后台运行（智能体V2模式）",
        "agent_mode": True,
        "capabilities": capabilities,
        "rules": {
            "no_compression": True,
            "deep_analysis": True,
            "fine_grained_classification": True,
            "merge_instead_of_delete": True
        }
    }

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


# ============================================================
# 三层记忆系统 API (Memory System V2) - 已合并到统一存储
# ============================================================

from mcp_memory.models.data_models import (
    StorageMemoryCreate, ThinkingMemoryCreate, SkillMemoryCreate,
    MemoryFeedbackRequest
)


@app.post("/tiered/storage/write")
async def write_storage_memory_endpoint(req: StorageMemoryCreate):
    """
    写入存储记忆（原始对话记录）
    使用统一的 MemoryStore
    """
    try:
        memory_id = memory_manager.store.save_storage_memory(
            content=req.content,
            user_id=req.user_id,
            session_id=req.session_id,
            topic=req.topic,
            participants=req.participants,
            scope=req.scope,
            project_id=req.project_id
        )
        log_event(f"写入存储记忆: {memory_id[:8]}")
        return {"status": "success", "memory_id": memory_id, "type": "storage"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/tiered/thinking/write")
async def write_thinking_memory_endpoint(req: ThinkingMemoryCreate):
    """
    写入思维记忆（总结）
    使用统一的 MemoryStore
    """
    try:
        memory_id = memory_manager.store.save_thinking_memory(
            content=req.content,
            user_id=req.user_id,
            source_memories=req.source_memories,
            summary_type=req.summary_type,
            key_points=req.key_points,
            scope=req.scope,
            project_id=req.project_id
        )
        log_event(f"写入思维记忆: {memory_id[:8]}")
        return {"status": "success", "memory_id": memory_id, "type": "thinking"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/tiered/skill/write")
async def write_skill_memory_endpoint(req: SkillMemoryCreate):
    """
    写入技能记忆（可复用知识）
    使用统一的 MemoryStore
    """
    try:
        memory_id = memory_manager.store.save_skill_memory(
            content=req.content,
            user_id=req.user_id,
            source_thinking=req.source_thinking,
            skill_type=req.skill_type,
            tags=req.tags,
            scope=req.scope,
            project_id=req.project_id
        )
        log_event(f"写入技能记忆: {memory_id[:8]}")
        return {"status": "success", "memory_id": memory_id, "type": "skill"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/tiered/query")
async def query_tiered_memories(
    query: str,
    user_id: str = None,
    memory_type: str = "all",
    limit: int = 10
):
    """
    分层查询记忆
    使用统一的 MemoryStore
    """
    try:
        memories = memory_manager.store.query_by_type(
            query=query,
            memory_type=memory_type,
            user_id=user_id,
            limit=limit
        )
        return {
            "memories": memories,
            "total": len(memories),
            "query_time_ms": 0
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/tiered/memory/{memory_id}")
async def get_memory_detail_endpoint(
    memory_id: str,
    include_sources: bool = True,
    include_related: bool = False
):
    """
    获取记忆详情（支持溯源）
    使用统一的 MemoryStore
    """
    try:
        # 获取记忆内容
        res = memory_manager.store.collection.get(ids=[memory_id])
        if not res or not res["ids"]:
            raise HTTPException(status_code=404, detail="记忆不存在")
        
        meta = res["metadatas"][0]
        detail = {
            "memory_id": memory_id,
            "content": res["documents"][0],
            "memory_type": meta.get("memory_type", "storage"),
            "timestamp": meta.get("timestamp"),
            "user_id": meta.get("user_id"),
            "scope": meta.get("scope"),
            "project_id": meta.get("project_id"),
            "confidence": float(meta.get("confidence", 1.0)),
            "verified": meta.get("verified") == "True"
        }
        
        # 获取源记忆
        if include_sources:
            detail["sources"] = memory_manager.store.get_source_memories(memory_id)
        
        return detail
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/tiered/memory/{memory_id}/trace")
async def trace_memory_origin_endpoint(memory_id: str, max_depth: int = 3):
    """
    追溯记忆的起源（完整的溯源链）
    使用统一的 MemoryStore
    """
    try:
        chain = []
        visited = set()
        current_id = memory_id
        
        for _ in range(max_depth):
            if current_id in visited:
                break
            visited.add(current_id)
            
            sources = memory_manager.store.get_source_memories(current_id)
            if not sources:
                break
            
            chain.extend(sources)
            # 继续追溯第一个源记忆
            current_id = sources[0]["memory_id"]
        
        return {"chain": chain, "depth": len(chain)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/tiered/memory/{memory_id}/feedback")
async def provide_feedback_endpoint(memory_id: str, req: MemoryFeedbackRequest):
    """
    提供记忆反馈（标记不准确）
    使用统一的 MemoryStore
    """
    try:
        # 获取记忆
        res = memory_manager.store.collection.get(ids=[memory_id])
        if not res or not res["ids"]:
            raise HTTPException(status_code=404, detail="记忆不存在")
        
        # 更新记忆元数据
        meta = res["metadatas"][0]
        meta["feedback_type"] = req.feedback_type
        meta["feedback_comment"] = req.comment or ""
        if req.suggested_content:
            meta["suggested_content"] = req.suggested_content
        
        memory_manager.store.collection.update(
            ids=[memory_id],
            metadatas=[meta]
        )
        
        return {"status": "success", "message": "反馈已记录"}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/tiered/stats")
async def get_tiered_stats(user_id: str = None):
    """
    获取三层记忆系统统计信息
    使用统一的 MemoryStore
    """
    try:
        stats = memory_manager.store.get_tiered_stats(user_id)
        return stats
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/tiered/summarize")
async def force_summarize_endpoint(memory_ids: List[str]):
    """
    手动触发总结（用于测试）
    注意：此功能暂时禁用，等待重新实现
    """
    raise HTTPException(status_code=501, detail="此功能正在重构中，请稍后再试")


@app.get("/tiered/merged")
async def get_merged_memories_endpoint(user_id: str = None, limit: int = 50):
    """
    查询合并的记忆
    
    返回两类记忆：
    - merged_enhanced: 合并后的增强版记忆
    - merged_source: 被合并的源记忆
    
    Args:
        user_id: 用户ID（可选）
        limit: 返回数量限制（默认50）
    """
    try:
        log_event(f"查询合并记忆 (用户: {user_id}, 限制: {limit})")
        merged_memories = memory_manager.store.get_merged_memories(user_id, limit)
        
        return {
            "count": len(merged_memories),
            "memories": merged_memories
        }
    except Exception as e:
        log_event(f"查询合并记忆失败: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/tiered/memory/{memory_id}/merge-chain")
async def get_merge_chain_endpoint(memory_id: str):
    """
    获取记忆的合并链
    
    追踪一个记忆的所有合并关系
    """
    try:
        log_event(f"查询记忆合并链: {memory_id}")
        chain = memory_manager.store.get_merge_chain(memory_id)
        
        if "error" in chain:
            raise HTTPException(status_code=404, detail=chain["error"])
        
        return chain
    except HTTPException:
        raise
    except Exception as e:
        log_event(f"查询合并链失败: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/tiered/daily-reflection/trigger")
async def trigger_daily_reflection():
    """
    手动触发每日深度思考
    用于测试和立即执行合并操作
    """
    try:
        log_event("手动触发每日深度思考")
        
        # 在后台执行，不阻塞API响应
        async def run_reflection():
            try:
                await cognitive_processor.daily_reflection.run_daily_reflection()
                log_event("手动每日深度思考完成")
            except Exception as e:
                log_event(f"手动每日深度思考失败: {e}")
        
        # 启动后台任务
        asyncio.create_task(run_reflection())
        
        return {
            "status": "started",
            "message": "每日深度思考已在后台启动，请查看日志"
        }
    except Exception as e:
        log_event(f"触发每日深度思考失败: {e}")
        raise HTTPException(status_code=500, detail=str(e))


def main():
    """
    启动服务器
    """
    port = settings.MCP_MEMORY_PORT
    print(f"🚀 正在端口 {port} 上启动 MCP 记忆服务器...")
    print(f"📊 看板地址: http://localhost:{port}/")
    uvicorn.run(app, host="0.0.0.0", port=port)

if __name__ == "__main__":
    main()
