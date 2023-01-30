"use client"

import clsx from "clsx"
import { ANIME_DETAIL_FOR_LAYOUT_TYPE } from "gql/animeDetail"
import { FuzzyDate } from "interface/Anilist"
import Link from "app/context/NLink"
import React from "react"
import { formatDate, getSeasonLabel, getSourceLabel } from "utils/Anilist"
import { timeToString, numberToTime } from "utils/app"
import AnimeExternalLinks from "./AnimeExternalLinks"
import AnimeTags from "./AnimeTags"
import Ranking from "./Ranking"
import useMedia from "@/hooks/useMedia"

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
    <div className="anime-detail__section mt-5 py-4 sm:max-h-full max-h-[250px] overflow-auto">
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
  data: ANIME_DETAIL_FOR_LAYOUT_TYPE
}> = ({ children, data }) => {
  const media = data.Media
  const isMobile = useMedia(["(max-width: 768px)"], [true], false)
  console.log(isMobile)
  if (!media) return null

  const asideBottomContent = () => (
    <>
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
            types: [media.averageScore ? media.averageScore + "%" : undefined],
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
    </>
  )
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
        {!isMobile && asideBottomContent()}
      </aside>
      <main className="anime-detail__right">{children}</main>

      {isMobile && (
        <div className="anime-detail__bottom">{asideBottomContent()}</div>
      )}
    </div>
  )
}

export default AnimeDetailMain
