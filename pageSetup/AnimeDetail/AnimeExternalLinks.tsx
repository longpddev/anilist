import Icon from "@/ui/Icon"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { brightness } from "chromatism"
import clsx from "clsx"
import React from "react"

const AnimeExternalLinks: React.FC<{
  data: { icon: string; color: string; site: string; link: string }[]
}> = ({ data }) => {
  return (
    <div className="mt-5">
      <h2 className="text-sm font-medium text-text mb-2.5">
        External & Streaming links
      </h2>
      <ul>
        {data.map((item, i) => (
          <li
            key={i}
            style={
              {
                "--link-color": `${
                  item.color
                    ? (() => {
                        const rgb = brightness(-7, item.color).rgb

                        return `rgba(${rgb.r},${rgb.g},${rgb.b}, .6)`
                      })()
                    : "transparent"
                }`,
              } as React.CSSProperties
            }
          >
            <a
              href={item.link}
              target={"_blank"}
              className={clsx(
                "flex items-center text-[12px] gap-3 p-1 rounded-sm hover:text-text-bright bg-foreground hover:bg-[var(--link-color)]",
                {
                  "mb-2.5": true,
                }
              )}
              rel="noreferrer"
            >
              <span
                className="inline-block w-6 h-6 rounded-md relative p-1"
                style={{
                  backgroundColor: item.color,
                }}
              >
                <Icon
                  className="position-center text-white"
                  icon={faLink}
                ></Icon>
              </span>
              <span className="font-semibold ">{item.site}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AnimeExternalLinks
