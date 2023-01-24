import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import PageSection from "./PageSection"

export const WatchItem: React.FC<{
  src: string
  name: string
  className?: string
}> = ({ src, name, className }) => {
  return (
    <div className={clsx(className, "relative w-full pt-[62.89308176100629%]")}>
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={src}
          alt={name}
          width={159}
          height={100}
          className="w-full h-full"
        ></Image>
        <Link
          href={"/"}
          className="absolute bottom-0 left-0 right-0 w-full p-2.5 text-[12px]  bg-overlay bg-opacity-70"
        >
          <span className="line-clamp-1 text-text-bright hover:text-blue bg-opacity-100">
            {name}
          </span>
        </Link>
      </div>
    </div>
  )
}

const Watch = () => {
  return (
    <PageSection title="Watch" full>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {Array(4)
          .fill(1)
          .map((item, i) => (
            <WatchItem
              key={i}
              name="Episode 11 - No Matter How Many Lives"
              src="https://img1.ak.crunchyroll.com/i/spire4-tmb/4ad7006be1e71909f942ef870410db581644738682_full.jpg"
            />
          ))}
      </div>
    </PageSection>
  )
}

export default Watch
