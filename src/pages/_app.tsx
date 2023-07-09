import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Layout } from '@/features/shared/delivery/components/layout/layout'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(App)
