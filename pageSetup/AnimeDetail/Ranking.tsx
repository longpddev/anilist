import Icon from "@/ui/Icon"
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"
import Link from "app/context/NLink"
import React from "react"

const Ranking: React.FC<{
  href: string
  children: React.ReactNode
  type: "POPULAR" | "RATED"
  className?: string
}> = ({ href, children, type, className }) => (
  <Link
    href={href}
    className={clsx(
      "block py-2 text-[12px] whitespace-nowrap anime-detail__section hover:text-blue",
      className
    )}
  >
    <Icon
      icon={type === "POPULAR" ? faHeart : faStar}
      className={clsx({
        "text-red": type === "POPULAR",
        "text-yellow": type === "RATED",
      })}
    ></Icon>
    <span className="inline-block w-full text-center ">{children}</span>
  </Link>
)

export const RankingSkeleton = () => (
  <div
    className={clsx(
      "block py-2 text-[12px] whitespace-nowrap rounded-md anime-detail__section text-transparent skeleton"
    )}
  >
    <span className="inline-block w-full text-center ">sldkfjlksdjf</span>
  </div>
)
export default Ranking
