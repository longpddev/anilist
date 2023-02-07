import { Banner, Main } from "../pageSetup/HomePage"
import { HOME_PAGE_SECTION } from "../gql/homepage"
import type { MediaSeason } from "../anilist_gql/graphql"
import fetchGql from "@/api/server"
import cacheFetch from "cache/cacheFetch"

export const revalidate = 7200

const fetchData = cacheFetch(
  () =>
    fetchGql(HOME_PAGE_SECTION, {
      season: "WINTER" as MediaSeason,
      seasonYear: 2023,
      nextSeason: "SPRING" as MediaSeason,
      nextYear: 2023,
    }),
  {
    ttl: revalidate,
    getKey: () => "anime-home-page",
  }
)

export default async function Home() {
  const section = await fetchData()
  return (
    <div>
      <Banner />
      <Main sectionData={section} />
    </div>
  )
}
