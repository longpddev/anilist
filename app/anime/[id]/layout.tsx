import { getAnimeById } from "@/api/test"
import { HeadDetail } from "@/pageSetup/AnimeDetail"
import AnimeDetailMain from "@/pageSetup/AnimeDetail/AnimeDetailMain"
import React from "react"

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode
  params: { id: string }
}) => {
  const start = new Date().getTime()
  // const data = await getAnimeById(parseInt(params.id))
  const totalTime = new Date().getTime() - start
  return (
    <>
      <h2 className="text-center text-4xl">
        total time request: {totalTime}ms
      </h2>
      <HeadDetail parentPath={`/anime/${params.id}`} />
      <AnimeDetailMain>{children}</AnimeDetailMain>
      {/* <pre>{JSON.stringify(data, undefined, 2)}</pre> */}
    </>
  )
}

export const generateStaticParams = () => []
export const revalidate = 3600
export default Layout
