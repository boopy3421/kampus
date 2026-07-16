import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export function useWishlist() {
  const { user } = useAuth();
  const userKey = user ? `wishlist_${user.email}` : "wishlist_guest";

  // Load liked from localStorage
  const getInitialLiked = (): Set<number> => {
    try {
      const stored = localStorage.getItem(userKey);
      return stored ? new Set(JSON.parse(stored) as number[]) : new Set();
    } catch {
      return new Set();
    }
  };

  const [liked, setLiked] = useState<Set<number>>(getInitialLiked());

  // Persist liked to localStorage
  const persistLiked = (ids: Set<number>) => {
    try {
      localStorage.setItem(userKey, JSON.stringify(Array.from(ids)));
    } catch {}
  };

  const toggle = (id: number) => {
    setLiked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      persistLiked(next);
      return next;
    });
  };

  const isLiked = (id: number) => liked.has(id);

  return { toggle, isLiked, likedIds: Array.from(liked) };
}
