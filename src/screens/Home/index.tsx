import { useMovies } from '@/hooks/useMovies'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Li, Main, Title, Ul } from './styles'
import NextLink from 'next/link'

export const Home: NextPage = () => {
  const { data } = useMovies()

  return (
    <div>
      <Head>
        <title>Zee Movie</title>
      </Head>

      <Main>
        <Title>zee movies</Title>
        <Ul>
          {data?.map(movie => (
            <Li key={movie.id}>
              <NextLink href={movie.id}>
                <a>
                  <h2>{movie.title}</h2>
                  <span>{movie.original_title}</span>
                  <p>{movie.description}</p>
                  <span>
                    directed by: <strong>{movie.director}</strong>
                  </span>
                </a>
              </NextLink>
            </Li>
          ))}
        </Ul>
      </Main>
    </div>
  )
}
