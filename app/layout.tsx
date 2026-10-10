import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'Babbar | Payment Collection & Business Solutions', description: 'Tailored digital payment collection, domestic money transfer, merchant integration and B2B advisory from Babbar Payment Collection and Solutions Private Limited, Bhopal.' }
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) {return <html lang="en"><body>{children}</body></html>}
