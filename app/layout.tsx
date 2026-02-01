import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { ChatWidget } from '@/components/chat-widget'
import './globals.css'

import { Roboto } from 'next/font/google'

// Initialize fonts
const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Gurpreet Singh',
  description: 'Full Stack Developer, currently at Société Générale building BI dashboards.',
  icons: {
    icon: [
      {
        url: '/favicon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Navbar />
        {children}
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  )
}
