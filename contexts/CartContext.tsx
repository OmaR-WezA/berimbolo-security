'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useUser } from './UserContext'

type CartItem = {
    id: number
    name: string
    price: number
    quantity: number
}

type CartContextType = {
    cart: CartItem[]
    addToCart: (product: CartItem) => void
    removeFromCart: (productId: number) => void
    clearCart: () => void
    updateQuantity: (productId: number, quantity: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([])
    const { user } = useUser()

    useEffect(() => {
        const savedCart = localStorage.getItem('cart')
        if (savedCart) {
            setCart(JSON.parse(savedCart))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id)
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            } else {
                return [...prevCart, { ...product, quantity: 1 }]
            }
        })
    }

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId))
    }

    const clearCart = () => {
        setCart([])
        localStorage.removeItem('cart')
    }

    const updateQuantity = (productId, newQuantity) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            ).filter(item => item.quantity > 0)
            return updatedCart
        })
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}