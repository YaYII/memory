export async function withLoading<T>(
  loading: Ref<boolean>,
  fn: () => Promise<T>,
  onError?: (e: unknown) => void
): Promise<T> {
  loading.value = true
  try {
    return await fn()
  } catch (e) {
    onError?.(e)
    throw e
  } finally {
    loading.value = false
  }
}

import type { Ref } from 'vue'
