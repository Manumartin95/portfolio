import { useEffect } from 'react'
import { useTheme } from '@/features/shared/delivery/hooks/use-theme/use-theme'
import styles from './theme-selector.module.css'
import { Icon } from '@/features/shared/delivery/components/icon/icon'
import { Moon } from '@/features/shared/delivery/components/icon/icons/moon'
import { Sun } from '@/features/shared/delivery/components/icon/icons/sun'
import { bind } from '@/styles/bind'

const cx = bind(styles)
export const ThemeSelector = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div>
      <button className={cx('selector')} onClick={toggleTheme}>
        {theme === 'light' ? (
          <Icon icon={<Moon />} className={cx('moon')} />
        ) : (
          <Icon icon={<Sun />} className={cx('sun')} />
        )}
      </button>
    </div>
  )
}
