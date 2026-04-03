import { ref } from 'vue'

export interface ToastItem {
  id: number
  message: string
  type: 'success' | 'error' | 'warn' | 'info'
  duration?: number
}

const toasts = ref<ToastItem[]>([])
let nextId = 0

export function useToast() {
  function show(message: string, type: ToastItem['type'] = 'info', duration = 3000) {
    const id = nextId++
    toasts.value.push({ id, message, type, duration })
    if (duration > 0) {
      setTimeout(() => {
        toasts.value = toasts.value.filter(t => t.id !== id)
      }, duration)
    }
    return id
  }

  function success(message: string, duration?: number) { return show(message, 'success', duration) }
  function error(message: string, duration?: number) { return show(message, 'error', duration ?? 5000) }
  function warn(message: string, duration?: number) { return show(message, 'warn', duration) }
  function info(message: string, duration?: number) { return show(message, 'info', duration) }

  function dismiss(id: number) {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }

  return { toasts, show, success, error, warn, info, dismiss }
}
