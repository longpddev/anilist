import { useEffect, useRef, useState } from "react"
import { calcRelation } from "utils/Anilist"

let currentTooltip: {
  anchor: HTMLElement
  title: string
  description: string
} | null = null

let notify = () => {}

export const getElement = () => currentTooltip?.anchor

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
  ${
    typeof title === "string" && title.trim().length > 0
      ? `<div class="tooltip__title">${title}</div>`
      : ""
  }
  ${
    typeof description === "string" && description.trim().length > 0
      ? `<div class="tooltip__content">
        <div class="tooltip__description">
          ${description}
        </div>
      </div>`
      : ""
  }
  
`

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

      const { position, left, top } = calcRelation(tooltipRect, anchorRect)

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
