import fetchGql from "@/api/serverApi"
import { MediaType } from "anilist_gql/graphql"
import { ANIME_DETAIL } from "gql/animeDetail"
import { MethodFactory } from "@/api/api_helper"
const method = MethodFactory()
method.GET(async (req, res) => {
  const { id } = req.query
  console.log("api anime-detail run")
  const data = await fetchGql(ANIME_DETAIL, {
    id: parseInt(id as string),
    type: MediaType.Anime,
    isAdult: false,
  })
  res.json(data)
})

export default method.init()
