import styles from './header.module.css'
import { LanguageSelector } from '@/features/shared/delivery/components/language-selector/language-selector'

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Manuel Martín</h1>
      <LanguageSelector></LanguageSelector>
    </header>
  )
}
