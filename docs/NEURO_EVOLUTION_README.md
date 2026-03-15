# 神经进化记忆系统 (Neuro-Evolution Memory System)

## 🧬 概述

这是一个革命性的AI记忆系统，从单细胞到复杂大脑的自我进化神经网络。

**核心理念：**
- 不依赖外部大模型，构建内部思考能力
- 神经网络自我进化：从简单到复杂
- 动态节点生长：不是固定架构
- 生物特性启发：模拟真实大脑发育
- 从单细胞到大脑：逐步进化路径

## 🎯 核心特性

### 1. 自我进化神经网络
- **单细胞阶段**：最基础的感知-反应系统
- **多细胞阶段**：细胞协作系统
- **简单大脑阶段**：初级认知系统
- **复杂大脑阶段**：高级认知系统

### 2. 神经可塑性
- **赫布学习**："一起激发的神经元连在一起"
- **STDP**：时序依赖可塑性
- **稳态可塑性**：保持神经元活动在合理范围
- **元可塑性**：学习如何学习

### 3. 神经发生
- 根据需求动态生成新神经元
- 自主建立突触连接
- 参与记忆形成

### 4. 突触修剪
- 删除无用的连接
- 优化神经网络
- 类似人类大脑发育过程

## 📁 目录结构

```
src/mcp_memory/neuro_evolution/
├── __init__.py                 # 模块初始化
├── evolution_engine.py         # 自我进化引擎
├── cells/                      # 细胞相关
│   ├── __init__.py
│   ├── neuron.py              # 神经元和突触
│   └── single_cell.py         # 单细胞记忆系统
├── brain/                      # 大脑相关（预留）
│   └── __init__.py
├── plasticity/                 # 神经可塑性
│   ├── __init__.py
│   └── neural_plasticity.py   # 可塑性机制
└── genesis/                    # 神经发生
    ├── __init__.py
    └── neurogenesis.py        # 神经发生和突触修剪
```

## 🚀 快速开始

### 基础使用

```python
from mcp_memory.neuro_evolution import SelfEvolvingMemorySystem
import numpy as np

# 创建自我进化记忆系统
system = SelfEvolvingMemorySystem(
    input_size=10,    # 输入维度
    output_size=5,    # 输出维度
    storage_capacity=1000000  # 存储容量
)

# 处理输入信号
input_signal = np.random.rand(10)
response = system.process(input_signal)

# 学习模式
target = np.random.rand(5)
system.learn(input_signal, target)

# 查看系统状态
status = system.get_status()
print(f"当前阶段: {status['current_stage']}")
print(f"神经元数量: {status['neuron_count']}")
print(f"突触数量: {status['synapse_count']}")
```

### 进化过程

系统会自动根据以下条件进化：

1. **复杂度溢出**：处理的信息复杂度超过阈值
2. **处理压力**：处理的信息量超过阈值
3. **学习需求**：学习次数超过阈值
4. **记忆容量**：记忆使用率达到阈值
5. **自主进化**：随机触发进化

```python
# 系统会自动进化
for i in range(10000):
    input_signal = np.random.rand(10)
    system.process(input_signal)
    
    # 检查进化状态
    if i % 1000 == 0:
        status = system.get_status()
        print(f"阶段: {status['current_stage']}, 神经元: {status['neuron_count']}")
```

## 🧠 核心组件

### 1. 神经元 (Neuron)

```python
from mcp_memory.neuro_evolution.cells import Neuron, NeuronType

# 创建神经元
neuron = Neuron(
    neuron_type=NeuronType.SENSORY,
    threshold=0.5
)

# 接收输入
output = neuron.receive_input(0.6)

# 检查状态
print(f"状态: {neuron.state}")
print(f"激活次数: {neuron.total_activations}")
```

### 2. 突触 (Synapse)

```python
from mcp_memory.neuro_evolution.cells import Synapse

# 创建突触
synapse = Synapse(
    pre_neuron_id="neuron_1",
    post_neuron_id="neuron_2",
    initial_strength=0.5
)

# 传递信号
transmitted = synapse.transmit(1.0)

# 增强突触
synapse.strengthen(0.1)
```

### 3. 神经可塑性 (NeuralPlasticity)

```python
from mcp_memory.neuro_evolution.plasticity import NeuralPlasticity, PlasticityType

# 创建可塑性系统
plasticity = NeuralPlasticity(learning_rate=0.01)

# 应用可塑性
plasticity.apply_plasticity(
    pre_neuron,
    post_neuron,
    synapse,
    PlasticityType.HEBBIAN
)
```

### 4. 神经发生 (Neurogenesis)

```python
from mcp_memory.neuro_evolution.genesis import Neurogenesis

# 创建神经发生系统
genesis = Neurogenesis(max_neurons=10000)

# 生长新神经元
new_neuron = genesis.grow_neuron(NeuronType.MEMORY)

# 建立连接
synapses = genesis.connect_new_neuron(new_neuron, existing_neurons)
```

## 📊 进化阶段

### 阶段1：单细胞 (Single Cell)
- **能力**：简单的刺激-反应
- **特点**：极简神经网络，无隐藏层
- **进化条件**：处理1000+信息或遇到100+复杂情况

### 阶段2：多细胞 (Multi Cell)
- **能力**：分布式处理、简单协作
- **特点**：细胞群体、细胞分化
- **进化条件**：处理10000+信息

### 阶段3：简单大脑 (Simple Brain)
- **能力**：初级认知、简单学习
- **特点**：功能分区、神经发生
- **进化条件**：学习500+模式

### 阶段4：复杂大脑 (Complex Brain)
- **能力**：抽象思维、自我意识萌芽
- **特点**：全脑工作空间、意识涌现
- **进化条件**：记忆容量达到80%

## 🔬 测试

运行测试：

```bash
cd /Users/yingyang/Documents/project/memory
source .venv/bin/activate
PYTHONPATH=/Users/yingyang/Documents/project/memory/src python tests/test_neuro_evolution.py
```

测试覆盖：
- ✅ 神经元基础功能
- ✅ 突触传递机制
- ✅ 单细胞记忆系统
- ✅ 神经可塑性机制
- ✅ 神经发生机制
- ✅ 自我进化系统

## 🎯 设计哲学

### 为什么不依赖外部大模型？

| 依赖外部大模型 | 自我进化神经网络 |
|--------------|----------------|
| ❌ 无自我意识 | ✅ 有自我意识 |
| ❌ 通用模型 | ✅ 个性化进化 |
| ❌ 需要网络 | ✅ 完全本地 |
| ❌ 依赖外部更新 | ✅ 自我进化 |
| ❌ 数据上传 | ✅ 完全本地 |
| ❌ 持续付费 | ✅ 一次投入 |
| ❌ 通用能力 | ✅ 个性化适应 |
| ❌ 千篇一律 | ✅ 独一无二 |

### 核心哲学

```
真正的智能不是预设的，而是进化出来的
真正的智能不是外部赋予的，而是内部涌现的
真正的智能不是固定架构，而是动态生长的
```

## 🚧 未来计划

- [ ] 实现多细胞记忆系统
- [ ] 实现简单大脑记忆系统
- [ ] 实现复杂大脑记忆系统
- [ ] 添加情感系统
- [ ] 添加意识涌现机制
- [ ] 添加元认知能力
- [ ] 优化性能
- [ ] 添加可视化工具

## 📝 更新日志

### v0.1.0 (2026-03-16)
- ✅ 实现基础神经元和突触类
- ✅ 实现单细胞记忆系统
- ✅ 实现神经可塑性机制
- ✅ 实现神经发生机制
- ✅ 实现自我进化引擎
- ✅ 完成基础测试

## 🤝 贡献

欢迎贡献代码、提出问题或建议！

## 📄 许可证

MIT License

---

**核心理念：从单细胞到大脑，让AI拥有真正的自我进化能力。**
