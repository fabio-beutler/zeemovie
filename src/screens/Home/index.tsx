import type { NextPage } from 'next'
import Head from 'next/head'
import { List, Main, Title } from './styles'
import { MoviesListWrapperProps } from '@/types/MoviesList'
import { MovieCard } from '@/components/MovieCard'
import { useMovies } from '@/hooks/useMovies'

export const Home: NextPage<MoviesListWrapperProps> = props => {
  const { data } = useMovies(props.movies)

  return (
    <div>
      <Head>
        <title>Zee Movie</title>
      </Head>

      <Main>
        <Title>all movies</Title>
        <List>
          {data?.map(movie => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </List>
      </Main>
    </div>
  )
}
