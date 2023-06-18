import styles from './technologies.module.css'
import Image from "next/image";

const TECHNOLOGIES: { name: string, image: string }[] = [{
    name: 'React',
    image: '/icons/react-js-icon.svg'
}, {
    name: 'Angular',
    image: '/icons/angular-icon.svg'
}, {
    name: 'NextJS',
    image: '/icons/nextjs-icon.svg'
}, {
    name: 'NestJS',
    image: '/icons/nest-js-icon.svg'
}]
export const Technologies = () => {
    return <>
        
        <h2>Technologies i have used</h2>
        <ul className={styles.list}>
            {TECHNOLOGIES.map((item, index) => <li className={styles.item} key={index}><Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                priority
            /><span>{item.name}</span></li>)}
        </ul>
    </>

}