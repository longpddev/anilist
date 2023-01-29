import clsx from "clsx"
import Image from "next/image"
import Link from "app/context/NLink"
import React from "react"
import PageSection from "./PageSection"
import noImage from "@/assets/no_image.jpeg"
export const WatchItem: React.FC<{
  src: string | undefined
  name: string
  url: string
  className?: string
}> = ({ src, name, className, url }) => {
  return (
    <div className={clsx(className, "relative w-full pt-[62.89308176100629%]")}>
      <div className="absolute inset-0 w-full h-full">
        <a href={url} target="_blank" rel="noreferrer">
          <Image
            src={src || noImage}
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

export const WatchItemSkeleton: React.FC<{
  src: string | undefined
  name: string
  url: string
  className?: string
}> = ({ src, name, className, url }) => {
  return (
    <div className={clsx(className, "relative w-full pt-[62.89308176100629%]")}>
      <div className="absolute inset-0 w-full h-full">
        <div className="skeleton w-full h-full"></div>
        <p className="absolute bottom-0 left-0 right-0 w-full pt-2.5 text-[12px]  bg-foreground bg-opacity-70">
          <span className="line-clamp-1 text-transparent skeleton bg-opacity-100">
            {name}
          </span>
        </p>
      </div>
    </div>
  )
}

interface WatchProps {
  data: {
    site: string
    title: string
    thumbnail: string | undefined
    url: string
  }[]
  isLoading?: boolean
}
const Watch: React.FC<WatchProps> = ({ data, isLoading }) => {
  if (data.length === 0) return null
  return (
    <PageSection title="Watch" full>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {data.map((item, i) =>
          isLoading ? (
            <WatchItemSkeleton
              key={i}
              name={item.title}
              src={item.thumbnail}
              url={item.url}
            />
          ) : (
            <WatchItem
              key={i}
              name={item.title}
              src={item.thumbnail}
              url={item.url}
            />
          )
        )}
      </div>
    </PageSection>
  )
}

export const WatchSkeleton: React.FC<WatchProps> = (props) => (
  <Watch {...props} isLoading />
)

export default Watch
