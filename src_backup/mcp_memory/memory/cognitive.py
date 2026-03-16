import asyncio
from typing import List
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
    def __init__(self, memory_manager: MemoryManager):
        self.memory_manager = memory_manager
        self.llm: LLMFacade = llm_facade
        self.processing_queue = asyncio.Queue()
        self.is_running = False
        self.last_scan_time = None
        self.last_reflection_time = None
        self.total_scanned = 0
        self.last_error = None
        self.last_scan_processed = 0
        self.last_reflection_note = ""
        self.log_callback = None
        
        # 初始化每日深度思考调度器
        self.daily_reflection = DailyReflectionScheduler(memory_manager, llm_facade)

    async def initialize(self):
        """初始化 LLM 客户端和每日深度思考调度器"""
        await self.llm.initialize()
        
        # 启动每日深度思考调度器
        self.daily_reflection.set_logger(self.log_callback)
        await self.daily_reflection.start()

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
        router_status = self.llm.get_status()
        # 获取首选提供商名称
        preferred = router_status.get("preferred_provider", "unknown")
        available = router_status.get("available_providers", [])
        
        # 获取每日深度思考状态
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
            "daily_reflection": daily_status  # 每日深度思考状态
        }

    async def periodic_scan_once(self, batch_size: int = None) -> int:
        limit = batch_size or settings.MCP_EVOLUTION_SCAN_BATCH_SIZE
        await self._emit(f"[EVOLUTION] 开始周期扫描，批量={limit}")
        all_memories = self.memory_manager.store.collection.get(limit=limit)
        ids = all_memories.get("ids", [])
        docs = all_memories.get("documents", [])
        metas = all_memories.get("metadatas", [])
        processed = 0
        skipped = 0

        for i in range(len(ids)):
            try:
                # 检查记忆是否已经被处理过
                metadata = metas[i] if i < len(metas) else {}
                if metadata.get("cognitive_processed", False):
                    skipped += 1
                    continue
                
                await self.process_memory_event(
                    memory_id=ids[i],
                    content=docs[i],
                    user_id=metadata.get("user_id", settings.MCP_EVOLUTION_REFLECTION_USER_ID),
                    metadata=metadata
                )
                processed += 1
            except Exception as e:
                self.last_error = f"扫描单条记忆失败: {e}"
                await self._emit(f"[EVOLUTION] 扫描异常: {e}")

        self.last_scan_time = datetime.now()
        self.last_scan_processed = processed
        self.total_scanned += processed
        await self._emit(f"[EVOLUTION] 周期扫描结束，处理={processed}，跳过={skipped}")
        return processed

    async def process_memory_event(self, memory_id: str, content: str, user_id: str, metadata: dict = None):
        """
        处理单条记忆写入事件 (Hook)
        添加标记避免重复处理
        """
        await self._emit(f"[COGNITIVE] 开始分析记忆: {memory_id[:8]}")
        
        # 检查是否已经被处理过
        if metadata and metadata.get("cognitive_processed", False):
            await self._emit(f"[COGNITIVE] 记忆已处理过，跳过: {memory_id[:8]}")
            return

        has_llm = len(settings.providers) > 0

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

        entities = []
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
            await self._emit(f"[GRAPH] 已写入图谱节点关系: category={category}, entities={len(entities)}")

        # 生成结构化的认知总结（避免碎片化的记忆）
        if (settings.GLM_API_KEY or settings.DEEPSEEK_API_KEY) and category in ["Coding", "Config", "Workflow"]:
            await self._emit("[LLM] 正在生成结构化认知总结...")
            
            # 使用结构化提示词生成完整的记忆
            structured_summary = await self._generate_structured_memory(content, category, entities)
            
            if structured_summary and self._is_quality_memory(structured_summary):
                await self._emit(f"[LLM] 结构化总结生成成功: {structured_summary.get('title', '无标题')}")
                
                # 写入结构完整的记忆
                self.memory_manager.write_memory(
                    user_id=user_id,
                    content=structured_summary.get('content', ''),
                    title=structured_summary.get('title'),
                    description=structured_summary.get('description'),
                    summary=structured_summary.get('summary'),
                    content_type=self._map_category_to_content_type(category),
                    keywords=structured_summary.get('keywords', []),
                    tags=[category] + (entities[:3] if entities else []),
                    scope="global" if category == "Config" else "project"
                )
                await self._emit("[COGNITIVE] 结构化认知总结已写回记忆库")
            else:
                await self._emit("[COGNITIVE] 生成的总结质量不足，跳过写入")
        
        # 标记记忆为已处理
        self.memory_manager.store.update_memory_metadata(
            memory_id=memory_id,
            metadata={
                "cognitive_processed": True,
                "cognitive_processed_at": datetime.now().isoformat(),
                "cognitive_category": category
            }
        )
        await self._emit(f"[COGNITIVE] 记忆分析完成并标记: {memory_id[:8]}")

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

        if settings.GLM_API_KEY or settings.DEEPSEEK_API_KEY:
            await self._emit("[LLM] 正在执行深度反思推理...")
            optimized = await self.llm.optimize_memory_storage(docs)
            if optimized:
                self.memory_manager.write_memory(
                    user_id=user_id,
                    content=f"【深度反思】记忆库优化建议：\n{optimized}",
                    scope="project"
                )
                self.last_reflection_note = "已完成 LLM 深度反思"
                await self._emit("[LLM] 深度反思完成并写回优化建议")
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
            self.last_reflection_note = "已完成无 LLM 启发式反思"
            await self._emit("[EVOLUTION] 已完成启发式反思并写回结果")

        self.last_reflection_time = datetime.now()
        await self._emit("[EVOLUTION] 深度反思流程结束")

    async def _generate_structured_memory(self, content: str, category: str, entities: list) -> dict:
        """
        生成结构化的记忆（避免碎片化）
        
        返回结构：
        {
            "title": "记忆标题",
            "description": "任务描述",
            "content": "完整内容",
            "summary": "任务总结",
            "keywords": ["关键词1", "关键词2"]
        }
        """
        try:
            # 构建结构化提示词
            target_language = settings.MCP_MEMORY_LANGUAGE or "简体中文"
            
            prompt = f"""
请将以下内容整理为一份结构完整、信息丰富的记忆文档。

【输入内容】
{content[:2000]}

【要求】
1. 标题：简洁明了，概括核心内容（20-50字）
2. 描述：简要说明这是什么任务/知识（50-100字）
3. 内容：完整详细的内容，保留所有关键信息
4. 总结：提炼核心要点和行动项（3-5点）
5. 关键词：提取3-5个关键词便于检索

【语言要求】
- 必须使用{target_language}
- 禁止中英文混杂
- 代码和技术术语保持原样

【输出格式】
请严格按照以下JSON格式输出（不要包含markdown标记）：
{{
    "title": "记忆标题",
    "description": "任务描述",
    "content": "完整内容",
    "summary": "任务总结",
    "keywords": ["关键词1", "关键词2", "关键词3"]
}}
"""
            
            # 调用LLM生成结构化内容
            response = await self.llm.chat_completion(
                messages=[{"role": "user", "content": prompt}],
                temperature=0.3,
                max_tokens=2000
            )
            
            if not response:
                return None
            
            # 解析JSON响应
            import json
            import re
            
            # 尝试提取JSON部分
            json_match = re.search(r'\{[\s\S]*\}', response)
            if json_match:
                json_str = json_match.group()
                structured = json.loads(json_str)
                
                # 验证必要字段
                required_fields = ['title', 'content']
                if all(field in structured and structured[field] for field in required_fields):
                    return structured
                else:
                    await self._emit("[COGNITIVE] 结构化记忆缺少必要字段")
                    return None
            else:
                await self._emit("[COGNITIVE] 无法解析结构化记忆")
                return None
                
        except Exception as e:
            await self._emit(f"[COGNITIVE] 生成结构化记忆失败: {e}")
            return None

    def _is_quality_memory(self, structured: dict) -> bool:
        """
        检查记忆质量，避免碎片化和低质量内容
        
        质量标准：
        1. 标题长度 >= 10字符
        2. 内容长度 >= 100字符
        3. 必须有关键词
        4. 不能是纯代码片段（需要有解释）
        """
        try:
            # 检查标题
            title = structured.get('title', '')
            if len(title) < 10:
                print(f"[COGNITIVE] 质量检查失败: 标题太短 ({len(title)}字符)")
                return False
            
            # 检查内容
            content = structured.get('content', '')
            if len(content) < 100:
                print(f"[COGNITIVE] 质量检查失败: 内容太短 ({len(content)}字符)")
                return False
            
            # 检查关键词
            keywords = structured.get('keywords', [])
            if not keywords or len(keywords) < 2:
                print(f"[COGNITIVE] 质量检查失败: 关键词不足 ({len(keywords)}个)")
                return False
            
            # 检查是否只是代码片段（没有解释）
            code_lines = sum(1 for line in content.split('\n') 
                           if line.strip().startswith(('def ', 'class ', 'import ', 'const ', 'let ', 'var ', '#', '//')))
            total_lines = len([l for l in content.split('\n') if l.strip()])
            
            # 如果超过70%是代码行，认为是纯代码片段
            if total_lines > 0 and code_lines / total_lines > 0.7:
                print(f"[COGNITIVE] 质量检查失败: 纯代码片段 ({code_lines}/{total_lines})")
                return False
            
            print(f"[COGNITIVE] 质量检查通过: 标题{len(title)}字, 内容{len(content)}字, 关键词{len(keywords)}个")
            return True
            
        except Exception as e:
            print(f"[COGNITIVE] 质量检查失败: {e}")
            return False

    def _map_category_to_content_type(self, category: str) -> str:
        """将分类映射到内容类型"""
        mapping = {
            "Coding": "code",
            "Config": "config",
            "Workflow": "workflow",
            "Personal": "note",
            "Unknown": "note"
        }
        return mapping.get(category, "note")

    async def close(self):
        """关闭资源"""
        await self.llm.close()
