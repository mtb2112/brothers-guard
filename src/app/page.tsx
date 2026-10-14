import {getFeaturedSongs, getSiteSettings, getUpcomingShows} from '@/sanity/lib/queries'

import HomepageDesigns from './homepage-designs'

export const instant = false

export default async function Home() {
  const [settings, shows, songs] = await Promise.all([
    getSiteSettings(),
    getUpcomingShows(3),
    getFeaturedSongs(6),
  ])

  return <HomepageDesigns settings={settings} shows={shows} songs={songs} />
}
