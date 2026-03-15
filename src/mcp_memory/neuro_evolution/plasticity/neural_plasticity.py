"""
神经可塑性机制

模拟生物大脑的可塑性特性
"""

import numpy as np
from typing import Dict, List, Optional, Tuple
from datetime import datetime
from enum import Enum

from ..cells import Neuron, Synapse


class PlasticityType(Enum):
    """可塑性类型"""
    HEBBIAN = "hebbian"              # 赫布学习
    STDP = "stdp"                    # 时序依赖可塑性
    HOMEOSTATIC = "homeostatic"      # 稳态可塑性
    METAPLASTIC = "metaplastic"      # 元可塑性


class NeuralPlasticity:
    """
    神经可塑性：神经网络自我调整的核心
    
    模拟生物大脑的可塑性机制：
    - 赫布学习："一起激发的神经元连在一起"
    - STDP：时序依赖的可塑性
    - 稳态可塑性：保持神经元活动在合理范围
    - 元可塑性：学习如何学习
    """
    
    def __init__(self, learning_rate: float = 0.01):
        """
        初始化神经可塑性系统
        
        Args:
            learning_rate: 学习率
        """
        self.learning_rate = learning_rate
        
        # 突触强度记录
        self.synaptic_strength: Dict[str, float] = {}
        
        # 可塑性规则
        self.plasticity_rules = {
            PlasticityType.HEBBIAN: self._hebbian_learning,
            PlasticityType.STDP: self._stdp_learning,
            PlasticityType.HOMEOSTATIC: self._homeostatic_plasticity,
            PlasticityType.METAPLASTIC: self._metaplastic_learning
        }
        
        # 统计信息
        self.total_adjustments = 0
        self.strengthening_events = 0
        self.weakening_events = 0
        
        # 元数据
        self.created_at = datetime.now()
    
    def apply_plasticity(
        self,
        pre_neuron: Neuron,
        post_neuron: Neuron,
        synapse: Synapse,
        plasticity_type: PlasticityType = PlasticityType.HEBBIAN
    ):
        """
        应用可塑性规则
        
        Args:
            pre_neuron: 前神经元
            post_neuron: 后神经元
            synapse: 突触
            plasticity_type: 可塑性类型
        """
        # 获取对应的可塑性规则
        rule = self.plasticity_rules.get(plasticity_type)
        
        if rule:
            # 应用规则
            rule(pre_neuron, post_neuron, synapse)
            
            # 更新统计
            self.total_adjustments += 1
    
    def _hebbian_learning(
        self,
        pre_neuron: Neuron,
        post_neuron: Neuron,
        synapse: Synapse
    ):
        """
        赫布学习："一起激发的神经元连在一起"
        
        这是最基础的学习机制
        
        规则：
        - 如果前神经元和后神经元同时激活 → 增强突触
        - 如果只有前神经元激活 → 减弱突触
        """
        # 检查激活状态
        if pre_neuron.active and post_neuron.active:
            # 同时激活 → 增强（LTP）
            delta = self.learning_rate * 1.0
            synapse.strengthen(delta)
            self.strengthening_events += 1
            
        elif pre_neuron.active and not post_neuron.active:
            # 只有前神经元激活 → 减弱（LTD）
            delta = self.learning_rate * 0.5
            synapse.weaken(delta)
            self.weakening_events += 1
        
        # 记录突触强度
        self.synaptic_strength[synapse.id] = synapse.strength
    
    def _stdp_learning(
        self,
        pre_neuron: Neuron,
        post_neuron: Neuron,
        synapse: Synapse
    ):
        """
        时序依赖可塑性（Spike-Timing-Dependent Plasticity）
        
        更精细的学习机制，考虑激发时序
        
        规则：
        - 前神经元先激发 → 增强
        - 后神经元先激发 → 减弱
        """
        # 获取激发时间
        pre_fire_time = pre_neuron.last_fire_time
        post_fire_time = post_neuron.last_fire_time
        
        if pre_fire_time and post_fire_time:
            # 计算时间差
            time_diff = (post_fire_time - pre_fire_time).total_seconds()
            
            if time_diff > 0:
                # 前神经元先激发 → 增强
                # 时间差越小，增强越多
                delta = self.learning_rate * np.exp(-time_diff / 0.02)
                synapse.strengthen(delta)
                self.strengthening_events += 1
                
            else:
                # 后神经元先激发 → 减弱
                # 时间差越小，减弱越多
                delta = self.learning_rate * np.exp(time_diff / 0.02)
                synapse.weaken(delta)
                self.weakening_events += 1
        
        # 记录突触强度
        self.synaptic_strength[synapse.id] = synapse.strength
    
    def _homeostatic_plasticity(
        self,
        pre_neuron: Neuron,
        post_neuron: Neuron,
        synapse: Synapse
    ):
        """
        稳态可塑性：保持神经元活动在合理范围
        
        防止过度兴奋或过度抑制
        
        规则：
        - 如果后神经元过度活跃 → 降低突触强度
        - 如果后神经元活跃度低 → 提高突触强度
        """
        # 获取后神经元的平均活动水平
        avg_activity = post_neuron.get_average_activity()
        
        # 目标活动水平
        target_activity = 0.5
        
        # 计算偏差
        deviation = avg_activity - target_activity
        
        if abs(deviation) > 0.1:
            # 需要调整
            if deviation > 0:
                # 过度活跃 → 降低突触强度
                delta = self.learning_rate * deviation
                synapse.weaken(delta)
                self.weakening_events += 1
            else:
                # 活跃度低 → 提高突触强度
                delta = self.learning_rate * abs(deviation)
                synapse.strengthen(delta)
                self.strengthening_events += 1
        
        # 同时调整神经元的阈值
        post_neuron.adapt_threshold()
        
        # 记录突触强度
        self.synaptic_strength[synapse.id] = synapse.strength
    
    def _metaplastic_learning(
        self,
        pre_neuron: Neuron,
        post_neuron: Neuron,
        synapse: Synapse
    ):
        """
        元可塑性：学习如何学习
        
        根据历史学习效果调整学习率
        
        规则：
        - 如果学习效果好 → 提高学习率
        - 如果学习效果差 → 降低学习率
        """
        # 获取突触的使用频率
        usage_frequency = synapse.get_usage_frequency()
        
        # 获取突触的成功率
        if synapse.activation_count > 0:
            success_rate = synapse.success_count / synapse.activation_count
        else:
            success_rate = 0.5
        
        # 动态调整学习率
        if success_rate > 0.7:
            # 学习效果好 → 提高学习率
            adjusted_learning_rate = self.learning_rate * 1.2
        elif success_rate < 0.3:
            # 学习效果差 → 降低学习率
            adjusted_learning_rate = self.learning_rate * 0.8
        else:
            adjusted_learning_rate = self.learning_rate
        
        # 应用调整后的学习率
        old_plasticity = synapse.plasticity
        synapse.plasticity = adjusted_learning_rate
        
        # 应用赫布学习（使用调整后的学习率）
        self._hebbian_learning(pre_neuron, post_neuron, synapse)
        
        # 恢复原始可塑性（或保持调整后的）
        # 这里选择保持调整后的，以便持续学习
    
    def batch_plasticity(
        self,
        neurons: List[Neuron],
        synapses: Dict[str, Synapse],
        plasticity_type: PlasticityType = PlasticityType.HEBBIAN
    ):
        """
        批量应用可塑性规则
        
        Args:
            neurons: 神经元列表
            synapses: 突触字典
            plasticity_type: 可塑性类型
        """
        # 构建神经元ID到神经元的映射
        neuron_map = {n.id: n for n in neurons}
        
        # 遍历所有突触
        for synapse in synapses.values():
            pre_neuron = neuron_map.get(synapse.pre_neuron_id)
            post_neuron = neuron_map.get(synapse.post_neuron_id)
            
            if pre_neuron and post_neuron:
                self.apply_plasticity(
                    pre_neuron,
                    post_neuron,
                    synapse,
                    plasticity_type
                )
    
    def get_statistics(self) -> Dict:
        """获取统计信息"""
        return {
            "total_adjustments": self.total_adjustments,
            "strengthening_events": self.strengthening_events,
            "weakening_events": self.weakening_events,
            "learning_rate": self.learning_rate,
            "synapse_count": len(self.synaptic_strength),
            "average_strength": np.mean(list(self.synaptic_strength.values())) if self.synaptic_strength else 0.0
        }
    
    def to_dict(self) -> Dict:
        """序列化为字典"""
        return {
            "learning_rate": self.learning_rate,
            "synaptic_strength": self.synaptic_strength,
            "total_adjustments": self.total_adjustments,
            "strengthening_events": self.strengthening_events,
            "weakening_events": self.weakening_events,
            "created_at": self.created_at.isoformat()
        }
