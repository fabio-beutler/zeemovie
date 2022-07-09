import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'

export const { styled, getCssText, globalCss, config, keyframes } =
  createStitches({
    theme: {
      colors: {
        gray100: 'hsl(206,22%,99%)',
        gray200: 'hsl(206,12%,97%)',
        gray300: 'hsl(206,11%,92%)',
        gray400: 'hsl(206,10%,84%)',
        gray500: 'hsl(206,10%,76%)',
        gray600: 'hsl(206,10%,44%)'
      }
    },
    utils: {
      marginX: (value: Stitches.ScaleValue<'space'>) => ({
        marginLeft: value,
        marginRight: value
      }),
      marginY: (value: Stitches.ScaleValue<'space'>) => ({
        marginTop: value,
        marginBottom: value
      }),
      paddingX: (value: Stitches.ScaleValue<'space'>) => ({
        paddingLeft: value,
        paddingRight: value
      }),
      paddingY: (value: Stitches.ScaleValue<'space'>) => ({
        paddingTop: value,
        paddingBottom: value
      })
    },
    media: {
      sm: '(min-width: 520px)',
      md: '(min-width: 900px)'
    }
  })
export type CSS = Stitches.CSS<typeof config>
