import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import axios from 'axios'
import { Movie } from '@/screens/Movie'
import { api } from '@/services/api'
import { MovieDetailed, MovieWrapperProps, Person } from '@/types/MovieDetail'

const MovieWrapper: NextPage<MovieWrapperProps> = props => {
  return <Movie {...props} />
}

export default MovieWrapper

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get<{ id: string }[]>(`/films?fields=id`)

  return {
    paths: data.map(movie => ({
      params: { movieId: movie.id }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const { params } = ctx

  const { data, status } = await api.get<MovieDetailed>(
    `/films/${params?.movieId}?fields=id,title,original_title,description,director,producer,release_date,rt_score,people`
  )

  const peopleDataResponse = await axios.all(
    data.people.map(person =>
      axios.get<Person>(`${person}?fields=id,name,age,gender`)
    )
  )
  const peopleData = peopleDataResponse.map(res => res.data)

  return {
    props: {
      movie: data,
      people: peopleData
    },
    revalidate: 60 * 60 * 24 * 2, // 2 days
    notFound: status !== 200
  }
}
