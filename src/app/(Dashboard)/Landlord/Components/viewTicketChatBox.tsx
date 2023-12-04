import { Button, Input, Spacer, Textarea } from "@nextui-org/react";
import YourChatBubble from "./chatBoxYourBubble";
import TheirChatBubble from "./chatBoxTheirBubble";


export default function TicketChatBox () {

    return (
        <div className="flex flex-col w-full lg:w-[45vw] min-w-[300px] h-full border-t-2 lg:border-r-2  border-gray-600 lg:rounded-tr-lg ">
            <div className="w-full h-[5vh] items-center justify-center flex flex-col text-center border-b-2 border-gray-600">
                <h1 className="text-3xl font-semibold  font-size">Chat</h1>
            </div>
            <div className="flex flex-col h-full w-full justify-end align-bottom">
                <YourChatBubble text="Hi how are you doing!?"/>
                <TheirChatBubble text="I am doing great, thank you"/>
                <TheirChatBubble text="What can I do for you today?"/>
            </div>
            <Spacer y={3}/>
            <div className="flex flex-row w-full pl-3 pr-3 gap-3 pb-3 justify-center align-middle">
                <Textarea className="w-full text-xs lg:text-base" size="lg" maxRows={2} placeholder="Write a message" />            
                <Button size="lg" className="self-end " variant="ghost" color="success">Send</Button>
            </div>
        </div>
    )
}