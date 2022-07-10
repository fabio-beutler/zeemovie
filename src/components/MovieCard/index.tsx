import { Card, Info, Title, Link, FavoriteButton } from './styles'
import NextLink from 'next/link'
import { Heart } from 'phosphor-react'
import { Movie } from '@/types/MoviesList'
import { useAppDispatch } from '@/hooks/useRedux'
import { handleFavorite } from '@/store/favoriteSlice'

interface MovieCardProps {
  movie: Movie
}

export const MovieCard = (props: MovieCardProps) => {
  const dispatch = useAppDispatch()

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

      <FavoriteButton
        type='button'
        onClick={() => dispatch(handleFavorite(props.movie.id))}
      >
        <Heart size={32} color='#1f1e1e' />
      </FavoriteButton>
    </Card>
  )
}
