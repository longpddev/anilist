import { getCharactersByAnimeId } from "@/api/apiQuery"
import cacheFetch from "cache/cacheFetch"
import Content from "./content"

const fetchData = cacheFetch(
  async (id: number) => {
    return await getCharactersByAnimeId(id, 1)
  },
  {
    ttl: 3600_000,
    getKey: (id) => "anime_detail_characters_" + id,
  }
)

const Page = async ({ params }: { params: { id: string } }) => {
  const characters = await fetchData(parseInt(params.id))
  return <Content initData={characters} animeId={parseInt(params.id)} />
}

export default Page
