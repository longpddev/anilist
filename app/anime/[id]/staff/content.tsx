"use client"

import { getStaffByAnimeId } from "@/api/apiQuery"
import useInfinityLoading from "@/hooks/useInfinityLoading"
import Card, { CardContentLeft } from "@/ui/Card"
import { CardContentLeftSkeleton } from "@/ui/Card/CardContentLeft"
import { STAFF_TYPE } from "gql/staff"
import Link from "app/context/NLink"
import React from "react"
import StaffItem, { StaffItemSkeleton } from "./StaffItem"

const Content: React.FC<{
  initData: STAFF_TYPE
  animeId: number
}> = ({ initData, animeId }) => {
  const { ref, list, loading, error } = useInfinityLoading(
    (page) => getStaffByAnimeId(animeId, page, 20),
    initData,
    {
      selector: (data) => data.Media?.staff?.edges || [],
      currentPageSelector: (data) =>
        data.Media?.staff?.pageInfo?.currentPage || 1,
      hasNextPageSelector: (data) =>
        data.Media?.staff?.pageInfo?.hasNextPage || false,
    }
  )
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {list.map((item, i) => (
          <StaffItem
            data={{
              id: item?.node?.id || 0,
              name: item?.node?.name?.userPreferred || "",
              src: item?.node?.image?.large || undefined,
              tags: [item?.role || ""].filter(Boolean),
            }}
            key={i}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4" ref={ref}>
        {loading
          ? Array(4)
              .fill(1)
              .map((_, i) => <StaffItemSkeleton key={i} />)
          : null}
      </div>
    </>
  )
}

export default Content
