import AnimeCard from "@/ui/AnimeCard"
import {IMEDIA_FIELD} from "gql/media"
import React from "react"
import CardSection from "./CardSection"

const UpcomingNextSeason: React.FC<{
  data: (IMEDIA_FIELD | null)[]
}> = ({ data }) => {
  return (
    <CardSection title="Upcoming next season" link="/">
      {data.map((item, i) => item ? (
          <AnimeCard data={item} key={i} />
        ) : null)}
    </CardSection>
  )
}

export default UpcomingNextSeason
