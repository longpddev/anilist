import Card, { CardContentLeft } from "@/ui/Card"
import { CardContentLeftSkeleton } from "@/ui/Card/CardContentLeft"
import Link from "next/link"
import React from "react"

const StaffItem: React.FC<{
  data: {
    id: number
    name: string
    src: string | undefined
    tags: string[]
  }
}> = ({ data }) => {
  return (
    <Card>
      <CardContentLeft
        src={data.src}
        alt={data.name}
        height={80}
        tags={data.tags}
        link={`/staff/${data.id}`}
      >
        <Link
          href={`/staff/${data.id}`}
          className="text-text-lighter hover:text-blue text-[12px]"
        >
          {data.name}
        </Link>
      </CardContentLeft>
    </Card>
  )
}

export const StaffItemSkeleton = () => {
  return (
    <Card>
      <CardContentLeftSkeleton
        src={undefined}
        alt=""
        height={80}
        tags={["Design Manager (eps 11, 14)"]}
      >
        <div className="text-transparent skeleton text-[12px]">
          Tanjirou Kamado
        </div>
      </CardContentLeftSkeleton>
    </Card>
  )
}
export default StaffItem
