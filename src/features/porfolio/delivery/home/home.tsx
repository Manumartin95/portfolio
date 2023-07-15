import styles from './home.module.css'
import React from 'react'
import { About } from '@/features/porfolio/delivery/components/about/about'
import { Technologies } from '@/features/porfolio/delivery/components/technologies/technologies'

export default function Home() {
  return (
    <div className={styles.main}>
      <About></About>
      <Technologies></Technologies>
      {/*<Contact></Contact>*/}
    </div>
  )
}
