import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export interface ICardContentLeftProps {
  children: React.ReactNode
  src: string
  alt: string
  link?: string
  height?: number
  tags?: string[]
  className?: string
}
const CardContentLeft: React.FC<ICardContentLeftProps> = ({
  children,
  tags,
  className,
  src,
  alt,
  link,
  height = 115,
}) => {
  return (
    <div
      className={clsx("w-full flex-auto flex", className)}
      style={{
        maxHeight: height,
      }}
    >
      {link ? (
        <Link href={link}>
          <Image
            src={src}
            alt={alt}
            className="inline-block h-full"
            width={height * 0.7391304347826086}
            height={height}
          />
        </Link>
      ) : (
        <Image
          src={src}
          alt={alt}
          className="inline-block h-full"
          width={height * 0.7391304347826086}
          height={height}
        />
      )}

      <div className="p-3 flex flex-col">
        <div>{children}</div>
        {tags && (
          <p className="text-[12px] mt-auto text-text-lighter">
            <span>{tags.join(" · ")}</span>
          </p>
        )}
      </div>
    </div>
  )
}

export default CardContentLeft
