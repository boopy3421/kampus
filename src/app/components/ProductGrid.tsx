import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { useWishlist } from "@/hooks/useWishlist";
import type { SortKey } from "@/lib/sort";
import { SortDropdown } from "./SortDropdown";
import styles from "./ProductGrid.module.css";

interface ProductGridProps {
  products: Product[];
  title?: string;
  sortKey?: SortKey;
  onSortChange?: (key: SortKey) => void;
}

export function ProductGrid({
  products,
  title = "Recent Listings",
  sortKey,
  onSortChange,
}: ProductGridProps) {
  const { toggle, isLiked } = useWishlist();

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.headerRight}>
          {onSortChange && sortKey && (
            <SortDropdown value={sortKey} onChange={onSortChange} />
          )}
        </div>
      </div>

      <div className={styles.grid}>
        {products.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            liked={isLiked(product.id)}
            onToggleLike={toggle}
            style={{ animationDelay: `${i * 0.05}s` }}
          />
        ))}
      </div>

      {products.length === 0 && (
        <div className={styles.empty}>
          <p>No listings found in this category yet.</p>
        </div>
      )}
    </section>
  );
}
