import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Description,
  FavoritePlace,
  Flex,
  Li,
  Main,
  Section,
  Title,
  Ul
} from './styles'
import { MovieWrapperProps } from '@/types/MovieDetail'
import { Header } from '@/components/Header'
import { FavoriteButton } from '@/components/FavoriteButton'

export const Movie: NextPage<MovieWrapperProps> = props => {
  return (
    <div>
      <Head>
        <title>Zee Movies | {props.movie.title}</title>
      </Head>

      <Header />

      <Main>
        <Section>
          <Flex direction={{ '@initial': 'column', '@sm': 'row' }}>
            <Title>{props.movie.title}</Title>
            <span>{props.movie.original_title}</span>
            <FavoritePlace
              position={{ '@initial': 'absolute', '@sm': 'static' }}
            >
              <FavoriteButton movieId={props.movie.id} />
            </FavoritePlace>
          </Flex>

          <Description>{props.movie.description}</Description>
        </Section>

        <Section>
          <Flex css={{ gap: '3rem' }}>
            <Flex direction='column' css={{ gap: '1rem', alignItems: 'start' }}>
              <span>
                Director: <br />
                <strong>{props.movie.director}</strong>
              </span>
              <span>
                Producer: <br />
                <strong>{props.movie.producer}</strong>
              </span>
            </Flex>
            <Flex direction='column' css={{ gap: '1rem', alignItems: 'start' }}>
              <span>
                Release: <br />
                <strong>{props.movie.release_date}</strong>
              </span>
              <span>
                Rotten Tomatoes: <br />
                <strong>{props.movie.rt_score}</strong>
              </span>
            </Flex>
          </Flex>
        </Section>
        {props.people.length > 0 && (
          <>
            <h2>People</h2>
            <Ul>
              {props.people.map(person => (
                <Li key={person.id}>
                  <h3>{person.name}</h3>
                  <span>
                    gender: <strong>{person.gender}</strong>
                  </span>
                  <span>
                    age: <strong>{person.age}</strong>
                  </span>
                </Li>
              ))}
            </Ul>
          </>
        )}
      </Main>
    </div>
  )
}
