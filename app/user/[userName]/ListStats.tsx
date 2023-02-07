import clsx from "clsx"
import React from "react"
import { loop } from "utils/app"

const ListStats: React.FC<{ className?: string }> = ({ className }) => {
  const percent = 50
  return (
    <div
      className={clsx("bg-foreground rounded-md overflow-hidden", className)}
    >
      <div className="flex">
        {loop(3).map((i) => (
          <div
            key={i}
            className="flex-auto basis-[33.33333%] w-[33.33333%] flex text-center items-center flex-col mx-2.5 my-5"
          >
            <p className="text-blue text-md font-bold mb-1">967</p>
            <small>Total Anime</small>
          </div>
        ))}
      </div>
      <div className="flex bg-foreground-grey">
        {loop(3).map((i) => (
          <div
            key={i}
            className={clsx(
              "flex-auto basis-[33.33333%] w-[33.33333%] flex text-center items-center flex-col mx-2.5 ",
              "relative before:absolute before:w-[1px] before:h-2 before:left-[50%] before:bottom-0 before:bg-text"
            )}
          >
            <p className="text-[12px] text-text my-2.5">200</p>
          </div>
        ))}
      </div>
      <div className="bg-foreground-grey-dark h-[11px] relative flex">
        <div
          className="overflow-hidden rounded-r-full"
          style={{ width: `${percent}%` }}
        >
          <div
            className="w-full h-full bar"
            // style={{ width: `${10000 / percent}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default ListStats
