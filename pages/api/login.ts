import { NextApiRequest, NextApiResponse } from 'next'
import executeQuery from '@/lib/db'
import bcrypt from 'bcryptjs'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const { email, password } = req.body

    try {
        const users = await executeQuery({
            query: 'SELECT * FROM users WHERE email = ?',
            values: [email],
        }) as any[]

        if (users.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' })
        }

        const user = users[0]
        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' })
        }

        res.status(200).json({ id: user.id, username: user.username, email: user.email })
    } catch (error) {
        console.error('Login error:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}