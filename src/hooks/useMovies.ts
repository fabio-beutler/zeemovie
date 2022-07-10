import { api } from '@/services/api'
import { Movie } from '@/types/MoviesList'
import { useQuery } from 'react-query'

async function getMovies() {
  const { data } = await api.get<Movie[]>(
    '/films?fields=id,title,original_title,description,director'
  )
  return data
}

export function useMovies(initialData: Movie[] = []) {
  return useQuery('movies', getMovies, { initialData })
}
