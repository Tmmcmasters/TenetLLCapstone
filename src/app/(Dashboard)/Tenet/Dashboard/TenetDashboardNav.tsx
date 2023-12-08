'use client'

import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, Link, Popover, PopoverTrigger, PopoverContent, Spacer } from "@nextui-org/react";

import { IoNotificationsOutline } from "react-icons/io5";
import NotificationBar from '../Components/notificationBar';
import DashLogOutPopover from '../Components/dashLogOutPopover';
import CreateRequestButton from '../Components/createRequestButton';


export default function TenetDashboardNav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);



    const menuItems = [
        "CreateRequest",
        "Logout",
    ]

    return (
        <Navbar>
            <NavbarContent>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className='sm:hidden' />
                <NavbarBrand >
                    <a className='underline text-3xl font-light' href='/Tenet/Dashboard'>TicketPro</a>
                </NavbarBrand>
            </NavbarContent>

            
            <NavbarContent justify='end'>
                <NavbarItem className='hidden sm:flex'>
                    <CreateRequestButton />
                </NavbarItem>
                <NavbarItem>
                    <Popover backdrop='opaque'>
                        <PopoverTrigger>
                            <Button color="primary" variant="solid" isIconOnly>
                                <IoNotificationsOutline style={{ height: '24px', width: '24px' }} />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <NotificationBar />
                        </PopoverContent>
                    </Popover>
                </NavbarItem>
                <NavbarItem className='hidden sm:flex'>
                    <DashLogOutPopover />
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={index}>
                        {
                        item === "Logout" ? <DashLogOutPopover /> : item === "CreateRequest" ? <CreateRequestButton /> : <Link href={"/Tenet/View" + item} color="foreground">{item}</Link>}
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

        </Navbar>
    )
}