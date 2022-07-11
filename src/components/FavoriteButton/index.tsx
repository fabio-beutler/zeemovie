import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { handleFavorite } from '@/store/favoriteSlice'
import { FavoriteButtonContainer } from './styles'
import { Heart } from 'phosphor-react'

interface FavoriteButtonProps {
  movieId: string
}

export const FavoriteButton = (props: FavoriteButtonProps) => {
  const dispatch = useAppDispatch()

  const favorites = useAppSelector<string[]>(state => state.favorite)

  const isFavorite = favorites.includes(props.movieId)
  return (
    <FavoriteButtonContainer
      type='button'
      onClick={() => dispatch(handleFavorite(props.movieId))}
    >
      <Heart
        size={32}
        color={isFavorite ? '#c71111' : '#1f1e1e'}
        weight={isFavorite ? 'fill' : 'regular'}
      />
    </FavoriteButtonContainer>
  )
}
