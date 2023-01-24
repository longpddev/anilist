"use client"

import { MediaTag } from "anilist_gql/graphql"
import clsx from "clsx"
import Link from "next/link"
import React, { useState } from "react"

const AnimeTags: React.FC<{
  tags: (MediaTag | null)[]
}> = ({ tags }) => {
  const [showSpoiler, showSpoilerSet] = useState(false)
  const items = [
    ["Shounen", 97],
    ["Demons", 97],
    ["Swordplay", 97],
    ["Male Protagonist", 97],
  ]
  return (
    <div className="mt-5">
      <h2 className="text-sm font-medium text-text mb-2.5">Tags</h2>
      <ul>
        {tags.map((item, i) =>
          item ? (
            <li
              className={clsx(
                "px-2.5 py-2 rounded-sm flex justify-center items-center bg-foreground",
                {
                  "mb-2.5": tags.length - 1 > i,
                }
              )}
              key={i}
            >
              <Link
                className={clsx(
                  "hover:text-blue text-text-lighter text-[13px] "
                )}
                href={"/"}
                data-tooltip=""
                data-tooltip-detail={item.description}
              >
                {item.name}
              </Link>
              <span className="text-[12px] ml-auto">{item.rank}%</span>
            </li>
          ) : null
        )}
      </ul>
      <button className="mt-2.5 text-[12px] hover:text-red">
        Show 1 spoiler tags
      </button>
    </div>
  )
}

export default AnimeTags
