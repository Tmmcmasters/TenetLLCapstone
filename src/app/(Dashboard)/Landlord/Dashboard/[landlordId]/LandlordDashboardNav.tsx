'use client'

import React, { useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, Link, Popover, PopoverTrigger, PopoverContent, Spacer, CircularProgress, Progress } from "@nextui-org/react";

import { IoNotificationsOutline } from "react-icons/io5";
import NotificationBar from '../../Components/notificationBar';
import DashLogOutPopover from '../../Components/dashLogOutPopover';
// import GetLandlordForDashboard from '@/app/(Dashboard)/(actions)/landlordDashController';
import { Landlord } from '@/lib/types';
import getUserSession from '@/app/(Auth)/(actions)';
import { GetLandlordByUserId } from '@/app/(Auth)/(actions)/landlordController';
import { redirect, useRouter } from 'next/navigation';


export default function LandlordDashboardNav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [landlord, setLandlord] = React.useState({} as Landlord);
    const [loading, setLoading] = React.useState(true);
    const router = useRouter();

    useEffect(() => {
        async function getLandlord() {
            const { data } = await getUserSession();
            // console.log(data)
            if (data.session == null) {
                router.replace("/Login/Landlord")
            } else {
                const userId = data.session?.user.id;
                if (userId) {
                    const response = await GetLandlordByUserId(userId);
                    const result = JSON.parse(response);
                    setLandlord(result);
                    setLoading(false);
                }
            }

            console.log()
            // setLandlord(landlord);
        }
        getLandlord();
    }, []);

    const menuItems = [
        "Apartments",
        "Complexes",
        "Tenets",
        "Logout",
    ]
if (loading) {
    return (
        <div className='flex justify-center h-[7vh] align-middle '>
            <Progress isIndeterminate color="primary" size='sm' aria-label='Loading'/>
        </div>
    )
    }
else  {
    return (
        <Navbar>
            <NavbarContent>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className='sm:hidden' />
                <NavbarBrand >
                    <a className='underline text-3xl font-light' href={`/Landlord/Dashboard/${landlord.id}`}>TicketPro</a>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify='center' className='hidden sm:flex gap-8'>
                <NavbarItem>
                    <Link href={`/Landlord/ViewApartments/${landlord.id}`} color='foreground'>
                        Apartments
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href={`/Landlord/ViewComplexes/${landlord.id}`} color='foreground'>
                        Complexes
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href={`/Landlord/ViewTenets/${landlord.id}`} color='foreground'>
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
                        {item === "Logout" ? <DashLogOutPopover /> : <Link href={"/Landlord/View" + item + "/" + landlord.id} color="foreground">{item}</Link>}
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

        </Navbar>
    )
                }
}