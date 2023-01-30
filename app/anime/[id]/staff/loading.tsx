import React from "react"
import { loop } from "utils/app"
import { StaffItemSkeleton } from "./StaffItem"

const Loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      {loop(8).map((item, i) => (
        <StaffItemSkeleton key={i} />
      ))}
    </div>
  )
}

export default Loading
