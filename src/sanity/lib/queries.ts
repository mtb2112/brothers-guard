import {cacheLife} from 'next/cache'
import type {SanityImageSource} from '@sanity/image-url'

import {client} from './client'

export type SocialLinks = {
  facebook?: string
  instagram?: string
  youtube?: string
  spotify?: string
}

export type SiteSettings = {
  bandName: string
  tagline: string
  bio?: string
  bookingEmail?: string
  location?: string
  heroImage?: SanityImageSource
  socialLinks?: SocialLinks
}

export type Show = {
  _id: string
  date: string
  venue: string
  city: string
  address?: string
  ticketUrl?: string
  description?: string
  performanceType?: 'opener' | 'headliner'
}

export type Song = {
  _id: string
  title: string
  artist: string
  genre?: string
  featured?: boolean
}

const siteSettingsQuery = `*[_type == "siteSettings"][0]{bandName, tagline, bio, bookingEmail, location, heroImage, socialLinks}`
const upcomingShowsQuery = `*[_type == "show" && dateTime(date) >= dateTime(now()) && privateEvent != true] | order(date asc)[0...$limit]{_id, date, venue, city, address, ticketUrl, description, performanceType}`
const songsQuery = `*[_type == "song"] | order(genre asc, artist asc, title asc){_id, title, artist, genre, featured}`
const featuredSongsQuery = `*[_type == "song" && featured == true] | order(artist asc, title asc)[0...$limit]{_id, title, artist, genre}`

async function fetchSiteSettings() {
  return client.fetch<SiteSettings | null>(siteSettingsQuery)
}

async function fetchUpcomingShows(limit: number) {
  return client.fetch<Show[]>(upcomingShowsQuery, {limit})
}

async function fetchSongs() {
  return client.fetch<Song[]>(songsQuery)
}

async function fetchFeaturedSongs(limit: number) {
  return client.fetch<Song[]>(featuredSongsQuery, {limit})
}

export async function getSiteSettings() {
  if (process.env.NODE_ENV === 'development') return fetchSiteSettings()
  return getCachedSiteSettings()
}

async function getCachedSiteSettings() {
  'use cache'
  cacheLife('hours')
  return fetchSiteSettings()
}

export async function getUpcomingShows(limit = 6) {
  if (process.env.NODE_ENV === 'development') return fetchUpcomingShows(limit)
  return getCachedUpcomingShows(limit)
}

async function getCachedUpcomingShows(limit: number) {
  'use cache'
  cacheLife('hours')
  return fetchUpcomingShows(limit)
}

export async function getSongs() {
  if (process.env.NODE_ENV === 'development') return fetchSongs()
  return getCachedSongs()
}

async function getCachedSongs() {
  'use cache'
  cacheLife('hours')
  return fetchSongs()
}

export async function getFeaturedSongs(limit = 8) {
  if (process.env.NODE_ENV === 'development') return fetchFeaturedSongs(limit)
  return getCachedFeaturedSongs(limit)
}

async function getCachedFeaturedSongs(limit: number) {
  'use cache'
  cacheLife('hours')
  return fetchFeaturedSongs(limit)
}


