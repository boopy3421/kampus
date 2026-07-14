import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { useWishlist } from "@/hooks/useWishlist";
import { splitByBoost } from "@/lib/boosts";
import styles from "./BoostedSection.module.css";

interface BoostedSectionProps {
  products: Product[];
}

export function BoostedSection({ products }: BoostedSectionProps) {
  const { toggle, isLiked } = useWishlist();
  const { boosted } = splitByBoost(products);

  if (boosted.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Boosted Listings</h2>
      </div>

      <div className={styles.row}>
        {boosted.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            liked={isLiked(product.id)}
            onToggleLike={toggle}
            compactBoost
            style={{ animationDelay: `${i * 0.05}s` }}
          />
        ))}
      </div>
    </section>
  );
}
