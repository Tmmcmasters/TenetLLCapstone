import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Button, Image, Spacer, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger }from "@nextui-org/react"
import Link from "next/link";

export default function DashboardTicketCard() {
    return (
        <div className="w-[23vw] min-w-[300px] ">
            <Card className="min-w-[300px]">
                <CardHeader className="h-[4rem] flex flex-col justify-start justify-items-start items-start ">
                    <div className="flex-row flex justify-between items-center w-full">
                    <p className="text-small text-primary">Apartmnet ####</p>
                    <p className="text-small text-secondary">Urgency</p>
                    </div>
                    <h1 className="text-2xl font-semibold">Title</h1>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, alias accusamus rerum eveniet inventore molestias maiores dolorum ex, doloribus beatae officiis explicabo, voluptas quae commodi. Nemo reprehenderit dignissimos voluptatibus enim?</p>
                </CardBody>
                <CardFooter className="w-full flex flex-row justify-end">
                    <Button href="/Tenet/ViewTicket" as={Link} color="success" className="text-medium font-medium" variant="solid">View Ticket</Button>
                </CardFooter>
            </Card>
        </div>
    )
}