import Image from "next/image"
import React, { use } from "react"
import HeaderMenu from "./HeaderMenu"
import "./Header.scss.css"
import Link from "app/context/NLink"
import logo from "@/assets/logo.svg"

const Header = () => {
  return (
    <header>
      <div className="container-sm flex">
        <Link href={"/"}>
          <Image
            src={logo}
            className="self-center"
            width="50"
            height="50"
            alt="logo"
          ></Image>
        </Link>
        <HeaderMenu />
        <div className="flex items-center gap-4">
          <Link className="link" href={"/"}>
            Login
          </Link>
          <Link className="button__link" href={"/"}>
            Sign up
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
