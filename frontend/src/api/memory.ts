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
  },

  async writeMemory(data: {
    content: string
    user_id: string
    title?: string
    scope?: string
    keywords?: string[]
    content_type?: string
  }): Promise<{ status: string; id: string }> {
    const response = await api.post('/memory/write', data)
    return response.data
  },

  async readMemory(data: {
    query: string
    user_id: string
    scope?: string
    project_id?: string
    top_k?: number
  }): Promise<{ memories: Memory[] }> {
    const response = await api.post('/memory/read', data)
    return response.data
  },

  async deleteMemory(memoryId: string, userId: string): Promise<{ status: string }> {
    const response = await api.post('/memory/delete', {
      memory_id: memoryId,
      user_id: userId
    })
    return response.data
  },

  async reflectMemory(userId: string): Promise<{ status: string; message: string }> {
    const response = await api.post('/memory/reflect', null, { params: { user_id: userId } })
    return response.data
  },

  async rebuildGraph(): Promise<{ status: string }> {
    const response = await api.post('/dashboard/rebuild_graph')
    return response.data
  }
}

export const tieredApi = {
  async getStats(): Promise<any> {
    const response = await api.get('/tiered/stats')
    return response.data
  },

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
  },

  async writeStorage(data: {
    content: string
    user_id: string
    title?: string
    keywords?: string[]
  }): Promise<{ status: string; id: string }> {
    const response = await api.post('/tiered/storage/write', data)
    return response.data
  },

  async writeThinking(data: {
    content: string
    user_id: string
    title?: string
    keywords?: string[]
  }): Promise<{ status: string; id: string }> {
    const response = await api.post('/tiered/thinking/write', data)
    return response.data
  },

  async writeSkill(data: {
    content: string
    user_id: string
    title?: string
    keywords?: string[]
  }): Promise<{ status: string; id: string }> {
    const response = await api.post('/tiered/skill/write', data)
    return response.data
  },

  async queryMemories(params: {
    query: string
    user_id: string
    memory_type?: string
    top_k?: number
  }): Promise<{ memories: Memory[] }> {
    const response = await api.get('/tiered/query', { params })
    return response.data
  },

  async getMemory(memoryId: string): Promise<Memory> {
    const response = await api.get(`/tiered/memory/${memoryId}`)
    return response.data
  },

  async getMemoryTrace(memoryId: string): Promise<any> {
    const response = await api.get(`/tiered/memory/${memoryId}/trace`)
    return response.data
  },

  async submitFeedback(memoryId: string, feedback: {
    rating?: number
    useful?: boolean
    comment?: string
  }): Promise<{ status: string }> {
    const response = await api.post(`/tiered/memory/${memoryId}/feedback`, feedback)
    return response.data
  },

  async summarizeMemories(memoryIds: string[]): Promise<{ summary: string }> {
    const response = await api.post('/tiered/summarize', { memory_ids: memoryIds })
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

  async getInteractions(limit: number = 50): Promise<any> {
    const response = await api.get('/dashboard/llm/interactions', {
      params: { limit }
    })
    return response.data
  }
}

export const eventApi = {
  getEventStream(): EventSource {
    return new EventSource(`${api.defaults.baseURL}/dashboard/events`)
  }
}

export default api
