import React from "react"
import PageSection from "./PageSection"

const StatusDistribution: React.FC<{
  data: { color: string; title: string; value: number }[]
  title: string
}> = ({ data, title }) => {
  const total = data.reduce((acc, item) => {
    acc += item.value
    return acc
  }, 0)
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
    <PageSection title={title} full>
      <div className="px-2.5 py-5 rounded-md bg-foreground relative overflow-hidden">
        <div className="flex justify-around">
          {data.map((item, i) => (
            <StatusItem
              key={i}
              color={item.color}
              title={item.title}
              value={item.value}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full h-2 flex">
          {data.map((item, i) => (
            <div
              key={i}
              style={{
                width: `${(item.value / total) * 100}%`,
                backgroundColor: item.color,
              }}
            ></div>
          ))}
        </div>
      </div>
    </PageSection>
  )
}

export const StatusDistributionSkeleton: React.FC<{
  data: { color: string; title: string; value: number }[]
  title: string
}> = ({ data, title }) => {
  if (data.length === 0) return null
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
      <div className="rounded-md p-[6px_15px] text-sm text-transparent skeleton mb-[6px]">
        {title}
      </div>
      <p className="text-sm skeleton text-transparent rounded-md">
        {value} <span className="text-[12px]  opacity-60">Users</span>
      </p>
    </div>
  )
  return (
    <PageSection title={title} full>
      <div className="px-2.5 py-5 rounded-md relative overflow-hidden bg-foreground">
        <div className="flex justify-around">
          {data.map((item, i) => (
            <StatusItem
              key={i}
              color={item.color}
              title={item.title}
              value={item.value}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full h-2 flex">
          <div className="w-full h-full skeleton"></div>
        </div>
      </div>
    </PageSection>
  )
}

export default StatusDistribution
