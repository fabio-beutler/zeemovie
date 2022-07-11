import { styled } from '@/styles/stitches.config'

export const Link = styled('a', {
  textDecoration: 'none',
  color: 'currentColor'
})

export const Card = styled('div', {
  padding: '1rem',
  borderRadius: '0.5rem',
  backgroundColor: '#f2f2f2',
  position: 'relative',
  transition: 'all 0.15s ease',

  '&:hover': {
    boxShadow: '0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1)'
  }
})

export const Title = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  h2: {
    margin: '1.2rem 0 0',

    '@sm': {
      margin: 0
    }
  },

  span: {
    color: 'gray'
  },

  '@sm': {
    flexDirection: 'row',
    gap: '1rem'
  }
})

export const Info = styled('div', {})

export const FavoriteButtonPlace = styled('div', {
  position: 'absolute',
  top: '5px',
  right: '0px',

  '@sm': {
    top: '10px',
    right: '5px'
  }
})
