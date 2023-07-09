import styles from './about.module.css'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

export const About = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <div className={styles.wrapper}>
        {t('test')}
        <Image
          src="/images/profile.jpeg"
          alt="Profile photo"
          width={350}
          height={350}
          className={styles.image}
          priority
        />
        <h3>Full name</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ea et facere, fuga iste
          laudantium officia ut veniam. Blanditiis commodi eos error, expedita fugit id magnam natus
          quis soluta vero?
        </p>
      </div>
    </>
  )
}
