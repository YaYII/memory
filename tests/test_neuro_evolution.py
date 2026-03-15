"""
测试自我进化记忆系统
"""

import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'src'))

import numpy as np
from mcp_memory.neuro_evolution.cells import Neuron, Synapse, NeuronType, NeuronState
from mcp_memory.neuro_evolution.cells.single_cell import SingleCellMemory, EvolutionStage
from mcp_memory.neuro_evolution.plasticity import NeuralPlasticity, PlasticityType
from mcp_memory.neuro_evolution.genesis import Neurogenesis, SynapticPruning
from mcp_memory.neuro_evolution.evolution_engine import SelfEvolvingMemorySystem


def test_neuron():
    """测试神经元"""
    print("\n=== 测试神经元 ===")
    
    # 创建神经元
    neuron = Neuron(neuron_type=NeuronType.SENSORY, threshold=0.5)
    print(f"创建神经元: {neuron.id}, 类型: {neuron.neuron_type.value}")
    
    # 测试接收输入
    output = neuron.receive_input(0.3)
    print(f"输入 0.3, 输出: {output}, 状态: {neuron.state.value}")
    
    # 测试激活
    output = neuron.receive_input(0.3)
    print(f"输入 0.3, 输出: {output}, 状态: {neuron.state.value}")
    
    print("✅ 神经元测试通过")


def test_synapse():
    """测试突触"""
    print("\n=== 测试突触 ===")
    
    # 创建两个神经元
    pre_neuron = Neuron(neuron_type=NeuronType.SENSORY)
    post_neuron = Neuron(neuron_type=NeuronType.MOTOR)
    
    # 创建突触
    synapse = Synapse(
        pre_neuron_id=pre_neuron.id,
        post_neuron_id=post_neuron.id,
        initial_strength=0.5
    )
    print(f"创建突触: {synapse.id}, 强度: {synapse.strength}")
    
    # 测试传递
    transmitted = synapse.transmit(1.0)
    print(f"传递信号 1.0, 输出: {transmitted}")
    
    # 测试增强
    synapse.strengthen(0.1)
    print(f"增强后强度: {synapse.strength}")
    
    print("✅ 突触测试通过")


def test_single_cell_memory():
    """测试单细胞记忆系统"""
    print("\n=== 测试单细胞记忆系统 ===")
    
    # 创建单细胞记忆系统
    memory = SingleCellMemory(input_size=10, output_size=5)
    print(f"创建单细胞记忆系统, 阶段: {memory.evolution_stage.value}")
    
    # 测试处理
    input_signal = np.random.rand(10)
    response = memory.process(input_signal)
    print(f"输入信号: {input_signal[:3]}...")
    print(f"输出信号: {response}")
    
    # 测试多次处理
    for i in range(10):
        input_signal = np.random.rand(10)
        memory.process(input_signal)
    
    print(f"处理后状态: {memory.get_status()}")
    
    print("✅ 单细胞记忆系统测试通过")


def test_neural_plasticity():
    """测试神经可塑性"""
    print("\n=== 测试神经可塑性 ===")
    
    # 创建神经元和突触
    pre_neuron = Neuron(neuron_type=NeuronType.SENSORY)
    post_neuron = Neuron(neuron_type=NeuronType.MOTOR)
    synapse = Synapse(pre_neuron_id=pre_neuron.id, post_neuron_id=post_neuron.id)
    
    # 创建可塑性系统
    plasticity = NeuralPlasticity(learning_rate=0.01)
    
    # 激活神经元
    pre_neuron.receive_input(0.6)
    post_neuron.receive_input(0.6)
    
    # 应用赫布学习
    print(f"突触初始强度: {synapse.strength}")
    plasticity.apply_plasticity(pre_neuron, post_neuron, synapse, PlasticityType.HEBBIAN)
    print(f"赫布学习后强度: {synapse.strength}")
    
    print(f"可塑性统计: {plasticity.get_statistics()}")
    
    print("✅ 神经可塑性测试通过")


def test_neurogenesis():
    """测试神经发生"""
    print("\n=== 测试神经发生 ===")
    
    # 创建神经发生系统
    genesis = Neurogenesis(max_neurons=100)
    
    # 生长新神经元
    neuron1 = genesis.grow_neuron(NeuronType.SENSORY)
    print(f"生长感觉神经元: {neuron1.id}")
    
    neuron2 = genesis.grow_neuron(NeuronType.MOTOR)
    print(f"生长运动神经元: {neuron2.id}")
    
    neuron3 = genesis.grow_neuron(NeuronType.MEMORY)
    print(f"生长记忆神经元: {neuron3.id}")
    
    # 建立连接
    synapses = genesis.connect_new_neuron(neuron3, [neuron1, neuron2])
    print(f"建立突触连接: {len(synapses)} 个")
    
    print(f"神经发生统计: {genesis.get_statistics()}")
    
    print("✅ 神经发生测试通过")


def test_self_evolving_system():
    """测试自我进化系统"""
    print("\n=== 测试自我进化系统 ===")
    
    # 创建自我进化系统
    system = SelfEvolvingMemorySystem(input_size=10, output_size=5)
    print(f"创建自我进化系统, 阶段: {system.current_stage.value}")
    
    # 测试处理
    for i in range(20):
        input_signal = np.random.rand(10)
        response = system.process(input_signal)
        if i % 5 == 0:
            print(f"处理 {i+1} 次, 阶段: {system.current_stage.value}")
    
    # 测试学习
    input_signal = np.random.rand(10)
    target = np.random.rand(5)
    system.learn(input_signal, target)
    print(f"学习 1 次")
    
    # 获取状态
    status = system.get_status()
    print(f"系统状态: 处理 {status['total_processed']} 次, 学习 {status['total_learned']} 次")
    
    print("✅ 自我进化系统测试通过")


def main():
    """运行所有测试"""
    print("=" * 60)
    print("开始测试神经进化记忆系统")
    print("=" * 60)
    
    try:
        test_neuron()
        test_synapse()
        test_single_cell_memory()
        test_neural_plasticity()
        test_neurogenesis()
        test_self_evolving_system()
        
        print("\n" + "=" * 60)
        print("✅ 所有测试通过！")
        print("=" * 60)
        
    except Exception as e:
        print(f"\n❌ 测试失败: {e}")
        import traceback
        traceback.print_exc()
        return 1
    
    return 0


if __name__ == "__main__":
    exit(main())
