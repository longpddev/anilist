import { PageSection } from "@/pageSetup/AnimeDetail"
import { RecommendationsSkeleton } from "@/pageSetup/AnimeDetail/Recommendations"
import { ReviewsSkeleton } from "@/pageSetup/AnimeDetail/Reviews"
import { StatusDistributionSkeleton } from "@/pageSetup/AnimeDetail/StatusDistribution"
import { ThreadsSkeleton } from "@/pageSetup/AnimeDetail/Threads"
import { WatchSkeleton } from "@/pageSetup/AnimeDetail/Watch"
import Card from "@/ui/Card"
import { CardContentLeftSkeleton } from "@/ui/Card/CardContentLeft"
import { CardContentRightSkeleton } from "@/ui/Card/CardContentRight"
import { MediaType } from "anilist_gql/graphql"
import React from "react"

const loop = (count: number) => Array(count).fill(1)
const Loading = () => {
  return (
    <div>
      <PageSection title="Relations">
        {loop(4).map((item, i) => (
          <Card key={i}>
            <CardContentLeftSkeleton
              src={undefined}
              alt=""
              tags={["jdhfkjsdf"]}
            >
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
          type: MediaType.Anime,
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
}

export default Loading
