import styles from './home.module.css'
import React from 'react'
import { Header } from '@/features/porfolio/delivery/components/header/header'
import { About } from '@/features/porfolio/delivery/components/about/about'
import { Technologies } from '@/features/porfolio/delivery/components/technologies/technologies'
import { Footer } from '@/features/porfolio/delivery/components/footer/footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Header></Header>
        <About></About>
        <Technologies></Technologies>
        {/*<Contact></Contact>*/}
        <Footer></Footer>
      </div>
    </main>
  )
}
