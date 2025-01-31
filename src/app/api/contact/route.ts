import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { RateLimiterMemory as RateLimiter } from 'rate-limiter-flexible'

// Configure rate limiter: 3 requests per hour per IP
const rateLimiter = new RateLimiter({
  points: 3,
  duration: 60 * 60, // 1 hour
})

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '127.0.0.1'
  
  try {
    await rateLimiter.consume(ip)
  } catch {
    return NextResponse.json(
      { message: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  // Add honeypot validation
  const { name, email, message, website } = await request.json()
  
  if (website) {
    return NextResponse.json(
      { message: 'Form submission rejected' },
      { status: 400 }
    )
  }

  // Input validation
  if (!name || !email || !message) {
    return NextResponse.json(
      { message: 'All fields are required' },
      { status: 400 }
    )
  }

  const transporter = nodemailer.createTransport({
    host: 'smtppro.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_SMTP_USER,
      pass: process.env.ZOHO_SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"qitops Website" <${process.env.ZOHO_SMTP_USER}>`,
      to: process.env.CONTACT_RECIPIENT,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ message: 'Message sent successfully!' })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json(
      { message: 'Error sending message' },
      { status: 500 }
    )
  }
} 