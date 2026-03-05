import { CATEGORIES } from '@/data/products'
import styles from './CategoryBar.module.css'

interface CategoryBarProps {
  active: string
  onChange: (cat: string) => void
}

export function CategoryBar({ active, onChange }: CategoryBarProps) {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        {CATEGORIES.map(({ label, icon }) => (
          <button
            key={label}
            className={`${styles.chip} ${active === label ? styles.active : ''}`}
            onClick={() => onChange(label)}
          >
            <span className={styles.icon}>{icon}</span>
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
