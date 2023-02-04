import { getStaffByAnimeId } from "@/api/apiQuery"
import Card, { CardContentLeft } from "@/ui/Card"
import Link from "app/context/NLink"
import memoize from "lodash/memoize"
import React, { use } from "react"
import Content from "./content"

const fetchData = memoize(async (id: number) => {
  return await getStaffByAnimeId(id, 1, 20)
})
const page = ({ params }: { params: { id: string } }) => {
  const data = use(fetchData(parseInt(params.id)))
  return <Content initData={data} animeId={parseInt(params.id)} />
}

export default page
