import { NextApiRequest, NextApiResponse } from 'next';
import executeQuery from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { productId, productName, quantity, price, customerEmail } = req.body;

    if (!productId || !productName || !quantity || !price || !customerEmail) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const result = await executeQuery({
            query: 'INSERT INTO purchases (product_id, product_name, quantity, price, customer_email, purchase_date) VALUES (?, ?, ?, ?, ?, NOW())',
            values: [productId, productName, quantity, price, customerEmail],
        });

        res.status(200).json({ message: 'Purchase added successfully', result });
    } catch (error) {
        console.error('Error adding purchase:', error);
        res.status(500).json({ message: 'Error adding purchase to database' });
    }
}