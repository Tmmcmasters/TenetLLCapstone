import DashboardTicketCard from "./dashTicketCard";


export default function DashboardTickets() {

    return (
        <div className="flex flex-col items-center justify-start text-center border border-t-0 border-s-0 border-b-0 border-r-0 w-full h-[93vh]">
            <div className="border border-b-0 border-t-0 border-s-0 border-r-0 w-full h-[5vh] items-center justify-center flex flex-col text-center">
                <h1 className="text-3xl font-semibold self-center">Your Submitted Tickets</h1>
            </div>
                <div className="flex flex-row flex-wrap items-start align-top  justify-center text-center w-full h-full overflow-auto gap-5 pt-5 pb-5 pl-3">
                    <DashboardTicketCard />
                    <DashboardTicketCard />
                    <DashboardTicketCard />
                    <DashboardTicketCard />
                    <DashboardTicketCard />
                    <DashboardTicketCard />
                    <DashboardTicketCard />
                    <DashboardTicketCard />
                </div>
        </div>
    )
}