import {getSiteSettings, getUpcomingShows} from '@/sanity/lib/queries'

import {ShowList} from '@/app/components'
import SiteHeader from '@/app/site-header'

export const instant = false

export default async function ShowsPage() {
  const [settings, shows] = await Promise.all([getSiteSettings(), getUpcomingShows(50)])
  const bandName = settings?.bandName ?? 'Brothers Guard'

  return (
    <main className="min-h-screen bg-[#0b0908] text-[#f3e8d0]">
      <SiteHeader bandName={bandName} socialLinks={settings?.socialLinks} />
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-16 sm:px-10 sm:pt-24">
        <p className="font-montserrat text-xs font-bold uppercase tracking-[0.3em] text-[#c8752e]">Live dates</p>
        <h1 className="mt-4 font-roboto-slab text-5xl font-black text-[#f0dfbc] sm:text-7xl">Upcoming shows</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-400">Come hear southern rock, blues, and jam favorites live.</p>
        <div className="mt-10"><ShowList shows={shows} dark /></div>
      </section>
    </main>
  )
}

