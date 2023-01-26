import Image from "next/image"
import Link from "next/link"
import React from "react"
import PageSection from "./PageSection"
import Genres from "@/ui/Genres"
import noImage from "@/assets/no_image.jpeg"
import dayjs from "utils/dayjs"
interface ThreadData {
  id: number
  commentId: number
  title: string
  userAvatar: string
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
            {dayjs
              .duration(new Date().getTime() - data.repliedAt * 1000)
              .format("DD [days]")}{" "}
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

const Threads: React.FC<{
  data: ThreadData[]
}> = ({ data }) => {
  return (
    <PageSection title="Thread">
      {data.map((item, i) => (
        <ThreadsItem key={i} data={item} />
      ))}
    </PageSection>
  )
}

export default Threads
