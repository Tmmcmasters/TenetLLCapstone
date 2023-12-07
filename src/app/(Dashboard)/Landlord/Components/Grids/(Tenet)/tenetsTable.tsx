"use client"

import React, { useState } from "react";
import { Spacer, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue, Input, Button, DropdownTrigger, Dropdown, DropdownMenu, DropdownItem, Chip, Pagination, Tooltip, SortDescriptor } from "@nextui-org/react";
import { EyeIcon } from "../../Icons/EyeIcon";
import { SearchIcon } from "../../Icons/SearchIcon";
import { Tenet } from "../types";
import { columns, tenets } from "./tenetData";
import EditTenetbutton from "./editTenetButton";
import DeleteTenetButton from "./deleteTenetButton";
import AddTenetButton from "./addTenetButton";



export default function TenetsTable () {
    const [filterValue, setFilterValue] = React.useState("");
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 10;
    const pages = Math.ceil(tenets.length / rowsPerPage);
    const hasSearchFilter = Boolean(filterValue);


    const filteredItems = React.useMemo(() => {
        let filteredTenets = [...tenets];

        if (hasSearchFilter) {
            filteredTenets = filteredTenets.filter((Tenet) =>
            Tenet.fullName.toLowerCase().includes(filterValue.toLowerCase()),
            );
        }

        return filteredTenets;
    }, [tenets, filterValue]);

    const items = React.useMemo(() => {
        const firstRowIndex = (page - 1) * rowsPerPage;
        const lastRowIndex = firstRowIndex + rowsPerPage;

        return filteredItems.slice(firstRowIndex, lastRowIndex);
    }, [filteredItems, page]);

    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "id",
        direction: 'ascending',
    });

    const renderCell = (item: Tenet, columnKey: React.Key) => {
        const value = getKeyValue(item, columnKey);



        switch (columnKey) {
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="View Tenets">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                            </span>
                        </Tooltip>
                        <EditTenetbutton tenetRow={item} />
                        <DeleteTenetButton tenetRow={item} />
                    </div>
                );
            default:
                return value;
        }
    };

    const onSearchChange = React.useCallback((value?: string) => {
        if (value) {
                setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const onClear = React.useCallback(() => {
        setFilterValue("")
        setPage(1)
    }, [])


    return (
        <div className="flex flex-col w-fit h-full justify-start items-center align-middle gap-2 ml-3 mr-3">
            <h1 className="text-3xl font-semibold mt-10">Tenets Table</h1>
            <Spacer y={3} />
            <div className="flex w-full justify-between">
                <Input
                    variant="flat"
                    placeholder="Search by name"
                    className="w-1/3"
                    size="sm"
                    startContent={<SearchIcon />}
                    isClearable
                    onClear={() => onClear()}
                    value={filterValue}
                    onValueChange={(value) => onSearchChange(value)}
                />
                <AddTenetButton />
            </div>
            <Table aria-label="Complex table with dyamic content" bottomContent={
                <div className="flex w-full justify-center">
                    <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="secondary"
                        page={page}
                        total={pages}
                        onChange={(page) => setPage(page)}
                    />
                </div>
            }
                classNames={{
                    wrapper: "min-h-[222px]",
                }}
                selectionMode="single"
            >
                <TableHeader columns={columns} >
                    {(column) => <TableColumn
                        className="text-medium"
                        key={column.key}
                    
                    >
                        {column.name}
                    </TableColumn>}
                </TableHeader>
                <TableBody items={items} emptyContent="No tenets found :(" >
                    {(item) => (
                        <TableRow key={item.id} >
                            {(columnKey) => <TableCell className="pb-2 pt-2">{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}