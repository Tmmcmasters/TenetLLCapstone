import DashboardTickets from "./Components/dashTickets";
import NotificationBar from "./Components/notificationBar";

export default function LandlordDashboard() {
    return <div className="flex flex-row items-start justify-start">
        <NotificationBar />
        <div className="flex flex-col items-start w-full">
            <h1 className="text-3xl font-semibold self-center  mb-8">Your Tickets</h1>
            <div className="flex sm:flex-col lg:flex-row items-start justify-start flex-wrap">
                <DashboardTickets />
                <DashboardTickets />
                <DashboardTickets />
                <DashboardTickets />
            </div>
        </div>
    </div>
}