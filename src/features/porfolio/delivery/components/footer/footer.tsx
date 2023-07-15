import styles from './footer.module.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <span>Manuel Martín</span>
      <div className={styles.bottom}>
        <small>&copy;</small>
        <span>{currentYear}</span>
      </div>
    </footer>
  )
}
