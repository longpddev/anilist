import React from "react"
import PageSection from "./PageSection"

const StatusDistribution = () => {
  const total = 55405 + 1571 + 497 + 455
  const StatusItem = ({
    color,
    title,
    value,
  }: {
    color: string
    title: string
    value: string | number
  }) => (
    <div className="text-center">
      <div
        className="rounded-md p-[6px_15px] text-sm text-white mb-[6px]"
        style={{
          backgroundColor: color,
        }}
      >
        {title}
      </div>
      <p className="text-sm" style={{ color: color }}>
        {value}{" "}
        <span className="text-[12px] text-text-light opacity-60">Users</span>
      </p>
    </div>
  )
  return (
    <PageSection title="Relations" full>
      <div className="px-2.5 py-5 rounded-md bg-foreground relative overflow-hidden">
        <div className="flex justify-around">
          <StatusItem
            color="rgb(104, 214, 57)"
            title="Planning"
            value={55405}
          />
          <StatusItem color="rgb(2, 169, 255)" title="Current" value={1571} />
          <StatusItem color="rgb(146, 86, 243)" title="Paused" value={497} />
          <StatusItem
            color="rgb(247, 121, 164)"
            title="Completed"
            value={455}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full h-2 flex">
          <div
            style={{
              width: `${(55405 / total) * 100}%`,
              backgroundColor: "rgb(104, 214, 57)",
            }}
          ></div>
          <div
            style={{
              width: `${(1571 / total) * 100}%`,
              backgroundColor: "rgb(2, 169, 255)",
            }}
          ></div>
          <div
            style={{
              width: `${(497 / total) * 100}%`,
              backgroundColor: "rgb(146, 86, 243)",
            }}
          ></div>
          <div
            style={{
              width: `${(455 / total) * 100}%`,
              backgroundColor: "rgb(247, 121, 164)",
            }}
          ></div>
        </div>
      </div>
    </PageSection>
  )
}

export default StatusDistribution
