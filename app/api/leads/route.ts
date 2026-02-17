
import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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
        let leadId;

        try {
            const query = `
        INSERT INTO leads (name, email, website, business_model, revenue_band, message)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id;
      `;
            const values = [name, email, website, businessModel, revenue_band, message];

            const result = await client.query(query, values);
            leadId = result.rows[0].id;

        } finally {
            client.release();
        }

        // Send emails using Resend (fire and forget or await, but don't fail request if email fails)
        try {
            // Admin Notification
            await resend.emails.send({
                from: 'PUREONS <onboarding@resend.dev>', // Using default Resend testing domain
                to: ['sm4686771@gmail.com'],
                subject: 'New Automation Consultation Request',
                html: `
            <h2>New Lead Received</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Website:</strong> ${website || 'Not provided'}</p>
            <p><strong>Business Model:</strong> ${businessModel || 'Not selected'}</p>
            <p><strong>Revenue:</strong> ${revenue_band || 'Not selected'}</p>
            <p><strong>Description:</strong> ${message || 'No description'}</p>
          `,
            });

            // User Confirmation
            await resend.emails.send({
                from: 'PUREONS <onboarding@resend.dev>',
                to: [email],
                subject: 'We received your request – PUREONS',
                html: `
            <div style="font-family: sans-serif; color: #333;">
              <h2>Hi ${name},</h2>
              <p>Thanks for reaching out to PUREONS.</p>
              <p>We've received your automation consultation request. Our team will review your business needs and get back to you within 24 hours.</p>
              <br/>
              <p>Best regards,</p>
              <p><strong>The PUREONS Team</strong></p>
            </div>
          `,
            });
        } catch (emailError) {
            console.error('Resend Email Error:', emailError);
            // We do NOT return an error here, because the lead was successfully saved to DB.
        }

        return NextResponse.json({
            success: true,
            message: 'Lead received successfully',
            leadId: leadId
        });

    } catch (error) {
        console.error('Database Error:', error);
        return NextResponse.json(
            { success: false, message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
