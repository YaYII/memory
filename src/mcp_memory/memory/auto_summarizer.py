"""
自动总结系统
- 自动将存储记忆总结为思维记忆
- 自动从思维记忆提取技能记忆
- 自动进行记忆去重和清洗
"""

import asyncio
from typing import List, Dict, Optional
from datetime import datetime, timedelta
from mcp_memory.models.data_models import (
    StorageMemoryCreate, ThinkingMemoryCreate, SkillMemoryCreate
)
from mcp_memory.llm.facade import llm_facade


class AutoSummarizer:
    """
    自动总结处理器
    负责：
    1. 全局扫描存储记忆 → 思维记忆（定期总结）
    2. 思维记忆 → 技能记忆（技能提取）
    3. 记忆去重和清洗
    """
    
    def __init__(self, memory_store):
        self.memory_store = memory_store  # 使用统一的 MemoryStore
        self.llm = llm_facade
        self._running = False
        self._summary_task: Optional[asyncio.Task] = None
        self._extraction_task: Optional[asyncio.Task] = None
        self._deduplication_task: Optional[asyncio.Task] = None
        
        # 配置参数
        self.session_summary_threshold = 500  # 字符数阈值，超过则触发会话总结
        self.daily_summary_hour = 2  # 每天凌晨 2 点进行日总结
        self.skill_extraction_interval = 300  # 每 5 分钟检查一次技能提取（加快测试）
        self.summary_check_interval = 60  # 每 1 分钟检查一次是否需要总结（加快测试）
        self.deduplication_interval = 1800  # 每 30 分钟进行一次去重
        
    async def initialize(self):
        """初始化LLM服务"""
        await self.llm.initialize()
        print("[AutoSummarizer] 初始化完成")
    
    async def start(self):
        """启动自动总结任务"""
        if self._running:
            return
        
        self._running = True
        
        # 启动会话总结监控
        self._summary_task = asyncio.create_task(self._session_summary_loop())
        
        # 启动技能提取监控
        self._extraction_task = asyncio.create_task(self._skill_extraction_loop())
        
        # 启动记忆去重任务
        self._deduplication_task = asyncio.create_task(self._deduplication_loop())
        
        print("[AutoSummarizer] 自动总结任务已启动（包含全局扫描、技能提取、记忆去重）")
    
    async def stop(self):
        """停止自动总结任务"""
        self._running = False
        
        if self._summary_task:
            self._summary_task.cancel()
            try:
                await self._summary_task
            except asyncio.CancelledError:
                pass
        
        if self._extraction_task:
            self._extraction_task.cancel()
            try:
                await self._extraction_task
            except asyncio.CancelledError:
                pass
        
        if self._deduplication_task:
            self._deduplication_task.cancel()
            try:
                await self._deduplication_task
            except asyncio.CancelledError:
                pass
        
        print("[AutoSummarizer] 自动总结任务已停止")
    
    async def _session_summary_loop(self):
        """
        会话总结循环
        监控未总结的存储记忆，定期生成思维记忆
        """
        while self._running:
            try:
                await asyncio.sleep(self.summary_check_interval)  # 每5分钟检查一次
                
                # 获取最近未总结的存储记忆
                recent_memories = self._get_recent_storage_memories(minutes=60)
                
                if len(recent_memories) >= 2:  # 至少有3条记忆才总结
                    await self._create_session_summary(recent_memories)
                    
            except asyncio.CancelledError:
                break
            except Exception as e:
                print(f"[AutoSummarizer] 会话总结循环出错: {e}")
    
    async def _skill_extraction_loop(self):
        """
        技能提取循环
        从思维记忆中提取可复用的技能
        """
        while self._running:
            try:
                await asyncio.sleep(self.skill_extraction_interval)
                
                # 获取未提取技能的思维记忆
                thinking_memories = self._get_unprocessed_thinking_memories()
                
                for memory in thinking_memories:
                    await self._extract_skill_from_thinking(memory)
                    
            except asyncio.CancelledError:
                break
            except Exception as e:
                print(f"[AutoSummarizer] 技能提取循环出错: {e}")
    
    def _get_recent_storage_memories(self, minutes: int = 30) -> List[Dict]:
        """获取最近未总结的存储记忆"""
        try:
            # 使用统一的 MemoryStore 查询 storage 记忆
            from datetime import datetime, timedelta
            
            cutoff_time = datetime.now() - timedelta(minutes=minutes)
            
            # 查询所有 storage 记忆
            results = self.memory_store.query_by_type(
                query="",  # 空查询获取所有
                memory_type="storage",
                limit=1000
            )
            
            # 过滤出最近未总结的记忆
            recent_memories = []
            for memory in results:
                timestamp_str = memory.get("timestamp", "")
                
                try:
                    memory_time = datetime.fromisoformat(timestamp_str.replace('Z', '+00:00'))
                    if memory_time >= cutoff_time:
                        recent_memories.append({
                            "memory_id": memory.get("memory_id"),
                            "content": memory.get("content"),
                            "metadata": {
                                "user_id": memory.get("user_id"),
                                "project_id": memory.get("project_id"),
                                "scope": memory.get("scope")
                            }
                        })
                except:
                    continue
            
            return recent_memories
        except Exception as e:
            print(f"[AutoSummarizer] 获取存储记忆失败: {e}")
            return []
    
    def _get_unprocessed_thinking_memories(self) -> List[Dict]:
        """获取未提取技能的思维记忆"""
        try:
            # 使用统一的 MemoryStore 查询 thinking 记忆
            results = self.memory_store.query_by_type(
                query="",
                memory_type="thinking",
                limit=1000
            )
            
            unprocessed = []
            for memory in results:
                # 简化处理：所有 thinking 记忆都检查是否可以提取技能
                unprocessed.append({
                    "memory_id": memory.get("memory_id"),
                    "content": memory.get("content"),
                    "metadata": {
                        "user_id": memory.get("user_id"),
                        "project_id": memory.get("project_id"),
                        "scope": memory.get("scope")
                    }
                })
            
            return unprocessed
        except Exception as e:
            print(f"[AutoSummarizer] 获取思维记忆失败: {e}")
            return []
    
    async def _create_session_summary(self, memories: List[Dict]):
        """
        创建会话总结（思维记忆）
        """
        if not memories:
            return
        
        try:
            # 准备总结内容
            memory_contents = [m["content"] for m in memories]
            memory_ids = [m["memory_id"] for m in memories]
            
            # 使用LLM生成总结
            summary_content = await self._generate_summary(memory_contents)
            
            if not summary_content:
                print("[AutoSummarizer] 生成总结失败")
                return
            
            # 提取关键要点
            key_points = await self._extract_key_points(memory_contents)
            
            # 获取用户ID（假设所有记忆属于同一用户）
            user_id = memories[0]["metadata"].get("user_id", "unknown")
            project_id = memories[0]["metadata"].get("project_id", "")
            scope = memories[0]["metadata"].get("scope", "project")
            
            # 使用统一的 MemoryStore 创建思维记忆
            thinking_id = self.memory_store.save_thinking_memory(
                content=summary_content,
                user_id=user_id,
                source_memories=memory_ids,
                summary_type="session",
                key_points=key_points,
                scope=scope,
                project_id=project_id
            )
            print(f"[AutoSummarizer] 会话总结已创建: {thinking_id[:8]} (基于 {len(memories)} 条存储记忆)")
            
        except Exception as e:
            print(f"[AutoSummarizer] 创建会话总结失败: {e}")
    
    async def _extract_skill_from_thinking(self, thinking_memory: Dict):
        """
        从思维记忆中提取技能
        """
        try:
            content = thinking_memory["content"]
            memory_id = thinking_memory["memory_id"]
            meta = thinking_memory["metadata"]
            
            # 使用LLM判断是否为可复用技能
            skill_info = await self._analyze_skill_potential(content)
            
            if not skill_info or not skill_info.get("is_skill", False):
                return
            
            # 获取用户ID
            user_id = meta.get("user_id", "unknown")
            project_id = meta.get("project_id", "")
            
            # 使用统一的 MemoryStore 创建技能记忆
            skill_id = self.memory_store.save_skill_memory(
                content=skill_info["skill_content"],
                user_id=user_id,
                source_thinking=[memory_id],
                skill_type=skill_info.get("skill_type", "knowledge"),
                tags=skill_info.get("tags", []),
                scope="global",
                project_id="global"
            )
            print(f"[AutoSummarizer] 技能已提取: {skill_id[:8]} (来自思维记忆 {memory_id[:8]})")
            
            # 不需要标记已处理，因为使用统一存储
            
        except Exception as e:
            print(f"[AutoSummarizer] 提取技能失败: {e}")
    
    async def _generate_summary(self, contents: List[str]) -> Optional[str]:
        """
        使用LLM生成总结
        """
        try:
            # 合并内容
            combined_content = "\n\n---\n\n".join(contents)
            
            prompt = f"""
请对以下对话内容进行总结，提取核心信息和关键决策：

对话内容：
{combined_content[:3000]}  # 限制长度避免超出token限制

请生成简洁的总结（200字以内），包含：
1. 主要讨论的主题
2. 关键决策或结论
3. 重要的上下文信息

总结：
"""
            
            summary = await self.llm.chat_completion(
                messages=[{"role": "user", "content": prompt}],
                temperature=0.3,
                max_tokens=300
            )
            
            return summary
            
        except Exception as e:
            print(f"[AutoSummarizer] LLM生成总结失败: {e}")
            return None
    
    async def _deduplication_loop(self):
        """
        记忆去重循环
        定期扫描所有记忆，识别重复或相似的内容，进行合并或删除
        """
        while self._running:
            try:
                await asyncio.sleep(self.deduplication_interval)
                
                # 获取所有记忆
                all_memories = self.memory_store.query_by_type(
                    query="",
                    memory_type="all",
                    limit=2000
                )
                
                if len(all_memories) < 2:
                    continue
                
                # 简单的去重策略：检查内容相似度
                to_delete = []
                for i in range(len(all_memories)):
                    for j in range(i + 1, min(i + 10, len(all_memories))):
                        mem1 = all_memories[i]
                        mem2 = all_memories[j]
                        
                        # 检查是否同一用户、相同内容
                        if (mem1.get("user_id") == mem2.get("user_id") and
                            mem1.get("memory_type") == mem2.get("memory_type") and
                            mem1.get("content") == mem2.get("content")):
                            # 标记后者为重复，准备删除
                            if mem2.get("memory_id") not in to_delete:
                                to_delete.append(mem2.get("memory_id"))
                
                # 删除重复记忆
                if to_delete:
                    print(f"[AutoSummarizer] 发现 {len(to_delete)} 个重复记忆，开始清理...")
                    for mem_id in to_delete:
                        try:
                            self.memory_store.delete_memory(mem_id, "system")
                        except Exception as e:
                            print(f"[AutoSummarizer] 删除记忆 {mem_id[:8]} 失败: {e}")
                    
                    print(f"[AutoSummarizer] 记忆去重完成，清理了 {len(to_delete)} 个重复记忆")
                    
            except asyncio.CancelledError:
                break
            except Exception as e:
                print(f"[AutoSummarizer] 去重循环出错: {e}")
    
    async def _extract_key_points(self, contents: List[str]) -> List[str]:
        """
        提取关键要点
        """
        try:
            combined_content = "\n".join(contents)
            
            prompt = f"""
请从以下对话中提取3-5个关键要点（每点不超过20字）：

{combined_content[:2000]}

请以JSON数组格式返回：["要点1", "要点2", "要点3"]
"""
            
            result = await self.llm.chat_completion(
                messages=[{"role": "user", "content": prompt}],
                temperature=0.2,
                max_tokens=200
            )
            
            # 解析JSON
            import json
            if result:
                # 清理可能的markdown格式
                cleaned = result.replace("```json", "").replace("```", "").strip()
                try:
                    key_points = json.loads(cleaned)
                    if isinstance(key_points, list):
                        return key_points[:5]  # 最多5个要点
                except:
                    pass
            
            return []
            
        except Exception as e:
            print(f"[AutoSummarizer] 提取关键要点失败: {e}")
            return []
    
    async def _analyze_skill_potential(self, content: str) -> Optional[Dict]:
        """
        分析内容是否包含可复用技能
        """
        try:
            prompt = f"""
请分析以下内容是否包含可复用的技能或知识：

{content[:2000]}

如果是可复用技能，请以JSON格式返回：
{{
    "is_skill": true,
    "skill_content": "技能描述（100字以内）",
    "skill_type": "coding|config|workflow|knowledge|best_practice",
    "tags": ["标签1", "标签2"]
}}

如果不是技能，请返回：
{{"is_skill": false}}
"""
            
            result = await self.llm.chat_completion(
                messages=[{"role": "user", "content": prompt}],
                temperature=0.2,
                max_tokens=300
            )
            
            if result:
                import json
                cleaned = result.replace("```json", "").replace("```", "").strip()
                try:
                    return json.loads(cleaned)
                except:
                    pass
            
            return None
            
        except Exception as e:
            print(f"[AutoSummarizer] 分析技能潜力失败: {e}")
            return None
    
    def _mark_thinking_as_processed(self, memory_id: str):
        """标记思维记忆已处理"""
        try:
            self.memory_store.thinking_collection.update(
                ids=[memory_id],
                metadatas=[{"skill_extracted": True}]
            )
        except Exception as e:
            print(f"[AutoSummarizer] 标记处理状态失败: {e}")
    
    async def force_summary(self, memory_ids: List[str]) -> Optional[str]:
        """
        手动触发总结（用于测试或特定需求）
        """
        try:
            # 获取指定的存储记忆
            memories = []
            for mid in memory_ids:
                memory = self.memory_store.get_memory_by_id(mid, "storage")
                if memory:
                    memories.append(memory)
            
            if len(memories) >= 2:
                await self._create_session_summary(memories)
                return f"已为 {len(memories)} 条记忆创建总结"
            else:
                return "记忆数量不足，至少需要2条记忆"
                
        except Exception as e:
            print(f"[AutoSummarizer] 手动总结失败: {e}")
            return None
    
    async def force_skill_extraction(self, thinking_id: str) -> Optional[str]:
        """
        手动触发技能提取
        """
        try:
            memory = self.memory_store.get_memory_by_id(thinking_id, "thinking")
            if memory:
                await self._extract_skill_from_thinking(memory)
                return f"已为思维记忆 {thinking_id[:8]} 提取技能"
            else:
                return "思维记忆不存在"
                
        except Exception as e:
            print(f"[AutoSummarizer] 手动提取技能失败: {e}")
            return None
