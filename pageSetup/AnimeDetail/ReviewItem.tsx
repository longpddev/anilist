import Icon from "@/ui/Icon"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"
import Image from "next/image"
import Link from "app/context/NLink"
import React from "react"
import noImage from "@/assets/no_image.jpeg"
export interface ReviewData {
  src: string | undefined
  like: number
  summary: string
  id: number
  username: string
}
const ReviewItem: React.FC<{
  data: ReviewData
}> = ({ data }) => {
  return (
    <div className="flex gap-4">
      <div className="min-w-[50px]">
        <Link href={`/user/${data.username}`}>
          <Image
            src={data.src || noImage}
            width={50}
            height={50}
            alt="avatar"
          ></Image>
        </Link>
      </div>
      <div
        className={clsx("flex-auto rounded-lg bg-foreground triangle relative")}
      >
        <Link
          href={`/review/${data.id}`}
          className="absolute block inset-0 w-full h-full z-[0]  py-4 px-6"
        >
          <p className="text-center text-text-lighter italic text-sm z-[1] relative">
            {data.summary}
          </p>
        </Link>
        <p className="absolute bottom-2 right-2 text-[12px] not-italic z-[1]">
          <Icon icon={faThumbsUp}></Icon>&nbsp;{data.like}
        </p>
      </div>
    </div>
  )
}

export const ReviewItemSkeleton: React.FC<{
  data: ReviewData
}> = ({ data }) => {
  return (
    <div className="flex gap-4">
      <div className="min-w-[50px]">
        <div className="w-[50px] h-[50px] skeleton rounded-full overflow-hidden"></div>
      </div>
      <div className="flex-auto rounded-lg triangle skeleton relative">
        <p className="absolute block inset-0 w-full h-full z-[0]  py-4 px-6">
          <p className="text-center text-transparent italic  text-sm z-[1] relative">
            {data.summary}
          </p>
        </p>
        <p className="absolute bottom-2 text-transparent right-2 text-[12px] not-italic z-[1]">
          {data.like}
        </p>
      </div>
    </div>
  )
}

export default ReviewItem
