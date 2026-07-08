import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables (we do this inside to avoid build errors)
const getResend = () => new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, companyName, email, countryCode, phoneNumber } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Since we want to send the notification to prajwal.dhakate@emotionwire.co
    // We will use that as the "to" address. 
    // The "from" address needs to be verified in Resend (e.g. notifications@emotionwire.co or a resend domain)
    // We'll use a placeholder from address if domain is not yet verified, but in production it should be updated.

    const { data, error } = await getResend().emails.send({
      from: 'EmotionWire Contact Form <notifications@emotionwire.co>',
      to: ['prajwal.dhakate@emotionwire.co', 'amit.dangle@emotionwire.co'],
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${countryCode} ${phoneNumber}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
