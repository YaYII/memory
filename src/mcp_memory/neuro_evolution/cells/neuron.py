"""神经元和突触模块"""

import uuid
from enum import Enum
from typing import Optional


class NeuronType(Enum):
    """神经元类型"""
    SENSORY = "sensory"  # 感觉神经元
    MOTOR = "motor"      # 运动神经元
    MEMORY = "memory"    # 记忆神经元
    ASSOCIATIVE = "associative"  # 联想神经元


class NeuronState(Enum):
    """神经元状态"""
    RESTING = "resting"  # 静息状态
    ACTIVE = "active"    # 激活状态
    REFRACTORY = "refractory"  # 不应期


class Neuron:
    """神经元类"""
    
    def __init__(self, neuron_type: NeuronType, threshold: float = 0.5):
        """
        初始化神经元
        
        Args:
            neuron_type: 神经元类型
            threshold: 激活阈值
        """
        self.id = str(uuid.uuid4())
        self.neuron_type = neuron_type
        self.threshold = threshold
        self.state = NeuronState.RESTING
        self.membrane_potential = 0.0
        self.total_activations = 0
        self.last_activation_time = 0
    
    def receive_input(self, input_strength: float) -> float:
        """
        接收输入并计算输出
        
        Args:
            input_strength: 输入强度
            
        Returns:
            输出强度
        """
        if self.state == NeuronState.REFRACTORY:
            return 0.0
        
        self.membrane_potential += input_strength
        
        if self.membrane_potential >= self.threshold:
            self._activate()
            return 1.0
        
        return 0.0
    
    def _activate(self):
        """激活神经元"""
        self.state = NeuronState.ACTIVE
        self.total_activations += 1
        self.membrane_potential = 0.0
        # 模拟不应期
        # 实际应用中可以添加时间相关的不应期逻辑
        self.state = NeuronState.RESTING
    
    def reset(self):
        """重置神经元状态"""
        self.membrane_potential = 0.0
        self.state = NeuronState.RESTING


class Synapse:
    """突触类"""
    
    def __init__(self, pre_neuron_id: str, post_neuron_id: str, initial_strength: float = 0.5):
        """
        初始化突触
        
        Args:
            pre_neuron_id: 前神经元ID
            post_neuron_id: 后神经元ID
            initial_strength: 初始突触强度
        """
        self.id = str(uuid.uuid4())
        self.pre_neuron_id = pre_neuron_id
        self.post_neuron_id = post_neuron_id
        self.strength = initial_strength
        self.last_activity_time = 0
        self.activity_count = 0
    
    def transmit(self, signal_strength: float) -> float:
        """
        传递信号
        
        Args:
            signal_strength: 信号强度
            
        Returns:
            传递后的信号强度
        """
        self.activity_count += 1
        self.last_activity_time = 0  # 实际应用中应该使用时间戳
        return signal_strength * self.strength
    
    def strengthen(self, amount: float):
        """
        增强突触强度
        
        Args:
            amount: 增强量
        """
        self.strength = min(1.0, self.strength + amount)
    
    def weaken(self, amount: float):
        """
        减弱突触强度
        
        Args:
            amount: 减弱量
        """
        self.strength = max(0.0, self.strength - amount)
