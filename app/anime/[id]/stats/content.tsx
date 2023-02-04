"use client"

import dynamic from "next/dynamic"
import React from "react"
import { PageSection, StatusDistribution } from "@/pageSetup/AnimeDetail"
import Ranking from "@/pageSetup/AnimeDetail/Ranking"
import { MediaListColor, MediaListLabel } from "interface/Anilist"
import { ANIME_STATS_TYPE } from "gql/animeDetail"
import dayjs from "utils/dayjs"
const ChartLine = dynamic(() => import("@/ui/Chart/ChartLine"), {
  ssr: false,
})

const ChartPie = dynamic(() => import("@/ui/Chart/ChartPie"), {
  ssr: false,
})
const Content: React.FC<{
  data: ANIME_STATS_TYPE
}> = ({ data }) => {
  return (
    <div>
      <PageSection title="Rankings" full>
        <div className="grid grid-cols-2 gap-4">
          {data.Media?.rankings?.map((item, i) => (
            <Ranking key={i} type={item?.type || "POPULAR"} href="/">
              #{item?.rank} {item?.context}
            </Ranking>
          ))}
        </div>
      </PageSection>

      <PageSection title="Recent Activity Per Day" full>
        <div className="h-[300px] bg-foreground rounded-md">
          {data.Media?.trends?.nodes &&
            (() => {
              const nodes = data.Media.trends.nodes
              const currentTime = new Date().getTime()
              return (
                <ChartLine
                  labels={nodes.map((i) =>
                    dayjs
                      .duration(
                        currentTime -
                          new Date((i?.date as number) * 1000).getTime()
                      )
                      .format("D [th]")
                  )}
                  points={nodes.map((i) => i?.trending as number)}
                />
              )
            })()}
        </div>
      </PageSection>

      {data.Media?.airingTrends?.nodes &&
        (() => {
          const nodes = data.Media.airingTrends.nodes
            .filter((i) => Boolean(i?.episode))
            .reverse()
          if (nodes.length === 0) return null
          return (
            <PageSection title="Airing Score Progression" full>
              <div className="h-[200px] bg-foreground rounded-md">
                <ChartLine
                  suggestedMax={100}
                  labels={nodes.map((i) => i?.episode?.toString() || "")}
                  points={nodes.map((i) => i?.averageScore as number)}
                />
              </div>
            </PageSection>
          )
        })()}

      {data.Media?.airingTrends?.nodes &&
        (() => {
          const nodes = data.Media.airingTrends.nodes
            .filter((i) => Boolean(i?.episode))
            .reverse()

          if (nodes.length === 0) return null

          const points = nodes.map((i) => i?.inProgress as number)
          const max = points.reduce((acc, item) => {
            return Math.max(acc, item)
          }, points[0])
          const min = points.reduce((acc, item) => {
            return Math.min(acc, item)
          }, points[0])
          return (
            <PageSection title="Airing Watchers Progression" full>
              <div className="h-[200px] bg-foreground rounded-md">
                <ChartLine
                  suggestedMax={max * 1.1}
                  suggestedMin={Math.round(min * 0.8)}
                  labels={nodes.map((i) => i?.episode?.toString() || "")}
                  points={nodes.map((i) => i?.inProgress as number)}
                />{" "}
              </div>
            </PageSection>
          )
        })()}

      <StatusDistribution
        title="Status Distribution"
        data={
          data.Media?.distribution?.status
            ?.map((item) => ({
              title:
                MediaListLabel[
                  item?.status as unknown as keyof typeof MediaListLabel
                ],
              color:
                MediaListColor[
                  item?.status as unknown as keyof typeof MediaListColor
                ],
              value: item?.amount || 0,
            }))
            .sort((a, b) => b.value - a.value) || []
        }
      ></StatusDistribution>
      <PageSection title="Score Distribution" full>
        <div className="h-[300px] ">
          {data.Media?.distribution?.score &&
            (() => {
              const nodes = data.Media?.distribution?.score
              const label = nodes.map((i) => i?.score || 10)
              return (
                <ChartPie
                  backgroundColor={label.map((i) => `hsl(${i}, 65%, 50%)`)}
                  labels={label.map((i) => `${i}% User rating`)}
                  points={nodes.map((i) => i?.amount as number)}
                />
              )
            })()}
        </div>
      </PageSection>
    </div>
  )
}

export default Content
