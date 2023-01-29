"use client"
import NLink from "app/context/NLink"
import clsx from "clsx"
import { usePathname } from "next/navigation"
import React from "react"

const NavLink: React.FC<{
  children: React.ReactNode
  href: string
  currentPath: string
}> = ({ children, href, currentPath }) => (
  <NLink
    href={href}
    className={clsx(" hover:text-blue", {
      "text-text-lighter": currentPath !== href,
      "text-blue": currentPath === href,
    })}
  >
    {children}
  </NLink>
)
const HeadDetailMenu: React.FC<{
  links: {
    name: string
    link: string
  }[]
}> = ({ links }) => {
  const currentPath = usePathname() || ""
  return (
    <ul className="flex justify-around mt-auto overflow-auto">
      {links.map((item, i) => (
        <li className="p-3.5" key={i}>
          <NavLink currentPath={currentPath} href={item.link}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default HeadDetailMenu
