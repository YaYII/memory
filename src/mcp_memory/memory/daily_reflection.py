"""
每日深度思考调度器
每天12点执行一次全局记忆反思
用于跨记忆的整体分析和去重
"""

import asyncio
from typing import List, Dict, Any
from datetime import datetime, timedelta
import json


class DailyReflectionScheduler:
    """
    每日深度思考调度器
    
    职责：
    1. 每天12:00执行一次全局记忆反思
    2. 分析所有记忆，识别跨记忆的重复和关联
    3. 生成全局洞察和优化建议
    4. 合并相似记忆，更新全局知识图谱
    """
    
    def __init__(self, memory_manager, llm_facade):
        self.memory_manager = memory_manager
        self.llm = llm_facade
        self._running = False
        self._task = None
        self.last_daily_reflection_time = None
        self.last_daily_reflection_note = ""
        self.total_daily_reflections = 0
        self.log_callback = None
    
    def set_logger(self, logger):
        self.log_callback = logger
    
    async def _emit(self, message: str):
        print(message)
        if self.log_callback:
            try:
                result = self.log_callback(message)
                if asyncio.iscoroutine(result):
                    await result
            except Exception:
                pass
    
    async def start(self):
        """启动每日深度思考调度器"""
        if self._running:
            return
        
        self._running = True
        self._task = asyncio.create_task(self._daily_reflection_loop())
        await self._emit("[DAILY_REFLECTION] 每日深度思考调度器已启动，将在每天12:00执行")
    
    async def stop(self):
        """停止调度器"""
        self._running = False
        if self._task:
            self._task.cancel()
            try:
                await self._task
            except asyncio.CancelledError:
                pass
        await self._emit("[DAILY_REFLECTION] 每日深度思考调度器已停止")
    
    async def _daily_reflection_loop(self):
        """每日反思主循环"""
        while self._running:
            try:
                # 计算到下一个12:00的时间
                now = datetime.now()
                next_run = now.replace(hour=12, minute=0, second=0, microsecond=0)
                
                # 如果已经过了12:00，设置为明天的12:00
                if next_run <= now:
                    next_run = next_run + timedelta(days=1)
                
                wait_seconds = (next_run - now).total_seconds()
                
                await self._emit(f"[DAILY_REFLECTION] 下一次深度思考时间: {next_run.strftime('%Y-%m-%d %H:%M:%S')}"
                                f" (等待 {wait_seconds/3600:.1f} 小时)")
                
                # 等待到12:00
                await asyncio.sleep(wait_seconds)
                
                # 执行深度思考
                if self._running:
                    await self.run_daily_reflection()
                    
            except asyncio.CancelledError:
                break
            except Exception as e:
                await self._emit(f"[DAILY_REFLECTION] 调度循环异常: {e}")
                await asyncio.sleep(3600)  # 出错后等待1小时再试
    
    async def run_daily_reflection(self):
        """
        执行每日深度思考
        分析所有记忆，识别重复和关联，生成全局洞察
        
        人类思考模式：
        1. 做对了什么 - 成功经验总结
        2. 做错了什么 - 失败教训记录
        3. 需要改进什么 - 改进方向识别
        4. 总结的经验 - 可复用知识提取
        5. 下次应该这样思考 - 思维模式优化
        6. 下次应该怎么做 - 行动指南生成
        """
        await self._emit("[DAILY_REFLECTION] ====== 开始每日深度思考 ======")
        start_time = datetime.now()
        
        try:
            # 1. 获取所有记忆
            await self._emit("[DAILY_REFLECTION] 正在获取所有记忆...")
            all_memories = self.memory_manager.store.collection.get(limit=1000)
            ids = all_memories.get("ids", [])
            docs = all_memories.get("documents", [])
            metas = all_memories.get("metadatas", [])
            
            total_memories = len(ids)
            if total_memories == 0:
                await self._emit("[DAILY_REFLECTION] 没有记忆需要分析")
                self.last_daily_reflection_note = "无记忆"
                return
            
            await self._emit(f"[DAILY_REFLECTION] 共获取 {total_memories} 条记忆")
            
            # 2. 分析记忆分布
            await self._emit("[DAILY_REFLECTION] 正在分析记忆分布...")
            memory_stats = self._analyze_memory_distribution(metas)
            await self._emit(f"[DAILY_REFLECTION] 记忆分布: {memory_stats}")
            
            # 3. 检测跨记忆重复（全局视角）
            await self._emit("[DAILY_REFLECTION] 正在检测跨记忆重复...")
            duplicates = await self._detect_global_duplicates(ids, docs, metas)
            await self._emit(f"[DAILY_REFLECTION] 发现 {len(duplicates)} 组重复记忆")
            
            # 4. 合并重复记忆（而非删除）
            if duplicates:
                await self._emit("[DAILY_REFLECTION] 正在合并重复记忆...")
                merged_groups = await self._merge_duplicate_memories(duplicates, ids, docs, metas)
                await self._emit(f"[DAILY_REFLECTION] 已合并 {merged_groups} 组记忆")
            
            # 5. 人类思考模式深度分析
            await self._emit("[DAILY_REFLECTION] 正在进行人类思考模式分析...")
            human_insights = await self._human_thinking_analysis(docs, metas)
            
            # 6. 生成全局洞察
            if len(settings.providers) > 0:
                await self._emit("[DAILY_REFLECTION] 正在生成全局洞察...")
                insights = await self._generate_global_insights(docs, metas)
                if insights:
                    await self._emit(f"[DAILY_REFLECTION] 全局洞察: {insights[:200]}...")
            
            # 7. 保存每日深度思考报告
            reflection_report = self._create_reflection_report(memory_stats, human_insights, insights if len(settings.providers) > 0 else "")
            self.memory_manager.write_memory(
                user_id=settings.MCP_EVOLUTION_REFLECTION_USER_ID,
                content=reflection_report,
                title=f"每日深度思考报告 - {datetime.now().strftime('%Y-%m-%d')}",
                scope="global",
                memory_type="thinking"
            )
            await self._emit("[DAILY_REFLECTION] 深度思考报告已保存")
            
            # 8. 更新全局知识图谱
            await self._emit("[DAILY_REFLECTION] 正在更新全局知识图谱...")
            await self._update_global_graph(ids, docs, metas)
            
            # 9. 标记已分析的记忆
            processed_count = await self._mark_memories_as_daily_reflected(ids)
            await self._emit(f"[DAILY_REFLECTION] 已标记 {processed_count} 条记忆为已深度思考")
            
            # 更新统计
            duration = (datetime.now() - start_time).total_seconds()
            self.last_daily_reflection_time = datetime.now()
            self.total_daily_reflections += 1
            self.last_daily_reflection_note = f"分析了 {total_memories} 条记忆，耗时 {duration:.1f} 秒"
            
            await self._emit(f"[DAILY_REFLECTION] ====== 每日深度思考完成 ======")
            await self._emit(f"[DAILY_REFLECTION] {self.last_daily_reflection_note}")
            
        except Exception as e:
            await self._emit(f"[DAILY_REFLECTION] 每日深度思考失败: {e}")
            self.last_daily_reflection_note = f"失败: {str(e)[:100]}"
            import traceback
            traceback.print_exc()
    
    async def _human_thinking_analysis(self, docs: List[str], metas: List[Dict]) -> Dict[str, Any]:
        """
        人类思考模式分析
        
        分析维度：
        1. 做对了什么 - 识别成功模式
        2. 做错了什么 - 识别失败模式
        3. 需要改进什么 - 识别改进点
        4. 总结的经验 - 提取可复用知识
        5. 下次应该这样思考 - 思维模式建议
        6. 下次应该怎么做 - 行动建议
        """
        insights = {
            "success_patterns": [],      # 做对了什么
            "failure_patterns": [],      # 做错了什么
            "improvement_areas": [],     # 需要改进什么
            "lessons_learned": [],       # 总结的经验
            "thinking_suggestions": [],  # 下次应该这样思考
            "action_suggestions": []     # 下次应该怎么做
        }
        
        # 成功关键词
        success_keywords = ["成功", "完成", "解决", "正确", "有效", "最佳", "优化", "提升"]
        # 失败关键词
        failure_keywords = ["失败", "错误", "问题", "异常", "失败", "bug", "错误", "失败"]
        # 改进关键词
        improvement_keywords = ["改进", "优化", "建议", "应该", "需要", "待", "TODO", "FIXME"]
        
        for i, doc in enumerate(docs[:100]):  # 分析前100条
            meta = metas[i] if i < len(metas) else {}
            content_lower = doc.lower() if doc else ""
            
            # 检测成功模式
            if any(kw in content_lower for kw in success_keywords):
                # 提取成功经验
                success_item = {
                    "content": doc[:200],
                    "source": meta.get("user_id", "unknown"),
                    "time": meta.get("timestamp", "")
                }
                insights["success_patterns"].append(success_item)
            
            # 检测失败模式
            if any(kw in content_lower for kw in failure_keywords):
                failure_item = {
                    "content": doc[:200],
                    "source": meta.get("user_id", "unknown"),
                    "time": meta.get("timestamp", "")
                }
                insights["failure_patterns"].append(failure_item)
            
            # 检测改进点
            if any(kw in content_lower for kw in improvement_keywords):
                improvement_item = {
                    "content": doc[:200],
                    "source": meta.get("user_id", "unknown"),
                    "time": meta.get("timestamp", "")
                }
                insights["improvement_areas"].append(improvement_item)
        
        # 使用LLM生成更深层的分析
        if len(settings.providers) > 0 and len(docs) > 0:
            try:
                sample_docs = "\n\n---\n\n".join(docs[:10])
                
                prompt = f"""
请对以下记忆内容进行人类思考模式分析：

【记忆样本】
{sample_docs[:3000]}

请从以下维度进行分析，每个维度给出3-5条具体内容：

1. **做对了什么**：识别成功的行为和决策
2. **做错了什么**：识别失败的行为和决策
3. **需要改进什么**：识别可以改进的地方
4. **总结的经验**：提取可复用的经验教训
5. **下次应该这样思考**：思维模式建议
6. **下次应该怎么做**：具体行动建议

请用中文输出，格式清晰：
"""
                
                llm_insights = await self.llm.chat_completion(
                    messages=[{"role": "user", "content": prompt}],
                    temperature=0.3,
                    max_tokens=1000
                )
                
                if llm_insights:
                    insights["llm_analysis"] = llm_insights
                    
            except Exception as e:
                await self._emit(f"[DAILY_REFLECTION] LLM分析失败: {e}")
        
        return insights
    
    def _create_reflection_report(self, stats: Dict, human_insights: Dict, llm_insights: str) -> str:
        """创建每日深度思考报告"""
        report_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        
        report = f"""# 每日深度思考报告
生成时间: {report_time}

## 记忆统计
- 总记忆数: {stats.get('total', 0)}
- 按类型分布: {stats.get('by_type', {})}
- 按范围分布: {stats.get('by_scope', {})}

## 一、做对了什么（成功经验）
{self._format_insights(human_insights.get('success_patterns', [])[:5])}

## 二、做错了什么（失败教训）
{self._format_insights(human_insights.get('failure_patterns', [])[:5])}

## 三、需要改进什么
{self._format_insights(human_insights.get('improvement_areas', [])[:5])}

## 四、总结的经验
{human_insights.get('llm_analysis', '暂无LLM分析') if human_insights.get('llm_analysis') else '暂无分析'}

## 五、下次应该这样思考
基于今日分析，建议采用以下思维模式：
1. 遇到类似问题时，先回顾成功经验
2. 注意避免已识别的失败模式
3. 关注需要改进的领域

## 六、下次应该怎么做
具体行动建议：
1. 复用已验证的成功方法
2. 避免重复已知的错误
3. 持续改进已识别的薄弱环节

---
此报告由AI记忆系统自动生成，基于人类思考模式进行分析。
"""
        return report
    
    def _format_insights(self, items: List[Dict]) -> str:
        """格式化洞察列表"""
        if not items:
            return "暂无数据"
        
        formatted = []
        for i, item in enumerate(items, 1):
            content = item.get('content', '')[:100]
            formatted.append(f"{i}. {content}...")
        return "\n".join(formatted)
    
    def _analyze_memory_distribution(self, metas: List[Dict]) -> Dict[str, int]:
        """分析记忆分布统计"""
        stats = {
            "total": len(metas),
            "by_type": {},
            "by_scope": {},
            "by_user": {}
        }
        
        for meta in metas:
            # 按类型统计
            mem_type = meta.get("memory_type", "unknown")
            stats["by_type"][mem_type] = stats["by_type"].get(mem_type, 0) + 1
            
            # 按范围统计
            scope = meta.get("scope", "unknown")
            stats["by_scope"][scope] = stats["by_scope"].get(scope, 0) + 1
            
            # 按用户统计
            user = meta.get("user_id", "unknown")
            stats["by_user"][user] = stats["by_user"].get(user, 0) + 1
        
        return stats
    
    async def _detect_global_duplicates(self, ids: List[str], docs: List[str], metas: List[Dict]) -> List[List[str]]:
        """
        检测跨记忆的全局重复
        返回重复记忆ID的组列表
        """
        duplicates = []
        processed = set()
        
        # 简单的相似度检测（基于内容哈希和关键词）
        for i in range(len(ids)):
            if ids[i] in processed:
                continue
            
            similar_group = [ids[i]]
            doc_i = docs[i].lower()
            
            for j in range(i + 1, len(ids)):
                if ids[j] in processed:
                    continue
                
                doc_j = docs[j].lower()
                
                # 计算简单相似度
                words_i = set(doc_i.split())
                words_j = set(doc_j.split())
                
                if not words_i or not words_j:
                    continue
                
                intersection = len(words_i & words_j)
                union = len(words_i | words_j)
                similarity = intersection / union if union > 0 else 0
                
                # 相似度超过0.8认为是重复
                if similarity > 0.8:
                    similar_group.append(ids[j])
                    processed.add(ids[j])
            
            if len(similar_group) > 1:
                duplicates.append(similar_group)
                processed.add(ids[i])
        
        return duplicates
    
    async def _merge_duplicate_memories(self, duplicate_groups: List[List[str]], ids: List[str], docs: List[str], metas: List[Dict]) -> int:
        """
        合并重复记忆（而非删除）
        
        策略：
        1. 保留所有源记忆
        2. 创建合并后的增强版记忆
        3. 标记源记忆为已合并
        4. 添加关联关系
        
        返回合并的组数
        """
        merged_count = 0
        
        for group in duplicate_groups:
            if len(group) < 2:
                continue
            
            try:
                await self._emit(f"[DAILY_REFLECTION] 正在合并 {len(group)} 条重复记忆...")
                
                # 获取组内记忆的详细内容
                group_contents = []
                group_metas = []
                
                for mem_id in group:
                    idx = ids.index(mem_id) if mem_id in ids else -1
                    if idx >= 0:
                        group_contents.append(docs[idx])
                        group_metas.append(metas[idx] if idx < len(metas) else {})
                
                if len(group_contents) < 2:
                    continue
                
                # 创建合并后的增强版记忆
                merged_content = await self._create_merged_memory(group_contents, group_metas)
                
                if merged_content:
                    # 获取第一个记忆的用户ID
                    first_meta = group_metas[0] if group_metas else {}
                    user_id = first_meta.get("user_id", settings.MCP_EVOLUTION_REFLECTION_USER_ID)
                    
                    # 保存合并后的增强版记忆
                    merged_id = self.memory_manager.write_memory(
                        user_id=user_id,
                        content=merged_content,
                        scope="global"  # 合并的记忆通常是全局的
                    )
                    
                    await self._emit(f"[DAILY_REFLECTION] 已创建合并记忆: {merged_id[:8]}")
                    
                    # 标记源记忆为已合并（保留源记忆！）
                    for mem_id in group:
                        self.memory_manager.store.update_memory_metadata(
                            memory_id=mem_id,
                            metadata={
                                "merge_status": "merged_into",
                                "merged_into_id": merged_id,
                                "merge_time": datetime.now().isoformat(),
                                "merge_reason": "daily_reflection_duplicate",
                                "merge_group_size": len(group)
                            }
                        )
                    
                    # 为新创建的合并记忆添加元数据
                    self.memory_manager.store.update_memory_metadata(
                        memory_id=merged_id,
                        metadata={
                            "is_merged_memory": True,
                            "merged_from": group,
                            "merged_count": len(group),
                            "merged_at": datetime.now().isoformat()
                        }
                    )
                    
                    merged_count += 1
                    await self._emit(f"[DAILY_REFLECTION] 已标记 {len(group)} 条源记忆为已合并")
                    
            except Exception as e:
                await self._emit(f"[DAILY_REFLECTION] 合并记忆组失败: {e}")
                continue
        
        return merged_count
    
    async def _create_merged_memory(self, contents: List[str], metas: List[Dict]) -> str:
        """
        创建合并后的增强版记忆
        
        不压缩信息，而是：
        1. 保留所有关键细节
        2. 识别并合并重复部分
        3. 补充相互之间的关联
        4. 使用清晰的结构组织
        5. 强制使用配置语言（默认简体中文）
        """
        # 获取配置的语言
        target_language = settings.MCP_MEMORY_LANGUAGE or "简体中文"
        
        # 如果有LLM，使用LLM进行智能合并
        if len(settings.providers) > 0 and len(contents) > 1:
            try:
                combined = "\n\n=== 来源记忆 ===\n\n".join([
                    f"[记忆 {i+1}]\n{content[:500]}"  # 限制每条记忆的长度
                    for i, content in enumerate(contents)
                ])
                
                # 获取配置的语言设置
                target_language = settings.MCP_MEMORY_LANGUAGE or "简体中文"
                
                prompt = f"""
请将以下相关记忆整合为一份完整的增强版记忆。

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
5. 标注信息的来源数量

【待整合的记忆】（共{len(contents)}条）
{combined}

【输出要求】
- 必须使用{target_language}输出
- 禁止出现英文单词（例外情况除外）
- 保持技术术语的准确性

请输出整合后的完整内容：
"""
                
                merged = await self.llm.chat_completion(
                    messages=[{"role": "user", "content": prompt}],
                    temperature=0.2,
                    max_tokens=2000
                )
                
                if merged:
                    return f"【每日深度思考 - 合并增强版】\n\n{merged}\n\n---\n此记忆由 {len(contents)} 条相关记忆合并生成，保留所有关键信息。语言: {target_language}"
                    
            except Exception as e:
                await self._emit(f"[DAILY_REFLECTION] LLM合并失败，使用简单合并: {e}")
        
        # 简单合并（备用方案）
        simple_merged = "\n\n".join([
            f"【来源 {i+1}】\n{content}"
            for i, content in enumerate(contents)
        ])
        
        return f"【每日深度思考 - 合并版】\n\n{simple_merged}\n\n---\n此记忆由 {len(contents)} 条相关记忆合并生成。语言: {target_language}"
    
    async def _generate_global_insights(self, docs: List[str], metas: List[Dict]) -> str:
        """生成全局洞察"""
        try:
            # 准备分析文本（取前20条记忆的摘要）
            sample_docs = docs[:20]
            combined_text = "\n\n---\n\n".join(sample_docs)
            
            # 使用LLM生成洞察
            prompt = f"""
请对以下记忆内容进行全局分析，生成洞察报告：

【记忆样本】（共{len(docs)}条记忆的前20条）
{combined_text[:3000]}

请分析：
1. 主要主题和模式
2. 知识关联和重复
3. 改进建议

请用中文输出简洁的洞察报告（200字以内）：
"""
            
            insights = await self.llm.chat_completion(
                messages=[{"role": "user", "content": prompt}],
                temperature=0.3,
                max_tokens=500
            )
            
            return insights or "无法生成洞察"
            
        except Exception as e:
            return f"生成洞察失败: {e}"
    
    async def _update_global_graph(self, ids: List[str], docs: List[str], metas: List[Dict]):
        """更新全局知识图谱"""
        try:
            # 提取所有实体并建立关联
            all_entities = []
            for i, doc in enumerate(docs):
                # 使用简单的关键词提取作为fallback
                entities = self.memory_manager.store._fallback_extract_entities(doc)
                if entities:
                    all_entities.extend(entities)
                    # 添加到图谱
                    meta = metas[i] if i < len(metas) else {}
                    category = meta.get("cognitive_category", "Unknown")
                    self.memory_manager.store.add_entities_to_graph(
                        ids[i], entities, category=category
                    )
            
            await self._emit(f"[DAILY_REFLECTION] 全局图谱已更新，共 {len(set(all_entities))} 个实体")
            
        except Exception as e:
            await self._emit(f"[DAILY_REFLECTION] 更新全局图谱失败: {e}")
    
    async def _mark_memories_as_daily_reflected(self, ids: List[str]) -> int:
        """标记记忆为已进行每日深度思考"""
        count = 0
        for memory_id in ids:
            try:
                self.memory_manager.store.update_memory_metadata(
                    memory_id=memory_id,
                    metadata={
                        "daily_reflected": True,
                        "daily_reflected_at": datetime.now().isoformat()
                    }
                )
                count += 1
            except Exception:
                pass
        return count
    
    def get_status(self) -> Dict[str, Any]:
        """获取调度器状态"""
        return {
            "running": self._running,
            "last_reflection_time": self.last_daily_reflection_time.isoformat() if self.last_daily_reflection_time else None,
            "last_reflection_note": self.last_daily_reflection_note,
            "total_reflections": self.total_daily_reflections,
            "next_reflection": self._calculate_next_reflection()
        }
    
    def _calculate_next_reflection(self) -> str:
        """计算下一次反思时间"""
        now = datetime.now()
        next_run = now.replace(hour=12, minute=0, second=0, microsecond=0)
        if next_run <= now:
            next_run = next_run + timedelta(days=1)
        return next_run.isoformat()
