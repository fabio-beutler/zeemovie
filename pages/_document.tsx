import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@/styles/stitches.config'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta
          name='description'
          content='Zee Movie, a webpage to index all movies from Studio Ghibli'
        />
        <style
          id='stitches'
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
