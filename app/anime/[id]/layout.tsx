import { getAnimeById, getAnimeByIdForLayout } from "@/api/apiQuery"
import { AnimeDetailContainer, HeadDetail } from "@/pageSetup/AnimeDetail"
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
  const data = await getAnimeByIdForLayout(parseInt(params.id))
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

// export const generateStaticParams = () => []
// export const revalidate = 3600
export default Layout
