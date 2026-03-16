<template>
  <div class="brain-interaction panel">
    <h3>🧠 AI大脑交互</h3>

    <!-- 输入处理 -->
    <div class="interaction-section">
      <h4>认知处理</h4>
      <div class="input-form">
        <textarea
          v-model="inputContent"
          placeholder="输入要让AI大脑处理的内容..."
          class="brain-input"
          rows="4"
        ></textarea>

        <div class="form-actions">
          <button @click="processInput" :disabled="isProcessing">
            {{ isProcessing ? '处理中...' : '处理输入' }}
          </button>
          <button @click="clearInput" class="secondary">清除</button>
        </div>
      </div>

      <div v-if="processingResult" class="result-display">
        <h5>处理结果</h5>
        <div class="result-content">
          <div class="result-section">
            <span class="result-label">注意力分数:</span>
            <span class="result-value">{{ processingResult.attention_score?.toFixed(2) }}</span>
          </div>
          <div class="result-section">
            <span class="result-label">价值评估:</span>
            <span class="result-value">{{ formatValueCategory(processingResult.value_assessment) }}</span>
          </div>
          <div class="result-section" v-if="processingResult.memories_created?.length > 0">
            <span class="result-label">创建记忆:</span>
            <span class="result-value">{{ processingResult.memories_created.length }} 条</span>
          </div>
          <div class="result-actions" v-if="processingResult.actions_taken?.length">
            <span class="actions-label">执行操作:</span>
            <div class="actions-tags">
              <span v-for="action in processingResult.actions_taken" :key="action" class="action-tag">
                {{ formatActionName(action) }}
              </span>
            </div>
          </div>
          <div v-if="processingResult.questions_generated && processingResult.questions_generated.length > 0" class="result-questions">
            <span class="questions-label">生成问题:</span>
            <div class="questions-list">
              <div v-for="(question, index) in processingResult.questions_generated" :key="index" class="question-item">
                {{ question }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 记忆检索 -->
    <div class="interaction-section">
      <h4>智能检索</h4>
      <div class="retrieval-form">
        <input
          v-model="retrievalQuery"
          placeholder="输入检索查询..."
          class="retrieval-input"
          @keyup.enter="retrieveMemory"
        />

        <button @click="retrieveMemory" :disabled="isRetrieving">
          {{ isRetrieving ? '检索中...' : '检索记忆' }}
        </button>
      </div>

      <div v-if="retrievalResult && retrievalResult.memories && retrievalResult.memories.length > 0" class="result-display">
        <h5>检索结果 (置信度: {{ retrievalResult.confidence?.toFixed(2) || 'N/A' }})</h5>
        <div class="results-list">
          <div v-for="memory in retrievalResult.memories" :key="memory.memory_id" class="memory-item">
            <div class="memory-content">{{ memory.content || '记忆内容...' }}</div>
            <div class="memory-meta">
              <span class="meta-relevance">相关度: {{ memory.relevance?.toFixed(2) }}</span>
              <span class="meta-type" v-if="memory.memory_type">类型: {{ formatMemoryType(memory.memory_type) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="retrievalResult" class="result-display empty">
        <h5>检索结果</h5>
        <p class="empty-message">未找到相关记忆</p>
      </div>
    </div>

    <!-- 自我反思 -->
    <div class="interaction-section">
      <h4>自我反思</h4>
      <div class="reflection-actions">
        <button @click="triggerSelfReflection" :disabled="isReflecting">
          {{ isReflecting ? '反思中...' : '触发自我反思' }}
        </button>
      </div>

      <div v-if="reflectionResult" class="result-display">
        <h5>反思结果</h5>
        <div class="reflection-summary">
          <div class="summary-item">
            <span class="summary-label">记忆总数:</span>
            <span class="summary-value">{{ reflectionResult.memory_state?.total_memories || 'N/A' }}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">学习效率:</span>
            <span class="summary-value">{{ reflectionResult.learning_efficiency?.efficiency_score?.toFixed(2) || 'N/A' }}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">认知偏差:</span>
            <span class="summary-value" :class="{ 'has-biases': reflectionResult.detected_biases?.length > 0 }">
              {{ reflectionResult.detected_biases?.length || 0 }} 个
            </span>
          </div>
          <div class="summary-item" v-if="reflectionResult.recommendations?.length > 0">
            <span class="summary-label">建议:</span>
            <div class="recommendations-list">
              <div v-for="(rec, index) in reflectionResult.recommendations.slice(0, 3)" :key="index" class="recommendation-item">
                {{ rec }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 假设生成与测试 -->
    <div class="interaction-section">
      <h4>假设推理</h4>
      <div class="hypothesis-form">
        <button @click="generateHypotheses" :disabled="isGenerating">
          生成假设
        </button>

        <div v-if="hypotheses.length > 0" class="hypotheses-list">
          <div v-for="hypo in hypotheses" :key="hypo.hypothesis_id" class="hypothesis-item">
            <div class="hypothesis-content">
              <span class="hypothesis-description">{{ hypo.description }}</span>
              <span class="hypothesis-confidence">
                置信度: {{ hypo.confidence?.toFixed(2) }}
              </span>
              <span class="hypothesis-status" :class="hypo.status?.toLowerCase()">
                {{ formatHypothesisStatus(hypo.status) }}
              </span>
            </div>
            <div class="hypothesis-actions">
              <button @click="testHypothesis(hypo)" size="small" :disabled="isTesting">
                测试
              </button>
            </div>
          </div>
        </div>
        <div v-else-if="hasGeneratedHypotheses" class="empty-message">
          暂无假设
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useBrainStore } from '@/stores/brain'
import type { Hypothesis, BrainInputResponse, BrainRetrieveResponse } from '@/types/brain'

const brainStore = useBrainStore()

const inputContent = ref('')
const retrievalQuery = ref('')
const isProcessing = ref(false)
const isRetrieving = ref(false)
const isReflecting = ref(false)
const isGenerating = ref(false)
const isTesting = ref(false)

const processingResult = ref<BrainInputResponse | null>(null)
const retrievalResult = ref<BrainRetrieveResponse | null>(null)
const reflectionResult = ref<any>(null)
const hypotheses = ref<Hypothesis[]>([])
const hasGeneratedHypotheses = ref(false)

async function processInput() {
  if (!inputContent.value.trim()) return

  isProcessing.value = true
  processingResult.value = null
  try {
    const result = await brainStore.processInput(inputContent.value)
    processingResult.value = result
  } catch (e) {
    console.error('Failed to process input:', e)
    alert('处理输入失败: ' + (e as Error).message)
  } finally {
    isProcessing.value = false
  }
}

function clearInput() {
  inputContent.value = ''
  processingResult.value = null
}

async function retrieveMemory() {
  if (!retrievalQuery.value.trim()) return

  isRetrieving.value = true
  retrievalResult.value = null
  try {
    const result = await brainStore.retrieveMemory(retrievalQuery.value)
    retrievalResult.value = result
  } catch (e) {
    console.error('Failed to retrieve memory:', e)
    alert('检索记忆失败: ' + (e as Error).message)
  } finally {
    isRetrieving.value = false
  }
}

async function triggerSelfReflection() {
  isReflecting.value = true
  reflectionResult.value = null
  try {
    const result = await brainStore.triggerSelfReflection()
    reflectionResult.value = result
    // Refresh brain status after reflection
    setTimeout(() => brainStore.fetchBrainStatus(), 2000)
  } catch (e) {
    console.error('Failed to trigger reflection:', e)
    alert('触发自我反思失败: ' + (e as Error).message)
  } finally {
    isReflecting.value = false
  }
}

async function generateHypotheses() {
  const context = '基于当前记忆系统的分析'
  isGenerating.value = true
  hasGeneratedHypotheses.value = true
  hypotheses.value = []
  try {
    const result = await brainStore.generateHypotheses(context)
    hypotheses.value = result
  } catch (e) {
    console.error('Failed to generate hypotheses:', e)
    alert('生成假设失败: ' + (e as Error).message)
  } finally {
    isGenerating.value = false
  }
}

async function testHypothesis(hypothesis: Hypothesis) {
  isTesting.value = true
  try {
    await brainStore.testHypothesis(hypothesis)
    alert('假设测试已启动，请稍后查看结果')
    // Update hypothesis status
    hypothesis.status = 'testing'
  } catch (e) {
    console.error('Failed to test hypothesis:', e)
    alert('测试假设失败: ' + (e as Error).message)
  } finally {
    isTesting.value = false
  }
}

function formatValueCategory(assessment: any): string {
  return brainStore.formatValueCategory(assessment)
}

function formatActionName(action: string): string {
  const names: Record<string, string> = {
    'memory_created': '创建记忆',
    'associations_created': '创建联想',
    'content_filtered': '内容过滤',
    'questions_generated': '生成问题'
  }
  return names[action] || action
}

function formatMemoryType(type: string): string {
  const types: Record<string, string> = {
    'storage': '存储',
    'thinking': '思维',
    'skill': '技能'
  }
  return types[type] || type
}

function formatHypothesisStatus(status: string): string {
  const statuses: Record<string, string> = {
    'pending': '待验证',
    'testing': '测试中',
    'confirmed': '已确认',
    'rejected': '已拒绝'
  }
  return statuses[status] || status
}
</script>

<style scoped>
.brain-interaction {
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

h5 {
  font-size: 12px;
  margin: 0 0 10px 0;
  color: #008f11;
}

.interaction-section {
  padding: 15px;
  background: rgba(0, 255, 65, 0.03);
  border: 1px solid rgba(0, 255, 65, 0.2);
  border-radius: 8px;
}

.input-form,
.retrieval-form,
.reflection-actions,
.hypothesis-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.brain-input,
.retrieval-input {
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(0, 255, 65, 0.3);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  color: #008f11;
  font-size: 12px;
  font-family: inherit;
  resize: vertical;
}

.brain-input:focus,
.retrieval-input:focus {
  outline: none;
  border-color: #00ff41;
}

.form-actions {
  display: flex;
  gap: 10px;
}

button {
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

button:hover:not(:disabled) {
  background: #00cc66;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

button.secondary {
  background: rgba(0, 255, 65, 0.1);
  color: #00ff41;
}

button[size="small"] {
  padding: 4px 8px;
  font-size: 11px;
}

.result-display {
  margin-top: 10px;
  padding: 10px;
  background: rgba(0, 255, 65, 0.05);
  border-radius: 6px;
}

.result-display.empty {
  text-align: center;
}

.result-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  font-size: 11px;
}

.result-label {
  color: #008f11;
}

.result-value {
  font-weight: bold;
  color: #00ff41;
}

.result-actions {
  margin-top: 8px;
}

.actions-label,
.questions-label {
  display: block;
  font-size: 11px;
  color: #008f11;
  margin-bottom: 4px;
}

.actions-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.action-tag {
  padding: 4px 8px;
  background: rgba(0, 255, 65, 0.1);
  border-radius: 4px;
  font-size: 10px;
  color: #008f11;
}

.result-questions {
  margin-top: 10px;
}

.questions-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.question-item {
  padding: 6px 10px;
  background: rgba(0, 255, 65, 0.05);
  border-radius: 4px;
  font-size: 11px;
  color: #008f11;
}

.results-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 300px;
  overflow-y: auto;
}

.memory-item {
  padding: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.15);
  border-radius: 6px;
}

.memory-content {
  font-size: 11px;
  color: #008f11;
  margin-bottom: 6px;
}

.memory-meta {
  display: flex;
  gap: 10px;
  font-size: 10px;
}

.meta-relevance,
.meta-type {
  color: #00ff41;
  font-weight: bold;
}

.empty-message {
  font-size: 11px;
  color: #666;
  font-style: italic;
  padding: 20px;
}

.reflection-summary {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  padding: 6px;
  background: rgba(0, 255, 65, 0.05);
  border-radius: 4px;
  font-size: 11px;
}

.summary-label {
  color: #008f11;
}

.summary-value {
  font-weight: bold;
  color: #00ff41;
}

.summary-value.has-biases {
  color: #ff6666;
}

.recommendations-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;
}

.recommendation-item {
  font-size: 11px;
  color: #008f11;
  padding: 4px 8px;
  background: rgba(0, 255, 65, 0.03);
  border-radius: 4px;
}

.hypotheses-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 300px;
  overflow-y: auto;
  margin-top: 10px;
}

.hypothesis-item {
  padding: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.15);
  border-radius: 6px;
}

.hypothesis-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 6px;
}

.hypothesis-description {
  font-size: 11px;
  color: #008f11;
}

.hypothesis-confidence,
.hypothesis-status {
  font-size: 10px;
  color: #00ff41;
}

.hypothesis-status.pending {
  color: #ff9900;
}

.hypothesis-status.testing {
  color: #00ffff;
}

.hypothesis-status.confirmed {
  color: #00ff00;
}

.hypothesis-status.rejected {
  color: #ff0000;
}

.hypothesis-actions {
  display: flex;
  justify-content: flex-end;
}
</style>
