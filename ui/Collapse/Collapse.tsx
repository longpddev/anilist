import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"
import React, { useState } from "react"
import Icon from "../Icon"

interface ICollapseProps {
  children: React.ReactNode
  className?: string
  label: string
}
const Collapse: React.FC<ICollapseProps> = ({ children, className, label }) => {
  const [open, openSet] = useState(false)
  return (
    <div className={clsx(className)}>
      <button
        className="space-x-2 hover:text-gray-900 text-gray-800"
        onClick={() => openSet(!open)}
      >
        <Icon
          className={clsx("transition-all text-[12px]", {
            "rotate-90": open,
            "rotate-0": !open,
          })}
          icon={faChevronRight}
        ></Icon>
        <h3 className="inline-flex font-semibold text-sm ">{label}</h3>
      </button>
      {open && children}
    </div>
  )
}

export default Collapse
