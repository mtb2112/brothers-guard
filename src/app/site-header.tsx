import Link from 'next/link'

import type {SocialLinks} from '@/sanity/lib/queries'

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current"><path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.8V3.94c-.31-.04-1.38-.14-2.62-.14-2.59 0-4.36 1.58-4.36 4.48V10H7.1v3h2.72v8h3.68Z" /></svg>
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.4" cy="6.7" r="1" className="fill-current stroke-none" /></svg>
}

function YoutubeIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current"><path d="M23.5 6.2a3 3 0 0 0-2.12-2.12C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.58A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.12 2.12C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.58a3 3 0 0 0 2.12-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" /></svg>
}

function SpotifyIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current"><path d="M12 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Zm4.82 15.15a.78.78 0 0 1-1.07.26c-2.94-1.8-6.64-2.2-11-1.2a.78.78 0 1 1-.35-1.51c4.77-1.09 8.85-.85 12.17 1.18.37.23.49.71.25 1.07Zm1.44-3.2a.98.98 0 0 1-1.35.32c-3.36-2.06-8.48-2.66-12.45-1.45a.98.98 0 1 1-.57-1.87c4.54-1.38 10.23-.71 14.05 1.63.46.28.6.88.32 1.35Zm.12-3.34C14.36 7.8 8.29 7.6 4.63 8.71a1.17 1.17 0 1 1-.68-2.24c4.2-1.27 11.18-1.02 15.2 1.37a1.17 1.17 0 0 1-.77 2.27Z" /></svg>
}

type Props = {
  bandName?: string
  socialLinks?: SocialLinks
}

export default function SiteHeader({bandName = 'Brothers Guard', socialLinks}: Props) {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 font-montserrat text-[10px] font-bold uppercase tracking-[0.22em] sm:px-10">
      <nav className="hidden gap-7 text-stone-200/90 md:flex">
        <Link href="/" className="hover:text-amber-500">Home</Link>
        <Link href="/about" className="hover:text-amber-500">About</Link>
        <Link href="/music" className="hover:text-amber-500">Music</Link>
        <Link href="/shows" className="hover:text-amber-500">Shows</Link>
        <Link href="/photos" className="hover:text-amber-500">Photos</Link>
        <Link href="/contact" className="hover:text-amber-500">Contact</Link>
      </nav>
      <Link href="/" className="text-sm tracking-[0.28em] md:hidden">{bandName}</Link>
      <div className="ml-auto flex items-center gap-4 text-stone-200/90" aria-label="Social media links">
        {socialLinks?.facebook ? <a href={socialLinks.facebook} aria-label="Facebook" target="_blank" rel="noreferrer" className="hover:text-amber-500"><FacebookIcon /></a> : null}
        {socialLinks?.instagram ? <a href={socialLinks.instagram} aria-label="Instagram" target="_blank" rel="noreferrer" className="hover:text-amber-500"><InstagramIcon /></a> : null}
        {socialLinks?.youtube ? <a href={socialLinks.youtube} aria-label="YouTube" target="_blank" rel="noreferrer" className="hover:text-amber-500"><YoutubeIcon /></a> : null}
        {socialLinks?.spotify ? <a href={socialLinks.spotify} aria-label="Spotify" target="_blank" rel="noreferrer" className="hover:text-amber-500"><SpotifyIcon /></a> : null}
      </div>
    </header>
  )
}
