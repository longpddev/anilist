"use client"

import Image from "next/image"
import Link from "app/context/NLink"
import React, { useRef } from "react"
import Icon from "../Icon"
import { faSmile } from "@fortawesome/free-regular-svg-icons"
import { IMEDIA_FIELD, MEDIA_FIELD } from "gql/media"
import { useFragment } from "anilist_gql"
import dayjs from "dayjs"
import { getMediaLabel, getVariableOfTooltipCard } from "utils/Anilist"
import AnimeCardTooltip from "./AnimeCardTooltip"

const AnimeCard: React.FC<{
  data: IMEDIA_FIELD
  index?: number
  showIndex?: boolean
}> = ({ data, showIndex, index }) => {
  const item = useFragment(MEDIA_FIELD, data)
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div
      ref={ref}
      className="anime-card relative"
      style={
        getVariableOfTooltipCard(
          item.coverImage?.color || "#ffffff",
          true
        ) as React.CSSProperties
      }
    >
      {showIndex && (
        <div
          className="rounded-full absolute top-0 left-0 w-9 h-9 z-10 translate-x-[-25%] translate-y-[-25%]"
          style={{
            background: "var(--media-background)",
            color: "var(--media-background-text)",
          }}
        >
          <span className="absolute position-center">
            <span className="text-[11px]">#</span>
            <span className="font-bold">{index}</span>
          </span>
        </div>
      )}
      <Link href={`/anime/${item.id}`}>
        <div className="w-full relative pt-[143.243243%] rounded-md mb-2 overflow-hidden">
          <Image
            src={item.coverImage?.large || ""}
            alt={item.title?.userPreferred || "anime image"}
            width={185}
            height={265}
            className="absolute inset-0 w-full h-full object-cover"
          ></Image>
        </div>
      </Link>

      <div>
        <Link
          title={item.title?.userPreferred || ""}
          className="line-clamp-2 anime-card__title"
          href={`/anime/${item.id}`}
        >
          {item.title?.userPreferred || ""}
        </Link>
      </div>
      <AnimeCardTooltip data={data} containerRef={ref} />
    </div>
  )
}

export default AnimeCard
