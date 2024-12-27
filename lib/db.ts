import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10,
});

export default async function executeQuery({ query, values = [] }: { query: string; values?: any[] }) {
    try {
        const [results] = await pool.query(query, values);
        return results;
    } catch (error) {
        console.error('Database query error:', error);
        throw error;
    }
}