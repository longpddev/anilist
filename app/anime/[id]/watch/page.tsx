import { ReviewItem, WatchItem } from "@/pageSetup/AnimeDetail"
import Card, { CardContentLeft } from "@/ui/Card"
import Link from "app/context/NLink"
import React from "react"

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {/* {Array(10)
        .fill(1)
        .map((item, i) => (
          <WatchItem
            name="Episode 11 - No Matter How Many Lives"
            src="https://img1.ak.crunchyroll.com/i/spire4-tmb/4ad7006be1e71909f942ef870410db581644738682_full.jpg"
            key={i}
          />
        ))} */}
    </div>
  )
}

export default page
