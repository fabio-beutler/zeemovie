import { styled } from '@/styles/stitches.config'

export const Link = styled('a', {
  textDecoration: 'none',
  color: 'currentColor'
})

export const Card = styled('div', {
  padding: '1rem',
  borderRadius: '0.5rem',
  backgroundColor: '#f2f2f2',
  position: 'relative'
})

export const Title = styled('div', {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',

  span: {
    color: 'gray'
  }
})

export const Info = styled('div', {})

export const FavoriteButton = styled('button', {
  position: 'absolute',
  top: '10px',
  right: '10px',
  border: 'none',
  background: 'inherit',
  cursor: 'pointer'
})
