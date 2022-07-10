import { HeaderContainer, HeaderNav, HeaderNavLink, Logo } from './styles'
import NextLink from 'next/link'

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo>zee movie</Logo>
      <HeaderNav>
        <NextLink href='/' passHref>
          <HeaderNavLink>Movies</HeaderNavLink>
        </NextLink>
        <NextLink href='/favorites' passHref>
          <HeaderNavLink>My favorites</HeaderNavLink>
        </NextLink>
      </HeaderNav>
    </HeaderContainer>
  )
}
