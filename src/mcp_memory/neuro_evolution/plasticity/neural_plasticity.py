"""神经可塑性模块"""

from enum import Enum
from typing import Dict, Any
from mcp_memory.neuro_evolution.cells.neuron import Neuron, Synapse


class PlasticityType(Enum):
    """可塑性类型"""
    HEBBIAN = "hebbian"  # 赫布学习
    STDP = "stdp"        # 时序依赖可塑性
    HOMEOTATIC = "homeostatic"  # 稳态可塑性
    METAPLASTICITY = "metaplasticity"  # 元可塑性


class NeuralPlasticity:
    """神经可塑性系统"""
    
    def __init__(self, learning_rate: float = 0.01):
        """
        初始化神经可塑性系统
        
        Args:
            learning_rate: 学习率
        """
        self.learning_rate = learning_rate
        self.plasticity_history = []
        self.total_plasticity_events = 0
    
    def apply_plasticity(self, pre_neuron: Neuron, post_neuron: Neuron, 
                        synapse: Synapse, plasticity_type: PlasticityType):
        """
        应用可塑性
        
        Args:
            pre_neuron: 前神经元
            post_neuron: 后神经元
            synapse: 突触
            plasticity_type: 可塑性类型
        """
        if plasticity_type == PlasticityType.HEBBIAN:
            self._apply_hebbian(pre_neuron, post_neuron, synapse)
        elif plasticity_type == PlasticityType.STDP:
            self._apply_stdp(pre_neuron, post_neuron, synapse)
        elif plasticity_type == PlasticityType.HOMEOTATIC:
            self._apply_homeostatic(pre_neuron, post_neuron, synapse)
        elif plasticity_type == PlasticityType.METAPLASTICITY:
            self._apply_metaplasticity(pre_neuron, post_neuron, synapse)
        
        self.total_plasticity_events += 1
        self.plasticity_history.append({
            "type": plasticity_type.value,
            "synapse_id": synapse.id,
            "pre_neuron_id": pre_neuron.id,
            "post_neuron_id": post_neuron.id
        })
    
    def _apply_hebbian(self, pre_neuron: Neuron, post_neuron: Neuron, synapse: Synapse):
        """
        应用赫布学习
        "一起激发的神经元连在一起"
        """
        # 简化的赫布学习规则
        # 如果前神经元和后神经元都激活，则增强突触强度
        # 这里我们假设神经元的状态可以反映其激活情况
        if pre_neuron.state.value == "active" and post_neuron.state.value == "active":
            synapse.strengthen(self.learning_rate)
        elif pre_neuron.state.value == "active" and post_neuron.state.value == "resting":
            synapse.weaken(self.learning_rate * 0.5)
    
    def _apply_stdp(self, pre_neuron: Neuron, post_neuron: Neuron, synapse: Synapse):
        """
        应用时序依赖可塑性
        """
        # 简化的 STDP 规则
        # 这里我们使用一个简化的实现，实际应用中需要考虑时间差
        synapse.strengthen(self.learning_rate * 0.8)
    
    def _apply_homeostatic(self, pre_neuron: Neuron, post_neuron: Neuron, synapse: Synapse):
        """
        应用稳态可塑性
        """
        # 简化的稳态可塑性规则
        # 确保突触强度在合理范围内
        if synapse.strength > 0.8:
            synapse.weaken(self.learning_rate * 0.3)
        elif synapse.strength < 0.2:
            synapse.strengthen(self.learning_rate * 0.3)
    
    def _apply_metaplasticity(self, pre_neuron: Neuron, post_neuron: Neuron, synapse: Synapse):
        """
        应用元可塑性
        """
        # 简化的元可塑性规则
        # 根据突触的历史活动调整可塑性
        if synapse.activity_count > 100:
            # 频繁活动的突触降低可塑性
            synapse.strengthen(self.learning_rate * 0.5)
        else:
            # 不频繁活动的突触增强可塑性
            synapse.strengthen(self.learning_rate * 1.5)
    
    def get_statistics(self) -> Dict[str, Any]:
        """
        获取可塑性统计信息
        
        Returns:
            统计信息
        """
        type_counts = {}
        for event in self.plasticity_history:
            event_type = event["type"]
            type_counts[event_type] = type_counts.get(event_type, 0) + 1
        
        return {
            "total_plasticity_events": self.total_plasticity_events,
            "events_by_type": type_counts,
            "learning_rate": self.learning_rate
        }
