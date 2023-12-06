"use client"

import React from "react";
import { Spacer, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue, Input, Button, DropdownTrigger, Dropdown, DropdownMenu, DropdownItem, Chip, Pagination, Tooltip } from "@nextui-org/react";
import { EyeIcon } from "../Icons/EyeIcon";
import { DeleteIcon } from "../Icons/DeleteIcon";
import { EditIcon } from "../Icons/EditIcon";
import { capitalize } from "./utils";
import { columns, rows } from "./complexData";


const INITIAL_VISIBLE_COLUMNS = ["name", "address", "description"];

export default function ComplexesTable() {

    const renderCell = (item: any, columnKey: React.Key) => {
        const value = getKeyValue(item, columnKey);

        switch (columnKey) {
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="View Apartments">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                            </span>
                        </Tooltip>
                        <Tooltip content="Edit Complex">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EditIcon />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete Complex">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return value;
        }
    };




    return (
        <div className="flex flex-col w-fit h-full justify-start items-center align-middle gap-6 ml-3 mr-3">
            <h1 className="text-3xl font-semibold mt-10">Complexes Table</h1>
            <Table aria-label="Complex table with dyamic content">
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.name}</TableColumn>}
                </TableHeader>
                <TableBody items={rows} emptyContent="No complexes found :(">
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}