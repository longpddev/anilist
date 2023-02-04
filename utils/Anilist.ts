import type {
  MediaFormat,
  MediaSeason,
  MediaSource,
  MediaStatus,
} from "anilist_gql/graphql"
import {
  FuzzyDate,
  MediaFormatLabel,
  MediaSeasonLabel,
  MediaSourceLabel,
  MediaStatusLabel,
} from "interface/Anilist"
import { convert } from "chromatism"
import dayjs from "dayjs"
interface IRgb {
  r: number
  g: number
  b: number
}

type ColorAnime = {
  text: IRgb
  background: IRgb
}
type ListColor = Array<ColorAnime>

const colorBase = [
  { background: { r: 239, g: 92, b: 92 }, text: { r: 255, g: 244, b: 247 } },
  { background: { r: 253, g: 54, b: 78 }, text: { r: 255, g: 235, b: 235 } },
  { background: { r: 198, g: 34, b: 63 }, text: { r: 255, g: 241, b: 242 } },
  { background: { r: 250, g: 169, b: 202 }, text: { r: 107, g: 37, b: 66 } },
  { background: { r: 227, g: 79, b: 133 }, text: { r: 255, g: 226, b: 237 } },
  { background: { r: 205, g: 185, b: 241 }, text: { r: 60, g: 17, b: 121 } },
  { background: { r: 146, g: 98, b: 233 }, text: { r: 235, g: 222, b: 254 } },
  { background: { r: 118, g: 0, b: 204 }, text: { r: 224, g: 207, b: 255 } },
  { background: { r: 157, g: 185, b: 255 }, text: { r: 40, g: 42, b: 123 } },
  { background: { r: 78, g: 96, b: 182 }, text: { r: 222, g: 227, b: 255 } },
  { background: { r: 47, g: 54, b: 139 }, text: { r: 217, g: 228, b: 255 } },
  { background: { r: 190, g: 227, b: 249 }, text: { r: 39, g: 58, b: 75 } },
  { background: { r: 109, g: 200, b: 241 }, text: { r: 28, g: 74, b: 117 } },
  { background: { r: 54, g: 130, b: 234 }, text: { r: 242, g: 249, b: 253 } },
  { background: { r: 20, g: 64, b: 157 }, text: { r: 222, g: 240, b: 255 } },
  { background: { r: 118, g: 243, b: 233 }, text: { r: 27, g: 96, b: 109 } },
  { background: { r: 1, g: 196, b: 215 }, text: { r: 239, g: 253, b: 255 } },
  { background: { r: 25, g: 77, b: 113 }, text: { r: 211, g: 237, b: 252 } },
  { background: { r: 148, g: 255, b: 169 }, text: { r: 37, g: 100, b: 46 } },
  { background: { r: 155, g: 229, b: 61 }, text: { r: 37, g: 84, b: 20 } },
  { background: { r: 38, g: 127, b: 25 }, text: { r: 240, g: 248, b: 232 } },
  { background: { r: 255, g: 242, b: 126 }, text: { r: 174, g: 78, b: 24 } },
  { background: { r: 236, g: 182, b: 44 }, text: { r: 136, g: 43, b: 15 } },
  { background: { r: 136, g: 43, b: 15 }, text: { r: 254, g: 244, b: 196 } },
  { background: { r: 225, g: 214, b: 160 }, text: { r: 76, g: 64, b: 35 } },
  { background: { r: 242, g: 135, b: 13 }, text: { r: 94, g: 43, b: 12 } },
  { background: { r: 243, g: 84, b: 40 }, text: { r: 255, g: 232, b: 224 } },
]

export function closestColor(color: IRgb, listColor: ListColor) {
  // t = Object(o["convert"])(t).rgb;
  let result: undefined | ColorAnime,
    i = 1 / 0
  listColor.forEach((item, s) => {
    const r = item.background
    let n =
      Math.pow(color.r - r.r, 2) +
      Math.pow(color.g - r.g, 2) +
      Math.pow(color.b - r.b, 2)
    n < i && ((i = n), (result = item))
  })

  if (!result) throw new Error("We cant find closest color")

  return result
}
export const getMediaLabel = (key: MediaFormat) => {
  return MediaFormatLabel[key as unknown as keyof typeof MediaFormatLabel]
}

export const getSeasonLabel = (key: MediaSeason) => {
  return MediaSeasonLabel[key as unknown as keyof typeof MediaSeasonLabel]
}

export const getSourceLabel = (key: MediaSource) => {
  return MediaSourceLabel[key as unknown as keyof typeof MediaSourceLabel]
}

export const getStatusLabel = (key: MediaStatus) => {
  return MediaStatusLabel[key as unknown as keyof typeof MediaStatusLabel]
}

export function getVariableOfTooltipCard(
  color: string,
  isDark: boolean = false
) {
  const a = closestColor(convert(color).rgb, colorBase),
    background = convert(a.background),
    text = convert(a.text),
    r = background.hsl.l > text.hsl.l ? text : background,
    n = convert({
      h: text.hsl.h,
      l: 70,
      s: 80,
    }).csshsl
  return {
    "--media-text": isDark ? n : r.csshsl,
    "--media-background": background.csshsl,
    "--media-background-text": text.csshsl,
    "--media-overlay-text": n,
  }
}

const TOOLTIP_SPACE = 10
export const calcRelation = (
  tooltipRect: DOMRect,
  anchorRect: DOMRect,
  priorities: Array<"top" | "right" | "bottom" | "left"> = [
    "top",
    "right",
    "bottom",
    "left",
  ]
) => {
  const { innerWidth: width, innerHeight: height } = window
  const { width: tooltipWidth, height: tooltipHeight } = tooltipRect

  const a = anchorRect.height / 2 - tooltipHeight / 2
  const b = anchorRect.width / 2 - tooltipWidth / 2
  const axisAvailable = {
    vertical:
      anchorRect.top - a * -1 > 0 && anchorRect.bottom + a * -1 < height,
    horizontal:
      anchorRect.left - b * -1 > 0 && anchorRect.right + b * -1 < width,
  }

  const spaceAvailable = {
    top: anchorRect.top - tooltipHeight - TOOLTIP_SPACE > 0,
    right: anchorRect.right + tooltipWidth + TOOLTIP_SPACE < width,
    bottom: anchorRect.bottom + tooltipHeight + TOOLTIP_SPACE < height,
    left: anchorRect.left - tooltipWidth - TOOLTIP_SPACE > 0,
  }
  const checker = {
    top: () => {
      if (spaceAvailable.top && axisAvailable.horizontal) {
        return {
          position: "top",
          left: anchorRect.left + anchorRect.width / 2 - tooltipWidth / 2,
          top: anchorRect.top - tooltipHeight - TOOLTIP_SPACE,
        }
      }
    },
    right: () => {
      if (spaceAvailable.right && axisAvailable.vertical) {
        return {
          position: "right",
          left: anchorRect.right + TOOLTIP_SPACE,
          top: anchorRect.top + anchorRect.height / 2 - tooltipHeight / 2,
        }
      }
    },
    bottom: () => {
      if (spaceAvailable.bottom && axisAvailable.horizontal) {
        return {
          position: "bottom",
          left: anchorRect.left + anchorRect.width / 2 - tooltipWidth / 2,
          top: anchorRect.bottom + TOOLTIP_SPACE,
        }
      }
    },
    left: () => {
      if (spaceAvailable.left && axisAvailable.vertical) {
        return {
          position: "left",
          left: anchorRect.left - tooltipWidth - TOOLTIP_SPACE,
          top: anchorRect.top + anchorRect.height / 2 - tooltipHeight / 2,
        }
      }
    },
  }

  for (let key of priorities) {
    const result = checker[key]()
    if (result) return result
  }

  console.warn("we cant calc position of: ", tooltipRect, "and: ", anchorRect)
  return {
    position: "",
    left: 0,
    top: 0,
  }
}

export const getColorOfScore = (score: number) => {
  if (score >= 70) return "--color-green"
  if (score >= 50) return "--color-orange"
  return "--color-red"
}

export const getDate = (date: FuzzyDate) => {
  return new Date(date.year, date.month, date.day)
}

export const formatDate = (
  date: FuzzyDate | Date,
  type?: "ShortDate" | "LongDate"
) => {
  let format = "MMM D, YYYY"

  if (type === "LongDate") format = "MM DD YYYY"
  if (!(date instanceof Date)) return dayjs(getDate(date)).format(format)
  return dayjs(date).format(format)
}
