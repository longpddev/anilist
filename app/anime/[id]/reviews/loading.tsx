import { ReviewItemSkeleton } from "@/pageSetup/AnimeDetail/ReviewItem"
import React from "react"
import { loop } from "utils/app"

const loading = () => {
  return (
    <div className="grid grid-cols-1 gap-4 max-w-[700px] mx-auto">
      {loop(10).map((item, i) => (
        <ReviewItemSkeleton
          key={i}
          data={{
            src: undefined,
            like: 0,
            summary: "slkjflslkasj las klalks lkas j ldjalskd j",
            id: 0,
            username: "asjdhjkas asd",
          }}
        />
      ))}
    </div>
  )
}

export default loading
