import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ThankYou() {
    return (
        <main className="py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-bold mb-4">Thank You for Your Order!</h1>
                <p className="text-xl mb-8">Your order has been received and is being processed.</p>
                <Button asChild>
                    <Link href="/">Return to Home</Link>
                </Button>
            </div>
        </main>
    )
}