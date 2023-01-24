"use client"

import clsx from "clsx"
import React from "react"

const AnimeDetailContainer: React.FC<{
  children: React.ReactNode
  hasBanner: boolean
}> = ({ children, hasBanner }) => {
  return (
    <div
      className={clsx("anime-detail", {
        "not-banner": !hasBanner,
      })}
    >
      {children}
    </div>
  )
}

export default AnimeDetailContainer
