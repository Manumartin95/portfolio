import { Header } from '@/features/porfolio/delivery/components/header/header'
import React, { FC, PropsWithChildren } from 'react'
import { Footer } from '@/features/porfolio/delivery/components/footer/footer'
import styles from './layout.module.css'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header></Header>
      <main className={styles.main}>{children}</main>
      <Footer></Footer>
    </div>
  )
}
