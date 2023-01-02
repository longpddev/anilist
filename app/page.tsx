import { Banner, Main } from "../pageSetup/HomePage"
import { HOME_PAGE_SECTION } from "../gql/homepage"
import { graphql } from "../anilist_gql"
import { MediaSeason } from "../anilist_gql/graphql"
import fetchGql from "@/api/server"
export default async function Home() {
  const _type = graphql(HOME_PAGE_SECTION)
  const section = await fetchGql(graphql(HOME_PAGE_SECTION), {
    season: MediaSeason.Winter,
    seasonYear: 2023,
    nextSeason: MediaSeason.Spring,
    nextYear: 2023,
  })

  return (
    <div>
      <Banner />
      <Main sectionData={section} />
    </div>
  )
}
