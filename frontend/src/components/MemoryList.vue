<template>
  <div class="memory-list-panel panel">
    <h1>记忆列表</h1>
    
    <!-- 统计信息 -->
    <div class="tiered-stats">
      <div class="stat-item">
        <span class="stat-label">技能</span>
        <span class="stat-value">{{ memoryCount.skill }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">思维</span>
        <span class="stat-value">{{ memoryCount.thinking }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">存储</span>
        <span class="stat-value">{{ memoryCount.storage }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">总计</span>
        <span class="stat-value">{{ memoryCount.total }}</span>
      </div>
    </div>
    
    <!-- 类型筛选 -->
    <div class="memory-type-tabs">
      <button 
        v-for="type in memoryTypes" 
        :key="type.value"
        :class="['memory-tab', { active: currentMemoryType === type.value }]"
        @click="selectType(type.value)"
      >
        {{ type.label }}
      </button>
    </div>
    
    <!-- 搜索框 -->
    <div class="memory-search-box">
      <input 
        v-model="searchQuery"
        type="text" 
        placeholder="搜索记忆..."
        @keyup.enter="handleSearch"
      />
      <button @click="handleSearch">🔍</button>
    </div>
    
    <!-- 记忆列表 -->
    <div class="memory-list" v-if="!isLoading">
      <div v-if="paginatedMemories.length === 0" class="memory-item-placeholder">
        暂无记忆
      </div>
      <div 
        v-else
        v-for="memory in paginatedMemories" 
        :key="memory.id"
        class="memory-item"
        :class="[memory.memory_type, { selected: selectedMemoryId === memory.id }]"
        @click="selectMemory(memory)"
      >
        <div class="memory-header">
          <span class="memory-type-badge" :class="memory.memory_type">
            {{ getMemoryTypeLabel(memory.memory_type) }}
          </span>
          <span class="memory-time">{{ formatTime(memory.timestamp) }}</span>
        </div>
        <div class="memory-title">{{ memory.title || memory.content?.slice(0, 50) + '...' }}</div>
        <div class="memory-content-preview">{{ memory.content?.slice(0, 80) }}...</div>
        <div class="memory-keywords" v-if="memory.keywords?.length">
          <span v-for="kw in memory.keywords.slice(0, 3)" :key="kw" class="keyword-tag">{{ kw }}</span>
        </div>
      </div>
    </div>
    
    <div v-else class="memory-item-placeholder">
      <div class="loading-spinner"></div>
      加载中...
    </div>
    
    <!-- 分页控制 -->
    <div class="pagination" v-if="totalPages > 1">
      <button 
        class="page-btn" 
        :disabled="currentPage === 1"
        @click="currentPage--"
      >
        ←
      </button>
      <span class="page-info">{{ currentPage }} / {{ totalPages }}</span>
      <button 
        class="page-btn" 
        :disabled="currentPage === totalPages"
        @click="currentPage++"
      >
        →
      </button>
      <span class="page-size">每页 {{ pageSize }} 条</span>
    </div>
    
    <!-- 记忆详情弹窗 -->
    <div v-if="showDetail && selectedMemory" class="memory-detail-modal" @click="closeDetail">
      <div class="memory-detail-content" @click.stop>
        <div class="detail-header">
          <h3>记忆详情</h3>
          <button class="close-btn" @click="closeDetail">×</button>
        </div>
        <div class="detail-body">
          <div class="detail-row">
            <span class="detail-label">ID:</span>
            <span class="detail-value">{{ selectedMemory.id }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">类型:</span>
            <span class="detail-value">
              <span class="memory-type-badge" :class="selectedMemory.memory_type">
                {{ getMemoryTypeLabel(selectedMemory.memory_type) }}
              </span>
            </span>
          </div>
          <div class="detail-row">
            <span class="detail-label">标题:</span>
            <span class="detail-value">{{ selectedMemory.title || '无标题' }}</span>
          </div>
          <div class="detail-row" v-if="selectedMemory.keywords?.length">
            <span class="detail-label">关键词:</span>
            <span class="detail-value">
              <span v-for="kw in selectedMemory.keywords" :key="kw" class="keyword-tag">{{ kw }}</span>
            </span>
          </div>
          <div class="detail-row">
            <span class="detail-label">时间:</span>
            <span class="detail-value">{{ selectedMemory.timestamp }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">内容:</span>
          </div>
          <div class="detail-content">{{ selectedMemory.content }}</div>
        </div>
        <div class="detail-actions">
          <button class="action-btn edit" @click="startEdit">✏️ 编辑</button>
          <button class="action-btn delete" @click="confirmDelete">🗑️ 删除</button>
        </div>
      </div>
    </div>
    
    <!-- 编辑弹窗 -->
    <div v-if="isEditing && editingMemory" class="memory-detail-modal" @click="cancelEdit">
      <div class="memory-detail-content edit-mode" @click.stop>
        <div class="detail-header">
          <h3>编辑记忆</h3>
          <button class="close-btn" @click="cancelEdit">×</button>
        </div>
        <div class="detail-body">
          <div class="edit-row">
            <label>标题:</label>
            <input v-model="editingMemory.title" type="text" placeholder="记忆标题" />
          </div>
          <div class="edit-row">
            <label>关键词 (逗号分隔):</label>
            <input v-model="editKeywords" type="text" placeholder="关键词1, 关键词2" />
          </div>
          <div class="edit-row">
            <label>内容:</label>
            <textarea v-model="editingMemory.content" rows="8" placeholder="记忆内容..."></textarea>
          </div>
        </div>
        <div class="detail-actions">
          <button class="action-btn save" @click="saveEdit">💾 保存</button>
          <button class="action-btn cancel" @click="cancelEdit">❌ 取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useMemoryStore } from '@/stores/memory'
import { storeToRefs } from 'pinia'
import { memoryApi } from '@/api/memory'
import type { Memory, MemoryType } from '@/types/memory'

const emit = defineEmits<{
  memorySelect: [memory: Memory]
}>()

const memoryStore = useMemoryStore()
const { memories, memoryCountByType, isLoading } = storeToRefs(memoryStore)
const currentMemoryType = computed(() => memoryStore.currentMemoryType)

const searchQuery = ref('')
const currentPage = ref(1)
const pageSize = 50
const selectedMemoryId = ref<string | null>(null)
const selectedMemory = ref<Memory | null>(null)
const showDetail = ref(false)
const isEditing = ref(false)
const editingMemory = ref<Memory | null>(null)
const editKeywords = ref('')

const memoryTypes = [
  { label: '全部', value: 'all' as MemoryType },
  { label: '技能', value: 'skill' as MemoryType },
  { label: '思维', value: 'thinking' as MemoryType },
  { label: '存储', value: 'storage' as MemoryType }
]

const memoryCount = computed(() => memoryCountByType.value)

// 筛选后的记忆
const filteredMemories = computed(() => {
  let result = memories.value
  
  // 按类型筛选
  if (currentMemoryType.value !== 'all') {
    result = result.filter(m => m.memory_type === currentMemoryType.value)
  }
  
  // 按搜索词筛选
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(m => 
      m.content?.toLowerCase().includes(query) ||
      m.title?.toLowerCase().includes(query) ||
      m.keywords?.some(k => k.toLowerCase().includes(query))
    )
  }
  
  return result
})

// 分页后的记忆
const paginatedMemories = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  return filteredMemories.value.slice(start, end)
})

// 总页数
const totalPages = computed(() => {
  return Math.ceil(filteredMemories.value.length / pageSize)
})

// 监听筛选条件变化，重置页码
watch([() => currentMemoryType.value, searchQuery], () => {
  currentPage.value = 1
})

onMounted(() => {
  loadMemories()
})

async function loadMemories() {
  try {
    // 获取所有记忆
    const response = await memoryApi.searchMemories('', 1000)
    memories.value = response.items.map((item: any) => ({
      id: item.memory_id || item.id,
      content: item.content,
      title: item.title,
      memory_type: item.memory_type || 'storage',
      keywords: item.keywords || [],
      tags: item.tags || [],
      timestamp: item.timestamp,
      scope: item.scope,
      user_id: item.user_id,
      importance: item.importance || 0.5
    })) as Memory[]
  } catch (error) {
    console.error('加载记忆失败:', error)
  }
}

function selectType(type: MemoryType) {
  memoryStore.setMemoryType(type)
}

function selectMemory(memory: Memory) {
  selectedMemoryId.value = memory.id
  selectedMemory.value = memory
  showDetail.value = true
  emit('memorySelect', memory)
}

function closeDetail() {
  showDetail.value = false
  selectedMemory.value = null
  selectedMemoryId.value = null
}

function startEdit() {
  if (!selectedMemory.value) return
  editingMemory.value = { ...selectedMemory.value }
  editKeywords.value = selectedMemory.value.keywords?.join(', ') || ''
  isEditing.value = true
  showDetail.value = false
}

function cancelEdit() {
  isEditing.value = false
  editingMemory.value = null
  editKeywords.value = ''
}

async function saveEdit() {
  if (!editingMemory.value) return
  
  try {
    const updatedMemory = {
      ...editingMemory.value,
      keywords: editKeywords.value.split(',').map(k => k.trim()).filter(k => k)
    }
    
    // 调用API更新记忆
    await memoryApi.updateMemory(updatedMemory.id, {
      content: updatedMemory.content,
      user_id: updatedMemory.user_id || 'default',
      title: updatedMemory.title,
      keywords: updatedMemory.keywords
    })
    
    // 更新本地数据
    const index = memories.value.findIndex(m => m.id === updatedMemory.id)
    if (index !== -1) {
      memories.value[index] = updatedMemory
    }
    
    isEditing.value = false
    editingMemory.value = null
    
    // 重新加载记忆
    await loadMemories()
  } catch (error) {
    console.error('保存记忆失败:', error)
    alert('保存失败: ' + (error as Error).message)
  }
}

async function confirmDelete() {
  if (!selectedMemory.value) return
  
  if (!confirm(`确定要删除记忆 "${selectedMemory.value.title || selectedMemory.value.id}" 吗？`)) {
    return
  }
  
  try {
    await memoryApi.deleteMemory(selectedMemory.value.id, selectedMemory.value.user_id || 'default')
    
    // 从本地列表移除
    memories.value = memories.value.filter(m => m.id !== selectedMemory.value?.id)
    
    closeDetail()
    
    // 重新加载记忆
    await loadMemories()
  } catch (error) {
    console.error('删除记忆失败:', error)
    alert('删除失败: ' + (error as Error).message)
  }
}

function handleSearch() {
  currentPage.value = 1
  // 搜索已经通过computed自动处理
}

function getMemoryTypeLabel(type?: string): string {
  const labels: Record<string, string> = {
    'storage': '存储',
    'thinking': '思维',
    'skill': '技能'
  }
  return labels[type || ''] || type || '未知'
}

function formatTime(timestamp: string): string {
  if (!timestamp) return ''
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)
  
  if (minutes < 1) return '刚刚'
  if (minutes < 60) return `${minutes}分钟前`
  if (hours < 24) return `${hours}小时前`
  if (days < 30) return `${days}天前`
  return date.toLocaleDateString()
}
</script>

<style scoped>
.panel {
  background: rgba(0, 10, 20, 0.85);
  border: 1px solid rgba(0, 255, 65, 0.5);
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.1);
  backdrop-filter: blur(8px);
  padding: 15px;
  color: #00ff41;
  font-family: 'Consolas', 'Monaco', monospace;
}

.memory-list-panel {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 380px;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  z-index: 100;
}

h1 {
  font-size: 16px;
  margin: 0 0 15px 0;
  text-shadow: 0 0 5px #00ff41;
}

.tiered-stats {
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
  padding: 10px;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.2);
}

.stat-item {
  flex: 1;
  text-align: center;
}

.stat-label {
  display: block;
  font-size: 10px;
  color: #008f11;
  margin-bottom: 3px;
}

.stat-value {
  display: block;
  font-size: 16px;
  font-weight: bold;
  color: #00ffff;
  text-shadow: 0 0 5px #00ffff;
}

.memory-type-tabs {
  display: flex;
  gap: 5px;
  margin-bottom: 15px;
}

.memory-tab {
  flex: 1;
  padding: 6px;
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid rgba(0, 255, 65, 0.3);
  color: #00ff41;
  cursor: pointer;
  font-size: 11px;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.memory-tab.active {
  background: #00ff41;
  color: #000;
  border-color: #00ff41;
  box-shadow: 0 0 10px #00ff41;
}

.memory-tab:hover {
  background: rgba(0, 255, 65, 0.2);
  border-color: #00ff41;
}

.memory-search-box {
  display: flex;
  gap: 5px;
  margin-bottom: 15px;
}

.memory-search-box input {
  flex: 1;
  padding: 8px;
  background: rgba(0, 255, 65, 0.08);
  border: 1px solid rgba(0, 255, 65, 0.3);
  color: #00ff41;
  font-family: inherit;
  font-size: 12px;
}

.memory-search-box input:focus {
  outline: none;
  border-color: #00ff41;
  box-shadow: 0 0 5px rgba(0, 255, 65, 0.3);
}

.memory-search-box button {
  padding: 8px 12px;
  background: rgba(0, 255, 65, 0.2);
  border: 1px solid #00ff41;
  color: #00ff41;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s;
}

.memory-search-box button:hover {
  background: rgba(0, 255, 65, 0.4);
}

.memory-list {
  max-height: 450px;
  overflow-y: auto;
  margin-bottom: 15px;
}

.memory-item {
  padding: 12px;
  margin-bottom: 8px;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.2);
  border-left: 3px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: fadeIn 0.5s ease;
}

.memory-item:hover {
  background: rgba(0, 255, 65, 0.15);
  border-color: #00ff41;
  transform: translateX(5px);
}

.memory-item.selected {
  background: rgba(0, 255, 65, 0.2);
  border-color: #00ff41;
  border-left-color: #00ff41;
}

.memory-item.storage {
  border-left-color: #00ff41;
}

.memory-item.thinking {
  border-left-color: #ff00ff;
}

.memory-item.skill {
  border-left-color: #00ffff;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}

.memory-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.memory-type-badge {
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 10px;
}

.memory-type-badge.storage {
  background: rgba(0, 255, 65, 0.3);
  color: #00ff41;
}

.memory-type-badge.thinking {
  background: rgba(255, 0, 255, 0.3);
  color: #ff00ff;
}

.memory-type-badge.skill {
  background: rgba(0, 255, 255, 0.3);
  color: #00ffff;
}

.memory-time {
  color: #008f11;
  font-size: 10px;
}

.memory-title {
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 4px;
  color: #00ff41;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.memory-content-preview {
  font-size: 11px;
  color: #aaa;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 6px;
}

.memory-keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.keyword-tag {
  padding: 2px 6px;
  background: rgba(0, 255, 65, 0.15);
  border: 1px solid rgba(0, 255, 65, 0.3);
  border-radius: 3px;
  font-size: 10px;
  color: #00ff41;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-top: 1px solid rgba(0, 255, 65, 0.2);
}

.page-btn {
  padding: 6px 12px;
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid rgba(0, 255, 65, 0.3);
  color: #00ff41;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s;
}

.page-btn:hover:not(:disabled) {
  background: rgba(0, 255, 65, 0.3);
  border-color: #00ff41;
}

.page-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.page-info {
  font-size: 12px;
  color: #00ff41;
}

.page-size {
  font-size: 10px;
  color: #008f11;
  margin-left: 10px;
}

.memory-item-placeholder {
  padding: 40px 20px;
  text-align: center;
  color: #008f11;
}

.loading-spinner {
  width: 30px;
  height: 30px;
  border: 2px solid rgba(0, 255, 65, 0.3);
  border-top: 2px solid #00ff41;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 详情弹窗 */
.memory-detail-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.memory-detail-content {
  width: 600px;
  max-height: 80vh;
  background: rgba(0, 10, 20, 0.95);
  border: 1px solid rgba(0, 255, 65, 0.5);
  box-shadow: 0 0 30px rgba(0, 255, 65, 0.3);
  overflow-y: auto;
}

.memory-detail-content.edit-mode {
  width: 500px;
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid rgba(0, 255, 65, 0.3);
}

.detail-header h3 {
  margin: 0;
  font-size: 16px;
  text-shadow: 0 0 5px #00ff41;
}

.close-btn {
  width: 30px;
  height: 30px;
  background: rgba(255, 0, 0, 0.2);
  border: 1px solid #ff0000;
  color: #ff0000;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.close-btn:hover {
  background: rgba(255, 0, 0, 0.4);
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
}

.detail-body {
  padding: 20px;
}

.detail-row {
  display: flex;
  margin-bottom: 12px;
  font-size: 13px;
}

.detail-label {
  width: 80px;
  color: #008f11;
  flex-shrink: 0;
}

.detail-value {
  flex: 1;
  color: #00ff41;
}

.detail-content {
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.2);
  padding: 15px;
  font-size: 13px;
  line-height: 1.6;
  color: #ccc;
  max-height: 200px;
  overflow-y: auto;
  white-space: pre-wrap;
}

.detail-actions {
  display: flex;
  gap: 10px;
  padding: 15px 20px;
  border-top: 1px solid rgba(0, 255, 65, 0.3);
}

.action-btn {
  flex: 1;
  padding: 10px;
  border: 1px solid;
  cursor: pointer;
  font-family: inherit;
  font-size: 12px;
  transition: all 0.3s;
}

.action-btn.edit {
  background: rgba(0, 255, 65, 0.1);
  border-color: #00ff41;
  color: #00ff41;
}

.action-btn.edit:hover {
  background: rgba(0, 255, 65, 0.3);
}

.action-btn.delete {
  background: rgba(255, 0, 0, 0.1);
  border-color: #ff0000;
  color: #ff6666;
}

.action-btn.delete:hover {
  background: rgba(255, 0, 0, 0.3);
}

.action-btn.save {
  background: rgba(0, 255, 65, 0.2);
  border-color: #00ff41;
  color: #00ff41;
}

.action-btn.save:hover {
  background: rgba(0, 255, 65, 0.4);
}

.action-btn.cancel {
  background: rgba(128, 128, 128, 0.1);
  border-color: #666;
  color: #999;
}

.action-btn.cancel:hover {
  background: rgba(128, 128, 128, 0.3);
}

/* 编辑表单 */
.edit-row {
  margin-bottom: 15px;
}

.edit-row label {
  display: block;
  margin-bottom: 5px;
  color: #008f11;
  font-size: 12px;
}

.edit-row input,
.edit-row textarea {
  width: 100%;
  padding: 10px;
  background: rgba(0, 255, 65, 0.08);
  border: 1px solid rgba(0, 255, 65, 0.3);
  color: #00ff41;
  font-family: inherit;
  font-size: 13px;
  box-sizing: border-box;
}

.edit-row input:focus,
.edit-row textarea:focus {
  outline: none;
  border-color: #00ff41;
  box-shadow: 0 0 5px rgba(0, 255, 65, 0.3);
}

.edit-row textarea {
  resize: vertical;
  min-height: 150px;
}

/* 滚动条 */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 255, 65, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 255, 65, 0.3);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 255, 65, 0.5);
}
</style>
