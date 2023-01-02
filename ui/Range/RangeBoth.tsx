import clsx from "clsx"
import React, { useEffect, useRef, useState } from "react"

import RangePoint from "./RangePoint"

export type IRange = [number, number]

const getWidth = (el: HTMLElement) => el.offsetWidth
const getPercent = (val: number, total: number) => val / total
const percentToVal = (percent: number, total: number) => total * percent

export interface IRangeBothProps {
  onChange: (r: IRange) => void
  value: IRange
  min: number
  max: number
  step?: number
  onMove?: (v: IRange) => void
}
const RangeBoth: React.FC<IRangeBothProps> = ({
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
    if (draft[0] === value[0] && draft[1] == value[1]) return
    draftSet([...value])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
  return (
    <div ref={ref} className="range w-full flex box-content select-none">
      <RangePoint
        onMove={(val) => {
          if (!ref.current) return
          const percent = getPercent(val, getWidth(ref.current))
          const result = percentToVal(percent, max)
          const draftClone: IRange = [...draft]
          draftClone[0] = value[0] + result

          if (draftClone[0] < min) {
            draftClone[0] = min
          } else if (draftClone[0] > draft[1]) {
            draftClone[0] = draft[1]
          } else if (step) {
            draftClone[0] -= draftClone[0] % step
          }

          if (draftClone[0] === draft[0]) return

          onMove && onMove(draftClone)
          draftSet(draftClone)
        }}
        onMoved={() => {
          console.log("left point onMoved")
          onChange([...draft])
        }}
        value={draft[0]}
        max={max}
      />
      <div className="bg-sky-300 flex-auto"></div>
      <RangePoint
        onMove={(val) => {
          if (!ref.current) return
          const percent = getPercent(val, getWidth(ref.current))
          const result = percentToVal(percent, max)
          const draftClone: IRange = [...draft]
          draftClone[1] = value[1] + result

          if (draftClone[1] > max) {
            draftClone[1] = max
          } else if (draftClone[1] < draft[0]) {
            draftClone[1] = draft[0]
          } else if (step) {
            draftClone[1] -= draftClone[1] % step
          }

          if (draftClone[1] === draft[1]) return

          onMove && onMove(draftClone)
          draftSet(draftClone)
        }}
        onMoved={() => {
          console.log("right point onMoved")
          onChange([...draft])
        }}
        isRight
        value={max - draft[1]}
        max={max}
      />
    </div>
  )
}

export default RangeBoth
