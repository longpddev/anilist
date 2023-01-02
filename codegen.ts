import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://graphql.anilist.co",
  documents: ["gql/**/*.ts"],
  generates: {
    "anilist_gql/": {
      plugins: [],
      preset: "client",
    },
  },
}

export default config
