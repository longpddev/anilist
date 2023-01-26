import { getCharactersByAnimeId } from "@/api/test"
import CharacterCard from "@/pageSetup/AnimeDetail/CharacterCard"
import Card, { CardContentLeft, CardContentRight } from "@/ui/Card"
import { Select } from "@/ui/Select"
import Link from "next/link"
import Content from "./content"

const Page = async ({ params }: { params: { id: string } }) => {
  // const [val, valSet] = useState<number | string>("option1")
  const characters = await getCharactersByAnimeId(parseInt(params.id), 1)
  return <Content initData={characters} animeId={parseInt(params.id)} />
}

export default Page
