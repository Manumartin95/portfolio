'use client'
import {Button} from "@/app/shared/delivery/components/button/button";
import styles from './contact.module.css'

export const Contact = () => {
    return <div className={styles.wrapper}>
        <a href="mailto:email@example.com">Contact me</a>
        <Button type='button' onClick={() => {
            console.log('Hello world')
        }
        }>Click me!</Button>
    </div>
}