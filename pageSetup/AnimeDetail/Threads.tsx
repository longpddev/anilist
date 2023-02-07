import Image from "next/image"
import Link from "app/context/NLink"
import React from "react"
import PageSection from "@/ui/PageSection"
import Genres from "@/ui/Genres"
import noImage from "@/assets/no_image.jpeg"
import dayjs from "utils/dayjs"
import { GenresSkeleton } from "@/ui/Genres/Genres"
import { numberToTime, timeToList } from "utils/app"
interface ThreadData {
  id: number
  commentId: number
  title: string
  userAvatar: string | undefined
  userName: string
  repliedAt: number
  tags: { name: string; id: number }[]
}
const ThreadsItem: React.FC<{
  data: ThreadData
}> = ({ data }) => {
  return (
    <div className="rounded-md bg-foreground p-4 relative">
      <Link
        className="text-sm text-text-lighter hover:text-blue inline-block mb-3"
        href={`/forum/thread/${data.id}`}
      >
        {data.title}
      </Link>
      <div className="flex gap-2 items-center">
        <Image
          width={25}
          height={25}
          alt="avatar"
          src={data.userAvatar || noImage}
        ></Image>
        <p className="text-sm">
          <Link className="text-blue" href={`/user/${data.userName}`}>
            {data.userName}
          </Link>
          &nbsp;
          <Link
            href={`/forum/thread/${data.id}/comment/${data.commentId}`}
            className="text-text-lighter hover:text-blue"
          >
            replied{" "}
            {timeToList(
              numberToTime(new Date().getTime() - data.repliedAt * 1000),
              true
            ).at(0)}{" "}
            ago
          </Link>
        </p>
        <div className="ml-auto space-x-2">
          {data.tags.map((item) => (
            <Genres
              href={`/forum/recent/?category=${item.id}`}
              text={item.name}
              key={item.id}
              className="bg-blue"
            ></Genres>
          ))}
        </div>
      </div>
    </div>
  )
}

const ThreadsItemSkeleton: React.FC<{
  data: ThreadData
}> = ({ data }) => {
  return (
    <div className="rounded-md bg-foreground p-4 relative">
      <p className="text-sm text-transparent skeleton inline-block mb-3 max-w-[350px]">
        {data.title}
      </p>
      <div className="flex gap-2 items-center">
        <div className="w-[25px] h-[25px] skeleton rounded-full"></div>
        <div className="text-transparent skeleton">
          <span className="text-inherit ">{data.userName}</span>
          &nbsp;
          <span className="text-inherit">
            replied{" "}
            {dayjs
              .duration(new Date().getTime() - data.repliedAt * 1000)
              .format("DD [days]")}{" "}
            ago
          </span>
        </div>
        <div className="ml-auto space-x-2 min-h-[40px] flex flex-wrap items-center">
          {data.tags.map((item) => (
            <GenresSkeleton text={item.name} key={item.id}></GenresSkeleton>
          ))}
        </div>
      </div>
    </div>
  )
}

const Threads: React.FC<{
  data: ThreadData[]
  full?: boolean
}> = ({ data, full }) => {
  if (data.length === 0) return null
  return (
    <PageSection title="Thread" full={full}>
      {data.map((item, i) => (
        <ThreadsItem key={i} data={item} />
      ))}
    </PageSection>
  )
}

export const ThreadsSkeleton: React.FC<{
  data: ThreadData[]
  full?: boolean
}> = ({ data, full }) => {
  return (
    <PageSection title="Thread" full={full}>
      {data.map((item, i) => (
        <ThreadsItemSkeleton key={i} data={item} />
      ))}
    </PageSection>
  )
}

export default Threads
