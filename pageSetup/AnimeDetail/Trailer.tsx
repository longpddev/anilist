"use client"

import React, { Suspense } from "react"
import PageSection from "./PageSection"
const ReactPlayer = React.lazy(() => import("react-player"))
const Trailer = () => {
  return (
    <PageSection title="Trailer" full>
      <Suspense>
        <ReactPlayer
          width="100%"
          height="230px"
          url="https://www.youtube.com/watch?v=a9tq0aS5Zu8"
        ></ReactPlayer>
      </Suspense>
    </PageSection>
  )
}

export default Trailer
