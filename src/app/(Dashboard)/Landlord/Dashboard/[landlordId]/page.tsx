import DashboardTickets from "../../Components/dashTickets";
import NotificationBar from "../../Components/notificationBar";

export default function LandlordDashboard(
    {
        params,
    }: {
        params: {
            landlordId: string
        };
    }
) {
    

    return <div className="flex flex-row items-start justify-start h-[93vh]">
            <DashboardTickets/>
    </div>
}