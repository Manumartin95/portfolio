import { useEffect, useState } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (typeof window !== 'undefined')
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  }, [])

  return theme
}
