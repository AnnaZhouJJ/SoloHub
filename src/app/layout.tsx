import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SoloHub - The unified platform for solo freelancers',
  description: 'Consolidate your invoices, clients, invoicing, payments, tasks and projects into one solo workspace.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-primary antialiased">{children}</body>
    </html>
  )
}

