import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/index.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
  params: {
    lang,
  }
}: {
  children: React.ReactNode,
  params: { lang: string }
}) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}