<template>
  <div class="memory-list-panel panel">
    <h1>三层记忆系统</h1>
    
    <div class="memory-type-tabs">
      <button 
        v-for="type in memoryTypes" 
        :key="type.value"
        :class="['memory-tab', { active: currentMemoryType === type.value }]"
        @click="selectType(type.value)"
      >
        {{ type.label }}
      </button>
    </div>
    
    <div class="tiered-stats">
      <div class="stat-item">
        <span class="stat-label">技能</span>
        <span class="stat-value">{{ memoryCount.skill }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">思维</span>
        <span class="stat-value">{{ memoryCount.thinking }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">存储</span>
        <span class="stat-value">{{ memoryCount.storage }}</span>
      </div>
    </div>
    
    <div class="memory-list">
      <div v-if="isLoading" class="memory-item-placeholder">
        加载中...
      </div>
      <div v-else-if="filteredMemories.length === 0" class="memory-item-placeholder">
        暂无记忆
      </div>
      <div 
        v-else
        v-for="memory in filteredMemories" 
        :key="memory.id"
        class="memory-item"
        @click="selectMemory(memory)"
      >
        <div class="memory-title">{{ memory.title }}</div>
        <div class="memory-meta">
          <span class="memory-type-badge" :class="memory.memory_type">
            {{ getMemoryTypeLabel(memory.memory_type) }}
          </span>
          <span class="memory-time">{{ formatTime(memory.timestamp) }}</span>
        </div>
      </div>
    </div>
    
    <div class="memory-search-box">
      <input 
        v-model="searchQuery"
        type="text" 
        placeholder="搜索三层记忆..."
        @keyup.enter="handleSearch"
      />
      <button @click="handleSearch">搜索</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMemoryStore } from '@/stores/memory'
import { storeToRefs } from 'pinia'
import type { Memory, MemoryType } from '@/types/memory'

const emit = defineEmits<{
  memorySelect: [memory: Memory]
}>()

const memoryStore = useMemoryStore()
const { filteredMemories, memoryCountByType, isLoading } = storeToRefs(memoryStore)
const currentMemoryType = computed(() => memoryStore.currentMemoryType)

const searchQuery = ref('')

const memoryTypes = [
  { label: '全部', value: 'all' as MemoryType },
  { label: '技能记忆', value: 'skill' as MemoryType },
  { label: '思维记忆', value: 'thinking' as MemoryType },
  { label: '存储记忆', value: 'storage' as MemoryType }
]

const memoryCount = computed(() => memoryCountByType.value)

function selectType(type: MemoryType) {
  memoryStore.setMemoryType(type)
}

function selectMemory(memory: Memory) {
  emit('memorySelect', memory)
}

function handleSearch() {
  if (searchQuery.value.trim()) {
    memoryStore.searchMemories(searchQuery.value)
  }
}

function getMemoryTypeLabel(type?: string): string {
  const labels: Record<string, string> = {
    'storage': '存储',
    'thinking': '思维',
    'skill': '技能'
  }
  return labels[type || ''] || type || '未知'
}

function formatTime(timestamp: string): string {
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)
  
  if (minutes < 60) return `${minutes}分钟前`
  if (hours < 24) return `${hours}小时前`
  return `${days}天前`
}
</script>

<style scoped>
.panel {
  background: rgba(0, 10, 20, 0.75);
  border: 1px solid rgba(0, 255, 65, 0.5);
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.1);
  backdrop-filter: blur(8px);
  padding: 15px;
  color: #00ff41;
  font-family: 'Consolas', 'Monaco', monospace;
}

.memory-list-panel {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 320px;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
}

h1 {
  font-size: 16px;
  margin: 0 0 15px 0;
  text-shadow: 0 0 5px #00ff41;
}

.memory-type-tabs {
  display: flex;
  gap: 5px;
  margin-bottom: 15px;
}

.memory-tab {
  flex: 1;
  padding: 8px;
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid rgba(0, 255, 65, 0.3);
  color: #00ff41;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.memory-tab.active {
  background: #00ff41;
  color: #000;
  border-color: #00ff41;
  box-shadow: 0 0 10px #00ff41;
}

.memory-tab:hover {
  background: rgba(0, 255, 65, 0.2);
  border-color: #00ff41;
}

.tiered-stats {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  padding: 10px;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.2);
}

.stat-item {
  flex: 1;
  text-align: center;
}

.stat-label {
  display: block;
  font-size: 11px;
  color: #008f11;
  margin-bottom: 5px;
}

.stat-value {
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: #00ffff;
  text-shadow: 0 0 5px #00ffff;
}

.memory-list {
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 15px;
}

.memory-item {
  padding: 10px;
  margin-bottom: 8px;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.2);
  border-left: 3px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: fadeIn 0.5s ease;
}

.memory-item:hover {
  background: rgba(0, 255, 65, 0.15);
  border-color: #00ff41;
  transform: translateX(5px);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}

.memory-title {
  font-size: 13px;
  margin-bottom: 5px;
  color: #00ff41;
}

.memory-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
}

.memory-type-badge {
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 10px;
}

.memory-type-badge.storage {
  background: rgba(0, 255, 65, 0.3);
  color: #00ff41;
}

.memory-type-badge.thinking {
  background: rgba(255, 0, 255, 0.3);
  color: #ff00ff;
}

.memory-type-badge.skill {
  background: rgba(0, 255, 255, 0.3);
  color: #00ffff;
}

.memory-time {
  color: #008f11;
}

.memory-search-box {
  display: flex;
  gap: 5px;
}

.memory-search-box input {
  flex: 1;
  padding: 8px;
  background: rgba(0, 255, 65, 0.08);
  border: 1px solid #00ff41;
  color: #00ff41;
  font-family: inherit;
  font-size: 12px;
}

.memory-search-box button {
  padding: 8px 15px;
  background: rgba(0, 255, 65, 0.2);
  border: 1px solid #00ff41;
  color: #00ff41;
  cursor: pointer;
  font-family: inherit;
}

.memory-item-placeholder {
  padding: 20px;
  text-align: center;
  color: #008f11;
}
</style>
