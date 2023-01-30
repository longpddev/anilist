import { WatchItemSkeleton } from "@/pageSetup/AnimeDetail/Watch"
import React from "react"

const loop = (count: number) => Array(count).fill(1)
const loading = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {loop(12).map((item, i) => (
        <WatchItemSkeleton
          name={"dkjfksjdhf"}
          src={undefined}
          url={"sdkfjskdljfj"}
          key={i}
        />
      ))}
    </div>
  )
}

export default loading
