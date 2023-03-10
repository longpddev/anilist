import { faClose } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"
import React from "react"
import { IInput } from "../../interface/input"
import Icon from "../Icon"
import "./Input.scss.css"

interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    IInput {
  icon?: React.ReactElement
  onReset?: () => void
}
const Input: React.FC<IInputProps> = ({
  className,
  icon,
  value,
  onReset,
  dark,
  ...props
}) => {
  return (
    <div
      className={clsx(className, "input", {
        "bg-background-100": !dark,
        "bg-background-200": dark,
      })}
    >
      {icon && <button className="inline-flex">{icon}</button>}
      <input value={value} {...props} />
      {Boolean(value) && (
        <button className="inline-flex" onClick={onReset}>
          {<Icon icon={faClose}></Icon>}
        </button>
      )}
    </div>
  )
}

export default Input
