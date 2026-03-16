<template>
  <div class="memory-writer panel">
    <h3>记忆写入</h3>
    
    <div class="write-mode-tabs">
      <button 
        :class="['mode-tab', { active: writeMode === 'normal' }]"
        @click="writeMode = 'normal'"
      >
        普通写入
      </button>
      <button 
        :class="['mode-tab', { active: writeMode === 'tiered' }]"
        @click="writeMode = 'tiered'"
      >
        分层写入
      </button>
    </div>
    
    <div class="form-group">
      <label>标题</label>
      <input v-model="form.title" type="text" placeholder="记忆标题（可选）" />
    </div>
    
    <div class="form-group">
      <label>内容 <span class="required">*</span></label>
      <textarea 
        v-model="form.content" 
        rows="6" 
        placeholder="输入记忆内容..."
        :class="{ 'input-error': errors.content }"
      ></textarea>
      <span v-if="errors.content" class="error-text">{{ errors.content }}</span>
    </div>
    
    <div class="form-group">
      <label>关键词</label>
      <input v-model="keywordsText" type="text" placeholder="关键词1, 关键词2, ..." />
    </div>
    
    <div class="form-row">
      <div class="form-group">
        <label>作用域</label>
        <select v-model="form.scope">
          <option value="project">项目</option>
          <option value="global">全局</option>
        </select>
      </div>
      
      <div class="form-group" v-if="writeMode === 'tiered'">
        <label>记忆类型</label>
        <select v-model="form.memory_type">
          <option value="storage">存储记忆 💾</option>
          <option value="thinking">思维记忆 💭</option>
          <option value="skill">技能记忆 ⚡</option>
        </select>
      </div>
      
      <div class="form-group" v-if="writeMode === 'normal'">
        <label>内容类型</label>
        <select v-model="form.content_type">
          <option value="note">笔记</option>
          <option value="task">任务</option>
          <option value="summary">摘要</option>
          <option value="code">代码</option>
          <option value="config">配置</option>
          <option value="workflow">工作流</option>
        </select>
      </div>
    </div>
    
    <div class="form-actions">
      <button class="btn-reset" @click="resetForm">重置</button>
      <button 
        class="btn-write" 
        @click="writeMemory" 
        :disabled="writing || !isFormValid"
      >
        {{ writing ? '写入中...' : '写入记忆' }}
      </button>
    </div>
    
    <div v-if="successMessage" class="success-message">
      {{ successMessage }}
    </div>
    
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMemoryStore } from '@/stores/memory'
import { useAuthStore } from '@/stores/auth'
import { memoryApi, tieredApi } from '@/api/memory'
import type { MemoryType } from '@/types/memory'

const emit = defineEmits<{
  written: [memoryId: string]
}>()

const memoryStore = useMemoryStore()
const authStore = useAuthStore()

const writeMode = ref<'normal' | 'tiered'>('normal')
const writing = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const form = ref({
  title: '',
  content: '',
  scope: 'project',
  memory_type: 'storage' as MemoryType,
  content_type: 'note',
  keywords: [] as string[]
})

const errors = ref({
  content: ''
})

const keywordsText = computed({
  get: () => form.value.keywords.join(', '),
  set: (val) => {
    form.value.keywords = val.split(',').map(k => k.trim()).filter(k => k)
  }
})

const isFormValid = computed(() => {
  return form.value.content.trim().length > 0
})

function validateForm(): boolean {
  errors.value.content = ''
  
  if (!form.value.content.trim()) {
    errors.value.content = '请输入记忆内容'
    return false
  }
  
  return true
}

function resetForm() {
  form.value = {
    title: '',
    content: '',
    scope: 'project',
    memory_type: 'storage',
    content_type: 'note',
    keywords: []
  }
  errors.value = { content: '' }
  successMessage.value = ''
  errorMessage.value = ''
}

async function writeMemory() {
  if (!validateForm()) return
  
  writing.value = true
  successMessage.value = ''
  errorMessage.value = ''
  
  try {
    let result: { status: string; id: string }
    
    const currentUserId = authStore.getCurrentUserId
    
    if (writeMode.value === 'normal') {
      result = await memoryApi.writeMemory({
        content: form.value.content,
        user_id: currentUserId,
        title: form.value.title || undefined,
        scope: form.value.scope,
        keywords: form.value.keywords.length > 0 ? form.value.keywords : undefined,
        content_type: form.value.content_type
      })
      memoryStore.addLog('记忆写入成功', 'success')
    } else {
      const tierData = {
        content: form.value.content,
        user_id: currentUserId,
        title: form.value.title || undefined,
        keywords: form.value.keywords.length > 0 ? form.value.keywords : undefined
      }
      
      if (form.value.memory_type === 'storage') {
        result = await tieredApi.writeStorage(tierData)
      } else if (form.value.memory_type === 'thinking') {
        result = await tieredApi.writeThinking(tierData)
      } else {
        result = await tieredApi.writeSkill(tierData)
      }
      
      const typeLabels: Record<string, string> = {
        storage: '存储记忆',
        thinking: '思维记忆',
        skill: '技能记忆'
      }
      const label = typeLabels[form.value.memory_type] || '记忆'
      memoryStore.addLog(`${label}写入成功`, 'success')
    }
    
    successMessage.value = `记忆写入成功！ID: ${result.id}`
    emit('written', result.id)
    
    form.value = {
      title: '',
      content: '',
      scope: form.value.scope,
      memory_type: form.value.memory_type,
      content_type: form.value.content_type,
      keywords: []
    }
    
    await memoryStore.fetchStats()
  } catch (error) {
    const message = (error as Error).message || '未知错误'
    errorMessage.value = `写入失败: ${message}`
    memoryStore.addLog('写入失败: ' + message, 'error')
  } finally {
    writing.value = false
  }
}
</script>

<style scoped>
.memory-writer {
  padding: 20px;
}

h3 {
  font-size: 16px;
  margin: 0 0 15px 0;
  text-shadow: 0 0 5px #00ff41;
}

.write-mode-tabs {
  display: flex;
  gap: 5px;
  margin-bottom: 15px;
}

.mode-tab {
  flex: 1;
  padding: 10px;
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid rgba(0, 255, 65, 0.3);
  color: #00ff41;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s;
}

.mode-tab.active {
  background: rgba(0, 255, 65, 0.3);
  border-color: #00ff41;
}

.mode-tab:hover {
  background: rgba(0, 255, 65, 0.2);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-size: 12px;
  color: #008f11;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.required {
  color: #ff0000;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px;
  background: rgba(0, 255, 65, 0.08);
  border: 1px solid rgba(0, 255, 65, 0.3);
  color: #00ff41;
  font-family: inherit;
  font-size: 13px;
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.form-group select {
  cursor: pointer;
}

.form-group select option {
  background: #001a0d;
  color: #00ff41;
}

.input-error {
  border-color: #ff0000 !important;
}

.error-text {
  display: block;
  font-size: 11px;
  color: #ff0000;
  margin-top: 5px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  border: 1px solid rgba(0, 255, 65, 0.5);
  cursor: pointer;
  font-family: inherit;
  font-size: 13px;
  transition: all 0.3s;
}

.btn-write {
  background: rgba(0, 255, 65, 0.2);
  border-color: #00ff41;
  color: #00ff41;
}

.btn-write:hover:not(:disabled) {
  background: rgba(0, 255, 65, 0.3);
}

.btn-write:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-reset {
  background: rgba(0, 255, 65, 0.1);
  color: #00ff41;
}

.btn-reset:hover {
  background: rgba(0, 255, 65, 0.15);
}

.success-message {
  margin-top: 15px;
  padding: 10px;
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid rgba(0, 255, 65, 0.5);
  color: #00ff41;
  font-size: 12px;
}

.error-message {
  margin-top: 15px;
  padding: 10px;
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.5);
  color: #ff0000;
  font-size: 12px;
}
</style>
