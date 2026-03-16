<template>
  <div class="dashboard">
    <MemoryGraph 
      :graph-data="graphData"
      :is-loading="isLoading"
      @node-click="handleNodeClick"
    />
    
    <MemoryList 
      @memory-select="handleMemorySelect"
    />
    
    <LogPanel />
    
    <StatsPanel />
    
    <div v-if="selectedMemory" class="memory-detail-modal" @click="closeDetail">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h2>{{ selectedMemory.title }}</h2>
          <button class="close-btn" @click="closeDetail">×</button>
        </div>
        <div class="modal-body">
          <div class="detail-section">
            <h4>类型</h4>
            <span :class="['type-badge', selectedMemory.memory_type]">
              {{ getMemoryTypeLabel(selectedMemory.memory_type) }}
            </span>
          </div>
          <div class="detail-section">
            <h4>内容</h4>
            <p>{{ selectedMemory.content }}</p>
          </div>
          <div class="detail-section" v-if="selectedMemory.keywords?.length">
            <h4>关键词</h4>
            <div class="keywords">
              <span v-for="keyword in selectedMemory.keywords" :key="keyword" class="keyword-tag">
                {{ keyword }}
              </span>
            </div>
          </div>
          <div class="detail-section">
            <h4>元数据</h4>
            <div class="metadata">
              <div class="meta-item">
                <span class="meta-label">作用域:</span>
                <span class="meta-value">{{ selectedMemory.scope }}</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">时间:</span>
                <span class="meta-value">{{ selectedMemory.timestamp }}</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">重要性:</span>
                <span class="meta-value">{{ selectedMemory.importance }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMemoryStore } from '@/stores/memory'
import { storeToRefs } from 'pinia'
import MemoryGraph from '@/components/MemoryGraph.vue'
import MemoryList from '@/components/MemoryList.vue'
import LogPanel from '@/components/LogPanel.vue'
import StatsPanel from '@/components/StatsPanel.vue'
import type { Memory, GraphNode } from '@/types/memory'

const memoryStore = useMemoryStore()
const { graphData, isLoading } = storeToRefs(memoryStore)

const selectedMemory = ref<Memory | null>(null)

onMounted(async () => {
  memoryStore.addLog('初始化系统...', 'info')
  
  try {
    await memoryStore.fetchStats()
    memoryStore.addLog('加载统计数据完成', 'success')
    
    await memoryStore.fetchGraph()
    memoryStore.addLog('加载记忆图谱完成', 'success')
    
    await memoryStore.fetchEvolutionStatus()
    memoryStore.addLog('加载进化状态完成', 'success')
  } catch (error) {
    memoryStore.addLog('初始化失败: ' + (error as Error).message, 'error')
  }
})

function handleNodeClick(node: GraphNode) {
  memoryStore.addLog(`点击节点: ${node.label || node.id}`, 'info')
}

function handleMemorySelect(memory: Memory) {
  selectedMemory.value = memory
  memoryStore.addLog(`选择记忆: ${memory.title}`, 'info')
}

function closeDetail() {
  selectedMemory.value = null
}

function getMemoryTypeLabel(type?: string): string {
  const labels: Record<string, string> = {
    'storage': '存储记忆',
    'thinking': '思维记忆',
    'skill': '技能记忆'
  }
  return labels[type || ''] || type || '未知'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Consolas', 'Monaco', monospace;
  background: #000;
  color: #00ff41;
  overflow: hidden;
}

.dashboard {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: radial-gradient(circle at center, #0a1a0a 0%, #000000 100%);
}

.panel {
  background: rgba(0, 10, 20, 0.75);
  border: 1px solid rgba(0, 255, 65, 0.5);
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.1);
  backdrop-filter: blur(8px);
  padding: 15px;
  color: #00ff41;
}

.memory-detail-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  background: rgba(0, 10, 20, 0.95);
  border: 1px solid rgba(0, 255, 65, 0.5);
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.2);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid rgba(0, 255, 65, 0.3);
}

.modal-header h2 {
  font-size: 18px;
  text-shadow: 0 0 5px #00ff41;
}

.close-btn {
  width: 30px;
  height: 30px;
  background: rgba(255, 0, 0, 0.2);
  border: 1px solid #ff0000;
  color: #ff0000;
  font-size: 20px;
  cursor: pointer;
}

.modal-body {
  padding: 20px;
}

.detail-section {
  margin-bottom: 20px;
}

.detail-section h4 {
  font-size: 12px;
  color: #008f11;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.detail-section p {
  font-size: 13px;
  line-height: 1.6;
  color: #00ff41;
}

.type-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 3px;
  font-size: 11px;
}

.type-badge.storage {
  background: rgba(0, 255, 65, 0.3);
  color: #00ff41;
}

.type-badge.thinking {
  background: rgba(255, 0, 255, 0.3);
  color: #ff00ff;
}

.type-badge.skill {
  background: rgba(0, 255, 255, 0.3);
  color: #00ffff;
}

.keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.keyword-tag {
  padding: 3px 8px;
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid rgba(0, 255, 65, 0.3);
  font-size: 11px;
}

.metadata {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.meta-item {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.2);
}

.meta-label {
  color: #008f11;
  font-size: 11px;
}

.meta-value {
  color: #00ff41;
  font-size: 11px;
}
</style>
