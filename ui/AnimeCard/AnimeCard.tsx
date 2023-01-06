"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"
import Icon from "../Icon"
import { faSmile } from "@fortawesome/free-regular-svg-icons"
import { IMEDIA_FIELD, MEDIA_FIELD } from "gql/media"
import { useFragment } from "anilist_gql"
import dayjs from "dayjs"
import { getMediaLabel, getVariableOfTooltipCard } from "untils/Anilist"

const AnimeCard: React.FC<{
  data: IMEDIA_FIELD
}> = ({ data }) => {
  const item = useFragment(MEDIA_FIELD, data)
  console.log(item)

  return (
    <div
      className="anime-card relative"
      style={
        getVariableOfTooltipCard(
          item.coverImage?.color || "#e46b43",
          false
        ) as React.CSSProperties
      }
    >
      <div className="w-full relative pt-[143.243243%] rounded-md mb-2 overflow-hidden">
        <Image
          src={item.coverImage?.extraLarge || ""}
          alt={item.title?.userPreferred || "anime image"}
          width={185}
          height={265}
          className="absolute inset-0 w-full h-full object-cover"
        ></Image>
      </div>

      <div>
        <Link
          title={item.title?.userPreferred || ""}
          className="line-clamp-2"
          href={"/"}
        >
          {item.title?.userPreferred || ""}
        </Link>
      </div>
      <AnimeCardTooltip data={data} />
    </div>
  )
}

interface FuzzyDate {
  year: number
  month: number
  day: number
}

const getDate = (date: FuzzyDate) => {
  return new Date(date.year, date.month, date.day)
}

const AnimeCardTooltip: React.FC<{
  data: IMEDIA_FIELD
}> = ({ data }) => {
  const item = useFragment(MEDIA_FIELD, data)
  item.nextAiringEpisode
  return (
    <div className="card-tooltip right">
      <div className="card-tooltip__header">
        {item.startDate && (
          <div className="card-tooltip__date">
            {dayjs(getDate(item.startDate as FuzzyDate)).format("MMM YYYY")}
          </div>
        )}
        <div className="card-tooltip__score">
          <Icon icon={faSmile}></Icon>
          <span className="card-tooltip__percentage">{item.averageScore}%</span>
        </div>
      </div>
      <div className="card-tooltip__studios">
        {item?.studios?.edges?.find((item) => item?.isMain)?.node?.name}
      </div>
      <div className="card-tooltip__info">
        {item.format && <span>{getMediaLabel(item.format)}</span>}
        <span className="card-tooltip__separator">•</span>
        <span>{item.duration}</span>
      </div>
      <div className="card-tooltip__genres">
        {item.genres?.filter(Boolean).map((item, index) => (
          <div className="card-tooltip__genre" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimeCard
