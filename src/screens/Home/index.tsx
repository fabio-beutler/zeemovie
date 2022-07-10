import type { NextPage } from 'next'
import NextLink from 'next/link'
import Head from 'next/head'
import { Li, Main, Title, Ul } from './styles'
import { MoviesListWrapperProps } from '@/types/MoviesList'

export const Home: NextPage<MoviesListWrapperProps> = props => {
  return (
    <div>
      <Head>
        <title>Zee Movie</title>
      </Head>

      <Main>
        <Title>zee movies</Title>
        <Ul>
          {props.movies?.map(movie => (
            <Li key={movie.id}>
              <NextLink href={movie.id} passHref>
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
