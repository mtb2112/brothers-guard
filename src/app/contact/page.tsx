import {getSiteSettings} from '@/sanity/lib/queries'

import SiteHeader from '@/app/site-header'

import ContactForm from './contact-form'

export const instant = false

export default async function ContactPage() {
  const settings = await getSiteSettings()
  const bandName = settings?.bandName ?? 'Brothers Guard'

  return (
    <main className="min-h-screen bg-[#0b0908] text-[#f3e8d0]">
      <SiteHeader bandName={bandName} socialLinks={settings?.socialLinks} />
      <section className="mx-auto max-w-4xl px-6 pb-24 pt-16 sm:px-10 sm:pt-24">
        <p className="font-montserrat text-xs font-bold uppercase tracking-[0.3em] text-[#c8752e]">Bookings and inquiries</p>
        <h1 className="mt-4 font-roboto-slab text-5xl font-black text-[#f0dfbc] sm:text-7xl">Contact</h1>
        <p className="mt-6 max-w-2xl text-xl leading-8 text-stone-300">Interested in booking {bandName}? Get in touch and tell us about your event.</p>
        <ContactForm />
        {!settings?.bookingEmail ? <p className="mt-5 border-l-2 border-[#c56729] pl-5 text-sm text-stone-400">The contact form is currently being configured. Please check back soon.</p> : null}
      </section>
    </main>
  )
}

