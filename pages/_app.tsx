import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import store from '@/store'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'
import { AnimatePresence, motion } from 'framer-motion'
import { Header } from '@/components/Header'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps, router }: AppProps) {
  globalStyles()

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'just' }}
            key={router.pathname}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  )
}

export default MyApp
