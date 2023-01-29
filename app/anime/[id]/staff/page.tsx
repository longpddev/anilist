import { getStaffByAnimeId } from "@/api/apiQuery"
import Card, { CardContentLeft } from "@/ui/Card"
import Link from "app/context/NLink"
import React, { cache, use } from "react"
import { runOnce } from "utils/app"
import Content from "./content"

const fetchData = cache(async (id: number) => {
  return await getStaffByAnimeId(id, 1, 10)
})
const page = ({ params }: { params: { id: string } }) => {
  const data = use(fetchData(parseInt(params.id)))
  return <Content initData={data} animeId={parseInt(params.id)} />
}

export default page
