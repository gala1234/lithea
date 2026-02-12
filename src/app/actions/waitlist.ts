'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function joinWaitlist(formData: FormData) {
  const email = formData.get('email') as string;

  if (!email) return { success: false, error: 'Email is required' };

  try {
    await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID || 'TU_AUDIENCE_ID',
    });

    await resend.emails.send({
      from: 'LITHEA <hola@litheastudio.com>',
      to: email,
      subject: 'Welcome to the inner circle | LITHEA',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;1,400&family=Montserrat:wght@300;400&display=swap');
          </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: #F8F7F2; font-family: 'Montserrat', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F8F7F2; padding: 60px 20px;">
            <tr>
              <td align="center">
                <table width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #F8F7F2; text-align: center;">
                  
                  <!-- LOGO -->
                  <tr>
                    <td style="padding-bottom: 40px;">
                      <h1 style="margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 42px; font-weight: 400; letter-spacing: 0.2em; color: #8C7A5B; text-transform: uppercase;">
                        LITHEA
                      </h1>
                      <p style="margin: 5px 0 0 0; font-family: 'Montserrat', sans-serif; font-size: 10px; letter-spacing: 0.4em; color: #7a7a7a; text-transform: uppercase;">
                        Porcelain Jewelry
                      </p>
                    </td>
                  </tr>

                  <!-- DIVIDER -->
                  <tr>
                    <td align="center" style="padding-bottom: 40px;">
                      <div style="width: 40px; height: 1px; background-color: #8C7A5B; opacity: 0.4;"></div>
                    </td>
                  </tr>

                  <!-- BODY CONTENT -->
                  <tr>
                    <td style="padding: 0 20px;">
                      <h2 style="margin: 0 0 24px 0; font-family: 'Cormorant Garamond', serif; font-size: 24px; font-style: italic; color: #333333; line-height: 1.4;">
                        "Sculptural objects for the skin"
                      </h2>
                      <p style="margin: 0 0 16px 0; font-family: 'Montserrat', sans-serif; font-size: 14px; line-height: 1.8; color: #555555; font-weight: 300; letter-spacing: 0.02em;">
                        Thank you for joining our waitlist. You have officially become part of our inner circle.
                      </p>
                      <p style="margin: 0 0 40px 0; font-family: 'Montserrat', sans-serif; font-size: 14px; line-height: 1.8; color: #555555; font-weight: 300; letter-spacing: 0.02em;">
                        We are currently perfecting the first pieces of <strong>Glazed Petals</strong>. As an engineer and a dreamer, I am ensuring every drop of porcelain meets the precision and soul you deserve.
                      </p>
                      <p style="margin: 0 0 60px 0; font-family: 'Montserrat', sans-serif; font-size: 12px; tracking: 0.1em; color: #8C7A5B; text-transform: uppercase;">
                        Coming Summer 2026
                      </p>
                    </td>
                  </tr>

                  <!-- SIGNATURE -->
                  <tr>
                    <td style="padding-bottom: 60px; font-family: 'Cormorant Garamond', serif; font-size: 18px; font-style: italic; color: #333333;">
                      Warmly,<br/>
                      Gala
                    </td>
                  </tr>

                  <!-- FOOTER -->
                  <tr>
                    <td style="border-top: 1px solid #eaddcf; padding-top: 30px;">
                      <p style="margin: 0; font-family: 'Montserrat', sans-serif; font-size: 9px; letter-spacing: 0.3em; color: #999999; text-transform: uppercase;">
                        Handcrafted in Spain • LITHEA Studio
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
    });

    return { success: true };
  } catch (error) {
    console.error('Waitlist Error:', error);
    return { success: false, error: 'Failed to join waitlist' };
  }
}