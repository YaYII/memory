"""
多细胞记忆系统

细胞协作系统，类似水母的神经网络
"""

import numpy as np
from typing import Dict, List, Optional, Any
from datetime import datetime
from enum import Enum

from ..cells import Neuron, Synapse, NeuronType
from .single_cell import EvolutionStage


class CellCluster:
    """
    细胞集群：一组协作的神经元
    """
    
    def __init__(self, cluster_type: str = "general"):
        self.id = str(uuid.uuid4())
        self.cluster_type = cluster_type
        self.neurons: List[Neuron] = []
        self.connections: Dict[str, Synapse] = {}
        self.created_at = datetime.now()
    
    def add_neuron(self, neuron: Neuron):
        """添加神经元到集群"""
        self.neurons.append(neuron)
    
    def get_average_activity(self) -> float:
        """获取集群平均活动水平"""
        if not self.neurons:
            return 0.0
        
        total_activity = sum(n.get_average_activity() for n in self.neurons)
        return total_activity / len(self.neurons)


import uuid


class MultiCellMemory:
    """
    多细胞记忆：细胞协作系统
    
    类似：水母的神经网络
    能力：分布式处理、简单协作
    
    特点：
    - 多个细胞群体
    - 细胞间通信
    - 细胞分化
    - 协作处理
    """
    
    def __init__(self, input_size: int = 10, output_size: int = 5):
        """
        初始化多细胞记忆系统
        
        Args:
            input_size: 输入维度
            output_size: 输出维度
        """
        # 进化阶段
        self.evolution_stage = EvolutionStage.MULTI_CELL
        
        # 输入输出维度
        self.input_size = input_size
        self.output_size = output_size
        
        # 细胞集群
        self.clusters: Dict[str, CellCluster] = {}
        
        # 感觉细胞集群
        self.sensory_cluster = CellCluster("sensory")
        self.clusters["sensory"] = self.sensory_cluster
        
        # 运动细胞集群
        self.motor_cluster = CellCluster("motor")
        self.clusters["motor"] = self.motor_cluster
        
        # 中间细胞集群
        self.interneuron_cluster = CellCluster("interneuron")
        self.clusters["interneuron"] = self.interneuron_cluster
        
        # 初始化神经元
        self._initialize_neurons()
        
        # 细胞间连接
        self.inter_cluster_connections: Dict[str, Synapse] = {}
        
        # 记忆存储
        self.memory_storage: List[Dict] = []
        
        # 统计信息
        self.total_processed = 0
        self.complexity_encountered = 0
        
        # 元数据
        self.created_at = datetime.now()
    
    def _initialize_neurons(self):
        """初始化神经元"""
        # 创建感觉神经元
        for _ in range(self.input_size):
            neuron = Neuron(neuron_type=NeuronType.SENSORY, threshold=0.3)
            self.sensory_cluster.add_neuron(neuron)
        
        # 创建运动神经元
        for _ in range(self.output_size):
            neuron = Neuron(neuron_type=NeuronType.MOTOR, threshold=0.5)
            self.motor_cluster.add_neuron(neuron)
        
        # 创建中间神经元（数量为输入输出的平均值）
        interneuron_count = (self.input_size + self.output_size) // 2
        for _ in range(interneuron_count):
            neuron = Neuron(neuron_type=NeuronType.INTERNEURON, threshold=0.4)
            self.interneuron_cluster.add_neuron(neuron)
        
        # 建立集群内连接
        self._create_intra_cluster_connections()
        
        # 建立集群间连接
        self._create_inter_cluster_connections()
    
    def _create_intra_cluster_connections(self):
        """创建集群内连接"""
        # 感觉集群内连接
        for i, neuron in enumerate(self.sensory_cluster.neurons):
            for j, other in enumerate(self.sensory_cluster.neurons):
                if i != j and np.random.random() > 0.7:
                    synapse = Synapse(
                        pre_neuron_id=neuron.id,
                        post_neuron_id=other.id,
                        initial_strength=0.3
                    )
                    self.sensory_cluster.connections[synapse.id] = synapse
        
        # 运动集群内连接
        for i, neuron in enumerate(self.motor_cluster.neurons):
            for j, other in enumerate(self.motor_cluster.neurons):
                if i != j and np.random.random() > 0.7:
                    synapse = Synapse(
                        pre_neuron_id=neuron.id,
                        post_neuron_id=other.id,
                        initial_strength=0.3
                    )
                    self.motor_cluster.connections[synapse.id] = synapse
    
    def _create_inter_cluster_connections(self):
        """创建集群间连接"""
        # 感觉集群 → 中间集群
        for sensory_neuron in self.sensory_cluster.neurons:
            for interneuron in self.interneuron_cluster.neurons:
                if np.random.random() > 0.5:
                    synapse = Synapse(
                        pre_neuron_id=sensory_neuron.id,
                        post_neuron_id=interneuron.id,
                        initial_strength=0.5
                    )
                    self.inter_cluster_connections[synapse.id] = synapse
        
        # 中间集群 → 运动集群
        for interneuron in self.interneuron_cluster.neurons:
            for motor_neuron in self.motor_cluster.neurons:
                if np.random.random() > 0.5:
                    synapse = Synapse(
                        pre_neuron_id=interneuron.id,
                        post_neuron_id=motor_neuron.id,
                        initial_strength=0.5
                    )
                    self.inter_cluster_connections[synapse.id] = synapse
        
        # 直接连接：感觉 → 运动（保留部分直接路径）
        for i, sensory_neuron in enumerate(self.sensory_cluster.neurons):
            for j, motor_neuron in enumerate(self.motor_cluster.neurons):
                if np.random.random() > 0.8:
                    synapse = Synapse(
                        pre_neuron_id=sensory_neuron.id,
                        post_neuron_id=motor_neuron.id,
                        initial_strength=0.4
                    )
                    self.inter_cluster_connections[synapse.id] = synapse
    
    def process(self, input_signal: np.ndarray) -> np.ndarray:
        """
        处理输入信号
        
        多细胞协作处理流程：
        1. 感觉细胞感知
        2. 中间细胞处理
        3. 运动细胞反应
        
        Args:
            input_signal: 输入信号
            
        Returns:
            输出信号
        """
        # 确保输入维度正确
        if len(input_signal) != self.input_size:
            input_signal = self._adjust_input(input_signal)
        
        # 1. 感觉细胞感知
        sensory_responses = self._process_sensory(input_signal)
        
        # 2. 中间细胞处理
        interneuron_responses = self._process_interneuron(sensory_responses)
        
        # 3. 运动细胞反应
        motor_responses = self._process_motor(sensory_responses, interneuron_responses)
        
        # 4. 记录处理
        self.total_processed += 1
        
        # 5. 保存重要记忆
        if self._is_important(sensory_responses):
            self._save_memory(input_signal, motor_responses)
        
        return motor_responses
    
    def _process_sensory(self, input_signal: np.ndarray) -> List[float]:
        """感觉细胞处理"""
        responses = []
        
        for i, neuron in enumerate(self.sensory_cluster.neurons):
            if i < len(input_signal):
                response = neuron.receive_input(input_signal[i])
                responses.append(response if response else 0.0)
            else:
                responses.append(0.0)
        
        return responses
    
    def _process_interneuron(self, sensory_responses: List[float]) -> List[float]:
        """中间细胞处理"""
        responses = []
        
        for neuron in self.interneuron_cluster.neurons:
            # 接收感觉细胞的输入
            total_input = 0.0
            
            # 通过集群间连接接收
            for synapse in self.inter_cluster_connections.values():
                if synapse.post_neuron_id == neuron.id:
                    # 找到前神经元
                    pre_neuron = self._get_neuron_by_id(synapse.pre_neuron_id)
                    if pre_neuron and pre_neuron.active:
                        total_input += synapse.transmit(1.0)
            
            # 处理输入
            response = neuron.receive_input(total_input)
            responses.append(response if response else 0.0)
        
        return responses
    
    def _process_motor(
        self,
        sensory_responses: List[float],
        interneuron_responses: List[float]
    ) -> np.ndarray:
        """运动细胞处理"""
        motor_outputs = np.zeros(self.output_size)
        
        for i, neuron in enumerate(self.motor_cluster.neurons):
            total_input = 0.0
            
            # 接收中间细胞的输入
            for synapse in self.inter_cluster_connections.values():
                if synapse.post_neuron_id == neuron.id:
                    pre_neuron = self._get_neuron_by_id(synapse.pre_neuron_id)
                    if pre_neuron and pre_neuron.active:
                        total_input += synapse.transmit(1.0)
            
            # 处理输入
            response = neuron.receive_input(total_input)
            if response:
                motor_outputs[i] = response
        
        return motor_outputs
    
    def _get_neuron_by_id(self, neuron_id: str) -> Optional[Neuron]:
        """根据ID获取神经元"""
        for cluster in self.clusters.values():
            for neuron in cluster.neurons:
                if neuron.id == neuron_id:
                    return neuron
        return None
    
    def _is_important(self, responses: List[float]) -> bool:
        """判断是否重要"""
        return sum(responses) > 0.5
    
    def _save_memory(self, input_signal: np.ndarray, output_signal: np.ndarray):
        """保存记忆"""
        memory = {
            "input": input_signal.tolist(),
            "output": output_signal.tolist(),
            "timestamp": datetime.now().isoformat()
        }
        self.memory_storage.append(memory)
    
    def _adjust_input(self, input_signal: np.ndarray) -> np.ndarray:
        """调整输入维度"""
        if len(input_signal) < self.input_size:
            padded = np.zeros(self.input_size)
            padded[:len(input_signal)] = input_signal
            return padded
        else:
            return input_signal[:self.input_size]
    
    def get_status(self) -> Dict:
        """获取系统状态"""
        total_neurons = sum(len(c.neurons) for c in self.clusters.values())
        total_connections = sum(len(c.connections) for c in self.clusters.values())
        total_connections += len(self.inter_cluster_connections)
        
        return {
            "evolution_stage": self.evolution_stage.value,
            "cluster_count": len(self.clusters),
            "total_neurons": total_neurons,
            "total_connections": total_connections,
            "memory_count": len(self.memory_storage),
            "total_processed": self.total_processed,
            "created_at": self.created_at.isoformat()
        }
    
    def to_dict(self) -> Dict:
        """序列化为字典"""
        return {
            "evolution_stage": self.evolution_stage.value,
            "input_size": self.input_size,
            "output_size": self.output_size,
            "clusters": {
                name: {
                    "type": cluster.cluster_type,
                    "neuron_count": len(cluster.neurons),
                    "connection_count": len(cluster.connections)
                }
                for name, cluster in self.clusters.items()
            },
            "inter_cluster_connections": len(self.inter_cluster_connections),
            "memory_storage": self.memory_storage,
            "total_processed": self.total_processed,
            "created_at": self.created_at.isoformat()
        }
