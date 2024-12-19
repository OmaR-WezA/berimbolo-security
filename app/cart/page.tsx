'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useCart } from '@/contexts/CartContext'

export default function Cart() {
    const { cart, updateQuantity, removeFromCart } = useCart()
    const [paymentMethod, setPaymentMethod] = useState('credit_card')

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <main className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="cart">
                <h1 className="text-4xl font-bold mb-8 text-center">Your Cart</h1>

                {cart.length === 0 ? (
                    <p className="text-center text-xl">Your cart is empty. <Link href="/products" className="text-blue-600 hover:underline">Continue shopping</Link></p>
                ) : (
                    <>
                        <div className="space-y-8" id="inside">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-wrap items-center space-x-4 bg-white p-4 rounded-lg shadow">
                                    <Image src={item.image} alt={item.name} width={100} height={100} className="rounded" />
                                    <div className="flex-grow">
                                        <h2 className="text-xl font-semibold">{item.name}</h2>
                                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                            -
                                        </Button>
                                        <span className="text-xl font-semibold">{item.quantity}</span>
                                        <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                            +
                                        </Button>
                                    </div>
                                    <div className="w-full mt-4 flex justify-end md:w-auto md:mt-0">
                                        <Button variant="destructive" onClick={() => removeFromCart(item.id)} id="zorar">
                                            Remove
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <div className="mt-8 bg-white p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
                            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="credit_card" id="credit_card" />
                                    <Label htmlFor="credit_card">Credit Card</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="paypal" id="paypal" />
                                    <Label htmlFor="paypal">PayPal</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="bank_transfer" id="bank_transfer" />
                                    <Label htmlFor="bank_transfer">Bank Transfer</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="mt-8 text-right">
                            <p className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
                            <Button asChild size="lg" className="mt-4">
                                <Link href="/checkout">Proceed to Checkout</Link>
                            </Button>
                        </div>
                    </>
                )}

                <div className="mt-8 text-center">
                    <Button asChild variant="outline">
                        <Link href="/products">Continue Shopping</Link>
                    </Button>
                </div>
            </div>
        </main>
    )
}