import './globals.css'
import { Manrope } from 'next/font/google' 

const manrope = Manrope({ subsets: ['latin'] })


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
      <body>{children} </body>
    </html>
  )
}
