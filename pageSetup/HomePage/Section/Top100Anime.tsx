import AnimeCard from "@/ui/AnimeCard"
import React from "react"
import CardSection from "./CardSection"

const Top100Anime = () => {
  return (
    <CardSection title="Top 100 anime" link="/">
      {Array(4)
        .fill(1)
        .map((_, i) => (
          <AnimeCard key={i} />
        ))}
    </CardSection>
  )
}

export default Top100Anime
