"use client"

import fetchGql from "@/api/server"
import { ReviewItem, WatchItem } from "@/pageSetup/AnimeDetail"
import Card, { CardContentLeft } from "@/ui/Card"
import Link from "app/context/NLink"
import { ANIME_DETAIL_WATCH } from "gql/animeDetail"
import { memoize } from "lodash"
import React, { use } from "react"
import { sleep } from "utils/app"

const fetchData = memoize(async (id: number) => {
  return await fetchGql(ANIME_DETAIL_WATCH, { id })
})
const page = ({ params }: { params: { id: string } }) => {
  const data = use(fetchData(parseInt(params.id)))
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {data.Media?.streamingEpisodes?.map((item, i) =>
        item ? (
          <WatchItem
            name={item.title || ""}
            src={item.thumbnail || undefined}
            url={item.url || ""}
            key={i}
          />
        ) : null
      )}
    </div>
  )
}

export default page
