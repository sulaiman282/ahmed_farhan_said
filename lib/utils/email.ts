import { Resend } from 'resend';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
  lang: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormData): Promise<{
  success: boolean;
  message: string;
  error?: string;
}> {
  try {
    // Validate API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return {
        success: false,
        message: 'Email service is not configured',
        error: 'Missing API key',
      };
    }

    // Prepare email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
              color: white;
              padding: 30px;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background: #f9fafb;
              padding: 30px;
              border: 1px solid #e5e7eb;
            }
            .field {
              margin-bottom: 20px;
            }
            .label {
              font-weight: bold;
              color: #1f2937;
              display: block;
              margin-bottom: 5px;
            }
            .value {
              color: #4b5563;
              padding: 10px;
              background: white;
              border-radius: 4px;
              border: 1px solid #e5e7eb;
            }
            .footer {
              text-align: center;
              padding: 20px;
              color: #6b7280;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Al-Marshoud Contracting</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              <div class="field">
                <span class="label">Phone:</span>
                <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
              </div>
              <div class="field">
                <span class="label">Service Interest:</span>
                <div class="value">${data.serviceInterest}</div>
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="field">
                <span class="label">Language:</span>
                <div class="value">${data.lang === 'ar' ? 'Arabic (العربية)' : 'English'}</div>
              </div>
              <div class="field">
                <span class="label">Submitted:</span>
                <div class="value">${new Date().toLocaleString('en-US', { 
                  dateStyle: 'full', 
                  timeStyle: 'long' 
                })}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the contact form on your website.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email using Resend
    const response = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL || 'info@almarshoud-contracting.sa',
      subject: `New Contact Form Submission from ${data.name}`,
      html: emailHtml,
      replyTo: data.email,
    });

    if (response.error) {
      console.error('Resend API error:', response.error);
      return {
        success: false,
        message: 'Failed to send email',
        error: response.error.message,
      };
    }

    console.log('Email sent successfully:', response.data?.id);
    return {
      success: true,
      message: data.lang === 'ar'
        ? 'تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.'
        : 'Your message has been sent successfully. We will contact you soon.',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'An error occurred while sending your message',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
