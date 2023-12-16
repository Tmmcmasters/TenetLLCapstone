"use client"

import React, { useState, useEffect } from "react";
import { Spacer, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue, Input, Button, DropdownTrigger, Dropdown, DropdownMenu, DropdownItem, Chip, Pagination, Tooltip, SortDescriptor, CircularProgress } from "@nextui-org/react";
import { EyeIcon } from "../../Icons/EyeIcon";
import { SearchIcon } from "../../Icons/SearchIcon";
import { Tenet } from "../types";
import { columns } from "./tenetData";
import EditTenetbutton from "./editTenetButton";
import DeleteTenetButton from "./deleteTenetButton";
import AddTenetButton from "./addTenetButton";
import { GetTenetsByLandlordId } from "@/app/(Dashboard)/actions/landlordTenetController";



export default function TenetsTable({
    landlordId
}: {
    landlordId: number
}
) {
    const [filterValue, setFilterValue] = React.useState("");
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 10;
    const hasSearchFilter = Boolean(filterValue);
    const [loading, setLoading] = React.useState(true);
    const [tenets, setTenets] = useState<Tenet[]>([]);

    useEffect(() => {
        setTimeout(() => {
            GetTenets();
        }, 1000);
    }, []);

    async function GetTenets() {
        setLoading(true)
        const response = await GetTenetsByLandlordId(landlordId);
        const result = JSON.parse(response as string);
        // console.log(result)

        setTenets(result)
        setLoading(false)
    }



    const pages = Math.ceil(tenets.length / rowsPerPage);

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
                        <Tooltip content="More Info">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                            </span>
                        </Tooltip>
                        <EditTenetbutton tenetRow={item} GetTenets={GetTenets} landlordId={landlordId}/>
                        <DeleteTenetButton tenetRow={item} GetTenets={GetTenets}/>
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
                    className="w-2/3"
                    size="sm"
                    startContent={<SearchIcon />}
                    isClearable
                    onClear={() => onClear()}
                    value={filterValue}
                    onValueChange={(value) => onSearchChange(value)}
                />
                <AddTenetButton GetTenets={GetTenets} landlordId={landlordId}/>
            </div>

            {
                loading ? (
                    <div className="flex flex-col w-fit h-[20%] justify-center items-center align-middle gap-2 ml-3 mr-3">
                        <CircularProgress color="secondary" aria-label="Loading" isIndeterminate size="lg" label="Loading..." />
                    </div>
                ) : (
                    <>
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
                    </>
                )
            }
        </div>
    )
}