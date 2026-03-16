"""
智能体处理器
将智能体配置集成到记忆系统底层，使AI按照智能体规则处理记忆
"""

import json
import os
from typing import Dict, List, Optional, Any
from datetime import datetime


class MemoryAgentProcessor:
    """
    记忆智能体处理器
    
    职责：
    1. 加载智能体配置
    2. 在记忆操作时应用智能体规则
    3. 确保不压缩信息、深度分析、精细分类
    4. 处理记忆合并而非删除
    """
    
    def __init__(self, agent_config_path: Optional[str] = None):
        self.agent_config = None
        self.system_prompt = ""
        self.capabilities = []
        self.rules = {}
        
        # 默认智能体配置路径
        if agent_config_path is None:
            agent_config_path = os.path.join(
                os.path.dirname(__file__), 
                "..", "..", "..", 
                ".trae", "agents", "mcp-memory-agent.json"
            )
        
        self.config_path = agent_config_path
        self._load_config()
    
    def _load_config(self):
        """加载智能体配置"""
        try:
            if os.path.exists(self.config_path):
                with open(self.config_path, 'r', encoding='utf-8') as f:
                    self.agent_config = json.load(f)
                    self.system_prompt = self.agent_config.get("system_prompt", "")
                    self.capabilities = self.agent_config.get("capabilities", [])
                    self._parse_rules()
                    print(f"[MemoryAgent] 智能体配置加载成功: {self.agent_config.get('name')}")
            else:
                print(f"[MemoryAgent] 智能体配置不存在: {self.config_path}")
                self._use_default_config()
        except Exception as e:
            print(f"[MemoryAgent] 加载智能体配置失败: {e}")
            self._use_default_config()
    
    def _use_default_config(self):
        """使用默认配置"""
        self.system_prompt = """
你是 MCP 记忆系统智能体，专门帮助用户管理和使用 MCP 记忆系统。

## 核心原则
1. **不压缩信息** - 保留原始记忆的所有细节和精度
2. **深度分析** - 深度思考内容意图，提取结构化知识
3. **精细分类** - 根据内容意图准确分类到6种记忆类型
4. **记忆合并** - 相似记忆合并为增强版，而非删除

## 记忆分类体系（6种类型）
1. **技能记忆 (skill)** - 可复用的操作能力、工作流
2. **思维记忆 (thinking)** - 思考过程、决策逻辑
3. **项目记忆 (project)** - 项目专属信息
4. **规则记忆 (rule)** - 约束、规范、最佳实践
5. **偏好记忆 (preference)** - 用户习惯、偏好设置
6. **上下文记忆 (context)** - 临时性上下文信息
"""
        self.capabilities = [
            "深度思考内容意图",
            "精细分类（6种记忆类型）",
            "记忆合并（保留源记忆）",
            "信息精度保留"
        ]
    
    def _parse_rules(self):
        """解析智能体规则"""
        self.rules = {
            "no_compression": True,  # 不压缩信息
            "deep_analysis": True,   # 深度分析
            "fine_grained_classification": True,  # 精细分类
            "merge_instead_of_delete": True,  # 合并而非删除
            "language": "zh",  # 使用中文
        }
    
    def process_before_write(self, content: str, memory_type: str = "storage", 
                            scope: str = "project", tags: List[str] = None) -> Dict[str, Any]:
        """
        在写入记忆前应用智能体规则
        
        返回处理后的记忆数据
        """
        processed = {
            "content": content,
            "memory_type": memory_type,
            "scope": scope,
            "tags": tags or [],
            "metadata": {}
        }
        
        # 应用不压缩原则 - 保留原始内容
        if self.rules.get("no_compression"):
            processed["metadata"]["original_content"] = content
            processed["metadata"]["compression_applied"] = False
        
        # 应用深度分析 - 分析内容意图
        if self.rules.get("deep_analysis"):
            intent_analysis = self._analyze_content_intent(content)
            processed["metadata"]["intent_analysis"] = intent_analysis
        
        # 应用精细分类 - 确定记忆类型
        if self.rules.get("fine_grained_classification"):
            suggested_type = self._classify_memory(content)
            if memory_type == "storage" and suggested_type != "storage":
                # 如果建议更具体的分类，记录下来
                processed["metadata"]["suggested_type"] = suggested_type
        
        # 添加智能体标记
        processed["metadata"]["agent_processed"] = True
        processed["metadata"]["processed_at"] = datetime.now().isoformat()
        processed["metadata"]["agent_capabilities"] = self.capabilities
        
        return processed
    
    def process_after_read(self, memories: List[Dict]) -> List[Dict]:
        """
        在读取记忆后应用智能体规则
        
        例如：去重、排序、增强等
        """
        if not memories:
            return memories
        
        # 应用合并原则 - 标记已合并的记忆
        if self.rules.get("merge_instead_of_delete"):
            for mem in memories:
                metadata = mem.get("metadata", {})
                if metadata.get("merge_status") == "merged_into":
                    # 添加标记，但保留记忆
                    mem["is_merged"] = True
                    mem["merged_into_id"] = metadata.get("merged_into_id")
        
        return memories
    
    def _analyze_content_intent(self, content: str) -> Dict[str, Any]:
        """
        分析内容意图
        
        简单的启发式分析，实际应由LLM进行深度分析
        """
        intent = {
            "core_intent": "",
            "category_hints": [],
            "key_elements": []
        }
        
        content_lower = content.lower()
        
        # 检测技能标记
        if any(kw in content for kw in ["【技能】", "skill:", "流程", "步骤"]):
            intent["category_hints"].append("skill")
            intent["core_intent"] = "记录可复用的操作技能"
        
        # 检测思维标记
        elif any(kw in content for kw in ["【思维】", "thinking:", "决策", "分析"]):
            intent["category_hints"].append("thinking")
            intent["core_intent"] = "记录思考过程或决策逻辑"
        
        # 检测规则标记
        elif any(kw in content for kw in ["【规则】", "rule:", "规范", "约束"]):
            intent["category_hints"].append("rule")
            intent["core_intent"] = "记录规则或约束"
        
        # 检测项目标记
        elif any(kw in content for kw in ["【项目】", "project:", "项目"]):
            intent["category_hints"].append("project")
            intent["core_intent"] = "记录项目专属信息"
        
        # 检测偏好标记
        elif any(kw in content for kw in ["【偏好】", "preference:", "偏好", "习惯"]):
            intent["category_hints"].append("preference")
            intent["core_intent"] = "记录用户偏好或习惯"
        
        else:
            intent["category_hints"].append("context")
            intent["core_intent"] = "记录上下文信息"
        
        # 提取关键元素（简单的关键词提取）
        lines = content.split('\n')
        for line in lines[:5]:  # 只看前5行
            if line.strip() and not line.startswith('【'):
                intent["key_elements"].append(line.strip()[:50])
        
        return intent
    
    def _classify_memory(self, content: str) -> str:
        """
        对记忆进行分类
        
        返回建议的记忆类型
        """
        content_lower = content.lower()
        
        # 技能记忆特征
        if any(kw in content for kw in ["【技能】", "skill:", "流程", "步骤", "操作", "方法"]):
            return "skill"
        
        # 思维记忆特征
        if any(kw in content for kw in ["【思维】", "thinking:", "决策", "分析", "推理", "思考"]):
            return "thinking"
        
        # 规则记忆特征
        if any(kw in content for kw in ["【规则】", "rule:", "规范", "约束", "标准", "禁止"]):
            return "rule"
        
        # 项目记忆特征
        if any(kw in content for kw in ["【项目】", "project:", "项目", "架构", "技术栈"]):
            return "project"
        
        # 偏好记忆特征
        if any(kw in content for kw in ["【偏好】", "preference:", "偏好", "习惯", "喜欢"]):
            return "preference"
        
        # 默认为上下文记忆
        return "context"
    
    def should_merge_memories(self, mem1: Dict, mem2: Dict) -> bool:
        """
        判断两个记忆是否应该合并
        
        基于智能体规则判断
        """
        # 检查是否是同一用户
        if mem1.get("user_id") != mem2.get("user_id"):
            return False
        
        # 检查内容相似度（简单版本）
        content1 = mem1.get("content", "")
        content2 = mem2.get("content", "")
        
        # 如果内容完全相同，应该合并
        if content1 == content2:
            return True
        
        # 计算简单相似度
        words1 = set(content1.lower().split())
        words2 = set(content2.lower().split())
        
        if not words1 or not words2:
            return False
        
        intersection = len(words1 & words2)
        union = len(words1 | words2)
        similarity = intersection / union if union > 0 else 0
        
        # 相似度超过0.85，建议合并
        return similarity > 0.85
    
    def get_system_prompt(self) -> str:
        """获取智能体系统提示词"""
        return self.system_prompt
    
    def get_capabilities(self) -> List[str]:
        """获取智能体能力列表"""
        return self.capabilities
    
    def is_compression_enabled(self) -> bool:
        """是否启用信息压缩（应该返回False）"""
        return not self.rules.get("no_compression", True)
    
    def is_deep_analysis_enabled(self) -> bool:
        """是否启用深度分析"""
        return self.rules.get("deep_analysis", True)
    
    def is_fine_grained_classification_enabled(self) -> bool:
        """是否启用精细分类"""
        return self.rules.get("fine_grained_classification", True)
