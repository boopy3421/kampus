import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <strong>Kampus.</strong> — Exclusively for{' '}
      <strong>CIIT College of Arts and Technology</strong> students.
      <span className={styles.copy}>© 2025 Kampus. All rights reserved.</span>
    </footer>
  )
}
