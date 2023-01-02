"use client"

import clsx from "clsx"
import React, { useEffect, useRef, useState } from "react"

interface IRangeValueProps {
  value: number
  max: number
  onMove: (val: number) => void
  onMoved: (val: number) => void
  isRight?: boolean
}

const RangePoint: React.FC<IRangeValueProps> = ({
  value,
  max,
  onMove,
  onMoved,
  isRight,
}) => {
  const [active, activeSet] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const forward = useRef(
    {} as {
      active: typeof active
      onMove: typeof onMove
      onMoved: typeof onMoved
    }
  )

  forward.current = {
    active,
    onMove,
    onMoved,
  }
  useEffect(() => {
    const ele = ref.current
    if (!ele) return

    let startPoint = 0
    const handleMove = (e: PointerEvent) => {
      if (!forward.current.active) return
      const moved = e.pageX - startPoint
      forward.current.onMove(moved)
    }
    const handleUp = (e: PointerEvent) => {
      if (!forward.current.active) return
      activeSet(false)
      const moved = e.pageX - startPoint
      forward.current.onMoved(moved)
    }
    const handleDown = (e: PointerEvent) => {
      activeSet(true)
      startPoint = e.pageX
    }
    ele.addEventListener("pointerdown", handleDown)
    window.addEventListener("pointermove", handleMove)
    window.addEventListener("pointerup", handleUp)

    return () => {
      ele.removeEventListener("pointerdown", handleDown)
      window.removeEventListener("pointermove", handleMove)
      window.removeEventListener("pointerup", handleUp)
    }
  }, [])
  return (
    <div
      className={clsx("range__point rounded-full relative bg-background-200", {
        "transition-all": !active,
      })}
      style={{
        width: `${(value / max) * 100}%`,
      }}
    >
      <span
        ref={ref}
        className={clsx(
          "absolute range__point--dot top-1/2 inline-block rounded-full",
          {
            "bg-blue-600": !active,
            "bg-blue-800": active,
            "left-0 translate-y-[-50%] translate-x-[-50%]": isRight,
            "right-0 translate-y-[-50%] translate-x-[50%]": !isRight,
          }
        )}
      />
    </div>
  )
}

export default RangePoint
