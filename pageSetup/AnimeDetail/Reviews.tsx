import Icon from "@/ui/Icon"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import PageSection from "./PageSection"
import ReviewItem from "./ReviewItem"

const Reviews = () => {
  return (
    <PageSection title="Review">
      {Array(4)
        .fill(1)
        .map((item, i) => (
          <ReviewItem key={i} />
        ))}
    </PageSection>
  )
}

export default Reviews
