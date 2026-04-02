<template>
  <div class="app-container">
    <div class="scanline"></div>
    
    <!-- 左侧主侧边栏 -->
    <aside class="main-sidebar">
      <div class="sidebar-header">
        <h1 class="logo">MEMORY<span>CORE</span></h1>
        <div class="status-badge" :class="{ 'is-active': isSystemActive }">
          <span class="status-dot"></span>
          <span class="status-label">{{ isSystemActive ? '在线' : '待机' }}</span>
        </div>
      </div>
      
      <nav class="sidebar-nav">
        <button 
          v-for="tab in navigationTabs" 
          :key="tab.id"
          :class="['nav-item', { active: activeTab === tab.id }]"
          @click="activeTab = tab.id"
        >
          <span class="nav-icon">{{ tab.icon }}</span>
          <span class="nav-text">{{ tab.label }}</span>
        </button>
      </nav>
      
      <div class="sidebar-actions">
        <div class="action-grid">
          <button @click="rebuildGraph" :disabled="isRebuilding">
            <span class="btn-text">{{ isRebuilding ? '同步中...' : '重建图谱' }}</span>
          </button>
          <button @click="triggerReflection" :disabled="isReflecting">
            <span class="btn-text">{{ isReflecting ? '思考中...' : '反思' }}</span>
          </button>
        </div>
        <button class="primary-btn" @click="refreshAll">刷新数据</button>
      </div>
    </aside>

    <!-- 主显示区域 -->
    <main class="viewport">
      <header class="top-bar">
        <div class="view-title">
          <span class="path">系统 /</span> {{ currentTabLabel }}
        </div>
        <div class="top-stats">
          <StatsPanel />
        </div>
      </header>

      <div class="content-viewport" :class="{ 'panel-active': showRightPanel }">
        <div class="view-content">
          <!-- 概览仪表盘 -->
          <template v-if="activeTab === 'overview'">
            <div class="dashboard-layout">
              <div class="visual-section card-glass">
                <Brain3D :stats="stats" />
              </div>
              <div class="graph-section card-glass">
                <MemoryGraph 
                  :graph-data="graphData"
                  :is-loading="isLoading"
                  @node-click="handleNodeClick"
                />
              </div>
              <div class="logs-section card-glass">
                <LogPanel />
              </div>
            </div>
          </template>

          <template v-else-if="activeTab === 'memory-list'">
            <div class="full-view card-glass">
              <MemoryList @memory-select="handleMemorySelect" />
            </div>
          </template>
          
          <template v-else-if="activeTab === 'write'">
            <div class="centered-view card-glass">
              <MemoryWriter @written="handleMemoryWritten" />
            </div>
          </template>
          
          <template v-else-if="activeTab === 'tiered'">
            <div class="full-view card-glass">
              <TieredMemoryPanel @memory-select="handleMemorySelect" />
            </div>
          </template>

          <template v-else-if="activeTab === 'brain'">
            <div class="split-view">
              <BrainStatus class="card-glass" />
              <BrainInteraction class="card-glass" />
            </div>
          </template>

          <template v-else-if="activeTab === 'llm'">
            <div class="full-view card-glass">
              <LLMInteractions />
            </div>
          </template>
          
          <template v-else-if="activeTab === 'evolution'">
            <div class="centered-view card-glass">
              <EvolutionConfig />
            </div>
          </template>
          
          <template v-else-if="activeTab === 'merge'">
            <div class="full-view card-glass">
              <MergeChainViewer 
                :memory-id="selectedMemoryId"
                :show-close="!!selectedMemoryId"
                @close="selectedMemoryId = null"
                @node-click="handleMergeNodeClick"
              />
            </div>
          </template>
        </div>

        <!-- 详情面板 -->
        <transition name="panel-slide">
          <div v-if="showRightPanel" class="detail-panel card-glass">
            <component 
              :is="rightPanelComponent" 
              v-bind="rightPanelProps"
              @close="closeRightPanel"
              @saved="handleMemorySaved"
              @deleted="handleMemoryDeleted"
            />
          </div>
        </transition>
      </div>
    </main>

    <!-- 详情模态框 (全局) -->
    <transition name="fade">
      <div v-if="selectedMemory" class="modal-overlay" @click="closeDetail">
        <div class="modal-window card-glass" @click.stop>
          <header class="modal-title">
            <h2>{{ selectedMemory.title }}</h2>
            <button class="close-icon" @click="closeDetail">×</button>
          </header>
          <div class="modal-content">
            <div class="info-row">
              <span class="label">类型</span>
              <span :class="['type-tag', selectedMemory.memory_type]">
                {{ getMemoryTypeLabel(selectedMemory.memory_type) }}
              </span>
            </div>
            <div class="info-section">
              <h3>内容</h3>
              <p>{{ selectedMemory.content }}</p>
            </div>
            <div class="meta-grid">
              <div class="meta-box">
                <span class="label">范围</span>
                <span class="val">{{ selectedMemory.scope }}</span>
              </div>
              <div class="meta-box">
                <span class="label">时间</span>
                <span class="val">{{ selectedMemory.timestamp }}</span>
              </div>
              <div class="meta-box">
                <span class="label">重要性</span>
                <span class="val">{{ selectedMemory.importance }}</span>
              </div>
            </div>
            <div class="modal-footer">
              <button class="secondary-btn" @click="openEditor">编辑</button>
              <button class="primary-btn" @click="viewMergeChain">查看合并链</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, shallowRef } from 'vue'
import { useMemoryStore } from '@/stores/memory'
import { storeToRefs } from 'pinia'
import { memoryApi } from '@/api/memory'
import MemoryGraph from '@/components/MemoryGraph.vue'
import MemoryList from '@/components/MemoryList.vue'
import LogPanel from '@/components/LogPanel.vue'
import StatsPanel from '@/components/StatsPanel.vue'
import MemoryWriter from '@/components/MemoryWriter.vue'
import MemoryEditor from '@/components/MemoryEditor.vue'
import TieredMemoryPanel from '@/components/TieredMemoryPanel.vue'
import LLMInteractions from '@/components/LLMInteractions.vue'
import EvolutionConfig from '@/components/EvolutionConfig.vue'
import MergeChainViewer from '@/components/MergeChainViewer.vue'
import BrainStatus from '@/components/BrainStatus.vue'
import BrainInteraction from '@/components/BrainInteraction.vue'
import Brain3D from '@/components/Brain3D.vue'
import type { Memory, GraphNode } from '@/types/memory'

const memoryStore = useMemoryStore()
const { graphData, isLoading, evolutionStatus, stats } = storeToRefs(memoryStore)

const navigationTabs = [
  { id: 'overview', label: '概览', icon: '📊' },
  { id: 'memory-list', label: '记忆列表', icon: '📋' },
  { id: 'write', label: '写入', icon: '✏️' },
  { id: 'tiered', label: '三层记忆', icon: '🧠' },
  { id: 'brain', label: 'AI大脑', icon: '🤖' },
  { id: 'llm', label: 'LLM交互', icon: '🤖' },
  { id: 'evolution', label: '进化配置', icon: '⚙️' },
  { id: 'merge', label: '合并链', icon: '🔗' }
]

const activeTab = ref('overview')
const selectedMemory = ref<Memory | null>(null)
const selectedMemoryId = ref<string | null>(null)
const isRebuilding = ref(false)
const isReflecting = ref(false)
const showRightPanel = ref(false)
const rightPanelComponent = shallowRef<any>(null)
const rightPanelProps = ref<Record<string, any>>({})

const isSystemActive = computed(() => {
  return evolutionStatus.value?.enabled && evolutionStatus.value?.running
})

const currentTabLabel = computed(() => {
  const tab = navigationTabs.find(t => t.id === activeTab.value)
  return tab?.label || '概览'
})

onMounted(async () => {
  memoryStore.addLog('初始化系统...', 'info')
  
  try {
    await memoryStore.fetchStats()
    memoryStore.addLog('加载统计数据完成', 'success')
    
    await memoryStore.fetchGraph()
    memoryStore.addLog('加载记忆图谱完成', 'success')
    
    await memoryStore.fetchEvolutionStatus()
    memoryStore.addLog('加载进化状态完成', 'success')
  } catch (error) {
    memoryStore.addLog('初始化失败: ' + (error as Error).message, 'error')
  }
})

function handleNodeClick(node: GraphNode) {
  memoryStore.addLog(`点击节点: ${node.label || node.id}`, 'info')
  selectedMemoryId.value = node.id
  if (activeTab.value !== 'merge') {
    activeTab.value = 'merge'
  }
}

function handleMemorySelect(memory: Memory) {
  selectedMemory.value = memory
  memoryStore.addLog(`选择记忆: ${memory.title}`, 'info')
}

function handleMemoryWritten(memoryId: string) {
  memoryStore.addLog(`新记忆已写入: ${memoryId}`, 'success')
  memoryStore.fetchStats()
  memoryStore.fetchGraph()
}

function handleMemorySaved() {
  memoryStore.addLog('记忆已保存', 'success')
  closeRightPanel()
  memoryStore.fetchStats()
  memoryStore.fetchGraph()
}

function handleMemoryDeleted(memoryId: string) {
  memoryStore.addLog(`记忆已删除: ${memoryId}`, 'success')
  closeRightPanel()
  selectedMemory.value = null
  memoryStore.fetchStats()
  memoryStore.fetchGraph()
}

function handleMergeNodeClick(node: any) {
  memoryStore.addLog(`点击合并链节点: ${node.title}`, 'info')
}

function closeDetail() {
  selectedMemory.value = null
}

function openEditor() {
  if (!selectedMemory.value) return
  rightPanelComponent.value = MemoryEditor
  rightPanelProps.value = {
    visible: true,
    memory: selectedMemory.value
  }
  showRightPanel.value = true
}

function closeRightPanel() {
  showRightPanel.value = false
  rightPanelComponent.value = null
  rightPanelProps.value = {}
}

function viewMergeChain() {
  if (selectedMemory.value) {
    selectedMemoryId.value = selectedMemory.value.id
    activeTab.value = 'merge'
    closeDetail()
  }
}

async function rebuildGraph() {
  isRebuilding.value = true
  memoryStore.addLog('开始重建图谱...', 'info')
  
  try {
    await memoryApi.rebuildGraph()
    await memoryStore.fetchGraph()
    memoryStore.addLog('图谱重建完成', 'success')
  } catch (error) {
    memoryStore.addLog('图谱重建失败: ' + (error as Error).message, 'error')
  } finally {
    isRebuilding.value = false
  }
}

async function triggerReflection() {
  isReflecting.value = true
  memoryStore.addLog('触发反思任务...', 'info')
  
  try {
    await memoryStore.reflectMemory()
    memoryStore.addLog('反思任务已触发', 'success')
    await memoryStore.fetchEvolutionStatus()
  } catch (error) {
    memoryStore.addLog('触发反思失败: ' + (error as Error).message, 'error')
  } finally {
    isReflecting.value = false
  }
}

async function refreshAll() {
  memoryStore.addLog('刷新所有数据...', 'info')
  
  try {
    await Promise.all([
      memoryStore.fetchStats(),
      memoryStore.fetchGraph(),
      memoryStore.fetchEvolutionStatus()
    ])
    memoryStore.addLog('数据刷新完成', 'success')
  } catch (error) {
    memoryStore.addLog('数据刷新失败: ' + (error as Error).message, 'error')
  }
}

function getMemoryTypeLabel(type?: string): string {
  const labels: Record<string, string> = {
    'storage': '存储记忆',
    'thinking': '思维记忆',
    'skill': '技能记忆'
  }
  return labels[type || ''] || type || '未知'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap');
@import './styles/global.css';
</style>

<style scoped>
.app-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle at 70% 30%, #081812 0%, #020405 100%);
  position: relative;
}

.main-sidebar {
  width: 260px;
  background: rgba(3, 8, 8, 0.9);
  border-right: 1px solid var(--border-color);
  backdrop-filter: var(--glass-blur);
  display: flex; flex-direction: column;
  z-index: 100;
  flex-shrink: 0;
}

/* Sidebar Elements */
.sidebar-header {
  padding: 30px 20px;
  border-bottom: 1px solid rgba(0, 255, 106, 0.1);
}

.logo {
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 2.5px;
  color: var(--neon-green);
  text-shadow: 0 0 10px rgba(0, 255, 106, 0.5);
}

.logo span { color: #fff; margin-left: 2px; }

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  padding: 4px 10px;
  background: rgba(255, 0, 80, 0.1);
  border-radius: 4px;
}

.status-badge.is-active { background: rgba(0, 255, 106, 0.1); }
.status-dot { width: 6px; height: 6px; border-radius: 50%; background: #ff0050; }
.status-badge.is-active .status-dot { background: var(--neon-green); box-shadow: 0 0 5px var(--neon-green); }
.status-label { font-size: 10px; font-weight: 800; color: #fff; letter-spacing: 1px; }

.sidebar-nav {
  flex: 1;
  padding: 20px 0;
  overflow-y: auto;
}

.nav-item {
  width: 100%;
  display: flex; align-items: center; gap: 15px;
  padding: 14px 20px;
  background: transparent; border: none;
  border-left: 3px solid transparent;
  color: #566b61; cursor: pointer;
  font-family: var(--font-heading);
  font-weight: 600; font-size: 15px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-item:hover { color: #fff; background: rgba(0, 255, 106, 0.05); }
.nav-item.active {
  color: var(--neon-green);
  background: rgba(0, 255, 106, 0.08);
  border-left-color: var(--neon-green);
  text-shadow: 0 0 5px rgba(0, 255, 106, 0.5);
}

.nav-icon { font-size: 18px; width: 24px; text-align: center; }
.nav-text { font-size: 14px; letter-spacing: 0.5px; }

.sidebar-actions {
  padding: 20px;
  border-top: 1px solid rgba(0, 255, 106, 0.1);
  display: flex; flex-direction: column; gap: 12px;
}

.action-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }

.app-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff; padding: 10px 5px;
  cursor: pointer; font-size: 10px; font-weight: bold;
  letter-spacing: 0.5px; transition: all 0.2s;
  border-radius: 2px;
}

.app-btn:hover:not(:disabled) {
  background: rgba(0, 255, 106, 0.1);
  border-color: var(--neon-green);
  color: var(--neon-green);
}

.app-btn:disabled { opacity: 0.3; cursor: not-allowed; }

.btn-text { font-size: 10px; letter-spacing: 1px; }

.primary-btn {
  background: var(--neon-green); border: none; color: #000;
  font-size: 11px; padding: 12px; font-family: var(--font-heading);
  font-weight: 800;
}

.primary-btn:hover { background: #fff !important; color: #000 !important; box-shadow: 0 0 15px var(--neon-green); }

.sidebar-stats {
  padding: 10px;
  border-top: 1px solid rgba(0, 255, 106, 0.1);
}

/* View Area */
.viewport {
  flex: 1;
  display: flex; flex-direction: column;
  position: relative;
  min-width: 0;
}

.top-bar {
  height: 80px;
  padding: 0 30px;
  display: flex; justify-content: space-between; align-items: center;
  border-bottom: 1px solid var(--border-color);
  background: rgba(2, 4, 5, 0.5);
  backdrop-filter: blur(5px);
  z-index: 50;
  flex-shrink: 0;
}

.view-title { font-family: var(--font-heading); font-size: 16px; font-weight: 700; color: #fff; }
.view-title .path { color: #566b61; font-weight: 400; margin-right: 5px; }

.top-stats {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 0 20px;
}

.system-meta { display: flex; gap: 20px; }
.meta-item { display: flex; gap: 8px; align-items: center; font-size: 11px; }
.meta-item .label { color: #566b61; }
.meta-item .value { color: var(--neon-blue); font-weight: bold; }

.content-viewport {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.content-viewport.panel-active { margin-right: 450px; }

.view-content {
  height: 100%;
  padding: 25px;
  overflow-y: auto;
}

/* Dashboard Grid */
.dashboard-layout {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 420px;
  grid-template-rows: 1fr 280px;
  gap: 20px;
  min-height: 0;
}

.visual-section { grid-row: 1 / 3; display: flex; flex-direction: column; }
.graph-section { grid-column: 2; grid-row: 1; }
.logs-section { grid-column: 2; grid-row: 2; }

.card-glass {
  background: var(--panel-bg);
  border: 1px solid var(--border-color);
  backdrop-filter: var(--glass-blur);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.card-glass:hover {
  border-color: rgba(0, 255, 106, 0.4);
  box-shadow: inset 0 0 15px rgba(0, 255, 106, 0.05);
}

/* Common View Layouts */
.full-view { height: 100%; }
.centered-view {
  height: 100%;
  display: flex; align-items: center; justify-content: center;
}
.split-view {
  height: 100%;
  display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
}

/* Modal and Detail Panels */
.detail-panel {
  position: absolute; top: 0; right: 0; width: 450px; height: 100%;
  background: rgba(2, 4, 5, 0.98);
  border-left: 1px solid var(--border-color);
  z-index: 200;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
}

.modal-overlay {
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-window {
  width: 750px;
  max-width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: flex; flex-direction: column;
}

.modal-title {
  padding: 20px 25px;
  display: flex; justify-content: space-between; align-items: center;
  border-bottom: 1px solid var(--border-color);
  background: rgba(255, 255, 255, 0.02);
}

.modal-title h2 { font-family: var(--font-heading); font-size: 18px; letter-spacing: 1px; color: var(--neon-green); }

.close-icon {
  background: transparent; border: none; color: #566b61;
  font-size: 24px; cursor: pointer; padding: 5px;
}

.close-icon:hover { color: #ff0050; }

.modal-content {
  padding: 30px;
  overflow-y: auto;
}

.info-row { margin-bottom: 25px; display: flex; align-items: center; gap: 15px; }
.info-section { margin-bottom: 30px; }
.info-section h3 { font-size: 11px; color: #566b61; margin-bottom: 10px; letter-spacing: 1.5px; }
.info-section p { font-size: 14px; line-height: 1.7; color: #cedbd3; }

.type-tag {
  font-size: 10px; font-weight: 800; padding: 3px 10px;
  border-radius: 2px; letter-spacing: 1px;
}

.type-tag.storage { background: rgba(0, 229, 255, 0.1); color: var(--neon-blue); border: 1px solid var(--neon-blue); }
.type-tag.thinking { background: rgba(189, 0, 255, 0.1); color: var(--neon-purple); border: 1px solid var(--neon-purple); }
.type-tag.skill { background: rgba(0, 255, 106, 0.1); color: var(--neon-green); border: 1px solid var(--neon-green); }

.meta-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 30px; }
.meta-box { background: rgba(255,255,255,0.03); padding: 15px; border: 1px solid rgba(255,255,255,0.05); }
.meta-box .label { font-size: 9px; color: #566b61; display: block; margin-bottom: 5px; }
.meta-box .val { font-size: 12px; font-weight: 500; }

.modal-footer {
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.05);
  display: flex; gap: 15px;
}

.secondary-btn { flex: 1; padding: 12px; font-family: var(--font-heading); font-weight: 600; }

/* Transitions */
.panel-slide-enter-active, .panel-slide-leave-active { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.panel-slide-enter-from, .panel-slide-leave-to { transform: translateX(100%); }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Scanline Overlay */
.scanline {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(rgba(0, 255, 106, 0.02) 50%, transparent 50%);
  background-size: 100% 4px; z-index: 1000; pointer-events: none; opacity: 0.3;
}
</style>
