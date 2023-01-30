"use client"

import { getAnimeReviewsByAnimeId } from "@/api/apiQuery"
import useInfinityLoading from "@/hooks/useInfinityLoading"
import { ReviewItem } from "@/pageSetup/AnimeDetail"
import { ReviewItemSkeleton } from "@/pageSetup/AnimeDetail/ReviewItem"
import { ANIME_REVIEWS_TYPE } from "gql/animeDetail"
import React from "react"
import { loop } from "utils/app"

const Content: React.FC<{ initData: ANIME_REVIEWS_TYPE; animeId: number }> = ({
  initData,
  animeId,
}) => {
  const { list, loading, ref } = useInfinityLoading(
    (page: number) => getAnimeReviewsByAnimeId(animeId, page),
    initData,
    {
      selector: (data) => data.Media?.reviews?.nodes || [],
      currentPageSelector: (data) =>
        data?.Media?.reviews?.pageInfo?.currentPage || 1,
      hasNextPageSelector: (data) =>
        data?.Media?.reviews?.pageInfo?.hasNextPage || false,
    }
  )
  return (
    <>
      <div className="grid grid-cols-1 gap-4 max-w-[700px] mx-auto">
        {list.map((item, i) => (
          <ReviewItem
            key={i}
            data={{
              src: item?.user?.avatar?.large || undefined,
              like: item?.ratingAmount || 0,
              summary: item?.summary || "",
              id: item?.id || 0,
              username: item?.user?.name || "",
            }}
          />
        ))}
      </div>
      <div
        className="grid grid-cols-1 gap-4 max-w-[700px] mx-auto mt-4"
        ref={ref}
      >
        {loading
          ? loop(4).map((item, i) => (
              <ReviewItemSkeleton
                key={i}
                data={{
                  src: undefined,
                  like: 0,
                  summary: "slkjflslkasj las klalks lkas j ldjalskd j",
                  id: 0,
                  username: "asjdhjkas asd",
                }}
              />
            ))
          : null}
      </div>
    </>
  )
}

export default Content
