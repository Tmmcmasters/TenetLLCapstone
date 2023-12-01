import DashboardTickets from "../Components/dashTickets";
import NotificationBar from "../Components/notificationBar";

export default function LandlordDashboard() {
    return <div className="flex flex-row items-start justify-start h-[93vh]">
            {/* <NotificationBar /> */}
            <DashboardTickets/>
    </div>
}