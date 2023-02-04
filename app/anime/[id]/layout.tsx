import { getAnimeById, getAnimeByIdForLayout } from "@/api/apiQuery"
import { AnimeDetailContainer, HeadDetail } from "@/pageSetup/AnimeDetail"
import AnimeDetailMain from "@/pageSetup/AnimeDetail/AnimeDetailMain"
import cacheFetch from "cache/cacheFetch"
import React from "react"

export const generateStaticParams = () => []
export const revalidate = 3600

const cacheGetAnimeByIdForLayout = cacheFetch(getAnimeByIdForLayout, {
  ttl: revalidate * 1000,
})

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode
  params: { id: string }
}) => {
  const start = new Date().getTime()
  const data = await cacheGetAnimeByIdForLayout(parseInt(params.id))
  const totalTime = new Date().getTime() - start
  return (
    <>
      <h2 className="text-center text-4xl">
        total time request: {totalTime}ms
      </h2>
      <AnimeDetailContainer hasBanner={Boolean(data.Media?.bannerImage)}>
        <HeadDetail data={data} parentPath={`/anime/${params.id}`} />
        <AnimeDetailMain data={data}>{children}</AnimeDetailMain>
      </AnimeDetailContainer>
    </>
  )
}

export default Layout
