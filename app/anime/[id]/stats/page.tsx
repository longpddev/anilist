"use client"

import { getAnimeStatsById } from "@/api/apiQuery"

import React, { cache, use } from "react"
import { runOnce } from "utils/app"
import Content from "./content"

const fetchData = cache(async (id: number) => {
  return await getAnimeStatsById(id)
})
const page = ({ params }: { params: { id: string } }) => {
  const data = use(fetchData(parseInt(params.id)))
  return <Content data={data} />
}

export default page
