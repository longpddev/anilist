import { getAnimeStatsById } from "@/api/apiQuery"
import cacheFetch from "cache/cacheFetch"
import memoize from "lodash/memoize"

import React, { use } from "react"
import { runOnce, sleep } from "utils/app"
import Content from "./content"

const fetchData = cacheFetch(
  async (id: number) => {
    return await getAnimeStatsById(id)
  },
  {
    ttl: 3600_000,
    getKey: (id) => "anime_detail_stats_" + id,
  }
)
const page = ({ params }: { params: { id: string } }) => {
  const data = use(fetchData(parseInt(params.id)))
  return <Content data={data} />
}

export default page
