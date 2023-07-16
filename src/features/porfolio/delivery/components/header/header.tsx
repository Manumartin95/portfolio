import styles from './header.module.css'
import { LanguageSelector } from '@/features/shared/delivery/components/language-selector/language-selector'
import { ThemeSelector } from '@/features/shared/delivery/components/theme-selector/theme-selector'
import { bind } from '@/styles/bind'

const cx = bind(styles)

export const Header = () => {
  return (
    <header className={cx('header')}>
      <h1>Manuel Martín</h1>
      <div className={cx('options')}>
        <LanguageSelector></LanguageSelector>
        <ThemeSelector></ThemeSelector>
      </div>
    </header>
  )
}
