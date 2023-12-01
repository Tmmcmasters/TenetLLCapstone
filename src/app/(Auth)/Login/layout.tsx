import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LoginNavbar from './loginNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Ticket Pro',
    description: 'Login to Ticket Pro',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
            <div>
                <LoginNavbar />
                {children}
            </div>
    )
}
