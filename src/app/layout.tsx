import type {Metadata} from 'next'
import {Montserrat, Roboto_Slab} from 'next/font/google'

import './globals.css'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
})

const robotoSlab = Roboto_Slab({
  variable: '--font-roboto-slab',
  subsets: ['latin'],
  weight: ['700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Brothers Guard | Southern Rock, Blues, and Jam',
  description: 'Live southern rock, blues, and jam music from Brothers Guard.',
}

export default function RootLayout({children}: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${robotoSlab.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
