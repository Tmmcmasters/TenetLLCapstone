"use client"


import React, { useState } from "react";
import { Spacer, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue, Input, Button, DropdownTrigger, Dropdown, DropdownMenu, DropdownItem, Chip, Pagination, Tooltip, SortDescriptor } from "@nextui-org/react";
import { EyeIcon } from "../../Icons/EyeIcon";
import { SearchIcon } from "../../Icons/SearchIcon";
import { columns, apartments } from "./apartmentData";
import { Apartment } from "../types";
import EditApartmentButton from "./editApartmentButton";
import DeleteApartmentButton from "./deleteApartmentButton";
import AddApartmentButton from "./addApartmentButton";


const INITIAL_VISIBLE_COLUMNS = ["name", "address", "description", "complexName"];

export default function ApartmentTable () {
    const [filterValue, setFilterValue] = React.useState("");
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 10;
    const pages = Math.ceil(apartments.length / rowsPerPage);
    const hasSearchFilter = Boolean(filterValue);

    const filteredItems = React.useMemo(() => {
        let filteredApartments = [...apartments];

        if (hasSearchFilter) {
            filteredApartments = filteredApartments.filter((Apartment) =>
            Apartment.name.toLowerCase().includes(filterValue.toLowerCase()),
            );
        }

        return filteredApartments;
    }, [apartments, filterValue]);

    const items = React.useMemo(() => {
        const firstRowIndex = (page - 1) * rowsPerPage;
        const lastRowIndex = firstRowIndex + rowsPerPage;

        return filteredItems.slice(firstRowIndex, lastRowIndex);
    }, [filteredItems, page]);

    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "id",
        direction: 'ascending',
    });

    const renderCell = (item: Apartment, columnKey: React.Key) => {
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
                        <EditApartmentButton apartmentRow={item} />
                        <DeleteApartmentButton apartmentRow={item} />
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
            <h1 className="text-3xl font-semibold mt-10">Apartments Table</h1>
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
             <AddApartmentButton />
            </div>
            <Table aria-label="Apartment table with dyamic content" bottomContent={
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
                <TableBody items={items} emptyContent="No apartments found :(" >
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