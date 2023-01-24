"use client"

import React, { use, useEffect } from "react"
import {
  useTooltipContext,
  triggerHidden,
  triggerShow,
  getElement,
} from "./core"
import throttle from "lodash/throttle"
import "./Tooltip.scss.css"
const TooltipContent = () => {
  const { ref } = useTooltipContext()

  useEffect(() => {
    const dataSet = "tooltip"
    const dataSetDetail = `${dataSet}Detail`
    const dataSetName = `data-${dataSet}`
    const tooltipSelector = `[${dataSetName}]`

    const handleEnter = throttle((e: PointerEvent) => {
      const el = e.target as HTMLElement | null
      if (!el) return
      const tooltip = el.closest(tooltipSelector) as HTMLElement | null
      if (getElement() === tooltip) return
      triggerHidden()
      if (!tooltip) return
      triggerShow(
        tooltip,
        tooltip.dataset[dataSet] || "",
        tooltip.dataset[dataSetDetail] || ""
      )
    }, 200)

    document.body.addEventListener("pointermove", handleEnter)
    return () => {
      document.body.removeEventListener("pointermove", handleEnter)
    }
  }, [])
  return (
    <div ref={ref} className="tooltip">
      &nbsp;
      {/** prevent message error when server renders by adding space in empty div*/}
    </div>
  )
}

export default TooltipContent
