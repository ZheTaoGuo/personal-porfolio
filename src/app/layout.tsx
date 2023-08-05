import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guo ZheTao',
  description: "Guo ZheTao'/s Personal Website",
  webkitURL: 'https://guozhetao.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <link rel="icon" href="/favicon.ico" sizes="any"/>
    <body className={inter.className}>{children}</body>
    </html>
  )
}
