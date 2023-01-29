import { graphql } from "anilist_gql"
import type { ResultOf } from "@graphql-typed-document-node/core"

export const STAFF = graphql(`
  query Staff($id: Int, $page: Int, $perPage: Int) {
    Media(id: $id) {
      id
      staff(page: $page, perPage: $perPage, sort: [RELEVANCE, ID]) {
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

export type STAFF_TYPE = ResultOf<typeof STAFF>
