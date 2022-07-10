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

export const List = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '1rem',
  padding: '0'
})
