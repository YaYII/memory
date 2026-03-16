import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Memory, GraphData, SystemStats, EvolutionStatus, LogEntry, MemoryType, ViewMode, EvolutionProfile } from '@/types/memory'
import { memoryApi, evolutionApi } from '@/api/memory'

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
    if (currentMemoryType.value === 'all') {
      return memories.value
    }
    return memories.value.filter(m => m.memory_type === currentMemoryType.value)
  })

  const memoryCountByType = computed(() => {
    return {
      storage: memories.value.filter(m => m.memory_type === 'storage').length,
      thinking: memories.value.filter(m => m.memory_type === 'thinking').length,
      skill: memories.value.filter(m => m.memory_type === 'skill').length,
      total: memories.value.length
    }
  })

  async function fetchStats() {
    try {
      stats.value = await memoryApi.getStats()
    } catch (e) {
      error.value = 'Failed to fetch stats'
      console.error(e)
    }
  }

  async function fetchGraph(days: number = 7, maxNodes: number = 1000) {
    try {
      isLoading.value = true
      graphData.value = await memoryApi.getGraph(days, maxNodes)
    } catch (e) {
      error.value = 'Failed to fetch graph'
      console.error(e)
    } finally {
      isLoading.value = false
    }
  }

  async function fetchEvolutionStatus() {
    try {
      evolutionStatus.value = await evolutionApi.getStatus()
    } catch (e) {
      error.value = 'Failed to fetch evolution status'
      console.error(e)
    }
  }

  async function searchMemories(query: string) {
    try {
      isLoading.value = true
      searchQuery.value = query
      const result = await memoryApi.searchMemories(query)
      searchResults.value = result.items.map(item => ({
        ...item,
        content_type: 'note' as const,
        keywords: [],
        tags: [],
        char_count: item.content?.length || 0,
        importance: 0.5
      })) as Memory[]
    } catch (e) {
      error.value = 'Failed to search memories'
      console.error(e)
    } finally {
      isLoading.value = false
    }
  }

  async function setEvolutionProfile(profile: EvolutionProfile) {
    try {
      await evolutionApi.setProfile(profile)
      currentProfile.value = profile
      await fetchEvolutionStatus()
    } catch (e) {
      error.value = 'Failed to set evolution profile'
      console.error(e)
    }
  }

  function setMemoryType(type: MemoryType) {
    currentMemoryType.value = type
  }

  function setViewMode(mode: ViewMode) {
    currentViewMode.value = mode
  }

  function addLog(message: string, type: LogEntry['type'] = 'info') {
    const log: LogEntry = {
      time: new Date().toLocaleTimeString(),
      message,
      type
    }
    logs.value.push(log)
    if (logs.value.length > 50) {
      logs.value.shift()
    }
  }

  function clearLogs() {
    logs.value = []
  }

  return {
    memories,
    currentMemory,
    graphData,
    stats,
    evolutionStatus,
    logs,
    currentMemoryType,
    currentViewMode,
    currentProfile,
    searchQuery,
    searchResults,
    isLoading,
    error,
    filteredMemories,
    memoryCountByType,
    fetchStats,
    fetchGraph,
    fetchEvolutionStatus,
    searchMemories,
    setEvolutionProfile,
    setMemoryType,
    setViewMode,
    addLog,
    clearLogs
  }
})
