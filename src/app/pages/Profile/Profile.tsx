import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Package, Heart, Settings, Star, MapPin, Calendar } from 'lucide-react'
import { PRODUCTS } from '@/data/products'
import { ProductCard } from '@/app/components/ProductCard'
import { useWishlist } from '@/hooks/useWishlist'
import styles from './Profile.module.css'

// In a real app: if the profile id matches the logged-in user, show "own" view
const IS_OWN_PROFILE = true

const MOCK_USER = {
  name: 'Sarah Katipunan',
  initials: 'SK',
  email: 'sarah.k@ciit.edu.ph',
  course: 'BS Information Technology',
  year: '3rd Year',
  joined: 'August 2023',
  rating: 4.8,
  reviews: 12,
  activeListings: 4,
  soldItems: 9,
}

type Tab = 'listings' | 'saved'

export default function Profile() {
  const [activeTab, setActiveTab] = useState<Tab>('listings')
  const { toggle, isLiked } = useWishlist()

  const userListings = PRODUCTS.slice(0, 4)
  const savedListings = PRODUCTS.slice(4, 8)

  return (
    <div className={styles.page}>

      {/* Back nav */}
      <div className={styles.topBar}>
        <Link to="/" className={styles.backBtn}>
          <ArrowLeft size={16} />
          Back to listings
        </Link>
        {IS_OWN_PROFILE && (
          <button className={styles.settingsBtn}>
            <Settings size={16} />
            Settings
          </button>
        )}
      </div>

      {/* Profile header */}
      <div className={styles.header}>
        <div className={styles.avatarWrap}>
          <div className={styles.avatar}>{MOCK_USER.initials}</div>
          {IS_OWN_PROFILE && (
            <button className={styles.editAvatarBtn}>Edit</button>
          )}
        </div>

        <div className={styles.info}>
          <div className={styles.nameRow}>
            <h1 className={styles.name}>{MOCK_USER.name}</h1>
            <div className={styles.ratingBadge}>
              <Star size={13} fill="currentColor" />
              {MOCK_USER.rating}
              <span>({MOCK_USER.reviews} reviews)</span>
            </div>
          </div>

          <div className={styles.metaRow}>
            <span><MapPin size={13} /> {MOCK_USER.course} · {MOCK_USER.year}</span>
            <span><Calendar size={13} /> Joined {MOCK_USER.joined}</span>
          </div>

          {IS_OWN_PROFILE && (
            <p className={styles.email}>{MOCK_USER.email}</p>
          )}
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>{MOCK_USER.activeListings}</span>
            <span className={styles.statLabel}>Active</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>{MOCK_USER.soldItems}</span>
            <span className={styles.statLabel}>Sold</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>{MOCK_USER.rating}</span>
            <span className={styles.statLabel}>Rating</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'listings' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('listings')}
        >
          <Package size={15} />
          {IS_OWN_PROFILE ? 'My Listings' : 'Listings'}
        </button>
        {IS_OWN_PROFILE && (
          <button
            className={`${styles.tab} ${activeTab === 'saved' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('saved')}
          >
            <Heart size={15} />
            Saved
          </button>
        )}
      </div>

      {/* Content */}
      <div className={styles.content}>
        {activeTab === 'listings' && (
          <>
            {IS_OWN_PROFILE && (
              <div className={styles.newListingBanner}>
                <p>Got something to sell?</p>
                <Link to="/create-listing" className={styles.newListingBtn}>+ Post a listing</Link>
              </div>
            )}
            <div className={styles.grid}>
              {userListings.map((p, i) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  liked={isLiked(p.id)}
                  onToggleLike={toggle}
                  style={{ animationDelay: `${i * 0.05}s` }}
                />
              ))}
            </div>
          </>
        )}

        {activeTab === 'saved' && (
          <div className={styles.grid}>
            {savedListings.length > 0
              ? savedListings.map((p, i) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  liked={isLiked(p.id)}
                  onToggleLike={toggle}
                  style={{ animationDelay: `${i * 0.05}s` }}
                />
              ))
              : (
                <div className={styles.empty}>
                  <Heart size={32} strokeWidth={1.5} />
                  <p>No saved listings yet.</p>
                  <Link to="/">Browse listings</Link>
                </div>
              )
            }
          </div>
        )}
      </div>
    </div>
  )
}
