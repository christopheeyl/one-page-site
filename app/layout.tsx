import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Christophe Eyl portfolio',
  description: 'Developer web fullstack typescript',
}

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
