"""
深度思考记忆系统
- 保留原始信息精度，不做信息压缩
- 深度分析内容意图，提取结构化知识
- 记忆合并而非删除
- 精细分类：技能/思维/项目/规则
"""

import asyncio
from typing import List, Dict, Optional, Tuple
from datetime import datetime, timedelta
from dataclasses import dataclass, field
from enum import Enum
import json
import hashlib


class MemoryCategory(str, Enum):
    """记忆精细分类"""
    SKILL = "skill"           # 技能记忆：可复用的操作能力
    THINKING = "thinking"     # 思维记忆：思考过程、决策逻辑
    PROJECT = "project"       # 项目记忆：项目专属信息
    RULE = "rule"             # 规则记忆：约束、规范、最佳实践
    PREFERENCE = "preference" # 偏好记忆：用户习惯、偏好设置
    CONTEXT = "context"       # 上下文记忆：临时性上下文信息


@dataclass
class MemoryInsight:
    """深度思考提取的洞察"""
    category: MemoryCategory
    core_intent: str                    # 核心意图（一句话概括）
    structured_content: Dict            # 结构化内容
    workflow_steps: List[str] = field(default_factory=list)  # 流程步骤（如果是技能）
    decision_logic: str = ""            # 决策逻辑（如果是思维）
    constraints: List[str] = field(default_factory=list)     # 约束条件
    related_concepts: List[str] = field(default_factory=list) # 相关概念
    confidence: float = 0.0             # 置信度


@dataclass
class MemoryMergeResult:
    """记忆合并结果"""
    merged_memory_id: str
    source_memory_ids: List[str]
    merge_type: str  # "identical", "similar", "complementary"
    enhanced_content: str
    insights_gained: List[str]


class DeepReflectionEngine:
    """
    深度思考引擎
    
    核心原则：
    1. 不压缩信息，保留原始精度
    2. 深度分析内容意图
    3. 生成结构化流程图编码
    4. 合并而非删除重复记忆
    5. 精细分类存储
    """
    
    def __init__(self, memory_store, llm_facade):
        self.memory_store = memory_store
        self.llm = llm_facade
        self._running = False
        
        # 配置
        self.reflection_interval = 600  # 每10分钟进行一次深度反思
        self.merge_threshold = 0.85      # 相似度阈值
        
    async def initialize(self):
        """初始化"""
        await self.llm.initialize()
        print("[DeepReflection] 深度思考引擎初始化完成")
    
    async def start(self):
        """启动深度反思循环"""
        if self._running:
            return
        
        self._running = True
        asyncio.create_task(self._reflection_loop())
        print("[DeepReflection] 深度反思任务已启动")
    
    async def stop(self):
        """停止"""
        self._running = False
        print("[DeepReflection] 深度反思任务已停止")
    
    async def _reflection_loop(self):
        """深度反思主循环"""
        while self._running:
            try:
                await asyncio.sleep(self.reflection_interval)
                
                # 1. 扫描存储记忆进行深度分析
                await self._analyze_storage_memories()
                
                # 2. 检测并合并相似记忆
                await self._merge_similar_memories()
                
                # 3. 重新分类和结构化
                await self._restructure_memories()
                
            except asyncio.CancelledError:
                break
            except Exception as e:
                print(f"[DeepReflection] 反思循环出错: {e}")
    
    async def deep_analyze_content(self, content: str, context: Dict = None) -> MemoryInsight:
        """
        深度分析内容意图
        
        不压缩信息，而是：
        1. 理解核心意图
        2. 提取结构化知识
        3. 生成流程图编码
        4. 识别约束和决策点
        """
        prompt = f"""
请对以下内容进行深度分析，提取其真实意图和结构化知识。

【内容】
{content}

【分析要求】
1. **核心意图识别**：用一句话准确概括这段内容想要表达的核心意图
2. **内容分类判断**：判断属于以下哪种类型
   - skill: 可复用的技能/操作方法
   - thinking: 思考过程/决策逻辑
   - project: 项目专属信息
   - rule: 规则/约束/规范
   - preference: 用户偏好/习惯
   - context: 临时上下文

3. **结构化提取**：
   - 如果是技能：提取操作步骤、前置条件、预期结果
   - 如果是思维：提取决策逻辑、判断条件、推理过程
   - 如果是规则：提取约束条件、适用范围、例外情况
   - 如果是项目：提取项目背景、关键信息、关联关系

4. **流程图编码**：用伪代码或结构化格式描述执行流程

5. **相关概念**：提取相关的技术概念、工具、方法

请以JSON格式返回：
{{
    "category": "skill|thinking|project|rule|preference|context",
    "core_intent": "核心意图描述",
    "structured_content": {{
        "type_specific_fields": "根据category填充相应字段"
    }},
    "workflow_steps": ["步骤1", "步骤2", "步骤3"],
    "decision_logic": "如果是thinking类型，描述决策逻辑",
    "constraints": ["约束1", "约束2"],
    "related_concepts": ["概念1", "概念2"],
    "confidence": 0.95
}}
"""
        
        try:
            result = await self.llm.chat_completion(
                messages=[{"role": "user", "content": prompt}],
                temperature=0.2,
                max_tokens=2000  # 允许更长的输出以保留细节
            )
            
            if result:
                cleaned = result.replace("```json", "").replace("```", "").strip()
                data = json.loads(cleaned)
                
                return MemoryInsight(
                    category=MemoryCategory(data.get("category", "context")),
                    core_intent=data.get("core_intent", ""),
                    structured_content=data.get("structured_content", {}),
                    workflow_steps=data.get("workflow_steps", []),
                    decision_logic=data.get("decision_logic", ""),
                    constraints=data.get("constraints", []),
                    related_concepts=data.get("related_concepts", []),
                    confidence=data.get("confidence", 0.0)
                )
        except Exception as e:
            print(f"[DeepReflection] 深度分析失败: {e}")
        
        # 返回默认洞察
        return MemoryInsight(
            category=MemoryCategory.CONTEXT,
            core_intent=content[:100],
            structured_content={"original": content},
            confidence=0.5
        )
    
    async def _analyze_storage_memories(self):
        """分析存储记忆，生成深度洞察"""
        try:
            # 获取未分析的存储记忆
            memories = self.memory_store.query_by_type(
                query="",
                memory_type="storage",
                limit=50
            )
            
            for memory in memories:
                content = memory.get("content", "")
                memory_id = memory.get("memory_id")
                
                # 深度分析
                insight = await self.deep_analyze_content(content)
                
                # 根据分类保存到相应的记忆类型
                if insight.confidence > 0.7:
                    await self._save_structured_memory(insight, memory)
                    
        except Exception as e:
            print(f"[DeepReflection] 分析存储记忆失败: {e}")
    
    async def _save_structured_memory(self, insight: MemoryInsight, source_memory: Dict):
        """保存结构化记忆"""
        user_id = source_memory.get("user_id", "unknown")
        project_id = source_memory.get("project_id", "")
        
        # 构建结构化内容
        structured_content = {
            "core_intent": insight.core_intent,
            "original_content": source_memory.get("content"),
            "structured_data": insight.structured_content,
            "workflow": insight.workflow_steps,
            "constraints": insight.constraints,
            "related_concepts": insight.related_concepts
        }
        
        # 根据分类选择存储方式
        if insight.category == MemoryCategory.SKILL:
            self.memory_store.save_skill_memory(
                content=json.dumps(structured_content, ensure_ascii=False, indent=2),
                user_id=user_id,
                source_thinking=[source_memory.get("memory_id")],
                skill_type="workflow" if insight.workflow_steps else "knowledge",
                tags=insight.related_concepts + ["auto_extracted"],
                scope="global" if insight.confidence > 0.9 else "project",
                project_id=project_id
            )
        elif insight.category == MemoryCategory.THINKING:
            self.memory_store.save_thinking_memory(
                content=json.dumps(structured_content, ensure_ascii=False, indent=2),
                user_id=user_id,
                source_memories=[source_memory.get("memory_id")],
                summary_type="deep_analysis",
                key_points=insight.workflow_steps or [insight.core_intent],
                scope="project",
                project_id=project_id
            )
        elif insight.category == MemoryCategory.RULE:
            # 规则记忆作为特殊的技能记忆存储
            self.memory_store.save_skill_memory(
                content=json.dumps(structured_content, ensure_ascii=False, indent=2),
                user_id=user_id,
                source_thinking=[source_memory.get("memory_id")],
                skill_type="best_practice",
                tags=["rule", "constraint"] + insight.related_concepts,
                scope="global",
                project_id="global"
            )
    
    async def _merge_similar_memories(self):
        """合并相似记忆（而非删除）"""
        try:
            # 获取所有记忆
            all_memories = self.memory_store.query_by_type(
                query="",
                memory_type="all",
                limit=1000
            )
            
            # 按用户和类型分组
            grouped = {}
            for mem in all_memories:
                key = f"{mem.get('user_id')}:{mem.get('memory_type')}"
                if key not in grouped:
                    grouped[key] = []
                grouped[key].append(mem)
            
            # 在每组内检测相似性
            for group_key, memories in grouped.items():
                if len(memories) < 2:
                    continue
                
                # 计算相似度并合并
                merged_groups = await self._calculate_similarity_and_group(memories)
                
                for group in merged_groups:
                    if len(group) > 1:
                        await self._merge_memory_group(group)
                        
        except Exception as e:
            print(f"[DeepReflection] 合并记忆失败: {e}")
    
    async def _calculate_similarity_and_group(self, memories: List[Dict]) -> List[List[Dict]]:
        """计算相似度并分组"""
        # 使用简单的内容哈希和语义相似度
        groups = []
        used = set()
        
        for i, mem1 in enumerate(memories):
            if mem1.get("memory_id") in used:
                continue
            
            group = [mem1]
            used.add(mem1.get("memory_id"))
            
            for j, mem2 in enumerate(memories[i+1:], start=i+1):
                if mem2.get("memory_id") in used:
                    continue
                
                similarity = await self._calculate_semantic_similarity(
                    mem1.get("content", ""),
                    mem2.get("content", "")
                )
                
                if similarity > self.merge_threshold:
                    group.append(mem2)
                    used.add(mem2.get("memory_id"))
            
            groups.append(group)
        
        return groups
    
    async def _calculate_semantic_similarity(self, content1: str, content2: str) -> float:
        """计算语义相似度"""
        # 如果内容完全相同
        if content1 == content2:
            return 1.0
        
        # 使用LLM判断相似度
        prompt = f"""
请判断以下两段内容的语义相似度（0-1之间）：

【内容A】
{content1[:500]}

【内容B】
{content2[:500]}

请只返回一个0-1之间的数字，表示相似度：
"""
        
        try:
            result = await self.llm.chat_completion(
                messages=[{"role": "user", "content": prompt}],
                temperature=0.1,
                max_tokens=10
            )
            
            similarity = float(result.strip())
            return min(max(similarity, 0.0), 1.0)
        except:
            # 回退到简单相似度计算
            return self._simple_similarity(content1, content2)
    
    def _simple_similarity(self, content1: str, content2: str) -> float:
        """简单相似度计算（Jaccard）"""
        set1 = set(content1.lower().split())
        set2 = set(content2.lower().split())
        
        if not set1 or not set2:
            return 0.0
        
        intersection = len(set1 & set2)
        union = len(set1 | set2)
        
        return intersection / union if union > 0 else 0.0
    
    async def _merge_memory_group(self, group: List[Dict]):
        """合并记忆组"""
        if len(group) < 2:
            return
        
        # 深度分析合并后的内容
        combined_content = "\n\n===\n\n".join([m.get("content", "") for m in group])
        
        prompt = f"""
请将以下内容合并为一份完整的记忆，保留所有关键信息，去除重复：

{combined_content[:3000]}

要求：
1. 保留所有关键细节，不做信息压缩
2. 识别并合并重复的部分
3. 补充相互之间的关联信息
4. 输出完整的合并后内容
"""
        
        try:
            merged_content = await self.llm.chat_completion(
                messages=[{"role": "user", "content": prompt}],
                temperature=0.2,
                max_tokens=2000
            )
            
            if merged_content:
                # 创建合并后的记忆
                first_mem = group[0]
                user_id = first_mem.get("user_id", "unknown")
                
                # 保存合并后的记忆
                merged_id = self.memory_store.save_storage_memory(
                    content=merged_content,
                    user_id=user_id,
                    scope=first_mem.get("scope", "project"),
                    project_id=first_mem.get("project_id", ""),
                    tags=["merged"] + first_mem.get("tags", [])
                )
                
                # 标记源记忆为已合并（不删除，只添加标记）
                for mem in group:
                    self.memory_store.update_memory_metadata(
                        memory_id=mem.get("memory_id"),
                        metadata={
                            "merged_into": merged_id,
                            "merge_status": "merged",
                            "merge_time": datetime.now().isoformat()
                        }
                    )
                
                print(f"[DeepReflection] 已合并 {len(group)} 条记忆为 {merged_id[:8]}")
                
        except Exception as e:
            print(f"[DeepReflection] 合并记忆组失败: {e}")
    
    async def _restructure_memories(self):
        """重新结构化记忆"""
        # 定期检查并优化记忆结构
        pass
    
    async def analyze_memory_relationships(self, memory_id: str) -> Dict:
        """分析记忆之间的关系"""
        # 获取指定记忆
        memory = self.memory_store.get_memory_by_id(memory_id)
        if not memory:
            return {}
        
        # 查找相关记忆
        related = self.memory_store.query(
            query=memory.get("content", "")[:200],
            limit=10
        )
        
        # 分析关系
        relationships = []
        for rel_mem in related:
            if rel_mem.get("memory_id") == memory_id:
                continue
            
            similarity = await self._calculate_semantic_similarity(
                memory.get("content", ""),
                rel_mem.get("content", "")
            )
            
            if similarity > 0.6:
                relationships.append({
                    "memory_id": rel_mem.get("memory_id"),
                    "similarity": similarity,
                    "relationship_type": "related" if similarity < 0.85 else "similar"
                })
        
        return {
            "memory_id": memory_id,
            "relationships": relationships
        }
