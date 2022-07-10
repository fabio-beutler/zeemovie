export interface Movie {
  id: string
  title: string
  original_title: string
  description: string
  director: string
}

export interface MoviesListWrapperProps {
  movies: Movie[]
}
