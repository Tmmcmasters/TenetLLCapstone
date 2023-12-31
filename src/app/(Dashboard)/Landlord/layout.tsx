import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LandlordDashboard from './Dashboard/[landlordId]/page'
import LandlordDashboardNav from './Dashboard/[landlordId]/LandlordDashboardNav'
import NotificationBar from './Components/notificationBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Ticket Pro',
    description: 'Dashboard to Ticket Pro',
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
