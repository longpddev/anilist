"use client"

import { getStaffByAnimeId } from "@/api/apiQuery"
import useInfinityLoading from "@/hooks/useInfinityLoading"
import Card, { CardContentLeft } from "@/ui/Card"
import { CardContentLeftSkeleton } from "@/ui/Card/CardContentLeft"
import { STAFF_TYPE } from "gql/staff"
import Link from "app/context/NLink"
import React from "react"

const StaffItem: React.FC<{
  data: {
    id: number
    name: string
    src: string | undefined
    tags: string[]
  }
}> = ({ data }) => {
  return (
    <Card>
      <CardContentLeft
        src={data.src}
        alt={data.name}
        height={80}
        tags={data.tags}
        link={`/staff/${data.id}`}
      >
        <Link
          href={`/staff/${data.id}`}
          className="text-text-lighter hover:text-blue text-[12px]"
        >
          {data.name}
        </Link>
      </CardContentLeft>
    </Card>
  )
}

const StaffItemSkeleton = () => {
  return (
    <Card>
      <CardContentLeftSkeleton
        src={undefined}
        alt=""
        height={80}
        tags={["Design Manager (eps 11, 14)"]}
      >
        <div className="text-transparent skeleton text-[12px]">
          Tanjirou Kamado
        </div>
      </CardContentLeftSkeleton>
    </Card>
  )
}

const Content: React.FC<{
  initData: STAFF_TYPE
  animeId: number
}> = ({ initData, animeId }) => {
  const { ref, list, loading, error } = useInfinityLoading(
    (page) => getStaffByAnimeId(animeId, page, 10),
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
