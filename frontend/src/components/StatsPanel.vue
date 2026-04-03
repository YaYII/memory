<template>
  <div class="stats-panel-compact">
    <div v-if="stats" class="stats-row">
      <div class="stat-item">
        <span class="stat-value">{{ stats.memory_count || 0 }}</span>
        <span class="stat-label">记忆</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-value">{{ stats.tiered_breakdown?.skill || 0 }}</span>
        <span class="stat-label">技能</span>
      </div>
      <div class="stat-item">
        <span class="stat-value">{{ stats.tiered_breakdown?.thinking || 0 }}</span>
        <span class="stat-label">思维</span>
      </div>
      <div class="stat-item">
        <span class="stat-value">{{ stats.tiered_breakdown?.storage || 0 }}</span>
        <span class="stat-label">存储</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span :class="['stat-value', 'status', evolutionStatus?.enabled ? 'active' : 'inactive']">
          {{ evolutionStatus?.enabled ? '运行中' : '已停止' }}
        </span>
        <span class="stat-label">进化</span>
      </div>
      <div class="stat-item">
        <span class="stat-value provider">{{ stats.preferred_provider || '无' }}</span>
        <span class="stat-label">模型</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item data-path-item" :title="stats.data_path || '未知'">
        <span class="stat-value data-path">{{ formatDataPath(stats.data_path) }}</span>
        <span class="stat-label">数据</span>
      </div>
    </div>
    <div v-else class="stats-loading">
      加载中...
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMemoryStore } from '@/stores/memory'
import { storeToRefs } from 'pinia'

const memoryStore = useMemoryStore()
const { stats, evolutionStatus } = storeToRefs(memoryStore)

const formatDataPath = (path: string | undefined): string => {
  if (!path) return '未知'
  if (path.startsWith('/Users/')) {
    const parts = path.split('/')
    const userIndex = parts.indexOf('Users') + 2
    if (userIndex > 1 && userIndex < parts.length) {
      return '~/' + parts.slice(userIndex).join('/')
    }
  }
  if (path.length > 20) {
    return '...' + path.slice(-17)
  }
  return path
}
</script>

<style scoped>
.stats-panel-compact {
  display: flex;
  align-items: center;
}

.stats-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 10px;
}

.stat-value {
  font-size: 14px;
  font-weight: bold;
  color: #00ff41;
}

.stat-value.status.active {
  color: #00ff00;
}

.stat-value.status.inactive {
  color: #ff6666;
}

.stat-value.provider {
  color: #00e5ff;
  text-transform: uppercase;
  font-size: 11px;
}

.stat-value.data-path {
  color: #888;
  font-size: 10px;
  font-family: monospace;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.data-path-item {
  cursor: help;
}

.stat-label {
  font-size: 9px;
  color: #566b61;
  text-transform: uppercase;
}

.stat-divider {
  width: 1px;
  height: 24px;
  background: rgba(0, 255, 106, 0.2);
}

.stats-loading {
  font-size: 11px;
  color: #566b61;
}
</style>
