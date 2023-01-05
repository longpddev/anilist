import {MediaFormat} from "anilist_gql/graphql"
import {MediaFormatLabel} from "interface/Anilist"

export const getMediaLabel = (key: MediaFormat) => {
  return MediaFormatLabel[key as keyof typeof MediaFormatLabel]
}