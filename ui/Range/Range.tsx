import clsx from "clsx"
import React, { useEffect, useRef, useState } from "react"

import RangePoint from "./RangePoint"

const getWidth = (el: HTMLElement) => el.offsetWidth
const getPercent = (val: number, total: number) => val / total
const percentToVal = (percent: number, total: number) => total * percent

export interface IRangeProps {
  onChange: (r: number) => void
  value: number
  min: number
  max: number
  step?: number
  onMove?: (v: number) => void
}
const Range: React.FC<IRangeProps> = ({
  onChange,
  value,
  min,
  max,
  step,
  onMove,
}) => {
  const [draft, draftSet] = useState(value)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (draft === value) return
    draftSet(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
  return (
    <div ref={ref} className="range w-full flex box-content select-none">
      <div className="bg-sky-300 rounded-full flex-auto"></div>
      <RangePoint
        onMove={(val) => {
          if (!ref.current) return
          const percent = getPercent(val, getWidth(ref.current))
          const result = percentToVal(percent, max)
          let draftClone = draft
          draftClone = value + result

          if (draftClone > max) {
            draftClone = max
          } else if (draftClone < min) {
            draftClone = min
          } else if (step) {
            draftClone -= draftClone % step
          }

          if (draftClone === draft) return
          onMove && onMove(draftClone)
          draftSet(draftClone)
        }}
        onMoved={() => {
          onChange(draft)
        }}
        isRight
        value={max - draft}
        max={max}
      />
    </div>
  )
}

export default Range
