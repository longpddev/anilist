import Icon from "@/ui/Icon"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const ReviewItem: React.FC<{}> = () => {
  return (
    <div className="flex gap-4">
      <div className="min-w-[50px]">
        <Link href="/">
          <Image
            src="https://s4.anilist.co/file/anilistcdn/user/avatar/large/b39336-asraDOOWp2WT.png"
            width={50}
            height={50}
            alt="avatar"
          ></Image>
        </Link>
      </div>
      <div
        className={clsx(
          "flex-auto rounded-lg bg-foreground py-4 px-6 triangle relative"
        )}
      >
        <Link
          href="/"
          className="absolute block inset-0 w-full h-full z-[0]"
        ></Link>
        <p className="text-center text-text-lighter italic text-sm z-[1] relative">
          A Mediocre Story with Nothing New that Would be Glossed if Ufotable
          with their Unlimited Budget Works didn't Touch it
        </p>
        <p className="absolute bottom-2 right-2 text-[12px] not-italic z-[1]">
          <Icon icon={faThumbsUp}></Icon>&nbsp;252
        </p>
      </div>
    </div>
  )
}

export default ReviewItem
