import './globals.css'
import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export const orbitron = Orbitron({subsets: ['latin']})

export const metadata: Metadata = {
    title: "Judy Dev",
    description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={orbitron.className}>{children}</body>
    </html>
  )
}
