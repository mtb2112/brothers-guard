import {getSiteSettings} from '@/sanity/lib/queries'

import SiteHeader from '@/app/site-header'

export const instant = false

export default async function PhotosPage() {
  const settings = await getSiteSettings()
  const bandName = settings?.bandName ?? 'Brothers Guard'

  return (
    <main className="min-h-screen bg-[#0b0908] text-[#f3e8d0]">
      <SiteHeader bandName={bandName} socialLinks={settings?.socialLinks} />
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-16 sm:px-10 sm:pt-24">
        <p className="font-montserrat text-xs font-bold uppercase tracking-[0.3em] text-[#c8752e]">On stage and on the road</p>
        <h1 className="mt-4 font-roboto-slab text-5xl font-black text-[#f0dfbc] sm:text-7xl">Photos</h1>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => <div key={item} className="aspect-square border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(198,103,41,0.35),transparent_16%),linear-gradient(135deg,#332117,#0d0a08_70%)]" aria-label="Photo coming soon" />)}
        </div>
        <p className="mt-8 text-stone-400">Band and live-show photos will be added here soon.</p>
      </section>
    </main>
  )
}

