import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { handleFavorite } from '@/store/favoriteSlice'

import { Heart } from 'phosphor-react'
import {
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
  Tooltip,
  TooltipProvider
} from './styles'

interface FavoriteButtonProps {
  movieId: string
}

export const FavoriteButton = (props: FavoriteButtonProps) => {
  const dispatch = useAppDispatch()

  const favorites = useAppSelector<string[]>(state => state.favorite)

  const isFavorite = favorites.includes(props.movieId)

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger
          onClick={() => dispatch(handleFavorite(props.movieId))}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            color='#1f1f1f'
            weight={isFavorite ? 'fill' : 'regular'}
            size={32}
          />
        </TooltipTrigger>
        <TooltipContent side='left'>
          {isFavorite ? 'remove from favorites' : 'add to favorites'}
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
