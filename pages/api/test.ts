import fetchGql from "@/api/serverApi"
import { MediaType } from "anilist_gql/graphql"
import { ANIME_DETAIL } from "gql/animeDetail"
import { MethodFactory } from "@/api/api_helper"
const method = MethodFactory()
method.GET(async (req, res) => {
  const { id } = req.query
  await new Promise((res) => {
    setTimeout(() => res(true), 500)
  })

  res.json({
    status: "success",
  })
})

export default method.init()
