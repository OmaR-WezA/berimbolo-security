'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useUser } from '@/contexts/UserContext'

export function AuthButtons() {
    const { user, logout } = useUser()

    if (user) {
        return (
            <>
                <span className="text-gray-700">Welcome, {user.username}!</span>
                <Button onClick={logout} variant="outline" className="ml-2">Logout</Button>
            </>
        )
    }

    return (
        <>
            <Link href="/login" className="text-gray-700 hover:text-gray-900">
                <Button variant="outline">Login</Button>
            </Link>
            <Link href="/register" className="text-gray-700 hover:text-gray-900 ml-2">
                <Button variant="outline">Register</Button>
            </Link>
        </>
    )
}