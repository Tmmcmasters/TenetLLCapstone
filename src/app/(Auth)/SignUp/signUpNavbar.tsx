'use client'

import React from 'react';
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem, Button, Link} from "@nextui-org/react";
import { Nabla } from 'next/font/google';
import { link } from 'fs';

export default function SignUpNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
    <Navbar>
        <NavbarBrand >
            <a className='underline text-3xl' href='/'>TicketPro</a>
        </NavbarBrand>
        <NavbarContent justify='end'>
        <NavbarItem>
                    <Button as={Link} href='/Login/WhoAreYou' color='primary' variant='flat'>Login</Button>
                </NavbarItem>
            </NavbarContent>
    </Navbar>
    )
}