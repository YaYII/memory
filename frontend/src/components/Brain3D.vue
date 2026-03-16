<template>
  <div class="brain-3d-container">
    <div ref="canvasRef" class="canvas-wrapper"></div>
    <div class="brain-overlay">
      <div class="brain-stats">
        <div class="stat-item">
          <span class="stat-label">神经元</span>
          <span class="stat-value">{{ neuronCount }}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">突触连接</span>
          <span class="stat-value">{{ synapseCount }}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">活跃区域</span>
          <span class="stat-value">{{ activeRegions }}</span>
        </div>
      </div>
    </div>
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <p>初始化大脑模型...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'

const props = defineProps<{
  stats: {
    memory_count?: number
    tiered_breakdown?: {
      storage: number
      thinking: number
      skill: number
    }
  } | null
}>()

const canvasRef = ref<HTMLDivElement>()
const isLoading = ref(true)
const neuronCount = ref(0)
const synapseCount = ref(0)
const activeRegions = ref(0)

let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let renderer: THREE.WebGLRenderer | null = null
let brainGroup: THREE.Group | null = null
let animationId: number | null = null
let particles: THREE.Points | null = null
let connections: THREE.LineSegments | null = null

// 大脑区域颜色
const REGION_COLORS = {
  storage: 0x4A90E2,   // 蓝色 - 存储记忆
  thinking: 0xF5A623,  // 橙色 - 思维记忆
  skill: 0x7ED321,     // 绿色 - 技能记忆
  core: 0x00ff41,      // 绿色 - 核心
  inactive: 0x333333   // 灰色 - 未激活
}

onMounted(() => {
  initBrain()
})

onBeforeUnmount(() => {
  cleanup()
})

watch(() => props.stats, (newStats) => {
  if (newStats) {
    updateBrainActivity(newStats)
  }
}, { deep: true })

function initBrain() {
  if (!canvasRef.value) return

  const container = canvasRef.value
  const width = container.clientWidth
  const height = container.clientHeight

  // 场景
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000510)
  scene.fog = new THREE.FogExp2(0x000510, 0.02)

  // 相机
  camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
  camera.position.z = 30

  // 渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio)
  container.appendChild(renderer.domElement)

  // 大脑组
  brainGroup = new THREE.Group()
  scene.add(brainGroup)

  // 创建大脑模型
  createBrainModel()

  // 创建神经粒子
  createNeuralParticles()

  // 创建突触连接
  createSynapseConnections()

  // 添加光源
  addLights()

  // 开始动画
  animate()

  // 响应式调整
  window.addEventListener('resize', handleResize)

  isLoading.value = false
}

function createBrainModel() {
  if (!brainGroup) return

  // 创建大脑核心 - 使用多个球体模拟大脑结构
  const coreGeometry = new THREE.IcosahedronGeometry(8, 2)
  const coreMaterial = new THREE.MeshPhongMaterial({
    color: 0x001a0a,
    emissive: 0x00ff41,
    emissiveIntensity: 0.1,
    transparent: true,
    opacity: 0.8,
    wireframe: true
  })
  const core = new THREE.Mesh(coreGeometry, coreMaterial)
  brainGroup.add(core)

  // 创建内部发光核心
  const innerGeometry = new THREE.IcosahedronGeometry(5, 1)
  const innerMaterial = new THREE.MeshPhongMaterial({
    color: 0x00ff41,
    emissive: 0x00ff41,
    emissiveIntensity: 0.5,
    transparent: true,
    opacity: 0.3
  })
  const innerCore = new THREE.Mesh(innerGeometry, innerMaterial)
  brainGroup.add(innerCore)

  // 创建记忆区域球体
  const regions = [
    { name: 'storage', position: [-6, 3, 0], color: REGION_COLORS.storage },
    { name: 'thinking', position: [6, 3, 0], color: REGION_COLORS.thinking },
    { name: 'skill', position: [0, -5, 3], color: REGION_COLORS.skill }
  ]

  regions.forEach(region => {
    const geometry = new THREE.SphereGeometry(2.5, 32, 32)
    const material = new THREE.MeshPhongMaterial({
      color: region.color,
      emissive: region.color,
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: 0.6
    })
    const sphere = new THREE.Mesh(geometry, material)
    sphere.position.set(region.position[0], region.position[1], region.position[2])
    sphere.userData = { region: region.name }
    brainGroup!.add(sphere)

    // 添加区域光晕
    const glowGeometry = new THREE.SphereGeometry(3, 32, 32)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: region.color,
      transparent: true,
      opacity: 0.1
    })
    const glow = new THREE.Mesh(glowGeometry, glowMaterial)
    glow.position.copy(sphere.position)
    brainGroup!.add(glow)
  })
}

function createNeuralParticles() {
  if (!brainGroup) return

  const particleCount = 500
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    // 在大脑周围随机分布
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const radius = 8 + Math.random() * 6

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = radius * Math.cos(phi)

    // 颜色
    const colorType = Math.random()
    let color
    if (colorType < 0.33) {
      color = new THREE.Color(REGION_COLORS.storage)
    } else if (colorType < 0.66) {
      color = new THREE.Color(REGION_COLORS.thinking)
    } else {
      color = new THREE.Color(REGION_COLORS.skill)
    }

    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  const material = new THREE.PointsMaterial({
    size: 0.15,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  })

  particles = new THREE.Points(geometry, material)
  brainGroup.add(particles)

  neuronCount.value = particleCount
}

function createSynapseConnections() {
  if (!brainGroup) return

  const connectionCount = 200
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(connectionCount * 6)

  for (let i = 0; i < connectionCount; i++) {
    // 随机起点和终点
    const startTheta = Math.random() * Math.PI * 2
    const startPhi = Math.acos(2 * Math.random() - 1)
    const startRadius = 8 + Math.random() * 4

    const endTheta = Math.random() * Math.PI * 2
    const endPhi = Math.acos(2 * Math.random() - 1)
    const endRadius = 8 + Math.random() * 4

    positions[i * 6] = startRadius * Math.sin(startPhi) * Math.cos(startTheta)
    positions[i * 6 + 1] = startRadius * Math.sin(startPhi) * Math.sin(startTheta)
    positions[i * 6 + 2] = startRadius * Math.cos(startPhi)

    positions[i * 6 + 3] = endRadius * Math.sin(endPhi) * Math.cos(endTheta)
    positions[i * 6 + 4] = endRadius * Math.sin(endPhi) * Math.sin(endTheta)
    positions[i * 6 + 5] = endRadius * Math.cos(endPhi)
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const material = new THREE.LineBasicMaterial({
    color: 0x00ff41,
    transparent: true,
    opacity: 0.15
  })

  connections = new THREE.LineSegments(geometry, material)
  brainGroup.add(connections)

  synapseCount.value = connectionCount
  activeRegions.value = 3
}

function addLights() {
  if (!scene) return

  // 环境光
  const ambientLight = new THREE.AmbientLight(0x404040, 2)
  scene.add(ambientLight)

  // 点光源 - 核心发光
  const coreLight = new THREE.PointLight(0x00ff41, 2, 50)
  coreLight.position.set(0, 0, 0)
  scene.add(coreLight)

  // 区域光源
  const storageLight = new THREE.PointLight(REGION_COLORS.storage, 1, 20)
  storageLight.position.set(-6, 3, 0)
  scene.add(storageLight)

  const thinkingLight = new THREE.PointLight(REGION_COLORS.thinking, 1, 20)
  thinkingLight.position.set(6, 3, 0)
  scene.add(thinkingLight)

  const skillLight = new THREE.PointLight(REGION_COLORS.skill, 1, 20)
  skillLight.position.set(0, -5, 3)
  scene.add(skillLight)
}

function updateBrainActivity(stats: any) {
  if (!brainGroup) return

  const total = stats.memory_count || 0
  const storage = stats.tiered_breakdown?.storage || 0
  const thinking = stats.tiered_breakdown?.thinking || 0
  const skill = stats.tiered_breakdown?.skill || 0

  // 根据统计数据调整区域亮度
  brainGroup.children.forEach(child => {
    if (child.userData.region) {
      const material = (child as THREE.Mesh).material as THREE.MeshPhongMaterial
      let intensity = 0.3

      switch (child.userData.region) {
        case 'storage':
          intensity = 0.3 + (storage / Math.max(total, 1)) * 0.7
          break
        case 'thinking':
          intensity = 0.3 + (thinking / Math.max(total, 1)) * 0.7
          break
        case 'skill':
          intensity = 0.3 + (skill / Math.max(total, 1)) * 0.7
          break
      }

      material.emissiveIntensity = intensity
    }
  })
}

function animate() {
  if (!scene || !camera || !renderer || !brainGroup) return

  animationId = requestAnimationFrame(animate)

  // 旋转大脑
  brainGroup.rotation.y += 0.002
  brainGroup.rotation.x = Math.sin(Date.now() * 0.0005) * 0.1

  // 粒子脉冲效果
  if (particles) {
    const positions = particles.geometry.attributes.position.array as Float32Array
    const time = Date.now() * 0.001

    for (let i = 0; i < positions.length; i += 3) {
      const idx = i / 3
      const offset = Math.sin(time + idx * 0.1) * 0.5
      positions[i + 2] += offset * 0.01
    }
    particles.geometry.attributes.position.needsUpdate = true
  }

  renderer.render(scene, camera)
}

function handleResize() {
  if (!canvasRef.value || !camera || !renderer) return

  const width = canvasRef.value.clientWidth
  const height = canvasRef.value.clientHeight

  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

function cleanup() {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }

  window.removeEventListener('resize', handleResize)

  if (renderer) {
    renderer.dispose()
    if (canvasRef.value && renderer.domElement.parentNode === canvasRef.value) {
      canvasRef.value.removeChild(renderer.domElement)
    }
  }

  scene = null
  camera = null
  renderer = null
  brainGroup = null
  particles = null
  connections = null
}
</script>

<style scoped>
.brain-3d-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, #0a1a0a 0%, #000000 100%);
  overflow: hidden;
}

.canvas-wrapper {
  width: 100%;
  height: 100%;
}

.brain-overlay {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
}

.brain-stats {
  background: rgba(0, 10, 20, 0.85);
  border: 1px solid rgba(0, 255, 65, 0.3);
  border-right: 3px solid #00ff41;
  padding: 15px;
  backdrop-filter: blur(8px);
  box-shadow: 0 0 15px rgba(0, 255, 65, 0.1);
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
  font-size: 12px;
}

.stat-label {
  color: #008f11;
  margin-right: 15px;
}

.stat-value {
  color: #00ffff;
  font-weight: bold;
  text-shadow: 0 0 5px #00ffff;
}

.loading-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #00ff41;
  z-index: 20;
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
</style>
