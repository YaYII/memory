<template>
  <div class="memory-editor-modal" v-if="visible" @click="close">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h2>编辑记忆</h2>
        <button class="close-btn" @click="close">×</button>
      </div>
      
      <div class="modal-body">
        <div class="form-group">
          <label>标题</label>
          <input v-model="form.title" type="text" placeholder="记忆标题" />
        </div>
        
        <div class="form-group">
          <label>内容</label>
          <textarea v-model="form.content" rows="10" placeholder="记忆内容"></textarea>
        </div>
        
        <div class="form-group">
          <label>关键词（用逗号分隔）</label>
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
          
          <div class="form-group">
            <label>记忆类型</label>
            <select v-model="form.memory_type">
              <option value="storage">存储记忆</option>
              <option value="thinking">思维记忆</option>
              <option value="skill">技能记忆</option>
            </select>
          </div>
        </div>
        
        <div class="form-actions">
          <button class="btn-secondary" @click="close">取消</button>
          <button class="btn-danger" @click="deleteMemory" v-if="memory">删除</button>
          <button class="btn-primary" @click="save" :disabled="saving">
            {{ saving ? '保存中...' : '保存' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useMemoryStore } from '@/stores/memory'
import type { Memory } from '@/types/memory'

const props = defineProps<{
  visible: boolean
  memory: Memory | null
}>()

const emit = defineEmits<{
  close: []
  saved: []
  deleted: [memoryId: string]
}>()

const memoryStore = useMemoryStore()
const saving = ref(false)

const form = ref({
  title: '',
  content: '',
  scope: 'project',
  memory_type: 'storage',
  keywords: [] as string[]
})

const keywordsText = computed({
  get: () => form.value.keywords.join(', '),
  set: (val) => {
    form.value.keywords = val.split(',').map(k => k.trim()).filter(k => k)
  }
})

watch(() => props.memory, (newMemory) => {
  if (newMemory) {
    form.value = {
      title: newMemory.title || '',
      content: newMemory.content || '',
      scope: newMemory.scope || 'project',
      memory_type: newMemory.memory_type || 'storage',
      keywords: newMemory.keywords || []
    }
  }
}, { immediate: true })

function close() {
  emit('close')
}

async function save() {
  if (!props.memory) return
  
  saving.value = true
  try {
    await memoryStore.updateMemory(props.memory.id, form.value.content)
    memoryStore.addLog('记忆已更新', 'success')
    emit('saved')
    close()
  } catch (error) {
    memoryStore.addLog('更新失败: ' + (error as Error).message, 'error')
  } finally {
    saving.value = false
  }
}

async function deleteMemory() {
  if (!props.memory) return
  
  if (!confirm('确定要删除这条记忆吗？此操作不可撤销。')) {
    return
  }
  
  try {
    await memoryStore.deleteMemory(props.memory.id)
    memoryStore.addLog('记忆已删除', 'success')
    emit('deleted', props.memory.id)
    close()
  } catch (error) {
    memoryStore.addLog('删除失败: ' + (error as Error).message, 'error')
  }
}
</script>

<style scoped>
.memory-editor-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  background: rgba(0, 10, 20, 0.95);
  border: 1px solid rgba(0, 255, 65, 0.5);
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.2);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid rgba(0, 255, 65, 0.3);
}

.modal-header h2 {
  font-size: 18px;
  text-shadow: 0 0 5px #00ff41;
  margin: 0;
}

.close-btn {
  width: 30px;
  height: 30px;
  background: rgba(255, 0, 0, 0.2);
  border: 1px solid #ff0000;
  color: #ff0000;
  font-size: 20px;
  cursor: pointer;
}

.modal-body {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 12px;
  color: #008f11;
  margin-bottom: 8px;
  text-transform: uppercase;
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
  padding-top: 20px;
  border-top: 1px solid rgba(0, 255, 65, 0.2);
}

button {
  padding: 10px 20px;
  border: 1px solid rgba(0, 255, 65, 0.5);
  cursor: pointer;
  font-family: inherit;
  font-size: 13px;
  transition: all 0.3s;
}

.btn-primary {
  background: rgba(0, 255, 65, 0.2);
  color: #00ff41;
}

.btn-primary:hover:not(:disabled) {
  background: rgba(0, 255, 65, 0.3);
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-secondary {
  background: rgba(0, 255, 65, 0.1);
  color: #00ff41;
}

.btn-secondary:hover {
  background: rgba(0, 255, 65, 0.15);
}

.btn-danger {
  background: rgba(255, 0, 0, 0.2);
  border-color: #ff0000;
  color: #ff0000;
}

.btn-danger:hover {
  background: rgba(255, 0, 0, 0.3);
}
</style>
