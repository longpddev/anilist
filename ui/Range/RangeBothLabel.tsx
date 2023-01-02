import { faClose } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"
import React, { useEffect, useRef, useState } from "react"
import Icon from "../Icon"
import RangeBoth, { IRange, IRangeBothProps } from "./RangeBoth"
interface IRangeBothLabelProps extends IRangeBothProps {
  label: string
  className?: string
  onReset?: () => void
}
const RangeBothLabel: React.FC<IRangeBothLabelProps> = ({
  className,
  label,
  value,
  onReset,
  ...props
}) => {
  const observerOnChange = useRef<(v: IRange) => void>(() => {})
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
        <RangeBoth
          value={value}
          onMove={(val) => observerOnChange.current(val)}
          {...props}
        />
      }
    </div>
  )
}

const Value: React.FC<{
  observerOnChange: { current: (v: IRange) => void }
  def: IRange
}> = ({ observerOnChange, def }) => {
  const [value, valueSet] = useState(def)
  observerOnChange.current = valueSet
  useEffect(() => {
    if (def[0] === value[0] && def[1] === value[1]) return
    valueSet(def)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, def)
  return (
    <span className="leading-[inherit] inline-block">
      {value[0]} - {value[1]}
    </span>
  )
}

export default RangeBothLabel
