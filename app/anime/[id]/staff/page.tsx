import { getStaffByAnimeId } from "@/api/apiQuery"
import Card, { CardContentLeft } from "@/ui/Card"
import Link from "app/context/NLink"
import cacheFetch from "cache/cacheFetch"
import memoize from "lodash/memoize"
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
const page = ({ params }: { params: { id: string } }) => {
  const data = use(fetchData(parseInt(params.id)))
  return <Content initData={data} animeId={parseInt(params.id)} />
}

export default page
