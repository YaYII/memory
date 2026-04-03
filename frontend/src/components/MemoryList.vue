<template>
  <div class="memory-list-panel panel">
    <h1>记忆列表</h1>

    <!-- 统计信息 -->
    <div class="tiered-stats">
      <div class="stat-item" v-for="(label, key) in statKeys" :key="key">
        <span class="stat-label">{{ label }}</span>
        <span class="stat-value">{{ (memoryCount as Record<string, number>)[key] ?? 0 }}</span>
      </div>
    </div>

    <!-- 类型筛选 -->
    <div class="memory-type-tabs">
      <button
        v-for="t in memoryTypes"
        :key="t.value"
        :class="['memory-tab', { active: currentMemoryType === t.value }]"
        @click="selectType(t.value)"
      >{{ t.label }}</button>
    </div>

    <!-- 搜索框（防抖） -->
    <div class="memory-search-box">
      <input v-model="searchInput" type="text" placeholder="搜索记忆..." @keyup.enter="triggerSearch" />
      <button @click="triggerSearch">🔍</button>
    </div>

    <!-- 记忆列表 -->
    <div class="memory-list" v-if="!isLoading">
      <div v-if="paginatedMemories.length === 0" class="memory-item-placeholder">
        <div class="empty-icon">🧠</div>
        <p>暂无记忆</p>
        <span class="empty-hint">写入新记忆来激活认知系统</span>
      </div>
      <TransitionGroup name="list" tag="div" v-else>
        <div
          v-for="memory in paginatedMemories"
          :key="memory.id"
          class="memory-item"
          :class="[memory.memory_type, { selected: selectedMemoryId === memory.id }]"
          @click="selectMemory(memory)"
        >
          <div class="memory-header">
            <span class="memory-type-badge" :class="memory.memory_type">{{ getTypeLabel(memory.memory_type) }}</span>
            <span class="memory-time">{{ formatTime(memory.timestamp) }}</span>
          </div>
          <div class="memory-title">{{ memory.title || memory.content?.slice(0, 50) + '...' }}</div>
          <div class="memory-content-preview">{{ memory.content?.slice(0, 80) }}...</div>
          <div class="memory-keywords" v-if="memory.keywords?.length">
            <span v-for="kw in memory.keywords.slice(0, 3)" :key="kw" class="keyword-tag">{{ kw }}</span>
          </div>
        </div>
      </TransitionGroup>
    </div>

    <div v-else class="memory-item-placeholder">
      <div class="loading-spinner"></div>
      加载中...
    </div>

    <!-- 分页 -->
    <div class="pagination" v-if="totalPages > 1">
      <button class="page-btn" :disabled="currentPage === 1" @click="currentPage--">←</button>
      <span class="page-info">{{ currentPage }} / {{ totalPages }}</span>
      <button class="page-btn" :disabled="currentPage === totalPages" @click="currentPage++">→</button>
      <span class="page-size">每页 {{ pageSize }} 条</span>
    </div>

    <!-- 详情弹窗（只读） -->
    <Teleport to="body">
      <div v-if="showDetail && selectedMemory" class="modal-overlay" @click.self="closeDetail">
        <div class="modal-card detail-card">
          <div class="detail-header">
            <h3>记忆详情</h3>
            <div class="header-actions">
              <button class="icon-btn edit-btn" title="编辑" @click="startEdit">✏️</button>
              <button class="icon-btn delete-btn" title="删除" @click="confirmDelete">🗑️</button>
              <button class="close-btn" @click="closeDetail">×</button>
            </div>
          </div>
          <div class="detail-body">
            <div class="detail-row"><span class="detail-label">ID</span><span class="detail-value mono">{{ selectedMemory.id }}</span></div>
            <div class="detail-row"><span class="detail-label">类型</span><span class="detail-value"><span class="memory-type-badge" :class="selectedMemory.memory_type">{{ getTypeLabel(selectedMemory.memory_type) }}</span></span></div>
            <div class="detail-row"><span class="detail-label">标题</span><span class="detail-value">{{ selectedMemory.title || '无标题' }}</span></div>
            <div class="detail-row" v-if="selectedMemory.keywords?.length"><span class="detail-label">关键词</span><span class="detail-value"><span v-for="kw in selectedMemory.keywords" :key="kw" class="keyword-tag">{{ kw }}</span></span></div>
            <div class="detail-row"><span class="detail-label">时间</span><span class="detail-value">{{ formatTime(selectedMemory.timestamp) }}</span></div>
            <div class="detail-content">{{ selectedMemory.content }}</div>
          </div>
        </div>
      </div>

      <!-- 编辑弹窗 → 委托给 MemoryEditor -->
      <MemoryEditor
        v-if="isEditing && editingMemory"
        :visible="true"
        :memory="editingMemory"
        @close="cancelEdit"
        @saved="onEditSaved"
        @deleted="onEditDeleted"
      />

      <!-- 确认删除弹窗 -->
      <div v-if="showDeleteConfirm" class="modal-overlay" @click.self="showDeleteConfirm = false">
        <div class="modal-card confirm-card">
          <h3>⚠️ 确认删除</h3>
          <p>确定要删除记忆 <strong>"{{ selectedMemory?.title || selectedMemory?.id }}"</strong> 吗？</p>
          <p class="warn-text">此操作不可撤销</p>
          <div class="confirm-actions">
            <button class="btn-cancel" @click="showDeleteConfirm = false">取消</button>
            <button class="btn-danger" @click="doDelete" :disabled="deleting">{{ deleting ? '删除中...' : '确认删除' }}</button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useMemoryStore } from '@/stores/memory'
import { storeToRefs } from 'pinia'
import { memoryApi } from '@/api/memory'
import MemoryEditor from './MemoryEditor.vue'
import { useToast } from '@/composables/useToast'
import { debounce } from '@/utils/debounce'
import type { Memory, MemoryType } from '@/types/memory'

const emit = defineEmits<{ memorySelect: [memory: Memory] }>()
const toast = useToast()
const memoryStore = useMemoryStore()
const { memories, memoryCountByType, isLoading } = storeToRefs(memoryStore)
const currentMemoryType = computed(() => memoryStore.currentMemoryType)

const searchInput = ref('')
const currentPage = ref(1)
const pageSize = 50
const selectedMemoryId = ref<string | null>(null)
const selectedMemory = ref<Memory | null>(null)
const showDetail = ref(false)
const isEditing = ref(false)
const editingMemory = ref<Memory | null>(null)
const showDeleteConfirm = ref(false)
const deleting = ref(false)

const statKeys: [string, string][] = [['技能', 'skill'], ['思维', 'thinking'], ['存储', 'storage'], ['总计', 'total']]
const memoryTypes: { label: string; value: MemoryType }[] = [
  { label: '全部', value: 'all' }, { label: '技能', value: 'skill' },
  { label: '思维', value: 'thinking' }, { label: '存储', value: 'storage' }
]
const memoryCount = computed(() => memoryCountByType.value)

const filteredMemories = computed(() => {
  let result = memories.value
  if (currentMemoryType.value !== 'all') result = result.filter(m => m.memory_type === currentMemoryType.value)
  const q = searchInput.value.trim().toLowerCase()
  if (q) result = result.filter(m =>
    m.content?.toLowerCase().includes(q) || m.title?.toLowerCase().includes(q) ||
    m.keywords?.some(k => k.toLowerCase().includes(q))
  )
  return result
})

const paginatedMemories = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredMemories.value.slice(start, start + pageSize)
})
const totalPages = computed(() => Math.ceil(filteredMemories.value.length / pageSize))

watch([() => currentMemoryType.value, filteredMemories], () => { currentPage.value = 1 })

const triggerSearch = debounce(() => { currentPage.value = 1 }, 300)

onMounted(loadMemories)

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
})

function handleKeydown(e: Event) {
  const ke = e as KeyboardEvent
  if (ke.key === 'Escape') {
    if (showDeleteConfirm.value) showDeleteConfirm.value = false
    else if (isEditing.value) cancelEdit()
    else if (showDetail.value) closeDetail()
  }
}
watch([showDetail, isEditing, showDeleteConfirm], (v) => {
  const anyOpen = Object.values(v).some(Boolean)
  document[`${anyOpen ? 'add' : 'remove'}EventListener`]('keydown', handleKeydown)
}, { immediate: true })

async function loadMemories() {
  try {
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
  } catch (_) {
    toast.error('加载记忆失败')
  }
}

function selectType(type: MemoryType) { memoryStore.setMemoryType(type) }

function selectMemory(memory: Memory) {
  selectedMemoryId.value = memory.id
  selectedMemory.value = memory
  showDetail.value = true
  emit('memorySelect', memory)
}

function closeDetail() { showDetail.value = false; selectedMemory.value = null; selectedMemoryId.value = null }

function startEdit() {
  if (!selectedMemory.value) return
  editingMemory.value = { ...selectedMemory.value }
  isEditing.value = true
  showDetail.value = false
}

function cancelEdit() { isEditing.value = false; editingMemory.value = null }

async function onEditSaved() {
  isEditing.value = false
  editingMemory.value = null
  toast.success('记忆已更新')
  await loadMemories()
}

async function onEditDeleted(_id: string) {
  isEditing.value = false
  editingMemory.value = null
  closeDetail()
  toast.success('记忆已删除')
  await loadMemories()
}

function confirmDelete() { showDeleteConfirm.value = true }

async function doDelete() {
  if (!selectedMemory.value) return
  deleting.value = true
  try {
    await memoryStore.deleteMemory(selectedMemory.value.id, selectedMemory.value.user_id || 'default')
    showDeleteConfirm.value = false
    closeDetail()
    await loadMemories()
  } catch (_) {
    toast.error('删除失败')
  } finally {
    deleting.value = false
  }
}

function getTypeLabel(t?: string): string {
  return { storage: '存储', thinking: '思维', skill: '技能' }[t || ''] || t || '未知'
}

function formatTime(ts: string): string {
  if (!ts) return ''
  const diff = Date.now() - new Date(ts).getTime()
  const m = Math.floor(diff / 60000), h = Math.floor(diff / 3600000), d = Math.floor(diff / 86400000)
  if (m < 1) return '刚刚'
  if (m < 60) return `${m}分钟前`
  if (h < 24) return `${h}小时前`
  if (d < 30) return `${d}天前`
  return new Date(ts).toLocaleDateString()
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
  font-family: var(--font-main);
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
h1 { font-size: 16px; margin: 0 0 15px; text-shadow: 0 0 5px #00ff41; }

.tiered-stats {
  display: flex; gap: 8px; margin-bottom: 15px; padding: 10px;
  background: rgba(0, 255, 65, 0.05); border: 1px solid rgba(0, 255, 65, 0.2);
}
.stat-item { flex: 1; text-align: center; }
.stat-label { display: block; font-size: 10px; color: #008f11; margin-bottom: 3px; }
.stat-value { display: block; font-size: 16px; font-weight: bold; color: #00ffff; text-shadow: 0 0 5px #00ffff; }

.memory-type-tabs { display: flex; gap: 5px; margin-bottom: 15px; }
.memory-tab {
  flex: 1; padding: 6px; background: rgba(0, 255, 65, 0.1);
  border: 1px solid rgba(0, 255, 65, 0.3); color: #00ff41; cursor: pointer;
  font-size: 11px; transition: all 0.25s ease; text-transform: uppercase;
}
.memory-tab.active { background: #00ff41; color: #000; border-color: #00ff41; box-shadow: 0 0 10px #00ff41; }
.memory-tab:hover:not(.active) { background: rgba(0, 255, 65, 0.2); border-color: #00ff41; }

.memory-search-box { display: flex; gap: 5px; margin-bottom: 15px; }
.memory-search-box input {
  flex: 1; padding: 8px; background: rgba(0, 255, 65, 0.08);
  border: 1px solid rgba(0, 255, 65, 0.3); color: #00ff41; font-family: inherit; font-size: 12px;
}
.memory-search-box input:focus { outline: none; border-color: #00ff41; box-shadow: 0 0 5px rgba(0, 255, 65, 0.3); }
.memory-search-box button {
  padding: 8px 12px; background: rgba(0, 255, 65, 0.2); border: 1px solid #00ff41;
  color: #00ff41; cursor: pointer; font-family: inherit; transition: all 0.3s;
}
.memory-search-box button:hover { background: rgba(0, 255, 65, 0.4); }

.memory-list { max-height: 450px; overflow-y: auto; margin-bottom: 15px; }
.memory-item {
  padding: 12px; margin-bottom: 8px; background: rgba(0, 255, 65, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.2); border-left: 3px solid transparent;
  cursor: pointer; transition: all 0.25s ease;
}
.memory-item:hover { background: rgba(0, 255, 65, 0.15); border-color: #00ff41; transform: translateX(5px); }
.memory-item.selected { background: rgba(0, 255, 65, 0.2); border-color: #00ff41; border-left-color: #00ff41; }
.memory-item.storage { border-left-color: #00ff41; }
.memory-item.thinking { border-left-color: #ff00ff; }
.memory-item.skill { border-left-color: #00ffff; }

.list-enter-active { transition: all 0.35s ease-out; }
.list-leave-active { transition: all 0.2s ease-in; }
.list-enter-from { opacity: 0; transform: translateX(-15px); }
.list-leave-to { opacity: 0; transform: translateX(15px); }

.memory-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
.memory-type-badge { padding: 2px 6px; border-radius: 3px; font-size: 10px; }
.memory-type-badge.storage { background: rgba(0, 255, 65, 0.3); color: #00ff41; }
.memory-type-badge.thinking { background: rgba(255, 0, 255, 0.3); color: #ff00ff; }
.memory-type-badge.skill { background: rgba(0, 255, 255, 0.3); color: #00ffff; }
.memory-time { color: #008f11; font-size: 10px; }
.memory-title { font-size: 13px; font-weight: bold; margin-bottom: 4px; color: #00ff41; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.memory-content-preview { font-size: 11px; color: #aaa; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; margin-bottom: 6px; }
.memory-keywords { display: flex; flex-wrap: wrap; gap: 4px; }
.keyword-tag { padding: 2px 6px; background: rgba(0, 255, 65, 0.15); border: 1px solid rgba(0, 255, 65, 0.3); border-radius: 3px; font-size: 10px; color: #00ff41; }

.pagination { display: flex; justify-content: center; align-items: center; gap: 10px; padding: 10px; border-top: 1px solid rgba(0, 255, 65, 0.2); }
.page-btn { padding: 6px 12px; background: rgba(0, 255, 65, 0.1); border: 1px solid rgba(0, 255, 65, 0.3); color: #00ff41; cursor: pointer; font-family: inherit; transition: all 0.3s; }
.page-btn:hover:not(:disabled) { background: rgba(0, 255, 65, 0.3); border-color: #00ff41; }
.page-btn:disabled { opacity: 0.3; cursor: not-allowed; }
.page-info { font-size: 12px; color: #00ff41; }
.page-size { font-size: 10px; color: #008f11; margin-left: 10px; }

.memory-item-placeholder { padding: 40px 20px; text-align: center; color: #008f11; }
.empty-icon { font-size: 36px; margin-bottom: 10px; }
.empty-hint { font-size: 11px; color: #064a26; display: block; margin-top: 6px; }
.loading-spinner {
  width: 30px; height: 30px; border: 2px solid rgba(0, 255, 65, 0.3);
  border-top: 2px solid #00ff41; border-radius: 50%;
  animation: spin 1s linear infinite; margin: 0 auto 10px;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* Modal System */
.modal-overlay {
  position: fixed; inset: 0; background: rgba(0, 0, 0, 0.85);
  display: flex; justify-content: center; align-items: center; z-index: 2000;
  animation: fadeIn 0.2s ease;
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

.modal-card {
  width: 600px; max-height: 80vh; background: rgba(0, 10, 20, 0.97);
  border: 1px solid rgba(0, 255, 65, 0.5); box-shadow: 0 0 30px rgba(0, 255, 65, 0.3);
  overflow-y: auto; animation: slideUp 0.25s ease;
}
@keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

.detail-header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 15px 20px; border-bottom: 1px solid rgba(0, 255, 65, 0.3);
}
.detail-header h3 { margin: 0; font-size: 16px; text-shadow: 0 0 5px #00ff41; }
.header-actions { display: flex; gap: 8px; align-items: center; }
.icon-btn {
  padding: 5px 10px; border: 1px solid; cursor: pointer; font-family: inherit;
  font-size: 14px; transition: all 0.2s; background: transparent; border-radius: 3px;
}
.edit-btn { border-color: #00ff41; color: #00ff41; }
.edit-btn:hover { background: rgba(0, 255, 65, 0.15); }
.delete-btn { border-color: #ff4444; color: #ff4444; }
.delete-btn:hover { background: rgba(255, 68, 68, 0.15); }
.close-btn {
  width: 28px; height: 28px; background: rgba(255, 0, 0, 0.15); border: 1px solid #ff0000;
  color: #ff0000; font-size: 18px; cursor: pointer; border-radius: 3px;
  transition: all 0.2s; line-height: 1; display: flex; align-items: center; justify-content: center;
}
.close-btn:hover { background: rgba(255, 0, 0, 0.3); }

.detail-body { padding: 20px; }
.detail-row { display: flex; margin-bottom: 12px; font-size: 13px; }
.detail-label { width: 70px; color: #008f11; flex-shrink: 0; }
.detail-value { flex: 1; color: #00ff41; word-break: break-all; }
.detail-value.mono { font-family: monospace; font-size: 11px; }
.detail-content {
  background: rgba(0, 255, 65, 0.05); border: 1px solid rgba(0, 255, 65, 0.2);
  padding: 15px; font-size: 13px; line-height: 1.6; color: #ccc;
  max-height: 200px; overflow-y: auto; white-space: pre-wrap; border-radius: 4px;
}

/* Confirm Dialog */
.confirm-card { width: 400px; text-align: center; padding: 10px; }
.confirm-card h3 { color: #ffaa00; margin-bottom: 15px; }
.confirm-card p { color: #ccc; font-size: 14px; margin: 8px 0; }
.warn-text { color: #ff6666 !important; font-size: 12px !important; }
.confirm-actions { display: flex; justify-content: center; gap: 12px; margin-top: 20px; }
.btn-cancel {
  padding: 10px 24px; background: rgba(128, 128, 128, 0.15); border: 1px solid #666;
  color: #999; cursor: pointer; font-family: inherit; border-radius: 4px; transition: all 0.2s;
}
.btn-cancel:hover { background: rgba(128, 128, 128, 0.3); }
.btn-danger {
  padding: 10px 24px; background: rgba(255, 0, 0, 0.2); border: 1px solid #ff0000;
  color: #ff6666; cursor: pointer; font-family: inherit; border-radius: 4px; transition: all 0.2s;
}
.btn-danger:hover:not(:disabled) { background: rgba(255, 0, 0, 0.35); }
.btn-danger:disabled { opacity: 0.5; cursor: not-allowed; }

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: rgba(0, 255, 65, 0.08); }
::-webkit-scrollbar-thumb { background: rgba(0, 255, 65, 0.3); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: rgba(0, 255, 65, 0.5); }
</style>
