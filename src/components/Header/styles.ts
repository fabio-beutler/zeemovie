import { styled } from '@/styles/stitches.config'

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.5rem 1rem',
  backgroundColor: '#fff',
  borderBottom: '1px solid #ccc'
})

export const HeaderNav = styled('nav', {
  display: 'flex',
  gap: '1rem'
})

export const Logo = styled('h1', {})

export const HeaderNavLink = styled('a', {
  textDecoration: 'none',
  color: 'currentColor'
})
