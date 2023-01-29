"use client"

import dynamic from "next/dynamic"
import React from "react"
import { loadStyleChart } from "./core"
import "utils/chartSetup"
import { Line } from "react-chartjs-2"

const ChartLine: React.FC<{
  labels: string[]
  points: number[]
  suggestedMax?: number
  suggestedMin?: number
}> = ({ labels, points, suggestedMax, suggestedMin }) => {
  return (
    <Line
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            anchor: "end",
            align: "top",
            formatter: Math.round,
            color: loadStyleChart("--chart-text-color"),
          },
        },

        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            border: {
              dash: [2],
            },
            display: true,
            ticks: {
              padding: 10,
              color: loadStyleChart("--chart-text-color"),
            },
            grid: {
              color: loadStyleChart("--chart-grid-color"),
              tickLength: 0,
            },
            title: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            border: {
              dash: [2],
            },
            display: true,
            ticks: {
              padding: 10,
              color: loadStyleChart("--chart-text-color"),
            },
            grid: {
              color: loadStyleChart("--chart-grid-color"),
              tickLength: 0,
            },
            title: {
              display: false,
            },
            suggestedMax,
            min: suggestedMin,
          },
        },
      }}
      data={{
        labels: labels,
        datasets: [
          {
            data: points,
            fill: true,
            borderColor: loadStyleChart("--chart-line-color"),
            backgroundColor: (ctx) => {
              var gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300)
              gradient.addColorStop(
                0,
                loadStyleChart("--chart-line-background-from")
              )
              gradient.addColorStop(
                1,
                loadStyleChart("--chart-line-background-to")
              )
              return gradient
            },

            cubicInterpolationMode: "monotone" as const,
            tension: 0.4,
          },
        ],
      }}
    ></Line>
  )
}

export default ChartLine
