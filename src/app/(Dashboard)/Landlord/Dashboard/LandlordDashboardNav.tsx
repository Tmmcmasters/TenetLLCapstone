'use client'

import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, Link, Popover, PopoverTrigger, PopoverContent, Spacer } from "@nextui-org/react";

import { IoNotificationsOutline } from "react-icons/io5";
import NotificationBar from '../Components/notificationBar';
import DashLogOutPopover from '../Components/dashLogOutPopover';


export default function LandlordDashboardNav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);



    const menuItems = [
        "Apartments",
        "Complexes",
        "Logout",
    ]

    return (
        <Navbar>
            <NavbarContent>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className='sm:hidden' />
                <NavbarBrand >
                    <a className='underline text-3xl' href='/'>TicketPro</a>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify='center' className='hidden sm:flex gap-4'>
                <NavbarItem>
                    <Link color='foreground'>
                        Apartments
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color='foreground'>
                        Complexes
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify='end'>
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
                        {item === "Logout" ? <DashLogOutPopover /> : <Link color="foreground">{item}</Link>}
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

        </Navbar>
    )
}