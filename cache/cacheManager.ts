import cacache from "cacache"

const cacheManager = (cachePath: string) => {
  const get = (key: string) => cacache.get(cachePath, key)
  const info = (key: string) => cacache.get.info(cachePath, key)
  const set = <V>(key: string, value: V) => cacache.put(cachePath, key, value)

  const has = (key: string) => info(key).then(Boolean)
  const _delete = async (key: string, integrity?: string) => {
    if (!integrity) integrity = (await info(key)).integrity

    return await Promise.all([
      cacache.rm(cachePath, key),
      cacache.rm.content(cachePath, integrity),
    ])
  }

  return {
    cachePath,
    get,
    info,
    set,
    has,
    delete: _delete,
  }
}

export default cacheManager
