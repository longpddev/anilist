"use client"

import Image from "next/image"
import Link from "app/context/NLink"
import React, { useRef } from "react"
import Icon from "../Icon"
import { faSmile } from "@fortawesome/free-regular-svg-icons"
import { IMEDIA_FIELD, MEDIA_FIELD } from "gql/media"
import { useFragment } from "anilist_gql"
import dayjs from "dayjs"
import {
  getColorOfScore,
  getMediaLabel,
  getSeasonLabel,
  getStatusLabel,
  getVariableOfTooltipCard,
} from "utils/Anilist"
import AnimeCardTooltip from "./AnimeCardTooltip"
import Genres from "../Genres"
import type { MediaFormat } from "anilist_gql/graphql"
import { numberToTime, timeToString } from "utils/app"

const AnimeCardRect: React.FC<{
  data: IMEDIA_FIELD
  index?: number
  showIndex?: boolean
}> = ({ data, showIndex, index }) => {
  const item = useFragment(MEDIA_FIELD, data)
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div
      ref={ref}
      className="anime-card-rect relative flex max-h-[265px]"
      style={
        getVariableOfTooltipCard(
          item.coverImage?.color || "#ffffff",
          true
        ) as React.CSSProperties
      }
    >
      <div className="w-[185px]">
        <Link
          href={"/"}
          className="w-full block relative pt-[143.243243%] overflow-hidden"
        >
          <Image
            src={item.coverImage?.extraLarge || ""}
            alt={item.title?.userPreferred || "anime image"}
            width={185}
            height={265}
            className="absolute inset-0 w-full h-full object-cover"
          ></Image>
          <div className="absolute left-0 bottom-0 w-full p-3 bg-gray anime-card-rect__inside-image">
            <p className="text-white font-semibold line-clamp-2">
              {item.title?.userPreferred || ""}
            </p>
            <p className="text-[var(--media-overlay-text)] text-[12px] line-clamp-1">
              {item.studios?.edges?.find((item) => item?.isMain)?.node?.name}
            </p>
          </div>
        </Link>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-auto flex flex-col p-4">
          <div className="flex">
            <p className="anime-card-inline__score--title text-gray-800 font-bold">
              {item.season && getSeasonLabel(item.season)}{" "}
              {item.startDate?.year}
            </p>
            {item.averageScore && (
              <div className="flex items-center ml-auto">
                <Icon
                  color={`rgb(var(${getColorOfScore(item.averageScore)}))`}
                  icon={faSmile}
                ></Icon>
                <span className="card-tooltip__percentage">
                  {item.averageScore}%
                </span>
              </div>
            )}
          </div>
          <div className="card-tooltip__info">
            {item.format && <span>{getMediaLabel(item.format)}</span>}
            {item.duration && (
              <>
                <span className="card-tooltip__separator">•</span>
                <span>
                  {item.format === ("Movie" as MediaFormat)
                    ? timeToString(numberToTime(item.duration * 60 * 1000))
                    : item.episodes + " episodes"}
                </span>
              </>
            )}
          </div>
          {item.description && (
            <p
              className="line-clamp-[7] hover:line-clamp-none hover:overflow-auto text-gray-600 text-[11px]"
              dangerouslySetInnerHTML={{
                __html: item.description,
              }}
            ></p>
          )}
        </div>
        <div className="flex flex-wrap gap-2 items-center p-4 bg-background-200">
          {item.genres
            ?.filter(Boolean)
            .map((item, index) => item && <Genres key={index} text={item} />)}
        </div>
      </div>
    </div>
  )
}

export default AnimeCardRect
