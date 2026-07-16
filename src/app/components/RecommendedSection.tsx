import { Info } from "lucide-react";
import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { useWishlist } from "@/hooks/useWishlist";
import { getRecommendations } from "@/lib/recommend";
import styles from "./RecommendedSection.module.css";

interface RecommendedSectionProps {
  products: Product[];
}

export function RecommendedSection({ products }: RecommendedSectionProps) {
  const { toggle, isLiked, likedIds } = useWishlist();
  const recommended = getRecommendations(products, likedIds);

  if (recommended.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Recommended Listings</h2>
        <span
          className={styles.infoWrap}
          tabIndex={0}
          role="img"
          aria-label="Why you're seeing this: Kampus tailors this section based on your saved listings"
        >
          <Info size={17} />
          <span className={styles.tooltip}>
            <strong className={styles.tooltipHeading}>
              Why you're seeing this
            </strong>
            Kampus tailors this section based on your saved listings
          </span>
        </span>
      </div>

      <div className={styles.row}>
        {recommended.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            liked={isLiked(product.id)}
            onToggleLike={toggle}
            style={{ animationDelay: `${i * 0.05}s` }}
          />
        ))}
      </div>
    </section>
  );
}
