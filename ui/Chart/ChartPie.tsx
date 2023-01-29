import React from "react"
import { Pie } from "react-chartjs-2"
import { loadStyleChart } from "./core"
import "utils/chartSetup"

const ChartPie: React.FC<{
  labels: string[]
  points: number[]
  backgroundColor: string[]
}> = ({ labels, points, backgroundColor }) => {
  return (
    <Pie
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            display: false,
          },
        },

        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
      }}
      data={{
        labels: labels,
        datasets: [
          {
            data: points,
            borderWidth: 0.5,
            borderColor: loadStyleChart("--chart-pie-border-color"),
            backgroundColor,
            hoverBorderWidth: 2,
            hoverBorderColor: loadStyleChart("--chart-pie-border-hover-color"),
          },
        ],
      }}
    />
  )
}

export default ChartPie
