export interface TimeFormat {
  d: number
  h: number
  m: number
  s: number
}

export const timeToString = (
  time: TimeFormat,
  isShort: boolean = true
): string => {
  let result = ""

  if (!isShort) {
    if (time.s > 0) {
      result += `${time.s} second`
    }
  }

  if (time.m > 0) result = `${time.m} mins` + (result ? ", " : "") + result
  if (time.h > 0) result = `${time.h} hour` + (result ? ", " : "") + result
  if (time.d > 0) result = `${time.d} day` + (result ? ", " : "") + result
  return result
}

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
