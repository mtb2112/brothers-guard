import Image from 'next/image'
import Link from 'next/link'

import type {Show, SiteSettings, Song} from '@/sanity/lib/queries'
import {urlFor} from '@/sanity/lib/image'

import SiteHeader from './site-header'

type Props = {
  settings: SiteSettings | null
  shows: Show[]
  songs: Song[]
}

function formatShowDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {month: 'short', day: 'numeric'}).format(new Date(date))
}

export default function HomepageDesigns({settings, shows, songs}: Props) {
  const bandName = settings?.bandName ?? 'Brothers Guard'
  const tagline = settings?.tagline ?? 'Southern rock, blues, and jam music.'
  const heroImageUrl = settings?.heroImage ? urlFor(settings.heroImage).width(2400).auto('format').url() : undefined

  return (
    <main className="bg-[#0b0908] text-[#f3e8d0]">
      <section className="relative flex min-h-[min(760px,100vh)] flex-col overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={heroImageUrl ? {backgroundImage: `url("${heroImageUrl}")`} : undefined} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_45%,rgba(154,94,42,0.35),transparent_25%),radial-gradient(circle_at_52%_25%,rgba(232,214,174,0.2),transparent_8%),linear-gradient(105deg,rgba(22,17,13,0.35)_0%,rgba(59,43,32,0.25)_28%,rgba(16,13,11,0.5)_58%,rgba(5,4,3,0.78)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.25),rgba(0,0,0,0.58)_56%,rgba(0,0,0,0.82))]" />
        <div className="absolute -left-20 bottom-[-10%] h-[75%] w-[42%] rotate-[-8deg] bg-[#050403]/70 blur-2xl" />
        <SiteHeader bandName={bandName} socialLinks={settings?.socialLinks} />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center justify-end px-6 py-12 sm:px-10 sm:py-20">
          <div className="w-full max-w-xl text-center sm:mr-[4%] lg:mr-[7%]">
            <div className="mx-auto mb-7 w-[16.5rem] drop-shadow-[0_8px_18px_rgba(0,0,0,0.75)] sm:w-[21rem]">
              <Image src="/band-logo-v2.png" alt={`${bandName} logo`} width={768} height={768} priority className="h-auto w-full" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#c8752e] sm:text-xs">Good music. Good times.</p>
            <h1 className="mx-auto mt-4 max-w-xl font-roboto-slab text-4xl font-black leading-[0.98] text-[#f0dfbc] drop-shadow-lg sm:text-6xl">{tagline}</h1>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/music" className="min-w-28 bg-[#c56729] px-6 py-3 font-montserrat text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg transition hover:bg-[#e08239]">Listen</Link>
              <Link href="/shows" className="min-w-28 border border-[#e8d6af] px-6 py-3 font-montserrat text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white/10">Watch</Link>
            </div>
          </div>
        </div>
        <a href="#shows" className="relative z-10 mx-auto mb-7 text-2xl text-white/80 transition hover:text-amber-400" aria-label="Scroll to shows">⌄</a>
      </section>

      <section id="shows" className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c8752e]">Catch us live</p>
          <h2 className="mt-3 font-roboto-slab text-4xl text-[#f0dfbc]">Upcoming shows</h2>
          <div className="mt-7 space-y-4">
            {shows.length === 0 ? <p className="text-stone-400">No public shows are scheduled yet.</p> : shows.map((show) => <div key={show._id} className="flex items-center justify-between border-b border-white/15 pb-4"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c8752e]">{formatShowDate(show.date)}</p><p className="mt-1 font-semibold">{show.venue}</p></div><p className="text-sm text-stone-400">{show.city}</p></div>)}
          </div>
        </div>
        <div id="about">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c8752e]">The repertoire</p>
          <h2 className="mt-3 font-roboto-slab text-4xl text-[#f0dfbc]">Songs we play</h2>
          <div className="mt-7 grid gap-2 sm:grid-cols-2">
            {songs.length === 0 ? <p className="text-stone-400">Our song list is coming soon.</p> : songs.map((song) => <div key={song._id} className="border border-white/15 bg-white/5 px-3 py-2"><p className="font-semibold">{song.title}</p><p className="text-xs text-stone-400">{song.artist}</p></div>)}
          </div>
        </div>
      </section>

      {settings?.bookingEmail ? <section id="contact" className="border-t border-white/10 bg-[#15100c] px-6 py-16 text-center"><h2 className="font-roboto-slab text-4xl text-[#f0dfbc]">Book the band</h2><a href={`mailto:${settings.bookingEmail}`} className="mt-6 inline-block bg-[#c56729] px-6 py-3 font-montserrat text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-[#e08239]">Contact us</a></section> : null}
    </main>
  )
}










