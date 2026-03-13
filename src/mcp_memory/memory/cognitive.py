import asyncio
from typing import List
from datetime import datetime
from mcp_memory.llm.deepseek import DeepSeekClient
from mcp_memory.memory.manager import MemoryManager
from mcp_memory.core.config import settings

class CognitiveProcessor:
    """
    认知处理器：负责后台的记忆总结、分类和技能生成
    """
    def __init__(self, memory_manager: MemoryManager):
        self.memory_manager = memory_manager
        self.llm = DeepSeekClient()
        self.processing_queue = asyncio.Queue()
        self.is_running = False
        self.last_scan_time = None
        self.last_reflection_time = None
        self.total_scanned = 0
        self.last_error = None
        self.last_scan_processed = 0
        self.last_reflection_note = ""
        self.log_callback = None

    def set_logger(self, logger):
        self.log_callback = logger

    async def _emit(self, message: str):
        print(message)
        if not self.log_callback:
            return
        try:
            result = self.log_callback(message)
            if asyncio.iscoroutine(result):
                await result
        except Exception:
            pass

    def get_status(self) -> dict:
        return {
            "running": self.is_running,
            "last_scan_time": self.last_scan_time.isoformat() if self.last_scan_time else None,
            "last_reflection_time": self.last_reflection_time.isoformat() if self.last_reflection_time else None,
            "total_scanned": self.total_scanned,
            "last_scan_processed": self.last_scan_processed,
            "last_error": self.last_error,
            "last_reflection_note": self.last_reflection_note,
            "deepseek_enabled": bool(settings.DEEPSEEK_API_KEY)
        }

    async def periodic_scan_once(self, batch_size: int = None) -> int:
        limit = batch_size or settings.MCP_EVOLUTION_SCAN_BATCH_SIZE
        await self._emit(f"[EVOLUTION] 开始周期扫描，批量={limit}")
        all_memories = self.memory_manager.store.collection.get(limit=limit)
        ids = all_memories.get("ids", [])
        docs = all_memories.get("documents", [])
        metas = all_memories.get("metadatas", [])
        processed = 0

        for i in range(len(ids)):
            try:
                await self.process_memory_event(
                    memory_id=ids[i],
                    content=docs[i],
                    user_id=metas[i].get("user_id", settings.MCP_EVOLUTION_REFLECTION_USER_ID)
                )
                processed += 1
            except Exception as e:
                self.last_error = f"扫描单条记忆失败: {e}"
                await self._emit(f"[EVOLUTION] 扫描异常: {e}")

        self.last_scan_time = datetime.now()
        self.last_scan_processed = processed
        self.total_scanned += processed
        await self._emit(f"[EVOLUTION] 周期扫描结束，处理={processed}")
        return processed

    async def process_memory_event(self, memory_id: str, content: str, user_id: str):
        """
        处理单条记忆写入事件 (Hook)
        """
        await self._emit(f"[COGNITIVE] 开始分析记忆: {memory_id[:8]}")
        
        # 1. 尝试使用 LLM 进行分类，若无则设为 Unknown
        category = "Unknown"
        if settings.DEEPSEEK_API_KEY:
            await self._emit("[DEEPSEEK] 正在进行分类...")
            category = await self.llm.classify_memory(content) or "Unknown"
            await self._emit(f"[DEEPSEEK] 分类完成: {category}")
        else:
            # 简单启发式分类
            if any(kw in content.lower() for kw in ["config", "install", "pip", "setup"]):
                category = "Config"
            elif any(kw in content.lower() for kw in ["def ", "class ", "import ", "const ", "function"]):
                category = "Coding"
            await self._emit(f"[COGNITIVE] 启发式分类: {category}")

        # 2. 实体提取
        entities = []
        if settings.DEEPSEEK_API_KEY:
            await self._emit("[DEEPSEEK] 正在抽取实体...")
            entities = await self.llm.extract_entities(content)
            await self._emit(f"[DEEPSEEK] 实体抽取完成，数量={len(entities)}")
        
        # 如果 LLM 提取失败或未开启，使用 Fallback 逻辑
        if not entities:
            entities = self.memory_manager.store._fallback_extract_entities(content)
            if entities:
                await self._emit(f"[COGNITIVE] Fallback 实体抽取: {len(entities)} 个")

        if entities:
            # 将实体和分类存入图谱库以构建技能树
            self.memory_manager.store.add_entities_to_graph(memory_id, entities, category=category)
            await self._emit(f"[GRAPH] 已写入图谱节点关系: category={category}, entities={len(entities)}")
        
        # 3. 技能总结 (仅在有 LLM 时进行)
        if settings.DEEPSEEK_API_KEY and category in ["Coding", "Config"]:
            await self._emit("[DEEPSEEK] 正在生成认知总结...")
            summary = await self.llm.summarize_memories([content])
            if summary:
                await self._emit(f"[DEEPSEEK] 总结生成成功: {summary[:36]}...")
                self.memory_manager.write_memory(
                    user_id=user_id,
                    content=f"【认知总结】{summary}",
                    scope="global" if category == "Config" else "project"
                )
                await self._emit("[COGNITIVE] 认知总结已写回记忆库")
        await self._emit(f"[COGNITIVE] 记忆分析完成: {memory_id[:8]}")

    async def run_reflection(self, user_id: str):
        """
        [记忆垃圾回收] 运行深度反思与优化
        """
        await self._emit("[EVOLUTION] 开始运行深度反思")
        memories = self.memory_manager.store.collection.get(limit=50)
        docs = memories.get("documents", [])

        if not docs:
            self.last_reflection_time = datetime.now()
            self.last_reflection_note = "无可反思记忆"
            await self._emit("[EVOLUTION] 深度反思跳过：无可反思记忆")
            return

        if settings.DEEPSEEK_API_KEY:
            await self._emit("[DEEPSEEK] 正在执行深度反思推理...")
            optimized = await self.llm.optimize_memory_storage(docs)
            if optimized:
                self.memory_manager.write_memory(
                    user_id=user_id,
                    content=f"【深度反思】记忆库优化建议：\n{optimized}",
                    scope="project"
                )
                self.last_reflection_note = "已完成 DeepSeek 深度反思"
                await self._emit("[DEEPSEEK] 深度反思完成并写回优化建议")
        else:
            unique_docs = list(dict.fromkeys(docs))
            duplicate_count = len(docs) - len(unique_docs)
            top_entities = {}
            for text in unique_docs[:30]:
                for entity in self.memory_manager.store._fallback_extract_entities(text):
                    top_entities[entity] = top_entities.get(entity, 0) + 1
            top_items = sorted(top_entities.items(), key=lambda x: x[1], reverse=True)[:10]
            entity_text = "、".join([f"{k}({v})" for k, v in top_items]) if top_items else "无"
            fallback_summary = (
                f"【深度反思-启发式】\n"
                f"- 当前样本总数: {len(docs)}\n"
                f"- 去重后样本数: {len(unique_docs)}\n"
                f"- 发现重复数: {duplicate_count}\n"
                f"- 高频知识实体: {entity_text}"
            )
            self.memory_manager.write_memory(
                user_id=user_id,
                content=fallback_summary,
                scope="project"
            )
            self.last_reflection_note = "已完成无 DeepSeek 启发式反思"
            await self._emit("[EVOLUTION] 已完成启发式反思并写回结果")

        self.last_reflection_time = datetime.now()
        await self._emit("[EVOLUTION] 深度反思流程结束")
