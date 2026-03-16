<template>
  <div class="brain-status panel">
    <h3>🧠 AI大脑状态</h3>

    <!-- 自我意识信息 -->
    <div class="awareness-section">
      <h4>自我意识</h4>
      <div class="awareness-grid">
        <div class="awareness-card">
          <div class="card-icon">🤖</div>
          <div class="card-content">
            <div class="card-title">身份认知</div>
            <div class="card-value">{{ brainStore.getSelfAwareness()?.identity || 'AI Brain' }}</div>
            <div class="card-version">v{{ brainStore.getSelfAwareness()?.version || '1.0.0' }}</div>
          </div>
        </div>

        <div class="awareness-card">
          <div class="card-icon">⚡</div>
          <div class="card-content">
            <div class="card-title">核心能力</div>
            <div class="capabilities-list">
              <div v-for="capability in brainStore.getDisplayedCapabilities()" :key="capability">
                {{ capability }}
              </div>
            </div>
          </div>
        </div>

        <div class="awareness-card">
          <div class="card-icon">🎯</div>
          <div class="card-content">
            <div class="card-title">当前目标</div>
            <div class="goals-list" v-if="brainStore.getTopGoals().length > 0">
              <div v-for="goal in brainStore.getTopGoals()" :key="goal.goal_id">
                <div class="goal-progress">
                  <span class="goal-name">{{ goal.description }}</span>
                  <progress :value="goal.progress * 100" max="100" />
                </div>
              </div>
            </div>
            <div v-else class="no-goals">暂无活跃目标</div>
          </div>
        </div>

        <div class="awareness-card">
          <div class="card-icon">💎</div>
          <div class="card-content">
            <div class="card-title">进化状态</div>
            <div class="evolution-info">
              <div class="evolution-generation">第 {{ brainStore.getSelfAwareness()?.evolution_generation || 0 }} 代</div>
              <div class="total-experiences">{{ brainStore.getSelfAwareness()?.total_experiences || 0 }} 次经验</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 主动认知状态 -->
    <div class="cognition-section">
      <h4>主动认知</h4>
      <div class="cognition-grid">
        <div class="cognition-card">
          <div class="card-icon">👁️</div>
          <div class="card-content">
            <div class="card-title">注意力系统</div>
            <div class="cognition-stats">
              <div class="stat-row">
                <span class="stat-label">阈值</span>
                <span class="stat-value">{{ brainStore.getCognitionStatus()?.attention_threshold?.toFixed(2) || 'N/A' }}</span>
              </div>
              <div class="stat-row">
                <span class="stat-label">待处理问题</span>
                <span class="stat-value">{{ brainStore.getCognitionStatus()?.pending_questions || 0 }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="cognition-card">
          <div class="card-icon">🔍</div>
          <div class="card-content">
            <div class="card-title">好奇心引擎</div>
            <div class="cognition-stats">
              <div class="stat-row">
                <span class="stat-label">好奇心水平</span>
                <span class="stat-value">{{ brainStore.formatPercent(brainStore.getCognitionStatus()?.curiosity_level || 0) }}</span>
              </div>
              <div class="stat-row">
                <span class="stat-label">待验证假设</span>
                <span class="stat-value">{{ brainStore.getCognitionStatus()?.pending_hypotheses || 0 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 价值系统 -->
    <div class="value-section">
      <h4>价值判断系统</h4>
      <div class="value-stats">
        <div class="value-chart">
          <div class="chart-item">
            <div class="chart-bar" :style="{ width: (valueChart.novelty * 100) + '%' }"></div>
            <div class="chart-label">新颖性</div>
          </div>
          <div class="chart-item">
            <div class="chart-bar" :style="{ width: (valueChart.utility * 100) + '%' }"></div>
            <div class="chart-label">实用性</div>
          </div>
          <div class="chart-item">
            <div class="chart-bar" :style="{ width: (valueChart.emotional * 100) + '%' }"></div>
            <div class="chart-label">情感强度</div>
          </div>
          <div class="chart-item">
            <div class="chart-bar" :style="{ width: (valueChart.frequency * 100) + '%' }"></div>
            <div class="chart-label">使用频率</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 动态记忆 -->
    <div class="memory-section">
      <h4>动态记忆</h4>
      <div class="memory-stats">
        <div class="memory-pie">
          <div class="pie-segment active" :style="{ flex: brainStore.getDynamicMemory()?.active_memories || 0 }"></div>
          <div class="pie-segment consolidated" :style="{ flex: brainStore.getDynamicMemory()?.consolidated_memories || 0 }"></div>
          <div class="pie-segment decaying" :style="{ flex: brainStore.getDynamicMemory()?.decaying_memories || 0 }"></div>
          <div class="pie-segment forgotten" :style="{ flex: brainStore.getDynamicMemory()?.forgotten_memories || 0 }"></div>
          <div class="pie-legend">
            <div class="legend-item active"></div> 活跃
            <div class="legend-item consolidated"></div> 巩固
            <div class="legend-item decaying"></div> 衰退
            <div class="legend-item forgotten"></div> 遗忘
          </div>
        </div>
      </div>
    </div>

    <!-- 元认知 -->
    <div class="metacognition-section">
      <h4>元认知</h4>
      <div class="metacognition-stats">
        <div class="meta-grid">
          <div class="meta-item">
            <div class="meta-label">认知负荷</div>
            <div class="meta-value" :class="brainStore.getLoadClass(brainStore.getMetacognition()?.current_state?.cognitive_load || 0)">
              {{ brainStore.formatPercent(brainStore.getMetacognition()?.current_state?.cognitive_load || 0) }}
            </div>
          </div>

          <div class="meta-item">
            <div class="meta-label">专注度</div>
            <div class="meta-value" :class="brainStore.getFocusClass(brainStore.getMetacognition()?.current_state?.focus_level || 0)">
              {{ brainStore.formatPercent(brainStore.getMetacognition()?.current_state?.focus_level || 0) }}
            </div>
          </div>

          <div class="meta-item">
            <div class="meta-label">自信度</div>
            <div class="meta-value" :class="brainStore.getConfidenceClass(brainStore.getMetacognition()?.current_state?.confidence_level || 0)">
              {{ brainStore.formatPercent(brainStore.getMetacognition()?.current_state?.confidence_level || 0) }}
            </div>
          </div>
        </div>

        <div class="detected-biases" v-if="detectedBiases.length > 0">
          <h5>检测到的认知偏差</h5>
          <div class="biases-list">
            <div v-for="bias in detectedBiases" :key="bias" class="bias-item">
              {{ bias }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="status-footer">
      <div class="cycle-info">
        <span class="cycle-count">总周期: {{ brainStore.brainStatus?.total_cycles || 0 }}</span>
        <span class="last-update">最后更新: {{ formattedLastUpdate }}</span>
      </div>
      <button @click="refreshStatus" :disabled="isLoading" class="refresh-btn">
        {{ isLoading ? '刷新中...' : '刷新状态' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, computed } from 'vue'
import { useBrainStore } from '@/stores/brain'
import { storeToRefs } from 'pinia'

const brainStore = useBrainStore()
const { isLoading, lastUpdate } = storeToRefs(brainStore)

const valueChart = computed(() => brainStore.getValueChart())

const formattedLastUpdate = computed(() => {
  if (!lastUpdate.value) return '从未更新'
  return lastUpdate.value.toLocaleTimeString('zh-CN')
})

const detectedBiases = computed(() => {
  const meta = brainStore.getMetacognition()
  return meta?.detected_biases || []
})

let refreshInterval: number | null = null

onMounted(() => {
  brainStore.fetchBrainStatus()

  // 启动定期刷新
  refreshInterval = window.setInterval(() => {
    brainStore.fetchBrainStatus()
  }, 5000) // 每5秒刷新一次
})

onUnmounted(() => {
  if (refreshInterval) {
    clearInterval(refreshInterval)
  }
})

function refreshStatus() {
  brainStore.fetchBrainStatus()
}
</script>

<style scoped>
.brain-status {
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.awareness-section,
.cognition-section,
.value-section,
.memory-section,
.metacognition-section {
  padding: 15px;
  background: rgba(0, 255, 65, 0.03);
  border: 1px solid rgba(0, 255, 65, 0.2);
  border-radius: 8px;
}

h4 {
  font-size: 13px;
  margin: 0 0 12px 0;
  color: #00ff41;
  border-bottom: 1px solid rgba(0, 255, 65, 0.3);
  padding-bottom: 6px;
}

h5 {
  font-size: 11px;
  margin: 0 0 8px 0;
  color: #ff6666;
}

.awareness-grid,
.cognition-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.awareness-card,
.cognition-card {
  display: flex;
  gap: 10px;
  padding: 12px;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.15);
  border-radius: 8px;
}

.card-icon {
  font-size: 24px;
  min-width: 32px;
}

.card-content {
  flex: 1;
}

.card-title {
  font-size: 12px;
  font-weight: bold;
  color: #008f11;
  margin-bottom: 8px;
}

.card-value,
.card-version {
  font-size: 13px;
  color: #00ff41;
  margin-bottom: 4px;
}

.card-version {
  font-size: 11px;
  color: #008f11;
}

.capabilities-list,
.goals-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.capabilities-list > div {
  font-size: 11px;
  color: #008f11;
  padding: 4px 8px;
  background: rgba(0, 255, 65, 0.05);
  border-radius: 4px;
}

.no-goals {
  font-size: 11px;
  color: #666;
  font-style: italic;
}

.goal-progress {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.goal-name {
  font-size: 11px;
  color: #008f11;
}

.goal-name + progress {
  width: 100%;
  height: 6px;
}

.evolution-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.evolution-generation {
  font-size: 13px;
  font-weight: bold;
  color: #00ff41;
}

.total-experiences {
  font-size: 11px;
  color: #008f11;
}

.cognition-stats,
.value-stats,
.memory-stats,
.metacognition-stats {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.stat-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: #008f11;
}

.stat-label {
  color: #008f11;
}

.stat-value {
  font-weight: bold;
  color: #00ff41;
}

.value-chart {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.chart-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.chart-bar {
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(90deg, #00ff41, #00cc66);
  transition: width 0.3s;
  min-width: 20px;
}

.chart-label {
  font-size: 11px;
  color: #008f11;
  min-width: 60px;
}

.memory-pie {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pie-segment {
  height: 16px;
  border-radius: 4px;
  transition: flex 0.3s;
  min-width: 10px;
}

.pie-segment.active {
  background: #00ff00;
}

.pie-segment.consolidated {
  background: #00cc66;
}

.pie-segment.decaying {
  background: #ff9900;
}

.pie-segment.forgotten {
  background: #ff6666;
}

.pie-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 10px;
  color: #008f11;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.legend-item::before {
  content: '■';
}

.legend-item.active::before {
  color: #00ff00;
}

.legend-item.consolidated::before {
  color: #00cc66;
}

.legend-item.decaying::before {
  color: #ff9900;
}

.legend-item.forgotten::before {
  color: #ff6666;
}

.meta-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.meta-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background: rgba(0, 255, 65, 0.05);
  border-radius: 6px;
}

.meta-label {
  font-size: 11px;
  color: #008f11;
  margin-bottom: 6px;
}

.meta-value {
  font-size: 16px;
  font-weight: bold;
}

.meta-value.low {
  color: #00ff00;
}

.meta-value.medium {
  color: #ff9900;
}

.meta-value.high {
  color: #ff0000;
}

.detected-biases {
  margin-top: 12px;
  padding: 10px;
  background: rgba(255, 0, 0, 0.05);
  border: 1px solid rgba(255, 0, 0, 0.2);
  border-radius: 6px;
}

.biases-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.bias-item {
  font-size: 11px;
  color: #ff0000;
  padding: 4px 8px;
  background: rgba(255, 0, 0, 0.1);
  border-radius: 4px;
}

.status-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: rgba(0, 255, 65, 0.03);
  border: 1px solid rgba(0, 255, 65, 0.2);
  border-radius: 8px;
}

.cycle-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.cycle-count,
.last-update {
  font-size: 11px;
  color: #008f11;
}

.refresh-btn {
  padding: 8px 16px;
  background: #00ff41;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  font-family: inherit;
  transition: all 0.2s;
}

.refresh-btn:hover:not(:disabled) {
  background: #00cc66;
}

.refresh-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
