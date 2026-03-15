"""
元认知层
实现对认知过程的监控和优化
让AI能够理解自己的认知状态并主动优化
"""

from typing import List, Dict, Any, Optional
from datetime import datetime, timedelta
from dataclasses import dataclass, field
from enum import Enum
import statistics


class CognitiveBias(str, Enum):
    """认知偏差类型"""
    CONFIRMATION_BIAS = "confirmation_bias"        # 确认偏差
    RECENCY_BIAS = "recency_bias"                  # 近因偏差
    AVAILABILITY_BIAS = "availability_bias"        # 可得性偏差
    ANCHORING_BIAS = "anchoring_bias"            # 锚定偏差
    OVERCONFIDENCE_BIAS = "overconfidence_bias"    # 过度自信偏差


@dataclass
class CognitivePerformance:
    """认知表现"""
    timestamp: datetime
    task_type: str
    success: bool
    accuracy: float
    time_taken: float  # 秒
    resources_used: Dict[str, Any] = field(default_factory=dict)
    errors: List[str] = field(default_factory=list)

    def to_dict(self) -> Dict[str, Any]:
        return {
            "timestamp": self.timestamp.isoformat(),
            "task_type": self.task_type,
            "success": self.success,
            "accuracy": self.accuracy,
            "time_taken": self.time_taken,
            "resources_used": self.resources_used,
            "errors": self.errors
        }


@dataclass
class MemoryStateReport:
    """记忆状态报告"""
    timestamp: datetime
    total_memories: int
    active_memories: int
    consolidated_memories: int
    decaying_memories: int
    forgotten_memories: int
    average_strength: float
    average_activation: float
    memory_growth_rate: float
    retrieval_success_rate: float


class MetacognitionSystem:
    """
    元认知系统
    监控和优化认知过程
    """

    def __init__(self):
        # 认知表现历史
        self.performance_history: List[CognitivePerformance] = []

        # 认知偏差检测
        self.detected_biases: List[Dict[str, Any]] = []

        # 当前认知状态
        self.current_state = {
            "focus_level": 0.8,
            "cognitive_load": 0.5,
            "confidence_level": 0.85,
            "learning_rate": 0.75,
            "mental_energy": 0.9
        }

        # 认知策略
        self.cognitive_strategies = {
            "information_filtering": 0.7,    # 信息过滤策略强度
            "memory_consolidation": 0.8,     # 记忆巩固策略强度
            "attention_allocation": 0.75,      # 注意力分配策略强度
            "retrieval_optimization": 0.8     # 检索优化策略强度
        }

        # 元认知日志
        self.metacognitive_logs: List[Dict[str, Any]] = []

    def monitor_memory_state(self, memory_traces: Dict[str, Any],
                         consolidation_system, value_system) -> MemoryStateReport:
        """
        监控记忆系统状态

        Args:
            memory_traces: 记忆痕迹字典
            consolidation_system: 记忆巩固系统
            value_system: 价值系统

        Returns:
            记忆状态报告
        """
        timestamp = datetime.now()
        total_memories = len(memory_traces)

        # 统计各状态记忆数量
        active_count = 0
        consolidated_count = 0
        decaying_count = 0
        forgotten_count = 0
        total_strength = 0.0
        total_activation = 0.0

        for trace_data in memory_traces.values():
            # 简化：从字典中获取状态
            state = trace_data.get("state", "unknown")

            if state == "active":
                active_count += 1
            elif state == "consolidated":
                consolidated_count += 1
            elif state == "decaying":
                decaying_count += 1
            elif state == "forgotten":
                forgotten_count += 1

            total_strength += trace_data.get("strength", 0)
            total_activation += trace_data.get("activation", 0)

        # 计算平均值
        avg_strength = total_strength / total_memories if total_memories > 0 else 0
        avg_activation = total_activation / total_memories if total_memories > 0 else 0

        # 计算记忆增长率
        growth_rate = self._calculate_memory_growth_rate()

        # 计算检索成功率
        retrieval_rate = self._calculate_retrieval_success_rate()

        report = MemoryStateReport(
            timestamp=timestamp,
            total_memories=total_memories,
            active_memories=active_count,
            consolidated_memories=consolidated_count,
            decaying_memories=decaying_count,
            forgotten_memories=forgotten_count,
            average_strength=avg_strength,
            average_activation=avg_activation,
            memory_growth_rate=growth_rate,
            retrieval_success_rate=retrieval_rate
        )

        # 记录日志
        self._log_metacognitive_event(
            "memory_state_monitor",
            f"记忆系统监控: 总计{total_memories}, 活跃{active_count}, "
            f"巩固{consolidated_count}, 衰退{decaying_count}, "
            f"遗忘{forgotten_count}"
        )

        return report

    def _calculate_memory_growth_rate(self) -> float:
        """计算记忆增长率"""
        if len(self.performance_history) < 2:
            return 0.0

        # 获取最近的记忆相关表现
        memory_tasks = [p for p in self.performance_history
                       if p.task_type in ["memory_creation", "memory_storage"]]

        if len(memory_tasks) < 2:
            return 0.0

        # 计算过去7天的增长
        now = datetime.now()
        week_ago = now - timedelta(days=7)

        recent_tasks = [t for t in memory_tasks if t.timestamp >= week_ago]

        if not recent_tasks:
            return 0.0

        # 成功率作为增长率指标
        success_count = sum(1 for t in recent_tasks if t.success)
        growth_rate = success_count / len(recent_tasks) if recent_tasks else 0

        return growth_rate

    def _calculate_retrieval_success_rate(self) -> float:
        """计算检索成功率"""
        retrieval_tasks = [p for p in self.performance_history
                         if p.task_type == "memory_retrieval"]

        if not retrieval_tasks:
            return 0.8  # 默认值

        # 使用最近的20次检索
        recent_retrievals = retrieval_tasks[-20:]
        success_count = sum(1 for t in recent_retrievals if t.success)

        return success_count / len(recent_retrievals) if recent_retrievals else 0

    def assess_learning_efficiency(self) -> Dict[str, Any]:
        """
        评估学习效率

        Returns:
            学习效率指标
        """
        # 获取学习相关任务
        learning_tasks = [p for p in self.performance_history
                        if p.task_type in ["knowledge_acquisition", "skill_learning"]]

        if not learning_tasks:
            return {"message": "暂无学习数据"}

        # 过滤最近30天的任务
        now = datetime.now()
        month_ago = now - timedelta(days=30)
        recent_learning = [t for t in learning_tasks if t.timestamp >= month_ago]

        if not recent_learning:
            return {"message": "30天内无学习数据"}

        # 计算效率指标
        success_rate = sum(1 for t in recent_learning if t.success) / len(recent_learning)
        avg_accuracy = statistics.mean([t.accuracy for t in recent_learning])
        avg_time = statistics.mean([t.time_taken for t in recent_learning])

        # 计算学习曲线
        if len(recent_learning) >= 5:
            # 将任务分为前半和后半
            mid = len(recent_learning) // 2
            early_accuracy = statistics.mean([t.accuracy for t in recent_learning[:mid]])
            late_accuracy = statistics.mean([t.accuracy for t in recent_learning[mid:]])
            learning_curve = late_accuracy - early_accuracy
        else:
            learning_curve = 0.0

        # 识别最优学习时间
        optimal_hours = self._find_optimal_learning_times(recent_learning)

        return {
            "total_learning_tasks": len(learning_tasks),
            "recent_learning_tasks": len(recent_learning),
            "success_rate": success_rate,
            "average_accuracy": avg_accuracy,
            "average_time_seconds": avg_time,
            "learning_curve": learning_curve,
            "optimal_learning_hours": optimal_hours,
            "efficiency_score": (success_rate + avg_accuracy + learning_curve) / 3
        }

    def _find_optimal_learning_times(self, tasks: List[CognitivePerformance]) -> List[int]:
        """找出最优学习时间（小时）"""
        # 按小时统计成功率
        hour_performance = {}

        for task in tasks:
            hour = task.timestamp.hour
            if hour not in hour_performance:
                hour_performance[hour] = []

            hour_performance[hour].append(task.success)

        # 计算每小时的平均成功率
        hour_success_rates = {}
        for hour, results in hour_performance.items():
            if results:
                hour_success_rates[hour] = sum(results) / len(results)

        # 找出成功率最高的3个小时
        sorted_hours = sorted(hour_success_rates.items(),
                           key=lambda x: x[1],
                           reverse=True)

        return [hour for hour, rate in sorted_hours[:3]]

    def identify_cognitive_biases(self) -> List[CognitiveBias]:
        """
        识别认知偏差

        Returns:
            检测到的认知偏差列表
        """
        detected_biases = []

        # 1. 检查近因偏差
        recent_tasks = self.performance_history[-10:] if len(self.performance_history) >= 10 else []
        if recent_tasks:
            recent_success_rate = sum(1 for t in recent_tasks if t.success) / len(recent_tasks)

            # 与历史平均比较
            overall_success_rate = sum(1 for t in self.performance_history if t.success) / len(self.performance_history)

            if recent_success_rate - overall_success_rate > 0.2:
                detected_biases.append(CognitiveBias.RECENCY_BIAS)
                self.detected_biases.append({
                    "bias": CognitiveBias.RECENCY_BIAS.value,
                    "detected_at": datetime.now().isoformat(),
                    "severity": "moderate",
                    "description": "可能受到近因偏差影响，过分依赖最近的经验"
                })

        # 2. 检查过度自信偏差
        confidence_tasks = [t for t in self.performance_history
                          if t.task_type in ["prediction", "decision"]]

        if confidence_tasks:
            # 比较预期准确度和实际准确度
            predictions = [t.accuracy for t in confidence_tasks if t.success]
            failures = [t.accuracy for t in confidence_tasks if not t.success]

            if predictions and statistics.mean(predictions) - statistics.mean(failures) > 0.3:
                detected_biases.append(CognitiveBias.OVERCONFIDENCE_BIAS)
                self.detected_biases.append({
                    "bias": CognitiveBias.OVERCONFIDENCE_BIAS.value,
                    "detected_at": datetime.now().isoformat(),
                    "severity": "moderate",
                    "description": "可能存在过度自信偏差，高估自己的判断能力"
                })

        # 3. 检查确认偏差
        # 检查是否总是选择支持自己观点的信息
        if len(self.performance_history) >= 20:
            recent_20 = self.performance_history[-20:]
            success_pattern = [t.success for t in recent_20]

            # 检查是否有一段时间连续失败
            consecutive_failures = 0
            max_consecutive_failures = 0

            for success in success_pattern:
                if not success:
                    consecutive_failures += 1
                    max_consecutive_failures = max(max_consecutive_failures, consecutive_failures)
                else:
                    consecutive_failures = 0

            if max_consecutive_failures >= 5:
                detected_biases.append(CognitiveBias.CONFIRMATION_BIAS)
                self.detected_biases.append({
                    "bias": CognitiveBias.CONFIRMATION_BIAS.value,
                    "detected_at": datetime.now().isoformat(),
                    "severity": "high",
                    "description": "可能存在确认偏差，持续选择失败策略"
                })

        if detected_biases:
            print(f"[Metacognition] 检测到认知偏差: {[b.value for b in detected_biases]}")
        else:
            print(f"[Metacognition] 未检测到明显认知偏差")

        return detected_biases

    def optimize_cognitive_strategy(self) -> Dict[str, float]:
        """
        优化认知策略

        Returns:
            优化后的策略调整
        """
        adjustments = {}

        # 基于认知状态调整策略
        if self.current_state["cognitive_load"] > 0.8:
            # 认知负载高，减少信息处理
            adjustments["information_filtering"] = -0.1
            adjustments["attention_allocation"] = -0.05
            self._log_metacognitive_event(
                "strategy_optimization",
                "认知负载高，调整过滤策略"
            )

        if self.current_state["focus_level"] < 0.6:
            # 专注度低，增加注意力分配
            adjustments["attention_allocation"] = 0.1
            self._log_metacognitive_event(
                "strategy_optimization",
                "专注度低，调整注意力分配"
            )

        if self.current_state["confidence_level"] > 0.9:
            # 过度自信，增加验证
            adjustments["retrieval_optimization"] = -0.05
            self._log_metacognitive_event(
                "strategy_optimization",
                "置信度较高，增加验证步骤"
            )

        # 基于检测到的偏差调整策略
        biases = self.identify_cognitive_biases()

        for bias in biases:
            if bias == CognitiveBias.RECENCY_BIAS:
                # 减少对最近经验的依赖
                adjustments["memory_consolidation"] = 0.05
            elif bias == CognitiveBias.OVERCONFIDENCE_BIAS:
                # 增加验证步骤
                adjustments["retrieval_optimization"] = 0.1
            elif bias == CognitiveBias.CONFIRMATION_BIAS:
                # 增加信息多样性
                adjustments["information_filtering"] = 0.1

        # 应用调整
        for strategy, adjustment in adjustments.items():
            if strategy in self.cognitive_strategies:
                current_value = self.cognitive_strategies[strategy]
                new_value = max(0.0, min(1.0, current_value + adjustment))
                self.cognitive_strategies[strategy] = new_value
                print(f"[Metacognition] 策略调整: {strategy} {current_value:.2f} -> {new_value:.2f}")

        return adjustments

    def record_performance(self, performance: CognitivePerformance):
        """
        记录认知表现

        Args:
            performance: 认知表现数据
        """
        self.performance_history.append(performance)

        # 保持历史记录在合理范围内
        if len(self.performance_history) > 1000:
            self.performance_history = self.performance_history[-1000:]

        # 更新当前认知状态
        self._update_cognitive_state(performance)

        print(f"[Metacognition] 记录认知表现: {performance.task_type}, "
              f"成功: {performance.success}, 准确度: {performance.accuracy:.2f}")

    def _update_cognitive_state(self, performance: CognitivePerformance):
        """更新当前认知状态"""
        # 基于表现调整状态
        if performance.success:
            self.current_state["confidence_level"] = min(1.0,
                self.current_state["confidence_level"] + 0.02)
        else:
            self.current_state["confidence_level"] = max(0.0,
                self.current_state["confidence_level"] - 0.05)

        # 基于任务类型调整
        if performance.task_type == "memory_creation":
            self.current_state["cognitive_load"] = min(1.0,
                self.current_state["cognitive_load"] + 0.1)
        elif performance.task_type == "memory_retrieval":
            self.current_state["cognitive_load"] = max(0.0,
                self.current_state["cognitive_load"] - 0.05)

        # 恢复精神能量
        self.current_state["mental_energy"] = min(1.0,
            self.current_state["mental_energy"] + 0.01)

    def _log_metacognitive_event(self, event_type: str, message: str):
        """记录元认知事件"""
        log_entry = {
            "timestamp": datetime.now().isoformat(),
            "event_type": event_type,
            "message": message,
            "current_state": self.current_state.copy()
        }
        self.metacognitive_logs.append(log_entry)

        # 限制日志数量
        if len(self.metacognitive_logs) > 500:
            self.metacognitive_logs = self.metacognitive_logs[-500:]

    def get_comprehensive_report(self) -> Dict[str, Any]:
        """
        获取综合报告

        Returns:
            包含所有元认知信息的报告
        """
        recent_performance = self.performance_history[-20:] if self.performance_history else []

        return {
            "current_state": self.current_state,
            "cognitive_strategies": self.cognitive_strategies,
            "performance_summary": {
                "total_tasks": len(self.performance_history),
                "recent_tasks": len(recent_performance),
                "recent_success_rate": sum(1 for t in recent_performance if t.success) / len(recent_performance)
                if recent_performance else 0,
                "recent_average_accuracy": statistics.mean([t.accuracy for t in recent_performance])
                if recent_performance else 0
            },
            "detected_biases": [b["bias"] for b in self.detected_biases[-10:]],
            "learning_efficiency": self.assess_learning_efficiency(),
            "recommendations": self._generate_recommendations()
        }

    def _generate_recommendations(self) -> List[str]:
        """生成优化建议"""
        recommendations = []

        # 基于认知状态
        if self.current_state["cognitive_load"] > 0.8:
            recommendations.append("认知负载较高，建议增加休息间隔")

        if self.current_state["focus_level"] < 0.6:
            recommendations.append("专注度较低，建议调整工作环境或减少干扰")

        if self.current_state["confidence_level"] < 0.7:
            recommendations.append("信心不足，建议回顾成功案例或寻求外部验证")

        # 基于认知偏差
        biases = self.identify_cognitive_biases()
        for bias in biases:
            if bias == CognitiveBias.RECENCY_BIAS:
                recommendations.append("注意近因偏差，建议回顾更长期的历史数据")
            elif bias == CognitiveBias.OVERCONFIDENCE_BIAS:
                recommendations.append("注意过度自信，建议增加验证和质疑步骤")
            elif bias == CognitiveBias.CONFIRMATION_BIAS:
                recommendations.append("注意确认偏差，主动寻找反对意见")

        # 基于策略效果
        learning_eff = self.assess_learning_efficiency()
        if isinstance(learning_eff, dict) and "efficiency_score" in learning_eff:
            if learning_eff["efficiency_score"] < 0.6:
                recommendations.append("学习效率偏低，建议调整学习方法或寻求指导")

        return recommendations

    def get_performance_trends(self, days: int = 7) -> Dict[str, Any]:
        """
        获取性能趋势

        Args:
            days: 分析的天数

        Returns:
            性能趋势数据
        """
        if not self.performance_history:
            return {"message": "暂无性能数据"}

        # 过滤指定天数内的数据
        cutoff_date = datetime.now() - timedelta(days=days)
        recent_tasks = [t for t in self.performance_history if t.timestamp >= cutoff_date]

        if not recent_tasks:
            return {"message": f"最近{days}天无性能数据"}

        # 按天分组统计
        daily_stats = {}
        for task in recent_tasks:
            day = task.timestamp.date().isoformat()
            if day not in daily_stats:
                daily_stats[day] = {"success": 0, "total": 0, "accuracy": []}

            daily_stats[day]["total"] += 1
            if task.success:
                daily_stats[day]["success"] += 1
            daily_stats[day]["accuracy"].append(task.accuracy)

        # 计算每日指标
        daily_trends = []
        for day, stats in sorted(daily_stats.items()):
            success_rate = stats["success"] / stats["total"] if stats["total"] > 0 else 0
            avg_accuracy = statistics.mean(stats["accuracy"]) if stats["accuracy"] else 0

            daily_trends.append({
                "date": day,
                "success_rate": success_rate,
                "average_accuracy": avg_accuracy,
                "total_tasks": stats["total"]
            })

        return {
            "period_days": days,
            "total_tasks": len(recent_tasks),
            "daily_trends": daily_trends,
            "overall_success_rate": sum(1 for t in recent_tasks if t.success) / len(recent_tasks)
            if recent_tasks else 0,
            "overall_accuracy": statistics.mean([t.accuracy for t in recent_tasks])
            if recent_tasks else 0
        }
