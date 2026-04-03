export interface Memory {
  id: string
  title: string
  content: string
  description?: string
  summary?: string
  content_type: 'task' | 'note' | 'summary' | 'code' | 'config' | 'workflow'
  keywords: string[]
  tags: string[]
  char_count: number
  user_id: string
  scope: 'project' | 'global'
  project_id?: string
  timestamp: string
  importance: number
  memory_type?: 'storage' | 'thinking' | 'skill'
  confidence?: number
}

export interface GraphNode {
  id: string
  label: string
  type: 'memory' | 'entity' | 'category' | 'storage' | 'thinking' | 'skill'
  group?: string
  memory_type?: string
  timestamp?: string
  scope?: string
  content?: string
}

export interface GraphLink {
  source: string
  target: string
  relation?: string
}

export interface GraphData {
  nodes: GraphNode[]
  links: GraphLink[]
}

export interface LogEntry {
  time: string
  message: string
  type: 'info' | 'success' | 'error' | 'warn'
}

export interface SystemStats {
  memory_count: number
  traditional_count: number
  tiered_count: number
  tiered_breakdown: {
    storage: number
    thinking: number
    skill: number
  }
  llm_enabled: boolean
  providers_count: number
  preferred_provider: string
  data_path?: string
}

export interface EvolutionStatus {
  enabled: boolean
  profile: string
  adaptive: boolean
  scan_interval_seconds: number
  reflection_interval_seconds: number
  scan_batch_size: number
  scan_task_running: boolean
  reflection_task_running: boolean
  running: boolean
  last_scan_time: string | null
  last_reflection_time: string | null
  total_scanned: number
  last_scan_processed: number
  last_error: string | null
  last_reflection_note: string
  llm_enabled: boolean
  preferred_provider: string | null
  available_providers: string[]
  daily_reflection: {
    running: boolean
    last_reflection_time: string | null
    last_reflection_note: string
    total_reflections: number
    next_reflection: string
  }
}

export interface LLMStatus {
  preferred_provider: string | null
  fallback_provider: string
  available_providers: string[]
  pool_status: Record<string, any>
  client_stats: Record<string, any>
}

export interface SearchResult {
  id: string
  title: string
  content: string
  timestamp: string
  scope: string
  user_id: string
  match_type: 'semantic' | 'keyword'
  memory_type?: string
  score?: number
}

export type MemoryType = 'all' | 'skill' | 'thinking' | 'storage'
export type EvolutionProfile = 'light' | 'standard' | 'aggressive'
export type ViewMode = 'neural' | 'skill'
