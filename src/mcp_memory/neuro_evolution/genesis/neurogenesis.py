"""神经发生模块"""

import random
from typing import List, Dict, Any
from mcp_memory.neuro_evolution.cells.neuron import Neuron, Synapse, NeuronType


class SynapticPruning:
    """突触修剪类"""
    
    def __init__(self, pruning_threshold: float = 0.1):
        """
        初始化突触修剪
        
        Args:
            pruning_threshold: 修剪阈值，低于此值的突触会被修剪
        """
        self.pruning_threshold = pruning_threshold
        self.pruned_synapses = []
        self.total_pruned = 0
    
    def prune(self, synapses: List[Synapse]) -> List[Synapse]:
        """
        修剪突触
        
        Args:
            synapses: 突触列表
            
        Returns:
            修剪后的突触列表
        """
        pruned = []
        for synapse in synapses:
            if synapse.strength < self.pruning_threshold:
                self.pruned_synapses.append(synapse)
                self.total_pruned += 1
            else:
                pruned.append(synapse)
        return pruned
    
    def get_statistics(self) -> Dict[str, Any]:
        """
        获取修剪统计信息
        
        Returns:
            统计信息
        """
        return {
            "total_pruned": self.total_pruned,
            "pruning_threshold": self.pruning_threshold
        }


class Neurogenesis:
    """神经发生类"""
    
    def __init__(self, max_neurons: int = 1000):
        """
        初始化神经发生
        
        Args:
            max_neurons: 最大神经元数量
        """
        self.max_neurons = max_neurons
        self.neurons = []
        self.synapses = []
        self.total_neurons_grown = 0
        self.total_synapses_formed = 0
    
    def grow_neuron(self, neuron_type: NeuronType) -> Neuron:
        """
        生长新神经元
        
        Args:
            neuron_type: 神经元类型
            
        Returns:
            新神经元
        """
        if len(self.neurons) >= self.max_neurons:
            raise ValueError(f"达到最大神经元数量: {self.max_neurons}")
        
        neuron = Neuron(neuron_type)
        self.neurons.append(neuron)
        self.total_neurons_grown += 1
        return neuron
    
    def connect_new_neuron(self, new_neuron: Neuron, target_neurons: List[Neuron]) -> List[Synapse]:
        """
        为新神经元建立连接
        
        Args:
            new_neuron: 新神经元
            target_neurons: 目标神经元列表
            
        Returns:
            新形成的突触列表
        """
        new_synapses = []
        for target_neuron in target_neurons:
            # 随机决定是否建立连接
            if random.random() > 0.5:
                synapse = Synapse(
                    pre_neuron_id=new_neuron.id,
                    post_neuron_id=target_neuron.id,
                    initial_strength=random.random() * 0.5 + 0.25
                )
                self.synapses.append(synapse)
                new_synapses.append(synapse)
                self.total_synapses_formed += 1
        
        return new_synapses
    
    def prune_synapses(self, pruning_threshold: float = 0.1):
        """
        修剪弱突触
        
        Args:
            pruning_threshold: 修剪阈值
        """
        pruning = SynapticPruning(pruning_threshold)
        self.synapses = pruning.prune(self.synapses)
        return pruning.get_statistics()
    
    def get_statistics(self) -> Dict[str, Any]:
        """
        获取神经发生统计信息
        
        Returns:
            统计信息
        """
        neuron_type_counts = {}
        for neuron in self.neurons:
            neuron_type = neuron.neuron_type.value
            neuron_type_counts[neuron_type] = neuron_type_counts.get(neuron_type, 0) + 1
        
        return {
            "total_neurons": len(self.neurons),
            "total_neurons_grown": self.total_neurons_grown,
            "total_synapses": len(self.synapses),
            "total_synapses_formed": self.total_synapses_formed,
            "neurons_by_type": neuron_type_counts,
            "max_neurons": self.max_neurons
        }
