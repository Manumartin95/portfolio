import styles from './technologies.module.css'
import Image from 'next/image'

type Technologies = { name: string; image: string }

const TECHNOLOGIES: Technologies[] = [
  {
    name: 'React',
    image: '/icons/react-js-icon.svg'
  },
  {
    name: 'Angular',
    image: '/icons/angular-icon.svg'
  },
  {
    name: 'NextJS',
    image: '/icons/nextjs-icon.svg'
  },
  {
    name: 'NestJS',
    image: '/icons/nest-js-icon.svg'
  },
  {
    name: 'HTML',
    image: '/icons/html-icon.svg'
  },
  {
    name: 'CSS',
    image: '/icons/css-icon.svg'
  },
  {
    name: 'JavaScript',
    image: '/icons/javascript-icon.svg'
  },
  {
    name: 'TypeScript',
    image: '/icons/typescript-icon.svg'
  },
  {
    name: 'Jest',
    image: '/icons/jest-icon.svg'
  },
  {
    name: 'Cypress',
    image: '/icons/cypress.svg'
  },
  {
    name: 'Sass',
    image: '/icons/sass-icon.svg'
  },
  {
    name: 'Docker',
    image: '/icons/docker-icon.svg'
  },
  {
    name: 'NodeJS',
    image: '/icons/node-js-icon.svg'
  }
]
export const Technologies = () => {
  return (
    <>
      <h2>Technologies i have used</h2>
      <ul className={styles.list}>
        {TECHNOLOGIES.map((item, index) => (
          <li className={styles.item} key={index}>
            <Image src={item.image} alt={item.name} width={50} height={50} priority />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
