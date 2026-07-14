import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { SortKey } from "@/lib/sort";
import styles from "./SortDropdown.module.css";

interface SortDropdownProps {
  value: SortKey;
  onChange: (key: SortKey) => void;
}

const DEFAULT_KEY: SortKey = "date-newest";

const OPTIONS: { value: SortKey; label: string }[] = [
  { value: "price-desc", label: "Price: High to Low" },
  { value: "price-asc", label: "Price: Low to High" },
];

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const active = OPTIONS.find((opt) => opt.value === value);

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <button
        type="button"
        className={`${styles.trigger} ${active ? styles.triggerActive : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {active ? `Sort: ${active.label}` : "Sort"}
        <ChevronDown
          size={14}
          className={open ? styles.chevronOpen : styles.chevron}
        />
      </button>

      {open && (
        <div className={styles.panel} role="listbox">
          {OPTIONS.map((opt) => {
            const selected = value === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                role="option"
                aria-selected={selected}
                className={styles.option}
                onClick={() => {
                  onChange(selected ? DEFAULT_KEY : opt.value);
                  setOpen(false);
                }}
              >
                <span
                  className={`${styles.radio} ${selected ? styles.radioChecked : ""}`}
                />
                {opt.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
