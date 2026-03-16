<template>
  <div class="memory-feedback panel">
    <h3>记忆反馈</h3>
    
    <div class="feedback-form">
      <h4>提交反馈</h4>
      
      <div class="form-group">
        <label>记忆ID</label>
        <input v-model="memoryId" type="text" placeholder="输入记忆ID..." />
      </div>
      
      <div class="form-group">
        <label>评分</label>
        <div class="rating-stars">
          <span 
            v-for="star in 5" 
            :key="star"
            :class="['star', { active: rating >= star }]"
            @click="rating = star"
          >★</span>
          <span class="rating-text">{{ rating > 0 ? `${rating} 星` : '未评分' }}</span>
        </div>
      </div>
      
      <div class="form-group">
        <label>有用性</label>
        <div class="useful-buttons">
          <button 
            :class="['useful-btn', { active: useful === true }]"
            @click="useful = true"
          >是</button>
          <button 
            :class="['useful-btn', { active: useful === false }]"
            @click="useful = false"
          >否</button>
        </div>
      </div>
      
      <div class="form-group">
        <label>评论</label>
        <textarea v-model="comment" rows="3" placeholder="输入您的反馈评论..."></textarea>
      </div>
      
      <button class="btn-submit" @click="submitFeedback" :disabled="submitting || !memoryId">
        {{ submitting ? '提交中...' : '提交反馈' }}
      </button>
    </div>
    
    <div class="feedback-history">
      <h4>反馈历史</h4>
      <div v-if="feedbackHistory.length === 0" class="empty-placeholder">
        暂无反馈记录
      </div>
      <div 
        v-for="(item, index) in feedbackHistory" 
        :key="index"
        class="history-item"
      >
        <div class="history-header">
          <span class="history-id">{{ item.memoryId.substring(0, 8) }}...</span>
          <span class="history-time">{{ item.timestamp }}</span>
        </div>
        <div class="history-content">
          <span class="history-rating">
            <span v-for="star in 5" :key="star" :class="['mini-star', { active: item.rating >= star }]">★</span>
          </span>
          <span :class="['history-useful', item.useful ? 'yes' : 'no']">
            {{ item.useful ? '有用' : '无用' }}
          </span>
        </div>
        <div v-if="item.comment" class="history-comment">
          {{ item.comment }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMemoryStore } from '@/stores/memory'
import { tieredApi } from '@/api/memory'

interface FeedbackRecord {
  memoryId: string
  rating: number
  useful: boolean | null
  comment: string
  timestamp: string
}

const memoryStore = useMemoryStore()

const memoryId = ref('')
const rating = ref(0)
const useful = ref<boolean | null>(null)
const comment = ref('')
const submitting = ref(false)
const feedbackHistory = ref<FeedbackRecord[]>([])

const STORAGE_KEY = 'memory_feedback_history'

onMounted(() => {
  loadHistory()
})

function loadHistory() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      feedbackHistory.value = JSON.parse(saved)
    }
  } catch (e) {
    console.error('加载反馈历史失败:', e)
  }
}

function saveHistory() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackHistory.value))
  } catch (e) {
    console.error('保存反馈历史失败:', e)
  }
}

async function submitFeedback() {
  if (!memoryId.value.trim()) {
    memoryStore.addLog('请输入记忆ID', 'warn')
    return
  }
  
  submitting.value = true
  try {
    await tieredApi.submitFeedback(memoryId.value, {
      rating: rating.value > 0 ? rating.value : undefined,
      useful: useful.value === null ? undefined : useful.value,
      comment: comment.value.trim() || undefined
    })
    
    const record: FeedbackRecord = {
      memoryId: memoryId.value,
      rating: rating.value,
      useful: useful.value,
      comment: comment.value,
      timestamp: new Date().toLocaleString('zh-CN')
    }
    
    feedbackHistory.value.unshift(record)
    if (feedbackHistory.value.length > 20) {
      feedbackHistory.value.pop()
    }
    saveHistory()
    
    memoryStore.addLog('反馈提交成功', 'success')
    
    memoryId.value = ''
    rating.value = 0
    useful.value = null
    comment.value = ''
  } catch (error) {
    memoryStore.addLog('反馈提交失败: ' + (error as Error).message, 'error')
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.memory-feedback {
  position: absolute;
  top: 20px;
  right: 320px;
  width: 400px;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
}

h3 {
  font-size: 16px;
  margin: 0 0 15px 0;
  text-shadow: 0 0 5px #00ff41;
}

h4 {
  font-size: 13px;
  margin: 15px 0 10px 0;
  color: #00ff41;
}

.feedback-form,
.feedback-history {
  padding: 15px;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.2);
  margin-bottom: 15px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-size: 12px;
  color: #008f11;
  margin-bottom: 8px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  background: rgba(0, 255, 65, 0.08);
  border: 1px solid rgba(0, 255, 65, 0.3);
  color: #00ff41;
  font-family: inherit;
  font-size: 12px;
}

.form-group textarea {
  resize: vertical;
}

.rating-stars {
  display: flex;
  align-items: center;
  gap: 5px;
}

.star {
  font-size: 24px;
  color: #008f11;
  cursor: pointer;
  transition: all 0.2s;
}

.star:hover,
.star.active {
  color: #00ff41;
  text-shadow: 0 0 10px #00ff41;
}

.rating-text {
  margin-left: 10px;
  font-size: 12px;
  color: #008f11;
}

.useful-buttons {
  display: flex;
  gap: 10px;
}

.useful-btn {
  flex: 1;
  padding: 8px;
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid rgba(0, 255, 65, 0.3);
  color: #008f11;
  cursor: pointer;
  font-family: inherit;
  font-size: 12px;
  transition: all 0.3s;
}

.useful-btn:hover {
  background: rgba(0, 255, 65, 0.2);
}

.useful-btn.active {
  background: rgba(0, 255, 65, 0.3);
  border-color: #00ff41;
  color: #00ff41;
}

.btn-submit {
  width: 100%;
  padding: 10px;
  background: rgba(0, 255, 65, 0.2);
  border: 1px solid #00ff41;
  color: #00ff41;
  cursor: pointer;
  font-family: inherit;
  font-size: 13px;
  transition: all 0.3s;
}

.btn-submit:hover:not(:disabled) {
  background: rgba(0, 255, 65, 0.3);
}

.btn-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.empty-placeholder {
  padding: 20px;
  text-align: center;
  color: #008f11;
}

.history-item {
  padding: 10px;
  margin-bottom: 8px;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid rgba(0, 255, 65, 0.2);
}

.history-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.history-id {
  font-size: 11px;
  color: #00ff41;
  font-family: monospace;
}

.history-time {
  font-size: 10px;
  color: #008f11;
}

.history-content {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 5px;
}

.mini-star {
  font-size: 12px;
  color: #008f11;
}

.mini-star.active {
  color: #00ff41;
}

.history-useful {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 3px;
}

.history-useful.yes {
  background: rgba(0, 255, 65, 0.2);
  color: #00ff41;
}

.history-useful.no {
  background: rgba(255, 65, 65, 0.2);
  color: #ff4141;
}

.history-comment {
  font-size: 11px;
  color: #008f11;
  padding-top: 5px;
  border-top: 1px solid rgba(0, 255, 65, 0.1);
}
</style>
