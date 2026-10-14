import {getSiteSettings} from '@/sanity/lib/queries'

import SiteHeader from '@/app/site-header'

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
        {settings?.bookingEmail ? <a href={`mailto:${settings.bookingEmail}`} className="mt-10 inline-block bg-[#c56729] px-7 py-4 font-montserrat text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#e08239]">Email the band</a> : <p className="mt-10 border-l-2 border-[#c56729] pl-5 text-stone-400">Booking information will be available soon.</p>}
      </section>
    </main>
  )
}

