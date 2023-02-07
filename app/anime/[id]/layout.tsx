import { getAnimeById, getAnimeByIdForLayout } from "@/api/apiQuery"

import AnimeDetailMain from "@/pageSetup/AnimeDetail/AnimeDetailMain"
import cacheFetch from "cache/cacheFetch"
import React from "react"
import "@/pageSetup/AnimeDetail/AnimeDetail.scss.css"
import AnimeDetailContainer from "@/pageSetup/AnimeDetail/AnimeDetailContainer"
import HeadDetail from "@/pageSetup/AnimeDetail/HeadDetail"
export const generateStaticParams = () => []
export const revalidate = 3600

const cacheGetAnimeByIdForLayout = cacheFetch(getAnimeByIdForLayout, {
  ttl: 3600 * 1000,
  getKey: (id) => "anime_layout_" + id,
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
