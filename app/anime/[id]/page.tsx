import { getAnimeById, getAnimeThreadAnimeId } from "@/api/apiQuery"
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
import type { MediaFormat, MediaStatus, MediaType } from "anilist_gql/graphql"
import {
  MediaListColor,
  MediaListLabel,
  MediaRelationLabel,
} from "interface/Anilist"
import Link from "app/context/NLink"
import React, { use } from "react"
import { getMediaLabel, getSourceLabel, getStatusLabel } from "utils/Anilist"
import cacheFetch from "cache/cacheFetch"

const fetchData = cacheFetch(
  async (id: number) => {
    return await Promise.all([
      getAnimeById(id),
      getAnimeThreadAnimeId(id, 1, 4),
    ] as const)
  },
  {
    ttl: 3600_000,
    getKey: (id) => "anime_detail_" + id,
  }
)

const page = async ({ params }: { params: { id: string } }) => {
  const [data, threads] = await fetchData(parseInt(params.id))
  const media = data.Media
  return (
    <div>
      {media?.relations?.edges?.length &&
        media?.relations?.edges?.length > 0 && (
          <PageSection title="Relations">
            {media.relations?.edges?.slice(0, 8).map((item, i) => (
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
                    {
                      MediaRelationLabel[
                        item?.relationType as unknown as keyof typeof MediaRelationLabel
                      ]
                    }
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
        )}

      {media?.characterPreview?.edges &&
        media.characterPreview?.edges.length > 0 && (
          <PageSection title="Characters">
            {media.characterPreview?.edges?.map((item, i) => (
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
        )}

      {media?.staffPreview?.edges && media.staffPreview.edges.length > 0 && (
        <PageSection title="Staff">
          {media.staffPreview.edges.map((item, i) => (
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
      )}

      <StatusDistribution
        title="Relations"
        data={
          media?.stats?.statusDistribution
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
          media?.streamingEpisodes
            ?.map((item) => ({
              site: item?.site as string,
              title: item?.title as string,
              thumbnail: item?.thumbnail as string,
              url: item?.url as string,
            }))
            .slice(0, 8) || []
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
