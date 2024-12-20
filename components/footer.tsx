import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <Link href="/" className="text-2xl font-bold">
                            Berimbolo Security
                        </Link>
                        <p className="text-sm">
                            Protecting what matters most, with cutting-edge technology and expert service.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold tracking-wider uppercase">Solutions</h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <Link href="/services" className="text-sm hover:underline">
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products" className="text-sm hover:underline">
                                            Products
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold tracking-wider uppercase">Support</h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <Link href="/contact" className="text-sm hover:underline">
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy" className="text-sm hover:underline">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms" className="text-sm hover:underline">
                                            Terms of Service
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-primary-foreground/10 pt-8">
                    <p className="text-sm text-center">
                        © {new Date().getFullYear()} Berimbolo Security. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}