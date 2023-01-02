import clsx from "clsx"
import Link from "next/link"
import React from "react"

interface ICardSectionProps {
  title: string
  link: string
  className?: string
  children: React.ReactNode
}
const CardSection: React.FC<ICardSectionProps> = ({
  title,
  link,
  className,
  children,
}) => {
  return (
    <div className={clsx(className, "mb-7 md:mb-12")}>
      <div className="flex justify-between mb-4">
        <h3 className="uppercase text-lg font-bold text-gray-800">{title}</h3>
        <Link
          className="text-gray-600 hover:text-gray-900 text-[12px]"
          href={link}
        >
          View all
        </Link>
      </div>
      <div className="grid xl:gap-10 lg:gap-7  sm:grid-cols-5 sm:gap-3 grid-cols-2 gap-5">
        {children}
      </div>
    </div>
  )
}

export default CardSection
