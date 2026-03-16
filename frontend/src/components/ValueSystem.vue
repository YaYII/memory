<template>
  <div class="value-system panel">
    <h3>💎 价值观系统</h3>

    <div class="value-overview">
      <div class="value-header">
        <h4>当前价值观</h4>
        <div class="value-summary">
          <div class="summary-card">
            <div class="summary-value">{{ averageValue }}%</div>
            <div class="summary-label">综合价值</div>
          </div>
        </div>
      </div>

      <div class="values-grid">
        <div v-for="(value, key) in values" :key="key" class="value-item">
          <div class="value-bar-container">
            <div class="value-label">{{ brainStore.formatValueName(key) }}</div>
            <div class="value-bar">
              <div class="value-fill" :style="{ width: (value * 100) + '%' }"></div>
              <div class="value-text">{{ (value * 100).toFixed(0) }}%</div>
            </div>
          </div>
          <div class="value-trend" :class="getTrendClass(valueTrends[key])">
            {{ getTrendIcon(valueTrends[key]) }}
          </div>
        </div>
      </div>
    </div>

    <div class="value-details">
      <h4>价值统计</h4>
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-icon">📊</div>
          <div class="stat-content">
            <div class="stat-label">总评估次数</div>
            <div class="stat-value">{{ stats.total_evaluated }}</div>
          </div>
        </div>

        <div class="stat-item">
          <div class="stat-icon">🥇</div>
          <div class="stat-content">
            <div class="stat-label">高价值记忆</div>
            <div class="stat-value">{{ stats.high_value_count }}</div>
          </div>
        </div>

        <div class="stat-item">
          <div class="stat-icon">📈</div>
          <div class="stat-content">
            <div class="stat-label">平均价值</div>
            <div class="stat-value">{{ stats.average_value?.toFixed(2) }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="learning-trends">
      <h4>学习趋势</h4>
      <div class="trends-chart">
        <div class="trend-item" v-for="trend in learningTrends" :key="trend.date">
          <div class="trend-date">{{ trend.date }}</div>
          <div class="trend-value" :class="getTrendValueClass(trend.success_rate)">
            {{ (trend.success_rate * 100).toFixed(0) }}%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useBrainStore } from '@/stores/brain'

const brainStore = useBrainStore()

onMounted(() => {
  brainStore.fetchBrainStatus()
})

const values = computed(() => {
  const weights = brainStore.getValueSystem()?.weights || {}
  return weights
})

const averageValue = computed(() => {
  const vals = Object.values(values.value)
  if (vals.length === 0) return 0
  return (vals.reduce((a, b) => a + b, 0) / vals.length) * 100
})

const valueTrends = computed(() => {
  // 简化的趋势数据
  const weights = values.value
  return Object.keys(weights).reduce((acc, key) => {
    acc[key] = (Math.random() - 0.5) * 0.1 // Small random trend
    return acc
  }, {} as Record<string, number>)
})

const stats = computed(() => {
  return brainStore.getValueSystem()?.statistics || {
    total_evaluated: 0,
    high_value_count: 0,
    average_value: 0
  }
})

const learningTrends = computed(() => {
  return brainStore.getLearningTrends()
})

function getTrendClass(trend: number): string {
  if (trend > 0.05) return 'up'
  if (trend < -0.05) return 'down'
  return 'stable'
}

function getTrendIcon(trend: number): string {
  const cls = getTrendClass(trend)
  if (cls === 'up') return '📈'
  if (cls === 'down') return '📉'
  return '➡️'
}

function getTrendValueClass(value: number): string {
  if (value > 0.8) return 'high'
  if (value > 0.5) return 'medium'
  return 'low'
}
</script>

<style scoped>
.value-system {
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

h4 {
  font-size: 13px;
  margin: 0 0 12px 0;
  color: #00ff41;
  border-bottom: 1px solid rgba(0, 255, 65, 0.3);
  padding-bottom: 6px;
}

.value-overview {
  margin-bottom: 0;
}

.value-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.value-summary {
  flex: 0.5;
}

.summary-card {
  background: linear-gradient(135deg, #00ff41, #00cc66);
  padding: 15px;
  border-radius: 12px;
  text-align: center;
  color: white;
}

.summary-value {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 4px;
}

.summary-label {
  font-size: 12px;
  opacity: 0.9;
}

.values-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.value-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  background: rgba(0, 255, 65, 0.05);
  border-radius: 8px;
}

.value-bar-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.value-label {
  font-size: 11px;
  color: #008f11;
  font-weight: 500;
}

.value-bar {
  height: 20px;
  background: rgba(0, 255, 65, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.value-fill {
  height: 100%;
  background: linear-gradient(90deg, #00ff41, #00cc66);
  transition: width 0.3s;
}

.value-text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 10px;
  font-weight: bold;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.value-trend {
  font-size: 14px;
  margin-left: 10px;
}

.value-trend.up {
  color: #00ff00;
}

.value-trend.down {
  color: #ff0000;
}

.value-trend.stable {
  color: #008f11;
}

.value-details,
.learning-trends {
  margin-top: 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  background: rgba(0, 255, 65, 0.05);
  border-radius: 8px;
}

.stat-icon {
  font-size: 20px;
  margin-bottom: 8px;
}

.stat-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.stat-label {
  font-size: 11px;
  color: #008f11;
}

.stat-value {
  font-size: 18px;
  font-weight: bold;
  color: #00ff41;
}

.trends-chart {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 200px;
  overflow-y: auto;
}

.trend-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  background: rgba(0, 255, 65, 0.05);
  border-radius: 6px;
}

.trend-date {
  font-size: 11px;
  color: #008f11;
}

.trend-value {
  font-size: 14px;
  font-weight: bold;
}

.trend-value.high {
  color: #00ff00;
}

.trend-value.medium {
  color: #ff9900;
}

.trend-value.low {
  color: #ff0000;
}
</style>
