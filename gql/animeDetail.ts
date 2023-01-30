import { graphql } from "anilist_gql"
import type { ResultOf } from "@graphql-typed-document-node/core"

export const ANIME_DETAIL_FOR_LAYOUT = graphql(`
  query AnimeDetailForLayout($id: Int, $type: MediaType, $isAdult: Boolean) {
    Media(id: $id, type: $type, isAdult: $isAdult) {
      id
      title {
        userPreferred
        romaji
        english
        native
      }
      coverImage {
        extraLarge
        large
      }
      bannerImage
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
      description
      season
      seasonYear
      type
      format
      status(version: 2)
      episodes
      duration
      chapters
      volumes
      genres
      synonyms
      source(version: 3)
      isAdult
      isLocked
      meanScore
      averageScore
      popularity
      favourites
      isFavouriteBlocked
      hashtag
      countryOfOrigin
      isLicensed
      isFavourite
      isRecommendationBlocked
      isFavouriteBlocked
      isReviewBlocked
      studios {
        edges {
          isMain
          node {
            id
            name
          }
        }
      }
      externalLinks {
        id
        site
        url
        type
        language
        color
        icon
        notes
        isDisabled
      }
      rankings {
        id
        rank
        type
        format
        year
        season
        allTime
        context
      }
      tags {
        id
        name
        description
        rank
        isMediaSpoiler
        isGeneralSpoiler
        userId
      }
    }
  }
`)

export const ANIME_DETAIL_WATCH = graphql(`
  query AnimeDetailWatch($id: Int, $type: MediaType, $isAdult: Boolean) {
    Media(id: $id, type: $type, isAdult: $isAdult) {
      id
      streamingEpisodes {
        site
        title
        thumbnail
        url
      }
    }
  }
`)

export const ANIME_DETAIL = graphql(`
  query AnimeDetail($id: Int, $type: MediaType, $isAdult: Boolean) {
    Media(id: $id, type: $type, isAdult: $isAdult) {
      id
      relations {
        edges {
          id
          relationType(version: 2)
          node {
            id
            title {
              userPreferred
            }
            format
            type
            status(version: 2)
            bannerImage
            coverImage {
              large
            }
          }
        }
      }
      characterPreview: characters(perPage: 6, sort: [ROLE, RELEVANCE, ID]) {
        edges {
          id
          role
          name
          voiceActors(language: JAPANESE, sort: [RELEVANCE, ID]) {
            id
            name {
              userPreferred
            }
            language: languageV2
            image {
              large
            }
          }
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
      staffPreview: staff(perPage: 8, sort: [RELEVANCE, ID]) {
        edges {
          id
          role
          node {
            id
            name {
              userPreferred
            }
            language: languageV2
            image {
              large
            }
          }
        }
      }

      reviewPreview: reviews(perPage: 2, sort: [RATING_DESC, ID]) {
        pageInfo {
          total
        }
        nodes {
          id
          summary
          rating
          ratingAmount
          user {
            id
            name
            avatar {
              large
            }
          }
        }
      }
      recommendations(perPage: 7, sort: [RATING_DESC, ID]) {
        pageInfo {
          total
        }
        nodes {
          id
          rating
          userRating
          mediaRecommendation {
            id
            title {
              userPreferred
            }
            format
            type
            status(version: 2)
            bannerImage
            coverImage {
              large
            }
          }
          user {
            id
            name
            avatar {
              large
            }
          }
        }
      }

      streamingEpisodes {
        site
        title
        thumbnail
        url
      }
      trailer {
        id
        site
      }
      mediaListEntry {
        id
        status
        score
      }
      stats {
        statusDistribution {
          status
          amount
        }
        scoreDistribution {
          score
          amount
        }
      }
    }
  }
`)

export const ANIME_ACTIVITY = graphql(`
  query AnimeActivity($id: Int, $page: Int) {
    Page(page: $page, perPage: 10) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      activities(mediaId: $id, sort: ID_DESC, type: MEDIA_LIST) {
        ... on ListActivity {
          id
          userId
          type
          status
          progress
          replyCount
          isLocked
          isSubscribed
          isLiked
          likeCount
          createdAt
          user {
            id
            name
            avatar {
              large
            }
          }
          media {
            id
            type
            bannerImage
            title {
              userPreferred
            }
            coverImage {
              large
            }
          }
        }
      }
    }
  }
`)

export const ANIME_THREAD = graphql(`
  query AnimeThread($id: Int, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      threads(mediaCategoryId: $id, sort: ID_DESC) {
        id
        title
        replyCount
        viewCount
        replyCommentId
        repliedAt
        createdAt
        categories {
          id
          name
        }
        user {
          id
          name
          avatar {
            large
          }
        }
        replyUser {
          id
          name
          avatar {
            large
          }
        }
      }
    }
  }
`)

export const ANIME_CHARACTERS = graphql(`
  query AnimeCharacters($id: Int, $page: Int) {
    Media(id: $id) {
      id
      characters(page: $page, perPage: 20, sort: [ROLE, RELEVANCE, ID]) {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        edges {
          id
          role
          name
          voiceActorRoles(sort: [RELEVANCE, ID]) {
            roleNotes
            dubGroup
            voiceActor {
              id
              name {
                userPreferred
              }
              language: languageV2
              image {
                large
              }
            }
          }
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
    }
  }
`)

export const ANIME_STATS = graphql(`
  query AnimeStats($id: Int) {
    Media(id: $id) {
      id
      rankings {
        id
        rank
        type
        format
        year
        season
        allTime
        context
      }
      trends(sort: ID_DESC) {
        nodes {
          averageScore
          date
          trending
          popularity
        }
      }
      airingTrends: trends(releasing: true, sort: EPISODE_DESC) {
        nodes {
          averageScore
          inProgress
          episode
        }
      }
      distribution: stats {
        status: statusDistribution {
          status
          amount
        }
        score: scoreDistribution {
          score
          amount
        }
      }
    }
  }
`)

export const ANIME_REVIEWS = graphql(`
  query AnimeReviews($id: Int, $page: Int) {
    Media(id: $id) {
      id
      title {
        userPreferred
      }
      reviews(page: $page, sort: [RATING_DESC, ID]) {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        nodes {
          id
          summary
          rating
          ratingAmount
          user {
            id
            name
            avatar {
              large
            }
          }
        }
      }
    }
  }
`)

export type ANIME_REVIEWS_TYPE = ResultOf<typeof ANIME_REVIEWS>
export type ANIME_DETAIL_WATCH_TYPE = ResultOf<typeof ANIME_DETAIL_WATCH>
export type ANIME_DETAIL_FOR_LAYOUT_TYPE = ResultOf<
  typeof ANIME_DETAIL_FOR_LAYOUT
>
export type ANIME_DETAIL_TYPE = ResultOf<typeof ANIME_DETAIL>
export type ANIME_ACTIVITY_TYPE = ResultOf<typeof ANIME_ACTIVITY>
export type ANIME_THREAD_TYPE = ResultOf<typeof ANIME_THREAD>
export type ANIME_CHARACTERS_TYPE = ResultOf<typeof ANIME_CHARACTERS>
export type ANIME_STATS_TYPE = ResultOf<typeof ANIME_STATS>
