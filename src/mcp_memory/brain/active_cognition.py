"""
主动认知层
实现注意力系统、好奇心引擎和假设生成器
让AI能够主动观察、学习和推理
"""

from typing import List, Dict, Any, Optional, Tuple
from datetime import datetime
from dataclasses import dataclass
import random
import re


@dataclass
class AttentionScore:
    """注意力评分"""
    total_score: float
    novelty: float
    relevance: float
    emotion: float
    complexity: float
    importance: float


@dataclass
class Hypothesis:
    """假设"""
    hypothesis_id: str
    description: str
    confidence: float
    evidence: List[str]
    test_method: str
    created_at: datetime

    def to_dict(self) -> Dict[str, Any]:
        return {
            "hypothesis_id": self.hypothesis_id,
            "description": self.description,
            "confidence": self.confidence,
            "evidence": self.evidence,
            "test_method": self.test_method,
            "created_at": self.created_at.isoformat()
        }


class AttentionSystem:
    """
    注意力系统
    主动选择重要信息进行记忆
    """

    def __init__(self):
        # 注意力权重
        self.attention_weights = {
            "novelty": 0.25,      # 新颖性权重
            "relevance": 0.30,    # 相关性权重
            "emotion": 0.15,       # 情感强度权重
            "complexity": 0.15,    # 复杂度权重
            "importance": 0.15     # 重要性权重
        }

        # 注意力阈值
        self.attention_threshold = 0.3

        # 历史注意记录
        self.attention_history: List[Dict[str, Any]] = []

    def calculate_attention_score(self, content: str, context: Dict[str, Any] = None) -> AttentionScore:
        """
        计算内容的注意力分数

        Args:
            content: 内容文本
            context: 上下文信息（如当前任务、用户意图等）

        Returns:
            注意力评分对象
        """
        # 计算各个维度

        # 1. 新颖性 - 基于历史模式
        novelty = self._calculate_novelty(content)

        # 2. 相关性 - 基于上下文
        relevance = self._calculate_relevance(content, context)

        # 3. 情感强度 - 基于情感词
        emotion = self._calculate_emotion_intensity(content)

        # 4. 复杂度 - 基于信息量
        complexity = self._calculate_complexity(content)

        # 5. 重要性 - 基于关键词
        importance = self._calculate_importance(content)

        # 加权总分
        total_score = (
            self.attention_weights["novelty"] * novelty +
            self.attention_weights["relevance"] * relevance +
            self.attention_weights["emotion"] * emotion +
            self.attention_weights["complexity"] * complexity +
            self.attention_weights["importance"] * importance
        )

        score = AttentionScore(
            total_score=total_score,
            novelty=novelty,
            relevance=relevance,
            emotion=emotion,
            complexity=complexity,
            importance=importance
        )

        # 记录历史
        self.attention_history.append({
            "timestamp": datetime.now().isoformat(),
            "content_snippet": content[:100],
            "score": total_score,
            "breakdown": {
                "novelty": novelty,
                "relevance": relevance,
                "emotion": emotion,
                "complexity": complexity,
                "importance": importance
            }
        })

        # 保持历史记录在合理范围内
        if len(self.attention_history) > 1000:
            self.attention_history = self.attention_history[-1000:]

        return score

    def _calculate_novelty(self, content: str) -> float:
        """计算新颖性"""
        # 简化实现：基于内容长度和词汇多样性
        if not self.attention_history:
            return 0.8  # 新系统，内容都较新颖

        # 检查与历史记录的相似性
        words = set(re.findall(r'\w+', content.lower()))
        if not words:
            return 0.5

        # 简化的新颖性评估
        novel_indicators = 0
        total_indicators = 0

        # 长内容通常更新颖（更多新信息）
        if len(content) > 200:
            novel_indicators += 1
        total_indicators += 1

        # 词汇多样性
        if len(words) / max(len(content.split()), 1) > 0.5:
            novel_indicators += 1
        total_indicators += 1

        return novel_indicators / total_indicators if total_indicators > 0 else 0.5

    def _calculate_relevance(self, content: str, context: Dict[str, Any] = None) -> float:
        """计算相关性"""
        if not context:
            return 0.5

        relevance_score = 0.5
        total_checks = 0

        # 与当前任务的相关性
        if "current_task" in context:
            task = context["current_task"].lower()
            content_lower = content.lower()
            if task in content_lower:
                relevance_score += 0.3
            total_checks += 1

        # 与用户意图的相关性
        if "user_intent" in context:
            intent = context["user_intent"].lower()
            content_lower = content.lower()
            if intent in content_lower:
                relevance_score += 0.2
            total_checks += 1

        # 归一化
        if total_checks > 0:
            relevance_score /= (total_checks + 1)

        return min(1.0, relevance_score)

    def _calculate_emotion_intensity(self, content: str) -> float:
        """计算情感强度"""
        # 情感词列表
        emotional_words = [
            "important", "urgent", "critical", "crucial", "vital",
            "爱", "恨", "喜欢", "讨厌", "重要", "紧急", "关键",
            "love", "hate", "like", "dislike", "excited", "worried",
            "兴奋", "担心", "快乐", "悲伤", "happy", "sad"
        ]

        content_lower = content.lower()
        emotional_count = sum(1 for word in emotional_words if word in content_lower)

        # 基于情感词数量计算强度
        if emotional_count == 0:
            return 0.1
        elif emotional_count == 1:
            return 0.3
        elif emotional_count == 2:
            return 0.5
        else:
            return 0.7

    def _calculate_complexity(self, content: str) -> float:
        """计算复杂度"""
        if not content:
            return 0.0

        # 基于多个指标
        sentences = content.split('.')
        avg_sentence_length = sum(len(s.split()) for s in sentences) / max(len(sentences), 1)

        complexity_score = 0.5

        # 句子长度
        if avg_sentence_length > 20:
            complexity_score += 0.2

        # 包含代码或技术内容
        if any(marker in content for marker in ["```", "function", "class", "def ", "const"]):
            complexity_score += 0.3

        # 包含复杂概念
        complex_concepts = ["architecture", "system", "algorithm", "framework", "design"]
        if any(concept in content.lower() for concept in complex_concepts):
            complexity_score += 0.2

        return min(1.0, complexity_score)

    def _calculate_importance(self, content: str) -> float:
        """计算重要性"""
        if not content:
            return 0.0

        # 重要关键词
        important_keywords = [
            "记住", "重要", "必须", "关键", "核心",
            "remember", "important", "must", "key", "critical",
            "note", "注意", "warning", "提示"
        ]

        content_lower = content.lower()
        important_count = sum(1 for kw in important_keywords if kw in content_lower)

        # 基于关键词数量
        if important_count == 0:
            return 0.3
        elif important_count == 1:
            return 0.6
        else:
            return 0.9

    def should_remember(self, content: str, context: Dict[str, Any] = None) -> Tuple[bool, AttentionScore]:
        """
        判断是否应该记忆这段内容

        Returns:
            (是否记忆, 注意力评分)
        """
        score = self.calculate_attention_score(content, context)
        should = score.total_score >= self.attention_threshold

        if should:
            print(f"[Attention] 内容值得记忆，分数: {score.total_score:.2f}")
        else:
            print(f"[Attention] 内容不值得记忆，分数: {score.total_score:.2f} (阈值: {self.attention_threshold})")

        return (should, score)

    def adjust_threshold(self, new_threshold: float):
        """调整注意力阈值"""
        self.attention_threshold = max(0.0, min(1.0, new_threshold))
        print(f"[Attention] 注意力阈值调整为: {self.attention_threshold:.2f}")


class CuriosityEngine:
    """
    好奇心引擎
    驱动AI主动学习和探索
    """

    def __init__(self):
        self.questions: List[Dict[str, Any]] = []
        self.knowledge_gaps: List[str] = []
        self.curiosity_score = 0.75  # 好奇心水平
        self.exploration_history: List[str] = []

    def generate_questions(self, context: str, current_knowledge: List[str] = None) -> List[str]:
        """
        基于上下文生成待探索问题

        Args:
            context: 当前上下文
            current_knowledge: 已掌握的知识

        Returns:
            生成的问题列表
        """
        if current_knowledge is None:
            current_knowledge = []

        questions = []

        # 分析上下文中的概念
        concepts = self._extract_concepts(context)

        # 为每个概念生成问题
        for concept in concepts:
            # 检查是否已经有相关知识
            has_knowledge = any(concept.lower() in k.lower() for k in current_knowledge)

            if not has_knowledge:
                # 生成多样化的问题类型
                question_types = [
                    f"{concept} 是什么？",
                    f"如何实现 {concept}？",
                    f"{concept} 的应用场景是什么？",
                    f"{concept} 的最佳实践是什么？",
                    f"{concept} 有什么局限性？"
                ]

                # 根据好奇心水平选择问题
                num_questions = min(len(question_types), int(self.curiosity_score * 3) + 1)
                selected_questions = random.sample(question_types, num_questions)

                for q in selected_questions:
                    questions.append(q)

        # 记录问题
        for q in questions:
            self.questions.append({
                "question": q,
                "generated_at": datetime.now().isoformat(),
                "context": context[:100],
                "priority": random.uniform(0.5, 1.0)
            })

        # 限制问题数量
        if len(self.questions) > 500:
            self.questions = self.questions[-500:]

        print(f"[Curiosity] 生成了 {len(questions)} 个待探索问题")
        return questions[:10]  # 返回前10个最相关的问题

    def _extract_concepts(self, text: str) -> List[str]:
        """从文本中提取概念"""
        # 简化的概念提取：提取名词短语
        # 实际实现可以使用NLP工具
        words = text.split()

        # 常见技术概念模式
        concept_patterns = [
            r'[A-Z][a-zA-Z]+',  # 大写开头的词（类名、函数名等）
            r'\w+系统',  # xxx系统
            r'\w+引擎',   # xxx引擎
            r'\w+算法',   # xxx算法
            r'\w+模式',   # xxx模式
        ]

        concepts = set()
        for pattern in concept_patterns:
            matches = re.findall(pattern, text)
            concepts.update(matches)

        return list(concepts)

    def identify_knowledge_gaps(self, current_knowledge: List[str], domain: str = None) -> List[str]:
        """
        识别知识缺口

        Args:
            current_knowledge: 当前掌握的知识
            domain: 特定领域（可选）

        Returns:
            知识缺口列表
        """
        # 定义各领域的核心概念
        domain_concepts = {
            "memory": ["记忆巩固", "遗忘机制", "关联网络", "价值判断"],
            "ai": ["神经网络", "强化学习", "认知架构", "元学习"],
            "programming": ["算法", "设计模式", "代码优化", "系统架构"],
            "general": ["逻辑推理", "问题解决", "创造性思维", "批判性思维"]
        }

        target_domain = domain or "general"
        concepts = domain_concepts.get(target_domain, [])

        gaps = []
        for concept in concepts:
            # 检查是否有相关知识
            has_knowledge = any(concept in k for k in current_knowledge)
            if not has_knowledge:
                gaps.append(f"缺乏对 {concept} 的深入理解")

        self.knowledge_gaps = gaps
        print(f"[Curiosity] 识别到 {len(gaps)} 个知识缺口")
        return gaps

    def satisfy_curiosity(self, question: str, answer: str):
        """
        满足好奇心，记录学习结果

        Args:
            question: 已回答的问题
            answer: 问题答案
        """
        # 记录探索结果
        self.exploration_history.append({
            "question": question,
            "answer": answer[:200],  # 保存答案摘要
            "learned_at": datetime.now().isoformat()
        })

        # 更新好奇心水平（适度降低，避免过度好奇）
        self.curiosity_score = max(0.5, self.curiosity_score * 0.98)

        # 从问题列表中移除
        self.questions = [q for q in self.questions if q["question"] != question]

        print(f"[Curiosity] 满足了好奇心: {question[:50]}...")
        print(f"[Curiosity] 当前好奇心水平: {self.curiosity_score:.2f}")

    def increase_curiosity(self, factor: float = 0.1):
        """增加好奇心水平"""
        self.curiosity_score = min(1.0, self.curiosity_score + factor)
        print(f"[Curiosity] 好奇心水平增加到: {self.curiosity_score:.2f}")

    def get_top_questions(self, limit: int = 5) -> List[Dict[str, Any]]:
        """获取优先级最高的问题"""
        sorted_questions = sorted(
            self.questions,
            key=lambda q: q["priority"],
            reverse=True
        )
        return sorted_questions[:limit]


class HypothesisGenerator:
    """
    假设生成器
    实现主动推理和假设验证
    """

    def __init__(self):
        self.hypotheses: List[Hypothesis] = []
        self.validation_history: List[Dict[str, Any]] = []

    def generate_hypotheses(self, context: str, observations: List[str] = None) -> List[Hypothesis]:
        """
        基于上下文生成可验证的假设

        Args:
            context: 当前上下文
            observations: 观察到的事实

        Returns:
            生成的假设列表
        """
        if observations is None:
            observations = []

        hypotheses = []

        # 生成不同类型的假设
        hypothesis_types = [
            self._generate_causal_hypothesis,
            self._generate_pattern_hypothesis,
            self._generate_optimization_hypothesis,
            self._generate_explanatory_hypothesis
        ]

        for gen_func in hypothesis_types:
            try:
                hypothesis = gen_func(context, observations)
                if hypothesis:
                    hypotheses.append(hypothesis)
            except Exception as e:
                print(f"[Hypothesis] 生成假设失败: {e}")

        # 限制假设数量
        if len(self.hypotheses) > 100:
            self.hypotheses = self.hypotheses[-100:]

        print(f"[Hypothesis] 生成了 {len(hypotheses)} 个假设")
        return hypotheses

    def _generate_causal_hypothesis(self, context: str, observations: List[str]) -> Optional[Hypothesis]:
        """生成因果假设"""
        # 简化实现：基于上下文生成可能的因果关系
        if "效率" in context.lower() or "性能" in context.lower():
            return Hypothesis(
                hypothesis_id=f"causal_{datetime.now().timestamp()}",
                description="优化记忆结构可以提高检索效率",
                confidence=0.7,
                evidence=["记忆结构影响检索速度", "向量数据库的性能优化"],
                test_method="对比不同记忆结构的检索速度",
                created_at=datetime.now()
            )
        return None

    def _generate_pattern_hypothesis(self, context: str, observations: List[str]) -> Optional[Hypothesis]:
        """生成模式假设"""
        # 基于观察生成模式假设
        if len(observations) >= 2:
            return Hypothesis(
                hypothesis_id=f"pattern_{datetime.now().timestamp()}",
                description=f"观察到的模式: {observations[0][:50]} 和 {observations[1][:50]} 存在关联",
                confidence=0.6,
                evidence=observations[:2],
                test_method="验证多个实例中的模式一致性",
                created_at=datetime.now()
            )
        return None

    def _generate_optimization_hypothesis(self, context: str, observations: List[str]) -> Optional[Hypothesis]:
        """生成优化假设"""
        # 基于上下文提出优化建议
        if "改进" in context.lower() or "优化" in context.lower():
            return Hypothesis(
                hypothesis_id=f"optimization_{datetime.now().timestamp()}",
                description="实施新的记忆管理策略可以提升系统性能",
                confidence=0.75,
                evidence=["当前系统可以进一步优化", "新的管理策略已验证"],
                test_method="A/B测试新旧策略的性能差异",
                created_at=datetime.now()
            )
        return None

    def _generate_explanatory_hypothesis(self, context: str, observations: List[str]) -> Optional[Hypothesis]:
        """生成解释性假设"""
        # 试图解释观察到的现象
        if "为什么" in context.lower() or "原因" in context.lower():
            return Hypothesis(
                hypothesis_id=f"explanatory_{datetime.now().timestamp()}",
                description="某些记忆被频繁访问是因为它们与核心任务高度相关",
                confidence=0.65,
                evidence=["高频记忆通常与重要任务相关", "记忆访问模式反映任务重要性"],
                test_method="分析高频记忆的内容特征和任务关联",
                created_at=datetime.now()
            )
        return None

    def test_hypothesis(self, hypothesis: Hypothesis, test_data: Dict[str, Any] = None) -> bool:
        """
        验证假设

        Args:
            hypothesis: 要验证的假设
            test_data: 测试数据

        Returns:
            假设是否成立
        """
        print(f"[Hypothesis] 正在验证假设: {hypothesis.description[:50]}...")

        # 简化的验证逻辑
        # 实际实现应该执行具体的测试方法
        is_valid = False

        if test_data:
            # 基于测试数据判断
            if "success_rate" in test_data and test_data["success_rate"] > 0.7:
                is_valid = True
            elif "evidence_support" in test_data:
                is_valid = test_data["evidence_support"]
            else:
                # 默认有一定概率验证成功
                is_valid = random.random() < hypothesis.confidence
        else:
            # 没有测试数据时，基于置信度判断
            is_valid = random.random() < hypothesis.confidence

        # 记录验证历史
        self.validation_history.append({
            "hypothesis_id": hypothesis.hypothesis_id,
            "description": hypothesis.description,
            "is_valid": is_valid,
            "tested_at": datetime.now().isoformat(),
            "test_data": test_data
        })

        if is_valid:
            print(f"[Hypothesis] 假设验证通过 ✓")
            # 更新假设置信度
            hypothesis.confidence = min(1.0, hypothesis.confidence + 0.1)
        else:
            print(f"[Hypothesis] 假设验证失败 ✗")
            # 降低假设置信度
            hypothesis.confidence = max(0.0, hypothesis.confidence - 0.2)

        return is_valid

    def get_validated_hypotheses(self) -> List[Hypothesis]:
        """获取已验证的假设"""
        return [h for h in self.hypotheses if h.confidence > 0.7]

    def get_pending_hypotheses(self) -> List[Hypothesis]:
        """获取待验证的假设"""
        return [h for h in self.hypotheses if h.confidence <= 0.7]
