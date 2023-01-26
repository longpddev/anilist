import { useState } from "react"

type PromiseReturn<T extends Promise<any>> = T extends Promise<infer R>
  ? R
  : never
export default function useFetch<F extends (...a: any) => Promise<any>>(fn: F) {
  const [state, stateSet] = useState<{
    loading: boolean
    error: boolean
    data: PromiseReturn<ReturnType<F>> | undefined
    executed: boolean
  }>({ loading: false, error: false, data: undefined, executed: false })
  return [
    (async (...args) => {
      try {
        stateSet((prev) => ({ ...prev, loading: true, error: false }))
        let result = await fn(...args)
        stateSet({ data: result, loading: false, error: false, executed: true })
        return result
      } catch (e) {
        console.error(e)
        stateSet((prev) => ({ ...prev, loading: false, error: true }))
      }
    }) as F,
    state,
  ] as const
}
