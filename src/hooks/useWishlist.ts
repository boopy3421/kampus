import { useState } from 'react'

export function useWishlist() {
  const [liked, setLiked] = useState<Set<number>>(new Set())

  const toggle = (id: number) => {
    setLiked(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const isLiked = (id: number) => liked.has(id)

  return { toggle, isLiked }
}
