import Home from '@/features/porfolio/delivery/home/home'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { SSRConfig } from 'next-i18next'

const Index = () => {
  return <Home></Home>
}

export const getStaticProps: GetStaticProps<SSRConfig> = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale!, ['common', 'footer']))
    }
  }
}

export default Index
