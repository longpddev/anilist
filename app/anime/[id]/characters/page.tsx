"use client"

import { getCharactersByAnimeId } from "@/api/apiQuery"
import { cache, use } from "react"
import { runOnce } from "utils/app"
import Content from "./content"

const fetchData = cache(async (id: number) => {
  return await getCharactersByAnimeId(id, 1)
})

const Page = ({ params }: { params: { id: string } }) => {
  const characters = use(fetchData(parseInt(params.id)))
  return <Content initData={characters} animeId={parseInt(params.id)} />
}

export default Page
