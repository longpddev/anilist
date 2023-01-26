import { MediaSource, MediaType, Recommendation } from "anilist_gql/graphql"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import PageSection from "./PageSection"
import noImage from "@/assets/no_image.jpeg"

interface RecommendationItemData {
  title: string
  src?: string
  id: number
  type: MediaType
}
const RecommendationsItem: React.FC<{ data: RecommendationItemData }> = ({
  data,
}) => {
  return (
    <div className="max-w-[130px] w-full">
      <Link
        href={
          data.type === MediaType.Anime
            ? `/anime/${data.id}`
            : `/manga/${data.id}`
        }
      >
        <Image
          src={data.src || noImage}
          height={180}
          width={130}
          className="w-full rounded-md"
          alt=""
        ></Image>

        <p className="text-text-lighter mt-2.5 block hover:text-blue text-sm line-clamp-2">
          {data.title}
        </p>
      </Link>
    </div>
  )
}
const Recommendations: React.FC<{
  data: RecommendationItemData[]
}> = ({ data }) => {
  return (
    <PageSection title="Recommendations" full>
      <div className="overflow-auto">
        <div className=" flex gap-4">
          {data.map((item, i) => (
            <RecommendationsItem key={i} data={item}></RecommendationsItem>
          ))}
        </div>
      </div>
    </PageSection>
  )
}

export default Recommendations
