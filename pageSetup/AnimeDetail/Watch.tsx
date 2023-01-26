import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import PageSection from "./PageSection"

export const WatchItem: React.FC<{
  src: string
  name: string
  url: string
  className?: string
}> = ({ src, name, className, url }) => {
  return (
    <div className={clsx(className, "relative w-full pt-[62.89308176100629%]")}>
      <div className="absolute inset-0 w-full h-full">
        <a href={url} target="_blank" rel="noreferrer">
          <Image
            src={src}
            alt={name}
            width={159}
            height={100}
            className="w-full h-full"
          ></Image>
          <p className="absolute bottom-0 left-0 right-0 w-full p-2.5 text-[12px]  bg-overlay bg-opacity-70">
            <span className="line-clamp-1 text-text-bright hover:text-blue bg-opacity-100">
              {name}
            </span>
          </p>
        </a>
      </div>
    </div>
  )
}

const Watch: React.FC<{
  data: {
    site: string
    title: string
    thumbnail: string
    url: string
  }[]
}> = ({ data }) => {
  return (
    <PageSection title="Watch" full>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {data.map((item, i) => (
          <WatchItem
            key={i}
            name={item.title}
            src={item.thumbnail}
            url={item.url}
          />
        ))}
      </div>
    </PageSection>
  )
}

export default Watch
