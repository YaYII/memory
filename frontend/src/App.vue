<template>
  <div class="dashboard">
    <!-- 扫描线效果 -->
    <div class="scanline"></div>
    
    <div class="sidebar">
      <div class="sidebar-header">
        <h1 class="logo">Memory System</h1>
        <div class="status-indicator" :class="{ active: isSystemActive }"></div>
      </div>
      
      <nav class="nav-tabs">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          :class="['nav-tab', { active: activeTab === tab.id }]"
          @click="activeTab = tab.id"
        >
          <span class="tab-icon">{{ tab.icon }}</span>
          <span class="tab-label">{{ tab.label }}</span>
        </button>
      </nav>
      
      <div class="action-buttons">
        <button class="action-btn" @click="rebuildGraph" :disabled="isRebuilding">
          {{ isRebuilding ? '重建中...' : '重建图谱' }}
        </button>
        <button class="action-btn" @click="triggerReflection" :disabled="isReflecting">
          {{ isReflecting ? '反思中...' : '触发反思' }}
        </button>
        <button class="action-btn" @click="refreshAll">
          刷新数据
        </button>
      </div>
      
      <div class="sidebar-footer">
        <StatsPanel />
      </div>
    </div>
    
    <div class="main-content">
      <div class="content-area" :class="{ 'with-panel': showRightPanel }">
        <template v-if="activeTab === 'overview'">
          <div class="overview-container">
            <div class="brain-3d-section">
              <Brain3D :stats="stats" />
            </div>
            <MemoryGraph 
              :graph-data="graphData"
              :is-loading="isLoading"
              @node-click="handleNodeClick"
            />
            <LogPanel />
          </div>
        </template>

        <template v-else-if="activeTab === 'memory-list'">
          <div class="memory-list-container">
            <MemoryList 
              @memory-select="handleMemorySelect"
            />
          </div>
        </template>
        
        <template v-else-if="activeTab === 'write'">
          <MemoryWriter @written="handleMemoryWritten" />
        </template>
        
        <template v-else-if="activeTab === 'tiered'">
          <TieredMemoryPanel @memory-select="handleMemorySelect" />
        </template>

        <template v-else-if="activeTab === 'brain'">
          <div class="brain-page-container">
            <div class="brain-status-section">
              <BrainStatus />
            </div>
            <div class="brain-interaction-section">
              <BrainInteraction />
            </div>
          </div>
        </template>

        <template v-else-if="activeTab === 'llm'">
          <LLMInteractions />
        </template>
        
        <template v-else-if="activeTab === 'evolution'">
          <EvolutionConfig />
        </template>
        
        <template v-else-if="activeTab === 'feedback'">
          <MemoryFeedback />
        </template>
        
        <template v-else-if="activeTab === 'merge'">
          <MergeChainViewer 
            :memory-id="selectedMemoryId"
            :show-close="!!selectedMemoryId"
            @close="selectedMemoryId = null"
            @node-click="handleMergeNodeClick"
          />
        </template>
      </div>
      
      <transition name="slide">
        <div v-if="showRightPanel" class="right-panel">
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
    
    <div v-if="selectedMemory" class="memory-detail-modal" @click="closeDetail">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h2>{{ selectedMemory.title }}</h2>
          <div class="modal-actions">
            <button class="edit-btn" @click="openEditor">编辑</button>
            <button class="close-btn" @click="closeDetail">×</button>
          </div>
        </div>
        <div class="modal-body">
          <div class="detail-section">
            <h4>类型</h4>
            <span :class="['type-badge', selectedMemory.memory_type]">
              {{ getMemoryTypeLabel(selectedMemory.memory_type) }}
            </span>
          </div>
          <div class="detail-section">
            <h4>内容</h4>
            <p>{{ selectedMemory.content }}</p>
          </div>
          <div class="detail-section" v-if="selectedMemory.keywords?.length">
            <h4>关键词</h4>
            <div class="keywords">
              <span v-for="keyword in selectedMemory.keywords" :key="keyword" class="keyword-tag">
                {{ keyword }}
              </span>
            </div>
          </div>
          <div class="detail-section">
            <h4>元数据</h4>
            <div class="metadata">
              <div class="meta-item">
                <span class="meta-label">作用域:</span>
                <span class="meta-value">{{ selectedMemory.scope }}</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">时间:</span>
                <span class="meta-value">{{ selectedMemory.timestamp }}</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">重要性:</span>
                <span class="meta-value">{{ selectedMemory.importance }}</span>
              </div>
            </div>
          </div>
          <div class="detail-section">
            <button class="view-chain-btn" @click="viewMergeChain">
              查看合并链
            </button>
          </div>
        </div>
      </div>
    </div>
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
import MemoryFeedback from '@/components/MemoryFeedback.vue'
import MergeChainViewer from '@/components/MergeChainViewer.vue'
import BrainStatus from '@/components/BrainStatus.vue'
import BrainInteraction from '@/components/BrainInteraction.vue'
import Brain3D from '@/components/Brain3D.vue'
import type { Memory, GraphNode } from '@/types/memory'

const memoryStore = useMemoryStore()
const { graphData, isLoading, evolutionStatus, stats } = storeToRefs(memoryStore)

const tabs = [
  { id: 'overview', label: '概览', icon: '📊' },
  { id: 'memory-list', label: '记忆列表', icon: '📋' },
  { id: 'write', label: '写入', icon: '✏️' },
  { id: 'tiered', label: '三层记忆', icon: '🧠' },
  { id: 'brain', label: 'AI大脑', icon: '🤖' },
  { id: 'llm', label: 'LLM交互', icon: '🤖' },
  { id: 'evolution', label: '进化配置', icon: '⚙️' },
  { id: 'feedback', label: '反馈', icon: '💬' },
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
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  --neon-green: #00ff41;
  --neon-green-glow: 0 0 10px rgba(0, 255, 65, 0.5), 0 0 20px rgba(0, 255, 65, 0.3);
  --bg-dark: #050a08;
  --panel-bg: rgba(5, 15, 10, 0.65);
  --panel-border: rgba(0, 255, 65, 0.25);
  --glass-blur: blur(12px);
  --hover-bg: rgba(0, 255, 65, 0.15);
  --text-muted: #008f11;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'JetBrains Mono', 'Consolas', monospace;
  background: var(--bg-dark);
  color: var(--neon-green);
  overflow: hidden;
}

/* Custom Scrollbar styled for Cyberpunk feel */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: rgba(0, 10, 20, 0.8);
  border-left: 1px solid rgba(0, 255, 65, 0.1);
}
::-webkit-scrollbar-thumb {
  background: rgba(0, 255, 65, 0.3);
  border: 1px solid rgba(0, 255, 65, 0.5);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 255, 65, 0.6);
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.8);
}

.dashboard {
  width: 100vw;
  height: 100vh;
  display: flex;
  background: radial-gradient(circle at center, #0a1a0a 0%, #000000 100%);
}

.sidebar {
  width: 250px;
  height: 100vh;
  background: var(--panel-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border-right: 1px solid var(--panel-border);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  box-shadow: 2px 0 15px rgba(0, 0, 0, 0.5);
  z-index: 100;
}

.sidebar-header {
  padding: 20px 15px;
  border-bottom: 1px solid rgba(0, 255, 65, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family: 'Rajdhani', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--neon-green);
  text-shadow: var(--neon-green-glow);
  letter-spacing: 1.5px;
}

.status-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ff0055;
  box-shadow: 0 0 10px #ff0055;
  transition: all 0.3s ease;
}

.status-indicator.active {
  background: var(--neon-green);
  box-shadow: var(--neon-green-glow);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 255, 65, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(0, 255, 65, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 255, 65, 0); }
}

/* 扫描线效果 */
.scanline {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(255,255,255,0) 50%,
    rgba(0, 0, 0, 0.25) 50%
  );
  background-size: 100% 4px;
  pointer-events: none;
  z-index: 1000;
  opacity: 0.6;
}

.scanline::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: radial-gradient(circle, transparent 50%, rgba(0, 0, 0, 0.4) 150%);
}

/* fadeIn 动画 */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in {
  animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* 发光文字效果 */
.glow-text {
  text-shadow: 0 0 8px currentColor;
}

/* 按钮发光悬停效果 */
.glow-hover {
  transition: all 0.3s ease;
}

.glow-hover:hover {
  box-shadow: 0 0 15px currentColor;
}

/* 记忆项悬停滑动效果 */
.memory-item-hover {
  transition: all 0.3s ease;
}

.memory-item-hover:hover {
  transform: translateX(5px);
  background: rgba(0, 255, 65, 0.15);
}

/* 滚动条样式 */
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

.nav-tabs {
  flex: 1;
  padding: 10px 0;
  overflow-y: auto;
}

.nav-tab {
  width: 100%;
  padding: 14px 20px;
  background: transparent;
  border: none;
  border-left: 3px solid transparent;
  color: var(--text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Rajdhani', sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: left;
  position: relative;
  overflow: hidden;
}

.nav-tab::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(90deg, var(--hover-bg) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.nav-tab:hover::before {
  opacity: 1;
}

.nav-tab:hover {
  color: var(--neon-green);
  text-shadow: 0 0 8px var(--neon-green);
  transform: translateX(4px);
}

.nav-tab.active {
  background: linear-gradient(90deg, rgba(0, 255, 65, 0.1) 0%, transparent 100%);
  border-left-color: var(--neon-green);
  color: var(--neon-green);
  text-shadow: var(--neon-green-glow);
  box-shadow: inset 4px 0 10px -5px var(--neon-green);
}

.tab-icon {
  font-size: 16px;
}

.tab-label {
  flex: 1;
}

.action-buttons {
  padding: 15px;
  border-top: 1px solid rgba(0, 255, 65, 0.2);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.action-btn {
  padding: 12px 15px;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid var(--panel-border);
  color: var(--neon-green);
  cursor: pointer;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}

.action-btn::after {
  content: '';
  position: absolute;
  top: 0; left: -100%; width: 50%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transition: left 0.5s ease;
}

.action-btn:hover:not(:disabled)::after {
  left: 150%;
}

.action-btn:hover:not(:disabled) {
  background: var(--hover-bg);
  border-color: var(--neon-green);
  box-shadow: 0 0 15px rgba(0, 255, 65, 0.3), inset 0 0 10px rgba(0, 255, 65, 0.1);
  transform: translateY(-1px);
}

.action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.sidebar-footer {
  padding: 10px;
  border-top: 1px solid rgba(0, 255, 65, 0.2);
  max-height: 200px;
  overflow-y: auto;
}

.main-content {
  flex: 1;
  display: flex;
  position: relative;
  overflow: hidden;
}

.content-area {
  flex: 1;
  position: relative;
  transition: margin-right 0.3s ease;
  display: flex;
  flex-direction: column;
}

.content-area > *:first-child {
  flex: 1;
  min-height: 0;
}

.content-area.with-panel {
  margin-right: 400px;
}

.right-panel {
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background: rgba(0, 10, 20, 0.95);
  border-left: 1px solid rgba(0, 255, 65, 0.3);
  overflow-y: auto;
  z-index: 100;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.panel {
  background: rgba(0, 10, 20, 0.75);
  border: 1px solid rgba(0, 255, 65, 0.5);
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.1);
  backdrop-filter: blur(8px);
  padding: 15px;
  color: #00ff41;
  transition: all 0.3s ease;
}

.panel:hover {
  background: rgba(0, 10, 20, 0.85);
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.2);
  border-color: #00ff41;
}

.memory-detail-modal {
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
  width: 600px;
  max-height: 80vh;
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
}

.modal-actions {
  display: flex;
  gap: 10px;
}

.edit-btn {
  padding: 6px 12px;
  background: rgba(0, 255, 65, 0.2);
  border: 1px solid rgba(0, 255, 65, 0.5);
  color: #00ff41;
  cursor: pointer;
  font-family: inherit;
  font-size: 12px;
  transition: all 0.3s ease;
}

.edit-btn:hover {
  background: rgba(0, 255, 65, 0.4);
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
}

.close-btn {
  width: 30px;
  height: 30px;
  background: rgba(255, 0, 0, 0.2);
  border: 1px solid #ff0000;
  color: #ff0000;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: rgba(255, 0, 0, 0.4);
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
}

.modal-body {
  padding: 20px;
}

.detail-section {
  margin-bottom: 20px;
}

.detail-section h4 {
  font-size: 12px;
  color: #008f11;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.detail-section p {
  font-size: 13px;
  line-height: 1.6;
  color: #00ff41;
}

.type-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 3px;
  font-size: 11px;
}

.type-badge.storage {
  background: rgba(0, 255, 65, 0.3);
  color: #00ff41;
}

.type-badge.thinking {
  background: rgba(255, 0, 255, 0.3);
  color: #ff00ff;
}

.type-badge.skill {
  background: rgba(0, 255, 255, 0.3);
  color: #00ffff;
}

.keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.keyword-tag {
  padding: 3px 8px;
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid rgba(0, 255, 65, 0.3);
  font-size: 11px;
}

.metadata {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.meta-item {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.2);
}

.meta-label {
  color: #008f11;
  font-size: 11px;
}

.meta-value {
  color: #00ff41;
  font-size: 11px;
}

.view-chain-btn {
  width: 100%;
  padding: 10px;
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid rgba(0, 255, 65, 0.3);
  color: #00ff41;
  cursor: pointer;
  font-family: inherit;
  font-size: 12px;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.view-chain-btn:hover {
  background: rgba(0, 255, 65, 0.3);
  border-color: #00ff41;
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
}

@media (max-width: 1200px) {
  .sidebar {
    width: 180px;
  }
  
  .right-panel {
    width: 350px;
  }
  
  .content-area.with-panel {
    margin-right: 350px;
  }
}

@media (max-width: 900px) {
  .sidebar {
    width: 60px;
  }

  .logo {
    display: none;
  }

  .tab-label {
    display: none;
  }

  .nav-tab {
    justify-content: center;
    padding: 15px;
  }

  .action-buttons {
    padding: 10px 5px;
  }

  .action-btn {
    font-size: 10px;
    padding: 8px;
  }

  .right-panel {
    width: 100%;
  }

  .content-area.with-panel {
    margin-right: 0;
  }
}

.overview-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
}

.brain-3d-section {
  height: 400px;
  min-height: 400px;
  border-bottom: 1px solid rgba(0, 255, 65, 0.2);
}

.memory-list-container {
  height: 100%;
  overflow-y: auto;
  padding: 20px;
}

.brain-page-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
}

.brain-status-section {
  border-bottom: 1px solid rgba(0, 255, 65, 0.2);
}

.brain-interaction-section {
  flex: 1;
  overflow-y: auto;
}
</style>
