import { NextApiRequest, NextApiResponse } from 'next';
import executeQuery from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { cart, customerInfo } = req.body;

    if (!cart || !customerInfo) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        // Start a transaction
        await executeQuery({ query: 'START TRANSACTION' });

        // Insert order into orders table
        const orderResult = await executeQuery({
            query: 'INSERT INTO orders (customer_name, customer_email, customer_address, total_amount, order_date) VALUES (?, ?, ?, ?, NOW())',
            values: [customerInfo.fullName, customerInfo.email, customerInfo.address, cart.reduce((total, item) => total + item.price * item.quantity, 0)],
        });

        const orderId = orderResult.insertId;

        // Insert each item in the cart into order_items table
        for (const item of cart) {
            await executeQuery({
                query: 'INSERT INTO order_items (order_id, product_id, product_name, quantity, price) VALUES (?, ?, ?, ?, ?)',
                values: [orderId, item.id, item.name, item.quantity, item.price],
            });
        }

        // Commit the transaction
        await executeQuery({ query: 'COMMIT' });

        res.status(200).json({ message: 'Purchase completed successfully', orderId });
    } catch (error) {
        // Rollback the transaction in case of error
        await executeQuery({ query: 'ROLLBACK' });
        console.error('Error completing purchase:', error);
        res.status(500).json({ message: 'Error completing purchase' });
    }
}