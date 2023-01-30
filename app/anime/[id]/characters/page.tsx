"use client"

import { getCharactersByAnimeId } from "@/api/apiQuery"
import { memoize } from "lodash"
import { use } from "react"
import { runOnce, sleep } from "utils/app"
import Content from "./content"

const fetchData = memoize(async (id: number) => {
  return await getCharactersByAnimeId(id, 1)
})

const Page = ({ params }: { params: { id: string } }) => {
  const characters = use(fetchData(parseInt(params.id)))
  return <Content initData={characters} animeId={parseInt(params.id)} />
}

export default Page
