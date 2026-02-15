
import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
    try {
        const client = await pool.connect();
        try {
            const result = await client.query('SELECT * FROM leads ORDER BY created_at DESC');
            return NextResponse.json({ success: true, leads: result.rows });
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

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, website, businessModel, revenue_band, message } = body;

        // Validate required fields
        if (!name || !email) {
            return NextResponse.json(
                { success: false, message: 'Name and Email are required' },
                { status: 400 }
            );
        }

        const client = await pool.connect();

        try {
            const query = `
        INSERT INTO leads (name, email, website, business_model, revenue_band, message)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id;
      `;
            const values = [name, email, website, businessModel, revenue_band, message];

            const result = await client.query(query, values);

            return NextResponse.json({
                success: true,
                message: 'Lead received successfully',
                leadId: result.rows[0].id
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
