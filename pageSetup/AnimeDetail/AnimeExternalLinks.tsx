import Icon from "@/ui/Icon"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"
import Link from "next/link"
import React from "react"

const AnimeExternalLinks = () => {
  return (
    <div className="mt-5">
      <h2 className="text-sm font-medium text-text mb-2.5">
        External & Streaming links
      </h2>
      <ul>
        <li>
          <a
            href="/"
            target={"_blank"}
            className={clsx(
              "flex items-center text-[12px] gap-3 p-1 rounded-sm hover:text-blue bg-foreground",
              {
                "mb-2.5": true,
              }
            )}
          >
            <span className="inline-block w-6 h-6 rounded-md relative p-1 bg-blue-800">
              <Icon className="position-center text-white" icon={faLink}></Icon>
            </span>
            <span className="font-semibold ">Official Site</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default AnimeExternalLinks
