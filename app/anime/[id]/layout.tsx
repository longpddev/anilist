import { getAnimeById } from "@/api/test"
import React from "react"

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode
  params: { id: string }
}) => {
  const start = new Date().getTime()
  const data = await getAnimeById()
  const totalTime = new Date().getTime() - start
  return (
    <div>
      <h2 className="text-center text-4xl">
        total time request: {totalTime}ms
      </h2>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
      {children}
    </div>
  )
}

export default Layout
