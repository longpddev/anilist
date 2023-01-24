import Card, { CardContentLeft } from "@/ui/Card"
import Link from "next/link"
import React from "react"

const StaffItem = () => {
  return (
    <Card>
      <CardContentLeft
        src={undefined}
        alt=""
        height={80}
        tags={["Design Manager (eps 11, 14)"]}
      >
        <Link
          href="/"
          className="text-text-lighter hover:text-blue text-[12px]"
        >
          Tanjirou Kamado
        </Link>
      </CardContentLeft>
    </Card>
  )
}

const page = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4">
      {Array(10)
        .fill(1)
        .map((item, i) => (
          <StaffItem key={i} />
        ))}
    </div>
  )
}

export default page
