import './page.css'
import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { MobileMenu } from '@/components/mobile-menu'
import { ShoppingCart } from 'lucide-react'
import { CartProvider } from '@/contexts/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Berimbolo Security',
  description: 'Professional security solutions for homes and businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-50`}>
        <CartProvider>
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
              <div className="flex items-center">
                {/* <Image src="/logo.svg" alt="Berimbolo Security Logo" width={40} height={40} className="mr-2" /> */}
                <span className="text-xl font-bold text-gray-900">Berimbolo Security</span>
              </div>
              <nav className="hidden md:flex space-x-4">
                <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
                <Link href="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
                <Link href="/products" className="text-gray-700 hover:text-gray-900">Products</Link>
                <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
                <Link href="/cart" className="text-gray-700 hover:text-gray-900">
                  <ShoppingCart className="inline-block w-5 h-5 mr-1" />
                  Cart
                </Link>
              </nav>
              <MobileMenu />
            </div>
          </header>

          <main>{children}</main>

          <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
                    <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
                    <li><Link href="/products" className="hover:text-gray-300">Products</Link></li>
                    <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
                    <li><Link href="/cart" className="hover:text-gray-300">Cart</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                  <p>Cairo Nasr-City</p>
                  <p>(20) 1150665030</p>
                  <p>omarfahem11@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-300">Facebook</a>
                    <a href="#" className="hover:text-gray-300">Twitter</a>
                    <a href="#" className="hover:text-gray-300">LinkedIn</a>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p>&copy; 2024 Berimbolo Security. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}