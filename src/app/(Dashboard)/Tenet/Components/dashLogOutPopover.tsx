"use client"

import { Popover, PopoverTrigger, PopoverContent, Button, Spacer } from "@nextui-org/react";
import React from "react";


export default function DashLogOutPopover() {
    const [LogoutPopoverOpen, setLogoutPopoverOpen] = React.useState(false);

    return (
        <div>
            <Popover id='LogoutPopover' backdrop='blur' isOpen={LogoutPopoverOpen} onOpenChange={(open) => setLogoutPopoverOpen(open)}>
                        <PopoverTrigger>
                            <Button color='danger' variant='ghost' className='font-bold' onClick={() => setLogoutPopoverOpen(true)}>Logout</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className='flex flex-col'>
                                <h2 className='text-warning-500 font-semibold text-xl'>Are you sure you want to logout?</h2>
                                <Spacer y={10} />
                                <div className='flex flex-row justify-between'>
                                    <Button color="primary" className="text-medium font-medium" variant="bordered" onClick={() => setLogoutPopoverOpen(false)}>Cancel</Button>
                                    <Button color="danger" className="text-medium font-medium" variant="solid" >Logout</Button>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
        </div>
    )
}