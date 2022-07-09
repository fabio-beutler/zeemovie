import { Home } from '@/screens/Home'
import { api } from '@/services/api'
import { Movie, MoviesListWrapperProps } from '@/types/MoviesList'
import { NextPage } from 'next'

const HomeWrapper: NextPage<MoviesListWrapperProps> = props => {
  return <Home {...props} />
}

export default HomeWrapper

export async function getStaticProps() {
  const { data } = await api.get<Movie[]>(
    '/films?fields=id,title,original_title,description,director'
  )
  return {
    props: {
      data
    }
  }
}
