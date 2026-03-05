import styles from './Hero.module.css'
import heroBanner from '@/assets/KAMPUS_BANNER.png'

export function Hero() {
  return (
    <div className={styles.hero}>
      <img src={heroBanner} alt="Kampus Banner" className={styles.banner} />
      <div className={styles.pattern} />
    </div>
  )
}