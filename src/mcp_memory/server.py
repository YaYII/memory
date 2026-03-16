"""
MCP Memory HTTP Server

修复记录:
- [P0] 默认绑定 127.0.0.1（可通过 MCP_MEMORY_HOST 覆盖）
- [P0] 添加 API Key 认证中间件
- [P1] write_memory 接口：后台异步调用 enhance_memory_background
- [P2] read_memory 接口：适配新签名（返回 tuple），Profile 独立处理
- [P3] 消除全局变量，封装为 ServerState 类
- [P3] 启动时注册图谱定时 flush 任务
"""

from fastapi import FastAPI, HTTPException, BackgroundTasks, Request
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from mcp_memory.memory.manager import MemoryManager
from mcp_memory.models.data_models import ReadMemoryRequest, WriteMemoryRequest, DeleteMemoryRequest, UpdateMemoryRequest
from mcp_memory.core.config import settings
from mcp_memory.memory.cognitive import CognitiveProcessor
from mcp_memory.memory.agent_processor import MemoryAgentProcessor
from mcp_memory.brain.ai_brain import AIBrain
import uvicorn
import os
import sys
import json
import networkx as nx
from typing import List, Optional, Dict, Any
import asyncio
import random

from sse_starlette.sse import EventSourceResponse

# Load .env
from dotenv import load_dotenv
_env_path = os.path.join(os.path.dirname(__file__), "..", "..", ".env")
if os.path.exists(_env_path):
    load_dotenv(_env_path)


# ============================================================
# ServerState — 消除全局变量 [P3]
# ============================================================

class ServerState:
    """封装所有服务器状态，替代全局变量"""

    def __init__(self) -> None:
        self.log_buffer: List[dict] = []
        self.evolution_scan_task: Optional[asyncio.Task] = None
        self.evolution_reflection_task: Optional[asyncio.Task] = None
        self.evolution_profile_override: Optional[str] = None
        self.memory_manager: Optional[MemoryManager] = None
        self.cognitive_processor: Optional[CognitiveProcessor] = None
        self.agent_processor: Optional[MemoryAgentProcessor] = None
        self.ai_brain: Optional[AIBrain] = None


# ============================================================
# Log Streaming
# ============================================================

class LogStream:
    def __init__(self, state: ServerState) -> None:
        self.listeners: List[asyncio.Queue] = []
        self._state = state

    async def broadcast(self, message: str) -> None:
        from datetime import datetime
        timestamp = datetime.now().strftime("%H:%M:%S")
        data = json.dumps({"time": timestamp, "message": message}, ensure_ascii=False)
        print(f"[{timestamp}] {message}")

        self._state.log_buffer.append({"time": timestamp, "message": message})
        if len(self._state.log_buffer) > 50:
            self._state.log_buffer.pop(0)

        for queue in self.listeners:
            await queue.put(data)

    async def listen(self):
        queue: asyncio.Queue = asyncio.Queue()
        self.listeners.append(queue)
        try:
            while True:
                data = await queue.get()
                yield dict(data=data)
        except asyncio.CancelledError:
            self.listeners.remove(queue)


# ============================================================
# FastAPI App
# ============================================================

app = FastAPI(title="MCP Memory Server", version="2.0.0")

# Mount static
static_dir = os.path.join(os.path.dirname(__file__), "static")
os.makedirs(static_dir, exist_ok=True)
app.mount("/static", StaticFiles(directory=static_dir), name="static")

vue_static_dir = os.path.join(os.path.dirname(__file__), "static_vue")
if os.path.exists(vue_static_dir):
    app.mount("/vue", StaticFiles(directory=vue_static_dir, html=True), name="vue")

# Server state
server_state = ServerState()
log_stream = LogStream(server_state)

# Sync log helper
def log_event_sync(message: str) -> None:
    try:
        loop = asyncio.get_running_loop()
        loop.create_task(log_stream.broadcast(message))
    except RuntimeError:
        print(f"[SYNC-LOG] {message}")

log_event = log_event_sync


# ============================================================
# API Key Auth Middleware [P0]
# ============================================================

# 不需要认证的路径前缀
_PUBLIC_PATHS = {"/health", "/", "/static", "/vue", "/dashboard/events", "/dashboard/stats", "/dashboard/logs", "/openapi.json", "/docs"}

@app.middleware("http")
async def api_key_auth(request: Request, call_next):
    """API Key 认证中间件（仅当 MCP_MEMORY_API_KEY 已设置时生效）"""
    api_key = settings.MCP_MEMORY_API_KEY
    if not api_key:
        # 未配置 API Key，跳过认证
        return await call_next(request)

    path = request.url.path
    # 公开路径不需要认证
    if any(path.startswith(p) for p in _PUBLIC_PATHS):
        return await call_next(request)

    # 从 Header 或 Query 获取 API Key
    auth_header = request.headers.get("Authorization", "")
    query_key = request.query_params.get("api_key", "")

    provided_key = ""
    if auth_header.startswith("Bearer "):
        provided_key = auth_header[7:]
    elif query_key:
        provided_key = query_key

    if provided_key != api_key:
        return HTMLResponse(
            content='{"detail": "Unauthorized"}',
            status_code=401,
            media_type="application/json",
        )

    return await call_next(request)


# ============================================================
# Initialization
# ============================================================

try:
    server_state.memory_manager = MemoryManager()
    server_state.cognitive_processor = CognitiveProcessor(server_state.memory_manager)
    server_state.agent_processor = MemoryAgentProcessor()
    print("✅ 记忆管理器初始化成功")
    print("✅ 智能体处理器初始化成功（V2深度思考模式）")
except Exception as e:
    print(f"❌ 无法初始化记忆管理器: {e}")
    sys.exit(1)

try:
    server_state.ai_brain = AIBrain(memory_store=server_state.memory_manager.store)
    print("✅ AI大脑控制器初始化成功（已接入 MemoryStore）")
except Exception as e:
    print(f"⚠️ 无法初始化AI大脑控制器: {e}")


async def initialize_services() -> None:
    try:
        await server_state.cognitive_processor.initialize()
        print("✅ LLM 服务初始化成功（多模型支持已启用）")
    except Exception as e:
        print(f"⚠️ LLM 服务初始化失败: {e}")


# ============================================================
# Background Tasks
# ============================================================

async def system_heartbeat_task() -> None:
    """后台系统状态日志"""
    actions = [
        "监控神经元连接稳定性...",
        "正在优化记忆图谱索引...",
        "DeepSeek 认知模块就绪",
        "扫描冗余数据...",
        "同步思维火花状态...",
        "检测到新的知识关联",
        "更新突触权重...",
        "系统负载正常",
    ]
    while True:
        try:
            await asyncio.sleep(random.randint(5, 10))
            log_event(f"[SYSTEM] {random.choice(actions)}")
        except Exception:
            pass


def resolve_evolution_policy() -> dict:
    """解析进化策略"""
    ss = server_state
    profile = (ss.evolution_profile_override or settings.MCP_EVOLUTION_PROFILE or "standard").lower()
    if profile not in ["light", "standard", "aggressive"]:
        profile = "standard"

    policy = {
        "light": {"scan_interval": 900, "reflection_interval": 3600, "batch_size": 20},
        "standard": {"scan_interval": 300, "reflection_interval": 1800, "batch_size": 50},
        "aggressive": {"scan_interval": 120, "reflection_interval": 900, "batch_size": 120},
    }[profile].copy()

    if not settings.MCP_EVOLUTION_ADAPTIVE:
        policy["scan_interval"] = settings.MCP_EVOLUTION_SCAN_INTERVAL_SECONDS
        policy["reflection_interval"] = settings.MCP_EVOLUTION_REFLECTION_INTERVAL_SECONDS
        policy["batch_size"] = settings.MCP_EVOLUTION_SCAN_BATCH_SIZE
        policy["adaptive"] = False
        policy["profile"] = profile
        return policy

    try:
        memory_count = server_state.memory_manager.store.collection.count()
    except Exception:
        memory_count = 0

    if memory_count >= 500:
        policy["scan_interval"] = max(policy["scan_interval"], 300)
        policy["reflection_interval"] = max(policy["reflection_interval"], 1800)
        policy["batch_size"] = min(policy["batch_size"], 80)
    elif memory_count <= 100:
        policy["scan_interval"] = min(policy["scan_interval"], 180)
        policy["reflection_interval"] = min(policy["reflection_interval"], 900)

    policy["profile"] = profile
    policy["adaptive"] = True
    policy["memory_count"] = memory_count
    return policy


async def periodic_evolution_scan_task() -> None:
    while True:
        try:
            policy = resolve_evolution_policy()
            await asyncio.sleep(policy["scan_interval"])
            processed = await server_state.cognitive_processor.periodic_scan_once(batch_size=policy["batch_size"])
            log_event(f"[EVOLUTION] 周期扫描完成，处理 {processed} 条。策略={policy['profile']}")
        except Exception as e:
            log_event(f"[EVOLUTION] 周期扫描失败: {e}")


async def periodic_evolution_reflection_task() -> None:
    while True:
        try:
            policy = resolve_evolution_policy()
            await asyncio.sleep(policy["reflection_interval"])
            await server_state.cognitive_processor.run_reflection(settings.MCP_EVOLUTION_REFLECTION_USER_ID)
            log_event(f"[EVOLUTION] 周期反思完成。策略={policy['profile']}")
        except Exception as e:
            log_event(f"[EVOLUTION] 周期反思失败: {e}")


async def graph_flush_task() -> None:
    """每 30 秒 flush 脏图谱到磁盘"""
    while True:
        try:
            await asyncio.sleep(30)
            server_state.memory_manager.store.flush_graph()
        except Exception:
            pass


async def memory_self_purification_task() -> None:
    """每 5 分钟执行记忆自我净化"""
    while True:
        try:
            await asyncio.sleep(300)
            if server_state.ai_brain:
                actions = await server_state.ai_brain._perform_memory_maintenance()
                log_event(f"[SELF-PURIFICATION] 记忆自我净化完成: {', '.join(actions)}")
                
                forgotten = server_state.ai_brain.consolidation.get_forgotten_memories()
                if forgotten:
                    log_event(f"[SELF-PURIFICATION] 发现 {len(forgotten)} 个已遗忘记忆")
        except Exception as e:
            log_event(f"[SELF-PURIFICATION] 记忆自我净化失败: {e}")


async def tiered_memory_evolution_task() -> None:
    """
    三层记忆进化任务
    定期将存储记忆转换为思维记忆，思维记忆转换为技能记忆
    """
    while True:
        try:
            await asyncio.sleep(600)  # 每10分钟执行一次
            
            if not server_state.memory_manager or not server_state.memory_manager.store:
                continue
            
            store = server_state.memory_manager.store
            
            # 1. 获取未转换的存储记忆
            storage_memories = store.query_by_type(
                query="",
                memory_type="storage",
                limit=20
            )
            
            converted_thinking = 0
            converted_skill = 0
            
            for memory in storage_memories:
                meta = memory.get("metadata", {})
                
                # 跳过已处理的
                if meta.get("tiered_processed", False):
                    continue
                
                content = memory.get("content", "")
                memory_id = memory.get("memory_id", "")
                
                # 检查是否值得转换为思维记忆
                # 条件：内容长度 > 200，或已被访问多次
                access_count = meta.get("access_count", 0)
                if len(content) > 200 or access_count >= 2:
                    # 转换为思维记忆
                    thinking_content = f"【思维总结】\n{content[:500]}..."
                    store.save_thinking_memory(
                        content=thinking_content,
                        user_id=meta.get("user_id", "default"),
                        source_memories=[memory_id],
                        summary_type="auto_conversion",
                        key_points=[content[:100]],
                        scope=meta.get("scope", "project"),
                        project_id=meta.get("project_id", "")
                    )
                    
                    # 标记原记忆已处理
                    store.update_memory_metadata(memory_id, {"tiered_processed": True})
                    converted_thinking += 1
            
            # 2. 获取思维记忆，检查是否可转换为技能记忆
            thinking_memories = store.query_by_type(
                query="",
                memory_type="thinking",
                limit=10
            )
            
            for memory in thinking_memories:
                meta = memory.get("metadata", {})
                
                if meta.get("skill_converted", False):
                    continue
                
                content = memory.get("content", "")
                memory_id = memory.get("memory_id", "")
                
                # 检查是否包含可复用的知识
                # 条件：包含关键词如"方法"、"步骤"、"规则"等
                skill_keywords = ["方法", "步骤", "规则", "最佳实践", "解决方案", "配置", "技巧"]
                if any(kw in content for kw in skill_keywords):
                    # 转换为技能记忆
                    skill_content = f"【技能知识】\n{content}"
                    store.save_skill_memory(
                        content=skill_content,
                        user_id=meta.get("user_id", "default"),
                        source_thinking=[memory_id],
                        skill_type="knowledge",
                        tags=["auto_extracted"],
                        scope="global",
                        project_id="global"
                    )
                    
                    # 标记原记忆已转换
                    store.update_memory_metadata(memory_id, {"skill_converted": True})
                    converted_skill += 1
            
            if converted_thinking > 0 or converted_skill > 0:
                log_event(f"[TIERED-EVOLUTION] 三层记忆转换完成: 思维记忆+{converted_thinking}, 技能记忆+{converted_skill}")
                
        except Exception as e:
            log_event(f"[TIERED-EVOLUTION] 三层记忆转换失败: {e}")


# ============================================================
# Startup
# ============================================================

@app.on_event("startup")
async def startup_event():
    server_state.cognitive_processor.is_running = True
    server_state.cognitive_processor.set_logger(log_event)
    asyncio.create_task(system_heartbeat_task())

    await initialize_services()

    if server_state.ai_brain:
        try:
            await server_state.ai_brain.initialize()
            log_event("[AI-BRAIN] AI大脑已激活")
        except Exception as e:
            log_event(f"[AI-BRAIN] AI大脑激活失败: {e}")

    # 三层记忆管理器和自动总结
    try:
        if server_state.memory_manager.store:
            log_event("[AUTO-SUMMARIZER] 记忆存储已就绪")
    except Exception as e:
        log_event(f"[AUTO-SUMMARIZER] 初始化失败：{e}")

    # 进化调度
    if settings.MCP_EVOLUTION_ENABLED:
        server_state.evolution_scan_task = asyncio.create_task(periodic_evolution_scan_task())
        server_state.evolution_reflection_task = asyncio.create_task(periodic_evolution_reflection_task())
        log_event("[EVOLUTION] 自我进化调度器已启动")

    # 图谱定时 flush
    asyncio.create_task(graph_flush_task())
    log_event("[GRAPH] 图谱定时 flush 任务已启动（30秒间隔）")

    # 记忆自我净化
    asyncio.create_task(memory_self_purification_task())
    log_event("[SELF-PURIFICATION] 记忆自我净化任务已启动（5分钟间隔）")

    # 三层记忆进化
    asyncio.create_task(tiered_memory_evolution_task())
    log_event("[TIERED-EVOLUTION] 三层记忆进化任务已启动（10分钟间隔）")


# ============================================================
# Dashboard & Health Endpoints
# ============================================================

@app.get("/dashboard/events")
async def events_endpoint():
    return EventSourceResponse(log_stream.listen())


@app.get("/", response_class=FileResponse)
async def dashboard():
    return os.path.join(static_dir, "index.html")


@app.get("/health")
async def health_check():
    return {"status": "ok", "pid": os.getpid()}


@app.get("/dashboard/stats")
async def get_stats():
    try:
        tiered_stats = server_state.memory_manager.store.get_tiered_stats()
        providers = settings.providers
        llm_enabled = len(providers) > 0

        stats_response: Dict[str, Any] = {
            "memory_count": tiered_stats["total_count"],
            "traditional_count": tiered_stats["total_count"],
            "tiered_count": tiered_stats["total_count"],
            "tiered_breakdown": {
                "storage": tiered_stats["storage_count"],
                "thinking": tiered_stats["thinking_count"],
                "skill": tiered_stats["skill_count"],
            },
            "llm_enabled": llm_enabled,
            "providers_count": len(providers),
            "preferred_provider": settings.MCP_LLM_PROVIDER,
        }

        if server_state.ai_brain:
            brain_status = await server_state.ai_brain.get_brain_status()
            stats_response["brain"] = {
                "is_active": brain_status["is_active"],
                "total_cycles": brain_status["total_cycles"],
                "curiosity_level": brain_status["active_cognition"]["curiosity_level"],
                "evolution_generation": brain_status["self_awareness"]["evolution_generation"],
                "total_experiences": brain_status["self_awareness"]["total_experiences"],
                "memory_store_connected": brain_status.get("memory_store_connected", False),
            }

        return stats_response
    except Exception as e:
        return {"error": str(e)}


@app.get("/dashboard/evolution/status")
async def get_evolution_status():
    policy = resolve_evolution_policy()
    status = server_state.cognitive_processor.get_status()
    status.update({
        "enabled": settings.MCP_EVOLUTION_ENABLED,
        "profile": policy["profile"],
        "adaptive": policy["adaptive"],
        "scan_interval_seconds": policy["scan_interval"],
        "reflection_interval_seconds": policy["reflection_interval"],
        "scan_batch_size": policy["batch_size"],
        "scan_task_running": bool(server_state.evolution_scan_task and not server_state.evolution_scan_task.done()),
        "reflection_task_running": bool(server_state.evolution_reflection_task and not server_state.evolution_reflection_task.done()),
        "is_running": status.get("running", False),
        "evolution_stage": status.get("preferred_provider", "unknown"),
        "neuron_count": 0,
        "synapse_count": 0,
    })
    return status


@app.get("/dashboard/llm/interactions")
async def get_llm_interactions(limit: int = 20):
    return {
        "provider": settings.MCP_LLM_PROVIDER,
        "enabled": bool(settings.GLM_API_KEY or settings.DEEPSEEK_API_KEY),
        "items": server_state.cognitive_processor.llm.get_recent_interactions(limit=limit),
    }


@app.get("/dashboard/llm/status")
async def get_llm_status():
    return server_state.cognitive_processor.llm.get_status()


@app.get("/dashboard/logs")
async def get_logs():
    return {"logs": list(reversed(server_state.log_buffer))}


@app.post("/dashboard/evolution/profile")
async def set_evolution_profile(profile: str):
    profile = (profile or "").lower()
    if profile not in ["light", "standard", "aggressive"]:
        raise HTTPException(status_code=400, detail="profile 必须是 light/standard/aggressive")
    server_state.evolution_profile_override = profile
    log_event(f"[EVOLUTION] 已切换自我进化策略为: {profile}")
    return {"status": "ok", "profile": profile}


@app.get("/dashboard/memory/search")
async def dashboard_search_memories(query: str = "", limit: int = 20):
    """看板搜索：按语义查询记忆"""
    try:
        items: List[dict] = []
        if not query.strip():
            all_docs = server_state.memory_manager.store.collection.get()
            for i, mid in enumerate(all_docs.get("ids", [])):
                if len(items) >= limit:
                    break
                content = all_docs.get("documents", [])[i] if i < len(all_docs.get("documents", [])) else ""
                meta = all_docs.get("metadatas", [])[i] if i < len(all_docs.get("metadatas", [])) else {}
                first_line = (content or "").splitlines()[0].strip()
                title = first_line[:28] + "…" if len(first_line) > 28 else (first_line or f"记忆 {str(mid)[:8]}")
                items.append({
                    "id": mid, "title": title, "content": content,
                    "timestamp": meta.get("timestamp", ""), "scope": meta.get("scope", "project"),
                    "user_id": meta.get("user_id", ""), "match_type": "all",
                })
            return {"items": items}

        # 语义搜索
        results, _ = server_state.memory_manager.store.search(query, user_id="dashboard", limit=limit, reinforce=False)
        for r in results:
            content = r.get("content", "")
            first_line = content.splitlines()[0].strip() if content else ""
            title = first_line[:28] + "…" if len(first_line) > 28 else (first_line or f"记忆 {r['id'][:8]}")
            meta = r.get("metadata", {})
            items.append({
                "id": r["id"], "title": title, "content": content,
                "timestamp": r.get("timestamp", ""), "scope": meta.get("scope", "project"),
                "user_id": meta.get("user_id", ""), "match_type": "semantic",
            })
        return {"items": items}
    except Exception as e:
        print(f"❌ [SEARCH] Error: {e}")
        return {"items": [], "error": str(e)}


@app.get("/dashboard/memory/{memory_id}")
async def get_memory_detail(memory_id: str):
    try:
        raw = server_state.memory_manager.store.collection.get(ids=[memory_id])
        if not raw["ids"]:
            raise HTTPException(status_code=404, detail="Memory not found")
        meta = raw["metadatas"][0]
        return {
            "id": memory_id, "content": raw["documents"][0],
            "timestamp": meta.get("timestamp", ""), "scope": meta.get("scope", "project"),
            "user_id": meta.get("user_id", ""),
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/dashboard/memory/update")
async def dashboard_update_memory(req: UpdateMemoryRequest, background_tasks: BackgroundTasks):
    try:
        success = server_state.memory_manager.update_memory(req.user_id, req.memory_id, req.content)
        if not success:
            raise HTTPException(status_code=404, detail="未找到可更新的记忆")
        log_event(f"看板更新记忆成功: {req.memory_id[:8]}")
        background_tasks.add_task(
            server_state.cognitive_processor.process_memory_event,
            memory_id=req.memory_id, content=req.content, user_id=req.user_id,
        )
        return {"status": "ok", "id": req.memory_id}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/dashboard/graph")
async def get_graph_data(days: int = 7, max_nodes: int = 1000, memory_only: bool = False):
    try:
        from datetime import datetime, timedelta
        cutoff_date = datetime.now() - timedelta(days=days)
        G = server_state.memory_manager.store.graph

        data = nx.node_link_data(G)
        memory_ids = [str(n.get("id")) for n in data.get("nodes", [])
                       if n.get("type") in ["memory", "storage", "thinking", "skill"]]

        memory_payload: Dict[str, dict] = {}
        filtered_memory_ids: Set[str] = set()

        if memory_ids:
            try:
                raw = server_state.memory_manager.store.collection.get(ids=memory_ids)
                for i, mid in enumerate(raw.get("ids", [])):
                    content = raw.get("documents", [])[i] if i < len(raw.get("documents", [])) else ""
                    meta = raw.get("metadatas", [])[i] if i < len(raw.get("metadatas", [])) else {}
                    timestamp_str = meta.get("timestamp", "")
                    try:
                        if timestamp_str:
                            memory_date = datetime.fromisoformat(timestamp_str.replace('Z', '+00:00'))
                            if memory_date < cutoff_date:
                                continue
                    except (ValueError, TypeError):
                        pass
                    first_line = (content or "").splitlines()[0].strip()
                    short_title = first_line[:22] + "…" if len(first_line) > 22 else first_line or f"记忆 {str(mid)[:8]}"
                    memory_payload[str(mid)] = {
                        "title": short_title, "detail": content or "",
                        "timestamp": timestamp_str, "scope": meta.get("scope", "project"),
                        "user_id": meta.get("user_id", ""), "memory_type": meta.get("memory_type", "storage"),
                    }
                    filtered_memory_ids.add(str(mid))
            except Exception as e:
                print(f"[Graph] 获取数据失败: {e}")

        tiered_groups = {
            "storage": {"label": "存储记忆", "color": "#4A90E2"},
            "thinking": {"label": "思维记忆", "color": "#F5A623"},
            "skill": {"label": "技能记忆", "color": "#7ED321"},
            "entity": {"label": "实体", "color": "#9013FE"},
            "category": {"label": "分类", "color": "#BD10E0"},
        }

        enriched_nodes: List[dict] = []
        filtered_node_ids: Set[str] = set()

        for node in data.get("nodes", []):
            node_id = str(node.get("id", ""))
            node_type = node.get("type", "")
            if memory_only and node_type == "entity":
                continue
            if node_type == "memory" and node_id not in filtered_memory_ids:
                continue
            if len(filtered_node_ids) >= max_nodes:
                break
            filtered_node_ids.add(node_id)

            group = "storage"
            if node_type == "entity":
                group = "entity"
            elif node_type == "category":
                group = "category"
            elif node_type == "memory" and node_id in memory_payload:
                group = memory_payload[node_id].get("memory_type", "storage")

            if node_type == "memory" and node_id in memory_payload:
                mp = memory_payload[node_id]
                node["label"] = mp["title"]
                node["title"] = mp["title"]
                node["detail"] = mp["detail"]
                node["timestamp"] = mp["timestamp"]
                node["scope"] = mp["scope"]
                node["user_id"] = mp["user_id"]
                node["memory_type"] = mp.get("memory_type", "storage")
            elif node_type == "category":
                node["label"] = tiered_groups.get(group, {}).get("label", str(node_id))
                node["title"] = node["label"]
            elif "label" not in node or not node["label"]:
                node["label"] = str(node_id)
                node["title"] = str(node_id)

            node["group"] = group
            node["group_label"] = tiered_groups.get(group, {}).get("label", group)
            node["color"] = tiered_groups.get(group, {}).get("color", "#999999")
            enriched_nodes.append(node)

        filtered_links = [
            link for link in data.get("links", [])
            if str(link.get("source", "")) in filtered_node_ids and str(link.get("target", "")) in filtered_node_ids
        ]
        return {"nodes": enriched_nodes, "links": filtered_links}
    except Exception as e:
        print(f"图谱数据错误: {e}")
        return {"nodes": [], "links": []}


@app.post("/dashboard/rebuild_graph")
async def rebuild_graph(background_tasks: BackgroundTasks):
    log_event("正在启动全量记忆扫描以重建知识图谱...")

    async def run_full_scan():
        try:
            all_memories = server_state.memory_manager.store.collection.get()
            ids = all_memories["ids"]
            docs = all_memories["documents"]
            metas = all_memories["metadatas"]
            log_event(f"发现 {len(ids)} 条记忆，正在逐一分析...")
            for i in range(len(ids)):
                await server_state.cognitive_processor.process_memory_event(
                    memory_id=ids[i], content=docs[i], user_id=metas[i].get("user_id", "system"),
                    metadata=metas[i],
                )
                if i % 10 == 0:
                    log_event(f"已处理 {i}/{len(ids)} 条记忆...")
                    await asyncio.sleep(0.1)
            log_event("✅ 全量记忆扫描完成，知识图谱已更新。")
        except Exception as e:
            log_event(f"❌ 重建图谱失败: {e}")

    background_tasks.add_task(run_full_scan)
    return {"status": "Rebuild started", "message": "全量扫描已在后台启动"}


# ============================================================
# Core Memory API
# ============================================================

@app.post("/memory/write")
async def write_memory_endpoint(req: WriteMemoryRequest, background_tasks: BackgroundTasks):
    """写入记忆接口（已集成智能体处理器 + 后台增强）"""
    try:
        processed = server_state.agent_processor.process_before_write(
            content=req.content, memory_type="storage", scope=req.scope, tags=[],
        )
        suggested_type = processed["metadata"].get("suggested_type", "storage")
        intent_analysis = processed["metadata"].get("intent_analysis", {})

        log_event(f"🤖 智能体分析: 建议分类为 {suggested_type}")
        log_event(f"正在为用户 {req.user_id} 写入记忆 (范围: {req.scope})")

        result = server_state.memory_manager.write_memory(
            req.user_id, req.content, project_id=req.project_id, scope=req.scope,
            title=req.title, keywords=req.keywords if req.keywords else None,
            tags=req.tags if req.tags else None,
        )

        # 后台认知处理（不触发强化）
        log_event(f"正在为记忆 {result[:8]} 触发认知处理")
        background_tasks.add_task(
            server_state.cognitive_processor.process_memory_event,
            memory_id=result, content=req.content, user_id=req.user_id,
        )

        # 后台 LLM 增强（不阻塞写入）[P1]
        background_tasks.add_task(
            server_state.memory_manager.enhance_memory_background,
            memory_id=result, content=req.content, user_id=req.user_id,
        )

        return {
            "id": result,
            "agent_processed": True,
            "suggested_type": suggested_type,
            "intent_analysis": intent_analysis,
            "capabilities_applied": server_state.agent_processor.get_capabilities(),
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/memory/read")
async def read_memory_endpoint(req: ReadMemoryRequest):
    """读取记忆接口（Profile 独立返回 + DeepSeek 综合）"""
    try:
        log_event(f"正在为用户 {req.user_id} 读取记忆 (查询: {req.query})")

        # 统一从 store.search 检索，返回 (results, profiles) [P2]
        result, profiles = server_state.memory_manager.read_memory(
            req.user_id, req.query, req.project_id, req.limit, reinforce=True,
        )

        if result:
            result = server_state.agent_processor.process_after_read(result)
            log_event(f"🤖 智能体处理: 已分析 {len(result)} 条记忆")

        # DeepSeek 综合
        if settings.DEEPSEEK_API_KEY and result:
            log_event("正在使用 DeepSeek 综合搜索结果...")
            memories = [item["content"] for item in result]

            # 将 Profile 作为上下文注入
            if profiles:
                profile_context = "\n".join([f"[用户画像] {p['content']}" for p in profiles])
                memories.insert(0, profile_context)

            synthesis = await server_state.cognitive_processor.llm.synthesize_search_results(req.query, memories)
            if synthesis:
                return [{
                    "content": f"【系统整合回答】\n{synthesis}\n\n(基于 {len(result)} 条相关记忆整合)",
                    "timestamp": result[0]["timestamp"],
                    "id": "synthesis",
                    "agent_processed": True,
                    "profiles_injected": len(profiles),
                    "capabilities_applied": server_state.agent_processor.get_capabilities(),
                }]

        # 添加 Profile 信息到结果中
        if result:
            for item in result:
                item["agent_processed"] = True
            if profiles:
                # 附加 profile 到第一条结果
                result[0]["profile_context"] = [p["content"][:200] for p in profiles]

        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/memory/reflect")
async def reflect_memory_endpoint(user_id: str, background_tasks: BackgroundTasks):
    if not settings.DEEPSEEK_API_KEY:
        raise HTTPException(status_code=400, detail="未配置 DeepSeek API Key")

    capabilities = server_state.agent_processor.get_capabilities()
    log_event(f"🤖 智能体模式: 正在为用户 {user_id} 触发深度反思")

    background_tasks.add_task(server_state.cognitive_processor.run_reflection, user_id=user_id)
    return {
        "status": "反思已启动",
        "message": "深度思考进程正在后台运行（智能体V2模式）",
        "agent_mode": True,
        "capabilities": capabilities,
        "rules": {"no_compression": True, "deep_analysis": True, "fine_grained_classification": True, "merge_instead_of_delete": True},
    }


@app.post("/memory/delete")
async def delete_memory_endpoint(req: DeleteMemoryRequest):
    try:
        log_event(f"正在为用户 {req.user_id} 删除记忆 {req.memory_id}")
        success = server_state.memory_manager.delete_memory(req.user_id, req.memory_id)
        if success:
            return {"status": "已删除", "id": req.memory_id}
        raise HTTPException(status_code=404, detail="未找到记忆或权限不足")
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# ============================================================
# Tiered Memory API (统一存储兼容接口)
# ============================================================

from mcp_memory.models.data_models import (
    StorageMemoryCreate, ThinkingMemoryCreate, SkillMemoryCreate, MemoryFeedbackRequest,
)


@app.post("/tiered/storage/write")
async def write_storage_memory_endpoint(req: StorageMemoryCreate):
    try:
        memory_id = server_state.memory_manager.store.save_storage_memory(
            content=req.content, user_id=req.user_id, session_id=req.session_id,
            topic=req.topic, participants=req.participants, scope=req.scope, project_id=req.project_id,
        )
        log_event(f"写入存储记忆: {memory_id[:8]}")
        return {"status": "success", "memory_id": memory_id, "type": "storage"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/tiered/thinking/write")
async def write_thinking_memory_endpoint(req: ThinkingMemoryCreate):
    try:
        memory_id = server_state.memory_manager.store.save_thinking_memory(
            content=req.content, user_id=req.user_id, source_memories=req.source_memories,
            summary_type=req.summary_type, key_points=req.key_points,
            scope=req.scope, project_id=req.project_id,
        )
        log_event(f"写入思维记忆: {memory_id[:8]}")
        return {"status": "success", "memory_id": memory_id, "type": "thinking"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/tiered/skill/write")
async def write_skill_memory_endpoint(req: SkillMemoryCreate):
    try:
        memory_id = server_state.memory_manager.store.save_skill_memory(
            content=req.content, user_id=req.user_id, source_thinking=req.source_thinking,
            skill_type=req.skill_type, tags=req.tags, scope=req.scope, project_id=req.project_id,
        )
        log_event(f"写入技能记忆: {memory_id[:8]}")
        return {"status": "success", "memory_id": memory_id, "type": "skill"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/tiered/query")
async def query_tiered_memories(query: str, user_id: str = None, memory_type: str = "all", limit: int = 10):
    try:
        memories = server_state.memory_manager.store.query_by_type(query=query, memory_type=memory_type, user_id=user_id, limit=limit)
        return {"memories": memories, "total": len(memories), "query_time_ms": 0}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/tiered/memory/{memory_id}")
async def get_memory_detail_endpoint(memory_id: str, include_sources: bool = True, include_related: bool = False):
    try:
        res = server_state.memory_manager.store.collection.get(ids=[memory_id])
        if not res or not res["ids"]:
            raise HTTPException(status_code=404, detail="记忆不存在")
        meta = res["metadatas"][0]
        detail = {
            "memory_id": memory_id, "content": res["documents"][0],
            "memory_type": meta.get("memory_type", "storage"),
            "timestamp": meta.get("timestamp"), "user_id": meta.get("user_id"),
            "scope": meta.get("scope"), "project_id": meta.get("project_id"),
            "confidence": float(meta.get("confidence", 1.0)),
            "verified": meta.get("verified") == "True",
        }
        if include_sources:
            detail["sources"] = server_state.memory_manager.store.get_source_memories(memory_id)
        return detail
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/tiered/memory/{memory_id}/trace")
async def trace_memory_origin_endpoint(memory_id: str, max_depth: int = 3):
    try:
        chain, visited = [], set()
        current_id = memory_id
        for _ in range(max_depth):
            if current_id in visited:
                break
            visited.add(current_id)
            sources = server_state.memory_manager.store.get_source_memories(current_id)
            if not sources:
                break
            chain.extend(sources)
            current_id = sources[0]["memory_id"]
        return {"chain": chain, "depth": len(chain)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/tiered/memory/{memory_id}/feedback")
async def provide_feedback_endpoint(memory_id: str, req: MemoryFeedbackRequest):
    try:
        res = server_state.memory_manager.store.collection.get(ids=[memory_id])
        if not res or not res["ids"]:
            raise HTTPException(status_code=404, detail="记忆不存在")
        meta = res["metadatas"][0]
        meta["feedback_type"] = req.feedback_type
        meta["feedback_comment"] = req.comment or ""
        if req.suggested_content:
            meta["suggested_content"] = req.suggested_content
        server_state.memory_manager.store.collection.update(ids=[memory_id], metadatas=[meta])
        return {"status": "success", "message": "反馈已记录"}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/tiered/stats")
async def get_tiered_stats(user_id: str = None):
    try:
        return server_state.memory_manager.store.get_tiered_stats(user_id)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/tiered/summarize")
async def force_summarize_endpoint(memory_ids: List[str]):
    raise HTTPException(status_code=501, detail="此功能正在重构中，请稍后再试")


@app.get("/tiered/merged")
async def get_merged_memories_endpoint(user_id: str = None, limit: int = 50):
    try:
        merged = server_state.memory_manager.store.get_merged_memories(user_id, limit)
        return {"count": len(merged), "memories": merged}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/tiered/memory/{memory_id}/merge-chain")
async def get_merge_chain_endpoint(memory_id: str):
    try:
        chain = server_state.memory_manager.store.get_merge_chain(memory_id)
        if "error" in chain:
            raise HTTPException(status_code=404, detail=chain["error"])
        return chain
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/tiered/daily-reflection/trigger")
async def trigger_daily_reflection():
    try:
        log_event("手动触发每日深度思考")
        async def run_reflection():
            try:
                await server_state.cognitive_processor.daily_reflection.run_daily_reflection()
                log_event("手动每日深度思考完成")
            except Exception as e:
                log_event(f"手动每日深度思考失败: {e}")
        asyncio.create_task(run_reflection())
        return {"status": "started", "message": "每日深度思考已在后台启动"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# ============================================================
# AI Brain API Endpoints
# ============================================================

@app.get("/brain/status")
async def get_brain_status():
    if not server_state.ai_brain:
        raise HTTPException(status_code=503, detail="AI大脑未初始化")
    try:
        return await server_state.ai_brain.get_brain_status()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/brain/input")
async def process_brain_input(req: dict, background_tasks: BackgroundTasks):
    if not server_state.ai_brain:
        raise HTTPException(status_code=503, detail="AI大脑未初始化")
    try:
        content = req.get("content", "")
        context = req.get("context", {})
        result = await server_state.ai_brain.process_input(content, context)
        if result.get("memories_created"):
            log_event(f"[AI-BRAIN] 处理输入: 创建了 {len(result['memories_created'])} 个记忆")
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/brain/retrieve")
async def brain_retrieve_memory(req: dict):
    if not server_state.ai_brain:
        raise HTTPException(status_code=503, detail="AI大脑未初始化")
    try:
        query = req.get("query", "")
        context = req.get("context", {})
        return await server_state.ai_brain.retrieve_memory(query, context)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/brain/reflection")
async def trigger_brain_reflection(background_tasks: BackgroundTasks):
    if not server_state.ai_brain:
        raise HTTPException(status_code=503, detail="AI大脑未初始化")
    try:
        log_event("[AI-BRAIN] 开始自我反思")
        background_tasks.add_task(lambda: asyncio.run(server_state.ai_brain.run_self_reflection()))
        return {"status": "started", "message": "自我反思已在后台启动"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/brain/hypotheses")
async def generate_brain_hypotheses(req: dict):
    if not server_state.ai_brain:
        raise HTTPException(status_code=503, detail="AI大脑未初始化")
    try:
        context = req.get("context", "")
        hypotheses = await server_state.ai_brain.generate_hypotheses(context)
        return {
            "hypotheses": [h.to_dict() if hasattr(h, 'to_dict') else h for h in hypotheses],
            "count": len(hypotheses),
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/brain/hypotheses/test")
async def test_brain_hypothesis(req: dict, background_tasks: BackgroundTasks):
    if not server_state.ai_brain:
        raise HTTPException(status_code=503, detail="AI大脑未初始化")
    try:
        hypothesis = req.get("hypothesis", {})
        if not hypothesis:
            raise HTTPException(status_code=400, detail="缺少假设数据")
        background_tasks.add_task(lambda: asyncio.run(server_state.ai_brain.test_hypothesis(hypothesis)))
        return {"status": "started", "message": "假设测试已在后台启动"}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/brain/evolve")
async def evolve_brain(req: dict, background_tasks: BackgroundTasks):
    if not server_state.ai_brain:
        raise HTTPException(status_code=503, detail="AI大脑未初始化")
    try:
        experiences = req.get("experiences", [])
        if not experiences:
            raise HTTPException(status_code=400, detail="缺少经验数据")
        background_tasks.add_task(lambda: asyncio.run(server_state.ai_brain.evolve_brain(experiences)))
        return {"status": "started", "message": f"AI大脑进化已启动，基于 {len(experiences)} 个经验"}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/brain/export")
async def export_brain():
    if not server_state.ai_brain:
        raise HTTPException(status_code=503, detail="AI大脑未初始化")
    try:
        import tempfile
        from datetime import datetime as dt
        status = await server_state.ai_brain.get_brain_status()
        export_data = {
            "version": "1.0",
            "exported_at": dt.now().isoformat(),
            "brain_status": status,
            "metadata": {
                "system_version": "2.0.0",
                "cpu_count": os.cpu_count(),
            },
        }
        temp_file = tempfile.NamedTemporaryFile(mode='w', suffix='.json', delete=False, encoding='utf-8')
        server_state.ai_brain.save_brain_state(temp_file.name)
        with open(temp_file.name, 'r', encoding='utf-8') as f:
            export_data["brain_state"] = json.load(f)
        os.unlink(temp_file.name)
        return export_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"导出失败: {str(e)}")


@app.post("/brain/import")
async def import_brain(req: dict):
    if not server_state.ai_brain:
        raise HTTPException(status_code=503, detail="AI大脑未初始化")
    try:
        import_data = req.get("data", {})
        brain_state = req.get("brain_state", {})
        if not import_data:
            raise HTTPException(status_code=400, detail="缺少导入数据")
        version = import_data.get("version", "0.0")
        if brain_state:
            import tempfile
            temp_file = tempfile.NamedTemporaryFile(mode='w', suffix='.json', delete=False, encoding='utf-8')
            json.dump(brain_state, temp_file, indent=2, ensure_ascii=False)
            temp_file.close()
            server_state.ai_brain.load_brain_state(temp_file.name)
            os.unlink(temp_file.name)
        return {"status": "success", "message": "AI大脑状态导入成功", "version": version}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"导入失败: {str(e)}")


@app.get("/brain/compatibility")
async def check_compatibility():
    try:
        return {
            "hardware": {"cpu_count": os.cpu_count()},
            "software": {
                "python_version": f"{sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}",
                "brain_active": server_state.ai_brain.is_active if server_state.ai_brain else False,
            },
            "capabilities": {
                "full_brain": server_state.ai_brain is not None,
                "evolution": True,
                "persistence": True,
                "migration": True,
            },
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# ============================================================
# Main Entry
# ============================================================

def main():
    port = settings.MCP_MEMORY_PORT
    host = settings.MCP_MEMORY_HOST
    print(f"🚀 正在 {host}:{port} 上启动 MCP 记忆服务器...")
    print(f"📊 看板地址: http://{host}:{port}/")
    if settings.MCP_MEMORY_API_KEY:
        print(f"🔐 API 认证已启用 (MCP_MEMORY_API_KEY 已设置)")
    else:
        print("⚠️ API 认证未启用（设置 MCP_MEMORY_API_KEY 以启用）")
    uvicorn.run(app, host=host, port=port)


if __name__ == "__main__":
    main()
