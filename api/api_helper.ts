import type { NextApiRequest, NextApiResponse } from "next"
import type { NextRequest } from "next/server"

export type IRequestHandle = (
  req: NextApiRequest,
  res: NextApiResponse
) => Promise<void>

export const MethodFactory = () => {
  let GET: null | IRequestHandle = null
  let POST: null | IRequestHandle = null
  let PUT: null | IRequestHandle = null
  let DELETE: null | IRequestHandle = null
  return {
    GET(cb: IRequestHandle) {
      GET = cb
    },
    POST(cb: IRequestHandle) {
      POST = cb
    },
    PUT(cb: IRequestHandle) {
      PUT = cb
    },
    DELETE(cb: IRequestHandle) {
      DELETE = cb
    },
    init() {
      return async (req: NextApiRequest, res: NextApiResponse) => {
        try {
          const allMethod = {
            GET,
            POST,
            PUT,
            DELETE,
          }
          if (req.method && req.method in allMethod) {
            const method = req.method as keyof typeof allMethod
            const methodOfThisRequest = allMethod[method]
            if (methodOfThisRequest) {
              await methodOfThisRequest(req, res)
              return
            }
          }
        } catch (e) {
          console.log(e)
          res.status(400).json({
            message: (e as Error).message,
          })
          return
        }

        res.status(404).send("Not found")
      }
    },
  }
}

export type IRequestHandleForEdge = (
  req: NextRequest,
  query: URLSearchParams
) => Promise<any>
export const MethodFactoryForEdge = () => {
  let GET: null | IRequestHandleForEdge = null
  let POST: null | IRequestHandleForEdge = null
  let PUT: null | IRequestHandleForEdge = null
  let DELETE: null | IRequestHandleForEdge = null
  return {
    GET(cb: IRequestHandleForEdge) {
      GET = cb
    },
    POST(cb: IRequestHandleForEdge) {
      POST = cb
    },
    PUT(cb: IRequestHandleForEdge) {
      PUT = cb
    },
    DELETE(cb: IRequestHandleForEdge) {
      DELETE = cb
    },
    init() {
      return async (req: NextRequest) => {
        try {
          const allMethod = {
            GET,
            POST,
            PUT,
            DELETE,
          }
          if (req.method && req.method in allMethod) {
            const method = req.method as keyof typeof allMethod
            const methodOfThisRequest = allMethod[method]
            if (methodOfThisRequest) {
              const { searchParams } = new URL(req.url)
              const start = new Date().getTime()
              const result = await methodOfThisRequest(req, searchParams)
              return new Response(JSON.stringify(result), {
                status: 200,
                headers: {
                  "content-type": "application/json",
                  "time-execute": `${new Date().getTime() - start} ms`,
                },
              })
            }
          }
        } catch (e) {
          return new Response((e as Error).message, {
            status: 400,
            headers: {
              "content-type": "application/json",
            },
          })
        }

        return new Response("Not found", {
          status: 404,
          headers: {
            "content-type": "application/json",
          },
        })
      }
    },
  }
}
