"""
自动总结系统 V2
- 保留原始信息精度，不做信息压缩
- 深度思考内容意图，生成结构化知识
- 记忆合并而非删除
- 精细分类：技能/思维/项目/规则/偏好/上下文
"""

import asyncio
from typing import List, Dict, Optional
from datetime import datetime, timedelta
from mcp_memory.memory.deep_reflection import DeepReflectionEngine, MemoryCategory, MemoryInsight
import json


class AutoSummarizerV2:
    """
    自动总结处理器 V2
    
    核心改进：
    1. 不压缩信息，保留原始精度
    2. 深度分析内容意图，生成流程图编码
    3. 记忆合并而非删除
    4. 精细分类存储
    
    负责：
    1. 存储记忆 → 深度分析 → 分类存储
    2. 相似记忆检测与合并
    3. 记忆关系分析
    """
    
    def __init__(self, memory_store, llm=None):
        self.memory_store = memory_store
        self.llm = llm
        self.deep_reflection = DeepReflectionEngine(memory_store, llm)
        self._running = False
        
        # 配置参数
        self.analysis_interval = 300       # 每5分钟分析一次
        self.merge_interval = 600          # 每10分钟合并一次
        self.relationship_interval = 1800  # 每30分钟分析关系一次
        
    async def initialize(self):
        """初始化服务"""
        if self.llm:
            await self.llm.initialize()
        await self.deep_reflection.initialize()
        print("[AutoSummarizerV2] 初始化完成")
    
    async def start(self):
        """启动自动总结任务"""
        if self._running:
            return
        
        self._running = True
        
        # 启动深度分析任务
        asyncio.create_task(self._deep_analysis_loop())
        
        # 启动记忆合并任务
        asyncio.create_task(self._merge_loop())
        
        # 启动关系分析任务
        asyncio.create_task(self._relationship_loop())
        
        print("[AutoSummarizerV2] 自动总结任务已启动（深度分析、记忆合并、关系分析）")
    
    async def stop(self):
        """停止自动总结任务"""
        self._running = False
        await self.deep_reflection.stop()
        print("[AutoSummarizerV2] 自动总结任务已停止")
    
    async def _deep_analysis_loop(self):
        """
        深度分析循环
        对存储记忆进行深度分析，提取结构化知识
        """
        while self._running:
            try:
                await asyncio.sleep(self.analysis_interval)
                
                # 获取未分析的存储记忆
                unanalyzed_memories = self._get_unanalyzed_memories()
                
                for memory in unanalyzed_memories:
                    await self._deep_analyze_and_classify(memory)
                    
            except asyncio.CancelledError:
                break
            except Exception as e:
                print(f"[AutoSummarizerV2] 深度分析循环出错: {e}")
    
    async def _merge_loop(self):
        """
        记忆合并循环
        检测相似记忆并合并（而非删除）
        """
        while self._running:
            try:
                await asyncio.sleep(self.merge_interval)
                
                # 执行记忆合并
                await self._merge_similar_memories()
                
            except asyncio.CancelledError:
                break
            except Exception as e:
                print(f"[AutoSummarizerV2] 合并循环出错: {e}")
    
    async def _relationship_loop(self):
        """
        关系分析循环
        分析记忆之间的关系
        """
        while self._running:
            try:
                await asyncio.sleep(self.relationship_interval)
                
                # 分析记忆关系
                await self._analyze_memory_relationships()
                
            except asyncio.CancelledError:
                break
            except Exception as e:
                print(f"[AutoSummarizerV2] 关系分析循环出错: {e}")
    
    def _get_unanalyzed_memories(self) -> List[Dict]:
        """获取未深度分析的存储记忆"""
        try:
            # 查询所有存储记忆
            results = self.memory_store.query_by_type(
                query="",
                memory_type="storage",
                limit=100
            )
            
            unanalyzed = []
            for memory in results:
                metadata = memory.get("metadata", {})
                # 检查是否已分析
                if not metadata.get("deep_analyzed", False):
                    unanalyzed.append({
                        "memory_id": memory.get("memory_id"),
                        "content": memory.get("content"),
                        "metadata": {
                            "user_id": memory.get("user_id"),
                            "project_id": memory.get("project_id"),
                            "scope": memory.get("scope"),
                            **metadata
                        }
                    })
            
            return unanalyzed
        except Exception as e:
            print(f"[AutoSummarizerV2] 获取未分析记忆失败: {e}")
            return []
    
    async def _deep_analyze_and_classify(self, memory: Dict):
        """
        深度分析并分类记忆
        
        不压缩信息，而是：
        1. 深度分析内容意图
        2. 生成结构化知识
        3. 精细分类存储
        """
        try:
            content = memory.get("content", "")
            memory_id = memory.get("memory_id")
            
            # 使用深度思考引擎分析
            insight = await self.deep_reflection.deep_analyze_content(content)
            
            if insight.confidence < 0.5:
                print(f"[AutoSummarizerV2] 记忆 {memory_id[:8]} 置信度太低，跳过")
                return
            
            # 根据分类保存到相应的记忆类型
            await self._save_by_category(insight, memory)
            
            # 标记为已分析
            self.memory_store.update_memory_metadata(
                memory_id=memory_id,
                metadata={
                    "deep_analyzed": True,
                    "analyzed_at": datetime.now().isoformat(),
                    "category": insight.category.value,
                    "confidence": insight.confidence,
                    "core_intent": insight.core_intent
                }
            )
            
            print(f"[AutoSummarizerV2] 已分析并分类记忆 {memory_id[:8]} 为 {insight.category.value}")
            
        except Exception as e:
            print(f"[AutoSummarizerV2] 深度分析记忆失败: {e}")
    
    async def _save_by_category(self, insight: MemoryInsight, source_memory: Dict):
        """根据分类保存记忆"""
        user_id = source_memory.get("metadata", {}).get("user_id", "unknown")
        project_id = source_memory.get("metadata", {}).get("project_id", "")
        scope = source_memory.get("metadata", {}).get("scope", "project")
        
        # 构建结构化内容（保留完整信息）
        structured_data = {
            "core_intent": insight.core_intent,
            "original_content": source_memory.get("content"),
            "structured_analysis": insight.structured_content,
            "workflow": insight.workflow_steps,
            "decision_logic": insight.decision_logic,
            "constraints": insight.constraints,
            "related_concepts": insight.related_concepts,
            "confidence": insight.confidence,
            "source_memory_id": source_memory.get("memory_id")
        }
        
        # 根据分类选择存储方式
        if insight.category == MemoryCategory.SKILL:
            # 技能记忆 - 全局可复用
            self.memory_store.save_skill_memory(
                content=json.dumps(structured_data, ensure_ascii=False, indent=2),
                user_id=user_id,
                source_thinking=[source_memory.get("memory_id")],
                skill_type="workflow" if insight.workflow_steps else "knowledge",
                tags=insight.related_concepts + ["auto_extracted", "skill"],
                scope="global" if insight.confidence > 0.85 else scope,
                project_id=project_id if insight.confidence <= 0.85 else "global"
            )
            
        elif insight.category == MemoryCategory.THINKING:
            # 思维记忆 - 保留决策逻辑
            self.memory_store.save_thinking_memory(
                content=json.dumps(structured_data, ensure_ascii=False, indent=2),
                user_id=user_id,
                source_memories=[source_memory.get("memory_id")],
                summary_type="deep_analysis",
                key_points=[insight.core_intent] + insight.workflow_steps[:3],
                scope=scope,
                project_id=project_id
            )
            
        elif insight.category == MemoryCategory.RULE:
            # 规则记忆 - 作为最佳实践
            self.memory_store.save_skill_memory(
                content=json.dumps(structured_data, ensure_ascii=False, indent=2),
                user_id=user_id,
                source_thinking=[source_memory.get("memory_id")],
                skill_type="best_practice",
                tags=["rule", "constraint", "best_practice"] + insight.related_concepts,
                scope="global",  # 规则通常是全局的
                project_id="global"
            )
            
        elif insight.category == MemoryCategory.PROJECT:
            # 项目记忆 - 项目专属
            self.memory_store.save_thinking_memory(
                content=json.dumps(structured_data, ensure_ascii=False, indent=2),
                user_id=user_id,
                source_memories=[source_memory.get("memory_id")],
                summary_type="project_info",
                key_points=[insight.core_intent],
                scope="project",
                project_id=project_id
            )
            
        elif insight.category == MemoryCategory.PREFERENCE:
            # 偏好记忆 - 用户习惯
            self.memory_store.save_skill_memory(
                content=json.dumps(structured_data, ensure_ascii=False, indent=2),
                user_id=user_id,
                source_thinking=[source_memory.get("memory_id")],
                skill_type="preference",
                tags=["preference", "user_habit"] + insight.related_concepts,
                scope="global",
                project_id="global"
            )
            
        elif insight.category == MemoryCategory.CONTEXT:
            # 上下文记忆 - 保持为存储记忆，但添加分析元数据
            self.memory_store.update_memory_metadata(
                memory_id=source_memory.get("memory_id"),
                metadata={
                    "context_analysis": {
                        "core_intent": insight.core_intent,
                        "related_concepts": insight.related_concepts
                    }
                }
            )
    
    async def _merge_similar_memories(self):
        """合并相似记忆（而非删除）"""
        try:
            # 获取所有已分析的记忆
            all_memories = self.memory_store.query_by_type(
                query="",
                memory_type="all",
                limit=1000
            )
            
            # 按用户和分类分组
            grouped = {}
            for mem in all_memories:
                metadata = mem.get("metadata", {})
                category = metadata.get("category", "unknown")
                key = f"{mem.get('user_id')}:{category}"
                if key not in grouped:
                    grouped[key] = []
                grouped[key].append(mem)
            
            # 在每组内检测相似性并合并
            for group_key, memories in grouped.items():
                if len(memories) < 2:
                    continue
                
                # 计算相似度并分组
                similar_groups = await self._group_by_similarity(memories)
                
                # 合并每组
                for group in similar_groups:
                    if len(group) > 1:
                        await self._merge_group(group)    
                                   
        except Exception as e:
            print(f"[AutoSummarizerV2] 合并相似记忆失败: {e}")
    
    async def _group_by_similarity(self, memories: List[Dict]) -> List[List[Dict]]:
        """按相似度分组"""
        groups = []
        used = set()
        
        for i, mem1 in enumerate(memories):
            mem1_id = mem1.get("memory_id")
            if mem1_id in used:
                continue
            
            group = [mem1]
            used.add(mem1_id)
            
            for mem2 in memories[i+1:]:
                mem2_id = mem2.get("memory_id")
                if mem2_id in used:
                    continue
                
                # 计算相似度
                similarity = await self.deep_reflection._calculate_semantic_similarity(
                    mem1.get("content", ""),
                    mem2.get("content", "")
                )
                
                if similarity > 0.85:  # 高相似度阈值
                    group.append(mem2)
                    used.add(mem2_id)
            
            groups.append(group)
        
        return groups
    
    async def _merge_group(self, group: List[Dict]):
        """合并记忆组（保留所有信息）"""
        if len(group) < 2:
            return
        
        try:
            # 合并内容（不压缩）
            combined_content = "\n\n=== 来源记忆 ===\n\n".join([
                f"[记忆 {m.get('memory_id')[:8]}]\n{m.get('content', '')}"
                for m in group
            ])
            
            # 使用LLM整合（保留细节）
            # 获取配置的语言设置
            target_language = settings.MCP_MEMORY_LANGUAGE or "简体中文"
            
            prompt = f"""
请将以下相关记忆整合为一份完整的文档。

【语言强制要求 - 必须遵守】
1. 所有自然语言内容必须使用: {target_language}
2. 禁止中英文混杂，保持语言一致性
3. 如果来源记忆包含英文，必须翻译为{target_language}
4. **例外保护**（不得翻译）:
   - 代码片段（Python、JavaScript等）
   - 命令行命令和参数
   - 配置文件内容
   - 文件路径和URL
   - 技术术语和API名称
   - 变量名、函数名、类名

【内容处理要求】
1. 保留所有关键细节和具体信息，不做信息压缩
2. 识别重复内容并合并，但保留不同的细节
3. 补充记忆之间的关联和上下文
4. 使用清晰的结构组织内容
5. 标注信息的来源

【待整合的记忆】
{combined_content[:4000]}

【输出要求】
- 必须使用{target_language}输出
- 禁止出现英文单词（例外情况除外）
- 保持技术术语的准确性

请输出整合后的完整内容：
"""
            
            merged_content = await self.llm.chat_completion(
                messages=[{"role": "user", "content": prompt}],
                temperature=0.2,
                max_tokens=3000  # 允许更长的输出
            )
            
            if merged_content:
                # 获取第一个记忆的信息
                first_mem = group[0]
                user_id = first_mem.get("user_id", "unknown")
                
                # 保存合并后的记忆
                merged_id = self.memory_store.save_storage_memory(
                    content=merged_content,
                    user_id=user_id,
                    scope=first_mem.get("scope", "project"),
                    project_id=first_mem.get("project_id", ""),
                    tags=["merged", "enhanced"] + first_mem.get("tags", [])
                )
                
                # 标记源记忆为已合并（不删除！）
                for mem in group:
                    self.memory_store.update_memory_metadata(
                        memory_id=mem.get("memory_id"),
                        metadata={
                            "merge_status": "merged_into",
                            "merged_into_id": merged_id,
                            "merge_time": datetime.now().isoformat(),
                            "merge_reason": "similar_content"
                        }
                    )
                
                print(f"[AutoSummarizerV2] 已合并 {len(group)} 条记忆为 {merged_id[:8]}（源记忆保留）")
                
        except Exception as e:
            print(f"[AutoSummarizerV2] 合并记忆组失败: {e}")
    
    async def _analyze_memory_relationships(self):
        """分析记忆之间的关系"""
        try:
            # 获取最近的记忆
            recent_memories = self.memory_store.query_by_type(
                query="",
                memory_type="all",
                limit=50
            )
            
            for memory in recent_memories:
                mem_id = memory.get("memory_id")
                
                # 分析关系
                relationships = await self.deep_reflection.analyze_memory_relationships(mem_id)
                
                if relationships.get("relationships"):
                    # 保存关系信息
                    self.memory_store.update_memory_metadata(
                        memory_id=mem_id,
                        metadata={
                            "relationships": relationships["relationships"],
                            "relationship_analyzed_at": datetime.now().isoformat()
                        }
                    )
                    
        except Exception as e:
            print(f"[AutoSummarizerV2] 分析记忆关系失败: {e}")
    
    async def force_analyze(self, memory_id: str) -> Optional[str]:
        """手动触发深度分析"""
        try:
            memory = self.memory_store.get_memory_by_id(memory_id)
            if memory:
                await self._deep_analyze_and_classify({
                    "memory_id": memory_id,
                    "content": memory.get("content"),
                    "metadata": memory.get("metadata", {})
                })
                return f"已深度分析记忆 {memory_id[:8]}"
            return "记忆不存在"
        except Exception as e:
            print(f"[AutoSummarizerV2] 手动分析失败: {e}")
            return None
    
    async def force_merge(self, memory_ids: List[str]) -> Optional[str]:
        """手动触发合并"""
        try:
            memories = []
            for mid in memory_ids:
                mem = self.memory_store.get_memory_by_id(mid)
                if mem:
                    memories.append(mem)
            
            if len(memories) > 1:
                await self._merge_group(memories)
                return f"已合并 {len(memories)} 条记忆"
            return "记忆数量不足"
        except Exception as e:
            print(f"[AutoSummarizerV2] 手动合并失败: {e}")
            return None
