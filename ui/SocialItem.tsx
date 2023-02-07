import Card, { CardContentLeft } from "@/ui/Card"
import Icon from "@/ui/Icon"
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { numberToTime, timeToList } from "utils/app"
import noImage from "@/assets/no_image.jpeg"
import { CardContentLeftSkeleton } from "@/ui/Card/CardContentLeft"
import clsx from "clsx"

const SocialItem: React.FC<{
  data: {
    id: number
    mediaId: number
    mediaName: string
    status: string
    userName: string | undefined
    mediaSrc: string | undefined
    userSrc: string | undefined
    time: number
    replyCount: number
    likeCount: number
  }
  height?: number
}> = ({ data, height = 115 }) => {
  const currentTime = new Date().getTime()
  return (
    <Card>
      <CardContentLeft
        src={data.mediaSrc}
        alt=""
        link={`/anime/${data.mediaId}`}
        height={height}
        className="relative"
        wrapClass="flex h-full"
      >
        {data.userName && (
          <Link
            href={`/user/${data.userName}`}
            className="text-blue text-sm block mb-2"
          >
            {data.userName}
          </Link>
        )}

        <p
          className={clsx({
            "self-center text-[14px] leading-5": !Boolean(data.userName),
            "text-[12px]": Boolean(data.userName),
          })}
        >
          <span>{data.status} </span>
          <Link href={`/anime/${data.mediaId}`} className="text-blue ">
            {data.mediaName}
          </Link>
        </p>
        {data.userName && (
          <div className="mt-2">
            <Link href={`/user/${data.userName}`}>
              <Image
                width={36}
                height={36}
                className="rounded-md"
                alt=""
                src={data.userSrc || noImage}
              ></Image>
            </Link>
          </div>
        )}

        <div>
          <time
            data-time={data.time}
            className="text-[12px] font-semibold whitespace-nowrap"
          >
            {timeToList(numberToTime(currentTime - data.time), false).at(0)} ago
          </time>
          <div className="text-[12px] space-x-2 text-blue-dim  absolute bottom-4 right-4">
            <button
              className="hover:text-blue"
              data-tooltip=""
              data-tooltip-detail={data.replyCount + " reply"}
            >
              <Icon icon={faComment}></Icon>
            </button>
            <button
              className="hover:text-blue"
              data-tooltip=""
              data-tooltip-detail={data.likeCount + " like"}
            >
              <Icon icon={faHeart}></Icon>
            </button>
          </div>
        </div>
      </CardContentLeft>
    </Card>
  )
}

export const SocialItemSkeleton = () => {
  return (
    <Card>
      <CardContentLeftSkeleton
        src={undefined}
        alt=""
        height={115}
        className="relative"
      >
        <p className="text-transparent skeleton text-sm block mb-2">
          sdjfsk sdjfh kjsdf
        </p>

        <p className="text-[12px] text-transparent skeleton">
          <span>ksjdh skjdf</span>
          <span className="">ksdfkj nsdkfks nfksnd</span>
        </p>
        <div className="mt-2">
          <div className="rounded-md skeleton w-[36px] h-[36px]"></div>
        </div>

        <time className="text-[12px]  font-semibold absolute overflow-hidden top-4 right-4">
          <span className="text-transparent skeleton">sjkdh skjdhf</span>
        </time>
        <div className="text-[12px] space-x-2 text-blue-dim  absolute bottom-4 right-4">
          <button className="hover:text-blue">
            <Icon icon={faComment}></Icon>
          </button>
          <button className="hover:text-blue" data-tooltip="">
            <Icon icon={faHeart}></Icon>
          </button>
        </div>
      </CardContentLeftSkeleton>
    </Card>
  )
}

export default SocialItem
