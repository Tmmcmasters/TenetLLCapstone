import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LandlordDashboard from './Dashboard/page'
import LandlordDashboardNav from './Dashboard/TenetDashboardNav'
import NotificationBar from './Components/notificationBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Ticket Pro',
    description: 'Tenet Dashboard',
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
