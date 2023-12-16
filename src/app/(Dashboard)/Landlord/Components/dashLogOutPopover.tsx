"use client"

import { signOut } from "@/app/(Auth)/(actions)";
import { Popover, PopoverTrigger, PopoverContent, Button, Spacer } from "@nextui-org/react";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";


export default function DashLogOutPopover() {
    const [LogoutPopoverOpen, setLogoutPopoverOpen] = React.useState(false);
    const router = useRouter();
    async function logout() {
        const response = signOut();
        router.replace("/")
        setLogoutPopoverOpen(false);
        setTimeout(() => {
            toast("See you later!", { icon: "👋" });
        }, 700); 
    }

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
                                    <Button color="danger" className="text-medium font-medium" 
                                    variant="solid" 
                                    onClick={() => {
                                        logout();
                                    }}
                                    >Logout</Button>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
        </div>
    )
}