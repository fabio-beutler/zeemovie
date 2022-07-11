import { HeaderContainer, HeaderNav, HeaderNavLink, Logo } from './styles'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export const Header = () => {
  const { pathname } = useRouter()
  return (
    <HeaderContainer>
      <NextLink href='/' passHref>
        <Logo>zee movie</Logo>
      </NextLink>
      <HeaderNav>
        <NextLink href='/' passHref>
          <HeaderNavLink state={pathname === '/' ? 'active' : 'inactive'}>
            movies
          </HeaderNavLink>
        </NextLink>
        <NextLink href='/favorites' passHref>
          <HeaderNavLink
            state={pathname === '/favorites' ? 'active' : 'inactive'}
          >
            favorites
          </HeaderNavLink>
        </NextLink>
      </HeaderNav>
    </HeaderContainer>
  )
}
