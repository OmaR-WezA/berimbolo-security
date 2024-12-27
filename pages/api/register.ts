import { NextApiRequest, NextApiResponse } from 'next'
import executeQuery from '@/lib/db'
import bcrypt from 'bcryptjs'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const { username, email, password } = req.body

    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        await executeQuery({
            query: 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            values: [username, email, hashedPassword],
        })

        res.status(201).json({ message: 'User registered successfully' })
    } catch (error) {
        console.error('Registration error:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}