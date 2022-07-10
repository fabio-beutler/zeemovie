import { GetStaticProps, NextPage } from 'next'
import { Home } from '@/screens/Home'
import { api } from '@/services/api'
import { Movie, MoviesListWrapperProps } from '@/types/MoviesList'

const HomeWrapper: NextPage<MoviesListWrapperProps> = props => {
  return <Home {...props} />
}

export default HomeWrapper

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get<Movie[]>(
    '/films?fields=id,title,original_title,description,director'
  )
  return {
    props: {
      movies: data
    },
    revalidate: 60 * 60 * 24 * 2 // 2 days
  }
}
