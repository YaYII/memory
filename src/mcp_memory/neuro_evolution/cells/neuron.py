"""
基础神经元和突触类

模拟生物神经元的基本特性
"""

import uuid
import numpy as np
from datetime import datetime
from typing import List, Dict, Optional, Any
from enum import Enum


class NeuronType(Enum):
    """神经元类型"""
    SENSORY = "sensory"      # 感觉神经元
    MOTOR = "motor"          # 运动神经元
    INTERNEURON = "interneuron"  # 中间神经元
    MEMORY = "memory"        # 记忆神经元
    ASSOCIATION = "association"  # 联想神经元


class NeuronState(Enum):
    """神经元状态"""
    RESTING = "resting"      # 静息状态
    ACTIVE = "active"        # 激活状态
    REFRACTORY = "refractory"  # 不应期
    PLASTIC = "plastic"      # 可塑状态


class Synapse:
    """
    突触：神经元之间的连接
    
    模拟生物突触的特性：
    - 突触强度（权重）
    - 突触可塑性
    - 突触传递
    """
    
    def __init__(
        self,
        pre_neuron_id: str,
        post_neuron_id: str,
        initial_strength: float = 0.5,
        neurotransmitter: str = "glutamate"
    ):
        self.id = str(uuid.uuid4())
        self.pre_neuron_id = pre_neuron_id
        self.post_neuron_id = post_neuron_id
        
        # 突触强度（权重）
        self.strength = initial_strength
        self.initial_strength = initial_strength
        
        # 神经递质类型
        self.neurotransmitter = neurotransmitter
        
        # 可塑性参数
        self.plasticity = 0.01  # 学习率
        self.last_activation_time = None
        
        # 使用统计
        self.activation_count = 0
        self.success_count = 0
        
        # 时间戳
        self.created_at = datetime.now()
        self.last_modified = datetime.now()
    
    def transmit(self, signal: float) -> float:
        """
        突触传递：将信号从前神经元传递到后神经元
        
        Args:
            signal: 前神经元的输出信号
            
        Returns:
            传递后的信号强度
        """
        # 记录激活时间
        self.last_activation_time = datetime.now()
        self.activation_count += 1
        
        # 信号传递（强度 × 权重）
        transmitted_signal = signal * self.strength
        
        return transmitted_signal
    
    def strengthen(self, delta: float = 0.01):
        """
        增强突触（长时程增强 LTP）
        
        类似生物突触的LTP机制
        """
        self.strength = min(1.0, self.strength + delta * self.plasticity)
        self.last_modified = datetime.now()
        self.success_count += 1
    
    def weaken(self, delta: float = 0.01):
        """
        减弱突触（长时程抑制 LTD）
        
        类似生物突触的LTD机制
        """
        self.strength = max(0.1, self.strength - delta * self.plasticity)
        self.last_modified = datetime.now()
    
    def get_usage_frequency(self) -> float:
        """获取使用频率"""
        age = (datetime.now() - self.created_at).total_seconds()
        if age == 0:
            return 0.0
        return self.activation_count / age
    
    def to_dict(self) -> Dict:
        """序列化为字典"""
        return {
            "id": self.id,
            "pre_neuron_id": self.pre_neuron_id,
            "post_neuron_id": self.post_neuron_id,
            "strength": self.strength,
            "neurotransmitter": self.neurotransmitter,
            "activation_count": self.activation_count,
            "success_count": self.success_count,
            "created_at": self.created_at.isoformat(),
            "last_modified": self.last_modified.isoformat()
        }


class Neuron:
    """
    神经元：神经网络的基本单元
    
    模拟生物神经元的特性：
    - 膜电位
    - 激活阈值
    - 不应期
    - 神经可塑性
    """
    
    def __init__(
        self,
        neuron_type: NeuronType = NeuronType.INTERNEURON,
        threshold: float = 0.5,
        resting_potential: float = -0.07
    ):
        self.id = str(uuid.uuid4())
        self.neuron_type = neuron_type
        
        # 膜电位参数
        self.membrane_potential = resting_potential
        self.resting_potential = resting_potential
        self.threshold = threshold
        
        # 状态
        self.state = NeuronState.RESTING
        self.active = False
        
        # 输入输出突触
        self.input_synapses: List[str] = []  # 突触ID列表
        self.output_synapses: List[str] = []
        
        # 激活历史
        self.activation_history: List[datetime] = []
        self.last_fire_time: Optional[datetime] = None
        
        # 不应期参数
        self.refractory_period = 0.002  # 2ms
        self.in_refractory = False
        
        # 可塑性参数
        self.plasticity = 0.01
        self.learning_rate = 0.1
        
        # 统计信息
        self.total_activations = 0
        self.total_inputs = 0
        
        # 元数据
        self.created_at = datetime.now()
        self.specialization: Optional[str] = None
        self.region: Optional[str] = None
    
    def receive_input(self, input_signal: float):
        """
        接收输入信号
        
        类似生物神经元的突触后电位
        """
        # 累加输入信号到膜电位
        self.membrane_potential += input_signal
        self.total_inputs += 1
        
        # 检查是否达到阈值
        if self.membrane_potential >= self.threshold:
            return self.fire()
        
        return None
    
    def fire(self) -> float:
        """
        神经元发放（激活）
        
        类似生物神经元的动作电位
        """
        # 检查是否处于不应期（基于时间戳检查）
        if self._is_in_refractory_period():
            return 0.0
        
        # 激活神经元
        self.active = True
        self.state = NeuronState.ACTIVE
        
        # 记录激活时间
        now = datetime.now()
        self.activation_history.append(now)
        self.last_fire_time = now
        self.total_activations += 1
        
        # 进入不应期状态
        self.in_refractory = True
        self.state = NeuronState.REFRACTORY
        
        # 生成输出信号（动作电位）
        output_signal = 1.0  # 全或无
        
        # 重置膜电位
        self.membrane_potential = self.resting_potential
        
        return output_signal
    
    def _is_in_refractory_period(self) -> bool:
        """
        检查是否处于不应期（基于时间戳）
        
        Returns:
            True if in refractory period, False otherwise
        """
        if not self.last_fire_time:
            return False
        
        # 计算距离上次激活的时间
        time_since_last_fire = (datetime.now() - self.last_fire_time).total_seconds()
        
        # 如果时间小于不应期，则处于不应期
        if time_since_last_fire < self.refractory_period:
            return True
        else:
            # 不应期已过，重置状态
            self.in_refractory = False
            self.active = False
            self.state = NeuronState.RESTING
            return False
    
    def enter_refractory(self):
        """进入不应期（已废弃，使用时间戳检查）"""
        # 此方法已废弃，不应期通过_is_in_refractory_period()检查
        # 保留此方法以兼容旧代码
        self.in_refractory = True
        self.state = NeuronState.REFRACTORY
    
    def exit_refractory(self):
        """退出不应期（已废弃，自动通过时间检查）"""
        # 此方法已废弃，不应期通过_is_in_refractory_period()自动检查
        self.in_refractory = False
        self.active = False
        self.state = NeuronState.RESTING
    
    def get_activation_rate(self) -> float:
        """获取激活率"""
        if not self.activation_history:
            return 0.0
        
        # 计算最近1小时的激活率
        now = datetime.now()
        recent_activations = [
            t for t in self.activation_history
            if (now - t).total_seconds() < 3600
        ]
        
        return len(recent_activations) / 3600.0
    
    def get_average_activity(self) -> float:
        """获取平均活动水平"""
        if self.total_inputs == 0:
            return 0.0
        
        return self.total_activations / self.total_inputs
    
    def adapt_threshold(self):
        """
        自适应阈值调整
        
        类似生物神经元的稳态可塑性
        """
        avg_activity = self.get_average_activity()
        
        if avg_activity > 0.8:
            # 过度活跃 → 提高阈值
            self.threshold *= 1.1
        elif avg_activity < 0.2:
            # 活跃度低 → 降低阈值
            self.threshold *= 0.9
        
        # 限制阈值范围
        self.threshold = max(0.1, min(self.threshold, 1.0))
    
    def specialize(self, specialization: str):
        """
        神经元特化
        
        类似生物神经元的分化
        """
        self.specialization = specialization
        
        # 根据特化类型调整参数
        if specialization == "pattern_recognition":
            self.threshold = 0.6
            self.plasticity = 0.02
        elif specialization == "memory_storage":
            self.threshold = 0.4
            self.plasticity = 0.005
        elif specialization == "decision_making":
            self.threshold = 0.7
            self.plasticity = 0.015
    
    def to_dict(self) -> Dict:
        """序列化为字典"""
        return {
            "id": self.id,
            "type": self.neuron_type.value,
            "state": self.state.value,
            "threshold": self.threshold,
            "membrane_potential": self.membrane_potential,
            "total_activations": self.total_activations,
            "specialization": self.specialization,
            "region": self.region,
            "created_at": self.created_at.isoformat()
        }
