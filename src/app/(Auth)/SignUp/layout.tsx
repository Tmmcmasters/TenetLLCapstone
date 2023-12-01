import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LoginNavbar from './signUpNavbar'
import SignUpNavbar from './signUpNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Ticket Pro',
    description: 'SignUp to Ticket Pro',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
            <div>
                <SignUpNavbar />
                {children}
            </div>
    )
}
