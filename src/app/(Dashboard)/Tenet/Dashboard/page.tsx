import DashboardTickets from "../Components/(Dashboard)/dashTickets";
import NotificationBar from "../Components/notificationBar";

export default function LandlordDashboard() {
    return <div className="flex flex-row items-start justify-start h-[93vh]">
            <DashboardTickets/>
    </div>
}