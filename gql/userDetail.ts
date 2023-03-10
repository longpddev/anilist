import { graphql } from "anilist_gql"

export const USER_SIMPLE_INFO = graphql(`
  query UserSimpleInfo($id: Int, $name: String) {
    User(id: $id, name: $name) {
      id
      name
      previousNames {
        name
        updatedAt
      }
      avatar {
        large
      }
      bannerImage
      about
      isFollowing
      isFollower
      donatorTier
      donatorBadge
      createdAt
      moderatorRoles
      isBlocked
      bans
    }
  }
`)

export const USER_DETAIL_OVERVIEW = graphql(`
  query UserSimpleInfo($id: Int, $name: String) {
    User(id: $id, name: $name) {
      id
      name
      previousNames {
        name
        updatedAt
      }
      avatar {
        large
      }
      bannerImage
      about
      isFollowing
      isFollower
      donatorTier
      donatorBadge
      createdAt
      moderatorRoles
      isBlocked
      bans
      options {
        profileColor
        restrictMessagesToFollowing
      }
      mediaListOptions {
        scoreFormat
      }
      statistics {
        anime {
          count
          meanScore
          standardDeviation
          minutesWatched
          episodesWatched
          genrePreview: genres(limit: 10, sort: COUNT_DESC) {
            genre
            count
          }
        }
        manga {
          count
          meanScore
          standardDeviation
          chaptersRead
          volumesRead
          genrePreview: genres(limit: 10, sort: COUNT_DESC) {
            genre
            count
          }
        }
      }
      stats {
        activityHistory {
          date
          amount
          level
        }
      }
      favourites {
        anime {
          edges {
            favouriteOrder
            node {
              id
              type
              status(version: 2)
              format
              isAdult
              bannerImage
              title {
                userPreferred
              }
              coverImage {
                large
              }
              startDate {
                year
              }
            }
          }
        }
        manga {
          edges {
            favouriteOrder
            node {
              id
              type
              status(version: 2)
              format
              isAdult
              bannerImage
              title {
                userPreferred
              }
              coverImage {
                large
              }
              startDate {
                year
              }
            }
          }
        }
        characters {
          edges {
            favouriteOrder
            node {
              id
              name {
                userPreferred
              }
              image {
                large
              }
            }
          }
        }
        staff {
          edges {
            favouriteOrder
            node {
              id
              name {
                userPreferred
              }
              image {
                large
              }
            }
          }
        }
        studios {
          edges {
            favouriteOrder
            node {
              id
              name
            }
          }
        }
      }
    }
  }
`)
