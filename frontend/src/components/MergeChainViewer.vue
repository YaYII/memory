<template>
  <div class="merge-chain-viewer panel">
    <div class="header">
      <h3>记忆合并链</h3>
      <button v-if="showClose" class="btn-close" @click="emit('close')">×</button>
    </div>
    
    <div v-if="!memoryId" class="empty-placeholder">
      <p>请选择一个记忆查看其合并链</p>
    </div>
    
    <div v-else-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <p>加载合并链中...</p>
    </div>
    
    <div v-else-if="error" class="error-message">
      <p>{{ error }}</p>
    </div>
    
    <template v-else-if="mergeChainData">
      <div class="chain-info">
        <div class="info-item">
          <span class="info-label">当前记忆</span>
          <span class="info-value">{{ mergeChainData.current?.title || mergeChainData.current?.id }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">合并深度</span>
          <span class="info-value">{{ mergeChainData.depth || 0 }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">来源数量</span>
          <span class="info-value">{{ mergeChainData.sources?.length || 0 }}</span>
        </div>
      </div>
      
      <div ref="graphContainer" class="graph-container"></div>
      
      <div v-if="mergeChainData.merge_history?.length" class="merge-history">
        <h4>合并历史</h4>
        <div class="history-list">
          <div 
            v-for="(item, index) in mergeChainData.merge_history" 
            :key="index"
            class="history-item"
          >
            <div class="history-time">{{ formatTime(item.timestamp) }}</div>
            <div class="history-desc">{{ item.description || '合并操作' }}</div>
          </div>
        </div>
      </div>
    </template>
    
    <div v-else class="empty-placeholder">
      <p>暂无合并链数据</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import * as d3 from 'd3'
import { tieredApi } from '@/api/memory'
import { useMemoryStore } from '@/stores/memory'

interface MergeChainNode {
  id: string
  title?: string
  content?: string
  timestamp?: string
  memory_type?: string
  is_current?: boolean
}

interface MergeChainData {
  current: MergeChainNode
  sources: MergeChainNode[]
  depth: number
  merge_history?: {
    timestamp: string
    description?: string
  }[]
}

const props = defineProps<{
  memoryId: string | null
  showClose?: boolean
}>()

const emit = defineEmits<{
  close: []
  nodeClick: [node: MergeChainNode]
}>()

const memoryStore = useMemoryStore()

const graphContainer = ref<HTMLDivElement>()
const isLoading = ref(false)
const error = ref<string | null>(null)
const mergeChainData = ref<MergeChainData | null>(null)

let svg: d3.Selection<SVGSVGElement, unknown, null, undefined> | null = null
let simulation: d3.Simulation<d3.SimulationNodeDatum, undefined> | null = null

watch(() => props.memoryId, (newId) => {
  if (newId) {
    fetchMergeChain(newId)
  } else {
    mergeChainData.value = null
    clearGraph()
  }
}, { immediate: true })

onMounted(() => {
  if (props.memoryId) {
    fetchMergeChain(props.memoryId)
  }
})

onBeforeUnmount(() => {
  if (simulation) {
    simulation.stop()
  }
})

async function fetchMergeChain(memoryId: string) {
  isLoading.value = true
  error.value = null
  
  try {
    const data = await tieredApi.getMergeChain(memoryId)
    mergeChainData.value = data
    memoryStore.addLog('合并链加载成功', 'success')
    
    await nextTick()
    if (graphContainer.value && data) {
      renderGraph(data)
    }
  } catch (e) {
    error.value = '加载合并链失败: ' + (e as Error).message
    memoryStore.addLog('加载合并链失败', 'error')
  } finally {
    isLoading.value = false
  }
}

function clearGraph() {
  if (svg) {
    svg.selectAll('*').remove()
  }
}

function renderGraph(data: MergeChainData) {
  if (!graphContainer.value) return
  
  clearGraph()
  
  const width = graphContainer.value.clientWidth
  const height = 280
  
  svg = d3.select(graphContainer.value)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
  
  const nodes: any[] = []
  const links: any[] = []
  
  if (data.current) {
    nodes.push({
      id: data.current.id,
      title: data.current.title || data.current.id,
      type: 'current'
    })
  }
  
  if (data.sources && data.sources.length > 0) {
    data.sources.forEach((source) => {
      nodes.push({
        id: source.id,
        title: source.title || source.id,
        type: 'source'
      })
      
      links.push({
        source: source.id,
        target: data.current.id,
        relation: 'merged_to'
      })
    })
  }
  
  if (nodes.length === 0) return
  
  simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links)
      .id((d: any) => d.id)
      .distance(80)
    )
    .force('charge', d3.forceManyBody().strength(-200))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(35))
  
  const defs = svg.append('defs')
  
  defs.append('marker')
    .attr('id', 'arrowhead-merge')
    .attr('viewBox', '-0 -5 10 10')
    .attr('refX', 25)
    .attr('refY', 0)
    .attr('orient', 'auto')
    .attr('markerWidth', 6)
    .attr('markerHeight', 6)
    .append('path')
    .attr('d', 'M 0,-5 L 10,0 L 0,5')
    .attr('fill', '#00ff41')
  
  const link = svg.append('g')
    .selectAll('line')
    .data(links)
    .enter()
    .append('line')
    .attr('stroke', '#00ff41')
    .attr('stroke-opacity', 0.6)
    .attr('stroke-width', 2)
    .attr('marker-end', 'url(#arrowhead-merge)')
  
  const nodeGroup = svg.append('g')
    .selectAll<SVGGElement, any>('g')
    .data(nodes)
    .enter()
    .append('g')
    .style('cursor', 'pointer')
    .call(d3.drag<SVGGElement, any>()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended) as any
    )
    .on('click', (_event: MouseEvent, d: any) => {
      emit('nodeClick', d)
    })
  
  nodeGroup.append('circle')
    .attr('r', d => d.type === 'current' ? 20 : 15)
    .attr('fill', d => d.type === 'current' ? '#00ff41' : 'rgba(0, 255, 65, 0.3)')
    .attr('stroke', '#00ff41')
    .attr('stroke-width', 2)
  
  nodeGroup.append('text')
    .attr('dy', 4)
    .attr('text-anchor', 'middle')
    .attr('fill', d => d.type === 'current' ? '#000' : '#00ff41')
    .attr('font-size', '10px')
    .attr('font-weight', 'bold')
    .text(d => d.title.length > 6 ? d.title.substring(0, 6) + '...' : d.title)
  
  nodeGroup.append('title')
    .text(d => `${d.title}\n${d.memory_type || '未知类型'}`)
  
  simulation.on('tick', () => {
    link
      .attr('x1', d => (d.source as any).x)
      .attr('y1', d => (d.source as any).y)
      .attr('x2', d => (d.target as any).x)
      .attr('y2', d => (d.target as any).y)
    
    nodeGroup
      .attr('transform', d => `translate(${(d as any).x},${(d as any).y})`)
  })
}

function dragstarted(event: d3.D3DragEvent<SVGGElement, any, any>) {
  if (!event.active && simulation) {
    simulation.alphaTarget(0.3).restart()
  }
  ;(event.subject as any).fx = (event.subject as any).x
  ;(event.subject as any).fy = (event.subject as any).y
}

function dragged(event: d3.D3DragEvent<SVGGElement, any, any>) {
  ;(event.subject as any).fx = event.x as number
  ;(event.subject as any).fy = event.y as number
}

function dragended(event: d3.D3DragEvent<SVGGElement, any, any>) {
  if (!event.active && simulation) {
    simulation.alphaTarget(0)
  }
  ;(event.subject as any).fx = null
  ;(event.subject as any).fy = null
}

function formatTime(timestamp: string): string {
  if (!timestamp) return '-'
  const date = new Date(timestamp)
  return date.toLocaleString('zh-CN')
}
</script>

<style scoped>
.merge-chain-viewer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.header h3 {
  font-size: 16px;
  margin: 0;
  text-shadow: 0 0 5px #00ff41;
}

.btn-close {
  width: 28px;
  height: 28px;
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid rgba(0, 255, 65, 0.3);
  color: #00ff41;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.btn-close:hover {
  background: rgba(0, 255, 65, 0.3);
  border-color: #00ff41;
}

.chain-info {
  display: flex;
  gap: 15px;
  padding: 12px;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.2);
  margin-bottom: 15px;
}

.info-item {
  flex: 1;
  text-align: center;
}

.info-label {
  display: block;
  font-size: 11px;
  color: #008f11;
  margin-bottom: 5px;
}

.info-value {
  display: block;
  font-size: 14px;
  color: #00ff41;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.graph-container {
  flex: 1;
  min-height: 280px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 255, 65, 0.2);
  margin-bottom: 15px;
}

.merge-history {
  padding: 12px;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.2);
}

.merge-history h4 {
  font-size: 13px;
  margin: 0 0 10px 0;
  color: #00ff41;
}

.history-list {
  max-height: 150px;
  overflow-y: auto;
}

.history-item {
  padding: 8px;
  margin-bottom: 5px;
  background: rgba(0, 255, 65, 0.05);
  border-left: 2px solid #00ff41;
}

.history-time {
  font-size: 10px;
  color: #008f11;
  margin-bottom: 3px;
}

.history-desc {
  font-size: 12px;
  color: #00ff41;
}

.loading-overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  color: #00ff41;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(0, 255, 65, 0.3);
  border-top: 3px solid #00ff41;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 15px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.empty-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  color: #008f11;
  text-align: center;
}

.error-message {
  padding: 20px;
  color: #ff6b6b;
  text-align: center;
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.3);
}
</style>
