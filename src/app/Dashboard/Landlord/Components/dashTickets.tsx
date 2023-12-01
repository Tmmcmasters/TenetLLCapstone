import DashboardTicketCard from "./dashTicketCard";


export default function DashboardTickets () {

    return (
        <div className="sm:flex-col md:flex-col lg:flex-row flex flex-wrap m-0 p-0 ">
            <DashboardTicketCard/>
            <DashboardTicketCard/>
            <DashboardTicketCard/>
            <DashboardTicketCard/>
            <DashboardTicketCard/>
        </div>
    )
}