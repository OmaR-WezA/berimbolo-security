'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCart } from '@/contexts/CartContext'
import { useUser } from '@/contexts/UserContext'

export default function Checkout() {
    const router = useRouter()
    const { cart, clearCart } = useCart()
    const { user } = useUser()
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        country: '',
        cardNumber: '',
        expirationDate: '',
        cvv: ''
    })
    const [error, setError] = useState('')

    useEffect(() => {
        if (!user) {
            router.push('/login?redirect=checkout')
        }
    }, [user, router])

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        try {
            const response = await fetch('/api/complete-purchase', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cart,
                    customerInfo: {
                        fullName: formData.fullName,
                        email: formData.email,
                        address: `${formData.address}, ${formData.city}, ${formData.zipCode}, ${formData.country}`,
                    },
                }),
            })

            if (response.ok) {
                clearCart()
                router.push('/thank-you')
            } else {
                const data = await response.json()
                setError(data.message || 'An error occurred during checkout')
            }
        } catch (error) {
            console.error('Error submitting order:', error)
            setError('An error occurred. Please try again.')
        }
    }

    if (!user) {
        return null // or a loading spinner
    }

    return (
        <main className="py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-8 text-center">Checkout</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="address">Address</Label>
                        <Input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="city">City</Label>
                            <Input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="zipCode">ZIP Code</Label>
                            <Input
                                type="text"
                                id="zipCode"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="country">Country</Label>
                        <Input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="border-t pt-6">
                        <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                        <div>
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <Label htmlFor="expirationDate">Expiration Date</Label>
                                <Input
                                    type="text"
                                    id="expirationDate"
                                    name="expirationDate"
                                    placeholder="MM/YY"
                                    value={formData.expirationDate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="cvv">CVV</Label>
                                <Input
                                    type="text"
                                    id="cvv"
                                    name="cvv"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="border-t pt-6">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        {cart.map((item) => (
                            <div key={item.id} className="flex justify-between mb-2">
                                <span>{item.name} x {item.quantity}</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                        <div className="text-xl font-bold mt-4">
                            Total: ${totalPrice.toFixed(2)}
                        </div>
                    </div>

                    {error && <p className="text-red-500">{error}</p>}
                    <Button type="submit" className="w-full">Place Order</Button>
                </form>
            </div>
        </main>
    )
}