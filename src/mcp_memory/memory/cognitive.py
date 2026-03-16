"""
认知处理器：负责后台的记忆总结、分类和技能生成

修复记录:
- [P0] periodic_scan_once: 获取所有 ID 后过滤未处理的，不再永远只扫前50条
- [P1] 调用 read_memory/search 时传 reinforce=False 避免后台扫描触发强化
- [P2] Profile 独立处理
- [P3] 细化异常处理
"""

import asyncio
from typing import List, Optional, Callable, Awaitable
from datetime import datetime
from mcp_memory.llm.facade import llm_facade, LLMFacade
from mcp_memory.memory.manager import MemoryManager
from mcp_memory.memory.daily_reflection import DailyReflectionScheduler
from mcp_memory.core.config import settings


class CognitiveProcessor:
    """
    认知处理器：负责后台的记忆总结、分类和技能生成
    使用 LLMFacade 支持多模型自动切换
    """

    def __init__(self, memory_manager: MemoryManager) -> None:
        self.memory_manager = memory_manager
        self.llm: LLMFacade = llm_facade
        self.is_running = False
        self.last_scan_time: Optional[datetime] = None
        self.last_reflection_time: Optional[datetime] = None
        self.total_scanned = 0
        self.last_error: Optional[str] = None
        self.last_scan_processed = 0
        self.last_reflection_note = ""
        self.log_callback: Optional[Callable] = None

        # 每日深度思考调度器
        self.daily_reflection = DailyReflectionScheduler(memory_manager, llm_facade)

    async def initialize(self) -> None:
        """初始化 LLM 客户端和每日深度思考调度器"""
        await self.llm.initialize()
        self.daily_reflection.set_logger(self.log_callback)
        await self.daily_reflection.start()

    def set_logger(self, logger: Optional[Callable]) -> None:
        self.log_callback = logger

    async def _emit(self, message: str) -> None:
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
        router_status = self.llm.get_status()
        preferred = router_status.get("preferred_provider", "unknown")
        available = router_status.get("available_providers", [])
        daily_status = self.daily_reflection.get_status()

        return {
            "running": self.is_running,
            "last_scan_time": self.last_scan_time.isoformat() if self.last_scan_time else None,
            "last_reflection_time": self.last_reflection_time.isoformat() if self.last_reflection_time else None,
            "total_scanned": self.total_scanned,
            "last_scan_processed": self.last_scan_processed,
            "last_error": self.last_error,
            "last_reflection_note": self.last_reflection_note,
            "llm_enabled": len(available) > 0,
            "preferred_provider": preferred,
            "available_providers": available,
            "llm_status": router_status,
            "daily_reflection": daily_status,
        }

    async def periodic_scan_once(self, batch_size: Optional[int] = None) -> int:
        """
        周期扫描未处理的记忆

        [P0 修复] 不再使用 collection.get(limit=50) 获取前50条。
        现在获取所有 ID，过滤 cognitive_processed != True 的记忆进行处理。
        """
        limit = batch_size or settings.MCP_EVOLUTION_SCAN_BATCH_SIZE
        await self._emit(f"[EVOLUTION] 开始周期扫描，批量={limit}")

        try:
            all_data = self.memory_manager.store.collection.get()
        except Exception as e:
            self.last_error = f"获取记忆列表失败: {e}"
            await self._emit(f"[EVOLUTION] {self.last_error}")
            return 0

        all_ids = all_data.get("ids", [])
        all_docs = all_data.get("documents", [])
        all_metas = all_data.get("metadatas", [])

        # 过滤出未处理的记忆
        unprocessed_indices = []
        for i in range(len(all_ids)):
            meta = all_metas[i] if i < len(all_metas) else {}
            if not meta.get("cognitive_processed", False):
                unprocessed_indices.append(i)

        if not unprocessed_indices:
            await self._emit("[EVOLUTION] 所有记忆均已处理，跳过扫描")
            return 0

        await self._emit(f"[EVOLUTION] 发现 {len(unprocessed_indices)} 条未处理记忆（总计 {len(all_ids)} 条）")

        # 分批处理
        processed = 0
        skipped = 0
        batch_indices = unprocessed_indices[:limit]

        for idx in batch_indices:
            try:
                await self.process_memory_event(
                    memory_id=all_ids[idx],
                    content=all_docs[idx] if idx < len(all_docs) else "",
                    user_id=all_metas[idx].get("user_id", settings.MCP_EVOLUTION_REFLECTION_USER_ID) if idx < len(all_metas) else "",
                    metadata=all_metas[idx] if idx < len(all_metas) else None,
                )
                processed += 1
            except Exception as e:
                self.last_error = f"扫描单条记忆失败: {e}"
                await self._emit(f"[EVOLUTION] 扫描异常: {e}")
                skipped += 1

        self.last_scan_time = datetime.now()
        self.last_scan_processed = processed
        self.total_scanned += processed

        remaining = len(unprocessed_indices) - limit
        note = f"处理={processed}，跳过={skipped}"
        if remaining > 0:
            note += f"，剩余 {remaining} 条待下次扫描"
        await self._emit(f"[EVOLUTION] 周期扫描结束，{note}")
        return processed

    async def process_memory_event(
        self,
        memory_id: str,
        content: str,
        user_id: str,
        metadata: Optional[dict] = None,
    ) -> None:
        """处理单条记忆写入事件 (Hook)"""
        await self._emit(f"[COGNITIVE] 开始分析记忆: {memory_id[:8]}")

        if metadata and metadata.get("cognitive_processed", False):
            await self._emit(f"[COGNITIVE] 记忆已处理过，跳过: {memory_id[:8]}")
            return

        has_llm = len(settings.providers) > 0

        # 分类
        category = "Unknown"
        if has_llm:
            await self._emit("[LLM] 正在进行分类...")
            category = await self.llm.classify_memory(content) or "Unknown"
            await self._emit(f"[LLM] 分类完成: {category}")
        else:
            if any(kw in content.lower() for kw in ["config", "install", "pip", "setup"]):
                category = "Config"
            elif any(kw in content.lower() for kw in ["def ", "class ", "import ", "const ", "function"]):
                category = "Coding"
            await self._emit(f"[COGNITIVE] 启发式分类: {category}")

        # 实体提取
        entities: List[str] = []
        if has_llm:
            await self._emit("[LLM] 正在抽取实体...")
            entities = await self.llm.extract_entities(content)
            await self._emit(f"[LLM] 实体抽取完成，数量={len(entities)}")

        if not entities:
            entities = self.memory_manager.store._fallback_extract_entities(content)
            if entities:
                await self._emit(f"[COGNITIVE] Fallback 实体抽取: {len(entities)} 个")

        if entities:
            self.memory_manager.store.add_entities_to_graph(memory_id, entities, category=category)
            self.memory_manager.store._save_graph()
            await self._emit(f"[GRAPH] 已写入图谱节点关系: category={category}, entities={len(entities)}")

        # 生成结构化认知总结（Coding/Config/Workflow 时写回）
        if (settings.GLM_API_KEY or settings.DEEPSEEK_API_KEY) and category in ["Coding", "Config", "Workflow"]:
            await self._emit("[LLM] 正在生成结构化认知总结...")
            structured_summary = await self._generate_structured_memory(content, category, entities)

            if structured_summary and self._is_quality_memory(structured_summary):
                await self._emit(f"[LLM] 结构化总结生成成功: {structured_summary.get('title', '无标题')}")
                
                summary_val = structured_summary.get('summary')
                if isinstance(summary_val, list):
                    summary_val = ' '.join(str(s) for s in summary_val)
                elif summary_val is None:
                    summary_val = ''
                
                self.memory_manager.write_memory(
                    user_id=user_id,
                    content=structured_summary.get('content', ''),
                    title=structured_summary.get('title'),
                    description=structured_summary.get('description'),
                    summary=summary_val,
                    content_type=self._map_category_to_content_type(category),
                    keywords=structured_summary.get('keywords', []),
                    tags=[category] + (entities[:3] if entities else []),
                    scope="global" if category == "Config" else "project",
                )
                await self._emit("[COGNITIVE] 结构化认知总结已写回记忆库")
            else:
                await self._emit("[COGNITIVE] 生成的总结质量不足，跳过写入")

        # 标记已处理
        self.memory_manager.store.update_memory_metadata(
            memory_id=memory_id,
            metadata={
                "cognitive_processed": True,
                "cognitive_processed_at": datetime.now().isoformat(),
                "cognitive_category": category,
            }
        )
        await self._emit(f"[COGNITIVE] 记忆分析完成并标记: {memory_id[:8]}")

    async def run_reflection(self, user_id: str) -> None:
        """运行深度反思与优化"""
        await self._emit("[EVOLUTION] 开始运行深度反思")

        try:
            all_data = self.memory_manager.store.collection.get(limit=50)
        except Exception as e:
            self.last_error = f"获取记忆失败: {e}"
            return

        docs = all_data.get("documents", [])
        if not docs:
            self.last_reflection_time = datetime.now()
            self.last_reflection_note = "无可反思记忆"
            await self._emit("[EVOLUTION] 深度反思跳过：无可反思记忆")
            return

        if settings.GLM_API_KEY or settings.DEEPSEEK_API_KEY:
            await self._emit("[LLM] 正在执行深度反思推理...")
            optimized = await self.llm.optimize_memory_storage(docs)
            if optimized:
                self.memory_manager.write_memory(
                    user_id=user_id,
                    content=f"【深度反思】记忆库优化建议：\n{optimized}",
                    scope="project",
                )
                self.last_reflection_note = "已完成 LLM 深度反思"
                await self._emit("[LLM] 深度反思完成并写回优化建议")
        else:
            unique_docs = list(dict.fromkeys(docs))
            duplicate_count = len(docs) - len(unique_docs)
            top_entities: dict = {}
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
                scope="project",
            )
            self.last_reflection_note = "已完成无 LLM 启发式反思"
            await self._emit("[EVOLUTION] 已完成启发式反思并写回结果")

        self.last_reflection_time = datetime.now()
        await self._emit("[EVOLUTION] 深度反思流程结束")

    async def _generate_structured_memory(self, content: str, category: str, entities: List[str]) -> Optional[dict]:
        """生成结构化记忆"""
        try:
            import json
            import re

            target_language = settings.MCP_MEMORY_LANGUAGE or "简体中文"

            prompt = f"""
请将以下内容整理为一份结构完整、信息丰富的记忆文档。

【输入内容】
{content[:2000]}

【要求】
1. 标题：简洁明了（20-50字）
2. 描述：简要说明（50-100字）
3. 内容：完整详细，保留所有关键信息
4. 总结：提炼核心要点（3-5点）
5. 关键词：提取3-5个

【语言】必须使用{target_language}，禁止中英文混杂。

【输出格式】JSON（必须返回绝对的JSON对象，不要 markdown 标记）：
{"title": "标题", "description": "摘要描述", "content": "详细内容", "summary": "这是一段文字总结，不要使用数组格式返回，必须是纯字符串", "keywords": ["k1", "k2"]}
"""
            response = await self.llm.chat_completion(
                messages=[{"role": "user", "content": prompt}],
                temperature=0.3,
                max_tokens=2000,
            )
            if not response:
                return None

            json_match = re.search(r'\{[\s\S]*\}', response)
            if not json_match:
                return None

            structured = json.loads(json_match.group())
            required = ['title', 'content']
            if all(f in structured and structured[f] for f in required):
                return structured
            return None
        except Exception as e:
            await self._emit(f"[COGNITIVE] 生成结构化记忆失败: {e}")
            return None

    def _is_quality_memory(self, structured: dict) -> bool:
        """检查记忆质量"""
        try:
            title = structured.get('title', '')
            if len(title) < 10:
                return False
            content = structured.get('content', '')
            if len(content) < 100:
                return False
            keywords = structured.get('keywords', [])
            if not keywords or len(keywords) < 2:
                return False

            # 检查是否只是代码片段
            code_lines = sum(1 for line in content.split('\n')
                           if line.strip().startswith(('def ', 'class ', 'import ', 'const ', 'let ', 'var ', '#', '//')))
            total_lines = len([l for l in content.split('\n') if l.strip()])
            if total_lines > 0 and code_lines / total_lines > 0.7:
                return False
            return True
        except Exception:
            return False

    def _map_category_to_content_type(self, category: str) -> str:
        mapping = {"Coding": "code", "Config": "config", "Workflow": "workflow", "Personal": "note", "Unknown": "note"}
        return mapping.get(category, "note")

    async def close(self) -> None:
        """关闭资源"""
        await self.llm.close()
