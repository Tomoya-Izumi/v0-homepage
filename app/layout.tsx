import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KIBAN - 物理世界にAIのイノベーションをもたらす",
  description: "MI・AI創薬を真に機能させる DX 基盤とロボット制御の壁を、私たちは一括で打破します。",
  generator: 'v0.dev',
  openGraph: {
    title: "KIBAN - 物理世界にAIのイノベーションをもたらす",
    description: "MI・AI創薬を真に機能させる DX 基盤とロボット制御の壁を、私たちは一括で打破します。",
    images: [
      {
        url: "/logo_black.png",
        width: 1200,
        height: 630,
        alt: "KIBAN Logo"
      }
    ],
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "KIBAN - 物理世界にAIのイノベーションをもたらす",
    description: "MI・AI創薬を真に機能させる DX 基盤とロボット制御の壁を、私たちは一括で打破します。",
    images: ["/logo_black.png"]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
