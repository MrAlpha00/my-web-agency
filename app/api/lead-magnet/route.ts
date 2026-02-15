
import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email } = body;

        if (!email) {
            return NextResponse.json(
                { success: false, message: 'Email is required' },
                { status: 400 }
            );
        }

        const client = await pool.connect();

        try {
            const query = `
                INSERT INTO subscribers (email)
                VALUES ($1)
                ON CONFLICT (email) DO NOTHING
                RETURNING id;
            `;
            const values = [email];
            const result = await client.query(query, values);

            if (result.rowCount === 0) {
                return NextResponse.json({
                    success: true,
                    message: 'You are already subscribed!',
                    downloadUrl: '/assets/checklist.pdf'
                });
            }

            return NextResponse.json({
                success: true,
                message: 'Successfully subscribed!',
                downloadUrl: '/assets/checklist.pdf'
            });
        } finally {
            client.release();
        }
    } catch (error) {
        console.error('Database Error:', error);
        return NextResponse.json(
            { success: false, message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
