import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

/**
 * 用户认证状态管理
 * 
 * 由于当前系统没有完整的用户认证系统，
 * 使用环境变量或配置文件来获取用户ID
 */

// 从环境变量获取用户ID，如果没有则使用默认值
const DEFAULT_USER_ID = import.meta.env.VITE_DEFAULT_USER_ID || 'default_user'

export const useAuthStore = defineStore('auth', () => {
  // 当前用户ID
  const currentUserId = ref<string>(DEFAULT_USER_ID)
  
  // 是否已登录（简化版本，实际应该检查token等）
  const isAuthenticated = ref(true)
  
  // 用户信息
  const userInfo = ref<{
    id: string
    name: string
    email?: string
  }>({
    id: DEFAULT_USER_ID,
    name: DEFAULT_USER_ID
  })

  // 获取当前用户ID
  const getCurrentUserId = computed(() => currentUserId.value)
  
  // 设置用户ID（可以从配置文件或环境变量加载）
  function setUserId(userId: string) {
    currentUserId.value = userId
    userInfo.value.id = userId
    userInfo.value.name = userId
  }
  
  // 从本地存储加载用户ID
  function loadUserFromStorage() {
    const storedUserId = localStorage.getItem('mcp_memory_user_id')
    if (storedUserId) {
      setUserId(storedUserId)
    }
  }
  
  // 保存用户ID到本地存储
  function saveUserToStorage(userId: string) {
    localStorage.setItem('mcp_memory_user_id', userId)
    setUserId(userId)
  }

  // 初始化时加载
  loadUserFromStorage()

  return {
    currentUserId,
    isAuthenticated,
    userInfo,
    getCurrentUserId,
    setUserId,
    loadUserFromStorage,
    saveUserToStorage
  }
})
