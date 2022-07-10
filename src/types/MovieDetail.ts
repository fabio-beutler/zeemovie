export interface Person {
  id: string
  name: string
  gender: string
  age: string
}

export interface MovieDetailed {
  title: string
  original_title: string
  description: string
  director: string
  producer: string
  release_date: string
  rt_score: string
  people: string[]
}

export interface MovieWrapperProps {
  movie: MovieDetailed
  people: Person[]
}
