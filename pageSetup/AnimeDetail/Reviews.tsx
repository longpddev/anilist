import React from "react"
import PageSection from "./PageSection"
import ReviewItem, { ReviewData } from "./ReviewItem"

const Reviews: React.FC<{
  data: ReviewData[]
}> = ({ data }) => {
  return (
    <PageSection title="Review">
      {data.map((item, i) => (
        <ReviewItem data={item} key={i} />
      ))}
    </PageSection>
  )
}

export default Reviews
