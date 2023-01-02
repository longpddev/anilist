/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query HomeSection(\n    $season: MediaSeason\n    $seasonYear: Int\n    $nextSeason: MediaSeason\n    $nextYear: Int\n  ) {\n    trending: Page(page: 1, perPage: 6) {\n      media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {\n        ...MediaField\n      }\n    }\n    season: Page(page: 1, perPage: 6) {\n      media(\n        season: $season\n        seasonYear: $seasonYear\n        sort: POPULARITY_DESC\n        type: ANIME\n        isAdult: false\n      ) {\n        ...MediaField\n      }\n    }\n    nextSeason: Page(page: 1, perPage: 6) {\n      media(\n        season: $nextSeason\n        seasonYear: $nextYear\n        sort: POPULARITY_DESC\n        type: ANIME\n        isAdult: false\n      ) {\n        ...MediaField\n      }\n    }\n    popular: Page(page: 1, perPage: 6) {\n      media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {\n        ...MediaField\n      }\n    }\n    top: Page(page: 1, perPage: 10) {\n      media(sort: SCORE_DESC, type: ANIME, isAdult: false) {\n        ...MediaField\n      }\n    }\n  }\n": types.HomeSectionDocument,
    "\n  query Media($id: Int) {\n    Media(id: $id, type: ANIME) {\n      id\n      title {\n        romaji\n        english\n        native\n      }\n    }\n  }\n": types.MediaDocument,
    "\n  fragment MediaField on Media {\n    id\n    title {\n      userPreferred\n    }\n    coverImage {\n      extraLarge\n      large\n      color\n    }\n    startDate {\n      year\n      month\n      day\n    }\n    endDate {\n      year\n      month\n      day\n    }\n    bannerImage\n    season\n    seasonYear\n    description\n    type\n    format\n    status(version: 2)\n    episodes\n    duration\n    chapters\n    volumes\n    genres\n    isAdult\n    averageScore\n    popularity\n    mediaListEntry {\n      id\n      status\n    }\n    nextAiringEpisode {\n      airingAt\n      timeUntilAiring\n      episode\n    }\n    studios(isMain: true) {\n      edges {\n        isMain\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.MediaFieldFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HomeSection(\n    $season: MediaSeason\n    $seasonYear: Int\n    $nextSeason: MediaSeason\n    $nextYear: Int\n  ) {\n    trending: Page(page: 1, perPage: 6) {\n      media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {\n        ...MediaField\n      }\n    }\n    season: Page(page: 1, perPage: 6) {\n      media(\n        season: $season\n        seasonYear: $seasonYear\n        sort: POPULARITY_DESC\n        type: ANIME\n        isAdult: false\n      ) {\n        ...MediaField\n      }\n    }\n    nextSeason: Page(page: 1, perPage: 6) {\n      media(\n        season: $nextSeason\n        seasonYear: $nextYear\n        sort: POPULARITY_DESC\n        type: ANIME\n        isAdult: false\n      ) {\n        ...MediaField\n      }\n    }\n    popular: Page(page: 1, perPage: 6) {\n      media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {\n        ...MediaField\n      }\n    }\n    top: Page(page: 1, perPage: 10) {\n      media(sort: SCORE_DESC, type: ANIME, isAdult: false) {\n        ...MediaField\n      }\n    }\n  }\n"): (typeof documents)["\n  query HomeSection(\n    $season: MediaSeason\n    $seasonYear: Int\n    $nextSeason: MediaSeason\n    $nextYear: Int\n  ) {\n    trending: Page(page: 1, perPage: 6) {\n      media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {\n        ...MediaField\n      }\n    }\n    season: Page(page: 1, perPage: 6) {\n      media(\n        season: $season\n        seasonYear: $seasonYear\n        sort: POPULARITY_DESC\n        type: ANIME\n        isAdult: false\n      ) {\n        ...MediaField\n      }\n    }\n    nextSeason: Page(page: 1, perPage: 6) {\n      media(\n        season: $nextSeason\n        seasonYear: $nextYear\n        sort: POPULARITY_DESC\n        type: ANIME\n        isAdult: false\n      ) {\n        ...MediaField\n      }\n    }\n    popular: Page(page: 1, perPage: 6) {\n      media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {\n        ...MediaField\n      }\n    }\n    top: Page(page: 1, perPage: 10) {\n      media(sort: SCORE_DESC, type: ANIME, isAdult: false) {\n        ...MediaField\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Media($id: Int) {\n    Media(id: $id, type: ANIME) {\n      id\n      title {\n        romaji\n        english\n        native\n      }\n    }\n  }\n"): (typeof documents)["\n  query Media($id: Int) {\n    Media(id: $id, type: ANIME) {\n      id\n      title {\n        romaji\n        english\n        native\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment MediaField on Media {\n    id\n    title {\n      userPreferred\n    }\n    coverImage {\n      extraLarge\n      large\n      color\n    }\n    startDate {\n      year\n      month\n      day\n    }\n    endDate {\n      year\n      month\n      day\n    }\n    bannerImage\n    season\n    seasonYear\n    description\n    type\n    format\n    status(version: 2)\n    episodes\n    duration\n    chapters\n    volumes\n    genres\n    isAdult\n    averageScore\n    popularity\n    mediaListEntry {\n      id\n      status\n    }\n    nextAiringEpisode {\n      airingAt\n      timeUntilAiring\n      episode\n    }\n    studios(isMain: true) {\n      edges {\n        isMain\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment MediaField on Media {\n    id\n    title {\n      userPreferred\n    }\n    coverImage {\n      extraLarge\n      large\n      color\n    }\n    startDate {\n      year\n      month\n      day\n    }\n    endDate {\n      year\n      month\n      day\n    }\n    bannerImage\n    season\n    seasonYear\n    description\n    type\n    format\n    status(version: 2)\n    episodes\n    duration\n    chapters\n    volumes\n    genres\n    isAdult\n    averageScore\n    popularity\n    mediaListEntry {\n      id\n      status\n    }\n    nextAiringEpisode {\n      airingAt\n      timeUntilAiring\n      episode\n    }\n    studios(isMain: true) {\n      edges {\n        isMain\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;