import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'

export const { styled, getCssText, globalCss, config, keyframes } =
  createStitches({
    media: {
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)'
    }
  })
export type CSS = Stitches.CSS<typeof config>
