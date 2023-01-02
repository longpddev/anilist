import { print } from "graphql"
import { TypedDocumentNode } from "@graphql-typed-document-node/core"
export default async function fetchGql<TData, TVariables>(
  query: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables
): Promise<TData> {
  const res = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: print(query),
      variables,
    }),
  })

  const json = await res.json()

  if (json.errors) {
    const { message } = json.errors[0] || {}
    throw new Error(message || "Error…")
  }

  return json.data
}
