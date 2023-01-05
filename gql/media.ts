import { FragmentType, graphql } from "anilist_gql"
import { ResultOf } from "@graphql-typed-document-node/core"
export const MEDIA_BY_ID = graphql(`
  query Media($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
    }
  }
`)

export const MEDIA_FIELD = graphql(`
  fragment MediaField on Media {
    id
    title {
      userPreferred
    }
    coverImage {
      extraLarge
      large
      color
    }
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    bannerImage
    season
    seasonYear
    description
    type
    format
    status(version: 2)
    episodes
    duration
    chapters
    volumes
    genres
    isAdult
    averageScore
    popularity
    mediaListEntry {
      id
      status
    }
    nextAiringEpisode {
      airingAt
      timeUntilAiring
      episode
    }
    studios(isMain: true) {
      edges {
        isMain
        node {
          id
          name
        }
      }
    }
  }
`)

export type IMEDIA_FIELD = FragmentType<typeof MEDIA_FIELD>
