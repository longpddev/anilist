"use client"

import clsx from "clsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useRef, useState } from "react"
import "./Select.scss.css"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { IInput } from "../../interface/input"

type IValue = string | number
interface IOption {
  label: IValue
  value: IValue
  //disable?: boolean
}
interface ISelectProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "children">,
    IInput {
  children: IOption[]
  onChangeValue: (val: IValue) => void
}
const Select: React.FC<ISelectProps> = ({
  children,
  className,
  onChangeValue,
  value,
  dark,
  ...props
}) => {
  const [isFocus, isFocusSet] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const normalize = useRef<{
    mapping: Record<IValue, IOption>
    default: IValue
  }>({
    mapping: {},
    default: "",
  })

  children.forEach((item) => {
    normalize.current.mapping[item.value] = item
  })
  return (
    <div
      ref={ref}
      tabIndex={0}
      onFocus={() => isFocusSet(true)}
      onBlur={() => isFocusSet(false)}
      className={clsx("select", {
        "show-dropdown": isFocus,
      })}
    >
      <div
        className={clsx("select__input relative", className, {
          "bg-background-100": !dark,
          "bg-background-200": dark,
        })}
      >
        <input
          className={"pointer-events-none"}
          type="text"
          readOnly
          value={value}
          {...props}
        />
        <FontAwesomeIcon
          className="top-1/2 right-4 translate-y-[-50%] absolute rotate-90"
          icon={faChevronRight}
        />
      </div>
      <div className="select__contain">
        <div className="select__dropdown">
          {isFocus
            ? children.map((item, index) => {
                return (
                  <div
                    className={clsx("select__dropdown--option", {
                      selected: item.value === value,
                    })}
                    onClick={() => {
                      onChangeValue(item.value)
                      const element = ref.current

                      element && element.blur()
                    }}
                    key={index}
                  >
                    {item.label}
                  </div>
                )
              })
            : null}
        </div>
      </div>
    </div>
  )
}

export default Select
