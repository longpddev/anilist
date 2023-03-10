import clsx from "clsx"
import Image from "next/image"
import Link from "app/context/NLink"
import React from "react"
import noImage from "@/assets/no_image.jpeg"
export interface ICardContentLeftProps {
  children: React.ReactNode
  src: string | undefined | null
  alt: string
  link?: string
  height?: number
  tags?: string[]
  className?: string
  wrapClass?: string
}
const CardContentLeft: React.FC<ICardContentLeftProps> = ({
  children,
  tags,
  className,
  src,
  alt,
  link,
  wrapClass,
  height = 115,
}) => {
  return (
    <div
      className={clsx("w-full flex-auto flex", className)}
      style={{
        minHeight: height,
      }}
    >
      {link ? (
        <Link href={link}>
          <Image
            src={src || noImage}
            alt={alt}
            className="inline-block h-full"
            width={height * 0.7391304347826086}
            height={height}
            style={{
              minWidth: `${height * 0.7391304347826086}px`,
            }}
          />
        </Link>
      ) : (
        <Image
          src={src || noImage}
          alt={alt}
          className="inline-block h-full"
          width={height * 0.7391304347826086}
          height={height}
        />
      )}

      <div className="p-3 flex flex-col">
        <div className={clsx(wrapClass)}>{children}</div>
        {tags && (
          <p className="text-[12px] mt-auto text-text-lighter">
            <span>{tags.join(" · ")}</span>
          </p>
        )}
      </div>
    </div>
  )
}

export const CardContentLeftSkeleton: React.FC<ICardContentLeftProps> = ({
  children,
  tags,
  className,
  src,
  alt,
  link,
  height = 115,
}) => (
  <div
    className={clsx("w-full flex-auto flex", className)}
    style={{
      minHeight: height,
    }}
  >
    <div
      className="inline-block h-full flex-1 skeleton"
      style={{
        maxWidth: `${height * 0.7391304347826086}px`,
        minWidth: `${height * 0.7391304347826086}px`,
        height: `${height}px`,
      }}
    />

    <div className="p-3 flex flex-col">
      <div>{children}</div>
      {tags && (
        <p className="text-[12px] mt-auto rounded-sm skeleton text-transparent ">
          <span className=" inline-block">{tags.join(" · ")}</span>
        </p>
      )}
    </div>
  </div>
)

export default CardContentLeft
