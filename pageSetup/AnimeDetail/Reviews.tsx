import React from "react"
import PageSection from "@/ui/PageSection"
import ReviewItem, { ReviewData, ReviewItemSkeleton } from "./ReviewItem"

const Reviews: React.FC<{
  data: ReviewData[]
}> = ({ data }) => {
  if (data.length === 0) return null
  return (
    <PageSection title="Review">
      {data.map((item, i) => (
        <ReviewItem data={item} key={i} />
      ))}
    </PageSection>
  )
}

export const ReviewsSkeleton: React.FC<{
  data: ReviewData[]
}> = ({ data }) => {
  return (
    <PageSection title="Review">
      {data.map((item, i) => (
        <ReviewItemSkeleton data={item} key={i} />
      ))}
    </PageSection>
  )
}

export default Reviews
