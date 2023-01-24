import { ReviewItem } from "@/pageSetup/AnimeDetail"
import Card, { CardContentLeft } from "@/ui/Card"
import Link from "next/link"
import React from "react"

const page = () => {
  return (
    <div className="grid grid-cols-1 gap-4 max-w-[700px]">
      {Array(10)
        .fill(1)
        .map((item, i) => (
          <ReviewItem key={i} />
        ))}
    </div>
  )
}

export default page
