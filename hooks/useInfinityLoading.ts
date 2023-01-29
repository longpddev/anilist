import { useMemo, useRef, useState } from "react"
import useFetch from "./useFetch"
import useVisible from "./useVisible"

export default function useInfinityLoading<
  ListData extends Array<unknown>,
  Data,
  F extends (...a: any) => Promise<Data>
>(
  fn: F,
  initData: Data,
  {
    selector,
    currentPageSelector,
    hasNextPageSelector,
  }: {
    selector: (d: Data) => ListData
    currentPageSelector: (d: Data) => number
    hasNextPageSelector: (d: Data) => boolean
  }
) {
  const [page, pageSet] = useState(1)
  const [run, { data: moreData, loading, error, executed }] = useFetch(fn)
  const prevData = useRef([selector(initData), 1 as number] as const)
  const list = useMemo(() => {
    const [prev, pPage] = prevData.current
    if (!moreData) return prev
    const cPage = currentPageSelector(moreData)

    if (pPage === cPage) return prev
    const result = [...(prev || []), ...(selector(moreData) || [])] as ListData

    prevData.current = [result, cPage as number] as const
    return result
  }, [moreData])

  const { ref } = useVisible<HTMLDivElement>(() => {
    if (hasNextPageSelector(moreData || initData) === false) return
    if (!loading && !error) {
      const nextPage = page + 1
      run(nextPage).then(() => pageSet(nextPage))
    }
  })

  return { ref, page, list, loading, error, executed }
}
