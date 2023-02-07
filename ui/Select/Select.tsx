"use client"

import clsx from "clsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useRef, useState } from "react"
import "./Select.scss.css"
import { faChevronRight, faClose } from "@fortawesome/free-solid-svg-icons"
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
  onChangeValue?: (val: IValue) => void
  defaultVal?: IValue
  value?: IValue
  onResetVal?: (v: IValue) => void
  wrapClass?: string
}
const Select: React.FC<ISelectProps> = ({
  children,
  className,
  onChangeValue,
  value,
  defaultVal,
  onResetVal,
  wrapClass,
  dark,
  ...props
}) => {
  const [isFocus, isFocusSet] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const normalize = useRef<{
    mapping: Record<IValue, IOption>
    order: IOption[]
    default: IValue | undefined
  }>({
    mapping: {},
    order: [],
    default: defaultVal,
  })

  normalize.current.order = []
  children.forEach((item, i) => {
    normalize.current.mapping[item.value] = item
    normalize.current.order.push(item)
  })

  const handleKeydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!value) return
    const key = e.key
    let result = value
    const order = normalize.current.order
    let currentIndex = order.findIndex((item) => item.value === value)
    const getAt = (position: number) =>
      order.length > position
        ? (order.at(position) as IOption)
        : (order.at(order.length - position) as IOption)

    currentIndex = currentIndex === -1 ? 0 : currentIndex
    const nextItem = getAt(currentIndex + 1)
    const prevItem = getAt(currentIndex - 1)

    const element = ref.current

    switch (key) {
      case "ArrowDown":
        result = nextItem.value
        break
      case "ArrowUp":
        result = prevItem?.value
        break
      case "Escape":
        isFocusSet(false)
        break
      case "Enter":
        isFocusSet(!isFocus)
        break
    }

    if (result !== value) onChangeValue && onChangeValue(result)
    e.preventDefault()
  }
  return (
    <div
      ref={ref}
      tabIndex={0}
      onFocus={() => isFocusSet(true)}
      onBlur={() => isFocusSet(false)}
      className={clsx("select", wrapClass, {
        "show-dropdown": isFocus,
      })}
      onKeyDown={handleKeydown}
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

        {defaultVal && value !== defaultVal ? (
          <button
            className={clsx(
              "top-1/2 right-3 cursor-pointer rounded-full p-px w-4 h-4 hover:text-blue translate-y-[-50%] absolute text-[12px] transition-all"
            )}
            onClick={() => {
              onResetVal && onResetVal(defaultVal)
              onChangeValue && onChangeValue(defaultVal)
            }}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        ) : (
          <FontAwesomeIcon
            className={clsx(
              "top-1/2 right-4 translate-y-[-50%] absolute text-[12px] transition-all",
              {
                "rotate-90": !isFocus,
                "-rotate-90": isFocus,
              }
            )}
            icon={faChevronRight}
          />
        )}
      </div>
      <div className="select__contain">
        {isFocus ? (
          <div className="select__dropdown">
            {children.map((item, index) => {
              return (
                <div
                  className={clsx("select__dropdown--option", {
                    selected: item.value === value,
                  })}
                  onClick={() => {
                    onChangeValue && onChangeValue(item.value)
                    const element = ref.current

                    element && element.blur()
                  }}
                  key={index}
                >
                  {item.label}
                </div>
              )
            })}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Select
