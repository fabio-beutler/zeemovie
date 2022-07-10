import type { NextPage } from 'next'
import Head from 'next/head'
import { Flex, Li, Main, Section, Title, Ul } from './styles'
import { MovieWrapperProps } from '@/types/MovieDetail'
import { Header } from '@/components/Header'

export const Movie: NextPage<MovieWrapperProps> = props => {
  return (
    <div>
      <Head>
        <title>Zee Movies | {props.movie.title}</title>
      </Head>

      <Header />

      <Main>
        <Flex>
          <Section>
            <div>
              <Title>{props.movie.title}</Title>
              <span>{props.movie.original_title}</span>
            </div>

            <p>{props.movie.description}</p>
          </Section>

          <Section>
            <span>Director: {props.movie.director}</span>
            <span>Producer: {props.movie.producer}</span>

            <span>Release: {props.movie.release_date}</span>
            <span>Rotten Tomatoes: {props.movie.rt_score}</span>
          </Section>
        </Flex>
        {props.people.length > 0 && (
          <>
            <h2>People</h2>
            <Ul>
              {props.people.map(person => (
                <Li key={person.id}>
                  <h3>{person.name}</h3>
                  <span>{person.gender}</span>
                  <span>{person.age}</span>
                </Li>
              ))}
            </Ul>
          </>
        )}
      </Main>
    </div>
  )
}
