import AnimeCard from "@/ui/AnimeCard"
import React from "react"
import CardSection from "./CardSection"

const PopularThisSeason = () => {
  return (
    <CardSection title="Popular this season" link="/">
      {Array(4)
        .fill(1)
        .map((_, i) => (
          <AnimeCard key={i} />
        ))}
    </CardSection>
  )
}

export default PopularThisSeason
