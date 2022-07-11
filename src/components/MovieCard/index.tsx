import { Card, Info, Title, Link, FavoriteButtonPlace } from './styles'
import NextLink from 'next/link'
import { Heart } from 'phosphor-react'
import { Movie } from '@/types/MoviesList'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { handleFavorite } from '@/store/favoriteSlice'
import { FavoriteButton } from '../FavoriteButton'

interface MovieCardProps {
  movie: Movie
}

export const MovieCard = (props: MovieCardProps) => {
  const dispatch = useAppDispatch()
  const favorites = useAppSelector<string[]>(state => state.favorite)

  const isFavorite = favorites.includes(props.movie.id)

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
