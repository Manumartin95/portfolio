import styles from './page.module.css'
import {About} from "@/app/porfolio/delivery/components/about/about";
import {Technologies} from "@/app/porfolio/delivery/components/technologies/technologies";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <About></About>
                <Technologies></Technologies>
            </div>
        </main>
    )
}
