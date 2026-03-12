import asyncio
from typing import List
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

    async def start_background_loop(self):
        """
        启动后台处理循环
        """
        self.is_running = True
        print("🧠 Cognitive Processor started...")
        while self.is_running:
            try:
                # 简单的批处理逻辑：每隔一段时间检查是否有新记忆需要处理
                # 实际生产中可能需要更复杂的队列或状态标记
                await asyncio.sleep(60) # 每分钟检查一次
                
                if settings.DEEPSEEK_API_KEY:
                    await self._process_recent_memories()
            except Exception as e:
                print(f"Error in cognitive loop: {e}")
                await asyncio.sleep(60)

    async def _process_recent_memories(self):
        """
        处理最近的记忆：
        1. 获取最近 N 条未分类/未总结的记忆 (简化起见，这里先获取最近写入的)
        2. 调用 LLM 进行分类和总结
        3. 将总结作为新的“Insight”记忆存回
        """
        # 这里只是一个简单的 POC 实现
        # 理想情况下，数据库应该有 processed_flag
        
        # 模拟：获取最近 5 条记忆进行总结
        # 注意：这里直接调用底层 store 的 search 可能会比较慢，且没有精确的时间过滤
        # 为了演示，我们假设只处理 Project 范围的
        recent_memories = self.memory_manager.read_memory(
            user_id="system_cognitive", # 伪造一个系统用户ID用于检索，或者需要一个 admin 接口
            query="", # 空查询返回最近的？目前 read_memory 需要 query
            limit=5
        )
        
        # 由于 read_memory 现在的实现是基于 vector search 的，传空 query 可能效果不好
        # 我们暂时跳过自动批量总结，而是提供一个手动触发或基于事件触发的接口
        pass

    async def process_memory_event(self, memory_id: str, content: str, user_id: str):
        """
        处理单条记忆写入事件 (Hook)
        """
        if not settings.DEEPSEEK_API_KEY:
            return

        print(f"🧠 Analyzing memory: {memory_id[:8]}...")
        
        # 1. 实体提取 (Lightweight Knowledge Graph)
        entities = await self.llm.extract_entities(content)
        if entities:
            print(f"   Entities: {entities}")
            # TODO: 将实体存入 Metadata 或独立的 Graph Store
            # self.memory_manager.store.update_metadata(memory_id, {"entities": entities})

        # 2. 分类
        category = await self.llm.classify_memory(content)
        if category:
            print(f"   Category: {category}")
            # TODO: 更新该记忆的 metadata (需要 MemoryStore 支持 update_metadata)
            # self.memory_manager.store.update_metadata(memory_id, {"category": category})
        
        # 3. 技能提取 (如果是 Coding/Config 类)
        if category in ["Coding", "Config"]:
            summary = await self.llm.summarize_memories([content])
            if summary:
                print(f"   Generated Insight: {summary[:50]}...")
                # 将 Insight 存回，标记为 type="insight"
                # 这样下次检索时，可以优先检索 insight
                self.memory_manager.write_memory(
                    user_id=user_id,
                    content=f"【认知总结】{summary}",
                    scope="global" if category == "Config" else "project"
                )

    async def run_reflection(self, user_id: str):
        """
        [Memory GC] 运行深度反思与优化
        """
        if not settings.DEEPSEEK_API_KEY:
            return

        print("🧠 Running Deep Reflection (Memory GC)...")
        # 获取最近 20 条记忆进行分析
        memories = self.memory_manager.read_memory(
            user_id=user_id,
            query="",
            limit=20
        )
        
        raw_texts = [m["content"] for m in memories]
        optimized = await self.llm.optimize_memory_storage(raw_texts)
        
        if optimized:
            print(f"   Reflection Result:\n{optimized}")
            # 在实际生产中，这里应该执行真正的数据库清理操作
            # 但为了安全，我们目前只将优化后的结果作为一条新的"深度总结"存入
            self.memory_manager.write_memory(
                user_id=user_id,
                content=f"【深度反思】记忆库优化建议：\n{optimized}",
                scope="project"
            )
