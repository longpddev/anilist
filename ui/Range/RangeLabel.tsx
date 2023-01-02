import { faClose } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"
import React, { useEffect, useRef, useState } from "react"
import Icon from "../Icon"
import Range, { IRangeProps } from "./Range"
interface IRangeLabelProps extends IRangeProps {
  label: string
  className?: string
  onReset?: () => void
}
const RangeLabel: React.FC<IRangeLabelProps> = ({
  className,
  label,
  value,
  onReset,
  ...props
}) => {
  const observerOnChange = useRef<(v: number) => void>(() => {})
  return (
    <div className={clsx(className)}>
      <div className="flex justify-between mb-4 gap-2 ">
        <label className="text-gray-900  text-[15px] font-semibold" htmlFor="">
          {label}
        </label>
        <small className="space-x-2 block text-gray-700 leading-[inherit] ">
          <Value def={value} observerOnChange={observerOnChange}></Value>
          <button
            onClick={() => onReset && onReset()}
            className="leading-[inherit] hover:text-gray-800 inline-block"
          >
            <Icon icon={faClose}></Icon>
          </button>
        </small>
      </div>
      {
        <Range
          value={value}
          onMove={(val) => observerOnChange.current(val)}
          {...props}
        />
      }
    </div>
  )
}

const Value: React.FC<{
  observerOnChange: { current: (v: number) => void }
  def: number
}> = ({ observerOnChange, def }) => {
  const [value, valueSet] = useState(def)
  observerOnChange.current = valueSet
  useEffect(() => {
    if (def === value) return
    valueSet(def)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [def])
  return <span className="leading-[inherit] inline-block">{value}</span>
}

export default RangeLabel
