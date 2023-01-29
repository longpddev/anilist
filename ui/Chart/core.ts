import loadStyle from "utils/loadStyle"

export const loadStyleChart = <V extends string>(key: string, def?: V) =>
  loadStyle("chart-js", key, def)
