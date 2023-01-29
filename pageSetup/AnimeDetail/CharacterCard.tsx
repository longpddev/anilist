import Card, { CardContentLeft, CardContentRight } from "@/ui/Card"
import { CardContentLeftSkeleton } from "@/ui/Card/CardContentLeft"
import { CardContentRightSkeleton } from "@/ui/Card/CardContentRight"
import Link from "app/context/NLink"
import React from "react"

interface CharacterData {
  character: {
    src: string | undefined
    id: number
    name: string
    tags: string[]
  }
  actor?: {
    src: string | undefined
    id: number
    name: string
    tags: string[]
  }
}
const CharacterCard: React.FC<{
  data: CharacterData
}> = ({ data }) => {
  return (
    <Card>
      <CardContentLeft
        src={data.character.src}
        alt=""
        height={80}
        tags={data.character.tags}
      >
        <Link
          href={`/characters/${data.character.id}`}
          className="text-text-lighter hover:text-blue text-[12px]"
        >
          {data.character.name}
        </Link>
      </CardContentLeft>
      {data.actor ? (
        <CardContentRight
          src={data.actor.src}
          alt=""
          height={80}
          tags={data.actor.tags}
        >
          <Link
            href={`/staff/${data.actor.id}`}
            className="text-text-lighter hover:text-blue text-[12px]"
          >
            {data.actor.name}
          </Link>
        </CardContentRight>
      ) : null}
    </Card>
  )
}

export const CharacterCardLoading = () => (
  <Card>
    <CardContentLeftSkeleton
      src={undefined}
      alt=""
      height={80}
      tags={["ksjdhfkjshdf"]}
    >
      <div className="text-transparent rounded-sm p-px skeleton text-[12px]">
        data.character.name
      </div>
    </CardContentLeftSkeleton>
    <CardContentRightSkeleton
      src={undefined}
      alt=""
      height={80}
      tags={["main kjdhfkj"]}
    >
      <div className="text-transparent rounded-sm p-px skeleton text-[12px]">
        data.actor.name
      </div>
    </CardContentRightSkeleton>
  </Card>
)

export default CharacterCard
