"use client"

import { faSmile } from "@fortawesome/free-solid-svg-icons"
import { useFragment } from "anilist_gql"
import clsx from "clsx"
import dayjs from "dayjs"
import { IMEDIA_FIELD, MEDIA_FIELD } from "gql/media"
import { FuzzyDate } from "interface/Anilist"
import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { calcRelation, getColorOfScore, getMediaLabel } from "untils/Anilist"
import Genres from "../Genres"
import Icon from "../Icon"

const getDate = (date: FuzzyDate) => {
  return new Date(date.year, date.month, date.day)
}

const AnimeCardTooltip: React.FC<{
  data: IMEDIA_FIELD
  containerRef: React.RefObject<HTMLDivElement>
}> = ({ data, containerRef }) => {
  const item = useFragment(MEDIA_FIELD, data)
  const [position, positionSet] = useState("right")
  const [show, showSet] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const containerEl = containerRef.current
    if (!containerEl) return
    const handleShowTooltip = () => showSet(true)

    const handleHidden = () => showSet(false)

    containerEl.addEventListener("pointerenter", handleShowTooltip)
    containerEl.addEventListener("pointerleave", handleHidden)
    return () => {
      containerEl.removeEventListener("pointerenter", handleShowTooltip)
      containerEl.removeEventListener("pointerleave", handleHidden)
    }
  }, [containerRef.current])

  useEffect(() => {
    if (show) {
      const el = ref.current
      const containerEl = containerRef.current
      if (!el || !containerEl) return
      const tooltipRect = el.getBoundingClientRect()
      const anchorRect = containerEl.getBoundingClientRect()

      const { position } = calcRelation(tooltipRect, anchorRect, [
        "right",
        "left",
        "top",
        "bottom",
      ])
      positionSet(position)
    }
  }, [show])
  return (
    <div
      className={clsx("card-tooltip", position, {
        visible: show,
      })}
      ref={ref}
    >
      <div className="card-tooltip__header">
        {item.startDate && (
          <div className="card-tooltip__date">
            {dayjs(getDate(item.startDate as FuzzyDate)).format("MMM YYYY")}
          </div>
        )}
        {item.averageScore && (
          <div className="card-tooltip__score">
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
      <div className="card-tooltip__studios">
        {item?.studios?.edges?.find((item) => item?.isMain)?.node?.name}
      </div>
      <div className="card-tooltip__info">
        {item.format && <span>{getMediaLabel(item.format)}</span>}
        {item.duration && (
          <>
            <span className="card-tooltip__separator">•</span>
            <span>{item.duration}</span>
          </>
        )}
      </div>
      <div className="card-tooltip__genres">
        {item.genres
          ?.filter(Boolean)
          .map(
            (item, index) =>
              item && (
                <Genres
                  text={item}
                  className="card-tooltip__genre"
                  key={index}
                />
              )
          )}
      </div>
    </div>
  )
}

export default AnimeCardTooltip
