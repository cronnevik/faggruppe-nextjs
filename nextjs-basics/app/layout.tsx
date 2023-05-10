import Navbar from './components/navbar'
import './globals.scss'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Ulriken Consulting',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
