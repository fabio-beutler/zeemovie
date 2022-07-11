import { styled } from '@/styles/stitches.config'

export const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#ffffff',
  borderBottom: '1px solid #cccccc',
  padding: '0 1rem',
  zIndex: '10',

  '@md': {
    padding: '0 3rem'
  }
})

export const HeaderNav = styled('nav', {
  display: 'flex',
  gap: '1rem'
})

export const Logo = styled('a', {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  padding: '1rem 0'
})

export const HeaderNavLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  transition: 'all 0.15s ease',
  height: '100%',

  '&:hover': {
    borderBottom: '3px solid currentColor'
  },

  variants: {
    state: {
      active: {
        borderBottom: '3px solid currentColor'
      },
      inactive: {
        borderBottom: 'none'
      }
    }
  }
})
