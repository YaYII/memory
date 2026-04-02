import { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios'

declare module 'axios' {
  interface InternalAxiosRequestConfig {
    metadata?: { startTime: number }
  }
}

const pendingRequests = new Map<string, AbortController>()

function generateRequestKey(config: InternalAxiosRequestConfig): string {
  const { method, url, params, data } = config
  return [method, url, JSON.stringify(params), JSON.stringify(data)].join('&')
}

export function setupInterceptors(api: AxiosInstance): AxiosInstance {
  api.interceptors.request.use(
    (config) => {
      const requestKey = generateRequestKey(config)

      if (pendingRequests.has(requestKey)) {
        const controller = pendingRequests.get(requestKey)
        controller?.abort()
        pendingRequests.delete(requestKey)
      }

      const controller = new AbortController()
      config.signal = controller.signal
      pendingRequests.set(requestKey, controller)

      config.metadata = { startTime: Date.now() }
      return config
    },
    (error) => Promise.reject(error)
  )

  api.interceptors.response.use(
    (response: AxiosResponse) => {
      const requestKey = generateRequestKey(response.config)
      pendingRequests.delete(requestKey)
      const duration = Date.now() - (response.config.metadata?.startTime || Date.now())
      if (duration > 3000) {
        console.warn(`[API] Slow response: ${response.config.method?.toUpperCase()} ${response.config.url} took ${duration}ms`)
      }
      return response
    },
    async (error) => {
      const config = error.config
      if (config) {
        const requestKey = generateRequestKey(config)
        pendingRequests.delete(requestKey)
      }

      if (error.name === 'CanceledError' || error.code === 'ERR_CANCELED') {
        return Promise.reject({ deduplicated: true, message: '请求已去重' })
      }

      const status = error.response?.status
      const url = error.config?.url

      if (status === 401) {
        console.error('[API] 未授权，请检查认证信息')
        return Promise.reject({ status: 401, message: '未授权', url })
      }
      if (status === 403) {
        console.error('[API] 禁止访问，权限不足')
        return Promise.reject({ status: 403, message: '权限不足', url })
      }
      if (status === 404) {
        console.warn(`[API] 资源不存在: ${url}`)
        return Promise.reject({ status: 404, message: '资源不存在', url })
      }
      if (status === 429) {
        console.warn('[API] 请求过于频繁，请稍后重试')
        return Promise.reject({ status: 429, message: '请求过于频繁', url })
      }
      if (status && status >= 500) {
        console.error(`[API] 服务端错误 ${status}: ${url}`)
        return Promise.reject({ status, message: `服务端错误 (${status})`, url })
      }

      if (error.code === 'ECONNREFUSED' || error.code === 'ERR_NETWORK') {
        console.error(`[API] 无法连接到服务器 (${import.meta.env.VITE_API_BASE_URL || 'http://localhost:22888'})`)
        return Promise.reject({ code: 'NETWORK_ERROR', message: '无法连接到记忆服务器，请确认后端服务已启动' })
      }
      if (error.code === 'ETIMEDOUT' || error.message?.includes('timeout')) {
        console.error(`[API] 请求超时: ${url}`)
        return Promise.reject({ code: 'TIMEOUT', message: '请求超时，请稍后重试' })
      }

      console.error(`[API] 未知错误:`, error.message)
      return Promise.reject({ code: 'UNKNOWN', message: error.message || '未知错误' })
    }
  )

  return api
}

const MAX_RETRIES = 2
const RETRY_DELAY_MS = 1000

async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function withRetry<T>(
  fn: () => Promise<T>,
  retries: number = MAX_RETRIES,
  delayMs: number = RETRY_DELAY_MS
): Promise<T> {
  let lastError: Error | null = null
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn()
    } catch (error: any) {
      lastError = error
      if (attempt < retries && isRetryableError(error)) {
        console.warn(`[Retry] 第 ${attempt + 1} 次重试... (${error.message})`)
        await sleep(delayMs * (attempt + 1))
        continue
      }
      break
    }
  }
  throw lastError
}

function isRetryableError(error: any): boolean {
  if (!error) return false
  const retryableCodes = ['ECONNRESET', 'ETIMEDOUT', 'ECONNREFUSED', 'ERR_NETWORK']
  const retryableStatuses = [502, 503, 504, 429]
  return (
    retryableCodes.includes(error.code) ||
    retryableStatuses.includes(error.status) ||
    error.message?.includes('timeout') ||
    error.message?.includes('network')
  )
}
