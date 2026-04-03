<template>
  <div class="memory-writer panel">
    <h3>记忆写入</h3>

    <div class="write-mode-tabs">
      <button :class="['mode-tab', { active: writeMode === 'normal' }]" @click="writeMode = 'normal'">普通写入</button>
      <button :class="['mode-tab', { active: writeMode === 'tiered' }]" @click="writeMode = 'tiered'">分层写入</button>
    </div>

    <div class="form-group">
      <label>标题</label>
      <input v-model="form.title" type="text" placeholder="记忆标题（可选）" />
    </div>

    <div class="form-group">
      <label>内容 <span class="required">*</span></label>
      <textarea v-model="form.content" rows="6" placeholder="输入记忆内容..." :class="{ 'input-error': errors.content }"></textarea>
      <span v-if="errors.content" class="error-text">{{ errors.content }}</span>
      <span class="char-count">{{ form.content.length }} / 5000</span>
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
      <button class="btn-write" @click="writeMemory" :disabled="writing || !isFormValid">
        {{ writing ? '写入中...' : '✨ 写入记忆' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMemoryStore } from '@/stores/memory'
import { useAuthStore } from '@/stores/auth'
import { useToast } from '@/composables/useToast'
import { memoryApi, tieredApi } from '@/api/memory'
import type { MemoryType } from '@/types/memory'

const emit = defineEmits<{ written: [memoryId: string] }>()
const toast = useToast()
const memoryStore = useMemoryStore()
const authStore = useAuthStore()

const writeMode = ref<'normal' | 'tiered'>('normal')
const writing = ref(false)

const form = ref({
  title: '',
  content: '',
  scope: 'project',
  memory_type: 'storage' as MemoryType,
  content_type: 'note',
  keywords: [] as string[]
})

const errors = ref({ content: '' })

const keywordsText = computed({
  get: () => form.value.keywords.join(', '),
  set: (val) => { form.value.keywords = val.split(',').map(k => k.trim()).filter(Boolean) }
})

const isFormValid = computed(() => form.value.content.trim().length > 0 && form.value.content.length <= 5000)

function validateForm(): boolean {
  errors.value.content = ''
  if (!form.value.content.trim()) {
    errors.value.content = '请输入记忆内容'
    return false
  }
  if (form.value.content.length > 5000) {
    errors.value.content = '内容超过 5000 字符限制'
    return false
  }
  return true
}

function resetForm() {
  form.value = { title: '', content: '', scope: 'project', memory_type: 'storage', content_type: 'note', keywords: [] }
  errors.value = { content: '' }
}

async function writeMemory() {
  if (!validateForm()) return

  writing.value = true
  try {
    const currentUserId = authStore.getCurrentUserId
    let result: { status: string; id: string }

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
      const tierData = { content: form.value.content, user_id: currentUserId, title: form.value.title || undefined, keywords: form.value.keywords.length > 0 ? form.value.keywords : undefined }
      if (form.value.memory_type === 'storage') result = await tieredApi.writeStorage(tierData)
      else if (form.value.memory_type === 'thinking') result = await tieredApi.writeThinking(tierData)
      else result = await tieredApi.writeSkill(tierData)
      const labels: Record<string, string> = { storage: '存储', thinking: '思维', skill: '技能' }
      memoryStore.addLog(`${labels[form.value.memory_type] || '记忆'}写入成功`, 'success')
    }

    toast.success(`✅ 记忆已保存 ID: ${result.id}`)
    emit('written', result.id)
    resetForm()
    await memoryStore.fetchStats()
  } catch (e) {
    const msg = (e as Error).message || '未知错误'
    toast.error(`写入失败: ${msg}`)
    memoryStore.addLog('写入失败: ' + msg, 'error')
  } finally {
    writing.value = false
  }
}
</script>

<style scoped>
.memory-writer { padding: 20px; }
h3 { font-size: 16px; margin: 0 0 15px; text-shadow: 0 0 5px #00ff41; }

.write-mode-tabs { display: flex; gap: 5px; margin-bottom: 15px; }
.mode-tab {
  flex: 1; padding: 10px; background: rgba(0, 255, 65, 0.1);
  border: 1px solid rgba(0, 255, 65, 0.3); color: #00ff41;
  cursor: pointer; font-size: 12px; font-family: inherit;
  transition: all 0.25s ease;
}
.mode-tab.active { background: rgba(0, 255, 65, 0.3); border-color: #00ff41; box-shadow: 0 0 8px rgba(0, 255, 65, 0.3); }
.mode-tab:hover:not(.active) { background: rgba(0, 255, 65, 0.18); }

.form-group { margin-bottom: 15px; position: relative; }
.form-group label { display: block; font-size: 12px; color: #008f11; margin-bottom: 8px; text-transform: uppercase; }
.required { color: #ff4444; }

.form-group input, .form-group textarea, .form-group select {
  width: 100%; padding: 10px; background: rgba(0, 255, 65, 0.08);
  border: 1px solid rgba(0, 255, 65, 0.3); color: #00ff41;
  font-family: inherit; font-size: 13px;
  transition: border-color 0.2s;
}
.form-group input:focus, .form-group textarea:focus, .form-group select:focus {
  outline: none; border-color: #00ff41; box-shadow: 0 0 5px rgba(0, 255, 65, 0.15);
}
.form-group textarea { resize: vertical; min-height: 100px; }
.form-group select { cursor: pointer; }
.form-group select option { background: #001a0d; color: #00ff41; }

.input-error { border-color: #ff4444 !important; box-shadow: 0 0 5px rgba(255, 68, 68, 0.2) !important; }
.error-text { display: block; font-size: 11px; color: #ff4444; margin-top: 4px; animation: shake 0.3s ease; }
.char-count { position: absolute; right: 8px; bottom: 22px; font-size: 10px; color: #064a26; }
@keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-4px); } 75% { transform: translateX(4px); } }

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }

.form-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; }

.btn-reset {
  padding: 10px 20px; background: rgba(0, 255, 65, 0.08);
  border: 1px solid rgba(0, 255, 65, 0.3); color: #00aa33;
  cursor: pointer; font-family: inherit; font-size: 13px;
  transition: all 0.2s; border-radius: 3px;
}
.btn-reset:hover { background: rgba(0, 255, 65, 0.15); color: #00ff41; }

.btn-write {
  padding: 10px 24px; background: linear-gradient(135deg, rgba(0, 255, 65, 0.25), rgba(0, 200, 50, 0.15));
  border: 1px solid #00ff41; color: #00ff41; cursor: pointer;
  font-family: inherit; font-size: 13px; font-weight: bold;
  transition: all 0.25s; border-radius: 3px;
  letter-spacing: 1px;
}
.btn-write:hover:not(:disabled) {
  background: linear-gradient(135deg, rgba(0, 255, 65, 0.4), rgba(0, 200, 50, 0.25));
  box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
  transform: translateY(-1px);
}
.btn-write:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
</style>
