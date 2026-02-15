import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
        }

        const client = await pool.connect();

        try {
            await client.query(
                'INSERT INTO subscribers (email) VALUES ($1) ON CONFLICT (email) DO NOTHING',
                [email]
            );
        } finally {
            client.release();
        }

        // In a real app, we might send an email here using Resend/SendGrid
        // For now, we just return success and let the frontend show the download link

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Lead Magnet Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
