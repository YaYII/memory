/**
 * AI Brain Type Definitions
 * TypeScript interfaces for the AI brain system
 */

export interface BrainStatus {
  is_active: boolean
  last_update: string
  total_cycles: number
  self_awareness: SelfAwareness
  active_cognition: ActiveCognition
  value_system: ValueSystem
  dynamic_memory: DynamicMemory
  metacognition: Metacognition
}

export interface SelfAwareness {
  identity: string
  version: string
  evolution_generation: number
  total_experiences: number
  capabilities: string[]
  values?: Record<string, number>
  goals?: Goal[]
}

export interface Goal {
  goal_id: string
  goal_type: string
  description: string
  priority: number
  progress: number
}

export interface ActiveCognition {
  curiosity_level: number
  attention_threshold: number
  pending_questions: number
  pending_hypotheses: number
}

export interface ValueSystem {
  weights: Record<string, number>
  statistics: ValueStatistics
}

export interface ValueStatistics {
  total_evaluated: number
  high_value_count: number
  average_value: number
}

export interface DynamicMemory {
  total_traces: number
  active_memories: number
  consolidated_memories: number
  decaying_memories: number
  forgotten_memories: number
  total_associations: number
}

export interface Metacognition {
  current_state: CognitiveState
  cognitive_strategies: Record<string, number>
  detected_biases: string[]
}

export interface CognitiveState {
  focus_level: number
  cognitive_load: number
  confidence_level: number
  learning_rate: number
  mental_energy?: number
}

export interface BrainInputResponse {
  content: string
  processed_at: string
  actions_taken: string[]
  memories_created: string[]
  associations_created: Association[]
  value_assessment: ValueAssessment | null
  attention_score?: number
  questions_generated?: string[]
}

export interface ValueAssessment {
  total_score: number
  novelty_score: number
  utility_score: number
  emotional_score: number
  frequency_score: number
  weight_details: Record<string, number>
}

export interface Association {
  association_id: string
  source_id: string
  target_id: string
  association_type: string
  strength: number
  created_at: string
}

export interface BrainRetrieveResponse {
  query: string
  retrieved_at: string
  memories: RetrievedMemory[]
  associations_activated: string[]
  confidence: number
}

export interface RetrievedMemory {
  memory_id: string
  relevance: number
  content?: string
  memory_type?: string
}

export interface BrainReflectionResponse {
  reflected_at: string
  self_assessment: Record<string, any>
  memory_state: MemoryStateReport
  learning_efficiency: LearningEfficiency
  detected_biases: string[]
  recommendations: string[]
  strategy_adjustments: Record<string, any>
  maintenance_actions: string[]
}

export interface MemoryStateReport {
  total_memories: number
  active_count: number
  consolidating_count: number
  forgotten_count: number
  high_value_count: number
  average_importance: number
}

export interface LearningEfficiency {
  efficiency_score: number
  retention_rate: number
  retrieval_accuracy: number
  consolidation_rate: number
}

export interface Hypothesis {
  hypothesis_id: string
  description: string
  confidence: number
  evidence: string[]
  status: string
  created_at: string
}

export interface BrainHypothesesResponse {
  hypotheses: Hypothesis[]
  count: number
}

export interface LearningTrend {
  date: string
  success_rate: number
}

export interface BrainEvolveRequest {
  experiences: Experience[]
}

export interface Experience {
  id: string
  outcome: string
  value_updates: Record<string, number>
  timestamp?: string
}

export interface ExportData {
  version: string
  exported_at: string
  brain_status: BrainStatus
  metadata: {
    system_version: string
    hardware_info: {
      cpu_count: number
      hostname: string
    }
  }
  brain_state: any
}

export interface ImportData {
  data: ExportData
  brain_state: any
}

export interface CompatibilityData {
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
