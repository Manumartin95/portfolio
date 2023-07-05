import styles from './page.module.css'
import { About } from '@/app/porfolio/delivery/components/about/about'
import { Technologies } from '@/app/porfolio/delivery/components/technologies/technologies'
import { Header } from '@/app/porfolio/delivery/components/header/header'
import { Footer } from '@/app/porfolio/delivery/components/footer/footer'

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
