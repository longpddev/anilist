import AnimeCard from "@/ui/AnimeCard"
import {IMEDIA_FIELD} from "gql/media"
import React from "react"
import CardSection from "./CardSection"

const Top100Anime: React.FC<{
  data: (IMEDIA_FIELD | null)[]
}> = ({ data }) => {
  return (
    <CardSection title="Top 100 anime" link="/">
      {data.map((item, i) => item ? (
          <AnimeCard data={item} key={i} />
        ) : null)}
    </CardSection>
  )
}

export default Top100Anime
