'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export function MobileMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                    <Link href="/" className="text-lg font-semibold">
                        Home
                    </Link>
                    <Link href="/services" className="text-lg font-semibold">
                        Services
                    </Link>
                    <Link href="/products" className="text-lg font-semibold">
                        Products
                    </Link>
                    <Link href="/contact" className="text-lg font-semibold">
                        Contact
                    </Link>
                </nav>
            </SheetContent>
        </Sheet>
    )
}