import styles from './header.module.css'
import { LanguageSelector } from '@/features/shared/delivery/components/language-selector/language-selector'
import { ThemeSelector } from '@/features/shared/delivery/components/theme-selector/theme-selector'

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Manuel Martín</h1>
      <div>
        <LanguageSelector></LanguageSelector>
        <ThemeSelector></ThemeSelector>
      </div>
    </header>
  )
}
