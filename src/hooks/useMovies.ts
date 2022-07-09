import { api } from '@/services/api'
import { useQuery } from 'react-query'

interface Movie {
  id: string
  title: string
  original_title: string
  description: string
  director: string
}

async function getMovies() {
  const { data } = await api.get<Movie[]>(
    '/films?fields=id,title,original_title,description,director'
  )
  return data
}

export function useMovies() {
  return useQuery('movies', getMovies)
}
