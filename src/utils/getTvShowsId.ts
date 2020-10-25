import api from '../services/api'

type PagesProps = {
  id: number
}

export const getPage = async (i: number) => {
  const tvShows = await api.get('/discover/movie', {
    params: { page: i > 0 && i }
  })
  const data = await tvShows.data.results
  const ids = data?.map((id: PagesProps) => id?.id)
  return ids;
}

export const GetTvShowsId = async () => {
  await Promise.all(
    Array.from({ length: 5 }).map((_, index) => {
      return getPage(index)
    })
  )
}
