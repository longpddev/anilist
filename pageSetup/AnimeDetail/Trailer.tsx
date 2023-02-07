"use client"

import React, { Suspense } from "react"
import PageSection from "@/ui/PageSection"
import dynamic from "next/dynamic"
const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
  loading: () => {
    return <div className="w-full h-[230px] animate-pulse bg-foreground"></div>
  },
})
const Trailer: React.FC<{ code: string }> = ({ code }) => {
  return (
    <PageSection title="Trailer" full>
      <ReactPlayer
        width="100%"
        height="230px"
        url={`https://www.youtube.com/watch?v=${code}`}
      ></ReactPlayer>
    </PageSection>
  )
}

export default Trailer
