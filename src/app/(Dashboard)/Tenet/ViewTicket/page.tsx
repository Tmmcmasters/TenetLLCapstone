import { Button } from "@nextui-org/react";
import TicketChatBox from "../Components/viewTicketChatBox";


export default function ViewTicket() {

    return (
        <div className="flex lg:flex-row flex-col  items-center justify-start lg:justify-start  h-[93vh] mt-5 lg:mt-0">
            <TicketChatBox />
            <div className="flex flex-col justify-Start lg:items-start items-center w-full h-full pl-3 pr-3 lg:pl-10 lg:pr-10 lg:overflow-auto">
                <div className="flex flex-row justify-between items-center w-full ">
                    <h1 className="text-xl lg:text-3xl font-semibold self-center">Ticket Summary</h1>
                    <h1 className="text-xl lg:text-3xl font-semibold text-secondary italic self-center">Urgency</h1>
                </div>
                    <div className="flex flex-row justify-between items-center lg:w-[65%] mt-5 font-light">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quisquam nam impedit beatae recusandae molestiae libero illo adipisci rem odio quia iure, mollitia vel excepturi. Ipsum deleniti nisi voluptate blanditiis!
                        Ex ad asperiores odio, ratione voluptatum quam commodi fugiat sunt provident qui sed vel blanditiis magni quos repellat vero eius exercitationem ut nam distinctio. Ad dolorem dolores non cupiditate laborum?
                        Laborum omnis corporis exercitationem numquam illum, enim dolorem quam nostrum odio deserunt doloribus iure dignissimos distinctio molestiae aut obcaecati eaque, nemo fuga! Repellendus, totam! Alias autem at facere obcaecati vero!
                        Tenetur ipsum, dolores cumque repellendus natus optio aspernatur itaque, expedita eveniet pariatur minima consequatur quod, earum voluptas sit sint. Accusamus ex, autem corrupti aut obcaecati hic dolor libero ut placeat.
                        Quod praesentium odit cumque repudiandae aut provident earum laudantium architecto eveniet eius, doloremque quisquam pariatur, corrupti nostrum ipsum vero necessitatibus sint, fugiat quaerat ipsa ut tempore accusamus numquam. Recusandae, odio?.</p>
                    </div>
                    <div className="self-end flex flex-col justify-end items-bottom  h-full mb-5">
                        <Button color="warning" className="text-medium font-medium " size="lg" variant="bordered">Close Ticket</Button>
                    </div>
            </div>
        </div>
    )
}