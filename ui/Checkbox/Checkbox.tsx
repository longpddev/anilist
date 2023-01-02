import { faCheck } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"
import { check } from "prettier"
import React from "react"
import Icon from "../Icon"
import "./Checkbox.scss.css"

interface ICheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onCheck: (v: boolean) => void
}
const Checkbox: React.FC<ICheckboxProps> = ({
  className,
  type,
  checked,
  onCheck,
  id,
  ...props
}) => {
  return (
    <div className="checkbox inline-block relative">
      <input
        className="opacity-0 relative z-0"
        type="checkbox"
        onChange={(e) => {
          onCheck(e.target.checked)
        }}
        id={id}
        checked={checked}
        {...props}
      />
      <button
        onClick={() => onCheck(!checked)}
        className={clsx("absolute inset-0  w-full h-full", {
          unchecked: !checked,
          checked: checked,
        })}
      >
        {checked && <Icon className="position-center" icon={faCheck}></Icon>}
      </button>
    </div>
  )
}

export default Checkbox
