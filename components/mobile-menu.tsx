'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useUser } from '@/contexts/UserContext'

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const { user, logout } = useUser()

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                    <Link href="/" className="text-lg" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link href="/services" className="text-lg" onClick={() => setIsOpen(false)}>
                        Services
                    </Link>
                    <Link href="/products" className="text-lg" onClick={() => setIsOpen(false)}>
                        Products
                    </Link>
                    <Link href="/contact" className="text-lg" onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                    <Link href="/cart" className="text-lg" onClick={() => setIsOpen(false)}>
                        <ShoppingCart className="inline-block w-5 h-5 mr-1" />
                        Cart
                    </Link>
                    {user ? (
                        <>
                            <span className="text-lg">Welcome, {user.username}!</span>
                            <Button onClick={() => { logout(); setIsOpen(false); }} variant="outline">
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="text-lg" onClick={() => setIsOpen(false)}>
                                Login
                            </Link>
                            <Link href="/register" className="text-lg" onClick={() => setIsOpen(false)}>
                                Register
                            </Link>
                        </>
                    )}
                </nav>
                <Button
                    variant="ghost"
                    className="absolute right-4 top-4"
                    onClick={() => setIsOpen(false)}
                >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                </Button>
            </SheetContent>
        </Sheet>
    )
}