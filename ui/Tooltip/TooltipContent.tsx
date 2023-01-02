"use client"

import React, { useEffect } from "react"
import { useTooltipContext } from "./core"
import "./Tooltip.scss.css"
const TooltipContent = () => {
  const { ref } = useTooltipContext()
  return <div ref={ref} className="tooltip" />
}

export default TooltipContent
