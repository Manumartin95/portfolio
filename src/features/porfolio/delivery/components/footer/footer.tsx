import styles from './footer.module.css'
import { SocialMedia } from '@/features/porfolio/delivery/components/social/social-media'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <span>Manuel Martín</span>
      <SocialMedia></SocialMedia>
      
      <div className={styles.bottom}>
        <small>&copy;</small>
        <span>{currentYear}</span>
      </div>
    </footer>
  )
}
