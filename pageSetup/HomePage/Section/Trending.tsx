import AnimeCard from "@/ui/AnimeCard"
import type { IMEDIA_FIELD } from "gql/media"
import React from "react"
import CardSection from "./CardSection"

const Trending: React.FC<{
  data: (IMEDIA_FIELD | null)[]
}> = ({ data }) => {
  return (
    <CardSection title="Trending now" link="/">
      {data.map((item, i) => item ? (
        <AnimeCard data={item} key={i} />
      ) : null)}
    </CardSection>
  )
}

export default Trending
