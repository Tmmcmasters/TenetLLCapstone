"use client"
import React from "react"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Selection } from "@react-types/shared";
import { MdArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";


export default function DashTicketCardStatus() {
    const [selectedKey, setSelectedKey] = React.useState("New");

    const handleSelect = (key: Selection) => {
        const selectedKey = Array.from(key)[0];
        if (typeof selectedKey === 'string') {
            setSelectedKey(selectedKey);
        }
    }

    const getColor = (key: string) => {
        switch(key) {
            case 'New':
                return 'primary';
            case 'InProgress':
                return 'warning';
            case 'Resolved':
                return 'success';
            default:
                return 'primary';
        }
    }
    
    return (
        <div>
            <Dropdown>
                <DropdownTrigger>
                    <Button variant="bordered" className="font-semibold text-md" color={getColor(selectedKey)}>
                        {selectedKey} <MdOutlineArrowDropDownCircle style={{height: '20px', width: '20px'}} />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Status Dropdown"
                    variant="shadow"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={[selectedKey]}
                    onSelectionChange={handleSelect}
                >
                    <DropdownItem key="New" className="text-primary">New</DropdownItem>
                    <DropdownItem key="InProgress" className="text-warning">In Progress</DropdownItem>
                    <DropdownItem key="Resolved" className="text-success">Resolved</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
