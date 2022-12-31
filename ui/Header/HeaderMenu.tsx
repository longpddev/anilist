import Link from "next/link"
import React from "react"
import Icon from "../Icon"

const MenuItem: React.FC<{
  href: string
  label: string
  children?: React.ReactNode
}> = ({ href, label, children }) => {
  return (
    <div className="menu-lv1">
      <Link className="link" href={href}>
        {label}
      </Link>
      {children}
    </div>
  )
}

const SearchSubMenu = () => {
  return (
    <div className="submenu">
      <div className="submenu__head">
        <div className="submenu__item">
          <div className="submenu__left">
            <Icon icon="play" />
          </div>
          <div className="submenu__right">
            <Link href={"/"}>Anime</Link>
            <div className="submenu__right--sub">
              <Link href="/">Top 100</Link>
              <Link href="/">Trending</Link>
              <Link href="/">Top Movies</Link>
            </div>
          </div>
        </div>
        <div className="submenu__item mt-4">
          <div className="submenu__left">
            <Icon icon="book-open" />
          </div>
          <div className="submenu__right">
            <Link href={"/"}>Manga</Link>
            <div className="submenu__right--sub">
              <Link href="/">Top 100</Link>
              <Link href="/">Trending</Link>
              <Link href="/">Top Manhwa</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="submenu__footer">
        <Link href={"/"} className="submenu__footer--item">
          <Icon icon="user-tie" />
          <span>Staff</span>
        </Link>
        <Link href={"/"} className="submenu__footer--item">
          <Icon icon="user-astronaut" />
          <span>Characters</span>
        </Link>
        <Link href={"/"} className="submenu__footer--item">
          <Icon icon="star" />
          <span>Reviews</span>
        </Link>
        <Link href={"/"} className="submenu__footer--item">
          <Icon icon="thumbs-up" />
          <span>Recommendations</span>
        </Link>
      </div>
    </div>
  )
}

const HeaderMenu = () => {
  return (
    <div className="header-menu flex mx-auto">
      <MenuItem href="/" label="Search">
        <SearchSubMenu />
      </MenuItem>
      <MenuItem href="/" label="Social" />
      <MenuItem href="/" label="Forum" />
    </div>
  )
}

export default HeaderMenu
