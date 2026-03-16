<template>
  <div class="memory-graph">
    <div ref="containerRef" class="graph-container"></div>
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <p>加载图谱中...</p>
    </div>
    <div v-if="!isLoading && graphData.nodes.length === 0" class="empty-placeholder">
      <h2>暂无认知数据</h2>
      <p>当前记忆库尚未经过认知分析，图谱暂时无法显示。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onBeforeUnmount } from 'vue'
import * as d3 from 'd3'
import type { GraphData, GraphNode } from '@/types/memory'

const props = defineProps<{
  graphData: GraphData
  isLoading: boolean
}>()

const emit = defineEmits<{
  nodeClick: [node: GraphNode]
}>()

const containerRef = ref<HTMLDivElement>()
let simulation: d3.Simulation<d3.SimulationNodeDatum, undefined> | null = null
let svg: d3.Selection<SVGSVGElement, unknown, null, undefined> | null = null

const colorScale = d3.scaleOrdinal<string>()
  .domain(['storage', 'thinking', 'skill', 'entity', 'category'])
  .range(['#00ff41', '#ff00ff', '#00ffff', '#ffff00', '#ff6b6b'])

onMounted(() => {
  if (containerRef.value) {
    initGraph()
  }
})

watch(() => props.graphData, (newData) => {
  if (newData.nodes.length > 0) {
    updateGraph(newData)
  }
}, { deep: true })

onBeforeUnmount(() => {
  if (simulation) {
    simulation.stop()
  }
})

function initGraph() {
  if (!containerRef.value) return

  const width = containerRef.value.clientWidth
  const height = containerRef.value.clientHeight

  svg = d3.select(containerRef.value)
    .append('svg')
    .attr('width', width)
    .attr('height', height)

  const defs = svg.append('defs')
  
  defs.append('marker')
    .attr('id', 'arrowhead')
    .attr('viewBox', '-0 -5 10 10')
    .attr('refX', 20)
    .attr('refY', 0)
    .attr('orient', 'auto')
    .attr('markerWidth', 6)
    .attr('markerHeight', 6)
    .append('path')
    .attr('d', 'M 0,-5 L 10,0 L 0,5')
    .attr('fill', '#00ff41')
}

function updateGraph(data: GraphData) {
  if (!svg || !containerRef.value) return

  const width = containerRef.value.clientWidth
  const height = containerRef.value.clientHeight

  svg.selectAll('*').remove()

  simulation = d3.forceSimulation(data.nodes as d3.SimulationNodeDatum[])
    .force('link', d3.forceLink(data.links)
      .id((d: any) => d.id)
      .distance(100)
    )
    .force('charge', d3.forceManyBody().strength(-300))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(30))

  const link = svg.append('g')
    .selectAll('line')
    .data(data.links)
    .enter()
    .append('line')
    .attr('stroke', '#00ff41')
    .attr('stroke-opacity', 0.6)
    .attr('stroke-width', 1.5)

  const node = svg.append('g')
    .selectAll<SVGCircleElement, GraphNode>('circle')
    .data(data.nodes)
    .enter()
    .append('circle')
    .attr('r', 8)
    .attr('fill', d => colorScale(d.type) || '#00ff41')
    .attr('stroke', '#fff')
    .attr('stroke-width', 2)
    .style('cursor', 'pointer')
    .call(d3.drag<SVGCircleElement, GraphNode>()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended) as any
    )
    .on('click', (_event: MouseEvent, d: GraphNode) => {
      emit('nodeClick', d)
    })

  node.append('title')
    .text(d => d.label || d.id)

  simulation.on('tick', () => {
    link
      .attr('x1', d => (d.source as any).x)
      .attr('y1', d => (d.source as any).y)
      .attr('x2', d => (d.target as any).x)
      .attr('y2', d => (d.target as any).y)

    node
      .attr('cx', d => (d as any).x)
      .attr('cy', d => (d as any).y)
  })
}

function dragstarted(event: d3.D3DragEvent<SVGCircleElement, GraphNode, GraphNode>) {
  if (!event.active && simulation) {
    simulation.alphaTarget(0.3).restart()
  }
  (event.subject as any).fx = (event.subject as any).x
  (event.subject as any).fy = (event.subject as any).y
}

function dragged(event: d3.D3DragEvent<SVGCircleElement, GraphNode, GraphNode>) {
  ;(event.subject as any).fx = event.x as number
  ;(event.subject as any).fy = event.y as number
}

function dragended(event: d3.D3DragEvent<SVGCircleElement, GraphNode, GraphNode>) {
  if (!event.active && simulation) {
    simulation.alphaTarget(0)
  }
  ;(event.subject as any).fx = null as any
  ;(event.subject as any).fy = null as any
}
</script>

<style scoped>
.memory-graph {
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;
}

.graph-container {
  width: 100%;
  height: 100%;
}

.loading-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #00ff41;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid rgba(0, 255, 65, 0.3);
  border-top: 3px solid #00ff41;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.empty-placeholder {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #00ff41;
}

.empty-placeholder h2 {
  font-size: 24px;
  text-shadow: 0 0 10px #00ff41;
  margin-bottom: 15px;
}

.empty-placeholder p {
  max-width: 400px;
  color: #008f11;
}
</style>
