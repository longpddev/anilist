import cacheManager from "./cacheManager"
import path from "path"
import "server-only"
const cacheFolder = path.join(process.cwd(), "_cache")
const cache = cacheManager(cacheFolder)

type IFetchFn<P extends any[], V> = (...p: P) => Promise<V>
type ICacheFetchOption<Pn extends any[]> = {
  ttl: number
  getKey?: (...p: Pn) => string
}

const cacheFetch = <P extends any[], V>(
  fn: IFetchFn<P, V>,
  { ttl, getKey }: ICacheFetchOption<P>
) => {
  const cachePromise = new Map()

  const initPromise = (key: string, args: P) =>
    new Promise(async (res, rej) => {
      try {
        const currentTime = new Date().getTime()
        const cacheInfo = await cache.info(key)
        if (cacheInfo) {
          const expired = cacheInfo.time + ttl < currentTime

          if (expired) {
            await cache.delete(key, cacheInfo.integrity)
          } else {
            const result = await cache.get(key)
            res(JSON.parse(result.data.toString()))
            return
          }
        }

        const result = await fn(...args)
        await cache.set(key, JSON.stringify(result))
        res(result)
      } catch (e) {
        rej(e)
      } finally {
        cachePromise.delete(key)
      }
    })

  const handleCachePromise: IFetchFn<P, V> = async (...args) => {
    const key = getKey
      ? getKey(...(args as unknown as P))
      : JSON.stringify(args)
    if (cachePromise.has(key)) return cachePromise.get(key)

    const promise = initPromise(key, args as unknown as P)

    cachePromise.set(key, promise)

    return promise
  }

  return handleCachePromise
}

export default cacheFetch
