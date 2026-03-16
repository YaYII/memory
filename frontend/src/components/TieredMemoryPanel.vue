<template>
  <div class="tiered-memory-panel panel">
    <h3>三层记忆管理</h3>
    
    <div class="tier-tabs">
      <button 
        v-for="tier in tiers" 
        :key="tier.value"
        :class="['tier-tab', { active: currentTier === tier.value }]"
        @click="selectTier(tier.value)"
      >
        <span class="tier-icon">{{ tier.icon }}</span>
        {{ tier.label }}
      </button>
    </div>
    
    <div class="write-section">
      <h4>写入{{ currentTierLabel }}</h4>
      <div class="form-group">
        <input v-model="writeForm.title" type="text" placeholder="标题（可选）" />
      </div>
      <div class="form-group">
        <textarea v-model="writeForm.content" rows="5" placeholder="记忆内容..."></textarea>
      </div>
      <div class="form-group">
        <input v-model="writeForm.keywords" type="text" placeholder="关键词（逗号分隔）" />
      </div>
      <button class="btn-write" @click="writeMemory" :disabled="writing">
        {{ writing ? '写入中...' : '写入记忆' }}
      </button>
    </div>
    
    <div class="query-section">
      <h4>查询{{ currentTierLabel }}</h4>
      <div class="query-form">
        <input v-model="queryText" type="text" placeholder="输入查询内容..." @keyup.enter="queryMemories" />
        <button @click="queryMemories" :disabled="querying">
          {{ querying ? '查询中...' : '查询' }}
        </button>
      </div>
      
      <div class="query-results">
        <div v-if="queryResults.length === 0" class="empty-placeholder">
          暂无查询结果
        </div>
        <div 
          v-for="memory in queryResults" 
          :key="memory.id"
          class="result-item"
          @click="selectMemory(memory)"
        >
          <div class="result-title">{{ memory.title || '无标题' }}</div>
          <div class="result-preview">{{ memory.content?.substring(0, 100) }}...</div>
          <div class="result-meta">
            <span class="result-time">{{ formatTime(memory.timestamp) }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="tier-stats">
      <div class="stat-item">
        <span class="stat-label">存储层</span>
        <span class="stat-value">{{ tierStats.storage }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">思维层</span>
        <span class="stat-value">{{ tierStats.thinking }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">技能层</span>
        <span class="stat-value">{{ tierStats.skill }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMemoryStore } from '@/stores/memory'
import { tieredApi } from '@/api/memory'
import type { Memory, MemoryType } from '@/types/memory'

const emit = defineEmits<{
  memorySelect: [memory: Memory]
}>()

const memoryStore = useMemoryStore()

const tiers = [
  { label: '存储记忆', value: 'storage' as MemoryType, icon: '💾' },
  { label: '思维记忆', value: 'thinking' as MemoryType, icon: '💭' },
  { label: '技能记忆', value: 'skill' as MemoryType, icon: '⚡' }
]

const currentTier = ref<MemoryType>('storage')
const writeForm = ref({
  title: '',
  content: '',
  keywords: ''
})
const writing = ref(false)
const queryText = ref('')
const querying = ref(false)
const queryResults = ref<Memory[]>([])

const currentTierLabel = computed(() => {
  return tiers.find(t => t.value === currentTier.value)?.label || ''
})

const tierStats = computed(() => memoryStore.memoryCountByType)

function selectTier(tier: MemoryType) {
  currentTier.value = tier
  queryResults.value = []
}

async function writeMemory() {
  if (!writeForm.value.content.trim()) {
    memoryStore.addLog('请输入记忆内容', 'warn')
    return
  }
  
  writing.value = true
  try {
    const keywords = writeForm.value.keywords
      .split(',')
      .map(k => k.trim())
      .filter(k => k)
    
    if (currentTier.value === 'storage') {
      await tieredApi.writeStorage({
        content: writeForm.value.content,
        user_id: 'yangying',
        title: writeForm.value.title,
        keywords
      })
    } else if (currentTier.value === 'thinking') {
      await tieredApi.writeThinking({
        content: writeForm.value.content,
        user_id: 'yangying',
        title: writeForm.value.title,
        keywords
      })
    } else if (currentTier.value === 'skill') {
      await tieredApi.writeSkill({
        content: writeForm.value.content,
        user_id: 'yangying',
        title: writeForm.value.title,
        keywords
      })
    }
    
    memoryStore.addLog(`${currentTierLabel.value}写入成功`, 'success')
    writeForm.value = { title: '', content: '', keywords: '' }
    await memoryStore.fetchStats()
  } catch (error) {
    memoryStore.addLog('写入失败: ' + (error as Error).message, 'error')
  } finally {
    writing.value = false
  }
}

async function queryMemories() {
  if (!queryText.value.trim()) {
    memoryStore.addLog('请输入查询内容', 'warn')
    return
  }
  
  querying.value = true
  try {
    const result = await tieredApi.queryMemories({
      query: queryText.value,
      user_id: 'yangying',
      memory_type: currentTier.value,
      top_k: 10
    })
    
    queryResults.value = result.memories || []
    memoryStore.addLog(`查询到 ${queryResults.value.length} 条记忆`, 'success')
  } catch (error) {
    memoryStore.addLog('查询失败: ' + (error as Error).message, 'error')
  } finally {
    querying.value = false
  }
}

function selectMemory(memory: Memory) {
  emit('memorySelect', memory)
}

function formatTime(timestamp: string): string {
  const date = new Date(timestamp)
  return date.toLocaleString('zh-CN')
}
</script>

<style scoped>
.tiered-memory-panel {
  position: absolute;
  top: 20px;
  right: 320px;
  width: 400px;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
}

h3 {
  font-size: 16px;
  margin: 0 0 15px 0;
  text-shadow: 0 0 5px #00ff41;
}

h4 {
  font-size: 13px;
  margin: 15px 0 10px 0;
  color: #00ff41;
}

.tier-tabs {
  display: flex;
  gap: 5px;
  margin-bottom: 15px;
}

.tier-tab {
  flex: 1;
  padding: 10px;
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid rgba(0, 255, 65, 0.3);
  color: #00ff41;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: all 0.3s;
}

.tier-tab.active {
  background: rgba(0, 255, 65, 0.3);
  border-color: #00ff41;
}

.tier-tab:hover {
  background: rgba(0, 255, 65, 0.2);
}

.tier-icon {
  font-size: 14px;
}

.write-section,
.query-section {
  padding: 15px;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.2);
  margin-bottom: 15px;
}

.form-group {
  margin-bottom: 10px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  background: rgba(0, 255, 65, 0.08);
  border: 1px solid rgba(0, 255, 65, 0.3);
  color: #00ff41;
  font-family: inherit;
  font-size: 12px;
}

.form-group textarea {
  resize: vertical;
}

.btn-write {
  width: 100%;
  padding: 10px;
  background: rgba(0, 255, 65, 0.2);
  border: 1px solid #00ff41;
  color: #00ff41;
  cursor: pointer;
  font-family: inherit;
  font-size: 13px;
  transition: all 0.3s;
}

.btn-write:hover:not(:disabled) {
  background: rgba(0, 255, 65, 0.3);
}

.btn-write:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.query-form {
  display: flex;
  gap: 5px;
}

.query-form input {
  flex: 1;
  padding: 8px;
  background: rgba(0, 255, 65, 0.08);
  border: 1px solid rgba(0, 255, 65, 0.3);
  color: #00ff41;
  font-family: inherit;
  font-size: 12px;
}

.query-form button {
  padding: 8px 15px;
  background: rgba(0, 255, 65, 0.2);
  border: 1px solid #00ff41;
  color: #00ff41;
  cursor: pointer;
  font-family: inherit;
  font-size: 12px;
}

.query-results {
  margin-top: 15px;
  max-height: 300px;
  overflow-y: auto;
}

.result-item {
  padding: 10px;
  margin-bottom: 8px;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.2);
  cursor: pointer;
  transition: all 0.3s;
}

.result-item:hover {
  background: rgba(0, 255, 65, 0.15);
  border-color: #00ff41;
}

.result-title {
  font-size: 13px;
  font-weight: bold;
  color: #00ff41;
  margin-bottom: 5px;
}

.result-preview {
  font-size: 11px;
  color: #008f11;
  margin-bottom: 5px;
}

.result-meta {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: #008f11;
}

.empty-placeholder {
  padding: 20px;
  text-align: center;
  color: #008f11;
}

.tier-stats {
  display: flex;
  gap: 10px;
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
  color: #00ff41;
}
</style>
