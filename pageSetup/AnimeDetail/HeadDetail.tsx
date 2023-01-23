"use client"

import clsx from "clsx"
import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"
const NavLink: React.FC<{
  children: React.ReactNode
  href: string
  currentPath: string
}> = ({ children, href, currentPath }) => (
  <Link
    href={href}
    className={clsx(" hover:text-blue", {
      "text-text-lighter": currentPath !== href,
      "text-blue": currentPath === href,
    })}
  >
    {children}
  </Link>
)

const HeadDetail: React.FC<{
  parentPath: string
}> = ({ parentPath }) => {
  const currentPath = usePathname() || ""
  console.log(currentPath)
  return (
    <div className="bg-foreground">
      <div className="c_container anime-detail">
        <img
          className="anime-detail__left rounded-sm relative -bottom-4"
          src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145139-Z4DjPTGNyuDj.jpg"
          alt=""
        />
        <div className="flex flex-col flex-auto">
          <h1 className="text-xl mt-8">
            Kimetsu no Yaiba: Katanakaji no Sato-hen
          </h1>
          <p className="text-sm py-3.5">
            Adaptation of the Swordsmith Village Arc.
          </p>
          <ul className="flex justify-between">
            <li className="p-3.5">
              <NavLink currentPath={currentPath} href={parentPath}>
                overview
              </NavLink>
            </li>
            <li className="p-3.5">
              <NavLink
                currentPath={currentPath}
                href={parentPath + "/characters"}
              >
                characters
              </NavLink>
            </li>
            <li className="p-3.5">
              <NavLink currentPath={currentPath} href={parentPath + "/staff"}>
                staff
              </NavLink>
            </li>
            <li className="p-3.5">
              <NavLink currentPath={currentPath} href={parentPath + "/stats"}>
                stats
              </NavLink>
            </li>
            <li className="p-3.5">
              <NavLink currentPath={currentPath} href={parentPath + "/social"}>
                social
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HeadDetail
