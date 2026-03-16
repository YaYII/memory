"""
神经发生机制

模拟生物大脑的神经发生过程
"""

import uuid
import numpy as np
from typing import Dict, List, Optional, Any
from datetime import datetime
from enum import Enum

from ..cells import Neuron, Synapse, NeuronType


class GrowthTrigger(Enum):
    """生长触发类型"""
    PROCESSING_LOAD = "processing_load"    # 处理压力
    TASK_NOVELTY = "task_novelty"        # 任务新颖性
    LEARNING_DEMAND = "learning_demand"   # 学习需求
    MEMORY_CONSOLIDATION = "memory_consolidation"  # 记忆巩固


class Neurogenesis:
    """
    神经发生：新神经元的生成
    
    模拟人类海马体的神经发生过程
    
    特点：
    - 根据需求动态生成新神经元
    - 自主建立突触连接
    - 参与记忆形成
    """
    
    def __init__(
        self,
        max_neurons: int = 10000,
        initial_growth_rate: float = 0.001
    ):
        """
        初始化神经发生系统
        
        Args:
            max_neurons: 最大神经元数量
            initial_growth_rate: 初始生长率
        """
        # 生长参数
        self.max_neurons = max_neurons
        self.growth_rate = initial_growth_rate
        
        # 神经元池
        self.neuron_pool: List[Neuron] = []
        
        # 生长历史
        self.growth_history: List[Dict] = []
        
        # 统计信息
        self.total_neurons_grown = 0
        self.total_connections_formed = 0
        
        # 元数据
        self.created_at = datetime.now()
        self.last_growth = datetime.now()
    
    def should_grow_new_neuron(
        self,
        processing_load: float = 0.0,
        task_novelty: float = 0.0,
        learning_demand: float = 0.0
    ) -> bool:
        """
        判断是否需要生长新神经元
        
        触发条件：
        1. 现有神经元处理能力不足
        2. 遇到新类型的任务
        3. 学习新知识
        
        Args:
            processing_load: 处理压力 (0-1)
            task_novelty: 任务新颖性 (0-1)
            learning_demand: 学习需求 (0-1)
            
        Returns:
            是否需要生长新神经元
        """
        # 检查是否达到最大数量
        if len(self.neuron_pool) >= self.max_neurons:
            return False
        
        # 综合评分
        need_score = (
            0.4 * processing_load +
            0.3 * task_novelty +
            0.3 * learning_demand
        )
        
        # 生长阈值
        GROWTH_THRESHOLD = 0.5
        
        # 考虑生长率
        effective_threshold = GROWTH_THRESHOLD / (1 + self.growth_rate * len(self.neuron_pool))
        
        return need_score > effective_threshold
    
    def grow_neuron(
        self,
        neuron_type: NeuronType = NeuronType.INTERNEURON,
        region: Optional[str] = None,
        specialization: Optional[str] = None
    ) -> Neuron:
        """
        生长新神经元
        
        根据需求动态生成
        
        Args:
            neuron_type: 神经元类型
            region: 脑区
            specialization: 特化方向
            
        Returns:
            新神经元
        """
        # 创建新神经元
        new_neuron = Neuron(
            neuron_type=neuron_type,
            threshold=0.5,
            resting_potential=-0.07
        )
        
        # 设置区域
        if region:
            new_neuron.region = region
        
        # 设置特化
        if specialization:
            new_neuron.specialize(specialization)
        
        # 添加到神经元池
        self.neuron_pool.append(new_neuron)
        
        # 更新统计
        self.total_neurons_grown += 1
        self.last_growth = datetime.now()
        
        # 记录生长事件
        self._record_growth(new_neuron, neuron_type, region, specialization)
        
        return new_neuron
    
    def grow_memory_neuron(self, memory_content: Any) -> Neuron:
        """
        生长记忆神经元
        
        用于存储特定记忆
        
        Args:
            memory_content: 记忆内容
            
        Returns:
            新记忆神经元
        """
        # 创建记忆神经元
        neuron = self.grow_neuron(
            neuron_type=NeuronType.MEMORY,
            specialization="memory_storage"
        )
        
        # 存储记忆内容
        neuron.memory_content = memory_content
        
        return neuron
    
    def grow_sensory_neuron(self, sensory_type: str) -> Neuron:
        """
        生长感觉神经元
        
        Args:
            sensory_type: 感觉类型
            
        Returns:
            新感觉神经元
        """
        return self.grow_neuron(
            neuron_type=NeuronType.SENSORY,
            specialization=sensory_type
        )
    
    def grow_association_neuron(self) -> Neuron:
        """
        生长联想神经元
        
        用于建立关联
        
        Returns:
            新联想神经元
        """
        return self.grow_neuron(
            neuron_type=NeuronType.ASSOCIATION,
            specialization="association_building"
        )
    
    def connect_new_neuron(
        self,
        new_neuron: Neuron,
        existing_neurons: List[Neuron],
        connection_strength: float = 0.3
    ) -> List[Synapse]:
        """
        为新神经元建立连接
        
        类似人类大脑的突触形成
        
        Args:
            new_neuron: 新神经元
            existing_neurons: 现有神经元
            connection_strength: 初始连接强度
            
        Returns:
            建立的突触列表
        """
        synapses = []
        
        for existing in existing_neurons:
            # 计算连接强度（基于现有神经元对新神经元的潜在价值）
            initial_strength = self._calculate_initial_strength(new_neuron, existing)
            
            # 如果强度超过阈值，建立连接
            if initial_strength > 0.1:
                # 创建双向连接
                synapse_forward = Synapse(
                    pre_neuron_id=existing.id,
                    post_neuron_id=new_neuron.id,
                    initial_strength=initial_strength
                )
                
                synapse_backward = Synapse(
                    pre_neuron_id=new_neuron.id,
                    post_neuron_id=existing.id,
                    initial_strength=initial_strength
                )
                
                synapses.append(synapse_forward)
                synapses.append(synapse_backward)
                
                # 更新神经元
                existing.output_synapses.append(synapse_forward.id)
                new_neuron.input_synapses.append(synapse_forward.id)
                new_neuron.output_synapses.append(synapse_backward.id)
                existing.input_synapses.append(synapse_backward.id)
                
                self.total_connections_formed += 2
        
        return synapses
    
    def _calculate_initial_strength(
        self,
        new_neuron: Neuron,
        existing_neuron: Neuron
    ) -> float:
        """
        计算初始连接强度
        
        基于神经元的特化和当前状态
        """
        # 基础强度
        strength = 0.3
        
        # 如果有相同的特化，增强连接
        if (new_neuron.specialization and 
            existing_neuron.specialization and
            new_neuron.specialization == existing_neuron.specialization):
            strength += 0.2
        
        # 如果神经元活跃，增强连接
        if existing_neuron.active:
            strength += 0.1
        
        # 如果是同一类型，增强连接
        if new_neuron.neuron_type == existing_neuron.neuron_type:
            strength += 0.1
        
        return min(strength, 0.5)
    
    def _record_growth(
        self,
        neuron: Neuron,
        neuron_type: NeuronType,
        region: Optional[str],
        specialization: Optional[str]
    ):
        """记录生长事件"""
        event = {
            "neuron_id": neuron.id,
            "neuron_type": neuron_type.value,
            "region": region,
            "specialization": specialization,
            "timestamp": datetime.now().isoformat(),
            "total_neurons": len(self.neuron_pool)
        }
        
        self.growth_history.append(event)
    
    def get_neurons_by_type(self, neuron_type: NeuronType) -> List[Neuron]:
        """根据类型获取神经元"""
        return [n for n in self.neuron_pool if n.neuron_type == neuron_type]
    
    def get_neurons_by_specialization(self, specialization: str) -> List[Neuron]:
        """根据特化获取神经元"""
        return [n for n in self.neuron_pool if n.specialization == specialization]
    
    def get_statistics(self) -> Dict:
        """获取统计信息"""
        return {
            "total_neurons": len(self.neuron_pool),
            "total_neurons_grown": self.total_neurons_grown,
            "total_connections_formed": self.total_connections_formed,
            "max_neurons": self.max_neurons,
            "growth_rate": self.growth_rate,
            "utilization": len(self.neuron_pool) / self.max_neurons if self.max_neurons > 0 else 0
        }
    
    def to_dict(self) -> Dict:
        """序列化为字典"""
        return {
            "max_neurons": self.max_neurons,
            "growth_rate": self.growth_rate,
            "total_neurons_grown": self.total_neurons_grown,
            "total_connections_formed": self.total_connections_formed,
            "growth_history": self.growth_history,
            "created_at": self.created_at.isoformat(),
            "last_growth": self.last_growth.isoformat()
        }


class SynapticPruning:
    """
    突触修剪：删除无用的连接
    
    模拟人类大脑发育过程中的突触修剪
    """
    
    def __init__(
        self,
        pruning_threshold: float = 0.1,
        pruning_rate: float = 0.01
    ):
        """
        初始化突触修剪系统
        
        Args:
            pruning_threshold: 修剪阈值
            pruning_rate: 修剪速率
        """
        self.pruning_threshold = pruning_threshold
        self.pruning_rate = pruning_rate
        
        # 修剪历史
        self.pruning_history: List[Dict] = []
        
        # 统计信息
        self.total_pruned_synapses = 0
        self.total_pruned_neurons = 0
    
    def prune_weak_synapses(
        self,
        neurons: List[Neuron],
        synapses: Dict[str, Synapse]
    ) -> List[str]:
        """
        修剪弱突触
        
        这不是删除，而是优化
        
        Args:
            neurons: 神经元列表
            synapses: 突触字典
            
        Returns:
            被修剪的突触ID列表
        """
        pruned_ids = []
        
        for synapse_id, synapse in synapses.items():
            # 计算突触重要性
            strength = synapse.strength
            usage_frequency = synapse.get_usage_frequency()
            
            # 综合评分
            importance = 0.6 * strength + 0.4 * usage_frequency
            
            # 如果重要性低于阈值，修剪
            if importance < self.pruning_threshold:
                # 随机决定是否修剪（基于修剪率）
                if np.random.random() < self.pruning_rate:
                    pruned_ids.append(synapse_id)
                    
                    # 从神经元中移除
                    pre_neuron = self._get_neuron_by_id(neurons, synapse.pre_neuron_id)
                    post_neuron = self._get_neuron_by_id(neurons, synapse.post_neuron_id)
                    
                    if pre_neuron and synapse_id in pre_neuron.output_synapses:
                        pre_neuron.output_synapses.remove(synapse_id)
                    
                    if post_neuron and synapse_id in post_neuron.input_synapses:
                        post_neuron.input_synapses.remove(synapse_id)
                    
                    self.total_pruned_synapses += 1
        
        # 记录修剪事件
        if pruned_ids:
            self._record_pruning(len(pruned_ids), "weak_synapses")
        
        return pruned_ids
    
    def prune_redundant_neurons(
        self,
        neurons: List[Neuron]
    ) -> List[str]:
        """
        修剪冗余神经元
        
        类似人类大脑的神经元凋亡
        
        Args:
            neurons: 神经元列表
            
        Returns:
            被修剪的神经元ID列表
        """
        pruned_ids = []
        
        for neuron in neurons:
            # 检查神经元活跃度
            activity = neuron.get_activation_rate()
            
            # 检查连接数
            connections = len(neuron.input_synapses) + len(neuron.output_synapses)
            
            # 活跃度阈值
            ACTIVITY_THRESHOLD = 0.01
            CONNECTION_THRESHOLD = 2
            
            # 如果神经元不活跃且连接很少，考虑修剪
            if activity < ACTIVITY_THRESHOLD and connections < CONNECTION_THRESHOLD:
                # 随机决定是否修剪
                if np.random.random() < self.pruning_rate:
                    pruned_ids.append(neuron.id)
                    self.total_pruned_neurons += 1
        
        # 记录修剪事件
        if pruned_ids:
            self._record_pruning(len(pruned_ids), "redundant_neurons")
        
        return pruned_ids
    
    def _get_neuron_by_id(self, neurons: List[Neuron], neuron_id: str) -> Optional[Neuron]:
        """根据ID获取神经元"""
        for neuron in neurons:
            if neuron.id == neuron_id:
                return neuron
        return None
    
    def _record_pruning(self, count: int, pruning_type: str):
        """记录修剪事件"""
        event = {
            "count": count,
            "type": pruning_type,
            "timestamp": datetime.now().isoformat()
        }
        
        self.pruning_history.append(event)
    
    def get_statistics(self) -> Dict:
        """获取统计信息"""
        return {
            "total_pruned_synapses": self.total_pruned_synapses,
            "total_pruned_neurons": self.total_pruned_neurons,
            "pruning_threshold": self.pruning_threshold,
            "pruning_rate": self.pruning_rate
        }
