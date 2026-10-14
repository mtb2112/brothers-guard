import type {Show, Song} from '@/sanity/lib/queries'

function formatShowDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(date))
}

export function ShowList({shows, dark = false}: {shows: Show[]; dark?: boolean}) {
  if (shows.length === 0) {
    return <p className={dark ? "text-stone-400" : "text-stone-600"}>No public shows are scheduled yet. Check back soon.</p>
  }

  return (
    <div className="grid gap-4">
      {shows.map((show) => (
        <article key={show._id} className={`flex flex-col gap-3 border p-5 sm:flex-row sm:items-center sm:justify-between ${dark ? "border-white/15 bg-white/5" : "rounded-2xl border-stone-200 bg-white shadow-sm"}`}>
          <div>
            <p className={`font-montserrat text-sm font-semibold uppercase tracking-[0.2em] ${dark ? "text-[#c8752e]" : "text-amber-700"}`}>{formatShowDate(show.date)}</p>
            <h3 className={`mt-2 text-xl font-semibold ${dark ? "text-[#f0dfbc]" : "text-stone-950"}`}>{show.venue}</h3>
            <p className={dark ? "text-stone-400" : "text-stone-600"}>{show.city}{show.address ? ` - ${show.address}` : ''}</p>
          </div>
          {show.ticketUrl ? (
            <a className="inline-flex w-fit bg-[#c56729] px-4 py-2 font-montserrat text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-[#e08239]" href={show.ticketUrl} target="_blank" rel="noreferrer">
              Event details
            </a>
          ) : null}
        </article>
      ))}
    </div>
  )
}

export function SongList({songs}: {songs: Song[]}) {
  if (songs.length === 0) {
    return <p className="text-stone-600">Our song list is coming soon.</p>
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {songs.map((song) => (
        <div key={song._id} className="rounded-xl border border-stone-200 bg-white px-4 py-3">
          <p className="font-semibold text-stone-950">{song.title}</p>
          <p className="text-sm text-stone-600">{song.artist}{song.genre ? ` - ${song.genre}` : ''}</p>
        </div>
      ))}
    </div>
  )
}

