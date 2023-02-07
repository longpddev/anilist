import fetchGql from "@/api/server"
import cacheFetch from "cache/cacheFetch"
import { ANIME_STATS } from "gql/animeDetail"
import Content from "./content"

const fetchData = cacheFetch(
  async (id: number) => {
    return await fetchGql(ANIME_STATS, { id })
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
