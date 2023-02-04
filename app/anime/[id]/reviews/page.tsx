import { getAnimeReviewsByAnimeId } from "@/api/apiQuery"
import cacheFetch from "cache/cacheFetch"
import React, { use } from "react"
import Content from "./content"

const fetchData = cacheFetch(
  async (id: number) => await getAnimeReviewsByAnimeId(id, 1),
  {
    ttl: 1800_000,
    getKey: (id) => "anime_detail_reviews_" + id,
  }
)
const page = async ({ params }: { params: { id: string } }) => {
  const data = await fetchData(parseInt(params.id))
  return <Content initData={data} animeId={parseInt(params.id)} />
}

export default page
