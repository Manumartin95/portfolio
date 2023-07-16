import styles from './about.module.css'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

export const About = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <div className={styles.wrapper}>
        <Image
          src="/images/profile.jpeg"
          alt="Profile photo"
          width={350}
          height={350}
          className={styles.image}
          priority
        />
        <p>{t('aboutMe')}</p>
      </div>
    </>
  )
}
