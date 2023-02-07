"use client"

// import { getCharactersByAnimeId } from "@/api/apiQuery"
import useInfinityLoading from "@/hooks/useInfinityLoading"
import CharacterCard, {
  CharacterCardLoading,
} from "@/pageSetup/AnimeDetail/CharacterCard"
import { Select } from "@/ui/Select"
import type { ANIME_CHARACTERS_TYPE } from "gql/animeDetail"
import React, { useMemo, useRef, useState } from "react"

const Content: React.FC<{
  initData: ANIME_CHARACTERS_TYPE
  animeId: number
}> = ({ initData, animeId }) => {
  const { list, loading, ref } = useInfinityLoading(
    (page: number) => Promise.resolve(initData),
    initData,
    {
      selector: (data) => data.Media?.characters?.edges || [],
      currentPageSelector: (data) =>
        data?.Media?.characters?.pageInfo?.currentPage || 1,
      hasNextPageSelector: (data) =>
        data?.Media?.characters?.pageInfo?.hasNextPage || false,
    }
  )

  const language = useMemo(() => {
    const result = new Set<string>()

    list?.forEach((item) =>
      item?.voiceActorRoles?.forEach((i) => {
        const lang = i?.voiceActor?.language || ""
        if (!lang) return

        result.add(lang)
      })
    )

    return Array.from(result)
  }, [])
  const [val, valSet] = useState<number | string>(language[0])

  return (
    <div className="">
      <Select
        value={val}
        onChangeValue={(val) => valSet(val)}
        placeholder="Any"
      >
        {language.map((item) => ({
          label: item,
          value: item,
        }))}
      </Select>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {list?.map((item, i) => {
          const actor = item?.voiceActorRoles?.filter(
            (i) => i?.voiceActor?.language === val
          )?.[0]
          return (
            <CharacterCard
              key={i}
              data={{
                actor: actor
                  ? {
                      id: actor?.voiceActor?.id || 0,
                      name: actor?.voiceActor?.name?.userPreferred || "",
                      src: actor?.voiceActor?.image?.large || undefined,
                      tags: [actor?.voiceActor?.language || ""].filter(Boolean),
                    }
                  : undefined,
                character: {
                  id: item?.id || 0,
                  name: item?.node?.name?.userPreferred || "",
                  src: item?.node?.image?.large || undefined,
                  tags: [item?.role || ""].filter(Boolean),
                },
              }}
            />
          )
        })}
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4" ref={ref}>
        {/* {error ? "error" : loading ? "loading" : "Load more"} */}
        {loading &&
          Array(4)
            .fill(1)
            .map((_, i) => <CharacterCardLoading key={i} />)}
      </div>
    </div>
  )
}

export default Content
