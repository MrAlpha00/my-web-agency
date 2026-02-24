import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const fullName = formData.get('fullName') as string;
        const email = formData.get('email') as string;
        const subject = formData.get('subject') as string;
        const portfolioUrl = formData.get('portfolioUrl') as string;
        const coverMessage = formData.get('coverMessage') as string;
        const resume = formData.get('resume') as File;
        const turnstileToken = formData.get('turnstileToken') as string;

        if (!fullName || !email || !subject || !coverMessage || !resume || !turnstileToken) {
            return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
        }

        // 1. Verify Cloudflare Turnstile
        if (!TURNSTILE_SECRET_KEY) {
            console.warn('TURNSTILE_SECRET_KEY is not defined in environment variables.');
            return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
        }

        const verifyParams = new URLSearchParams();
        verifyParams.append('secret', TURNSTILE_SECRET_KEY);
        verifyParams.append('response', turnstileToken);

        const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            body: verifyParams,
        });

        const turnstileData = await turnstileRes.json();
        if (!turnstileData.success) {
            return NextResponse.json({ error: 'Security verification failed. Please try again.' }, { status: 400 });
        }

        // 2. Validate Resume
        if (resume.type !== 'application/pdf') {
            return NextResponse.json({ error: 'Resume must be a PDF file.' }, { status: 400 });
        }
        if (resume.size > 5 * 1024 * 1024) {
            return NextResponse.json({ error: 'Resume exceeds the 5MB size limit.' }, { status: 400 });
        }

        // 3. Convert File to Buffer for Resend
        const arrayBuffer = await resume.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // 4. Send Email via Resend
        const { data: emailData, error: emailError } = await resend.emails.send({
            from: 'Careers <careers@pureons.com>', // Requires a verified domain in Resend
            to: ['careers@pureons.com'],
            replyTo: email,
            subject: `${subject} – ${fullName}`,
            text: `
Name: ${fullName}
Email: ${email}
Portfolio: ${portfolioUrl || 'N/A'}

Cover Message:
${coverMessage}
      `,
            attachments: [
                {
                    filename: resume.name,
                    content: buffer,
                },
            ],
        });

        if (emailError) {
            console.error('Resend error:', emailError);
            return NextResponse.json({ error: 'Failed to send application email.' }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: 'Application sent successfully.' }, { status: 200 });

    } catch (error: any) {
        console.error('Apply API Error:', error);
        return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
    }
}
