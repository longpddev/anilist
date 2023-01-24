import clsx from "clsx"
import Link from "next/link"
import React from "react"

interface IGenresProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
}
const Genres: React.FC<IGenresProps> = ({ text, className, ...props }) => {
  return (
    <Link
      href={"/"}
      {...props}
      className={clsx(
        className,
        "rounded-full anime-genres text-white text-[11px] font-bold leading-[1.636363em]"
      )}
    >
      {text}
    </Link>
  )
}

export default Genres
