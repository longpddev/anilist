import { getAnimeById, getAnimeThreadAnimeId } from "@/api/test"
import {
  PageSection,
  Recommendations,
  Reviews,
  StatusDistribution,
  Threads,
  Trailer,
  Watch,
} from "@/pageSetup/AnimeDetail"
import Card, { CardContentLeft, CardContentRight } from "@/ui/Card"
import { MediaFormat, MediaStatus, MediaType } from "anilist_gql/graphql"
import { MediaListColor, MediaListLabel } from "interface/Anilist"
import Link from "next/link"
import React from "react"
import { getMediaLabel, getSourceLabel, getStatusLabel } from "utils/Anilist"

const page = async ({ params }: { params: { id: string } }) => {
  const data = await getAnimeById(parseInt(params.id))
  const threads = await getAnimeThreadAnimeId(parseInt(params.id), 1, 4)
  const media = data.Media
  return (
    <div>
      <PageSection title="Relations">
        {media &&
          media.relations?.edges?.map((item, i) => (
            <Card key={i}>
              <CardContentLeft
                src={item?.node?.coverImage?.large}
                alt=""
                tags={[
                  getMediaLabel(item?.node?.format as MediaFormat),
                  getStatusLabel(item?.node?.status as MediaStatus),
                ].filter(Boolean)}
              >
                <small className="text-[12px] text-blue lowercase font-medium block mb-2">
                  {item?.relationType}
                </small>
                <Link
                  href={"/"}
                  title={item?.node?.title?.userPreferred || ""}
                  className="text-text-lighter line-clamp-1 hover:text-blue text-sm "
                >
                  {item?.node?.title?.userPreferred}
                </Link>
              </CardContentLeft>
            </Card>
          ))}
      </PageSection>
      <PageSection title="Characters">
        {media &&
          media.characterPreview?.edges?.map((item, i) => (
            <Card key={i}>
              <CardContentLeft
                height={80}
                tags={[item?.role?.toLowerCase() || ""]}
                alt=""
                src={item?.node?.image?.large}
              >
                <Link
                  href={"/"}
                  className="text-text-lighter hover:text-blue text-[12px] line-clamp-1"
                >
                  {item?.node?.name?.userPreferred}
                </Link>
              </CardContentLeft>
              <CardContentRight
                height={80}
                tags={[item?.voiceActors?.[0]?.language?.toLowerCase() || ""]}
                alt=""
                src={item?.voiceActors?.[0]?.image?.large}
              >
                <Link
                  href={"/"}
                  className="text-text-lighter hover:text-blue text-[12px] line-clamp-3"
                >
                  {item?.voiceActors?.[0]?.name?.userPreferred}
                </Link>
              </CardContentRight>
            </Card>
          ))}
      </PageSection>
      <PageSection title="Staff">
        {media &&
          media.staffPreview?.edges?.map((item, i) => (
            <Card key={i}>
              <CardContentLeft
                height={70}
                tags={[item?.role?.toLowerCase() || ""]}
                alt=""
                src={item?.node?.image?.large}
              >
                <Link
                  href={"/"}
                  className="text-text-lighter hover:text-blue text-[12px] line-clamp-1"
                >
                  {item?.node?.name?.userPreferred}
                </Link>
              </CardContentLeft>
            </Card>
          ))}
      </PageSection>
      <StatusDistribution
        data={
          media?.stats?.statusDistribution
            ?.map((item) => ({
              title:
                MediaListLabel[item?.status as keyof typeof MediaListLabel],
              color:
                MediaListColor[item?.status as keyof typeof MediaListColor],
              value: item?.amount || 0,
            }))
            .sort((a, b) => b.value - a.value) || []
        }
      />

      {media && media.trailer?.site === "youtube" && media.trailer.id && (
        <Trailer code={media.trailer.id} />
      )}
      <Threads
        data={
          threads.Page?.threads?.map((item) => ({
            id: item?.id || 0,
            commentId: item?.replyCommentId || 0,
            title: item?.title || "",
            userAvatar: item?.user?.avatar?.large || "",
            userName: item?.user?.name || "",
            repliedAt: item?.repliedAt || 0,
            tags:
              item?.categories?.map((tag) => ({
                name: tag?.name || "",
                id: tag?.id || 0,
              })) || [],
          })) || []
        }
      />
      <Watch
        data={
          media?.streamingEpisodes?.map((item) => ({
            site: item?.site as string,
            title: item?.title as string,
            thumbnail: item?.thumbnail as string,
            url: item?.url as string,
          })) || []
        }
      />
      <Recommendations
        data={
          media?.recommendations?.nodes?.map((item) => ({
            title: item?.mediaRecommendation?.title?.userPreferred || "",
            id: item?.mediaRecommendation?.id || 0,
            type: item?.mediaRecommendation?.type as MediaType,
            src: item?.mediaRecommendation?.coverImage?.large || "",
          })) || []
        }
      />
      <Reviews
        data={
          media?.reviewPreview?.nodes?.map((item) => ({
            username: item?.user?.name || "",
            src: item?.user?.avatar?.large || undefined,
            id: item?.id || 0,
            like: item?.rating || 0,
            summary: item?.summary || "",
          })) || []
        }
      />
    </div>
  )
}
export default page
