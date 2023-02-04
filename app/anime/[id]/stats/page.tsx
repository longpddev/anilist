import { getAnimeStatsById } from "@/api/apiQuery"
import cacheFetch from "cache/cacheFetch"
import Content from "./content"

const fetchData = cacheFetch(
  async (id: number) => {
    return await getAnimeStatsById(id)
  },
  {
    ttl: 3600_000,
    getKey: (id) => "anime_detail_stats_" + id,
  }
)
const page = async ({ params }: { params: { id: string } }) => {
  const data = await fetchData(parseInt(params.id))
  return <Content data={data} />
}

export default page
