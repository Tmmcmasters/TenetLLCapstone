import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LandlordDashboard from './page'
import LandlordDashboardNav from './LandlordDashboardNav'
import NotificationBar from '../Components/notificationBar'

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
                < LandlordDashboardNav/>
                
                    {children}
            </div>
    )
}
