import React from "react"
import PageSection from "@/ui/PageSection"
import cacheFetch from "cache/cacheFetch"
import fetchGql from "@/api/server"
import { ANIME_ACTIVITY, ANIME_THREAD } from "gql/animeDetail"

import Threads from "pageSetup/AnimeDetail/Threads"
import SocialItem from "../../../../ui/SocialItem"

const fetchDataActivity = cacheFetch(
  (id: number) => fetchGql(ANIME_ACTIVITY, { id, page: 1 }),
  { ttl: 120_000, getKey: (id) => `anime_detail_activity_${id}` }
)

const fetchDataThread = cacheFetch(
  (id: number) => fetchGql(ANIME_THREAD, { id, page: 1 }),
  { ttl: 120_000, getKey: (id) => `anime_detail_thread_${id}` }
)

const page = async ({ params }: { params: { id: string } }) => {
  const [initDataActivity, initDataThread] = await Promise.all([
    fetchDataActivity(parseInt(params.id)),
    fetchDataThread(parseInt(params.id)),
  ])

  const activities = initDataActivity.Page?.activities
  const thread = initDataThread.Page?.threads
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {activities && (
        <div>
          <PageSection title="Recent Activity" full>
            {activities.map((item, i) =>
              item && "id" in item ? (
                <SocialItem
                  key={i}
                  data={{
                    mediaId: item.media?.id || 0,
                    mediaName: item.media?.title?.userPreferred || "",
                    mediaSrc: item.media?.coverImage?.large || undefined,
                    status: `${item.status || ""} ${
                      item.progress ? `${item.progress} of` : ""
                    }`,
                    time: item.createdAt * 1000,
                    userName: item.user?.name || "",
                    userSrc: item.user?.avatar?.large || undefined,
                    id: item.id,
                    replyCount: item.replyCount || 0,
                    likeCount: item.likeCount || 0,
                  }}
                />
              ) : null
            )}
          </PageSection>
        </div>
      )}

      {thread && (
        <div>
          <Threads
            full
            data={thread.map((item) => ({
              id: item?.id || 0,
              commentId: item?.replyCommentId || 0,
              title: item?.title || "",
              userAvatar: item?.user?.avatar?.large || undefined,
              userName: item?.user?.name || "",
              repliedAt: item?.repliedAt || 0,
              tags:
                item?.categories?.map((tag) => ({
                  name: tag?.name || "",
                  id: tag?.id || 0,
                })) || [],
            }))}
          />
        </div>
      )}
    </div>
  )
}

export default page
