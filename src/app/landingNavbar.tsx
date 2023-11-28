'use client'

import React from 'react';
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem, Button, Link} from "@nextui-org/react";
import { Nabla } from 'next/font/google';
import { link } from 'fs';

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
    <Navbar>
        <NavbarBrand >
            <p className=' text-3xl'>TicketPro</p>
        </NavbarBrand>
        <NavbarContent justify='end'>
                <NavbarItem>
                    <Button as={Link} href='#' color='primary' variant='flat'>Login</Button>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} href='#' color='success' variant='bordered'>Sign Up</Button>
                </NavbarItem>
            </NavbarContent>
    </Navbar>
    )
}