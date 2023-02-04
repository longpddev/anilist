import { getAnimeReviewsByAnimeId } from "@/api/apiQuery"
import fetchGql from "@/api/server"
import { ReviewItem } from "@/pageSetup/AnimeDetail"
import Card, { CardContentLeft } from "@/ui/Card"
import Link from "app/context/NLink"
import cacheFetch from "cache/cacheFetch"
import { ANIME_REVIEWS } from "gql/animeDetail"
import memoize from "lodash/memoize"
import React, { use } from "react"
import { sleep } from "utils/app"
import Content from "./content"

const fetchData = cacheFetch(
  async (id: number) => await getAnimeReviewsByAnimeId(id, 1),
  {
    ttl: 1800_000,
    getKey: (id) => "anime_detail_reviews_" + id,
  }
)
const page = ({ params }: { params: { id: string } }) => {
  const data = use(fetchData(parseInt(params.id)))
  return <Content initData={data} animeId={parseInt(params.id)} />
}

export default page
