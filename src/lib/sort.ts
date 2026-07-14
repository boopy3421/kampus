export type SortKey = "price-asc" | "price-desc" | "date-newest";

type Sortable = {
  id: number;
  title: string;
  price: number;
};

function comparatorFor(key: SortKey) {
  switch (key) {
    case "price-asc":
      return (a: Sortable, b: Sortable) => a.price - b.price;
    case "price-desc":
      return (a: Sortable, b: Sortable) => b.price - a.price;
    case "date-newest":
      return (a: Sortable, b: Sortable) => b.id - a.id;
  }
}

export function mergeSort<T>(items: T[], compare: (a: T, b: T) => number): T[] {
  if (items.length <= 1) return items;

  const mid = Math.floor(items.length / 2);
  const left = mergeSort(items.slice(0, mid), compare);
  const right = mergeSort(items.slice(mid), compare);

  return merge(left, right, compare);
}

function merge<T>(left: T[], right: T[], compare: (a: T, b: T) => number): T[] {
  const result: T[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (compare(left[i], right[j]) <= 0) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

export function sortProducts<T extends Sortable>(
  items: T[],
  key: SortKey,
): T[] {
  return mergeSort(items, comparatorFor(key));
}
