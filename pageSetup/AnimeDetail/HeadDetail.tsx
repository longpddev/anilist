import clsx from "clsx"
import Link from "app/context/NLink"
import React from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import AddToWhistList from "./AddToWhistList"
import { AnimeDetailQuery } from "anilist_gql/graphql"
import {
  ANIME_DETAIL_FOR_LAYOUT_TYPE,
  ANIME_DETAIL_TYPE,
} from "gql/animeDetail"
import noImage from "@/assets/no_image.jpeg"
import HeadDetailMenu from "./HeadDetailMenu"

const HeadDetail: React.FC<{
  parentPath: string
  data: ANIME_DETAIL_FOR_LAYOUT_TYPE
}> = ({ parentPath, data }) => {
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
          <HeadDetailMenu
            links={(() => {
              const links: { name: string; link: string }[] = []
              links.push({ name: "Overview", link: parentPath })
              // if (
              //   data.Media?.streamingEpisodes &&
              //   data.Media?.streamingEpisodes.length > 0
              // )
              links.push({ name: "Watch", link: parentPath + "/watch" })

              // if (
              //   data.Media?.characterPreview?.edges &&
              //   data.Media?.characterPreview?.edges.length > 0
              // )
              links.push({
                name: "Characters",
                link: parentPath + "/characters",
              })
              // if (
              //   data.Media?.staffPreview?.edges &&
              //   data.Media?.staffPreview?.edges.length > 0
              // )
              links.push({ name: "Staff", link: parentPath + "/staff" })
              // if (
              //   data.Media?.reviewPreview?.pageInfo?.total &&
              //   data.Media?.reviewPreview?.pageInfo?.total > 0
              // )
              links.push({ name: "Reviews", link: parentPath + "/reviews" })
              // if (
              //   data.Media?.stats?.statusDistribution &&
              //   data.Media?.stats?.statusDistribution.length > 0
              // )
              links.push({ name: "Stats", link: parentPath + "/stats" })
              links.push({ name: "Social", link: parentPath + "/social" })
              return links
            })()}
          />
        </div>
      </div>
    </div>
  )
}

export default HeadDetail
