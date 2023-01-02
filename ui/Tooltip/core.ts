import { useEffect, useRef, useState } from "react"

const TOOLTIP_SPACE = 10
let currentTooltip: {
  anchor: HTMLElement
  title: string
  description: string
} | null = null

let notify = () => {}

export const triggerShow = (
  el: HTMLElement,
  title: string,
  description: string
) => {
  currentTooltip = {
    anchor: el,
    title,
    description,
  }
  notify()
}

export const triggerHidden = () => {
  currentTooltip = null
  notify()
}

const tooltipTemplate = (title: string, description: string) => `
  <div class="tooltip__title">${title}</div>
  <div class="tooltip__content">
    <div class="tooltip__description">
      ${description}
    </div>
  </div>
`

const selectLocation = (tooltipRect: DOMRect, anchorRect: DOMRect) => {
  const { innerWidth: width, innerHeight: height } = window
  const { width: tooltipWidth, height: tooltipHeight } = tooltipRect

  if (anchorRect.top - tooltipHeight - TOOLTIP_SPACE > 0) {
    return {
      position: "top",
      left: anchorRect.left + anchorRect.width / 2 - tooltipWidth / 2,
      top: anchorRect.top - tooltipHeight - TOOLTIP_SPACE,
    }
  }
  if (anchorRect.right + tooltipWidth + TOOLTIP_SPACE < width) {
    return {
      position: "right",
      left: anchorRect.right + TOOLTIP_SPACE,
      top: anchorRect.top + anchorRect.height / 2 - tooltipHeight / 2,
    }
  }
  if (anchorRect.bottom + tooltipHeight + TOOLTIP_SPACE < height) {
    return {
      position: "bottom",
      left: anchorRect.left + anchorRect.width / 2 - tooltipWidth / 2,
      top: anchorRect.bottom + TOOLTIP_SPACE,
    }
  }

  return {
    position: "left",
    left: anchorRect.left - tooltipWidth - TOOLTIP_SPACE,
    top: anchorRect.top + anchorRect.height / 2 - tooltipHeight / 2,
  }
}
export const useTooltipContext = () => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handleShowTooltip = () => {
      if (!currentTooltip) return

      el.innerHTML = tooltipTemplate(
        currentTooltip.title,
        currentTooltip.description
      )

      el.classList.add("visible")

      const tooltipRect = el.getBoundingClientRect()
      const anchorRect = currentTooltip.anchor.getBoundingClientRect()

      const { position, left, top } = selectLocation(tooltipRect, anchorRect)

      el.classList.add(position)
      el.style.transform = `translate(${left}px, ${top}px)`
    }
    const handleHiddenTooltip = () => {
      el.classList.remove("visible", "top", "right", "bottom", "left")
    }

    notify = () => {
      if (currentTooltip) {
        handleShowTooltip()
      } else {
        handleHiddenTooltip()
      }
    }

    return () => {
      notify = () => {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current])

  return {
    ref,
  }
}
