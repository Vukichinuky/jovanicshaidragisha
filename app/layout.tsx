import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jovana i Drago',
  description: 'Jovana i Drago',
  og: {
    title: 'Jovana i Drago',
    description: 'Jovana i drago',
    type: 'website',
    url: 'http://www.jovanaidrago.com/',
    image: {
      url: '/IMG_6122.JPG',
      width: '1200',
      height: '630',
      alt: 'This is jovaan i drago'
    },
    locale: 'en_US',
    site_name: 'jovaanaidrago'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
