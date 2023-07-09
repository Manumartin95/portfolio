import { Header } from '@/features/porfolio/delivery/components/header/header'
import React, { FC, PropsWithChildren } from 'react'
import { Footer } from '@/features/porfolio/delivery/components/footer/footer'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}
