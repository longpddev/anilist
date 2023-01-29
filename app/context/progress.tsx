"use client"
import React, { forwardRef, useContext, useEffect } from "react"
import NProgress from "nprogress"
import { usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"
type SubscriberFn = () => void
const initContent = () => {
  const subscriberStart = new Map<SubscriberFn, SubscriberFn>()
  const subscriberEnd = new Map<SubscriberFn, SubscriberFn>()
  let isStart = { current: false }
  const onStart = (cb: SubscriberFn) => {
    subscriberStart.set(cb, cb)
    return () => subscriberStart.delete(cb)
  }
  const onEnd = (cb: SubscriberFn) => {
    subscriberEnd.set(cb, cb)
    return () => subscriberEnd.delete(cb)
  }

  const triggerStart = () => {
    isStart.current = true
    Array.from(subscriberStart.values()).forEach((cb) => cb())
  }
  const triggerEnd = () => {
    if (!isStart.current) return
    isStart.current = false
    Array.from(subscriberEnd.values()).forEach((cb) => cb())
  }

  const result = {
    subscriberStart,
    subscriberEnd,
    isStart,
    onStart,
    onEnd,
    triggerStart,
    triggerEnd,
  }

  return result
}
export const ProgressContext = React.createContext(initContent())
export const ProviderProgress: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const context = initContent()

  useEffect(() => {
    const cleanup = [
      context.onStart(() => NProgress.start()),
      context.onEnd(() => NProgress.done()),
      () => NProgress.done(),
    ] as const

    return () => cleanup.forEach((item) => item())
  }, [context])
  return (
    <ProgressContext.Provider value={context}>
      <Progress />
      {children}
    </ProgressContext.Provider>
  )
}

const Progress = () => {
  const { triggerEnd } = useContext(ProgressContext)
  const path = usePathname()
  const params = useSearchParams()
  useEffect(() => {
    triggerEnd()
  }, [path, params, triggerEnd])
  return null
}
