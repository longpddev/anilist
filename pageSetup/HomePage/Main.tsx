import type { HomeSectionQuery } from "anilist_gql/graphql"
import React from "react"
import FormFilter from "./FormFilter"
import AllTimePopular from "./Section/AllTimePopular"
import PopularThisSeason from "./Section/PopularThisSeason"
import Top100Anime from "./Section/Top100Anime"
import Trending from "./Section/Trending"
import UpcomingNextSeason from "./Section/UpcomingNextSeason"

const Main: React.FC<{ sectionData: HomeSectionQuery }> = ({ sectionData }) => {
  if (!sectionData) return null

  return (
    <div className="c_container">
      <FormFilter />
      {sectionData.trending?.media && (
        <Trending data={sectionData.trending?.media} />
      )}
      {sectionData.season?.media && (
        <PopularThisSeason data={sectionData.season?.media} />
      )}
      {sectionData.nextSeason?.media && (
        <UpcomingNextSeason data={sectionData.nextSeason?.media} />
      )}
      {sectionData.popular?.media && (
        <AllTimePopular data={sectionData.popular?.media} />
      )}
      {sectionData.top?.media && <Top100Anime data={sectionData.top?.media} />}
    </div>
  )
}

export default Main
