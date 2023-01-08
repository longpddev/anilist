import { MediaFormat, MediaSeason, MediaStatus } from "anilist_gql/graphql"

export const MediaFormatLabel = {
  [MediaFormat.Tv]: "TV show",
  [MediaFormat.Movie]: "Movie",
  [MediaFormat.Music]: "Music",
  [MediaFormat.Novel]: "Novel",
  [MediaFormat.Ona]: "Ona",
  [MediaFormat.OneShot]: "OneShot",
  [MediaFormat.Ova]: "Ova",
  [MediaFormat.Special]: "Special",
  [MediaFormat.TvShort]: "TvShort",
}

export const MediaSeasonLabel = {
  [MediaSeason.Fall]: "Fall",
  [MediaSeason.Spring]: "Spring",
  [MediaSeason.Summer]: "Summer",
  [MediaSeason.Winter]: "Winter",
}

export const MediaStatusLabel = {
  [MediaStatus.Finished]: "Finished",
  [MediaStatus.Cancelled]: "Cancelled",
  [MediaStatus.Hiatus]: "Hiatus",
  [MediaStatus.NotYetReleased]: "NotYetReleased",
  [MediaStatus.Releasing]: "Releasing",
}

export const ListLayout = {
  Grid: "Grid",
  Rect: "Rect",
  Inline: "Inline",
} as const

export interface FuzzyDate {
  year: number
  month: number
  day: number
}
