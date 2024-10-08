import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { GeistMono } from 'geist/font'
import { SpeedInsights } from "@vercel/speed-insights/next"


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
        <meta name="description" content="Minimalist Blog website created by Dhruv Dabhi" />
        <meta name="keywords" content="Dhruv Dabhi, Software Engineer, Open Source Developer" />
        <title>
          Dhruv Dabhi
        </title>
      </head>
      <body className={GeistMono.className + ' tracking-tight'}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
