import https from "https"

import { print } from "graphql"
import { TypedDocumentNode } from "@graphql-typed-document-node/core"
export default async function fetchGql<TData, TVariables>(
  query: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables
): Promise<TData> {
  const options = {
    hostname: "graphql.anilist.co",
    port: 443,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }
  return new Promise((resolve, rej) => {
    //change to http for local testing
    const req = https.request(options, function (res) {
      res.setEncoding("utf8")

      let body = ""

      res.on("data", function (chunk) {
        body = body + chunk
      })

      res.on("end", function () {
        if (res.statusCode != 200) {
          rej("Api call failed with response code " + res.statusCode)
        } else {
          resolve(JSON.parse(body) as TData)
        }
      })
    })

    req.on("error", function (e) {
      rej(e)
    })

    // write data to request body
    req.write(
      JSON.stringify({
        query: print(query),
        variables,
      })
    )
    req.end()
  })
}
