<template>
  <div class="llm-interactions-panel panel">
    <div class="panel-header">
      <h3>LLM 交互历史</h3>
      <button class="refresh-btn" @click="loadInteractions" :disabled="isLoading">
        {{ isLoading ? '加载中...' : '刷新' }}
      </button>
    </div>

    <div class="stats-summary">
      <div class="stat-item">
        <span class="stat-label">总交互</span>
        <span class="stat-value">{{ interactions.length }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">总Token</span>
        <span class="stat-value">{{ totalTokens }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">平均响应</span>
        <span class="stat-value">{{ avgResponseTime }}ms</span>
      </div>
    </div>

    <div class="interactions-list">
      <div v-if="isLoading" class="loading-placeholder">
        加载中...
      </div>
      <div v-else-if="paginatedInteractions.length === 0" class="empty-placeholder">
        暂无交互记录
      </div>
      <div 
        v-else
        v-for="interaction in paginatedInteractions" 
        :key="interaction.id"
        class="interaction-item"
        @click="toggleDetail(interaction.id)"
      >
        <div class="interaction-header">
          <span class="interaction-model">{{ interaction.model }}</span>
          <span class="interaction-time">{{ formatTime(interaction.timestamp) }}</span>
        </div>
        <div class="interaction-stats">
          <span class="token-info">
            <span class="stat-badge input-token">输入: {{ interaction.input_tokens || 0 }}</span>
            <span class="stat-badge output-token">输出: {{ interaction.output_tokens || 0 }}</span>
          </span>
          <span class="response-time" :class="getResponseTimeClass(interaction.response_time)">
            {{ interaction.response_time || 0 }}ms
          </span>
        </div>
        <div v-if="expandedId === interaction.id" class="interaction-detail">
          <div class="detail-section">
            <div class="detail-label">提示词:</div>
            <div class="detail-content prompt">{{ truncateText(interaction.prompt, 500) }}</div>
          </div>
          <div class="detail-section">
            <div class="detail-label">响应:</div>
            <div class="detail-content response">{{ truncateText(interaction.response, 500) }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="pagination" v-if="totalPages > 1">
      <button 
        class="page-btn" 
        :disabled="currentPage === 1" 
        @click="currentPage--"
      >
        上一页
      </button>
      <span class="page-info">{{ currentPage }} / {{ totalPages }}</span>
      <button 
        class="page-btn" 
        :disabled="currentPage === totalPages" 
        @click="currentPage++"
      >
        下一页
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { llmApi } from '@/api/memory'

interface LLMInteraction {
  id: string
  model: string
  prompt: string
  response: string
  input_tokens: number
  output_tokens: number
  response_time: number
  timestamp: string
}

const interactions = ref<LLMInteraction[]>([])
const isLoading = ref(false)
const currentPage = ref(1)
const pageSize = 10
const expandedId = ref<string | null>(null)

const totalTokens = computed(() => {
  return interactions.value.reduce((sum, item) => {
    return sum + (item.input_tokens || 0) + (item.output_tokens || 0)
  }, 0)
})

const avgResponseTime = computed(() => {
  if (interactions.value.length === 0) return 0
  const total = interactions.value.reduce((sum, item) => sum + (item.response_time || 0), 0)
  return Math.round(total / interactions.value.length)
})

const totalPages = computed(() => {
  return Math.ceil(interactions.value.length / pageSize)
})

const paginatedInteractions = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  return interactions.value.slice(start, end)
})

async function loadInteractions() {
  isLoading.value = true
  try {
    const response = await llmApi.getInteractions(100)
    interactions.value = response.interactions || response.items || response || []
  } catch (error) {
    console.error('Failed to load LLM interactions:', error)
    interactions.value = []
  } finally {
    isLoading.value = false
  }
}

function toggleDetail(id: string) {
  expandedId.value = expandedId.value === id ? null : id
}

function formatTime(timestamp: string): string {
  const date = new Date(timestamp)
  return date.toLocaleString('zh-CN', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

function truncateText(text: string, maxLength: number): string {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

function getResponseTimeClass(time: number): string {
  if (time < 1000) return 'fast'
  if (time < 3000) return 'medium'
  return 'slow'
}

onMounted(() => {
  loadInteractions()
})
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

.llm-interactions-panel {
  width: 100%;
  max-width: 600px;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.panel-header h3 {
  margin: 0;
  font-size: 16px;
  text-shadow: 0 0 5px #00ff41;
}

.refresh-btn {
  padding: 6px 12px;
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid rgba(0, 255, 65, 0.3);
  color: #00ff41;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s;
}

.refresh-btn:hover:not(:disabled) {
  background: rgba(0, 255, 65, 0.2);
}

.refresh-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.stats-summary {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  padding: 10px;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.2);
}

.stats-summary .stat-item {
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
  font-size: 16px;
  font-weight: bold;
  color: #00ff41;
}

.interactions-list {
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 15px;
}

.loading-placeholder,
.empty-placeholder {
  padding: 30px;
  text-align: center;
  color: #008f11;
}

.interaction-item {
  padding: 12px;
  margin-bottom: 8px;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.2);
  cursor: pointer;
  transition: all 0.3s;
}

.interaction-item:hover {
  background: rgba(0, 255, 65, 0.1);
  border-color: #00ff41;
}

.interaction-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.interaction-model {
  font-size: 13px;
  font-weight: bold;
  color: #00ff41;
}

.interaction-time {
  font-size: 11px;
  color: #008f11;
}

.interaction-stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
}

.token-info {
  display: flex;
  gap: 8px;
}

.stat-badge {
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 10px;
}

.stat-badge.input-token {
  background: rgba(0, 255, 255, 0.2);
  color: #00ffff;
}

.stat-badge.output-token {
  background: rgba(255, 0, 255, 0.2);
  color: #ff00ff;
}

.response-time {
  font-weight: bold;
}

.response-time.fast {
  color: #00ff00;
}

.response-time.medium {
  color: #ffaa00;
}

.response-time.slow {
  color: #ff4444;
}

.interaction-detail {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(0, 255, 65, 0.2);
}

.detail-section {
  margin-bottom: 10px;
}

.detail-label {
  font-size: 11px;
  color: #008f11;
  margin-bottom: 5px;
}

.detail-content {
  padding: 8px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 255, 65, 0.1);
  font-size: 11px;
  line-height: 1.5;
  max-height: 150px;
  overflow-y: auto;
  white-space: pre-wrap;
  word-break: break-all;
}

.detail-content.prompt {
  color: #00ffff;
}

.detail-content.response {
  color: #00ff41;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding-top: 10px;
  border-top: 1px solid rgba(0, 255, 65, 0.2);
}

.page-btn {
  padding: 6px 12px;
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid rgba(0, 255, 65, 0.3);
  color: #00ff41;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s;
}

.page-btn:hover:not(:disabled) {
  background: rgba(0, 255, 65, 0.2);
}

.page-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.page-info {
  font-size: 12px;
  color: #008f11;
}
</style>
