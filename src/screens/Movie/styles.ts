import { styled } from '@/styles/stitches.config'

export const Main = styled('main', {
  minHeight: '100vh',
  padding: '2rem',
  maxWidth: '900px',
  margin: '0 auto'
})

export const Flex = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '4rem'
})

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  flex: 1
})

export const Title = styled('h1', {
  fontSize: '2rem',
  margin: 0,
  display: 'inline',
  marginRight: '1rem'
})

export const Ul = styled('ul', {
  display: 'flex',
  flexFlow: 'column wrap',
  gap: '1rem'
})

export const Li = styled('li', {
  display: 'flex',
  flexDirection: 'column',

  h3: {
    display: 'inline',
    margin: 0
  }
})
