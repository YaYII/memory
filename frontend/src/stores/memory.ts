import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Memory, GraphData, SystemStats, EvolutionStatus, LogEntry, MemoryType, ViewMode, EvolutionProfile } from '@/types/memory'
import { memoryApi, evolutionApi, tieredApi } from '@/api/memory'
import { withLoading } from '@/utils/async'

const notify = (() => {
  let toast: ReturnType<typeof import('@/composables/useToast')['useToast']> | null = null
  return {
    error(msg: string) {
      if (!toast) {
        try { toast = require('@/composables/useToast').useToast() } catch { return }
      }
      (toast as any).error?.(msg)
    },
    success(msg: string) {
      if (!toast) {
        try { toast = require('@/composables/useToast').useToast() } catch { return }
      }
      (toast as any).success?.(msg)
    }
  }
})()

function handleApiError(e: unknown, action: string) {
  const msg = e instanceof Error ? e.message : String(e)
  notify.error(`${action}失败: ${msg}`)
}

export const useMemoryStore = defineStore('memory', () => {
  const memories = ref<Memory[]>([])
  const currentMemory = ref<Memory | null>(null)
  const graphData = ref<GraphData>({ nodes: [], links: [] })
  const stats = ref<SystemStats | null>(null)
  const evolutionStatus = ref<EvolutionStatus | null>(null)
  const logs = ref<LogEntry[]>([])
  const currentMemoryType = ref<MemoryType>('all')
  const currentViewMode = ref<ViewMode>('neural')
  const currentProfile = ref<EvolutionProfile>('standard')
  const searchQuery = ref('')
  const searchResults = ref<Memory[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const filteredMemories = computed(() => {
    if (currentMemoryType.value === 'all') return memories.value
    return memories.value.filter(m => m.memory_type === currentMemoryType.value)
  })

  const memoryCountByType = computed(() => {
    let storage = 0, thinking = 0, skill = 0
    for (const m of memories.value) {
      if (m.memory_type === 'storage') storage++
      else if (m.memory_type === 'thinking') thinking++
      else if (m.memory_type === 'skill') skill++
    }
    return { storage, thinking, skill, total: memories.value.length }
  })

  async function fetchStats() {
    try {
      stats.value = await memoryApi.getStats()
    } catch (e) {
      handleApiError(e, '获取统计')
    }
  }

  async function fetchGraph(days = 7, maxNodes = 1000) {
    await withLoading(isLoading, async () => {
      graphData.value = await memoryApi.getGraph(days, maxNodes)
    }, e => handleApiError(e, '加载图谱'))
  }

  async function fetchEvolutionStatus() {
    try {
      evolutionStatus.value = await evolutionApi.getStatus()
    } catch (e) {
      handleApiError(e, '获取进化状态')
    }
  }

  async function searchMemories(query: string) {
    await withLoading(isLoading, async () => {
      searchQuery.value = query
      const result = await memoryApi.searchMemories(query)
      searchResults.value = result.items.map(item => ({
        ...item,
        content_type: 'note' as const,
        keywords: (item as any).keywords ?? [],
        tags: [],
        char_count: item.content?.length ?? 0,
        importance: 0.5
      })) as Memory[]
    }, e => handleApiError(e, '搜索记忆'))
  }

  async function setEvolutionProfile(profile: EvolutionProfile) {
    await withLoading(isLoading, async () => {
      await evolutionApi.setProfile(profile)
      currentProfile.value = profile
      await fetchEvolutionStatus()
      notify.success(`进化配置已切换为 ${profile}`)
    }, e => handleApiError(e, '切换进化配置'))
  }

  function setMemoryType(type: MemoryType) { currentMemoryType.value = type }
  function setViewMode(mode: ViewMode) { currentViewMode.value = mode }

  function addLog(message: string, type: LogEntry['type'] = 'info') {
    logs.value.push({ time: new Date().toLocaleTimeString(), message, type })
    if (logs.value.length > 50) logs.value.shift()
  }

  function clearLogs() { logs.value = [] }

  async function updateMemory(memoryId: string, content: string, userId = 'default', title?: string, keywords?: string[]) {
    return await withLoading(isLoading, async () => {
      const result = await memoryApi.updateMemory(memoryId, { content, user_id: userId, title, keywords })
      addLog(`记忆已更新: ${memoryId}`, 'success')
      return result
    }, e => { addLog(`更新记忆失败: ${memoryId}`, 'error'); handleApiError(e, '更新记忆') })
  }

  async function deleteMemory(memoryId: string, userId = 'default') {
    return await withLoading(isLoading, async () => {
      const result = await memoryApi.deleteMemory(memoryId, userId)
      addLog(`记忆已删除: ${memoryId}`, 'success')
      return result
    }, e => { addLog(`删除记忆失败: ${memoryId}`, 'error'); handleApiError(e, '删除记忆') })
  }

  async function writeMemory(data: { content: string; user_id: string; title?: string; scope?: string; keywords?: string[]; content_type?: string }) {
    return await withLoading(isLoading, async () => {
      const result = await memoryApi.writeMemory(data)
      addLog(`记忆已写入: ${result.id}`, 'success')
      notify.success('记忆写入成功')
      return result
    }, e => { addLog('写入记忆失败', 'error'); handleApiError(e, '写入记忆') })
  }

  async function reflectMemory(userId = 'default') {
    return await withLoading(isLoading, async () => {
      const result = await memoryApi.reflectMemory(userId)
      addLog('反思完成', 'success')
      notify.success('反思完成')
      return result
    }, e => { addLog('反思失败', 'error'); handleApiError(e, '反思') })
  }

  async function rebuildGraph() {
    return await withLoading(isLoading, async () => {
      const result = await memoryApi.rebuildGraph()
      addLog('图谱重建成功', 'success')
      notify.success('图谱已重建')
      return result
    }, e => { addLog('图谱重建失败', 'error'); handleApiError(e, '重建图谱') })
  }

  async function submitFeedback(memoryId: string, feedback: { rating?: number; useful?: boolean; comment?: string }) {
    return await withLoading(isLoading, async () => {
      const result = await tieredApi.submitFeedback(memoryId, feedback)
      addLog(`反馈已提交: ${memoryId}`, 'success')
      return result
    }, e => { addLog(`提交反馈失败: ${memoryId}`, 'error'); handleApiError(e, '提交反馈') })
  }

  async function summarizeMemories(memoryIds: string[]) {
    return await withLoading(isLoading, async () => {
      const result = await tieredApi.summarizeMemories(memoryIds)
      addLog(`已总结 ${memoryIds.length} 条记忆`, 'success')
      return result
    }, e => handleApiError(e, '总结记忆'))
  }

  async function fetchLogs() {
    try {
      const result = await memoryApi.getLogs()
      if (result?.length) {
        logs.value = result.slice(0, 50).map(log => ({
          time: log.time,
          message: log.message,
          type: (['info', 'success', 'error', 'warn'].includes(log.type) ? log.type : 'info') as LogEntry['type']
        }))
      }
    } catch (_) {}
  }

  return {
    memories, currentMemory, graphData, stats, evolutionStatus, logs,
    currentMemoryType, currentViewMode, currentProfile,
    searchQuery, searchResults, isLoading, error,
    filteredMemories, memoryCountByType,
    fetchStats, fetchGraph, fetchEvolutionStatus, searchMemories,
    setEvolutionProfile, setMemoryType, setViewMode,
    addLog, clearLogs,
    updateMemory, deleteMemory, writeMemory, reflectMemory,
    rebuildGraph, submitFeedback, summarizeMemories, fetchLogs
  }
})
