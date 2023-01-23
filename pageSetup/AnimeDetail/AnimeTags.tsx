"use client"

import clsx from "clsx"
import Link from "next/link"
import React, { useState } from "react"

const AnimeTags = () => {
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
        {items.map((item, i) => (
          <li
            className={clsx(
              "px-2.5 py-2 rounded-sm flex justify-center items-center bg-foreground",
              {
                "mb-2.5": items.length - 1 > i,
              }
            )}
            key={i}
          >
            <Link
              className={clsx("hover:text-blue text-text-lighter text-[13px] ")}
              href={"/"}
            >
              {item[0]}
            </Link>
            <span className="text-[12px] ml-auto">{item[1]}%</span>
          </li>
        ))}
      </ul>
      <button className="mt-2.5 text-[12px] hover:text-red">
        Show 1 spoiler tags
      </button>
    </div>
  )
}

export default AnimeTags
