import { useState, createContext, useContext, ReactNode } from 'react'
import type { Product } from '@/data/products'
import { PRODUCTS } from '@/data/products'

interface ListingsContextType {
    listings: Product[]
    addListing: (listing: Product) => void
    deleteListing: (id: number) => void
}

const ListingsContext = createContext<ListingsContextType | undefined>(undefined)

export function ListingsProvider({ children }: { children: ReactNode }) {
    const [listings, setListings] = useState<Product[]>(() => {
        try {
            const stored = localStorage.getItem('user_listings')
            const userListings = stored ? JSON.parse(stored) : []
            // Merge demo PRODUCTS and user listings, avoiding duplicate IDs
            const allIds = new Set([...PRODUCTS.map(p => p.id), ...userListings.map(p => p.id)])
            const merged = Array.from(allIds).map(id => {
                return userListings.find(p => p.id === id) || PRODUCTS.find(p => p.id === id)
            }).filter(Boolean)
            return merged
        } catch {
            return PRODUCTS
        }
    })

    const addListing = (listing: Product) => {
        setListings(prev => {
            const updated = [...prev, listing]
            try { localStorage.setItem('user_listings', JSON.stringify(updated)) } catch { }
            return updated
        })
    }

    const deleteListing = (id: number) => {
        setListings(prev => {
            const updated = prev.filter(l => l.id !== id)
            try { localStorage.setItem('user_listings', JSON.stringify(updated)) } catch { }
            return updated
        })
    }

    return (
        <ListingsContext.Provider value={{ listings, addListing, deleteListing }}>
            {children}
        </ListingsContext.Provider>
    )
}

export function useListings() {
    const ctx = useContext(ListingsContext)
    if (!ctx) throw new Error('useListings must be used within a ListingsProvider')
    return ctx
}
