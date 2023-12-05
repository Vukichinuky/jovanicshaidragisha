import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jovana i Drago',
  description: 'Jovana i Drago',
  og:{
  image: {
    url: '/IMG_6122.JPG',
    width: '1200',
    height: '630',
    alt: 'This is logo of 634Properties'
  },}
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
