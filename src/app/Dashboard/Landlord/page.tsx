import DashboardTickets from "./Components/dashTickets";
import NotificationBar from "./Components/notificationBar";

export default function LandlordDashboard() {
    return <div className="flex flex-row items-start justify-start h-[93vh]">
            <NotificationBar />
        <div className="flex flex-col items-start h-[93vh] w-full">
            <h1 className="text-3xl font-semibold self-center  mb-8">Your Tickets</h1>
            <div className=" items-start justify-start h-full w-full">
                <DashboardTickets />
            </div>
        </div>
    </div>
}