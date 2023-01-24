"use client"

import clsx from "clsx"
import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import AddToWhistList from "./AddToWhistList"
import { AnimeDetailQuery } from "anilist_gql/graphql"
import { ANIME_DETAIL_TYPE } from "gql/animeDetail"
import noImage from "@/assets/no_image.jpeg"
const NavLink: React.FC<{
  children: React.ReactNode
  href: string
  currentPath: string
}> = ({ children, href, currentPath }) => (
  <Link
    href={href}
    className={clsx(" hover:text-blue", {
      "text-text-lighter": currentPath !== href,
      "text-blue": currentPath === href,
    })}
  >
    {children}
  </Link>
)

const HeadDetail: React.FC<{
  parentPath: string
  data: ANIME_DETAIL_TYPE
}> = ({ parentPath, data }) => {
  const currentPath = usePathname() || ""
  console.log(currentPath)
  return (
    <div className="bg-foreground">
      {data.Media?.bannerImage && (
        <div className="relative">
          <div className="overlay absolute inset-0 w-full h-full"></div>
          <Image
            src={data.Media.bannerImage}
            width={1920}
            height={400}
            className="h-[220px] sm:h-[400px] w-full"
            alt="banner"
          ></Image>
        </div>
      )}

      <div className="c_container anime-detail__area anime-detail__head">
        <div className="anime-detail__left  relative">
          <Image
            className="rounded-sm w-full"
            src={
              data.Media?.coverImage?.large ||
              data.Media?.coverImage?.extraLarge ||
              noImage
            }
            width={215}
            height={300}
            alt=""
          />
          <div className="md:my-4 flex-auto self-end">
            <AddToWhistList></AddToWhistList>
          </div>
        </div>
        <div className="flex flex-col flex-auto">
          <h1 className="text-xl md:mt-8 mt-0">
            {data.Media?.title?.userPreferred}
          </h1>
          <p
            className="text-sm py-3.5"
            dangerouslySetInnerHTML={{
              __html: data.Media?.description || "",
            }}
          />
          <ul className="flex justify-between mt-auto overflow-auto">
            <li className="p-3.5">
              <NavLink currentPath={currentPath} href={parentPath}>
                overview
              </NavLink>
            </li>
            {data.Media?.streamingEpisodes &&
              data.Media?.streamingEpisodes.length > 0 && (
                <li className="p-3.5">
                  <NavLink
                    currentPath={currentPath}
                    href={parentPath + "/watch"}
                  >
                    watch
                  </NavLink>
                </li>
              )}

            {data.Media?.characterPreview?.edges &&
              data.Media?.characterPreview?.edges.length > 0 && (
                <li className="p-3.5">
                  <NavLink
                    currentPath={currentPath}
                    href={parentPath + "/characters"}
                  >
                    characters
                  </NavLink>
                </li>
              )}

            {data.Media?.staffPreview?.edges &&
              data.Media?.staffPreview?.edges.length > 0 && (
                <li className="p-3.5">
                  <NavLink
                    currentPath={currentPath}
                    href={parentPath + "/staff"}
                  >
                    staff
                  </NavLink>
                </li>
              )}

            {data.Media?.reviewPreview?.pageInfo?.total &&
              data.Media?.reviewPreview?.pageInfo?.total > 0 && (
                <li className="p-3.5">
                  <NavLink
                    currentPath={currentPath}
                    href={parentPath + "/reviews"}
                  >
                    reviews
                  </NavLink>
                </li>
              )}

            {data.Media?.stats?.statusDistribution &&
              data.Media?.stats?.statusDistribution.length > 0 && (
                <li className="p-3.5">
                  <NavLink
                    currentPath={currentPath}
                    href={parentPath + "/stats"}
                  >
                    stats
                  </NavLink>
                </li>
              )}

            <li className="p-3.5">
              <NavLink currentPath={currentPath} href={parentPath + "/social"}>
                social
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HeadDetail
