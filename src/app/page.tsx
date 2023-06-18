import styles from './page.module.css'
import {About} from "@/app/porfolio/delivery/components/about/about";
import {Technologies} from "@/app/porfolio/delivery/components/technologies/technologies";
import {Contact} from "@/app/porfolio/delivery/components/contact/contact";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <About></About>
                <Technologies></Technologies>
                <Contact></Contact>
            </div>
        </main>
    )
}
