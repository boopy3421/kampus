import { Search, User, Plus, MessageCircle } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import type { ModalPanel } from "@/hooks/useModal";
import { PRODUCTS } from "@/data/products";
import { buildTitleTrie } from "@/lib/trie";
import { fuzzyMatch } from "@/lib/editDistance";
import { SearchSuggestions } from "./SearchSuggestions";
import styles from "./Navbar.module.css";

interface NavbarProps {
  onOpenModal: (panel: ModalPanel) => void;
}

export function Navbar({ onOpenModal }: NavbarProps) {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || "",
  );
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const titleTrie = useMemo(
    () => buildTitleTrie(PRODUCTS.map((p) => p.title)),
    [],
  );

  const suggestions = (() => {
    if (!isSearchFocused || !searchValue) return [];

    const exact = titleTrie.search(searchValue);
    if (exact.length > 0) return exact;

    return fuzzyMatch(
      searchValue,
      PRODUCTS.map((p) => p.title),
    );
  })();

  const commitSearch = (value: string) => {
    setSearchValue(value);

    // Update URL with search parameter
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set("search", value);
      // Clear category when searching to show results from all categories
      newParams.delete("category");
    } else {
      newParams.delete("search");
    }

    // Navigate to home with search params
    navigate(`/?${newParams.toString()}`, { replace: true });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    commitSearch(e.target.value);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          Kampus<span className={styles.logoDot}>.</span>
        </Link>

        {/* Search */}
        <div className={styles.searchWrap}>
          <Search size={16} className={styles.searchIcon} />
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search listings — books, gadgets, uniforms…"
            value={searchValue}
            onChange={handleSearchChange}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          <SearchSuggestions
            suggestions={suggestions}
            onSelect={(title) => {
              commitSearch(title);
              setIsSearchFocused(false);
            }}
          />
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <button
            className={`${styles.btn} ${styles.btnSell}`}
            onClick={() => {
              if (isLoggedIn) navigate("/create-listing");
              else onOpenModal("sell");
            }}
          >
            <Plus size={15} />
            Sell
          </button>
          {isLoggedIn ? (
            <>
              <button
                className={`${styles.btn} ${styles.btnGhost}`}
                onClick={() => navigate("/messages")}
              >
                <MessageCircle size={15} />
                Messages
              </button>
              <button
                className={`${styles.btn} ${styles.btnGhost}`}
                onClick={() => navigate("/profile")}
              >
                <User size={15} />
                Profile
              </button>
              <button
                className={`${styles.btn} ${styles.btnGhost}`}
                onClick={() => {
                  navigate("/");
                  setTimeout(logout, 0);
                }}
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              className={`${styles.btn} ${styles.btnGhost}`}
              onClick={() => onOpenModal("signin")}
            >
              <User size={15} />
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
