'use client'

import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, Link, Popover, PopoverTrigger, PopoverContent, Spacer } from "@nextui-org/react";

import { IoNotificationsOutline } from "react-icons/io5";
import NotificationBar from '../../Components/notificationBar';
import DashLogOutPopover from '../../Components/dashLogOutPopover';


export default function LandlordDashboardNav({
    params,
}: {
    params: {
        landlordId: number
        }
}
) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);



    const menuItems = [
        "Apartments",
        "Complexes",
        "Tenets",
        "Logout",
    ]

    return (
        <Navbar>
            <NavbarContent>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className='sm:hidden' />
                <NavbarBrand >
                    <a className='underline text-3xl font-light' href='/Landlord/Dashboard'>TicketPro</a>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify='center' className='hidden sm:flex gap-8'>
                <NavbarItem>
                    <Link href='/Landlord/ViewApartments' color='foreground'>
                        Apartments
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href='/Landlord/ViewComplexes' color='foreground'>
                        Complexes
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href='/Landlord/ViewTenets' color='foreground'>
                        Tenets
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
                        {item === "Logout" ? <DashLogOutPopover /> : <Link href={"/Landlord/View" + item} color="foreground">{item}</Link>}
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

        </Navbar>
    )
}