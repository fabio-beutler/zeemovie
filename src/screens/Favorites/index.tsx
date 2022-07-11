import type { NextPage } from 'next'
import Head from 'next/head'
import { List, Main, Title } from './styles'
import { MovieCard } from '@/components/MovieCard'
import { useMovies } from '@/hooks/useMovies'
import { useAppSelector } from '@/hooks/useRedux'
import ScrollToTopButton from '@/components/ScrollToTop'

export const Favorites: NextPage = () => {
  const { data } = useMovies()

  const favorites = useAppSelector(state => state.favorite)

  return (
    <div>
      <Head>
        <title>Zee Movie | My Favorites</title>
      </Head>

      <Main>
        <Title>my favorites</Title>
        <List>
          {data
            ?.filter(movie => favorites.includes(movie.id))
            .map(movie => (
              <li key={movie.id}>
                <MovieCard movie={movie} />
              </li>
            ))}
        </List>
        <ScrollToTopButton />
      </Main>
    </div>
  )
}
