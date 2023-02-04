export const MediaFormatLabel = {
  Tv: "TV show",
  Movie: "Movie",
  Music: "Music",
  Novel: "Novel",
  Ona: "Ona",
  OneShot: "OneShot",
  Ova: "Ova",
  Special: "Special",
  TvShort: "TvShort",
} as const

export const MediaSeasonLabel = {
  Fall: "Fall",
  Spring: "Spring",
  Summer: "Summer",
  Winter: "Winter",
} as const

export const MediaStatusLabel = {
  Finished: "Finished",
  Cancelled: "Cancelled",
  Hiatus: "Hiatus",
  NotYetReleased: "NotYetReleased",
  Releasing: "Releasing",
} as const

export const MediaListColor = {
  Completed: "rgb(104, 214, 57)",
  Current: "rgb(146, 86, 243)",
  Dropped: "rgb(232, 93, 117)",
  Paused: "rgb(247, 121, 164)",
  Planning: "rgb(2, 169, 255)",
  Repeating: "white",
} as const

export const MediaListLabel = {
  Completed: "Completed",
  Current: "Current",
  Dropped: "Dropped",
  Paused: "Paused",
  Planning: "Planning",
  Repeating: "Repeating",
} as const

export const MediaSourceLabel = {
  Anime: "Anime",
  Manga: "Manga",
} as const

export const MediaRelationLabel = {
  Adaptation: "Adaptation",
  Alternative: "Alternative",
  Character: "Character",
  Compilation: "Compilation",
  Contains: "Contains",
  Other: "Other",
  Parent: "Parent",
  Prequel: "Prequel",
  Sequel: "Sequel",
  SideStory: "Side Story",
  Source: "Source",
  SpinOff: "SpinOff",
  Summary: "Summary",
} as const

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
