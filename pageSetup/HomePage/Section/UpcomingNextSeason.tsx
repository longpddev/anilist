import AnimeCard from "@/ui/AnimeCard"
import React from "react"
import CardSection from "./CardSection"

const UpcomingNextSeason = () => {
  return (
    <CardSection title="Upcoming next season" link="/">
      {Array(4)
        .fill(1)
        .map((_, i) => (
          <AnimeCard key={i} />
        ))}
    </CardSection>
  )
}

export default UpcomingNextSeason
