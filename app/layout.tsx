import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { GeistMono, GeistMonoNonVariable, GeistSans, GeistSansNonVariable } from 'geist/font'
import { Metadata } from 'next'

export const metatdata: Metadata = {
  title: {
    template: '%s | Dhruv Dabhi',
    default: "Dhruv Dabhi"
  },
  description: "Dhruv Dabhi's personal + blog website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>
    Dhruv Dabhi
    </title>
    </head>
      <body className={GeistSans.className}>
      {children}
      <Analytics />
        
      </body>
    </html>
  )
}
