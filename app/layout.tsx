import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Jony's Home Page",
  description: 'Generated whit love by Vercel',
}

// El RootLayout es el Layout principal o un Higher Order Component (HOC) que engloba toda la aplicacion y maneja las rutas
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
