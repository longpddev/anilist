export const getAnimeById = async () => {
  const result = await fetch(`http://localhost:9999/api/test`)
  return result.json()
  // return await fetchGql(ANIME_DETAIL, {
  //   id,
  //   type: MediaType.Anime,
  //   isAdult: false,
  // })
}
