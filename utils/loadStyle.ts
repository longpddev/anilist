"use"

const styleCache = {} as Record<string, Record<string, string>>

export default function loadStyle<V extends string | number>(
  style_key: string,
  key: string,
  def?: V
): V {
  if (!(style_key in styleCache)) {
    styleCache[style_key] = {}
  }
  let style = styleCache[style_key]
  if (!(key in style)) {
    const divTmp = document.createElement("div")
    divTmp.classList.add(style_key)
    document.body.appendChild(divTmp)
    const val = getComputedStyle(divTmp).getPropertyValue(key)
    style[key] = val
    divTmp.remove()
  }

  return (style[key] || def) as V
}
