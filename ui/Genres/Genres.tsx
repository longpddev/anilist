import clsx from "clsx"
import Link from "app/context/NLink"
import React from "react"

interface IGenresProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  href?: string
}
const Genres: React.FC<IGenresProps> = ({
  text,
  className,
  href,
  ...props
}) => {
  if (href)
    return (
      <Link
        href={href}
        {...props}
        className={clsx(
          className,
          "rounded-full anime-genres text-white text-[11px] font-bold leading-[1.636363em]"
        )}
      >
        {text}
      </Link>
    )
  return (
    <span
      {...props}
      className={clsx(
        className,
        "rounded-full anime-genres text-white text-[11px] font-bold leading-[1.636363em]"
      )}
    >
      {text}
    </span>
  )
}

export const GenresSkeleton: React.FC<IGenresProps> = ({
  text,
  className,
  ...props
}) => {
  return (
    <span
      {...props}
      className={clsx(
        className,
        "rounded-full anime-genres text-transparent skeleton overflow-hidden text-[11px] font-bold leading-[1.636363em]"
      )}
    >
      {text}
    </span>
  )
}

export default Genres
