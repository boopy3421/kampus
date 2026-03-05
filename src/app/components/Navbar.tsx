import { Search, User, Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import type { ModalPanel } from '@/hooks/useModal'
import styles from './Navbar.module.css'

interface NavbarProps {
  onOpenModal: (panel: ModalPanel) => void
}

export function Navbar({ onOpenModal }: NavbarProps) {
  const { isLoggedIn, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="/" className={styles.logo}>
          Kampus<span className={styles.logoDot}>.</span>
        </a>

        {/* Search */}
        <div className={styles.searchWrap}>
          <Search size={16} className={styles.searchIcon} />
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search listings — books, gadgets, uniforms…"
          />
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <button
            className={`${styles.btn} ${styles.btnSell}`}
            onClick={() => {
              if (isLoggedIn) navigate('/create-listing')
              else onOpenModal('sell')
            }}
          >
            <Plus size={15} />
            Sell
          </button>
          {isLoggedIn ? (
            <>
              <button className={`${styles.btn} ${styles.btnGhost}`} onClick={() => navigate('/profile')}>
                <User size={15} />
                Profile
              </button>
              <button className={`${styles.btn} ${styles.btnGhost}`} onClick={() => { navigate('/'); setTimeout(logout, 0); }}>
                Sign Out
              </button>
            </>
          ) : (
            <button className={`${styles.btn} ${styles.btnGhost}`} onClick={() => onOpenModal('signin')}>
              <User size={15} />
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
