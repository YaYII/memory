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

const REGION_COLORS = {
  storage: 0x4A90E2,
  thinking: 0xF5A623,
  skill: 0x7ED321,
  core: 0x00ff41,
  inactive: 0x333333
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

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000510)

  camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
  camera.position.z = 40

  renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
  container.appendChild(renderer.domElement)

  brainGroup = new THREE.Group()
  scene.add(brainGroup)

  createBrainModel()
  createNeuralParticles()
  createSynapseConnections()

  animate()
  window.addEventListener('resize', handleResize)

  isLoading.value = false
}

function createBrainModel() {
  if (!brainGroup) return

  const coreGeometry = new THREE.IcosahedronGeometry(6, 1)
  const coreMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff41,
    wireframe: true,
    transparent: true,
    opacity: 0.3
  })
  const core = new THREE.Mesh(coreGeometry, coreMaterial)
  brainGroup.add(core)

  const innerGeometry = new THREE.IcosahedronGeometry(4, 1)
  const innerMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff41,
    transparent: true,
    opacity: 0.5
  })
  const innerCore = new THREE.Mesh(innerGeometry, innerMaterial)
  brainGroup.add(innerCore)

  const centerGeometry = new THREE.SphereGeometry(1.5, 16, 16)
  const centerMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff41,
    transparent: true,
    opacity: 0.8
  })
  const center = new THREE.Mesh(centerGeometry, centerMaterial)
  brainGroup.add(center)

  const regions = [
    { name: 'storage', position: [-5, 2, 0], color: REGION_COLORS.storage },
    { name: 'thinking', position: [5, 2, 0], color: REGION_COLORS.thinking },
    { name: 'skill', position: [0, -4, 2], color: REGION_COLORS.skill }
  ]

  regions.forEach(region => {
    const geometry = new THREE.SphereGeometry(1.2, 12, 12)
    const material = new THREE.MeshBasicMaterial({
      color: region.color,
      transparent: true,
      opacity: 0.7
    })
    const sphere = new THREE.Mesh(geometry, material)
    sphere.position.set(region.position[0], region.position[1], region.position[2])
    sphere.userData = { region: region.name }
    brainGroup!.add(sphere)

    const ringGeometry = new THREE.RingGeometry(1.5, 1.8, 32)
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: region.color,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide
    })
    const ring = new THREE.Mesh(ringGeometry, ringMaterial)
    ring.position.set(region.position[0], region.position[1], region.position[2] + 0.1)
    brainGroup!.add(ring)
  })
}

function createNeuralParticles() {
  if (!brainGroup) return

  const particleCount = 150
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)
  const sizes = new Float32Array(particleCount)

  for (let i = 0; i < particleCount; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const radius = 5 + Math.random() * 4

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = radius * Math.cos(phi)

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

    sizes[i] = 0.5 + Math.random() * 1.5
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 }
    },
    vertexShader: `
      attribute float size;
      uniform float uTime;
      varying vec3 vColor;
      
      void main() {
        vColor = color;
        vec3 pos = position;
        float pulse = sin(uTime * 2.0 + position.x * 0.5 + position.y * 0.3) * 0.3;
        pos += normalize(position) * pulse;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = size * (200.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      
      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
        gl_FragColor = vec4(vColor, alpha);
      }
    `,
    transparent: true,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  })

  particles = new THREE.Points(geometry, material)
  brainGroup.add(particles)

  neuronCount.value = particleCount
}

function createSynapseConnections() {
  if (!brainGroup) return

  const connectionCount = 60
  const allPoints: THREE.Vector3[] = []

  for (let i = 0; i < connectionCount; i++) {
    const startTheta = Math.random() * Math.PI * 2
    const startPhi = Math.acos(2 * Math.random() - 1)
    const startRadius = 5 + Math.random() * 3

    const startPoint = new THREE.Vector3(
      startRadius * Math.sin(startPhi) * Math.cos(startTheta),
      startRadius * Math.sin(startPhi) * Math.sin(startTheta),
      startRadius * Math.cos(startPhi)
    )

    const midPoint = startPoint.clone().multiplyScalar(0.5 + Math.random() * 0.3)

    const endTheta = Math.random() * Math.PI * 2
    const endPhi = Math.acos(2 * Math.random() - 1)
    const endRadius = 5 + Math.random() * 3

    const endPoint = new THREE.Vector3(
      endRadius * Math.sin(endPhi) * Math.cos(endTheta),
      endRadius * Math.sin(endPhi) * Math.sin(endTheta),
      endRadius * Math.cos(endPhi)
    )

    const curve = new THREE.QuadraticBezierCurve3(startPoint, midPoint, endPoint)
    const curvePoints = curve.getPoints(8)
    allPoints.push(...curvePoints)
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(allPoints)
  const material = new THREE.LineBasicMaterial({
    color: 0x00ff41,
    transparent: true,
    opacity: 0.15
  })

  const lines = new THREE.LineSegments(geometry, material)
  lines.userData.isSynapse = true
  brainGroup.add(lines)

  synapseCount.value = connectionCount
  activeRegions.value = 3
}

function updateBrainActivity(stats: any) {
  if (!brainGroup || !particles) return

  const total = stats.memory_count || 0
  const storage = stats.tiered_breakdown?.storage || 0
  const thinking = stats.tiered_breakdown?.thinking || 0
  const skill = stats.tiered_breakdown?.skill || 0

  brainGroup.children.forEach(child => {
    if (child.userData.region && child instanceof THREE.Mesh) {
      const material = child.material as THREE.MeshBasicMaterial
      let opacity = 0.5

      switch (child.userData.region) {
        case 'storage':
          opacity = 0.3 + (storage / Math.max(total, 1)) * 0.7
          break
        case 'thinking':
          opacity = 0.3 + (thinking / Math.max(total, 1)) * 0.7
          break
        case 'skill':
          opacity = 0.3 + (skill / Math.max(total, 1)) * 0.7
          break
      }

      material.opacity = opacity
    }
  })
}

function animate() {
  if (!scene || !camera || !renderer || !brainGroup) return

  animationId = requestAnimationFrame(animate)

  const time = performance.now() * 0.001

  brainGroup.rotation.y = time * 0.15
  brainGroup.rotation.x = Math.sin(time * 0.3) * 0.1

  if (particles && particles.material instanceof THREE.ShaderMaterial) {
    particles.material.uniforms.uTime.value = time
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
    animationId = null
  }

  window.removeEventListener('resize', handleResize)

  if (brainGroup) {
    brainGroup.traverse((child) => {
      if (child instanceof THREE.Mesh || child instanceof THREE.Points || child instanceof THREE.Line) {
        if (child.geometry) {
          child.geometry.dispose()
        }
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(m => m.dispose())
          } else {
            child.material.dispose()
          }
        }
      }
    })
    if (scene) {
      scene.remove(brainGroup)
    }
  }

  if (renderer) {
    renderer.dispose()
    renderer.forceContextLoss()
    if (canvasRef.value && renderer.domElement.parentNode === canvasRef.value) {
      canvasRef.value.removeChild(renderer.domElement)
    }
  }

  scene = null
  camera = null
  renderer = null
  brainGroup = null
  particles = null
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
