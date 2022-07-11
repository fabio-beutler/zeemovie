import { Card, Info, Title, Link, FavoriteButtonPlace } from './styles'
import NextLink from 'next/link'
import { Movie } from '@/types/MoviesList'
import { FavoriteButton } from '../FavoriteButton'

interface MovieCardProps {
  movie: Movie
}

export const MovieCard = (props: MovieCardProps) => {
  return (
    <Card>
      <NextLink href={`movie/${props.movie.id}`} passHref>
        <Link>
          <Title>
            <h2>{props.movie.title}</h2>
            <span>{props.movie.original_title}</span>
          </Title>

          <Info>
            <p>{props.movie.description}</p>
            <span>
              directed by: <strong>{props.movie.director}</strong>
            </span>
          </Info>
        </Link>
      </NextLink>

      <FavoriteButtonPlace>
        <FavoriteButton movieId={props.movie.id} />
      </FavoriteButtonPlace>
    </Card>
  )
}
