"use client"

import useMedia from "@/hooks/useMedia"
import AnimeCard, { AnimeCardInline, AnimeCardRect } from "@/ui/AnimeCard"
import { IMEDIA_FIELD } from "gql/media"
import { ListLayout } from "interface/Anilist"
import React from "react"
import CardSection from "./CardSection"

const Top100Anime: React.FC<{
  data: (IMEDIA_FIELD | null)[]
}> = ({ data }) => {
  const isTablet = useMedia(["(max-width: 992px)"], [true], false)
  if (true)
    return (
      <CardSection title="Top 100 anime" layout={ListLayout.Rect} link="/">
        {data.map((item, i) =>
          item ? (
            <AnimeCardRect data={item} key={i} index={i + 1} showIndex />
          ) : null
        )}
      </CardSection>
    )
  // return (
  //   <CardSection title="Top 100 anime" layout={ListLayout.Inline} link="/">
  //     {data.map((item, i) =>
  //       item ? <AnimeCardInline data={item} key={i} index={i + 1} /> : null
  //     )}
  //   </CardSection>
  // )
}

export default Top100Anime
