import {
  MediaFormat,
  MediaListStatus,
  MediaSeason,
  MediaSource,
  MediaStatus,
} from "anilist_gql/graphql"

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

export const MediaListColor = {
  [MediaListStatus.Completed]: "rgb(104, 214, 57)",
  [MediaListStatus.Current]: "rgb(146, 86, 243)",
  [MediaListStatus.Dropped]: "rgb(232, 93, 117)",
  [MediaListStatus.Paused]: "rgb(247, 121, 164)",
  [MediaListStatus.Planning]: "rgb(2, 169, 255)",
  [MediaListStatus.Repeating]: "white",
}

export const MediaListLabel = {
  [MediaListStatus.Completed]: "Completed",
  [MediaListStatus.Current]: "Current",
  [MediaListStatus.Dropped]: "Dropped",
  [MediaListStatus.Paused]: "Paused",
  [MediaListStatus.Planning]: "Planning",
  [MediaListStatus.Repeating]: "Repeating",
}

export const MediaSourceLabel = {
  [MediaSource.Anime]: "Anime",
  [MediaSource.Manga]: "Manga",
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
