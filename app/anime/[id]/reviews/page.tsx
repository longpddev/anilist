"use client"

import { ReviewItem } from "@/pageSetup/AnimeDetail"
import Card, { CardContentLeft } from "@/ui/Card"
import Link from "app/context/NLink"
import React from "react"

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="grid grid-cols-1 gap-4 max-w-[700px]">
      {/* {Array(10)
        .fill(1)
        .map((item, i) => (
          <ReviewItem key={i} />
        ))} */}
    </div>
  )
}

export default page
