import './globals.scss'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Home - Cryptnetwork - A crypto buy and sell marketplace',
  description: "Securely buy and sell cryptocurrencies with ease on our trusted platform. Get real-time prices, fast transactions, and 24/7 support. Start trading Bitcoin, Ethereum, and more today!",
  openGraph: {
    title: 'Home - Cryptnetwork - A crypto buy and sell marketplace',
    description: "Securely buy and sell cryptocurrencies with ease on our trusted platform. Get real-time prices, fast transactions, and 24/7 support. Start trading Bitcoin, Ethereum, and more today!",
    images: "/icons/icon.png"
  },
  icons: {
    icon: "/icons/icon.png", 
    shortcut: "/icons/icon.png",
    apple: "/icons/icon.png"
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
