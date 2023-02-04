"use client"

import { debounce } from "lodash"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import React, { forwardRef, useContext, useRef } from "react"
import { ProgressContext } from "./progress"

type PropsType<T extends (p: any) => any> = T extends (p: infer R) => any
  ? R
  : never
export const NLink = forwardRef<HTMLAnchorElement, PropsType<typeof Link>>(
  function NLink(props, ref) {
    const { triggerStart } = useContext(ProgressContext)
    const router = useRouter()
    const path = usePathname()
    const prefetch = useRef(debounce(router.prefetch, 100))
    return (
      <Link
        prefetch={false}
        {...props}
        onMouseEnter={(e) => {
          props.onMouseEnter && props.onMouseEnter(e)
          if (props.prefetch === false || props.prefetch === undefined) {
            prefetch.current(props.href.toString())
          }
        }}
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
