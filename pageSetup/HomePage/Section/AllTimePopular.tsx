import AnimeCard from "@/ui/AnimeCard"
import { IMEDIA_FIELD } from "gql/media"
import React from "react"
import CardSection from "./CardSection"

const AllTimePopular: React.FC<{
  data: (IMEDIA_FIELD | null)[]
}> = ({ data }) => {
  return (
    <CardSection title="All time popular" link="/">
      {data.map((item, i) => (item ? <AnimeCard data={item} key={i} /> : null))}
    </CardSection>
  )
}

export default AllTimePopular
