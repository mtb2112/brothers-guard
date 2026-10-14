import {getSiteSettings} from '@/sanity/lib/queries'

import SiteHeader from '@/app/site-header'

export const instant = false

export default async function AboutPage() {
  const settings = await getSiteSettings()
  const bandName = settings?.bandName ?? 'Brothers Guard'

  return (
    <main className="min-h-screen bg-[#0b0908] text-[#f3e8d0]">
      <SiteHeader bandName={bandName} socialLinks={settings?.socialLinks} />
      <section className="mx-auto max-w-4xl px-6 pb-24 pt-16 sm:px-10 sm:pt-24">
        <p className="font-montserrat text-xs font-bold uppercase tracking-[0.3em] text-[#c8752e]">The band</p>
        <h1 className="mt-4 font-roboto-slab text-5xl font-black text-[#f0dfbc] sm:text-7xl">About {bandName}</h1>
        <div className="mt-10 max-w-2xl border-l-2 border-[#c56729] pl-6 text-xl leading-relaxed text-stone-300">
          {settings?.bio ?? 'Southern rock, blues, and jam music from a band that loves playing the classics, the deep cuts, and the songs that keep a room moving.'}
        </div>
        <p className="mt-10 max-w-2xl leading-8 text-stone-400">We bring a roots-driven live set to bars, festivals, private events, and anywhere good music belongs. Check the live dates to find the next show.</p>
      </section>
    </main>
  )
}

