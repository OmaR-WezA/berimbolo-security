import Link from 'next/link'

export default function Navigation() {
    return (
        <nav className="bg-primary text-primary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="font-bold text-xl">
                            Berimbolo Security
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                            <Link href="/services" className="px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                            <Link href="/products" className="px-3 py-2 rounded-md text-sm font-medium">Products</Link>
                            <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                            <Link href="/faq" className="px-3 py-2 rounded-md text-sm font-medium">FAQ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}