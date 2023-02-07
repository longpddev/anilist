export interface TimeFormat {
  d: number
  h: number
  m: number
  s: number
}

export const timeToList = (
  time: TimeFormat,
  isShort: boolean = true
): string[] => {
  let result = []

  const addSOrNot = (str: string, num: number) => (num > 1 ? str + "s" : str)

  if (!isShort) {
    if (time.s > 0) {
      result.push(`${time.s} ${addSOrNot("second", time.s)}`)
    }
  }

  if (time.m > 0) result.push(`${time.m} ${addSOrNot("min", time.m)}`)
  if (time.h > 0) result.push(`${time.h} ${addSOrNot("hour", time.h)}`)
  if (time.d > 0) result.push(`${time.d} ${addSOrNot("day", time.d)}`)

  return result.reverse()
}

export const timeToString = (
  time: TimeFormat,
  isShort: boolean = true
): string => timeToList(time, isShort).join(", ")

/**
 *
 * @param num as millisecond
 * @returns
 */
export const numberToTime = (num: number): TimeFormat => {
  let h = 0,
    m = 0,
    s = 0,
    d = 0,
    tmp = 0
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  let retain = num

  if (retain >= day) {
    tmp = retain % day
    d = (retain - tmp) / day
    retain = tmp
  }

  if (retain >= hour) {
    tmp = retain % hour
    h = (retain - tmp) / hour
    retain = tmp
  }

  if (retain >= minute) {
    tmp = retain % minute
    m = (retain - tmp) / minute
    retain = tmp
  }

  if (retain >= second) {
    tmp = retain % second
    s = (retain - tmp) / second
    retain = tmp
  }

  return {
    d,
    h,
    m,
    s,
  }
}

export const runOnce = <F extends (...a: any) => any>(cb: F): F => {
  let cache: ReturnType<F>
  return function (...args) {
    if (!cache) cache = cb(...args)
    return cache
  } as F
}

export const sleep = (time: number) =>
  new Promise((res) => setTimeout(res, time))

export const loop = (count: number) =>
  Array(count)
    .fill(1)
    .map((_, i) => i)
