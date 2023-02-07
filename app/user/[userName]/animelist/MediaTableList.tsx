import NLink from "app/context/NLink"
import clsx from "clsx"
import Image from "next/image"
import React from "react"
import { loop } from "utils/app"

const Point: React.FC<{ className?: string }> = ({ className }) => (
  <span
    className={clsx(
      className || "w-1 h-1",
      "absolute inline-block rounded-full top-1/2 -translate-y-1/2 left-1.5 point-green"
    )}
  ></span>
)

const Picture: React.FC<{ className?: string }> = ({ className }) => (
  <Image
    src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx138425-G5F2O4hHkPII.png"
    alt=""
    width={140}
    height={200}
    className={clsx(
      className,
      "hidden rounded-md top-[130%] -translate-y-1/2 right-[calc(100%+20px)] absolute z-10"
    )}
  ></Image>
)

export const MediaTableListMinimum = () => {
  return (
    <div className="rounded-md bg-foreground">
      <table className="w-full">
        <thead>
          <tr className=" text-sm">
            <td className="px-4 py-3">Title</td>
            <td className="px-4 py-3 text-center">Score</td>
            <td className="px-4 py-3 text-center">Progress</td>
            <td className="px-4 py-3 text-center">Type</td>
          </tr>
        </thead>
        <tbody>
          {loop(10).map((i) => (
            <tr
              key={i}
              className="group hover:bg-blue hover:text-text-bright text-sm relative"
            >
              <td className="px-4 py-1.5">
                <Picture className="group-hover:block" />
                <Point />
                <NLink href={"/"}>Karakai Jouzu no Takagi-san Movie</NLink>
              </td>
              <td className="px-4 py-1.5 text-center">10</td>
              <td className="px-4 py-1.5 text-center">1</td>
              <td className="px-4 py-1.5 text-center">Movie</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const MediaTableList = () => {
  return (
    <div className="rounded-md bg-foreground">
      <table className="w-full">
        <thead>
          <tr className=" ">
            <td className="px-4 py-3">Title</td>
            <td className="px-4 py-3 text-center">Score</td>
            <td className="px-4 py-3 text-center">Progress</td>
            <td className="px-4 py-3 text-center">Type</td>
          </tr>
        </thead>
        <tbody>
          {loop(10).map((i) => (
            <tr
              key={i}
              className="group hover:bg-blue hover:text-text-bright relative"
            >
              <td className="px-4 pl-5 py-1.5 flex gap-3 items-center">
                <Picture className="group-hover:block" />
                <Image
                  src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx138425-G5F2O4hHkPII.png"
                  alt=""
                  width={40}
                  height={40}
                  className="group-hover:opacity-0 rounded-md min-w-10 w-10 min-h-10 h-10 "
                ></Image>
                <Point className="w-2 h-2" />
                <NLink href={"/"}>Karakai Jouzu no Takagi-san Movie</NLink>
              </td>
              <td className="px-4 py-1.5 text-center">10</td>
              <td className="px-4 py-1.5 text-center">1</td>
              <td className="px-4 py-1.5 text-center">Movie</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
