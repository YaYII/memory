<template>
  <div class="stats-panel panel">
    <h3>系统状态</h3>
    
    <div v-if="stats" class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">📊</div>
        <div class="stat-info">
          <div class="stat-value">{{ stats.memory_count }}</div>
          <div class="stat-label">总记忆数</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">🧠</div>
        <div class="stat-info">
          <div class="stat-value">{{ stats.tiered_count }}</div>
          <div class="stat-label">三层记忆</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">⚡</div>
        <div class="stat-info">
          <div class="stat-value">{{ stats.tiered_breakdown.skill }}</div>
          <div class="stat-label">技能记忆</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">💭</div>
        <div class="stat-info">
          <div class="stat-value">{{ stats.tiered_breakdown.thinking }}</div>
          <div class="stat-label">思维记忆</div>
        </div>
      </div>
    </div>
    
    <div v-if="evolutionStatus" class="evolution-status">
      <h4>进化系统</h4>
      <div class="status-item">
        <span class="status-label">状态:</span>
        <span :class="['status-value', evolutionStatus.enabled ? 'active' : 'inactive']">
          {{ evolutionStatus.enabled ? '运行中' : '已停止' }}
        </span>
      </div>
      <div class="status-item">
        <span class="status-label">模式:</span>
        <span class="status-value">{{ evolutionStatus.profile }}</span>
      </div>
      <div class="status-item">
        <span class="status-label">扫描次数:</span>
        <span class="status-value">{{ evolutionStatus.total_scanned }}</span>
      </div>
    </div>
    
    <div v-if="llmEnabled" class="llm-status">
      <h4>LLM 状态</h4>
      <div class="status-item">
        <span class="status-label">提供商:</span>
        <span class="status-value">{{ preferredProvider }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMemoryStore } from '@/stores/memory'
import { storeToRefs } from 'pinia'

const memoryStore = useMemoryStore()
const { stats, evolutionStatus } = storeToRefs(memoryStore)

const llmEnabled = computed(() => stats.value?.llm_enabled || false)
const preferredProvider = computed(() => stats.value?.preferred_provider || '未配置')
</script>

<style scoped>
.stats-panel {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 280px;
}

h3 {
  font-size: 14px;
  margin: 0 0 15px 0;
  text-shadow: 0 0 5px #00ff41;
}

h4 {
  font-size: 12px;
  margin: 15px 0 10px 0;
  color: #00ff41;
  border-bottom: 1px solid rgba(0, 255, 65, 0.3);
  padding-bottom: 5px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 15px;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.2);
}

.stat-icon {
  font-size: 20px;
}

.stat-info {
  flex: 1;
}

.stat-value {
  font-size: 16px;
  font-weight: bold;
  color: #00ff41;
}

.stat-label {
  font-size: 10px;
  color: #008f11;
}

.evolution-status, .llm-status {
  padding: 10px;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.2);
  margin-top: 10px;
}

.status-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  font-size: 11px;
}

.status-label {
  color: #008f11;
}

.status-value {
  color: #00ff41;
}

.status-value.active {
  color: #00ff00;
}

.status-value.inactive {
  color: #ff0000;
}
</style>
