"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Filler,
  Tooltip,
} from "chart.js"
import ChartDataLabels from "chartjs-plugin-datalabels"
ChartJS.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  ChartDataLabels
)

export default ChartJS
