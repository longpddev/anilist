"use client"

import { getAnimeStatsById } from "@/api/apiQuery"
import memoize from "lodash/memoize"

import React, { use } from "react"
import { runOnce, sleep } from "utils/app"
import Content from "./content"

const fetchData = memoize(async (id: number) => {
  return await getAnimeStatsById(id)
})
const page = ({ params }: { params: { id: string } }) => {
  const data = use(fetchData(parseInt(params.id)))
  return <Content data={data} />
}

export default page
