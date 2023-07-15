import { useRouter } from 'next/router'
import { useState } from 'react'

export const LanguageSelector = () => {
  const router = useRouter()
  const [currentLocale, setCurrentLocale] = useState(router.locale)

  const handleChange = (locale: string) => {
    setCurrentLocale(locale)
    router.push(router.asPath, router.asPath, { locale: locale as string })
  }
  return (
    <form>
      <select onChange={(e) => handleChange(e.target.value)} value={currentLocale}>
        <option value="en">en</option>
        <option value="es">es</option>
      </select>
    </form>
  )
}
