'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/index.scss'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { AuthContextProvider } from '@/store/AuthProvider'
import { UserContextProvider } from '@/store/UserProvider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
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
      <AuthContextProvider>
        <UserContextProvider>
          <Header />
            {children}
          <Footer />
        </UserContextProvider>
      </AuthContextProvider>
      </body>
    </html>
  )
}
