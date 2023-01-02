import { title } from "process"
import React from "react"
import { triggerHidden, triggerShow } from "./core"

const Tooltip: React.FC<{
  children: React.ReactElement
  title: string
  description: string
}> = ({ children, title, description }) => {
  return (
    <div
      onPointerEnter={(e) =>
        e.target && triggerShow(e.target as HTMLDivElement, title, description)
      }
      onPointerLeave={() => triggerHidden()}
    >
      {children}
    </div>
  )
}

export default Tooltip
