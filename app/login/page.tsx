'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useUser } from '@/contexts/UserContext'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()
    const searchParams = useSearchParams()
    const { login, user } = useUser()

    useEffect(() => {
        if (user) {
            const redirect = searchParams.get('redirect') || '/'
            router.push(redirect)
        }
    }, [user, router, searchParams])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            })

            if (response.ok) {
                const userData = await response.json()
                login(userData)
                const redirect = searchParams.get('redirect') || '/'
                router.push(redirect)
            } else {
                const errorData = await response.json()
                setError(errorData.message || 'Login failed')
            }
        } catch (error) {
            setError('An error occurred. Please try again.')
        }
    }

    return (
        <main className="py-16">
            <div className="max-w-md mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-center">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <Button type="submit" className="w-full">Login</Button>
                </form>
                <p className="mt-4 text-center">
                    Don't have an account? <Link href="/register" className="text-blue-600 hover:underline">Register</Link>
                </p>
            </div>
        </main>
    )
}