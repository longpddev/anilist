import Card, { CardContentLeft, CardContentRight } from "@/ui/Card"
import NLink from "app/context/NLink"

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
        <NLink
          href={`/characters/${data.character.id}`}
          className="text-text-lighter hover:text-blue text-[12px]"
        >
          {data.character.name}
        </NLink>
      </CardContentLeft>
      {data.actor ? (
        <CardContentRight
          src={data.actor.src}
          alt=""
          height={80}
          tags={data.actor.tags}
        >
          <NLink
            href={`/staff/${data.actor.id}`}
            className="text-text-lighter hover:text-blue text-[12px]"
          >
            {data.actor.name}
          </NLink>
        </CardContentRight>
      ) : null}
    </Card>
  )
}

export const CharacterCardLoading = () => null

export default CharacterCard
