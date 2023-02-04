import { MethodFactoryForEdge } from "@/api/api_helper"

export const config = {
  runtime: "edge",
}

const method = MethodFactoryForEdge()
method.GET(async (req, query) => {
  const id = query.get("id")
  // const data = await fetchGql(ANIME_DETAIL, {
  //   id: parseInt(id as string),
  //   type: MediaType.Anime,
  //   isAdult: false,
  // })
  return { message: "hello" }
})

export default method.init()
