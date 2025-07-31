"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

interface BasketItem {
  id: string
  imageUrl: string
  title: string
  timestamp: number
  poseType?: string
}

interface BasketContextType {
  basketItems: BasketItem[]
  recentlyAdded: boolean
  addToBasket: (item: Omit<BasketItem, "id" | "timestamp">) => void
  removeFromBasket: (id: string) => void
  clearBasket: () => void
}

const BasketContext = createContext<BasketContextType | undefined>(undefined)

export function BasketProvider({ children }: { children: ReactNode }) {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([])
  const [recentlyAdded, setRecentlyAdded] = useState(false)

  const addToBasket = useCallback((item: Omit<BasketItem, "id" | "timestamp">) => {
    const newItem: BasketItem = {
      ...item,
      id: Date.now().toString(),
      timestamp: Date.now(),
    }

    setBasketItems((prev) => [newItem, ...prev])

    // Trigger animation
    setRecentlyAdded(true)
    setTimeout(() => setRecentlyAdded(false), 1500)
  }, [])

  const removeFromBasket = useCallback((id: string) => {
    setBasketItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const clearBasket = useCallback(() => {
    setBasketItems([])
  }, [])

  return (
    <BasketContext.Provider
      value={{
        basketItems,
        recentlyAdded,
        addToBasket,
        removeFromBasket,
        clearBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  )
}

export function useBasket() {
  const context = useContext(BasketContext)
  if (context === undefined) {
    throw new Error("useBasket must be used within a BasketProvider")
  }
  return context
}
