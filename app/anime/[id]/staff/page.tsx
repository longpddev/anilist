import { getStaffByAnimeId } from "@/api/apiQuery"
import cacheFetch from "cache/cacheFetch"
import React, { use } from "react"
import Content from "./content"

const fetchData = cacheFetch(
  async (id: number) => {
    return await getStaffByAnimeId(id, 1, 20)
  },
  {
    ttl: 3600_000,
    getKey: (id) => "anime_detail_staff_" + id,
  }
)
const page = async ({ params }: { params: { id: string } }) => {
  const data = await fetchData(parseInt(params.id))
  return <Content initData={data} animeId={parseInt(params.id)} />
}

export default page
