import { HomeSectionQuery } from "anilist_gql/graphql"
import React from "react"
import FormFilter from "./FormFilter"
import AllTimePopular from "./Section/AllTimePopular"
import PopularThisSeason from "./Section/PopularThisSeason"
import Top100Anime from "./Section/Top100Anime"
import Trending from "./Section/Trending"
import UpcomingNextSeason from "./Section/UpcomingNextSeason"

const Main: React.FC<{ sectionData: HomeSectionQuery }> = ({ sectionData }) => {
  return (
    <div className="c_container">
      <FormFilter />
      <Trending />
      <PopularThisSeason />
      <UpcomingNextSeason />
      <AllTimePopular />
      <Top100Anime />
    </div>
  )
}

export default Main
