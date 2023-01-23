import Icon from "@/ui/Icon"
import {
  faArrowRight,
  faChevronRight,
  faHeart,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"
import Link from "next/link"
import React, { useState } from "react"
import AnimeExternalLinks from "./AnimeExternalLinks"
import AnimeTags from "./AnimeTags"

const Ranking: React.FC<{
  href: string
  children: React.ReactNode
  icon: IconDefinition
}> = ({ href, children, icon }) => (
  <Link
    href={href}
    className="block py-2 mt-4 text-[12px] whitespace-nowrap anime-detail__section hover:text-blue"
  >
    <Icon icon={icon} className="text-red"></Icon>
    <span className="inline-block w-full text-center ">{children}</span>
  </Link>
)
type IAnimeType = {
  label: string
  types: Array<string | { name: string; link: string }>
}
const AnimeType: React.FC<{
  types: IAnimeType[]
}> = ({ types }) => {
  return (
    <div className="anime-detail__section mt-5 py-4">
      {types.map((item, index) => (
        <div
          key={index}
          className={clsx({
            "mb-3.5": index < types.length - 1,
          })}
        >
          <p className="text-[13px] font-medium pb-1.5">{item.label}</p>
          <ul>
            {item.types.map((item, i) => (
              <li className="text-[12px] text-text-lighter" key={i}>
                {typeof item === "string" ? (
                  <span>{item}</span>
                ) : (
                  <Link className="hover:text-blue" href={item.link}>
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

const AddToWhistList = () => {
  return (
    <div className="flex gap-4">
      <div className="rounded-sm flex-auto flex bg-blue leading-[35px] pl-2.5 text-center text-white">
        <button className="flex-auto">Add to list</button>
        <button className="min-w-[35px] min-h-[35px] bg-white bg-opacity-10 relative">
          <Icon className="position-center" icon={faChevronRight}></Icon>
        </button>
      </div>
      <button className="relative flex-1 max-w-[35px] max-h-[35px] rounded-sm bg-red-400 text-white">
        <Icon className="position-center" icon={faHeart}></Icon>
      </button>
    </div>
  )
}
const AnimeDetailMain: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="anime-detail c_container mt-8">
      <aside className="anime-detail__left ">
        <AddToWhistList></AddToWhistList>
        <Ranking href="/" icon={faHeart}>
          #3 most popular 2023
        </Ranking>
        <Ranking href="/" icon={faHeart}>
          #1 most popular spring 2023
        </Ranking>
        <AnimeType
          types={[
            { label: "Format", types: ["TV"] },
            {
              label: "Genres",
              types: [
                { name: "Action", link: "/" },
                { name: "Drama", link: "/" },
                { name: "Fantasy", link: "/" },
                { name: "Supernatural", link: "/" },
                { name: "Adventure", link: "/" },
              ],
            },
          ]}
        />
        <AnimeTags />
        <AnimeExternalLinks />
      </aside>
      <main className="anime-detail__right">{children}</main>
    </div>
  )
}

export default AnimeDetailMain
