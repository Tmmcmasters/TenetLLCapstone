import { Button } from "@nextui-org/react";
import TicketChatBox from "../Components/viewTicketChatBox";


export default function ViewTicket () {

    return (
        <div className="flex lg:flex-row flex-col  items-center justify-center lg:justify-start  h-[93vh] ">
            <TicketChatBox />
            <div className="flex flex-col justify-Start lg:items-start items-center w-full h-full pl-3 pr-3 lg:pl-10 lg:pr-10">
                <div className="flex flex-row justify-between items-center w-full ">
                    <h1 className="text-xl lg:text-3xl font-semibold self-center">Ticket Summary</h1>
                    <h1 className="text-xl lg:text-3xl font-semibold text-secondary italic self-center">Urgency</h1>
                </div>
                 <div className="flex flex-row justify-between items-center lg:w-[65%] mt-5 font-light">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos quasi sunt modi cum et dolore a. Porro rem officiis aspernatur at, commodi ullam, neque nisi necessitatibus, placeat quae dolor.</p>
                </div>
                <div className="self-end flex flex-col justify-end items-bottom  h-full mb-3">
                <Button color="warning" className="text-medium font-medium " size="lg" variant="bordered">Close Ticket</Button>
                </div>
            </div>
        </div>
    )
}