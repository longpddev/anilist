"use client"

import React, { Suspense } from "react"
import PageSection from "./PageSection"
import dynamic from "next/dynamic"
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false })
const Trailer = () => {
  return (
    <PageSection title="Trailer" full>
      <ReactPlayer
        width="100%"
        height="230px"
        url="https://www.youtube.com/watch?v=a9tq0aS5Zu8"
      ></ReactPlayer>
    </PageSection>
  )
}

export default Trailer
