import NLink from "app/context/NLink"
import clsx from "clsx"
import Image from "next/image"
import React from "react"

interface DivRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  width: number
  height: number
}
const DivRatio: React.FC<DivRatioProps> = ({
  children,
  height,
  width,
  className,
  ...props
}) => {
  return (
    <div {...props} className={className || "relative"}>
      <div style={{ paddingBottom: `${(height / width) * 100}%` }}>
        <div className="absolute inset-0 w-full h-full">{children}</div>
      </div>
    </div>
  )
}
const MediaCard: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <NLink href={"/"} className="w-full">
      <DivRatio
        width={150}
        height={200}
        className="relative rounded-md overflow-hidden"
      >
        <Image
          src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx138425-G5F2O4hHkPII.png"
          width={150}
          height={200}
          alt={""}
          className="w-full block h-full"
        ></Image>
        <div className="absolute left-0 right-0 bottom-0 p-3 pb-9 bg-overlay bg-opacity-80">
          <p
            className="line-clamp-3 bg-opacity-100 text-text-bright text-sm hover:text-blue"
            title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            laboriosam unde totam minus,"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            laboriosam unde totam minus,
          </p>
          <p className="text-blue bg-opacity-100 p-3 absolute w-1/2 left-0 bottom-0 text-[12px]">
            5/12
          </p>
          <p className="text-blue bg-opacity-100 p-3 absolute w-1/2 right-0 bottom-0 text-[12px] text-right">
            10
          </p>
        </div>
      </DivRatio>
    </NLink>
  )
}

export default MediaCard
