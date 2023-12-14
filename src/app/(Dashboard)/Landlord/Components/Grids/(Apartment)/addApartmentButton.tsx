import { Button, Checkbox, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, Textarea, useDisclosure } from "@nextui-org/react";
import { PlusIcon } from "../../Icons/PlusIcon";
import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import { Complex } from "../types";
import { GetAllComplexesByLandlordId } from "@/app/(Dashboard)/actions/landlordComplexController";


export default function AddApartmentButton (
    {
        landlorId,
        GetApartments
    }:
    {
        landlorId: number,
        GetApartments: () => void
    }
) {
    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
    const [complexes, setComplexes] = useState([] as Complex[]);
    
    useEffect(() => {
        async function GetComplexesByLandlord(landlordId:number) {
                const response = await GetAllComplexesByLandlordId(landlordId);
                if (response) {
                    const complexes = JSON.parse(response as string);
                    setComplexes(complexes);
                } else {
                    toast.error("Could not get complexes. Please add complexes first", {
                        duration: 6000,
                    });
                }
        }

        GetComplexesByLandlord(landlorId);
    }, [])


    return (
        <div className="w-full flex justify-end">
            <Button className="w-2/8" size="lg" color="success" variant="ghost" endContent={<PlusIcon />} onPress={onOpen}>Add Apartment</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placeholder="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className="flex flex-col gap-1">Add Apartment</ModalHeader><ModalBody>
                            <Input
                                label="Apartment Number"
                                type="number"
                                placeholder="Enter apartment number"
                                variant="bordered"
                                isRequired
                            />
                            <Select
                                label="Select Complex"
                                placeholder="Select Complex"
                                variant="bordered"
                                items={complexes}
                                isRequired
                            >
                                {(complex) => <SelectItem key={complex.id}> {complex.name}</SelectItem>}
                            </Select>
                            <Input
                                autoFocus
                                label="Apartment Name"
                                placeholder="Enter apartment name"
                                variant="bordered"
                            />
                            <Input
                                label="Address"
                                type="address"
                                placeholder="Enter address"
                                variant="bordered"
                                isRequired
                            />
                            <Textarea
                                label="Description"
                                placeholder="Enter description"
                                variant="bordered"
                                required
                            />
                            <div className="flex flex-row justify-start">
                            <Checkbox size="md">Add Another</Checkbox>
                            </div>
                        </ModalBody>
                        <ModalFooter className="w-full flex justify-between">
                            <div >
                                <Button
                                    size="md"
                                    variant="bordered"
                                    color="warning"
                                    onPress={onClose}
                                >
                                    Cancel
                                </Button>
                                </div>
                                <div className="flex flex-row gap-1">
                                <Button
                                    size="md"
                                    color="success"
                                    variant="ghost"
                                    onPress={onClose}
                                >
                                    Save
                                </Button>
                                </div>
                        </ModalFooter>
                        </>
                    )
                    
                    }
                </ModalContent>

            </Modal>
        </div>
    )
}