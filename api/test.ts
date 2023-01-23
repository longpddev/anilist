import { MediaType } from "anilist_gql/graphql"
import { ANIME_DETAIL } from "gql/animeDetail"
import fetchGql from "./server"

export const getAnimeById = async (id: number) => {
  return await fetchGql(ANIME_DETAIL, {
    id,
    type: MediaType.Anime,
    isAdult: false,
  })
}
