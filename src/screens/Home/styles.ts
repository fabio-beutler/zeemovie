import { styled } from '@/styles/stitches.config'

export const Main = styled('main', {
  minHeight: '100vh',
  padding: '2rem',
  maxWidth: '900px',
  margin: '0 auto'
})

export const Title = styled('h1', {
  fontSize: '2rem',
  margin: 0
})

export const Ul = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '1rem',
  padding: '0'
})

export const Li = styled('li', {
  padding: '1rem',
  borderRadius: '0.5rem',
  backgroundColor: '#f2f2f2',

  a: {
    textDecoration: 'none',
    color: 'currentColor',

    h2: {
      display: 'inline',
      marginRight: '1rem'
    },

    span: {
      color: 'gray'
    },

    'span:last-child': {
      color: 'currentColor'
    }
  }
})
