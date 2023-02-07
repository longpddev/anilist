"use client"
import NLink from "app/context/NLink"
import clsx from "clsx"
import { usePathname } from "next/navigation"
import React from "react"

type IClassStates = {
  hover?: string
  default?: string
  active?: string
}

const NavLink: React.FC<{
  children: React.ReactNode
  href: string
  currentPath: string
  className?: string
  classStates?: IClassStates
}> = ({ children, href, currentPath, className, classStates }) => (
  <NLink
    href={href}
    className={clsx(
      "inline-block",
      classStates?.hover || "hover:text-blue",
      className,
      {
        [classStates?.default || "text-text-lighter"]: currentPath !== href,
        [classStates?.active || "text-blue"]: currentPath === href,
      }
    )}
  >
    {children}
  </NLink>
)
const HeadDetailMenu: React.FC<{
  links: {
    name: string
    link: string
  }[]
  className?: string
  linkClass?: string
  classStates?: IClassStates
}> = ({ links, classStates, className, linkClass }) => {
  const currentPath = usePathname() || ""
  return (
    <div className={clsx(className || "mt-auto overflow-auto w-full")}>
      <ul className="flex justify-around min-w-max">
        {links.map((item, i) => (
          <li key={i}>
            <NavLink
              currentPath={currentPath}
              href={item.link}
              classStates={classStates}
              className={linkClass || "p-3.5"}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HeadDetailMenu
