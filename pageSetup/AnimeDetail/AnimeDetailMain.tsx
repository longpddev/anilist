import Icon from "@/ui/Icon"
import {
  faArrowRight,
  faChevronRight,
  faHeart,
  faStar,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"
import { ANIME_DETAIL_TYPE } from "gql/animeDetail"
import { FuzzyDate } from "interface/Anilist"
import Link from "next/link"
import React, { useState } from "react"
import { formatDate, getSeasonLabel, getSourceLabel } from "utils/Anilist"
import { timeToString, numberToTime } from "utils/app"
import AnimeExternalLinks from "./AnimeExternalLinks"
import AnimeTags from "./AnimeTags"

const Ranking: React.FC<{
  href: string
  children: React.ReactNode
  type: "POPULAR" | "RATED"
  className?: string
}> = ({ href, children, type, className }) => (
  <Link
    href={href}
    className={clsx(
      "block py-2 text-[12px] whitespace-nowrap anime-detail__section hover:text-blue",
      className
    )}
  >
    <Icon
      icon={type === "POPULAR" ? faHeart : faStar}
      className={clsx({
        "text-red": type === "POPULAR",
        "text-yellow": type === "RATED",
      })}
    ></Icon>
    <span className="inline-block w-full text-center ">{children}</span>
  </Link>
)
type IAnimeType = {
  label: string
  types: Array<
    string | undefined | null | number | { name: string; link: string }
  >
}
const AnimeType: React.FC<{
  types: IAnimeType[]
}> = ({ types }) => {
  return (
    <div className="anime-detail__section mt-5 py-4">
      {types.map((item, index) =>
        item.types.length > 0 ? (
          <div
            key={index}
            className={clsx({
              "mb-3.5": index < types.length - 1,
            })}
          >
            <p className="text-[13px] font-medium pb-1.5">{item.label}</p>
            <ul>
              {item.types.map((item, i) =>
                !!item || item === 0 ? (
                  <li className="text-[12px] text-text-lighter" key={i}>
                    {typeof item === "object" && item !== null ? (
                      <Link className="hover:text-blue" href={item.link}>
                        {item.name}
                      </Link>
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                ) : null
              )}
            </ul>
          </div>
        ) : null
      )}
    </div>
  )
}
const AnimeDetailMain: React.FC<{
  children: React.ReactNode
  data: ANIME_DETAIL_TYPE
}> = ({ children, data }) => {
  const media = data.Media
  if (!media) return null
  media.tags
  return (
    <div className="anime-detail__area anime-detail__main c_container md:mt-8 mt-4">
      <aside className="anime-detail__left ">
        {media?.rankings?.slice(0, 2).map((item, i) => (
          <Ranking
            key={item?.id || "ranking_key_" + i}
            className={clsx({
              "mt-4": i > 0,
            })}
            href="/"
            type={item?.type || "POPULAR"}
          >
            #{item?.rank} {item?.context}
          </Ranking>
        ))}

        <AnimeType
          types={[
            { label: "Format", types: [media.format] },
            { label: "Episodes", types: [media.episodes] },
            {
              label: "Episode Duration",
              types: [
                media.duration
                  ? timeToString(numberToTime(media.duration * 1000 * 60))
                  : undefined,
              ],
            },
            {
              label: "Start Date",
              types: [formatDate(media.startDate as FuzzyDate)],
            },
            {
              label: "End Date",
              types: [formatDate(media.endDate as FuzzyDate)],
            },
            {
              label: "Season",
              types: [media.season ? getSeasonLabel(media.season) : undefined],
            },
            {
              label: "Average Score",
              types: [
                media.averageScore ? media.averageScore + "%" : undefined,
              ],
            },
            {
              label: "Mean Score",
              types: [media.meanScore ? media.meanScore + "%" : undefined],
            },
            { label: "Popularity", types: [media.popularity] },
            { label: "Favorites", types: [media.favourites] },
            {
              label: "Studios",
              types: [
                media.studios?.edges?.find((item) => item?.isMain)?.node?.name,
              ],
            },
            {
              label: "Producers",
              types:
                media.studios?.edges
                  ?.filter((item) => !item?.isMain)
                  .map((item) => item?.node?.name) || [],
            },
            {
              label: "Source",
              types: [media.source ? getSourceLabel(media.source) : undefined],
            },
            {
              label: "Hashtag",
              types: [
                media.hashtag ? { name: media.hashtag, link: "/" } : undefined,
              ],
            },
            {
              label: "Genres",
              types:
                media.genres
                  ?.filter((item) => !!item)
                  .map((item) => ({
                    name: item as string,
                    link: "/",
                  })) || [],
            },
            { label: "Romaji", types: [media.title?.romaji] },
            { label: "English", types: [media.title?.english] },
            { label: "Native", types: [media.title?.native] },
            { label: "Synonyms", types: media.synonyms || [] },
          ]}
        />

        {media.tags && <AnimeTags tags={media.tags} />}
        <AnimeExternalLinks
          data={
            media.externalLinks?.map((item) => ({
              icon: item?.icon as string,
              color: item?.color as string,
              site: item?.site as string,
              link: item?.url as string,
            })) || []
          }
        />
      </aside>
      <main className="anime-detail__right">{children}</main>
    </div>
  )
}

export default AnimeDetailMain
