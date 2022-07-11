import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  body: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Roboto, sans-serif'
  },

  a: {
    textDecoration: 'none',
    color: 'currentColor'
  },

  button: {
    border: 'none',
    background: 'inherit',
    cursor: 'pointer'
  },

  ul: {
    listStyle: 'none',
    padding: 0
  }
})
