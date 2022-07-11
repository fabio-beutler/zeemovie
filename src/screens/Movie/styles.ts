import { styled } from '@/styles/stitches.config'

export const Main = styled('main', {
  minHeight: '100vh',
  padding: '2rem',
  maxWidth: '900px',
  margin: '0 auto'
})

export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',

  variants: {
    direction: {
      row: {
        flexDirection: 'row'
      },
      column: {
        flexDirection: 'column'
      }
    }
  }
})

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  flex: 1,
  position: 'relative'
})

export const Title = styled('h1', {
  fontSize: '2rem',
  margin: 0,
  display: 'inline',
  marginRight: '1rem',
  textAlign: 'center'
})

export const FavoritePlace = styled('div', {
  variants: {
    position: {
      absolute: {
        position: 'absolute',
        top: '2px',
        right: '-20px'
      },
      static: {
        position: 'static'
      }
    }
  }
})

export const Description = styled('p', {
  fontSize: '1.1rem',
  lineHeight: '1.6rem',
  textAlign: 'justify'
})

export const Ul = styled('ul', {
  display: 'flex',
  flexFlow: 'row wrap',
  gap: '2rem'
})

export const Li = styled('li', {
  border: '1px solid #ccc',
  padding: '1rem',
  borderRadius: '0.5rem',
  minWidth: '10rem',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,

  h3: {
    display: 'inline',
    margin: 0
  }
})
