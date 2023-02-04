"use client"

import { PageSection } from "@/pageSetup/AnimeDetail"
import { RecommendationsSkeleton } from "@/pageSetup/AnimeDetail/Recommendations"
import { ReviewsSkeleton } from "@/pageSetup/AnimeDetail/Reviews"
import { StatusDistributionSkeleton } from "@/pageSetup/AnimeDetail/StatusDistribution"
import { ThreadsSkeleton } from "@/pageSetup/AnimeDetail/Threads"
import { WatchSkeleton } from "@/pageSetup/AnimeDetail/Watch"
import Card from "@/ui/Card"
import { CardContentLeftSkeleton } from "@/ui/Card/CardContentLeft"
import { CardContentRightSkeleton } from "@/ui/Card/CardContentRight"
import type { MediaType } from "anilist_gql/graphql"
import { usePathname, useSelectedLayoutSegment } from "next/navigation"
import React from "react"
import { loop } from "utils/app"

import CharacterLoading from "./characters/loading"
import ReviewsLoading from "./reviews/loading"
import SocialLoading from "./social/loading"
import StaffLoading from "./staff/loading"
import StatsLoading from "./stats/loading"
import WatchLoading from "./watch/loading"

const Main = () => (
  <div>
    <PageSection title="Relations">
      {loop(4).map((item, i) => (
        <Card key={i}>
          <CardContentLeftSkeleton src={undefined} alt="" tags={["jdhfkjsdf"]}>
            <small className="text-[12px] text-transparent skeleton lowercase font-medium block mb-2">
              source
            </small>
            <p className="text-transparent skeleton line-clamp-1 text-sm ">
              Lorem ipsum, dolor sit amet
            </p>
          </CardContentLeftSkeleton>
        </Card>
      ))}
    </PageSection>
    <PageSection title="Characters">
      {loop(4).map((item, i) => (
        <Card key={i}>
          <CardContentLeftSkeleton
            height={80}
            tags={["jdhfkjsdf"]}
            alt=""
            src={undefined}
          >
            <p className="text-transparent skeleton line-clamp-1 text-sm ">
              Lorem ipsum, dolor sit amet
            </p>
          </CardContentLeftSkeleton>
          <CardContentRightSkeleton
            height={80}
            tags={["jdhfkjsdf"]}
            alt=""
            src={undefined}
          >
            <p className="text-transparent skeleton line-clamp-1 text-sm ">
              Lorem ipsum, dolor sit amet
            </p>
          </CardContentRightSkeleton>
        </Card>
      ))}
    </PageSection>
    <PageSection title="Staff">
      {loop(4).map((item, i) => (
        <Card key={i}>
          <CardContentLeftSkeleton
            height={70}
            tags={["jdhfkjsdf"]}
            alt=""
            src={undefined}
          >
            <p className="text-transparent skeleton line-clamp-1 text-sm ">
              Lorem ipsum, dolor sit amet
            </p>
          </CardContentLeftSkeleton>
        </Card>
      ))}
    </PageSection>
    <StatusDistributionSkeleton
      title="Relations"
      data={loop(4).map((item) => ({
        title: "sdf",
        color: "#fff",
        value: 10,
      }))}
    />
    <ThreadsSkeleton
      data={
        loop(2).map((item) => ({
          id: 0,
          commentId: 0,
          title:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          userAvatar: "sdflkj",
          userName: "Lorem ipsum, dolor sit amet consectetur",
          repliedAt: 0,
          tags:
            loop(2).map((tag) => ({
              name: "sdkflj",
              id: 0,
            })) || [],
        })) || []
      }
    />
    <WatchSkeleton
      data={
        loop(4).map((item) => ({
          site: "slkdf",
          title: "slkdjf",
          thumbnail: undefined,
          url: "sdjfl",
        })) || []
      }
    />
    <RecommendationsSkeleton
      data={loop(4).map((item) => ({
        title: "skdjf skjdhfj",
        id: 0,
        type: "Anime" as MediaType,
        src: undefined,
      }))}
    />
    <ReviewsSkeleton
      data={
        loop(2).map((item) => ({
          username: "sjkdhf",
          src: undefined,
          id: 0,
          like: 100,
          summary:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, ipsa illum amet veniam distinctio libero id quas aut excepturi omnis qui numquam delectus. Sit deleniti consequatur exercitationem tempore sint? Doloribus.",
        })) || []
      }
    />
  </div>
)
const Loading = () => {
  const path = usePathname()
  const segment = useSelectedLayoutSegment()

  switch (segment) {
    case "characters":
      return <CharacterLoading />
    case "reviews":
      return <ReviewsLoading />
    case "social":
      return <SocialLoading />
    case "staff":
      return <StaffLoading />
    case "stats":
      return <StatsLoading />
    case "watch":
      return <WatchLoading />
    default:
      return <Main />
  }
}

export default Loading
