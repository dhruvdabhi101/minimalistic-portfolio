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
      <body>{children}</body>
    </html>
  )
}
