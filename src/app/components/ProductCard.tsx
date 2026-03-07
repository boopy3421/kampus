import { Heart, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '@/data/products'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  product: Product
  liked: boolean
  onToggleLike: (id: number) => void
  style?: React.CSSProperties
  selectable?: boolean
  selected?: boolean
  onSelect?: () => void
}

const BADGE_CLASS: Record<string, string> = {
  'New': styles.badgeNew,
  'Like New': styles.badgeLikeNew,
  'Good': styles.badgeGood,
  'Used': styles.badgeUsed,
}

function formatPrice(price: number) {
  return '₱' + price.toLocaleString('en-PH', {
    minimumFractionDigits: price % 1 !== 0 ? 2 : 0,
  })
}

export function ProductCard({ product, liked, onToggleLike, style }: ProductCardProps) {
  const { id, title, price, image, category, seller, condition } = product
  // Destructure new props
  const { selectable, selected, onSelect } = arguments[0]

  const cardClass = `${styles.card}${selected ? ' ' + styles.selected : ''}`

  if (selectable) {
    return (
      <div className={cardClass} style={style} onClick={onSelect}>
        {/* Image */}
        <div className={styles.imageWrap}>
          <img src={image} alt={title} loading="lazy" className={styles.image} />
          {condition && (
            <span className={`${styles.badge} ${BADGE_CLASS[condition] ?? ''}`}>{condition}</span>
          )}
          <button
            className={`${styles.wishBtn} ${liked ? styles.liked : ''}`}
            onClick={(e) => { e.stopPropagation(); onToggleLike(id) }}
            aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart size={15} />
          </button>
        </div>
        {/* Body */}
        <div className={styles.body}>
          <span className={styles.category}>{category}</span>
          <p className={styles.title}>{title}</p>
          <p className={styles.seller}>by <span>{seller}</span></p>
          <div className={styles.footer}>
            <span className={styles.price}>{formatPrice(price)}</span>
            <div className={styles.actionBtn} aria-label="View listing">
              <ArrowRight size={14} color="white" strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  // Card navigation: only trigger if not clicking the heart button
  return (
    <div className={cardClass} style={style}>
      {/* Image */}
      <div className={styles.imageWrap}>
        <img src={image} alt={title} loading="lazy" className={styles.image} />
        {condition && (
          <span className={`${styles.badge} ${BADGE_CLASS[condition] ?? ''}`}>{condition}</span>
        )}
        <button
          className={`${styles.wishBtn} ${liked ? styles.liked : ''}`}
          onClick={(e) => { e.stopPropagation(); onToggleLike(id) }}
          aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart size={15} />
        </button>
      </div>
      {/* Body */}
      <div className={styles.body} onClick={() => window.location.href = `/item/${id}`} style={{ cursor: 'pointer' }}>
        <span className={styles.category}>{category}</span>
        <p className={styles.title}>{title}</p>
        <p className={styles.seller}>by <span>{seller}</span></p>
        <div className={styles.footer}>
          <span className={styles.price}>{formatPrice(price)}</span>
          <div className={styles.actionBtn} aria-label="View listing">
            <ArrowRight size={14} color="white" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </div>
  )
}
