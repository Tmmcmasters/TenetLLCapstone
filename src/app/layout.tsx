import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import NavbarComponent from './landingNavbar'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ticket Pro',
  description: 'Streamline Your Property Management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className} >
        <Toaster toastOptions={{
          style: {
            borderRadius: '10px',
            background: '#2222',
            padding: '15px',
            margin: '10px',
            border: '2px solid #7777',
            color: '#fff',
            zIndex: 10000,
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          },
          position: 'top-center',
          duration: 5000,
        }}/>
        <Providers>
          {children}
        </Providers>
        
        </body>
    </html>
  )
}
