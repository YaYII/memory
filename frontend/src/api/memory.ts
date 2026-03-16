import axios from 'axios'
import type { 
  Memory, 
  GraphData, 
  SystemStats, 
  EvolutionStatus, 
  LLMStatus, 
  SearchResult,
  EvolutionProfile 
} from '@/types/memory'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:22888',
  timeout: 30000
})

export const memoryApi = {
  async getStats(): Promise<SystemStats> {
    const response = await api.get<SystemStats>('/dashboard/stats')
    return response.data
  },

  async getGraph(days: number = 7, maxNodes: number = 1000, memoryOnly: boolean = false): Promise<GraphData> {
    const response = await api.get<GraphData>('/dashboard/graph', {
      params: { days, max_nodes: maxNodes, memory_only: memoryOnly }
    })
    return response.data
  },

  async searchMemories(query: string, limit: number = 20): Promise<{ items: SearchResult[] }> {
    const response = await api.get<{ items: SearchResult[] }>('/dashboard/memory/search', {
      params: { query, limit }
    })
    return response.data
  },

  async getMemoryDetail(memoryId: string): Promise<Memory> {
    const response = await api.get<Memory>(`/dashboard/memory/${memoryId}`)
    return response.data
  },

  async updateMemory(memoryId: string, content: string, userId: string): Promise<{ status: string; id: string }> {
    const response = await api.post('/dashboard/memory/update', {
      memory_id: memoryId,
      content,
      user_id: userId
    })
    return response.data
  }
}

export const evolutionApi = {
  async getStatus(): Promise<EvolutionStatus> {
    const response = await api.get<EvolutionStatus>('/dashboard/evolution/status')
    return response.data
  },

  async setProfile(profile: EvolutionProfile): Promise<{ status: string; profile: string }> {
    const response = await api.post('/dashboard/evolution/profile', null, {
      params: { profile }
    })
    return response.data
  }
}

export const llmApi = {
  async getStatus(): Promise<LLMStatus> {
    const response = await api.get<LLMStatus>('/dashboard/llm/status')
    return response.data
  },

  async getInteractions(limit: number = 20): Promise<any> {
    const response = await api.get('/dashboard/llm/interactions', {
      params: { limit }
    })
    return response.data
  }
}

export const tieredApi = {
  async getMergedMemories(): Promise<any> {
    const response = await api.get('/tiered/merged')
    return response.data
  },

  async getMergeChain(memoryId: string): Promise<any> {
    const response = await api.get(`/tiered/memory/${memoryId}/merge-chain`)
    return response.data
  },

  async triggerDailyReflection(): Promise<any> {
    const response = await api.post('/tiered/daily-reflection/trigger')
    return response.data
  }
}

export default api
