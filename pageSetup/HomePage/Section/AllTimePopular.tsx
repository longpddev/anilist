import AnimeCard from "@/ui/AnimeCard"
import React from "react"
import CardSection from "./CardSection"

const AllTimePopular = () => {
  return (
    <CardSection title="All time popular" link="/">
      {Array(4)
        .fill(1)
        .map((_, i) => (
          <AnimeCard key={i} />
        ))}
    </CardSection>
  )
}

export default AllTimePopular
