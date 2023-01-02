import AnimeCard from "@/ui/AnimeCard"
import type { IMEDIA_FIELD } from "gql/media"
import React from "react"
import CardSection from "./CardSection"

const Trending: React.FC<{
  data: IMEDIA_FIELD[]
}> = ({ data }) => {
  return (
    <CardSection title="Trending now" link="/">
      {data.map((item, i) => (
        <AnimeCard data={item} key={i} />
      ))}
    </CardSection>
  )
}

export default Trending
