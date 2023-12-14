"use client"

import React, { useEffect, useState } from "react";
import { Spacer, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue, Input, Button, DropdownTrigger, Dropdown, DropdownMenu, DropdownItem, Chip, Pagination, Tooltip, SortDescriptor, CircularProgress } from "@nextui-org/react";
import { EyeIcon } from "../../Icons/EyeIcon";
import { DeleteIcon } from "../../Icons/DeleteIcon";
import { EditIcon } from "../../Icons/EditIcon";
import { SearchIcon } from "../../Icons/SearchIcon";
import { PlusIcon } from "../../Icons/PlusIcon";
import { capitalize } from "../utils";
import { columns } from "./complexData";
import AddComplexButton from "./addComplexButton";
import EditComplexbutton from "./editComplexButton";
import { Complex } from "../types";
import DeleteComplexButton from "./deleteComplexButton";
import { GetAllComplexesByLandlordId } from "@/app/(Dashboard)/actions/landlordDashController";


const INITIAL_VISIBLE_COLUMNS = ["name", "address", "description"];

export default function ComplexesTable(
    {
        landlordId
    }:
        {
            landlordId: number
        }
) {
    const [filterValue, setFilterValue] = React.useState("");
    const [page, setPage] = React.useState(1);
    const [loading, setLoading] = React.useState(true);
    const rowsPerPage = 10;
    const hasSearchFilter = Boolean(filterValue);
    const [complexes, setComplexes] = useState<Complex[]>([]);

    useEffect(() => {
        GetComplexes()
    }, []);

    async function GetComplexes() {
        setLoading(true)
        const response = await GetAllComplexesByLandlordId(landlordId);
        // console.log(response);
        const result = JSON.parse(response as string)
        // console.log("Here are the results: ")
        // console.log(result)
        setComplexes(result)
        setLoading(false)
    }
    const pages = Math.ceil(complexes.length / rowsPerPage);

    const filteredItems = React.useMemo(() => {
        let filteredComplexes = [...complexes];

        if (hasSearchFilter) {
            filteredComplexes = filteredComplexes.filter((Complex) =>
                Complex.name.toLowerCase().includes(filterValue.toLowerCase()),
            );
        }

        return filteredComplexes;
    }, [complexes, filterValue]);


    const items = React.useMemo(() => {
        const firstRowIndex = (page - 1) * rowsPerPage;
        const lastRowIndex = firstRowIndex + rowsPerPage;

        return filteredItems.slice(firstRowIndex, lastRowIndex);
    }, [filteredItems, page]);


    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "id",
        direction: 'ascending',
    });




    const renderCell = (item: Complex, columnKey: React.Key) => {
        const value = getKeyValue(item, columnKey);



        switch (columnKey) {
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="View Apartments" className="select-none">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                            </span>
                        </Tooltip>
                        <EditComplexbutton complexRow={item} getComplexes={GetComplexes} />
                        <DeleteComplexButton complexRow={item} getComplexes={GetComplexes} />
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
        <div className="flex flex-col w-[95vw] max-w-fit h-full justify-start items-center align-middle gap-2 ml-3 mr-3">
            <h1 className="text-3xl font-semibold mt-10">Complexes Table</h1>
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
                    isDisabled={loading}
                    onValueChange={(value) => onSearchChange(value)}
                />
                <AddComplexButton landlordId={landlordId} getComplexes={GetComplexes} />
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
                                wrapper: "min-h-[549px]",
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
                            <TableBody items={items} emptyContent="No complexes found :(" >
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
