<template>
  <div class="evolution-config panel">
    <h3>进化配置</h3>
    
    <div v-if="status" class="config-content">
      <div class="status-header">
        <div class="status-indicator" :class="{ active: status.enabled && status.running }"></div>
        <span class="status-text">{{ statusText }}</span>
      </div>

      <div class="config-section">
        <h4>进化模式</h4>
        <div class="profile-selector">
          <button 
            v-for="p in profiles" 
            :key="p.value"
            :class="['profile-btn', { active: currentProfile === p.value }]"
            @click="changeProfile(p.value)"
            :disabled="isLoading"
          >
            <span class="profile-icon">{{ p.icon }}</span>
            <span class="profile-name">{{ p.label }}</span>
          </button>
        </div>
        <div class="profile-desc">{{ currentProfileDesc }}</div>
      </div>

      <div class="config-section">
        <h4>运行状态</h4>
        <div class="status-grid">
          <div class="status-item">
            <span class="item-label">扫描任务</span>
            <span :class="['item-value', status.scan_task_running ? 'running' : 'idle']">
              {{ status.scan_task_running ? '运行中' : '空闲' }}
            </span>
          </div>
          <div class="status-item">
            <span class="item-label">反思任务</span>
            <span :class="['item-value', status.reflection_task_running ? 'running' : 'idle']">
              {{ status.reflection_task_running ? '运行中' : '空闲' }}
            </span>
          </div>
          <div class="status-item">
            <span class="item-label">日反思</span>
            <span :class="['item-value', status.daily_reflection?.running ? 'running' : 'idle']">
              {{ status.daily_reflection?.running ? '运行中' : '空闲' }}
            </span>
          </div>
          <div class="status-item">
            <span class="item-label">自适应</span>
            <span :class="['item-value', status.adaptive ? 'active' : 'inactive']">
              {{ status.adaptive ? '开启' : '关闭' }}
            </span>
          </div>
        </div>
      </div>

      <div class="config-section">
        <h4>统计数据</h4>
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-value">{{ status.total_scanned }}</div>
            <div class="stat-label">总扫描数</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">{{ status.last_scan_processed }}</div>
            <div class="stat-label">上次处理</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">{{ status.daily_reflection?.total_reflections || 0 }}</div>
            <div class="stat-label">反思次数</div>
          </div>
        </div>
      </div>

      <div class="config-section">
        <h4>时间配置</h4>
        <div class="time-info">
          <div class="time-item">
            <span class="time-label">扫描间隔</span>
            <span class="time-value">{{ formatInterval(status.scan_interval_seconds) }}</span>
          </div>
          <div class="time-item">
            <span class="time-label">反思间隔</span>
            <span class="time-value">{{ formatInterval(status.reflection_interval_seconds) }}</span>
          </div>
          <div class="time-item">
            <span class="time-label">扫描批次</span>
            <span class="time-value">{{ status.scan_batch_size }} 条</span>
          </div>
        </div>
      </div>

      <div class="config-section">
        <h4>最近活动</h4>
        <div class="activity-info">
          <div class="activity-item" v-if="status.last_scan_time">
            <span class="activity-label">上次扫描</span>
            <span class="activity-time">{{ formatTime(status.last_scan_time) }}</span>
          </div>
          <div class="activity-item" v-if="status.last_reflection_time">
            <span class="activity-label">上次反思</span>
            <span class="activity-time">{{ formatTime(status.last_reflection_time) }}</span>
          </div>
          <div class="activity-item" v-if="status.daily_reflection?.next_reflection">
            <span class="activity-label">下次反思</span>
            <span class="activity-time">{{ status.daily_reflection.next_reflection }}</span>
          </div>
        </div>
        <div v-if="status.last_reflection_note" class="reflection-note">
          {{ status.last_reflection_note }}
        </div>
      </div>

      <div v-if="status.last_error" class="error-section">
        <div class="error-label">最近错误</div>
        <div class="error-message">{{ status.last_error }}</div>
      </div>

      <div class="config-section">
        <h4>LLM 配置</h4>
        <div class="llm-info">
          <div class="llm-item">
            <span class="llm-label">LLM 状态</span>
            <span :class="['llm-value', status.llm_enabled ? 'enabled' : 'disabled']">
              {{ status.llm_enabled ? '已启用' : '未启用' }}
            </span>
          </div>
          <div class="llm-item" v-if="status.preferred_provider">
            <span class="llm-label">提供商</span>
            <span class="llm-value">{{ status.preferred_provider }}</span>
          </div>
          <div class="llm-item" v-if="status.available_providers?.length">
            <span class="llm-label">可用提供商</span>
            <span class="llm-value">{{ status.available_providers.join(', ') }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="loading">
      <span class="loading-text">加载中...</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useMemoryStore } from '@/stores/memory'
import { storeToRefs } from 'pinia'
import type { EvolutionProfile } from '@/types/memory'

const memoryStore = useMemoryStore()
const { evolutionStatus: status, currentProfile, isLoading } = storeToRefs(memoryStore)

const profiles = [
  { value: 'light' as EvolutionProfile, label: '轻度', icon: '🐢', desc: '低频率扫描和反思，适合资源受限环境' },
  { value: 'standard' as EvolutionProfile, label: '标准', icon: '🚀', desc: '平衡的扫描和反思频率，适合大多数场景' },
  { value: 'aggressive' as EvolutionProfile, label: '激进', icon: '⚡', desc: '高频率扫描和反思，适合快速迭代场景' }
]

const statusText = computed(() => {
  if (!status.value) return '未知'
  if (!status.value.enabled) return '已停止'
  if (status.value.running) return '运行中'
  return '已暂停'
})

const currentProfileDesc = computed(() => {
  const p = profiles.find(p => p.value === currentProfile.value)
  return p?.desc || ''
})

function formatInterval(seconds: number): string {
  if (!seconds) return '-'
  if (seconds < 60) return `${seconds} 秒`
  if (seconds < 3600) return `${Math.floor(seconds / 60)} 分钟`
  return `${Math.floor(seconds / 3600)} 小时`
}

function formatTime(timeStr: string | null): string {
  if (!timeStr) return '-'
  try {
    const date = new Date(timeStr)
    return date.toLocaleString('zh-CN', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
  } catch {
    return timeStr
  }
}

async function changeProfile(profile: EvolutionProfile) {
  if (profile === currentProfile.value) return
  await memoryStore.setEvolutionProfile(profile)
}

onMounted(() => {
  memoryStore.fetchEvolutionStatus()
})
</script>

<style scoped>
.evolution-config {
  padding: 15px;
  min-width: 300px;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}

h3 {
  font-size: 14px;
  margin: 0 0 15px 0;
  text-shadow: 0 0 5px #00ff41;
}

h4 {
  font-size: 12px;
  margin: 0 0 10px 0;
  color: #00ff41;
  border-bottom: 1px solid rgba(0, 255, 65, 0.3);
  padding-bottom: 5px;
}

.status-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  padding: 10px;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.2);
}

.status-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ff0000;
  box-shadow: 0 0 5px #ff0000;
}

.status-indicator.active {
  background: #00ff00;
  box-shadow: 0 0 10px #00ff00;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.status-text {
  font-size: 12px;
  color: #00ff41;
}

.config-section {
  margin-bottom: 15px;
  padding: 10px;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.2);
}

.profile-selector {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}

.profile-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px 5px;
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid rgba(0, 255, 65, 0.3);
  color: #008f11;
  cursor: pointer;
  transition: all 0.3s;
}

.profile-btn:hover {
  background: rgba(0, 255, 65, 0.2);
  border-color: rgba(0, 255, 65, 0.5);
}

.profile-btn.active {
  background: rgba(0, 255, 65, 0.3);
  border-color: #00ff41;
  color: #00ff41;
}

.profile-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.profile-icon {
  font-size: 18px;
}

.profile-name {
  font-size: 11px;
}

.profile-desc {
  font-size: 10px;
  color: #008f11;
  line-height: 1.4;
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}

.status-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  font-size: 11px;
}

.item-label {
  color: #008f11;
}

.item-value {
  color: #00ff41;
}

.item-value.running {
  color: #00ff00;
}

.item-value.idle {
  color: #666;
}

.item-value.active {
  color: #00ff00;
}

.item-value.inactive {
  color: #ff6666;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.stat-item {
  text-align: center;
  padding: 8px;
  background: rgba(0, 255, 65, 0.1);
}

.stat-value {
  font-size: 18px;
  font-weight: bold;
  color: #00ff41;
}

.stat-label {
  font-size: 10px;
  color: #008f11;
  margin-top: 3px;
}

.time-info, .activity-info, .llm-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.time-item, .activity-item, .llm-item {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
}

.time-label, .activity-label, .llm-label {
  color: #008f11;
}

.time-value, .activity-time, .llm-value {
  color: #00ff41;
}

.llm-value.enabled {
  color: #00ff00;
}

.llm-value.disabled {
  color: #ff6666;
}

.reflection-note {
  margin-top: 10px;
  padding: 8px;
  font-size: 10px;
  color: #008f11;
  background: rgba(0, 255, 65, 0.05);
  border-left: 2px solid rgba(0, 255, 65, 0.3);
  line-height: 1.4;
}

.error-section {
  margin-bottom: 15px;
  padding: 10px;
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
}

.error-label {
  font-size: 11px;
  color: #ff6666;
  margin-bottom: 5px;
}

.error-message {
  font-size: 10px;
  color: #ff9999;
  word-break: break-all;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.loading-text {
  color: #008f11;
  font-size: 12px;
}
</style>
