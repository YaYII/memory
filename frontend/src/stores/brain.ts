import { defineStore } from 'pinia'
import { ref } from 'vue'
import type {
  BrainStatus,
  BrainInputResponse,
  BrainRetrieveResponse,
  BrainHypothesesResponse,
  Hypothesis,
  LearningTrend
} from '@/types/brain'

export const useBrainStore = defineStore('brain', () => {
  const brainStatus = ref<BrainStatus | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const lastUpdate = ref<Date | null>(null)

  // Export/import data types
  type ExportData = {
    version: string
    exported_at: string
    brain_status: BrainStatus
    metadata: any
    brain_state: any
  }

  type ImportData = {
    data: ExportData
    brain_state: any
  }

  type CompatibilityData = {
    hardware: {
      cpu_count: number
      memory_available: boolean
      hostname: string
    }
    software: {
      python_version: string
      brain_active: boolean
    }
    capabilities: {
      full_brain: boolean
      evolution: boolean
      persistence: boolean
      migration: boolean
    }
  }

  async function fetchBrainStatus() {
    isLoading.value = true
    error.value = null
    try {
      const response = await fetch('/brain/status')
      if (!response.ok) {
        throw new Error('Failed to fetch brain status')
      }
      brainStatus.value = await response.json()
      lastUpdate.value = new Date()
    } catch (e) {
      error.value = '获取AI大脑状态失败'
      console.error('Failed to fetch brain status:', e)
    } finally {
      isLoading.value = false
    }
  }

  async function processInput(content: string, context: Record<string, any> = {}): Promise<BrainInputResponse> {
    isLoading.value = true
    error.value = null
    try {
      const response = await fetch('/brain/input', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, context })
      })

      if (!response.ok) {
        throw new Error('Failed to process input')
      }

      return await response.json()
    } catch (e) {
      error.value = '处理输入失败'
      console.error('Failed to process input:', e)
      throw e
    } finally {
      isLoading.value = false
    }
  }

  async function retrieveMemory(query: string, context: Record<string, any> = {}): Promise<BrainRetrieveResponse> {
    isLoading.value = true
    error.value = null
    try {
      const response = await fetch('/brain/retrieve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, context })
      })

      if (!response.ok) {
        throw new Error('Failed to retrieve memory')
      }

      return await response.json()
    } catch (e) {
      error.value = '检索记忆失败'
      console.error('Failed to retrieve memory:', e)
      throw e
    } finally {
      isLoading.value = false
    }
  }

  async function triggerSelfReflection(): Promise<any> {
    isLoading.value = true
    error.value = null
    try {
      const response = await fetch('/brain/reflection', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })

      if (!response.ok) {
        throw new Error('Failed to trigger reflection')
      }

      return await response.json()
    } catch (e) {
      error.value = '触发自我反思失败'
      console.error('Failed to trigger reflection:', e)
      throw e
    } finally {
      isLoading.value = false
    }
  }

  async function generateHypotheses(context: string): Promise<Hypothesis[]> {
    isLoading.value = true
    error.value = null
    try {
      const response = await fetch('/brain/hypotheses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ context })
      })

      if (!response.ok) {
        throw new Error('Failed to generate hypotheses')
      }

      const result: BrainHypothesesResponse = await response.json()
      return result.hypotheses
    } catch (e) {
      error.value = '生成假设失败'
      console.error('Failed to generate hypotheses:', e)
      throw e
    } finally {
      isLoading.value = false
    }
  }

  async function testHypothesis(hypothesis: Hypothesis): Promise<any> {
    isLoading.value = true
    error.value = null
    try {
      const response = await fetch('/brain/hypotheses/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hypothesis })
      })

      if (!response.ok) {
        throw new Error('Failed to test hypothesis')
      }

      return await response.json()
    } catch (e) {
      error.value = '测试假设失败'
      console.error('Failed to test hypothesis:', e)
      throw e
    } finally {
      isLoading.value = false
    }
  }

  async function evolveBrain(experiences: any[]): Promise<any> {
    isLoading.value = true
    error.value = null
    try {
      const response = await fetch('/brain/evolve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ experiences })
      })

      if (!response.ok) {
        throw new Error('Failed to evolve brain')
      }

      return await response.json()
    } catch (e) {
      error.value = '进化AI大脑失败'
      console.error('Failed to evolve brain:', e)
      throw e
    } finally {
      isLoading.value = false
    }
  }

  function getSelfAwareness() {
    return brainStatus.value?.self_awareness
  }

  function getCognitionStatus() {
    return brainStatus.value?.active_cognition
  }

  function getValueSystem() {
    return brainStatus.value?.value_system
  }

  function getDynamicMemory() {
    return brainStatus.value?.dynamic_memory
  }

  function getMetacognition() {
    return brainStatus.value?.metacognition
  }

  function getLearningTrends(): LearningTrend[] {
    // 返回模拟的学习趋势数据
    if (!brainStatus.value) return []

    const trends: LearningTrend[] = []
    const now = new Date()

    for (let i = 6; i >= 0; i--) {
      const date = new Date(now)
      date.setDate(date.getDate() - i)

      trends.push({
        date: date.toISOString().split('T')[0],
        success_rate: 0.6 + Math.random() * 0.35
      })
    }

    return trends
  }

  function getDisplayedCapabilities() {
    return brainStatus.value?.self_awareness?.capabilities?.slice(0, 6) || []
  }

  function getTopGoals() {
    return brainStatus.value?.self_awareness?.goals?.slice(0, 4) || []
  }

  function getValueChart() {
    const weights = brainStatus.value?.value_system?.weights || {}
    return {
      novelty: weights.novelty || 0.25,
      utility: weights.utility || 0.25,
      emotional: weights.emotional || 0.25,
      frequency: weights.frequency || 0.25
    }
  }

  function formatPercent(value: number): string {
    return (value * 100).toFixed(0) + '%'
  }

  function getLoadClass(load: number): string {
    if (load > 0.7) return 'high'
    if (load > 0.4) return 'medium'
    return 'low'
  }

  function getFocusClass(focus: number): string {
    if (focus > 0.7) return 'high'
    if (focus > 0.4) return 'medium'
    return 'low'
  }

  function getConfidenceClass(confidence: number): string {
    if (confidence > 0.8) return 'high'
    if (confidence > 0.5) return 'medium'
    return 'low'
  }

  function formatValueCategory(assessment: any): string {
    if (!assessment) return 'N/A'
    const score = assessment.total_score || 0
    if (score >= 0.75) return '高价值'
    if (score >= 0.5) return '中等价值'
    return '低价值'
  }

  function formatValueName(key: string): string {
    const names: Record<string, string> = {
      'accuracy': '准确性',
      'efficiency': '效率',
      'creativity': '创造性',
      'empathy': '同理心',
      'learning': '学习能力',
      'safety': '安全性',
      'curiosity': '好奇心',
      'reliability': '可靠性',
      'novelty': '新颖性',
      'utility': '实用性',
      'emotional': '情感强度',
      'frequency': '使用频率'
    }
    return names[key] || key
  }

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

  function clearError() {
    error.value = null
  }

  async function exportBrain(): Promise<ExportData> {
    try {
      const response = await fetch('/brain/export')
      if (!response.ok) {
        throw new Error('Export failed')
      }
      return await response.json()
    } catch (e) {
      error.value = '导出大脑状态失败'
      console.error('Export failed:', e)
      throw e
    }
  }

  async function importBrain(data: ImportData): Promise<any> {
    try {
      const response = await fetch('/brain/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (!response.ok) {
        throw new Error('Import failed')
      }
      return await response.json()
    } catch (e) {
      error.value = '导入大脑状态失败'
      console.error('Import failed:', e)
      throw e
    }
  }

  async function checkCompatibility(): Promise<CompatibilityData> {
    try {
      const response = await fetch('/brain/compatibility')
      if (!response.ok) {
        throw new Error('Compatibility check failed')
      }
      return await response.json()
    } catch (e) {
      error.value = '兼容性检查失败'
      console.error('Compatibility check failed:', e)
      throw e
    }
  }

  return {
    brainStatus,
    isLoading,
    error,
    lastUpdate,
    fetchBrainStatus,
    processInput,
    retrieveMemory,
    triggerSelfReflection,
    generateHypotheses,
    testHypothesis,
    evolveBrain,
    getSelfAwareness,
    getCognitionStatus,
    getValueSystem,
    getDynamicMemory,
    getMetacognition,
    getLearningTrends,
    getDisplayedCapabilities,
    getTopGoals,
    getValueChart,
    formatPercent,
    getLoadClass,
    getFocusClass,
    getConfidenceClass,
    formatValueCategory,
    formatValueName,
    getTrendClass,
    getTrendIcon,
    clearError,
    exportBrain,
    importBrain,
    checkCompatibility
  }
})
