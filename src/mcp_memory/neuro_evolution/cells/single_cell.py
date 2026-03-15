"""
单细胞记忆系统

最基础的感知-反应系统，类似草履虫的趋光性
"""

import numpy as np
from typing import Dict, List, Optional, Any
from datetime import datetime
from enum import Enum

from ..cells import Neuron, Synapse, NeuronType


class EvolutionStage(Enum):
    """进化阶段"""
    SINGLE_CELL = "single_cell"
    MULTI_CELL = "multi_cell"
    SIMPLE_BRAIN = "simple_brain"
    COMPLEX_BRAIN = "complex_brain"


class SingleCellMemory:
    """
    单细胞记忆：最基础的感知-反应系统
    
    类似：草履虫的趋光性
    能力：简单的刺激-反应
    
    特点：
    - 极简神经网络：输入层 → 输出层
    - 无隐藏层
    - 基于本能的反应
    - 能够自我进化到下一阶段
    """
    
    def __init__(self, input_size: int = 10, output_size: int = 5):
        """
        初始化单细胞记忆系统
        
        Args:
            input_size: 输入维度（感知维度）
            output_size: 输出维度（反应维度）
        """
        # 进化阶段
        self.evolution_stage = EvolutionStage.SINGLE_CELL
        
        # 创建极简神经网络
        self.input_size = input_size
        self.output_size = output_size
        
        # 感觉神经元（输入层）
        self.sensory_neurons = [
            Neuron(neuron_type=NeuronType.SENSORY, threshold=0.3)
            for _ in range(input_size)
        ]
        
        # 运动神经元（输出层）
        self.motor_neurons = [
            Neuron(neuron_type=NeuronType.MOTOR, threshold=0.5)
            for _ in range(output_size)
        ]
        
        # 直接连接（无隐藏层）
        self.synapses: Dict[str, Synapse] = {}
        self._create_direct_connections()
        
        # 本能系统
        self.instincts = {
            "preserve": self._preserve_memory,
            "forget": self._forget_noise,
            "respond": self._basic_response
        }
        
        # 进化计数器
        self.total_processed = 0
        self.complexity_encountered = 0
        self.cell_division_count = 0
        
        # 记忆存储（简单存储）
        self.memory_storage: List[Dict] = []
        
        # 元数据
        self.created_at = datetime.now()
        self.last_evolution_check = datetime.now()
    
    def _create_direct_connections(self):
        """创建直接连接：感觉神经元 → 运动神经元"""
        for sensory in self.sensory_neurons:
            for motor in self.motor_neurons:
                synapse = Synapse(
                    pre_neuron_id=sensory.id,
                    post_neuron_id=motor.id,
                    initial_strength=0.5
                )
                self.synapses[synapse.id] = synapse
                
                # 记录连接
                sensory.output_synapses.append(synapse.id)
                motor.input_synapses.append(synapse.id)
    
    def process(self, input_signal: np.ndarray) -> np.ndarray:
        """
        处理输入信号
        
        单细胞处理流程：
        1. 感知刺激
        2. 本能反应
        3. 记录刺激
        4. 判断是否需要进化
        
        Args:
            input_signal: 输入信号（numpy数组）
            
        Returns:
            输出信号（反应）
        """
        # 确保输入维度正确
        if len(input_signal) != self.input_size:
            input_signal = self._adjust_input(input_signal)
        
        # 1. 感知刺激
        perception = self._perceive(input_signal)
        
        # 2. 本能反应
        if self._is_important(perception):
            response = self.instincts["preserve"](perception)
        else:
            response = self.instincts["forget"](perception)
        
        # 3. 记录刺激
        self._record_stimulus(input_signal, perception, response)
        
        # 4. 更新统计
        self.total_processed += 1
        
        # 5. 检查是否需要进化
        if self._should_evolve():
            return self._evolve_to_next_stage()
        
        return response
    
    def _perceive(self, input_signal: np.ndarray) -> Dict:
        """
        感知输入信号
        
        将输入信号传递给感觉神经元
        """
        perception = {
            "raw_signal": input_signal,
            "activated_sensory": [],
            "total_activation": 0.0
        }
        
        # 激活感觉神经元
        for i, neuron in enumerate(self.sensory_neurons):
            if i < len(input_signal):
                output = neuron.receive_input(input_signal[i])
                if output:
                    perception["activated_sensory"].append(i)
                    perception["total_activation"] += output
        
        return perception
    
    def _is_important(self, perception: Dict) -> bool:
        """
        判断刺激是否重要
        
        基于激活强度和模式
        """
        # 简单规则：如果激活强度超过阈值，则认为重要
        return perception["total_activation"] > 0.5
    
    def _preserve_memory(self, perception: Dict) -> np.ndarray:
        """
        保存记忆（本能1）
        
        将重要刺激保存到记忆存储
        """
        # 创建记忆记录
        memory = {
            "content": perception["raw_signal"].tolist(),
            "timestamp": datetime.now().isoformat(),
            "importance": perception["total_activation"],
            "type": "preserved"
        }
        
        # 保存到存储
        self.memory_storage.append(memory)
        
        # 生成反应
        return self._generate_response(perception, preserve=True)
    
    def _forget_noise(self, perception: Dict) -> np.ndarray:
        """
        遗忘噪声（本能2）
        
        忽略不重要的刺激
        """
        # 生成弱反应
        return self._generate_response(perception, preserve=False)
    
    def _basic_response(self, perception: Dict) -> np.ndarray:
        """
        基础反应（本能3）
        
        生成基本的反应信号
        """
        return self._generate_response(perception, preserve=False)
    
    def _generate_response(self, perception: Dict, preserve: bool) -> np.ndarray:
        """
        生成反应信号
        
        通过运动神经元生成输出
        """
        response = np.zeros(self.output_size)
        
        # 计算每个运动神经元的输入
        for i, motor in enumerate(self.motor_neurons):
            # 获取所有输入突触
            total_input = 0.0
            for synapse_id in motor.input_synapses:
                synapse = self.synapses[synapse_id]
                
                # 找到前神经元
                pre_neuron = self._get_neuron_by_id(synapse.pre_neuron_id)
                if pre_neuron and pre_neuron.active:
                    # 突触传递
                    total_input += synapse.transmit(1.0)
            
            # 运动神经元激活
            output = motor.receive_input(total_input)
            if output:
                response[i] = output
        
        # 如果是保存记忆，增强反应
        if preserve:
            response *= 1.5
        
        return response
    
    def _record_stimulus(self, input_signal: np.ndarray, perception: Dict, response: np.ndarray):
        """
        记录刺激（用于后续进化判断）
        """
        # 计算复杂度
        complexity = self._calculate_complexity(input_signal)
        
        # 如果遇到复杂情况，记录
        if complexity > 0.7:
            self.complexity_encountered += 1
    
    def _calculate_complexity(self, signal: np.ndarray) -> float:
        """
        计算信号复杂度
        
        基于熵和方差
        """
        if len(signal) == 0:
            return 0.0
        
        # 计算方差
        variance = np.var(signal)
        
        # 计算熵（简化版）
        normalized = signal / (np.sum(np.abs(signal)) + 1e-10)
        entropy = -np.sum(normalized * np.log2(normalized + 1e-10))
        
        # 综合复杂度
        complexity = 0.5 * min(variance, 1.0) + 0.5 * min(entropy / 5.0, 1.0)
        
        return complexity
    
    def _should_evolve(self) -> bool:
        """
        判断是否需要进化
        
        进化触发条件：
        1. 处理的信息量超过阈值
        2. 遇到无法处理的复杂情况
        3. 细胞分裂次数达到阈值
        """
        # 进化阈值
        EVOLUTION_THRESHOLD = 1000
        COMPLEXITY_THRESHOLD = 100
        DIVISION_THRESHOLD = 50
        
        return (
            self.total_processed > EVOLUTION_THRESHOLD or
            self.complexity_encountered > COMPLEXITY_THRESHOLD or
            self.cell_division_count > DIVISION_THRESHOLD
        )
    
    def _evolve_to_next_stage(self) -> np.ndarray:
        """
        进化到下一阶段：多细胞阶段
        
        返回进化信号
        """
        print(f"[进化] 从 {self.evolution_stage.value} 进化到 multi_cell")
        
        # 标记进化
        self.evolution_stage = EvolutionStage.MULTI_CELL
        
        # 返回进化信号
        return np.ones(self.output_size) * 2.0  # 特殊信号表示进化
    
    def _adjust_input(self, input_signal: np.ndarray) -> np.ndarray:
        """调整输入维度"""
        if len(input_signal) < self.input_size:
            # 填充
            padded = np.zeros(self.input_size)
            padded[:len(input_signal)] = input_signal
            return padded
        else:
            # 截断
            return input_signal[:self.input_size]
    
    def _get_neuron_by_id(self, neuron_id: str) -> Optional[Neuron]:
        """根据ID获取神经元"""
        for neuron in self.sensory_neurons + self.motor_neurons:
            if neuron.id == neuron_id:
                return neuron
        return None
    
    def get_status(self) -> Dict:
        """获取系统状态"""
        return {
            "evolution_stage": self.evolution_stage.value,
            "total_processed": self.total_processed,
            "complexity_encountered": self.complexity_encountered,
            "memory_count": len(self.memory_storage),
            "neuron_count": len(self.sensory_neurons) + len(self.motor_neurons),
            "synapse_count": len(self.synapses),
            "created_at": self.created_at.isoformat()
        }
    
    def to_dict(self) -> Dict:
        """序列化为字典"""
        return {
            "evolution_stage": self.evolution_stage.value,
            "input_size": self.input_size,
            "output_size": self.output_size,
            "sensory_neurons": [n.to_dict() for n in self.sensory_neurons],
            "motor_neurons": [n.to_dict() for n in self.motor_neurons],
            "synapses": {sid: s.to_dict() for sid, s in self.synapses.items()},
            "memory_storage": self.memory_storage,
            "total_processed": self.total_processed,
            "complexity_encountered": self.complexity_encountered,
            "created_at": self.created_at.isoformat()
        }
