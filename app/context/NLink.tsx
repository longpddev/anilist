"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { forwardRef, useContext } from "react"
import { ProgressContext } from "./progress"

type PropsType<T extends (p: any) => any> = T extends (p: infer R) => any
  ? R
  : never
export const NLink = forwardRef<HTMLAnchorElement, PropsType<typeof Link>>(
  function NLink(props, ref) {
    const { triggerStart } = useContext(ProgressContext)
    const path = usePathname()
    return (
      <Link
        {...props}
        onClick={(e) => {
          props.onClick && props.onClick(e)
          const linkPath = props.href.toString().replace(/\/?\?.*$/, "")
          if (linkPath === path) return
          triggerStart()
        }}
        ref={ref}
      />
    )
  }
)

export default NLink
