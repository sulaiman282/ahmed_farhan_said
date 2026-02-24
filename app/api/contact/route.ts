import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
  lang: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    const { name, email, phone, serviceInterest, message, lang } = body;

    if (!name || !email || !phone || !serviceInterest || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Mock email sending implementation
    // In production, integrate with email service (SendGrid, AWS SES, etc.)
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      serviceInterest,
      message,
      lang,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // TODO: Implement actual email sending
    // Example with SendGrid:
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: 'info@almarshoud-contracting.sa',
    //   from: 'noreply@almarshoud-contracting.sa',
    //   subject: `New Contact Form Submission from ${name}`,
    //   text: message,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Service Interest:</strong> ${serviceInterest}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    return NextResponse.json(
      {
        success: true,
        message: lang === 'ar' 
          ? 'تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.'
          : 'Your message has been sent successfully. We will contact you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
