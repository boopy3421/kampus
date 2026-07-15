import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CATEGORIES } from "@/data/products";
import styles from "./CategoryBar.module.css";

interface CategoryBarProps {
  active: string;
  onSelect: (label: string) => void;
}

export function CategoryBar({ active, onSelect }: CategoryBarProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollByAmount = (amount: number) => {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className={styles.bar}>
      <div
        className={`${styles.scrollWrap} ${canScrollLeft ? styles.hasLeftFade : ""} ${canScrollRight ? styles.hasRightFade : ""}`}
      >
        {canScrollLeft && (
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navBtnLeft}`}
            onClick={() => scrollByAmount(-240)}
            aria-label="Scroll categories left"
          >
            <ChevronLeft size={16} />
          </button>
        )}

        <div className={styles.inner} ref={scrollRef}>
          {CATEGORIES.map(({ label, icon }) => {
            return (
              <button
                key={label}
                type="button"
                className={`${styles.chip} ${active === label ? styles.active : ""}`}
                onClick={() => onSelect(label)}
              >
                <span className={styles.icon}>{icon}</span>
                {label}
              </button>
            );
          })}
        </div>

        {canScrollRight && (
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navBtnRight}`}
            onClick={() => scrollByAmount(240)}
            aria-label="Scroll categories right"
          >
            <ChevronRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
