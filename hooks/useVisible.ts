"use client"

import { useEffect, useRef } from "react"

export default function useVisible<El extends HTMLElement>(cb: () => void) {
  const ref = useRef<El>(null)
  const forward = useRef(
    {} as {
      cb: typeof cb
    }
  )

  forward.current = {
    cb,
  }

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          forward.current.cb()
        } else {
        }
      })
    })
    observer.observe(el)

    return () => observer.disconnect()
  }, [ref])

  return { ref }
}
