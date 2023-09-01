import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
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
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
    <link rel="icon" href="/favicon.ico" sizes="any"/>
    <meta property="og:url" content={metadata.webkitURL} />
    <body className={inter.className}>{children}</body>
    </html>
  )
}
