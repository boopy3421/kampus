import styles from "./SearchSuggestions.module.css";

interface SearchSuggestionsProps {
  suggestions: string[];
  onSelect: (title: string) => void;
}

export function SearchSuggestions({
  suggestions,
  onSelect,
}: SearchSuggestionsProps) {
  if (suggestions.length === 0) return null;

  return (
    <ul className={styles.list} role="listbox">
      {suggestions.map((title) => (
        <li
          key={title}
          role="option"
          aria-selected={false}
          className={styles.item}
          onMouseDown={(e) => {
            e.preventDefault();
            onSelect(title);
          }}
        >
          {title}
        </li>
      ))}
    </ul>
  );
}
