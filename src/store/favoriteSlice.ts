import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'

const storedFavorites =
  typeof window !== 'undefined' && localStorage.getItem('favorite')
    ? JSON.parse(localStorage.getItem('favorite') || '')
    : []

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: storedFavorites,
  reducers: {
    handleFavorite: (state: string[], action: PayloadAction<string>) => {
      if (state.includes(action.payload)) {
        const removedFavorite = state.filter(
          favorite => favorite !== action.payload
        )
        localStorage.setItem('favorite', JSON.stringify(removedFavorite))
        return removedFavorite
      }
      const newFavorite = [...state, action.payload]
      localStorage.setItem('favorite', JSON.stringify(newFavorite))
      return newFavorite
    }
  }
})

export const { handleFavorite } = favoriteSlice.actions

export const selectCount = (state: RootState) => state.favorite

export default favoriteSlice.reducer
