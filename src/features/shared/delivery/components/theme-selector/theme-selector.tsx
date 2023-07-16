import { useEffect, useState } from 'react'
import { useTheme } from '@/features/shared/delivery/hooks/use-theme/use-theme'

export const ThemeSelector = () => {
  const customTheme = useTheme()
  const [theme, setTheme] = useState(customTheme)
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
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
