"""单细胞记忆系统"""

import logging
import numpy as np
from enum import Enum
from typing import List, Dict, Any
from mcp_memory.neuro_evolution.cells.neuron import Neuron, Synapse, NeuronType

logger = logging.getLogger("mcp-memory.single-cell")


class EvolutionStage(Enum):
    """进化阶段"""
    SINGLE_CELL = "single_cell"  # 单细胞阶段
    MULTI_CELL = "multi_cell"    # 多细胞阶段
    SIMPLE_BRAIN = "simple_brain"  # 简单大脑阶段
    COMPLEX_BRAIN = "complex_brain"  # 复杂大脑阶段


class SingleCellMemory:
    """单细胞记忆系统"""
    
    def __init__(self, input_size: int, output_size: int):
        """
        初始化单细胞记忆系统
        
        Args:
            input_size: 输入维度
            output_size: 输出维度
        """
        self.input_size = input_size
        self.output_size = output_size
        self.evolution_stage = EvolutionStage.SINGLE_CELL
        
        # 创建输入神经元
        self.input_neurons = [Neuron(NeuronType.SENSORY) for _ in range(input_size)]
        
        # 创建输出神经元
        self.output_neurons = [Neuron(NeuronType.MOTOR) for _ in range(output_size)]
        
        # 创建突触连接
        self.synapses = []
        for input_neuron in self.input_neurons:
            for output_neuron in self.output_neurons:
                synapse = Synapse(
                    pre_neuron_id=input_neuron.id,
                    post_neuron_id=output_neuron.id,
                    initial_strength=np.random.rand() * 0.5 + 0.25  # 0.25-0.75 之间的初始强度
                )
                self.synapses.append(synapse)
        
        # 统计信息
        self.total_processed = 0
        self.total_learned = 0
        self.evolution_threshold = 1000  # 进化阈值
    
    def process(self, input_signal: np.ndarray) -> np.ndarray:
        """
        处理输入信号
        
        Args:
            input_signal: 输入信号
            
        Returns:
            输出信号
        """
        if len(input_signal) != self.input_size:
            raise ValueError(f"输入信号维度不匹配: 期望 {self.input_size}, 实际 {len(input_signal)}")
        
        # 处理输入
        input_activations = []
        for i, neuron in enumerate(self.input_neurons):
            activation = neuron.receive_input(input_signal[i])
            input_activations.append(activation)
        
        # 通过突触传递
        output_activations = np.zeros(self.output_size)
        for synapse in self.synapses:
            # 找到对应的输入神经元
            input_idx = next(i for i, n in enumerate(self.input_neurons) if n.id == synapse.pre_neuron_id)
            # 找到对应的输出神经元
            output_idx = next(i for i, n in enumerate(self.output_neurons) if n.id == synapse.post_neuron_id)
            
            # 传递信号
            input_act = input_activations[input_idx]
            if input_act > 0:
                output_activations[output_idx] += synapse.transmit(input_act)
        
        # 激活输出神经元
        final_output = np.zeros(self.output_size)
        for i, neuron in enumerate(self.output_neurons):
            final_output[i] = neuron.receive_input(output_activations[i])
        
        self.total_processed += 1
        
        # 检查是否需要进化
        if self.total_processed >= self.evolution_threshold:
            self._check_evolution()
        
        return final_output
    
    def learn(self, input_signal: np.ndarray, target: np.ndarray) -> float:
        """
        学习模式
        
        Args:
            input_signal: 输入信号
            target: 目标输出
            
        Returns:
            误差
        """
        if len(input_signal) != self.input_size:
            raise ValueError(f"输入信号维度不匹配: 期望 {self.input_size}, 实际 {len(input_signal)}")
        if len(target) != self.output_size:
            raise ValueError(f"目标信号维度不匹配: 期望 {self.output_size}, 实际 {len(target)}")
        
        # 前向传播
        output = self.process(input_signal)
        
        # 计算误差
        error = np.mean(np.abs(output - target))
        
        # 调整突触强度
        learning_rate = 0.01
        for synapse in self.synapses:
            # 找到对应的输入和输出神经元
            input_idx = next(i for i, n in enumerate(self.input_neurons) if n.id == synapse.pre_neuron_id)
            output_idx = next(i for i, n in enumerate(self.output_neurons) if n.id == synapse.post_neuron_id)
            
            # 基于误差调整突触强度
            if input_signal[input_idx] > 0:
                if target[output_idx] > output[output_idx]:
                    synapse.strengthen(learning_rate)
                else:
                    synapse.weaken(learning_rate)
        
        self.total_learned += 1
        return error
    
    def _check_evolution(self):
        """检查是否需要进化"""
        # 这里只是一个简单的实现，实际应用中可以根据更复杂的条件判断
        if self.evolution_stage == EvolutionStage.SINGLE_CELL:
            logger.info("进化到多细胞阶段！处理次数: %d", self.total_processed)
            # 实际应用中这里应该实现进化逻辑
    
    def get_status(self) -> Dict[str, Any]:
        """
        获取系统状态
        
        Returns:
            系统状态
        """
        return {
            "evolution_stage": self.evolution_stage.value,
            "input_size": self.input_size,
            "output_size": self.output_size,
            "total_processed": self.total_processed,
            "total_learned": self.total_learned,
            "neuron_count": len(self.input_neurons) + len(self.output_neurons),
            "synapse_count": len(self.synapses)
        }
