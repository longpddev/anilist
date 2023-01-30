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
      <Link
        href={`/review/${data.id}`}
        className={clsx(
          "flex-auto rounded-lg bg-foreground self-start triangle relative py-4 px-6"
        )}
      >
        <p className="text-center text-text-lighter italic text-sm z-[1] relative">
          {data.summary}
        </p>
        <p className="absolute bottom-2 right-2 text-[12px] not-italic z-[1]">
          <Icon icon={faThumbsUp}></Icon>&nbsp;{data.like}
        </p>
      </Link>
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
      <div className="flex-auto rounded-lg triangle overflow-hidden">
        <div className="skeleton relative py-4 px-6">
          <p className="text-center text-transparent italic  text-sm z-[1] relative">
            {data.summary}
          </p>
          <p className="absolute bottom-2 text-transparent right-2 text-[12px] not-italic z-[1]">
            {data.like}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReviewItem
