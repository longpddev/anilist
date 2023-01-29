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
import clsx from "clsx"
import Genres from "../Genres"
import { numberToTime, timeToString } from "utils/app"
import { MediaFormat } from "anilist_gql/graphql"

const AnimeCardInline: React.FC<{
  data: IMEDIA_FIELD
  index: number
}> = ({ data, index }) => {
  const item = useFragment(MEDIA_FIELD, data)
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div className="anime-card-inline relative flex items-center">
      <div className="ml-10">
        <span className="text-[rgba(var(--color-gray-600),.7)]">#</span>
        <span className="text-gray-600 text-2xl font-bold">{index}</span>
      </div>
      <div
        ref={ref}
        className="ml-10 w-full bg-background-100 p-2.5  grid grid-cols-[minmax(auto,calc(100%-440px))_130px_130px_150px] items-center"
        style={
          getVariableOfTooltipCard(
            item.coverImage?.color || "#ffffff",
            true
          ) as React.CSSProperties
        }
      >
        <div className="flex items-center">
          <div className="w-[48px]">
            <Link href={"/"}>
              <div className="w-full relative pt-[143.243243%] flex h-content rounded-sm overflow-hidden">
                <Image
                  src={item.coverImage?.large || ""}
                  alt={item.title?.userPreferred || "anime image"}
                  width={185}
                  height={265}
                  className="absolute inset-0 w-full h-full object-cover"
                ></Image>
              </div>
            </Link>
          </div>
          <div className="ml-4">
            <Link
              title={item.title?.userPreferred || ""}
              className="line-clamp-1 anime-card-inline__title mb-2 anime-card__title text-gray-900"
              href={"/"}
            >
              {item.title?.userPreferred || ""}
            </Link>
            <div className="flex gap-2 flex-wrap">
              {item.genres
                ?.filter(Boolean)
                .map(
                  (item, index) => item && <Genres key={index} text={item} />
                )}
            </div>
          </div>
        </div>

        {item.averageScore && (
          <div className="flex gap-2">
            <span>
              <Icon
                icon={faSmile}
                color={`rgb(var(${getColorOfScore(item.averageScore)}))`}
              ></Icon>
            </span>
            <div className="anime-card-inline__score">
              <p className="anime-card-inline__score--title text-gray-800 text-sm font-bold">
                {item.averageScore}%
              </p>
              <small className="text-gray-600 text-[12px]">
                {item.popularity} users
              </small>
            </div>
          </div>
        )}

        {item.duration && (
          <div className="anime-card-inline__score">
            <p className="anime-card-inline__score--title text-gray-800 text-sm font-bold">
              {item.format && getMediaLabel(item.format)}
            </p>
            <small className="text-gray-600 text-[12px]">
              {item.format === MediaFormat.Movie
                ? timeToString(numberToTime(item.duration * 60 * 1000))
                : item.episodes + " episodes"}
            </small>
          </div>
        )}

        <div className="anime-card-inline__score">
          <p className="anime-card-inline__score--title text-gray-800 text-sm font-bold">
            {item.season && getSeasonLabel(item.season)} {item.startDate?.year}
          </p>
          <small className="text-gray-600 text-[12px]">
            {item.status && getStatusLabel(item.status)}
          </small>
        </div>
      </div>
    </div>
  )
}

export default AnimeCardInline
