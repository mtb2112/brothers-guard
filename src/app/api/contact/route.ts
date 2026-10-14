import {Resend} from 'resend'

import {getSiteSettings} from '@/sanity/lib/queries'

type ContactRequest = {
  name?: unknown
  email?: unknown
  message?: unknown
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
  let body: ContactRequest

  try {
    body = await request.json() as ContactRequest
  } catch {
    return Response.json({error: 'Invalid request.'}, {status: 400})
  }

  if (!isNonEmptyString(body.name) || body.name.trim().length > 100) {
    return Response.json({error: 'Please provide a valid name.'}, {status: 400})
  }

  if (!isNonEmptyString(body.email) || body.email.trim().length > 254 || !isEmail(body.email.trim())) {
    return Response.json({error: 'Please provide a valid email address.'}, {status: 400})
  }

  if (!isNonEmptyString(body.message) || body.message.trim().length > 5000) {
    return Response.json({error: 'Please provide a message under 5,000 characters.'}, {status: 400})
  }

  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.RESEND_FROM_EMAIL
  const settings = await getSiteSettings()
  const recipient = settings?.bookingEmail

  if (!apiKey || !fromEmail || !recipient) {
    console.error('Contact form is not configured with Resend, a sender, and a booking recipient.')
    return Response.json({error: 'The contact form is not configured yet.'}, {status: 503})
  }

  const resend = new Resend(apiKey)
  const {error} = await resend.emails.send({
    from: fromEmail,
    to: [recipient],
    replyTo: body.email.trim(),
    subject: `Website message from ${body.name.trim()}`,
    text: `Name: ${body.name.trim()}\nEmail: ${body.email.trim()}\n\n${body.message.trim()}`,
  })

  if (error) {
    console.error('Resend failed to deliver contact form message.', error)
    return Response.json({error: 'Your message could not be sent. Please try again.'}, {status: 502})
  }

  return Response.json({success: true})
}
