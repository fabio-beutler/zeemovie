import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com'
})
