'use client'

import React, { useEffect, useState } from "react";
import { Spacer, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue, Input, Button, DropdownTrigger, Dropdown, DropdownMenu, DropdownItem, Chip, Pagination, Tooltip, SortDescriptor, CircularProgress } from "@nextui-org/react";
import { EyeIcon } from "../../Icons/EyeIcon";
import { SearchIcon } from "../../Icons/SearchIcon";
import { columns } from "./apartmentData";
import { Apartment } from "../types";
import EditApartmentButton from "./editApartmentButton";
import DeleteApartmentButton from "./deleteApartmentButton";
import AddApartmentButton from "./addApartmentButton";
import { GetApartmentsByLandlordId } from "@/app/(Dashboard)/actions/landlordApartmentController";


// const INITIAL_VISIBLE_COLUMNS = ["name", "address", "description", "complexName"];

export default function ApartmentTable(
    {
        landlordId
    }: {
        landlordId: number
    }
) {
    const [filterValue, setFilterValue] = React.useState("");
    const [page, setPage] = React.useState(1);
    const [loading, setLoading] = React.useState(true);
    const rowsPerPage = 10;
    const hasSearchFilter = Boolean(filterValue);
    const [apartments, setApartments] = useState<Apartment[]>([]);
    const [gotNoValues, setGotNoValues] = useState(false);

 
       useEffect(() => {
        setTimeout(() => {
            GetApartments()
        }, 1000);
       }, []);
    

     async function GetApartments() {
        console.log("I am here")
        setLoading(true)
        const response =  await GetApartmentsByLandlordId(landlordId);
        const result = JSON.parse(response as string)

        setApartments(result)
        setLoading(false)
        console.log(result)
    }



    const pages = Math.ceil(apartments.length / rowsPerPage);

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
                        <Tooltip content="View Tenets" className="select-none">
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
        <div className="flex flex-col w-[95vw] max-w-fit  h-full justify-start items-center align-middle gap-2 ml-3 mr-3">
            <h1 className="text-3xl font-semibold mt-10">Apartments Table</h1>
            <Spacer y={3} />
            <div className="flex w-full justify-between">
                <Input
                    variant="flat"
                    placeholder="Search by name"
                    className="w-2/3"
                    size="sm"
                    startContent={<SearchIcon />}
                    isClearable
                    onClear={() => onClear()}
                    value={filterValue}
                    onValueChange={(value) => onSearchChange(value)}
                />
                <AddApartmentButton landlorId={landlordId} GetApartments={GetApartments} />
            </div>

            {
                loading ? (
                    <div className="flex flex-col w-fit h-[20%] justify-center items-center align-middle gap-2 ml-3 mr-3">
                        <CircularProgress color="secondary" aria-label="Loading" isIndeterminate size="lg" label="Loading..." />
                    </div>
                ) : (
                    <>


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
                    </>
                )
            }
        </div>
    )
}