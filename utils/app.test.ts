import { describe, expect, test } from "vitest"
import { numberToTime } from "./app"

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

describe("number to date", () => {
  test("number to date", () => {
    expect(numberToTime(day), "day").toEqual({ d: 1, h: 0, m: 0, s: 0 })
    expect(numberToTime(hour), "hour").toEqual({ d: 0, h: 1, m: 0, s: 0 })
    expect(numberToTime(hour * 3), "hour").toEqual({ d: 0, h: 3, m: 0, s: 0 })
    expect(numberToTime(minute * 1), "minute").toEqual({
      d: 0,
      h: 0,
      m: 1,
      s: 0,
    })
    expect(numberToTime(minute * 59), "minute").toEqual({
      d: 0,
      h: 0,
      m: 59,
      s: 0,
    })
    expect(numberToTime(second * 3), "second").toEqual({
      d: 0,
      h: 0,
      m: 0,
      s: 3,
    })
    expect(numberToTime(second * 59), "second").toEqual({
      d: 0,
      h: 0,
      m: 0,
      s: 59,
    })
  })
})
