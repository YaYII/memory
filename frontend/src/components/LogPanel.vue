<template>
  <div class="log-panel panel">
    <div class="log-header">
      <h3>系统日志</h3>
      <button class="clear-btn" @click="clearLogs">清空</button>
    </div>
    <div class="log-content" ref="logContentRef">
      <div 
        v-for="(log, index) in logs" 
        :key="index"
        :class="['log-entry', log.type]"
      >
        <span class="log-time">[{{ log.time }}]</span>
        <span class="log-message">{{ log.message }}</span>
      </div>
      <div v-if="logs.length === 0" class="log-placeholder">
        暂无日志
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useMemoryStore } from '@/stores/memory'
import { storeToRefs } from 'pinia'

const memoryStore = useMemoryStore()
const { logs } = storeToRefs(memoryStore)

const logContentRef = ref<HTMLDivElement>()
let logRefreshInterval: number | null = null

onMounted(() => {
  memoryStore.fetchLogs()
  logRefreshInterval = window.setInterval(() => {
    memoryStore.fetchLogs()
  }, 3000)
})

onBeforeUnmount(() => {
  if (logRefreshInterval) {
    clearInterval(logRefreshInterval)
  }
})

watch(logs, () => {
  nextTick(() => {
    if (logContentRef.value) {
      logContentRef.value.scrollTop = logContentRef.value.scrollHeight
    }
  })
}, { deep: true })

function clearLogs() {
  memoryStore.clearLogs()
}
</script>

<style scoped>
.log-panel {
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
}

.log-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.log-header h3 {
  margin: 0;
  font-size: 14px;
  text-shadow: 0 0 5px #00ff41;
}

.clear-btn {
  padding: 4px 10px;
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid rgba(0, 255, 65, 0.3);
  color: #00ff41;
  cursor: pointer;
  font-size: 11px;
}

.clear-btn:hover {
  background: rgba(0, 255, 65, 0.2);
}

.log-content {
  flex: 1;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 255, 65, 0.2);
  padding: 10px;
  font-size: 11px;
}

.log-entry {
  margin-bottom: 5px;
  padding: 3px 0;
}

.log-entry.info {
  color: #00ff41;
}

.log-entry.success {
  color: #00ff00;
}

.log-entry.error {
  color: #ff0000;
}

.log-entry.warn {
  color: #ffaa00;
}

.log-time {
  color: #008f11;
  margin-right: 5px;
}

.log-message {
  color: inherit;
}

.log-placeholder {
  color: #008f11;
  text-align: center;
  padding: 20px;
}
</style>
